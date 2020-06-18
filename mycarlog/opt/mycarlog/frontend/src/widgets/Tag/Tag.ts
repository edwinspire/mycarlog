import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";

export interface TagProperties {
  left: { label: any };
  rigth: { label: any; class?: string };
}

export default class Tag extends WidgetBase<TagProperties> {
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
        v("div", { classes: ["tags has-addons"] }, [
          v("span", { classes: ["tag"] }, [this.properties.left.label]),
          v("span", { classes: ["tag", this.properties.rigth.class] }, [
            this.properties.rigth.label
          ]),
        ]),
      ]
    );
  }
}
