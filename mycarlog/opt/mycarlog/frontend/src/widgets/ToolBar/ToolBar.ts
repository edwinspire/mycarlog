import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./ToolBar.m.css";
//import TextInput from "@dojo/widgets/text-input";
import watch from "@dojo/framework/core/decorators/watch";

export interface ToolBarProperties {
  title: string;
  onSearch?(search: string): void;
}

export default class ToolBar extends WidgetBase<ToolBarProperties> {
  //private clase = "fa-car-side";
  @watch() private Data: ToolBarProperties = this.properties;
  private text_search: string = "";

  onAttach() {
    console.log(this.properties, this.Data);
  }

  protected render() {
    /*
    <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div class="topnav-right">
    <a href="#search">Search</a>
    <a href="#about">About</a>
  </div>
</div>
    */

    return v("div", { classes: css.topnav }, [
      v("a", { classes: [css.active] }, [this.properties.title]),
      // v("a", { classes: [] }, ["Dos"]),
      v("div", { classes: [css.topnav_right] }, [
        v("a", { classes: [] }, [v("i", { classes: ["fas fa-save"] })]),
        v("input", {
          classes: [],
          oninput: (e: Event) => {
            this.text_search = (e.target as HTMLInputElement).value;
          },
        }),
        v("a", { classes: [] }, [
          v(
            "span",
            {
              onclick: (e: Event) => {
                console.log("Click en buscar", this.text_search);
                this.properties.onSearch &&
                  this.properties.onSearch(this.text_search);
              },
            },
            [v("i", { classes: ["fas fa-search"] })]
          ),
        ]),
      ]),
    ]);
  }
}
