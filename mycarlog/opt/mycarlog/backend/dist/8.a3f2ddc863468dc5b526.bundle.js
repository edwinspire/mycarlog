/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[8],{321:function(e,t,i){e.exports={" _key":"OpenMonitoringSystem/VehicleCard",container:"VehicleCard-m__container__309e8d3ggyL",column:"VehicleCard-m__column__309e8d2hzND",row:"VehicleCard-m__row__309e8d1cZVt",label:"VehicleCard-m__label__309e8d3hpgA",title:"VehicleCard-m__title__309e8d1zTDQ",image:"VehicleCard-m__image__309e8d1mXtV"}},332:function(e,t,i){"use strict";i.r(t);var a=i(18),c=i(19),n=i(31),s=i(48),o=i(321);class l extends c.b{constructor(){super(...arguments),this.Color=this.properties.color}render(){return Object(a.j)("div",{classes:o.container},[Object(a.j)("div",{classes:[o.column]},[Object(a.j)("div",{onclick:e=>{console.log(e),this.Color="prueba",this.invalidate()}},[this.Color])])])}}i.d(t,"default",function(){return r});class r extends c.b{constructor(){super(...arguments),this.Vehicles=[],this.TextSearch=""}async GetVehicles(){const e=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount"),Search:this.TextSearch}),headers:{"Content-Type":"application/json"}});if(200==e.status){this.Vehicles=[];let t=await e.json();console.log(t),Array.isArray(t)&&t.forEach((e,t)=>{console.log(e.license_plate),this.Vehicles.push(Object(a.k)(l,{name:e.name,color:e.color,lfname:e.lfname,fueltype:e.fueltype,license_plate:e.license_plate,vin:e.vin,year:e.year,fuel_tank_capacity:e.fuel_tank_capacity})),this.invalidate()}),this.invalidate()}}render(){return Object(a.j)("div",{},[Object(a.k)(s.a,{}),Object(a.k)(n.a,{label:"Buscar",value:this.TextSearch,onChange:e=>{console.log(JSON.stringify(e)),this.TextSearch=e,this.Vehicles.push("Pude cambiar"),this.invalidate(),this.GetVehicles().then(()=>{console.log("invalida al terminar de obtener los vehiculos"),this.invalidate()})}},[]),Object(a.j)("div",{},this.Vehicles)])}}}}]);
//# sourceMappingURL=8.a3f2ddc863468dc5b526.bundle.js.map