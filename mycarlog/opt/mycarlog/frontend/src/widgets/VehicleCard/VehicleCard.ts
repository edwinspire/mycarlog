import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./VehicleCard.m.css";
import Card from "@dojo/widgets/card";
import Icon from ".././Icon/Icon";

export interface VehicleCardProperties {
  idvehicle?: string;
  idaccount?: string;
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
  //private Color: string = this.properties.license_plate;
clase = "fa-car-side";
private Data: VehicleCardProperties =this.properties;
  
  protected render() {

    
    
    return v("div", { classes: css.container }, [
      v("div", { classes: [css.column] }, [
        v("div", {onclick:(e)=>{
          console.log(e);
          this.Data.color = "prueba";
          this.invalidate();
        }}, ['Nada', this.Data.color,
           w(Card, {}, [
             w(Icon, {
               key: 'sss',
               label:
                 this.Data.name ||
                 this.Data.license_plate + " - " + this.Data.vin,
               classes: [this.clase, "far", css.title],
               ShowLabel: true,
               onClick: () => {
                 //window.location.href = "/#contacts";
                 this.clase = "fa-star";
                 console.log("Se ha presionado");
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
                     v("span", { classes: [css.label] }, ["Tipo combustible: "]),
                     v("span", {}, [this.Data.fueltype]),
                   ]),
                   v("div", {}, [
                     v("span", {}, ["Color: "]),
                     v("span", {}, [this.Data.color]),
                   ]),
                 ]),
               ]),
               v("div", {onclick:()=>{
                 this.Data.color = "Verde";
                 console.log('Invalida');
                 this.invalidate();
               }}, ["Piecito"]),
             ]),
           ]),
        ]),
      ]),
    ]);
  }
}
