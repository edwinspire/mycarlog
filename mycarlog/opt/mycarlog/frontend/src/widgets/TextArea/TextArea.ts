import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";

export interface TextareaProperties {
  label?: string;
  value?: string;
  rows?: number;
  cols?: number;
  required?: boolean;
  placeholder?: string;
  onValue?(value: any): void;
}

export default class Textarea extends WidgetBase<TextareaProperties> {
  protected render() {
    return v("span", {}, [
      v("div", { classes: ["field"] }, [
        v("label", { classes: ["label", "is-small"] }, [this.properties.label]),
        v("div", { classes: ["control"] }, [
          v(
            "textarea",
            {
              rows: this.properties.rows,
              cols: this.properties.cols,
              required: this.properties.required,
              placeholder: this.properties.placeholder,
              classes: ["textarea", "is-small"],
              value: this.properties.value,
              onchange: (e) => {
                this.properties.onValue &&
                  this.properties.onValue(e.target.value);
                console.log("Click");
              },
            },
            [this.properties.value]
          ),
        ]),
      ]),
    ]);
  }
}
