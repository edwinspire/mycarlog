/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{332:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return o});var s=i(18),a=i(19),n=i(33),c=i(46);class o extends a.b{constructor(){super(...arguments),this.Vehicles=[],this.TextSearch=""}onAttach(){this.Vehicles.push(Object(s.j)("div",{},["Primer registro"])),setInterval(()=>{console.log(this.Vehicles.length),this.invalidate()},5e3),this.invalidate()}async GetVehicles(){const e=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount"),Search:this.TextSearch}),headers:{"Content-Type":"application/json"}});if(200==e.status){this.Vehicles=[];let t=await e.json();console.log(t),Array.isArray(t)&&t.forEach(e=>{console.log(e),this.Vehicles.push(Object(s.j)("div",{},[e.licence_plate])),this.invalidate()}),this.invalidate()}}render(){return Object(s.j)("div",{},[Object(s.k)(c.a,{}),Object(s.k)(n.a,{label:"BuscarX",value:this.TextSearch,onChange:e=>{console.log(JSON.stringify(e)),this.TextSearch=e,this.Vehicles.push("Pude cambiar"),this.invalidate(),this.GetVehicles().then(()=>{console.log("invalida al terminar de obtener los vehiculos"),this.invalidate()})}},[]),Object(s.j)("div",{},this.Vehicles)])}}}}]);
//# sourceMappingURL=12.5037cc273cf2a5789d4b.bundle.js.map