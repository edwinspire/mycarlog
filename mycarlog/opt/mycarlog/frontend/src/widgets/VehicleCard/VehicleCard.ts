import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./VehicleCard.m.css";
import Card from '@dojo/widgets/header-card';
import TextInput from '@dojo/widgets/text-input';
import Avatar from '@dojo/widgets/avatar';
//import Icon from ".././Icon/Icon";
import watch from "@dojo/framework/core/decorators/watch";
import { add } from "@dojo/framework/stores/state/operations";
//import { content } from '@dojo/widgets/theme/dojo/card.m.css';

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
  //private clase = "fa-car-side";
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
    return v("div", { classes: css.container, onclick: () => {
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

      apply(
        [
          add(
            path(
              "root",
              "user",
              "preferences",
              "last_vehicle_selected",
              "name"
            ),
            this.Data.name ||
              this.Data.license_plate + " - " + this.Data.vin
          ),
        ],
        true
      );

      console.log("Se ha presionado", this.Data);
      window.location.href = "/#home";
      //this.invalidate();
    }
   }, [
          w(Card, {title: (this.properties.name||this.properties.license_plate), subtitle: this.properties.mark}, 
          [{
            avatar: w(Avatar, {}, [v('i', {classes: ['far fa-car']})]), 
            content: [
              w(TextInput, {initialValue: this.properties.lfname}, [{label: 'Propietario'}]),
              w(TextInput, {initialValue: this.properties.model}, [{label: 'Modelo'}]),
              w(TextInput, {initialValue: this.properties.year}, [{label: 'Año'}]),
              w(TextInput, {initialValue: this.properties.vin}, [{label: 'VIN'}]),
              w(TextInput, {initialValue: this.properties.fuel_tank_capacity}, [{label: 'Capacidad', trailing: v('Addon', {}, [this.properties.unit_measure_fuel_tank])}]),
              w(TextInput, {initialValue: this.properties.fuel_tank_capacity}, [{label: 'Capacidad', trailing: this.properties.unit_measure_fuel_tank}])
            ]}
          ])
      ]
    )


    }


  }
