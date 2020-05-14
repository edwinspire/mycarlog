/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{332:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return o});var s=i(18),c=i(19),a=i(33),n=i(46);class o extends c.b{constructor(){super(...arguments),this.Vehicles=[],this.TextSearch=""}onAttach(){this.Vehicles.push(Object(s.j)("div",{},["Primer registro"])),setInterval(()=>{console.log(this.Vehicles.length),this.invalidate()},5e3),this.invalidate()}async GetVehicles(){this.Vehicles=[];const e=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount"),Search:this.TextSearch}),headers:{"Content-Type":"application/json"}});if(200==e.status){let t=await e.json();console.log(t),Array.isArray(t)&&t.forEach(e=>{console.log(e),this.Vehicles.push(Object(s.j)("div",{},[e.licence_plate])),this.invalidate()}),this.invalidate()}}render(){return Object(s.j)("div",{},[Object(s.k)(n.a,{}),Object(s.k)(a.a,{label:"BuscarB",value:this.TextSearch,onChange:e=>{console.log(JSON.stringify(e)),this.TextSearch=e,this.GetVehicles(),this.invalidate()}},[]),Object(s.j)("div",{},this.Vehicles)])}}}}]);
//# sourceMappingURL=12.b3b069bf78037bab4cde.bundle.js.map