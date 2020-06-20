/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpmycarlog3=window.dojoWebpackJsonpmycarlog3||[]).push([["src/widgets/Fueling/Fueling"],{279:function(e,t,a){a(280),e.exports={" _key":"@dojo/widgets/checkbox",root:"checkbox-m__root__1pxWQ",input:"checkbox-m__input__CZJkF",inputWrapper:"checkbox-m__inputWrapper__efIfT",checked:"checkbox-m__checked__2e35U",disabled:"checkbox-m__disabled__2pxrv",focused:"checkbox-m__focused__1qMiJ",readonly:"checkbox-m__readonly__3tnli",required:"checkbox-m__required__1we1M",background:"checkbox-m__background__1mGXN",invalid:"checkbox-m__invalid__3ISg0",valid:"checkbox-m__valid__2whfk"}},280:function(e,t,a){},282:function(e,t,a){a(283),e.exports={" _key":"@dojo/widgets/text-area",root:"text-area-m__root__1NUZh",wrapper:"text-area-m__wrapper__1Nkrq",input:"text-area-m__input__3libn",inputWrapper:"text-area-m__inputWrapper__1LN1m",disabled:"text-area-m__disabled__BN85r",focused:"text-area-m__focused__1Pb_L",readonly:"text-area-m__readonly__21ZTb",required:"text-area-m__required__1NXja",invalid:"text-area-m__invalid__2jMTq",valid:"text-area-m__valid__3mRCW"}},283:function(e,t,a){},285:function(e,t,a){a(286),e.exports={" _key":"@dojo/widgets/icon",root:"icon-m__root__1eoV_",medium:"icon-m__medium__3Xwur",large:"icon-m__large__Ml3b4",small:"icon-m__small__2BbOV",icon:"icon-m__icon__UdYI1",clockIcon:"icon-m__clockIcon__3GLpu",downIcon:"icon-m__downIcon__2q5lh",leftIcon:"icon-m__leftIcon__pBWIt",rightIcon:"icon-m__rightIcon__18AW6",closeIcon:"icon-m__closeIcon__21KIr",plusIcon:"icon-m__plusIcon__2b4l_",minusIcon:"icon-m__minusIcon__1DHfu",checkIcon:"icon-m__checkIcon__2D3mV",upIcon:"icon-m__upIcon__2Whg2",upAltIcon:"icon-m__upAltIcon__2GXtu",downAltIcon:"icon-m__downAltIcon__hm7FZ",searchIcon:"icon-m__searchIcon__2HGOw",barsIcon:"icon-m__barsIcon__2e0Qo",settingsIcon:"icon-m__settingsIcon__2-UEA",alertIcon:"icon-m__alertIcon__WjF2F",helpIcon:"icon-m__helpIcon__3c7_4",infoIcon:"icon-m__infoIcon__PXtvl",cancelIcon:"icon-m__cancelIcon__2ey9p",checkedBoxIcon:"icon-m__checkedBoxIcon__TSG-9",phoneIcon:"icon-m__phoneIcon__2BO7g",editIcon:"icon-m__editIcon__3j9QX",dateIcon:"icon-m__dateIcon__3vXGn",linkIcon:"icon-m__linkIcon__314xM",locationIcon:"icon-m__locationIcon__1uwwo",secureIcon:"icon-m__secureIcon__UXrMt",mailIcon:"icon-m__mailIcon__3uh6Q",eyeIcon:"icon-m__eyeIcon__2Cqqq",eyeSlashIcon:"icon-m__eyeSlashIcon__17wRy",starIcon:"icon-m__starIcon__r0lYz"}},286:function(e,t,a){},288:function(e,t,a){a(289),e.exports={" _key":"@dojo/widgets/title-pane",title:"title-pane-m__title__3tf5J",closeable:"title-pane-m__closeable__3zOGh",arrow:"title-pane-m__arrow__3vShr",root:"title-pane-m__root__1sOUk",open:"title-pane-m__open__2g2VL",content:"title-pane-m__content__zjzP2",titleButton:"title-pane-m__titleButton__1PgVR",contentTransition:"title-pane-m__contentTransition__1vxdJ"}},289:function(e,t,a){},291:function(e,t,a){a(292),e.exports={" _key":"@dojo/widgets/title-pane",rootFixed:"title-pane-m__rootFixed__oPswN",titleFixed:"title-pane-m__titleFixed__1-iVY",titleButtonFixed:"title-pane-m__titleButtonFixed__3JEqs",contentFixed:"title-pane-m__contentFixed__3kE1q",closeableFixed:"title-pane-m__closeableFixed__x4J9P"}},292:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var o=a(32),i=a(20),n=a(21),s=a(39),l=a(33),c=a(26);Array.prototype.slice,Object.prototype.hasOwnProperty;var r=a(30),d=a(40),_=a(279);var u=Object(i.a)({theme:c.a,focus:l.a}).properties().children()(function({children:e,properties:t,middleware:{theme:a,focus:o}}){const n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),{aria:s={},checked:l=!1,classes:c,disabled:u,labelHidden:h,name:p,onBlur:m,onFocus:b,onValue:g,onOut:v,onOver:f,readOnly:y,required:x,theme:j,valid:O,value:w,widgetId:k=n}=t(),[I]=e(),P=a.classes(_);return Object(i.j)("div",{key:"root",classes:[a.variant(),P.root,l?P.checked:null,u?P.disabled:null,o.isFocused("root")?P.focused:null,!1===O?P.invalid:null,!0===O?P.valid:null,y?P.readonly:null,x?P.required:null]},Object(i.j)("div",{classes:P.inputWrapper},Object(i.j)("input",Object.assign({id:k},Object(r.a)(s),{classes:P.input,checked:l,disabled:u,focus:o.shouldFocus(),"aria-invalid":!1===O?"true":null,name:p,readonly:y,"aria-readonly":!0===y?"true":null,required:x,type:"checkbox",value:w,onblur:()=>m&&m(),onchange:e=>{e.stopPropagation();const t=e.target;g(t.checked)},onfocus:()=>b&&b(),onpointerenter:()=>f&&f(),onpointerleave:()=>v&&v()})),Object(i.j)("div",{classes:P.background})),I&&Object(i.j)(d.a,{key:"label",classes:c,theme:j,disabled:u,focused:o.isFocused("root"),valid:O,readOnly:y,required:x,hidden:h,forId:k,secondary:!0},I))}),h=a(282),p=a(49),m=a(47),b=a(22),g=a(25),v=a(46);var f=Object(i.a)({icache:Object(b.a)(),theme:g.a,focus:l.a,validity:v.a}).properties().children()(function({id:e,middleware:{icache:t,theme:a,focus:o,validity:n},properties:s,children:l}){const c=a.classes(h);function _(e,t){let a,{valid:o,onValidate:i}=s();"object"==typeof o&&(a=o.message,o=o.valid),e===o&&t===a||i&&i(e,t)}const{aria:u={},columns:b=20,disabled:g,widgetId:v=`textarea-${e}`,maxLength:f,minLength:y,name:x,placeholder:j,readOnly:O,required:w,rows:k=2,initialValue:I,wrapText:P,theme:q,classes:F,labelHidden:V,helperText:B,onValidate:S}=s();let{value:T}=s();if(void 0===T){T=t.get("value"),I!==t.get("initialValue")&&(t.set("value",I),t.set("initialValue",I),T=I)}S&&function(){const{customValidator:e,value:a=t.get("value")||""}=s(),o=t.getOrSet("dirty",!1);if(""===a&&!o)return void _(void 0,"");t.set("dirty",!0);let{valid:i,message:l=""}=n.get("input",a||"");if(i&&e){const t=e(a);t&&(i=t.valid,l=t.message||"")}_(i,l)}();const{valid:C,message:N}=function(){const{valid:e={valid:void 0,message:void 0}}=s();return"boolean"==typeof e?{valid:e,message:void 0}:{valid:e.valid,message:e.message}}(),W=!1===C&&N||B,$=o.isFocused("input"),[A]=l();return Object(i.j)("div",{key:"root",classes:[a.variant(),c.root]},Object(i.j)("div",{key:"wrapper",classes:[c.wrapper,g?c.disabled:null,!1===C?c.invalid:null,!0===C?c.valid:null,O?c.readonly:null,w?c.required:null,$?c.focused:null]},A?Object(i.j)(d.a,{theme:a.compose(p,h,"label"),classes:F,disabled:g,valid:C,readOnly:O,required:w,hidden:V,forId:v,focused:$,active:!!T||$},A):null,Object(i.j)("div",{classes:c.inputWrapper},Object(i.j)("textarea",Object.assign({id:v,key:"input"},Object(r.a)(u),{classes:c.input,cols:`${b}`,disabled:g,focus:o.shouldFocus,"aria-invalid":!1===C?"true":null,maxlength:f?`${f}`:null,minlength:y?`${y}`:null,name:x,placeholder:j,readOnly:O,"aria-readonly":O?"true":null,required:w,rows:`${k}`,value:T,wrap:P,onblur:()=>{const{onBlur:e}=s();e&&e()},onfocus:()=>{const{onFocus:e}=s();e&&e()},oninput:e=>{const{onValue:a}=s();e.stopPropagation();const o=e.target.value;t.set("value",o),a&&a(o)},onkeydown:e=>{const{onKeyDown:t}=s();e.stopPropagation(),t&&t(e.which,()=>{e.preventDefault()})},onkeyup:e=>{const{onKeyUp:t}=s();e.stopPropagation(),t&&t(e.which,()=>{e.preventDefault()})},onclick:()=>{const{onClick:e}=s();e&&e()},onpointerenter:()=>{const{onOver:e}=s();e&&e()},onpointerleave:()=>{const{onOut:e}=s();e&&e()}})))),Object(i.j)(m.a,{text:W,valid:C,classes:F,theme:q}))}),y=a(34);const x=Object(i.a)({node:i.i}),j={height:0,left:0,top:0,width:0},O={height:0,left:0,top:0,width:0},w={bottom:0,left:0,right:0,top:0},k={height:0,left:0,top:0,width:0},I={width:0,height:0};var P=x(({middleware:{node:e}})=>({get(t){const a=e.get(t);if(!a)return{client:Object.assign({},j),offset:Object.assign({},O),position:Object.assign({},w),scroll:Object.assign({},k),size:Object.assign({},I)};const o=a.getBoundingClientRect();return{client:{height:a.clientHeight,left:a.clientLeft,top:a.clientTop,width:a.clientWidth},offset:{height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop,width:a.offsetWidth},position:{bottom:o.bottom,left:o.left,right:o.right,top:o.top},scroll:{height:a.scrollHeight,left:a.scrollLeft,top:a.scrollTop,width:a.scrollWidth},size:{width:o.width,height:o.height}}}})),q=a(285),F=a(48);var V=Object(i.a)({theme:g.a}).properties()(function({properties:e,middleware:{theme:t}}){const{aria:a={hidden:"true"},type:o,altText:n,size:s}=e(),l=t.classes(q),c=s&&l[s];return Object(i.j)("virtual",null,Object(i.j)("i",Object.assign({classes:[t.variant(),l.icon,l[o],c]},Object(r.a)(a))),n?Object(i.j)("span",{classes:F.visuallyHidden},n):null)}),B=a(288),S=a(291);var T=Object(i.a)({dimensions:P,focus:l.a,icache:Object(b.a)(),theme:g.a}).properties()(function({id:e,children:t,properties:a,middleware:{dimensions:o,focus:n,icache:s,theme:l}}){const c=l.classes(B),{closeable:r=!0,headingLevel:d,initialOpen:_,onClose:u,onOpen:h,name:p,theme:m}=a();let{open:b}=a();const g=void 0===s.get("open");if(void 0===b){b=s.get("open"),_!==s.get("initialOpen")&&(s.set("open",_),s.set("initialOpen",_),b=_)}return Object(i.j)("div",{classes:[l.variant(),c.root,b?c.open:null,S.rootFixed]},Object(i.j)("div",{"aria-level":d?`${d}`:null,classes:[c.title,r?c.closeable:null,S.titleFixed,r?S.closeableFixed:null],role:"heading"},Object(i.j)("button",{"aria-controls":`${e}-content`,"aria-expanded":`${b}`,disabled:!r,classes:[S.titleButtonFixed,c.titleButton],focus:n.isFocused("title-button"),key:"title-button",onclick:e=>{e.stopPropagation(),s.set("open",!b),b?u&&u():h&&h()},type:"button"},Object(i.j)("span",{classes:c.arrow},Object(i.j)(V,{type:b?"downIcon":"rightIcon",theme:m})),p)),Object(i.j)("div",{"aria-hidden":b?null:"true","aria-labelledby":`${e}-title`,classes:[c.content,!g&&c.contentTransition,S.contentFixed],id:`${e}-content`,key:"content",styles:{marginTop:b?"0px":`-${o.get("content").offset.height}px`}},t()))}),C=a(35);a.d(t,"default",function(){return N});class N extends n.a{constructor(){super(...arguments),this.Params={idfueling:"0",rowkey:0,date_reg:"2020-01-01",idvehicle:0,iduser:"0",odometer:0,quantity:0,idfueltype:"0",price_by_unit:"0",total:0,full_tank:!1,geox:0,geoy:0,address:"",last_lost:!1,note:"",idaccount:0},this._openAddress=!1}SnackBar(e){}async GetAddress(){let e=`[out:json][timeout:10];is_in(${this.Params.geox},${this.Params.geoy})->.a;relation(pivot.a);out tags qt;(way(around:20,${this.Params.geox},${this.Params.geoy}););out tags qt;`,t=await fetch("https://overpass-api.de/api/interpreter",{credentials:"omit",headers:{accept:"*/*","accept-language":"es-ES,es;q=0.9,en;q=0.8","content-type":"application/x-www-form-urlencoded; charset=UTF-8","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"cross-site"},referrer:`https://www.openstreetmap.org/query?lat=${this.Params.geox}&lon=${this.Params.geoy}`,referrerPolicy:"no-referrer-when-downgrade",body:e,method:"POST",mode:"cors"}),a=await t.json();console.log(a);var o="";a.elements&&a.elements.forEach((e,t)=>{e.tags&&(0==t?o+=e.tags.name:!e.tags.timezone&&e.tags.name&&(o+=", "+e.tags.name)),a.elements.length==t+1&&(this.Params.address=o,this.invalidate(),this.SnackBar(o))})}async Save(){if(console.log(this.Params),this.Params.odometer>0&&Number(this.Params.idvehicle)>0)try{let e=await fetch("/fueling_cu",{method:"POST",body:JSON.stringify(this.Params),headers:{"Content-Type":"application/json"}}),t=await e.json();t.idfueling&&t.idfueling>0?window.location.href="/#fuelinglog":(this.SnackBar("No se pudo guardar"),this.invalidate())}catch(e){this.SnackBar("No se pudo guardar"),this.invalidate()}else this.SnackBar("Complete los campos requerido");this.invalidate()}async onAttach(){if(this.Params.idaccount=window.GlobalStore.get(window.GlobalStore.path("root","user","idaccount")),this.Params.idvehicle=window.GlobalStore.get(window.GlobalStore.path("root","user","preferences","last_vehicle_selected","idvehicle")),this.properties.idfueling){var e=window.location.hash.split("?")[1],t=new URLSearchParams(e);this.Params.idfueling=t.get("idfueling")||"-3";var a="/fueling?idfueling="+this.Params.idfueling;const o=await fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}});if(200==o.status){let e=await o.json();e.length>0&&(this.Params=e[0])}console.log(o),this.invalidate()}}getLocation(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{this.Params.geox=e.coords.latitude,this.Params.geoy=e.coords.longitude,this.invalidate(),this.Params.address.length<2&&this.GetAddress().then()}):this.SnackBar("No se pudo obtener las coordenadas")}render(){return Object(i.k)("div",{},[Object(i.l)(C.a,{}),Object(i.k)("div",{},[Object(i.l)(s.a,{type:"text",disabled:!1,readOnly:!1,required:!0,value:this.Params.odometer,onValue:e=>{this.Params.odometer=Number(e),this.invalidate()}},[{label:"Odómetro (Km)"}]),Object(i.l)(u,{checked:this.Params.full_tank,aria:{describedBy:"Tanque lleno"},name:"full_tank",onValue:e=>{this.Params.full_tank=e,console.log(this.Params.full_tank),this.invalidate()}},["Tanque lleno"]),Object(i.l)(s.a,{type:"text",disabled:!1,readOnly:!1,required:!0,value:this.Params.quantity,onValue:e=>{this.Params.quantity=Number(e),this.invalidate()}}),Object(i.l)(s.a,{type:"number",disabled:!1,readOnly:!1,value:this.Params.price_by_unit,onValue:e=>{this.Params.price_by_unit=e,this.invalidate()}},[{label:"Precio x Unidad"}]),Object(i.l)(s.a,{type:"number",disabled:!1,readOnly:!1,value:this.Params.total,onValue:e=>{this.Params.total=Number(e),this.invalidate()}},[{label:"Costo Total"}]),Object(i.l)(s.a,{type:"date",disabled:!1,readOnly:!1,required:!0,placeholder:"Fecha",value:this.Params.date_reg,onValue:e=>{this.Params.date_reg=e,this.invalidate()}},[{label:"Fecha"}]),Object(i.l)(u,{checked:this.Params.last_lost,aria:{describedBy:"Última recarga perdida"},name:"last_lost",onValue:e=>{this.Params.last_lost=e,console.log(this.Params.last_lost),this.invalidate()}},["Última recarga perdida"]),Object(i.l)(s.a,{type:"text",disabled:!1,readOnly:!1,required:!0,placeholder:"Hora",value:this.Params.date_reg,onValue:e=>{this.Params.date_reg=e,this.invalidate()}},[{label:"Hora"}]),Object(i.k)("div",{styles:{gridColumnEnd:"span 3"}},[Object(i.l)(T,{name:"Punto de abastecimiento",open:this._openAddress,onOpen:()=>{this._openAddress=!0,this.getLocation(),console.log("Abrió pane")},onClose:()=>{this._openAddress=!1,console.log("Cerró pane")}},[Object(i.k)("div",{},[Object(i.k)("div",{classes:"css.grid2 "},[Object(i.l)(s.a,{type:"number",disabled:!1,readOnly:!1,value:this.Params.geoy,onValue:e=>{this.Params.geoy=0,this.invalidate()}},[{label:"Coordenada Y"}]),Object(i.l)(s.a,{type:"number",disabled:!1,readOnly:!1,value:this.Params.geox,onValue:e=>{this.Params.geox=0,this.invalidate()}},[{label:"Coordenada X"}]),Object(i.k)("div",{styles:{gridColumnEnd:"span 2"}},[Object(i.l)(f,{columns:40,rows:3,placeholder:"Dirección",value:this.Params.address,onValue:e=>{this.Params.address=e,this.invalidate()}},["Dirección"])])])])])]),Object(i.k)("div",{classes:[],styles:{gridColumnEnd:"span 3"}},[Object(i.l)(f,{columns:40,rows:5,placeholder:"Notas",key:"text-area",value:this.Params.note,onValue:e=>{this.Params.note=e,this.invalidate()}},["Notas"])])])])}}o.a([Object(y.a)()],N.prototype,"Params",void 0),o.a([Object(y.a)()],N.prototype,"_openAddress",void 0)}}]);
//# sourceMappingURL=Fueling.7928a0da36767e858f50.bundle.js.map