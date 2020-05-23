import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./VehicleCard.m.css";
import Card from "@dojo/widgets/card";
import Icon from ".././Icon/Icon";
import UserPreferences, {
  UserPreferencesProperties,
} from ".././UserPreferences/UserPreferences";
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
  clase = "fa-car-side";
  @watch() private Data: VehicleCardProperties = this.properties;
  private favorite: UserPreferencesProperties = {
    preference: { name: "Date", value: Date.now },
  };

  onAttach() {
    this.Data = this.properties;

    this.Data.idaccount = window.GlobalStore.get(
      window.GlobalStore.path(
        "root",
        "user",
        "preferences",
        "last_vehicle",
        "idvehicle"
      )
    );

    window.onstorage = (e: any) => {
      console.log(
        "The " +
          e.key +
          " key has been changed from " +
          e.oldValue +
          " to " +
          e.newValue +
          ".",
        e
      );
      this.Data.name = e.newValue;
      this.invalidate();
    };

    this.invalidate();
  }

  protected render() {
    return v("div", { classes: css.container }, [
      v("div", { classes: [css.column] }, [
        v(
          "div",
          {
            onclick: (e) => {
              console.log(e);
              this.Data.color = "prueba";
              this.invalidate();
            },
          },
          [
            w(Card, {}, [
              w(Icon, {
                label:
                  this.Data.name ||
                  this.Data.license_plate + " - " + this.Data.vin,
                classes: [this.clase, "far", css.title],
                ShowLabel: true,
                onClick: () => {
                  const { path, apply } = window.GlobalStore;
                  apply(
                    [
                      add(
                        path(
                          "root",
                          "user",
                          "preferences",
                          "last_vehicle",
                          "idvehicle"
                        ),
                        this.Data.idvehicle
                      ),
                    ],
                    true
                  );

                  //window.location.href = "/#contacts";
                  this.clase = "fa-star";
                  console.log("Se ha presionado", this.Data);
                  this.favorite.preference = {
                    name: "last_vehicle_selected",
                    value: this.Data.idvehicle,
                  };
                  this.invalidate();
                },
              }),
              v("div", {}, [
                // v("div", {}, [this.properties.license_plate]),
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
                v(
                  "div",
                  {
                    onclick: () => {
                      this.Data.color = "Verde";
                      console.log("Invalida");
                      this.invalidate();
                    },
                  },
                  ["Piecito", w(UserPreferences, this.favorite)]
                ),
              ]),
            ]),
          ]
        ),
      ]),
    ]);
  }
}
