import { v } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./SelectRemoteSource.m.css";

export interface SelectRemoteSourceProperties {
  url: string;
  label: string;
  value?: string;
  params?: any;
  onValue?(Value: any): void;
}

export interface SelectOption {
  label: string;
  value: string;
  disabled: boolean;
}

export default class SelectRemoteSource extends WidgetBase<
  SelectRemoteSourceProperties
> {
  private RemoteOptions: SelectOption[] = [];
  private Options: any[] = [];

  public async onAttach() {
    try {
      let f = await fetch(this.properties.url, {
        method: "POST",
        body: JSON.stringify(this.properties.params),
        headers: { "Content-Type": "application/json" },
      });
      if (f.status == 200) {
        let d = await f.json();
        this.RemoteOptions = d as SelectOption[];
        this.Options = [];
        await this.RemoteOptions.forEach((option, index) => {
          this.Options.push(
            v("option", { value: option.value }, [option.label])
          );
          this.invalidate();
        });

        console.log("Opciones", this.Options.length);
      } else if (f.status == 401) {
        window.location.href = "/#login";
      }
    } catch (e) {
      console.log(e);
      this.invalidate();
    }
  }

  protected render() {
    return v("span", {}, [
      v("div", { classes: ["field"] }, [
        v("label", { classes: ["label", "is-small"] }, [this.properties.label]),
        v("div", { classes: ["control", "is-small"] }, [
          v("div", { classes: ["select is-small", css.full_width] }, [
            v(
              "select",
              {
                onchange: (e: Event) => {
                  this.properties.onValue &&
                    this.properties.onValue(e.returnValue as any);
                  console.log("Click", e.target, e);
                },
              },
              this.Options 
            ),
          ]),
        ]),
      ]),
    ]);
  }
}
