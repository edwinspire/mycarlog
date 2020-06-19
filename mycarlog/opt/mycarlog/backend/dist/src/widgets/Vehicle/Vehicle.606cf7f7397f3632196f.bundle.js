/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpmycarlog3=window.dojoWebpackJsonpmycarlog3||[]).push([["src/widgets/Vehicle/Vehicle"],{266:function(e,a,s){e.exports={" _key":"mycarlog3/Vehicle",spacing:"Vehicle-m__spacing__e9fe791z0jY"}},268:function(e,a,s){e.exports={" _key":"mycarlog3/SelectRemoteSource",full_width:"SelectRemoteSource-m__full_width__e9fe791RePL"}},290:function(e,a,s){"use strict";s.r(a);var i=s(34),t=s(20),l=s(21),c=s(266);class o extends l.a{render(){return Object(t.i)("span",{classes:[],onclick:e=>{console.log("Click")}},[Object(t.i)("div",{classes:["field"]},[Object(t.i)("label",{classes:["label","is-small"]},[this.properties.label]),Object(t.i)("div",{classes:["control"]},[Object(t.i)("textarea",{placeholder:"Prueba Textarea",classes:["input","is-small"]},[this.properties.value])])])])}}var n=s(268);class r extends l.a{constructor(){super(...arguments),this.RemoteOptions=[],this.Options=[]}async onAttach(){try{let e=await fetch(this.properties.url,{method:"POST",body:JSON.stringify(this.properties.params),headers:{"Content-Type":"application/json"}});if(200==e.status){let a=await e.json();this.RemoteOptions=a,this.Options=[],await this.RemoteOptions.forEach((e,a)=>{this.Options.push(Object(t.i)("option",{value:e.value},[e.label])),this.invalidate()}),console.log("Opciones",this.Options.length)}else 401==e.status&&(window.location.href="/#login")}catch(e){console.log(e),this.invalidate()}}render(){return Object(t.i)("span",{},[Object(t.i)("div",{classes:["field"]},[Object(t.i)("label",{classes:["label","is-small"]},[this.properties.label]),Object(t.i)("div",{classes:["control","is-small"]},[Object(t.i)("div",{classes:["select is-small",n.full_width]},[Object(t.i)("select",{onchange:e=>{this.properties.onValue&&this.properties.onValue(e.returnValue),console.log("Click",e.target,e)}},this.Options)])])])])}}var d=s(52),u=s(51);class h extends l.a{render(){return Object(t.i)("span",{},[Object(t.i)("div",{classes:["field"]},[Object(t.i)("label",{classes:["label","is-small"]},[this.properties.label]),Object(t.i)("div",{classes:["control","is-small"]},[Object(t.i)("input",{placeholder:"Prueba input",classes:["input","is-small"],onchange:e=>{console.log(e),this.properties.onValue&&this.properties.onValue(e.target.value)}})])])])}}var p=s(47);s.d(a,"default",function(){return m});class m extends l.a{constructor(){super(...arguments),this.Params={idvehicle:"-1",idaccount:0,idcontact:"0",rowkey:0,license_plate:"",year:"",fuel_tank_capacity:"",idfuel_tank_capacitytype:"0",vin:"",idvehicletype:"0",idmark:"0",idmodel:"0",idcolor:"0",idfueltype:"0",idunit_measure_fuel_tank:"0",note:""}}SnackBar(e){}async Save(){if(Number(this.Params.idcontact)>0)if(this.Params.license_plate.length>0){let e=await fetch("/vehicle_cu",{method:"POST",body:JSON.stringify(this.Params),headers:{"Content-Type":"application/json"}}),a=await e.json();200==e.status?(console.log(a),a.idvehicle>0?window.location.href="/#vehicles?idvehicle="+a.idvehicle+"&idaccount="+this.Params.idaccount:this.SnackBar("No se pudo guardar")):401==e.status?window.location.href="/#login":this.SnackBar("No se pudo guardar "+e.status)}else this.SnackBar("Complete los campos que son requeridos");else this.SnackBar("Debe seleccionar un Propietario");this.invalidate()}async onAttach(){if(console.log(this.properties.idvehicle),this.Params.idaccount=window.GlobalStore.get(window.GlobalStore.path("root","user","idaccount")),this.properties.idvehicle){var e=window.location.hash.split("?")[1],a=new URLSearchParams(e);this.Params.idvehicle=a.get("idvehicle")||"-2";var s="/vehicle?idvehicle="+this.Params.idvehicle+"&idaccount="+this.Params.idaccount;const i=await fetch(s,{method:"GET",headers:{"Content-Type":"application/json"}});let t=await i.json();console.log(t),t.length>0&&t[0].idaccount&&t[0].idvehicle&&(this.Params=t[0],this.invalidate())}}render(){return Object(t.i)("div",{},[Object(t.j)(u.a,{}),Object(t.j)(p.a,{title:"VEHÍCULO",ShowNew:!0,ShowSave:!0,onSave:()=>{this.Save()},onNew:()=>{this.Params={idaccount:this.Params.idaccount,idvehicle:"-1",idcontact:"0",rowkey:0,license_plate:"",year:"",fuel_tank_capacity:"",idfuel_tank_capacitytype:"0",vin:"",idvehicletype:"0",idmark:"0",idmodel:"0",idcolor:"0",idfueltype:"0",idunit_measure_fuel_tank:"0",note:""}}}),Object(t.i)("div",{classes:[]},[Object(t.i)("div",{classes:["columns is-mobile",c.spacing]},[Object(t.i)("div",{classes:["column"]},[Object(t.j)(r,{label:"Propietario",url:"/toselect/contacts",onValue:e=>{console.log("onSelect",e),this.Params.idcontact=e}})]),Object(t.i)("div",{classes:["column"]},[Object(t.j)(h,{label:"Placa",onValue:e=>{this.Params.license_plate=e,this.invalidate()}})])]),Object(t.i)("div",{classes:["columns is-mobile",c.spacing]},[Object(t.i)("div",{classes:["column"]},[Object(t.j)(r,{label:"Marca",value:this.Params.idmark,url:"/toselect/marks",onValue:e=>{console.log("onSelect",e),this.Params.idmark=e}})]),Object(t.i)("div",{classes:["column"]},[Object(t.j)(r,{label:"Modelo",value:this.Params.idmodel,url:"/toselect/models",onValue:e=>{console.log("onSelect",e),this.Params.idfuel_tank_capacitytype=e}},[])])]),Object(t.i)("div",{classes:["columns is-mobile",c.spacing]},[Object(t.i)("div",{classes:["column"]},[Object(t.j)(h,{label:"Año",value:this.Params.year,onValue:e=>{this.Params.year=e,this.invalidate()}})]),Object(t.i)("div",{classes:["column"]},[Object(t.j)(h,{label:"VIN",value:this.Params.vin,onValue:e=>{this.Params.vin=e,this.invalidate()}})])]),Object(t.i)("div",{classes:["columns is-mobile",c.spacing]},[Object(t.i)("div",{classes:["column"]},[Object(t.j)(r,{label:"Color",url:"/toselect/colors",value:this.Params.idcolor,onValue:e=>{console.log("onSelect",e),this.Params.idcolor=e}})]),Object(t.i)("div",{classes:["column"]},[Object(t.j)(r,{label:"Tipo de combustible",url:"/toselect/fueltypes",value:this.Params.idfueltype,onValue:e=>{console.log("onSelect",e),this.Params.idfueltype=e}})])]),Object(t.i)("div",{classes:["columns is-mobile",c.spacing]},[Object(t.i)("div",{classes:["column"]},[Object(t.j)(h,{label:"Capacidad Tanque",value:this.Params.fuel_tank_capacity,onValue:e=>{this.Params.fuel_tank_capacity=e,console.log(this.Params.fuel_tank_capacity),this.invalidate()}})]),Object(t.i)("div",{classes:["column"]},[Object(t.j)(r,{label:"Unidad de medida del tanque",url:"/toselect/unit_measure_fuel_tanks",value:this.Params.idunit_measure_fuel_tank,onValue:e=>{console.log("onSelect",e),this.Params.idunit_measure_fuel_tank=e}},[])])]),Object(t.i)("div",{classes:[""]},[Object(t.j)(o,{label:"Notas",value:this.Params.note,onValue:e=>{this.Params.note=e,this.invalidate()}})])])])}}i.a([Object(d.a)()],m.prototype,"Params",void 0)}}]);
//# sourceMappingURL=Vehicle.606cf7f7397f3632196f.bundle.js.map