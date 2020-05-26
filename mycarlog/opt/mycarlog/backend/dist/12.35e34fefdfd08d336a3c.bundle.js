/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{296:function(e,a,t){"use strict";t.r(a);var i=t(18),l=t(39),s=t(19),c=t(33),n=t(30),o=t(50),r=t(36),d=t(37),h=t(45);class b extends s.b{constructor(){super(...arguments),this.Params={idaccount:0,account:"",date_start:"",date_end:"",idvehicle:0,license_plate:"",year:"",color:"",fuel_tank_capacity:"",vin:"",name:"",idmark:"",mark_label:"",idmodel:"",model_label:"",idcontact:"",firstname:"",lastname:"",identification:"",birthday:"",lfname:"",idcontacttype:"",contacttype_label:"",idgender:"",gender_label:"",idfueltype:"",fueltype_label:"",idunit_measure_fuel_tank:"",unit_measure_fuel_tank_label:""},this._openSnack=!1,this._MsgSnackBar="-"}SnackBar(e){console.log("SnackBar "+e),this._openSnack=!0,this._MsgSnackBar=e,this.invalidate(),setTimeout(()=>{this._openSnack=!1,this.invalidate()},4e3)}async onAttach(){this.Params.idvehicle=this.properties.idvehicle,console.log(this.properties.idvehicle);let e=window.GlobalStore.get(window.GlobalStore.path("root","user","idaccount"));if(this.Params.idaccount=e,this.properties.idvehicle>0){const e=await fetch("/vehicle_summary",{method:"POST",body:JSON.stringify({idaccount:this.Params.idaccount,idvehicle:this.Params.idvehicle}),headers:{"Content-Type":"application/json"}});let a=await e.json();console.log(a),a.length>0?(this.Params=a[0],this.invalidate()):this.SnackBar("No se ha encontrado datos")}else this.SnackBar("Debe seleccionar un vehículo"),window.location.href="/#vehicle_cards"}render(){return Object(i.j)("div",{},[Object(i.k)(h.a,{heading:this.Params.name,collapseWidth:150},[Object(i.k)(d.a,{label:"Editar",classes:["fas","fa-car"],ShowLabel:!0,onClick:e=>{window.location.href="/#vehicle?idvehicle="+this.Params.idvehicle+"&rowkey=0&idaccount="+this.Params.idaccount}})]),Object(i.j)("div",{classes:[c.container]},[Object(i.j)("div",{classes:[c.container_field_reset]},[Object(i.k)(n.a,{type:"text",label:"Propietario",value:this.Params.lastname+" "+this.Params.firstname,readOnly:!0},[])]),Object(i.j)("div",{classes:[c.row]},[Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{type:"text",label:"Placa",readOnly:!0,placeholder:"Placa",value:this.Params.license_plate,onChange:e=>{this.Params.license_plate=e,this.invalidate()}},[])]),Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{label:"Marca",value:this.Params.mark_label,readOnly:!0},[])])]),Object(i.j)("div",{classes:c.row},[Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{type:"number",label:"Año",readOnly:!0,value:this.Params.year},[])]),Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{type:"text",label:"VIN",readOnly:!0,value:this.Params.vin},[])])]),Object(i.j)("div",{classes:c.row},[Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{label:"Color",readOnly:!0,value:this.Params.color},[])]),Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{label:"Tipo de combustible",value:this.Params.fueltype_label,readOnly:!0},[])])]),Object(i.j)("div",{classes:c.row},[Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{type:"text",label:"Capacidad del tanque",readOnly:!0,value:this.Params.fuel_tank_capacity+" "+this.Params.unit_measure_fuel_tank_label},[])]),Object(i.j)("div",{classes:[c.column2]},[Object(i.k)(n.a,{label:"Unidad de medida del tanque",readOnly:!0,value:"this.Params.unit_measure_fuel_tank_label"},[])])]),Object(i.k)(o.a,{open:this._openSnack,leading:!1,type:"error",messageRenderer:()=>this._MsgSnackBar})])])}}Object(l.a)([Object(r.a)()],b.prototype,"Params",void 0),Object(l.a)([Object(r.a)()],b.prototype,"_openSnack",void 0);var u=t(46);const m=Object(i.a)();a.default=m(function(){return Object(i.j)("div",{},[Object(i.k)(u.a,{}),Object(i.k)(b,{idvehicle:window.GlobalStore.get(window.GlobalStore.path("root","user","preferences","last_vehicle_selected","idvehicle"))},[])])})}}]);
//# sourceMappingURL=12.35e34fefdfd08d336a3c.bundle.js.map