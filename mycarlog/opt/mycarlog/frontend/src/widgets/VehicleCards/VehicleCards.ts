import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import TextInput from "@dojo/widgets/text-input";
import Menu from ".././Menu";
import CardVehicle from ".././VehicleCard/VehicleCard";
//import { add } from "@dojo/framework/stores/state/operations";

export default class SelectVehicle extends WidgetBase {
  private Vehicles = [] as any[];

  private TextSearch: string = "";

  async GetVehicles() {
    const { path } = window.GlobalStore;
    //apply([add(path("root", "user", "token"), "sdsdasdassdasdasdad")], true);

  //  console.log(window.GlobalStore.get(path("root", "user", "token")));
    let idaccount = window.GlobalStore.get(path("root", "user", "idaccount"));

    // this.Vehicles.push(w(CardVehicle, {
    //   idvehicle: "",
    //   name: "name",
    //   color: "color",
    //   lfname: "element.lfname",
    //   fueltype: "element.fueltype",
    //   license_plate: "element.license_plate",
    //   vin: "element.vin",
    //   year: "element.year",
    //   fuel_tank_capacity: "element.fuel_tank_capacity",
    // }));

    try {
      const res = await fetch("/vehicles", {
        method: "POST",
        body: JSON.stringify({
          idaccount: idaccount,
          Search: this.TextSearch,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 200) {
        this.Vehicles = [];
        let data = await res.json();
        //		this._fetcher = createFetcher(data);
        console.log(data);
        if (Array.isArray(data)) {
          data.forEach((element: any, index) => {
            console.log(element.license_plate);
            this.Vehicles.push(
              w(CardVehicle, {
                idvehicle: element.idvehicle,
                name: element.name,
                color: element.color,
                lfname: element.lfname,
                fueltype: element.fueltype,
                license_plate: element.license_plate,
                vin: element.vin,
                year: element.year,
                fuel_tank_capacity: element.fuel_tank_capacity,
              })
            );
            this.invalidate();
          });
        }

        this.invalidate();
      }
    } catch (err) {
      console.log(err);
    }
  }

  protected render() {
    return v("div", {}, [
      w(Menu, {}),
      w(
        TextInput,
        {
          label: "Buscar",
          value: this.TextSearch,
          onChange: (v) => {
            console.log(JSON.stringify(v));
            this.TextSearch = v as string;
            this.Vehicles.push("Pude cambiar");
            this.invalidate();
            this.GetVehicles().then(() => {
              console.log("invalida al terminar de obtener los vehiculos");
              this.invalidate();
            });
          },
        },
        []
      ),
      v("div", {}, this.Vehicles),
    ]);
  }
}
