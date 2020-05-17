/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[6],{128:function(t,e,o){"use strict";var i=o(20),s=o(24),n=o(21),a=o(26),l=o(18),c=o(19),d=o(29),r=o(129),h=o(132),p=o(38),u=o(123);let _=class extends(Object(n.c)(Object(a.a)(c.a))){constructor(){super(...arguments),this._id=Object(s.c)(),this._onWindowResize=(()=>{this.invalidate()})}_onTitleClick(t){t.stopPropagation(),this._toggle()}_toggle(){const{closeable:t=!0,key:e,onRequestClose:o,onRequestOpen:i,open:s=!0}=this.properties;t&&(s?o&&o(e):i&&i(e))}getButtonContent(){return this.properties.title}getFixedModifierClasses(){const{closeable:t=!0}=this.properties;return[t?r.closeableFixed:null]}getModifierClasses(){const{closeable:t=!0}=this.properties;return[t?h.closeable:null]}getPaneContent(){return this.children}renderExpandIcon(){const{open:t=!0,theme:e,classes:o}=this.properties;return Object(l.j)("span",{classes:this.theme(h.arrow)},[Object(l.k)(d.a,{type:t?"downIcon":"rightIcon",theme:e,classes:o})])}getPaneStyles(){const{open:t=!0}=this.properties,e=this.meta(p.a).get("content");return{marginTop:t?"0px":`-${e.offset.height}px`}}render(){const{closeable:t=!0,headingLevel:e,open:o=!0}=this.properties;let i=!1;return o!==this._open&&(i=!0,this._open=o),Object(l.j)("div",{classes:[...this.theme([h.root,o?h.open:null]),r.rootFixed]},[Object(l.k)(u.b,{key:"global",window:{resize:this._onWindowResize}}),Object(l.j)("div",{"aria-level":e?`${e}`:null,classes:[...this.theme([h.title,...this.getModifierClasses()]),r.titleFixed,...this.getFixedModifierClasses()],role:"heading"},[Object(l.j)("button",{"aria-controls":`${this._id}-content`,"aria-expanded":`${o}`,disabled:!t,classes:[r.titleButtonFixed,...this.theme([h.titleButton])],focus:this.shouldFocus,id:`${this._id}-title`,type:"button",onclick:this._onTitleClick},[this.renderExpandIcon(),this.getButtonContent()])]),Object(l.j)("div",{"aria-hidden":o?null:"true","aria-labelledby":`${this._id}-title`,classes:[...this.theme([h.content,i?h.contentTransition:null]),r.contentFixed],id:`${this._id}-content`,key:"content",styles:this.getPaneStyles()},this.getPaneContent())])}};_=i.__decorate([Object(n.f)(h)],_),e.a=_},129:function(t,e,o){o(130),t.exports={" _key":"@dojo/widgets/title-pane",rootFixed:"title-pane-m__rootFixed__oPswN",titleFixed:"title-pane-m__titleFixed__1-iVY",titleButtonFixed:"title-pane-m__titleButtonFixed__3JEqs",contentFixed:"title-pane-m__contentFixed__3kE1q",closeableFixed:"title-pane-m__closeableFixed__x4J9P"}},130:function(t,e,o){},132:function(t,e,o){o(133),t.exports={" _key":"@dojo/widgets/title-pane",title:"title-pane-m__title__1gwpz",closeable:"title-pane-m__closeable__2H5fz",arrow:"title-pane-m__arrow__3mO_t",root:"title-pane-m__root__3J-5z",open:"title-pane-m__open__1bhv7",content:"title-pane-m__content__bQNuo",titleButton:"title-pane-m__titleButton__1NKNS",contentTransition:"title-pane-m__contentTransition__2SrMd"}},133:function(t,e,o){},334:function(t,e,o){"use strict";o.r(e);var i=o(18),s=o(19),n=o(128),a=o(117);class l extends s.b{constructor(){super(...arguments),this.valpass="Valor",this.GeoLocalizacion={coords:{latitude:0,longitude:0,speed:0}},this.kmh=0,this.Altitud=0,this.ws=window.GlobalSocketIO,this.open=!1}render(){return this.ws.on("hora",t=>{this.valpass=new Date(t.hora).toLocaleString(),this.invalidate()}),this.ws.on("/dashboard/geolocation",t=>{console.log("Path: ",t)}),navigator.geolocation?navigator.geolocation.watchPosition(t=>{this.GeoLocalizacion=t,this.kmh=3.6*(t.coords.speed||0)||0,this.Altitud=t.coords.altitude||0;let e={latitude:t.coords.latitude,longitude:t.coords.longitude,accuracy:t.coords.accuracy,altitude:t.coords.altitude,altitudeAccuracy:t.coords.altitudeAccuracy,heading:t.coords.heading,speed:t.coords.speed,timestamp:t.timestamp};fetch("/gps",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),this.invalidate()},t=>{console.log(t)}):(this.GeoLocalizacion.coords.latitude=0,this.GeoLocalizacion.coords.longitude=0,this.invalidate()),Object(i.j)("div",{classes:[]},[Object(i.k)(n.a,{title:"Prueba",open:this.open,onRequestOpen:()=>{this.open=!0,console.log("onRequestOpen",this.open),this.invalidate()},onRequestClose:t=>{this.open=!1,console.log("onRequestClose",this.open,t),this.invalidate()}},["holal"]),Object(i.k)(n.a,{title:"Car Log Dashboard",key:"GPS-title-pane"},[Object(i.j)("h1",{},[`Velocidad: ${this.kmh.toFixed(1)} Km/h`]),Object(i.j)("h2",{},[`Altitud: ${this.Altitud.toFixed(1)} m`]),Object(i.j)("h3",{},[`Latitud: ${this.GeoLocalizacion.coords.latitude}`]),Object(i.j)("h3",{},[`Longitud: ${this.GeoLocalizacion.coords.longitude}`]),Object(i.j)("h3",{},[`Servidor: ${this.valpass}`]),Object(i.k)(a.a,{key:"b2",disabled:!1,onClick:()=>{fetch("local_notification.sw",{method:"POST",body:JSON.stringify({title:"Hola desde Car Log",options:{body:"Esta es una pequeña prueba"}}),headers:{"Content-Type":"application/json"}}),"1234"==this.valpass&&(window.location.href="/#profile"),this.invalidate()}},["Submit"])])])}}var c=o(33);const d=Object(i.a)();e.default=d(function({properties:t}){return Object(i.j)("h1",{classes:[c.root]},[Object(i.k)(l,{},[])])})}}]);
//# sourceMappingURL=6.c47864902d07ca8ee4e7.bundle.js.map