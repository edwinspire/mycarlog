/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{332:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return r});var s=i(39),c=i(18),o=i(19),a=i(33),n=i(38),h=i(46);class r extends o.b{constructor(){super(...arguments),this.Vehicles=[],this.TextSearch=""}onAttach(){this.Vehicles.push(Object(c.j)("div",{},["Primer registro"])),setInterval(()=>{console.log(this.Vehicles.length),this.invalidate()},5e3)}async GetVehicles(){this.Vehicles=[];const e=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount"),Search:this.TextSearch}),headers:{"Content-Type":"application/json"}});if(200==e.status){let t=await e.json();console.log(t),Array.isArray(t)&&t.forEach(e=>{console.log(e),this.Vehicles.push(Object(c.j)("div",{},[e.licence_plate]))}),this.invalidate()}}render(){return Object(c.j)("div",{},[Object(c.k)(h.a,{}),Object(c.k)(a.a,{label:"Buscar",onChange:async e=>{console.log(JSON.stringify(e)),this.TextSearch=e,await this.GetVehicles(),this.invalidate()}},[]),Object(c.j)("div",{},this.Vehicles)])}}Object(s.a)([Object(n.a)()],r.prototype,"TextSearch",void 0)}}]);
//# sourceMappingURL=12.d98e4e535669bc6af2dc.bundle.js.map