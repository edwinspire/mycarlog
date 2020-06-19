import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";

export interface TextareaProperties {
  label?: string;
  value?: string;
  onValue?(value: any): void;
}

export default class Textarea extends WidgetBase<TextareaProperties> {
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
          v("label", { classes: ["label", "is-small"] }, [
            this.properties.label,
          ]),
          v("div", { classes: ["control"] }, [
            v(
              "textarea",
              {
                placeholder: "Prueba Textarea",
                classes: ["input", "is-small"],
              },
              [this.properties.value]
            ),
          ]),
        ]),
      ]
    );
  }
}
