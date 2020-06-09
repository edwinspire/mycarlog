import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
//import TextInput from "@dojo/widgets/text-input";
import Menu from ".././Menu/Menu";
import ToolBar from ".././ToolBar/ToolBar";
import CardVehicle from ".././VehicleCard/VehicleCard";
//import { searchIcon } from "@dojo/widgets/theme/dojo/icon.m.css";
//import { toggleSwitch } from '@dojo/themes/dojo/checkbox.m.css';
//import { add } from "@dojo/framework/stores/state/operations";

export default class SelectVehicle extends WidgetBase {
  private Vehicles = [] as any[];

  //private TextSearch: string = "";

  async GetVehicles(text: string) {
    const { path } = window.GlobalStore;
    let idaccount = window.GlobalStore.get(path("root", "user", "idaccount"));

    try {
      const res = await fetch("/vehicles", {
        method: "POST",
        body: JSON.stringify({
          idaccount: idaccount,
          Search: text,
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
      w(ToolBar, {
        title: "Vehículos",
        onSearch: (text) => {
          console.log(text);
          this.GetVehicles(text).then(() => {
            console.log("invalida al terminar de obtener los vehiculos");
            this.invalidate();
          });
        },
      }),
     /*  w(
        TextInput,
        {
          value: this.TextSearch,
          onValue: (v) => {
            console.log(JSON.stringify(v));
            this.TextSearch = v as string;
            this.invalidate();
            this.GetVehicles().then(() => {
              console.log("invalida al terminar de obtener los vehiculos");
              this.invalidate();
            });
          },
        },
        [{ label: "Buscar" }]
      ), */
      v("div", {}, this.Vehicles),
    ]);
  }
}
