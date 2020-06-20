/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpmycarlog3=window.dojoWebpackJsonpmycarlog3||[]).push([["src/widgets/VehicleCards/VehicleCards"],{294:function(e,t,r){e.exports={" _key":"mycarlog3/VehicleCard",container:"VehicleCard-m__container__e9fe7914TaC",column:"VehicleCard-m__column__e9fe792ehei",row:"VehicleCard-m__row__e9fe793--cc",label:"VehicleCard-m__label__e9fe793NxFw",title:"VehicleCard-m__title__e9fe793uROH",image:"VehicleCard-m__image__e9fe7933nci"}},296:function(e,t,r){(function(r){var a,n,o,i,c,l,s,u,_,d,f,h,p,b,y,m,v,j,O,w;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */!function(g){var S="object"==typeof r?r:"object"==typeof self?self:"object"==typeof this?this:{};function k(e,t){return e!==S&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(r,a){return e[r]=t?t(r,a):a}}void 0===(a=function(e){var t,r;t=k(S,k(e)),r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},n=function(e,t){function a(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)},o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&(r[a[n]]=e[a[n]]);return r},c=function(e,t,r,a){var n,o=arguments.length,i=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(i=(o<3?n(i):o>3?n(t,r,i):n(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},l=function(e,t){return function(r,a){t(r,a,e)}},s=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(e,t,r,a){return new(r||(r=Promise))(function(n,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){e.done?n(e.value):new r(function(t){t(e.value)}).then(i,c)}l((a=a.apply(e,t||[])).next())})},_=function(e,t){var r,a,n,o,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=(n=i.trys).length>0&&n[n.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],a=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},d=function(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])},f=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}},h=function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,o=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}return i},p=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(h(arguments[t]));return e},b=function(e){return this instanceof b?(this.v=e,this):new b(e)},y=function(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,n=r.apply(e,t||[]),o=[];return a={},i("next"),i("throw"),i("return"),a[Symbol.asyncIterator]=function(){return this},a;function i(e){n[e]&&(a[e]=function(t){return new Promise(function(r,a){o.push([e,t,r,a])>1||c(e,t)})})}function c(e,t){try{(r=n[e](t)).value instanceof b?Promise.resolve(r.value.v).then(l,s):u(o[0][2],r)}catch(e){u(o[0][3],e)}var r}function l(e){c("next",e)}function s(e){c("throw",e)}function u(e,t){e(t),o.shift(),o.length&&c(o[0][0],o[0][1])}},m=function(e){var t,r;return t={},a("next"),a("throw",function(e){throw e}),a("return"),t[Symbol.iterator]=function(){return this},t;function a(a,n){t[a]=e[a]?function(t){return(r=!r)?{value:b(e[a](t)),done:"return"===a}:n?n(t):t}:n}},v=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=f(e),t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t);function a(r){t[r]=e[r]&&function(t){return new Promise(function(a,n){t=e[r](t),function(e,t,r,a){Promise.resolve(a).then(function(t){e({value:t,done:r})},t)}(a,n,t.done,t.value)})}}},j=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},O=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},w=function(e){return e&&e.__esModule?e:{default:e}},t("__extends",n),t("__assign",o),t("__rest",i),t("__decorate",c),t("__param",l),t("__metadata",s),t("__awaiter",u),t("__generator",_),t("__exportStar",d),t("__values",f),t("__read",h),t("__spread",p),t("__await",b),t("__asyncGenerator",y),t("__asyncDelegator",m),t("__asyncValues",v),t("__makeTemplateObject",j),t("__importStar",O),t("__importDefault",w)}.apply(t,[t]))||(e.exports=a)}()}).call(this,r(3))},297:function(e,t,r){r(298),e.exports={" _key":"@dojo/widgets/card",root:"card-m__root__A3YnD",actions:"card-m__actions__1s5LT",actionButtons:"card-m__actionButtons__2kXQ9",actionIcons:"card-m__actionIcons__1XRrV",primary:"card-m__primary__21gf8",content:"card-m__content__2pNIG",contentWrapper:"card-m__contentWrapper__3dgqE",header:"card-m__header__3YMQC",media:"card-m__media__3xCo8",mediaSquare:"card-m__mediaSquare__hvl_6",media16by9:"card-m__media16by9__3O5nL",titleWrapper:"card-m__titleWrapper__367rH",title:"card-m__title__qQawm",subtitle:"card-m__subtitle__75XFB"}},298:function(e,t,r){},300:function(e,t,r){r(301),e.exports={" _key":"@dojo/widgets/header-card",header:"header-card-m__header__OlFFy",headerContent:"header-card-m__headerContent__1V6Dw",avatar:"header-card-m__avatar__suhYT",title:"header-card-m__title__3sLCH",subtitle:"header-card-m__subtitle__1_ozq"}},301:function(e,t,r){},303:function(e,t,r){r(304),e.exports={" _key":"@dojo/widgets/avatar",root:"avatar-m__root__3K9z0",avatarColorSecondary:"avatar-m__avatarColorSecondary__1482_",avatarColor:"avatar-m__avatarColor__1r5W-",small:"avatar-m__small__2yQZb",medium:"avatar-m__medium__8xlzj",large:"avatar-m__large__2yM2d",circle:"avatar-m__circle__ElfyL",square:"avatar-m__square__37eQa",rounded:"avatar-m__rounded__RpRws"}},304:function(e,t,r){},312:function(e,t,r){"use strict";r.r(t);var a=r(20),n=r(21),o=r(35),i=r(41),c=r(32),l=r(294),s=r(296),u=r(25),_=r(297);var d=Object(a.a)({theme:u.a}).properties().children()(function({children:e,properties:t,middleware:{theme:r}}){const n=r.classes(_),{onAction:o,mediaSrc:i,mediaTitle:c,square:l,title:s,subtitle:u}=t(),{header:d,content:f,actionButtons:h,actionIcons:p}=e()[0]||{};return Object(a.j)("div",{key:"root",classes:[r.variant(),n.root]},d&&Object(a.j)("div",{key:"header",classes:n.header},d),Object(a.j)("div",{key:"content",classes:[n.content,o?n.primary:null],onClick:()=>o&&o()},i&&Object(a.j)("div",{title:c,classes:[n.media,l?n.mediaSquare:n.media16by9],styles:{backgroundImage:`url("${i}")`}}),s&&Object(a.j)("div",{classes:n.titleWrapper},Object(a.j)("h2",{classes:n.title},s),u&&Object(a.j)("h3",{classes:n.subtitle},u)),f&&Object(a.j)("div",{classes:n.contentWrapper},f)),(h||p)&&Object(a.j)("div",{key:"actions",classes:n.actions},h&&Object(a.j)("div",{classes:n.actionButtons},h),p&&Object(a.j)("div",{classes:n.actionIcons},p)))}),f=r(300);var h=Object(a.a)({theme:u.a}).properties().children()(function({middleware:{theme:e},properties:t,children:r}){const n=e.classes(f),o=t(),{title:i,subtitle:c}=o,l=s.__rest(o,["title","subtitle"]),[u]=r(),_=void 0===u?{}:u,{avatar:h}=_,p=s.__rest(_,["avatar"]);return Object(a.j)(d,Object.assign({key:"root"},l),Object.assign({header:Object(a.j)("div",{key:"header",classes:n.header},h&&Object(a.j)("div",{classes:n.avatar},h),Object(a.j)("div",{key:"headerContent",classes:n.headerContent},Object(a.j)("h2",{classes:n.title},i),c&&Object(a.j)("h3",{classes:n.subtitle},c)))},p))}),p=r(39),b=r(303);var y=Object(a.a)({theme:u.a}).properties()(function({middleware:{theme:e},properties:t,children:r}){const n=e.classes(b),{secondary:o,src:i,alt:c,variant:l="circle",size:s="medium"}=t();return Object(a.j)("div",{key:"root",role:i&&"image","aria-label":c,classes:[e.variant(),n.root,o?n.avatarColorSecondary:n.avatarColor,n[s],n[l]],styles:i?{backgroundImage:`url(${i})`}:{}},r())}),m=r(34),v=r(38);class j extends n.a{constructor(){super(...arguments),this.Data=this.properties}onAttach(){this.Data=this.properties,this.Data.idaccount=window.GlobalStore.get(window.GlobalStore.path("root","user","preferences","last_vehicle_selected","idvehicle")),this.invalidate()}render(){return Object(a.k)("div",{classes:l.container,onclick:()=>{const{path:e,apply:t}=window.GlobalStore;t([Object(v.a)(e("root","user","preferences","last_vehicle_selected","idvehicle"),this.Data.idvehicle)],!0),t([Object(v.a)(e("root","user","preferences","last_vehicle_selected","name"),this.Data.name||this.Data.license_plate+" - "+this.Data.vin)],!0),console.log("Se ha presionado",this.Data),window.location.href="/#home"}},[Object(a.l)(h,{title:this.properties.name||this.properties.license_plate,subtitle:this.properties.mark},[{avatar:Object(a.l)(y,{},[Object(a.k)("i",{classes:["far fa-car"]})]),content:[Object(a.l)(p.a,{initialValue:this.properties.lfname},[{label:"Propietario"}]),Object(a.l)(p.a,{initialValue:this.properties.model},[{label:"Modelo"}]),Object(a.l)(p.a,{initialValue:this.properties.year},[{label:"Año"}]),Object(a.l)(p.a,{initialValue:this.properties.vin},[{label:"VIN"}]),Object(a.l)(p.a,{initialValue:this.properties.fuel_tank_capacity},[{label:"Capacidad",trailing:Object(a.k)("Addon",{},[this.properties.unit_measure_fuel_tank])}]),Object(a.l)(p.a,{initialValue:this.properties.fuel_tank_capacity},[{label:"Capacidad",trailing:this.properties.unit_measure_fuel_tank}])]}])])}}c.a([Object(m.a)()],j.prototype,"Data",void 0);var O=r(42);r.d(t,"default",function(){return w});class w extends n.a{constructor(){super(...arguments),this.Vehicles=[]}async GetVehicles(e){const{path:t}=window.GlobalStore;let r=window.GlobalStore.get(t("root","user","idaccount"));try{const t=await fetch("/vehicles",{method:"POST",body:JSON.stringify({idaccount:r,Search:e}),headers:{"Content-Type":"application/json"}});if(200==t.status){this.Vehicles=[];let e=await t.json();console.log(e),Array.isArray(e)&&e.forEach((e,t)=>{console.log(e.license_plate),this.Vehicles.push(Object(a.l)(j,{idvehicle:e.idvehicle,name:e.name,color:e.color,lfname:e.lfname,fueltype:e.fueltype,license_plate:e.license_plate,vin:e.vin,year:e.year,fuel_tank_capacity:e.fuel_tank_capacity})),this.invalidate()}),this.invalidate()}}catch(e){console.log(e)}}render(){return Object(a.k)("div",{},[Object(a.l)(o.a,{}),Object(a.l)(i.a,{title:"Vehículos",ShowNew:!0,ShowSearch:!0,customActions:[Object(a.l)(O.a,{to:"vehicle",activeClasses:[]},[Object(a.k)("i",{classes:["fas fa-car"]})])],onSearch:e=>{console.log(e),this.GetVehicles(e).then(()=>{console.log("invalida al terminar de obtener los vehiculos"),this.invalidate()})},onNew:()=>{}}),Object(a.k)("div",{},this.Vehicles)])}}}}]);
//# sourceMappingURL=VehicleCards.361f9b9d2f110b29cff8.bundle.js.map