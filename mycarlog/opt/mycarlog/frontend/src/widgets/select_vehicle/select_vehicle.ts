import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import TextInput from "@dojo/widgets/text-input";
//import watch from "@dojo/framework/core/decorators/watch";
import Menu from ".././Menu";

export default class SelectVehicle extends WidgetBase {
  private Vehicles = [] as any[];

  private TextSearch: string = "";

  onAttach() {
    this.Vehicles.push(v("div", {}, ["Primer registro"]));

    setInterval(() => {
      console.log(this.Vehicles.length);
      this.invalidate();
    }, 5000);
    this.invalidate();
  }

  async GetVehicles() {
    this.Vehicles = [];

    const res = await fetch("/vehicles", {
      method: "POST",
      body: JSON.stringify({
        idaccount: localStorage.getItem("idaccount"),
        Search: this.TextSearch
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      let data = await res.json();
      //		this._fetcher = createFetcher(data);
      console.log(data);
      if (Array.isArray(data)) {
        data.forEach((element: any) => {
          console.log(element);
          this.Vehicles.push(v("div", {}, [element.licence_plate]));
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
          label: "BuscarB",
          value: this.TextSearch,
          onChange: (v) => {
            console.log(JSON.stringify(v));
            this.TextSearch = v as string;
            this.GetVehicles();
            this.invalidate();
          },
        },
        []
      ),
      v("div", {}, this.Vehicles),
    ]);
  }
}
