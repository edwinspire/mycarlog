import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./VehicleCard.m.css";
import Card from "@dojo/widgets/card";
import Icon from ".././Icon/Icon";
import watch from "@dojo/framework/core/decorators/watch";
import { add } from "@dojo/framework/stores/state/operations";

export interface VehicleCardProperties {
  idvehicle: number;
  idaccount?: number;
  account?: string;
  idcontact?: string;
  license_plate: string;
  year: string;
  fuel_tank_capacity: string;
  vin: string;
  name: string;
  idvehicletype?: string;
  mark?: string;
  model?: string;
  color: string;
  fueltype: string;
  unit_measure_fuel_tank?: string;
  lfname: string;
}

export default class VehicleCard extends WidgetBase<VehicleCardProperties> {
  private clase = "fa-car-side";
  @watch() private Data: VehicleCardProperties = this.properties;

  onAttach() {
    this.Data = this.properties;
    this.Data.idaccount = window.GlobalStore.get(
      window.GlobalStore.path(
        "root",
        "user",
        "preferences",
        "last_vehicle_selected",
        "idvehicle"
      )
    );
    this.invalidate();
  }

  protected render() {
    return v("div", { classes: css.container }, [
      v("div", { classes: [css.column] }, [
        v("div", {}, [
          w(Card, {}, [
            v(
              "div",
              {
                onclick: () => {
                  const { path, apply } = window.GlobalStore;
                  apply(
                    [
                      add(
                        path(
                          "root",
                          "user",
                          "preferences",
                          "last_vehicle_selected",
                          "idvehicle"
                        ),
                        this.Data.idvehicle
                      ),
                    ],
                    true
                  );
                  console.log("Se ha presionado", this.Data);
                  this.invalidate();
                },
              },
              [
                w(Icon, {
                  label:
                    this.Data.name ||
                    this.Data.license_plate + " - " + this.Data.vin,
                  classes: [this.clase, "far", css.title],
                  ShowLabel: true,
                }),
                v("div", {}, [
                  v("img", { classes: [css.image] }, []),
                  v("div", {}, [
                    v("div", {}, [
                      v("div", {}, [
                        v("span", { classes: [css.label] }, ["VIN: "]),
                        v("span", {}, [this.Data.vin]),
                      ]),
                      v("div", {}, [
                        v("span", { classes: [css.label] }, ["Año: "]),
                        v("span", {}, [this.Data.year]),
                      ]),
                      v("div", {}, [
                        v("span", { classes: [css.label] }, ["Propietario: "]),
                        v("span", {}, [this.Data.lfname]),
                      ]),
                      v("div", {}, [
                        v("span", { classes: [css.label] }, [
                          "Tipo combustible: ",
                        ]),
                        v("span", {}, [this.Data.fueltype]),
                      ]),
                      v("div", {}, [
                        v("span", {}, ["Color: "]),
                        v("span", {}, [this.Data.color]),
                      ]),
                    ]),
                  ]),
                  v("div", {}, ["Piecito"]),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ]);
  }
}
