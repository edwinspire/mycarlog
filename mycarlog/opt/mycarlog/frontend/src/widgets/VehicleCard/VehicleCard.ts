import { v, w } from "@dojo/framework/core/vdom";
import WidgetBase from "@dojo/framework/core/WidgetBase";
import * as css from "./VehicleCard.m.css";
import Card from "@dojo/widgets/card";
import Icon from ".././Icon/Icon";

export interface VehicleCardProperties {
	idvehicle?: string;
    idaccount?: string;
    idcontact?: string;
    license_plate: string;
    year: string;
    fuel_tank_capacity: string;
    vin: string;
    idvehicletype?: string;
    idmark?:string;
    idmodel?: string;
    idcolor?: string;
    idfueltype?: string;
    idunit_measure_fuel_tank?: string;
  }

export default class VehicleCard extends WidgetBase<VehicleCardProperties> {
  //private TotalContacts: string = "0";
  //private TotalVehicles: string = "0";

  async onAttach() {
    // const res = await fetch("/summary",{method: 'POST', body: JSON.stringify({idaccount: localStorage.getItem('idaccount')}), headers: {'Content-Type': 'application/json'}});
    // console.log(res);
    // if(res.status == 200){
    // 	let data = await res.json();
    // 	if(data){
    // 		this.TotalContacts = data.TotalContacts;
    // 		this.TotalVehicles = data.TotalVehicles;
    // 		this.invalidate();
    // 	}
    // }else if(res.status == 401){
    // 	window.location.href = "/#login";
    // }
  }

  protected render() {
    return v("div", { classes: css.container }, [
      v("div", { classes: [css.row] }, [
        v("div", { classes: [css.column] }, [
          w(Card, {}, [
            w(Icon, {
              label: "CONTACTS",
              classes: ["fas", "fa-users"],
              ShowLabel: true,
              onClick: () => {
                window.location.href = "/#contacts";
              },
            }),
            v("div", {}, [
              v("div", {}, [this.properties.license_plate]),
              v("img", {}, []),
              v("div", {}, [
              v('div', {}, [
				  v('div', {}, [
					v('span', {}, ['VIN: ']),
					v('span', {}, [this.properties.vin])
				  ]),
				  v('div', {}, [
					v('span', {}, ['Año: ']),
					v('span', {}, [this.properties.year])
				  ]),
				  v('div', {}, [
					v('span', {}, ['Últmo cambio aceite: ']),
					v('span', {}, ['2020-01-01'])
				  ])
			  ])
              ]),
              v("div", {}, ["Piecito"]),
            ]),
          ]),
        ]),
      ]),
    ]);
  }
}
