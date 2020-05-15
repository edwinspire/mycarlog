import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import TextInput from "@dojo/widgets/text-input";
//import watch from "@dojo/framework/core/decorators/watch";
import Menu from ".././Menu";
import CardVehicle from ".././VehicleCard/VehicleCard";


export default class SelectVehicle extends WidgetBase {
  private Vehicles = [] as any[];

  private TextSearch: string = "";

  async GetVehicles() {
    const res = await fetch("/vehicles", {
      method: "POST",
      body: JSON.stringify({
        idaccount: localStorage.getItem("idaccount"),
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
            w(CardVehicle, {}, [element.license_plate + " " + element.vin])
          );
          //  this.Vehicles.push(v("div", {}, ['Hola' + index]));
          this.invalidate();
        });
      }

      this.invalidate();
    }
  }

  protected render() {
    return v("div", {}, [
      w(Menu, {}),
      w(
        TextInput,
        {
          label: "BuscarZ",
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
