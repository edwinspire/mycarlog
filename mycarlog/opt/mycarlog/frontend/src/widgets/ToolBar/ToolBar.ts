import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./ToolBar.m.css";
//import TextInput from "@dojo/widgets/text-input";
//import watch from "@dojo/framework/core/decorators/watch";
//import { bottom } from "@dojo/widgets/theme/dojo/slide-pane.m.css";

export interface ToolBarProperties {
  title?: string;
  ShowSearch?: boolean;
  ShowNew?: boolean;
  ShowEdit?: boolean;
  ShowDelete?: boolean;
  ShowSave?: boolean;
  onSearch?(search: string): void;
  onNew?(): void;
  onEdit?(): void;
  onDelete?(): void;
  onSave?(): void;
  customActions?: any[];
}

export default class ToolBar extends WidgetBase<ToolBarProperties> {
  //private clase = "fa-car-side";
  //@watch() private Data: ToolBarProperties = this.properties;
  private text_search: string = "";
  private bottoms: any[] = [];

  onAttach() {
    let tbActions: any = [];

    console.log(this.properties);

    if (this.properties.ShowNew) {
      tbActions.push(
        v("a", { classes: [] }, [
          v(
            "span",
            {
              onclick: (e: Event) => {
                this.properties.onNew && this.properties.onNew();
              },
            },
            [v("i", { classes: ["fas fa-file"] })]
          ),
        ])
      );
    }

    if (this.properties.ShowEdit) {
      tbActions.push(
        v("a", { classes: [] }, [
          v(
            "span",
            {
              onclick: (e: Event) => {
                this.properties.onEdit && this.properties.onEdit();
              },
            },
            [v("i", { classes: ["fas fa-edit"] })]
          ),
        ])
      );
    }

    if (this.properties.ShowSave) {
      tbActions.push(
        v("a", { classes: [] }, [
          v(
            "span",
            {
              onclick: (e: Event) => {
                this.properties.onSave && this.properties.onSave();
              },
            },
            [v("i", { classes: ["fas fa-save"] })]
          ),
        ])
      );
    }

    if (this.properties.ShowDelete) {
      tbActions.push(
        v("a", { classes: [] }, [
          v(
            "span",
            {
              onclick: (e: Event) => {
                this.properties.onDelete && this.properties.onDelete();
              },
            },
            [v("i", { classes: ["fas fa-trash"] })]
          ),
        ])
      );
    }

    console.log(tbActions.length);

    if (
      this.properties.customActions &&
      this.properties.customActions.length > 0
    ) {
      this.properties.customActions.forEach((item) => {
        tbActions.push(item);
      });
    }

    console.log(tbActions);

    if (this.properties.ShowSearch) {
      tbActions.push(
        v("input", {
          classes: [],
          oninput: (e: Event) => {
            this.text_search = (e.target as HTMLInputElement).value;
          },
        })
      );
      tbActions.push(
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
        ])
      );
    }

    if (this.properties.title) {
      this.bottoms.push(
        v("a", { classes: [css.active] }, [this.properties.title])
      );
    }

    this.bottoms.push(v("div", { classes: [css.topnav_right] }, tbActions));
    this.invalidate();
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

    return v("div", { classes: css.topnav }, this.bottoms);
  }
}
