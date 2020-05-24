/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{337:function(e,a,t){"use strict";t.r(a);var s=t(18),l=t(36),i=t(19),c=t(33),n=t(31),o=t(42),r=t(35),d=t(39),b=t(48);class j extends i.b{constructor(){super(...arguments),this.Params={idaccount:0,account:"",date_start:"",date_end:"",idvehicle:"",license_plate:"",year:"",color:"",fuel_tank_capacity:"",vin:"",name:"",idmark:"",mark_label:"",idmodel:"",model_label:"",idcontact:"",firstname:"",lastname:"",identification:"",birthday:"",lfname:"",idcontacttype:"",contacttype_label:"",idgender:"",gender_label:"",idfueltype:"",fueltype_label:"",idunit_measure_fuel_tank:"",unit_measure_fuel_tank_label:""},this._openSnack=!1,this._MsgSnackBar="-"}SnackBar(e){console.log("SnackBar "+e),this._openSnack=!0,this._MsgSnackBar=e,this.invalidate(),setTimeout(()=>{this._openSnack=!1,this.invalidate()},4e3)}async onAttach(){console.log(this.properties.idvehicle);let e=window.GlobalStore.get(window.GlobalStore.path("root","user","idaccount"));if(this.Params.idaccount=e,this.properties.idvehicle){const e=await fetch("/vehicle_summary",{method:"POST",body:JSON.stringify(this.Params),headers:{"Content-Type":"application/json"}});let a=await e.json();console.log(a),a.length>0?(this.Params=a[0],this.invalidate()):this.SnackBar("No se ha encontrado datos")}}render(){return Object(s.j)("div",{},[Object(s.k)(b.a,{heading:"VEHÍCULO",collapseWidth:150},[Object(s.k)(d.a,{label:"NUEVO",classes:["fas","fa-car"],ShowLabel:!0,onClick:e=>{}}),Object(s.j)("span",{},["|"])]),Object(s.j)("div",{classes:[c.container]},[Object(s.j)("div",{classes:[c.container_field_reset]},[Object(s.k)(n.a,{type:"text",label:"Propietario",value:this.Params.idcontact,readOnly:!1},[])]),Object(s.j)("div",{classes:[c.row]},[Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{type:"text",label:"Placa",disabled:!1,readOnly:!1,required:!0,placeholder:"Placa",value:this.Params.license_plate,onChange:e=>{this.Params.license_plate=e,this.invalidate()}},[])]),Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{label:"Marca",value:this.Params.idmark,readOnly:!1},[])])]),Object(s.j)("div",{classes:c.row},[Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{type:"number",label:"Año",disabled:!1,readOnly:!1,value:this.Params.year,onChange:e=>{this.Params.year=e,this.invalidate()}},[])]),Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{type:"text",label:"VIN",disabled:!1,readOnly:!1,value:this.Params.vin,onChange:e=>{this.Params.vin=e,this.invalidate()}},[])])]),Object(s.j)("div",{classes:c.row},[Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{label:"Color",readOnly:!0,value:this.Params.color},[])]),Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{label:"Tipo de combustible",value:this.Params.fueltype_label,readOnly:!0},[])])]),Object(s.j)("div",{classes:c.row},[Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{key:"t6",type:"number",label:"Capacidad del tanque",disabled:!1,readOnly:!1,value:this.Params.fuel_tank_capacity,onChange:e=>{this.Params.fuel_tank_capacity=e,this.invalidate()}},[])]),Object(s.j)("div",{classes:[c.column2]},[Object(s.k)(n.a,{label:"Unidad de medida del tanque",readOnly:!0,value:this.Params.unit_measure_fuel_tank_label},[])])]),Object(s.k)(o.a,{open:this._openSnack,leading:!1,type:"error",messageRenderer:()=>this._MsgSnackBar})])])}}Object(l.a)([Object(r.a)()],j.prototype,"Params",void 0),Object(l.a)([Object(r.a)()],j.prototype,"_openSnack",void 0);var h=t(49);const u=Object(s.a)();a.default=u(function(){return Object(s.j)("div",{},[Object(s.k)(h.a,{}),Object(s.k)(j,{idvehicle:localStorage.getItem("1")},[])])})}}]);
//# sourceMappingURL=12.87928285eba5442deb7d.bundle.js.map