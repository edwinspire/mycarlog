import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";

export interface InputProperties {
  label?: string;
  value?: string;
  onValue?(value: any): void;
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
          v("label", { classes: ["label", "is-small"] }, [this.properties.label]),
          v("div", { classes: ["control", "is-small"] }, [
            v("input", {
              placeholder: "Prueba input",
              classes: ["input", "is-small"], 
            }),
          ]),
        ]),
      ]
    );
  }
}
