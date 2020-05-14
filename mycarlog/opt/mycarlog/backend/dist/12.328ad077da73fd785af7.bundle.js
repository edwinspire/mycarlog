/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{332:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return a});var s=i(18),c=i(19),n=i(33),o=i(46);class a extends c.b{constructor(){super(...arguments),this.Vehicles=[],this.TextSearch=""}onAttach(){this.Vehicles.push(Object(s.j)("div",{},["Primer registro"])),setInterval(()=>{console.log(this.Vehicles.length),this.invalidate()},5e3)}async GetVehicles(){this.Vehicles=[];const e=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount"),Search:this.TextSearch}),headers:{"Content-Type":"application/json"}});if(200==e.status){let t=await e.json();console.log(t),Array.isArray(t)&&t.forEach(e=>{console.log(e),this.Vehicles.push(Object(s.j)("div",{},[e.licence_plate]))}),this.invalidate()}}render(){return Object(s.j)("div",{},[Object(s.k)(o.a,{}),Object(s.k)(n.a,{label:"Buscar",onChange:e=>{console.log(JSON.stringify(e)),this.TextSearch=e,this.invalidate()}},[]),Object(s.j)("div",{},this.Vehicles)])}}}}]);
//# sourceMappingURL=12.328ad077da73fd785af7.bundle.js.map