import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./CheckBox.m.css";

export interface CheckBoxProperties {
  label?: string;
  value?: boolean;
  required?: boolean;
  onValue?(value: boolean): void;
}

export default class CheckBox extends WidgetBase<CheckBoxProperties> {
  private classCheckBox = ["fas", "fa-square", css.icon];
  private idCheckbox =
    "WidgetCheckBox" + (Math.floor(Math.random() * 100000) + 1);
  private Checked = this.properties.value;

  private oncheck() {
    console.log(this.Checked);
    this.properties.onValue && this.properties.onValue(this.Checked as boolean);
    if (this.Checked) {
      this.classCheckBox = ["fas", "fa-check-square", css.icon];
    } else {
      this.classCheckBox = ["fas", "fa-square", css.icon];
    }
    this.invalidate();
  }

  protected render() {
    return v("span", {}, [
      v("div", { classes: ["field"] }, [
        v("label", { for: this.idCheckbox, classes: ["label", "is-small"] }, [
          this.properties.label,
        ]),
        v("div", { classes: ["control"] }, [
          v("input", {
            id: this.idCheckbox,
            type: "checkbox",
            required: this.properties.required,
            checked: this.Checked,
            classes: [css.input_hidden],
            onchange: (e) => {
              console.log(e);
              this.Checked = e.target.checked;
              this.oncheck();
            },
          }),
          v("i", {
            classes: this.classCheckBox,
            onclick: (e) => {
              console.log(e);
              this.Checked = !this.Checked;
              this.oncheck();
            },
          }),
        ]),
      ]),
    ]);
  }
}
