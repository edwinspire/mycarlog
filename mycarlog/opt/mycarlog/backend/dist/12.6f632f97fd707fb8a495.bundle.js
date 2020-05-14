/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[12],{332:function(e,t,i){"use strict";i.r(t),i.d(t,"default",function(){return r});var o=i(39),c=i(18),s=i(19),n=i(33),a=i(38),h=i(46);class r extends s.b{constructor(){super(...arguments),this.Vehicles=[],this.TextSearch=""}onAttach(){}async GetVehicles(){const e=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount"),Search:this.TextSearch}),headers:{"Content-Type":"application/json"}});if(200==e.status){let t=await e.json();console.log(t),this.invalidate()}}render(){return Object(c.j)("div",{},[Object(c.k)(h.a,{}),Object(c.k)(n.a,{label:"Buscar",onChange:e=>{console.log(e),this.TextSearch=e,this.GetVehicles(),this.invalidate()}},[]),Object(c.j)("div",{},this.Vehicles)])}}Object(o.a)([Object(a.a)()],r.prototype,"Vehicles",void 0)}}]);
//# sourceMappingURL=12.6f632f97fd707fb8a495.bundle.js.map