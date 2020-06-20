import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";

export interface InputProperties {
  label?: string;
  value?: string;
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
  placeholder?: string;
  required?: boolean;
  max?: number | Date;
  min?: number | Date;
  onValue?(value: any): void;
}

export default class Input extends WidgetBase<InputProperties> {
  protected render() {
    return v("span", {}, [
      v("div", { classes: ["field"] }, [
        v("label", { classes: ["label", "is-small"] }, [this.properties.label]),
        v("div", { classes: ["control", "is-small"] }, [
          v("input", {
            max: this.properties.max,
            min: this.properties.min,
            required: this.properties.required,
            value: this.properties.value,
            placeholder: this.properties.placeholder || "",
            type: this.properties.type || "text",
            classes: ["input", "is-small"],
            onchange: (e) => {
              console.log(e);
              this.properties.onValue &&
                this.properties.onValue(e.target.value);
            },
          }),
        ]),
      ]),
    ]);
  }
}
