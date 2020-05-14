import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
// import * as css from '../styles/Profile.m.css';
import TextInput from "@dojo/widgets/text-input";
// import Checkbox from '@dojo/widgets/checkbox';
// import Textarea from '@dojo/widgets/text-area';
// import SelectFromURL from '.././modules/SelectFromURL';
// //import Lbox from '.././modules/ListboxUri';
import watch from "@dojo/framework/core/decorators/watch";
// import ToolBar from '@dojo/widgets/toolbar';
// import Icon from '.././Icon/Icon';
// // // import SBar from '@dojo/widgets/snackbar';
// import TitlePane from '@dojo/widgets/title-pane';
import Menu from ".././Menu";
//import { stringify } from "querystring";

export default class SelectVehicle extends WidgetBase {
  private Vehicles = [] as any[];

  @watch() TextSearch: string = "";

  onAttach() {
    this.Vehicles.push(v("div", {}, ["Primer registro"]));

    setInterval(() => {
      console.log(this.Vehicles.length);
      this.invalidate();
    }, 5000);
  }

  async GetVehicles() {
    this.Vehicles = [];

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
      let data = await res.json();
      //		this._fetcher = createFetcher(data);
      console.log(data);
      if (Array.isArray(data)) {
        data.forEach((element: any) => {
          console.log(element);
          this.Vehicles.push(v("div", {}, [element.licence_plate]));
          //this.invalidate();
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
          label: "Buscar",
          onChange: async (val) => {
            console.log(JSON.stringify(val));
            this.TextSearch = val as string;
			this.invalidate();
			await this.GetVehicles();
          },
        },
        []
      ),
      v("div", {}, this.Vehicles),
    ]);
  }
}
