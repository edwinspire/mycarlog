/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{332:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return h});var s=i(18),a=i(19),c=i(33),n=i(46);class h extends a.b{constructor(){super(...arguments),this.Vehicles=[],this.TextSearch=""}onAttach(){this.Vehicles.push(Object(s.j)("div",{},["Primer registro"])),setInterval(()=>{this.Vehicles.push(Object(s.j)("div",{},["pROBANDO"])),console.log(this.Vehicles.length),this.invalidate()},5e3),this.invalidate()}async GetVehicles(){const e=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount"),Search:this.TextSearch}),headers:{"Content-Type":"application/json"}});if(200==e.status){this.Vehicles=[];let t=await e.json();console.log(t),Array.isArray(t)&&t.forEach(e=>{console.log(e),this.Vehicles.push(Object(s.j)("div",{},[e.licence_plate])),this.invalidate()}),this.invalidate()}}render(){return Object(s.j)("div",{},[Object(s.k)(n.a,{}),Object(s.k)(c.a,{label:"BuscarZ",value:this.TextSearch,onChange:e=>{console.log(JSON.stringify(e)),this.TextSearch=e,this.Vehicles.push("Pude cambiar"),this.invalidate(),this.GetVehicles().then(()=>{console.log("invalida al terminar de obtener los vehiculos"),this.invalidate()})}},[]),Object(s.j)("div",{},this.Vehicles)])}}}}]);
//# sourceMappingURL=12.684d643047d2aa8c1214.bundle.js.map