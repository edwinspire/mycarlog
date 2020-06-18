import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";

export interface InputProperties {
  label?: string;
}

export default class Input extends WidgetBase<InputProperties> {
  protected render() {
    return v(
      "span",
      {
        classes: [],
        onclick: (e: Event) => {
          //this.properties.onClick && this.properties.onClick(e);
          console.log("Click");
        },
      },
      [
        v("div", { classes: ["field"] }, [
          v("label", { classes: ["label"] }, ["Hola"]),
          v("div", { classes: ["control", 'is-small'] }, [
            v("input", { placeholder: 'Prueba input',  classes: ["input", 'is-small'] }),
          ]),
        ]),
      ]
    );
  }
}
