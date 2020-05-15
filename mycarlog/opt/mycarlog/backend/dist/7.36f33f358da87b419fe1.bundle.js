/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[7],{124:function(t,e,a){a(125),t.exports={" _key":"@dojo/widgets/card",root:"card-m__root__1zMtM",actions:"card-m__actions__1Z_Hb",actionButtons:"card-m__actionButtons__2SSbU",actionIcons:"card-m__actionIcons__3aObP",primaryAction:"card-m__primaryAction__1zj-J",media:"card-m__media__2jfnD",mediaContent:"card-m__mediaContent__2DMyX",mediaSquare:"card-m__mediaSquare__fDbOX",media16by9:"card-m__media16by9__3qldC",primary:"card-m__primary__r84rj",secondary:"card-m__secondary__2FZlH"}},125:function(t,e,a){},139:function(t,e,a){"use strict";var o=a(20),c=a(19),n=a(18),s=a(40),i=a(119);function r(){return Object(s.b)((t,e)=>{Object(i.a)(function(){this.invalidate()})(t)})}var _=a(21),d=a(124);let l=class extends(Object(_.c)(c.a)){render(){const{actionsRenderer:t}=this.properties,e=t&&t();return Object(n.i)("div",{key:"root",classes:this.theme(d.root)},this.children,e&&Object(n.i)("div",{classes:this.theme(d.actions)},e))}};l=o.__decorate([Object(_.f)(d),r()],l);e.a=l},273:function(t,e,a){t.exports={" _key":"OpenMonitoringSystem/Summary",container:"Summary-m__container__309e8d7FA3G",column:"Summary-m__column__309e8d1fs86",row:"Summary-m__row__309e8didtZD"}},340:function(t,e,a){"use strict";a.r(e);var o=a(18),c=a(19),n=a(273),s=a(139),i=a(35);class r extends c.b{constructor(){super(...arguments),this.TotalContacts="0",this.TotalVehicles="0"}async onAttach(){const t=await fetch("/summary",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount")}),headers:{"Content-Type":"application/json"}});if(console.log(t),200==t.status){let e=await t.json();e&&(this.TotalContacts=e.TotalContacts,this.TotalVehicles=e.TotalVehicles,this.invalidate())}else 401==t.status&&(window.location.href="/#login")}render(){return Object(o.j)("div",{classes:n.container},[Object(o.j)("div",{classes:[n.row]},[Object(o.j)("div",{classes:[n.column]},[Object(o.k)(s.a,{},[Object(o.k)(i.a,{label:"CONTACTS",classes:["fas","fa-users"],ShowLabel:!0,onClick:()=>{window.location.href="/#contacts"}}),"Hay "+this.TotalContacts+" contactos"])]),Object(o.j)("div",{classes:[n.column]},[Object(o.k)(s.a,{},[Object(o.k)(i.a,{label:"VEHÍCULOS",classes:["fas","fa-car-side"],ShowLabel:!0,onClick:()=>{window.location.href="/#vehicles"}}),"Hay "+this.TotalVehicles+" Vehículos"])])])])}}var _=a(47);const d=Object(o.a)();e.default=d(function(){return Object(o.j)("div",{},[Object(o.k)(_.a,{}),Object(o.k)(r,{},[])])})}}]);
//# sourceMappingURL=7.36f33f358da87b419fe1.bundle.js.map