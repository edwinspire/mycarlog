/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[4],{108:function(e,t,o){"use strict";var i=o(39),s=o(18),a=o(19),n=o(22),r=o(23),l=o(20),c=o(21),d=o(26),h=o(30),p=o(24),u=o(31),_=o(25),b=o(29),g=o(37),v=o(35),m=o(32),O=o(42);let f=class extends(Object(c.c)(a.a)){_onClick(e){e.stopPropagation();const{index:t,key:o,option:i,onClick:s}=this.properties;s&&s(i,t,o)}render(){const{css:e=[],disabled:t=!1,id:o,label:i,selected:a=!1}=this.properties;return Object(s.j)("div",{"aria-disabled":t?"true":null,"aria-selected":t?null:String(a),classes:this.theme(e),id:o,role:"option",onmousedown:this._onClick},[i])}};var k=f=l.__decorate([Object(c.f)(O)],f),j=o(55);class y extends m.b{scroll(e,t){const o=this.getNode(e);o&&(o.scrollTop=t)}}let S=class extends(Object(c.c)(Object(d.a)(a.a))){constructor(){super(...arguments),this._boundRenderOption=this.renderOption.bind(this),this._idBase=Object(p.c)()}_getOptionDisabled(e,t){const{getOptionDisabled:o}=this.properties;return!!o&&o(e,t)}_getOptionId(e){const{optionData:t=[],getOptionId:o}=this.properties;return o?o(t[e],e):`${this._idBase}-${e}`}_onKeyDown(e){e.stopPropagation();const{activeIndex:t=0,key:o,optionData:i=[],onActiveIndexChange:s,onOptionSelect:a,onKeyDown:n}=this.properties;n&&n(e,o);const r=i[t];let l;switch(e.which){case _.a.Enter:case _.a.Space:e.preventDefault(),this._getOptionDisabled(r,t)||a&&a(r,t,o);break;case _.a.Down:e.preventDefault(),l=(t+1)%i.length,s&&s(l,o);break;case _.a.Up:e.preventDefault(),l=(t-1+i.length)%i.length,s&&s(l,o);break;case _.a.Home:case _.a.PageUp:s&&s(0,o);break;case _.a.End:case _.a.PageDown:s&&s(i.length-1,o)}}_onOptionClick(e,t,o){const{onActiveIndexChange:i,onOptionSelect:s}=this.properties;this._getOptionDisabled(e,t)||(i&&i(t,o),s&&s(e,t,o))}animateScroll(e){this.meta(y).scroll("root",e)}_calculateScroll(){const{activeIndex:e=0}=this.properties,t=this.meta(v.b).get("root"),o=t.scroll.top,i=t.offset.height,s=this.meta(v.b).get(this._getOptionId(e)).offset;s.top-o<0?this.animateScroll(s.top):s.top+s.height>o+i&&this.animateScroll(s.top+s.height-i)}getModifierClasses(){const{visualFocus:e}=this.properties,t=this.meta(h.a).get("root");return[e||t.containsFocus?O.focused:null]}getOptionClasses(e,t,o){return[O.option,e?O.activeOption:null,t?O.disabledOption:null,o?O.selectedOption:null]}renderOptionLabel(e,t){const{getOptionLabel:o}=this.properties;return o?o(e,t):`${e}`}renderOption(e,t){const{activeIndex:o=0,getOptionSelected:i,theme:a,classes:n}=this.properties,r=this._getOptionDisabled(e,t),l=!!i&&i(e,t);return Object(s.j)("div",{key:this._getOptionId(t),role:"presentation"},[Object(s.k)(k,{active:o===t,css:this.getOptionClasses(o===t,r,l),classes:n,disabled:r,label:this.renderOptionLabel(e,t),id:this._getOptionId(t),index:t,key:`option-${t}`,option:e,selected:l,theme:a,onClick:this._onOptionClick})])}renderOptions(){const{optionData:e=[]}=this.properties;return e.map(this._boundRenderOption)}render(){const{activeIndex:e=0,aria:t={},widgetId:o,multiselect:i=!1,tabIndex:a=0}=this.properties,n=this.getModifierClasses();return this.meta(j.a).get("root"),this._calculateScroll(),Object(s.j)("div",Object.assign({},Object(_.b)(t),{"aria-activedescendant":this._getOptionId(e),"aria-multiselectable":i?"true":null,classes:this.theme([O.root,...n]),id:o,focus:this.shouldFocus,key:"root",role:"listbox",tabIndex:a,onkeydown:this._onKeyDown}),this.renderOptions())}};var x=S=l.__decorate([Object(c.f)(O),Object(r.b)("optionData",n.b)],S),w=o(48),P=o(64);let I=class extends(Object(c.c)(Object(d.a)(a.a))){constructor(){super(...arguments),this._focusNode="trigger",this._ignoreBlur=!1,this._open=!1,this._baseId=Object(p.c)(),this._inputText="",this._getOptionSelected=((e,t)=>{const{getOptionValue:o,value:i}=this.properties;return o?o(e,t)===i:"string"==typeof e&&e===i})}_getOptionLabel(e){const{getOptionLabel:t}=this.properties,o=e?`${e}`:"";return t?t(e):o}_getSelectedIndexOnInput(e){const{options:t=[],getOptionDisabled:o,getOptionText:i}=this.properties;if(void 0!==e.key&&1===e.key.length){let s;return clearTimeout(this._resetInputTextTimer),this._resetInputTextTimer=setTimeout(()=>{this._inputText=""},800),this._inputText+=`${e.key}`,t.some((e,t)=>{if(o&&o(e,t))return!1;const a=i?i(e):this._getOptionLabel(e);return"string"==typeof a&&0===a.toLowerCase().indexOf(this._inputText.toLowerCase())&&(s=t,!0)}),s}}_onBlur(e){this.properties.onBlur&&this.properties.onBlur(this.properties.key||"")}_onFocus(e){this.properties.onFocus&&this.properties.onFocus(this.properties.key||"")}_onNativeChange(e){const{key:t,getOptionValue:o,options:i=[],onChange:s}=this.properties;e.stopPropagation();const a=e.target.value,n=Object(u.a)(i,(e,t)=>o?o(e,t)===a:"string"==typeof e&&e===a);n&&s&&s(n,t)}_openSelect(){this.focus(),this._focusNode="listbox",this._ignoreBlur=!0,this._open=!0,this._focusedIndex=this._focusedIndex||0,this.invalidate()}_closeSelect(){this._focusNode="trigger",this._ignoreBlur=!0,this._open=!1,this.invalidate()}_onDropdownKeyDown(e){e.stopPropagation(),e.which===_.a.Escape&&(this._closeSelect(),this.focus())}_onTriggerClick(e){e.stopPropagation(),this._open?this._closeSelect():this._openSelect()}_onTriggerBlur(e){if(this._ignoreBlur)return void(this._ignoreBlur=!1);const{key:t,onBlur:o}=this.properties;o&&o(t),this._closeSelect()}_onTriggerKeyDown(e){const{key:t,options:o=[],onChange:i}=this.properties;e.stopPropagation();const s=this._getSelectedIndexOnInput(e);void 0!==s&&(this._focusedIndex=s,i&&i(o[s],t),this.invalidate()),e.which===_.a.Down&&this._openSelect()}_onTriggerMouseDown(){this._ignoreBlur=!0}_onListboxBlur(e){if(this._ignoreBlur)return void(this._ignoreBlur=!1);const{key:t,onBlur:o}=this.properties;o&&o(t),this._closeSelect()}renderExpandIcon(){const{theme:e,classes:t}=this.properties;return Object(s.j)("span",{classes:this.theme(P.arrow)},[Object(s.k)(b.a,{type:"downIcon",theme:e,classes:t})])}renderNativeSelect(){const{aria:e={},disabled:t,getOptionDisabled:o,getOptionId:i,getOptionSelected:a,getOptionValue:n,widgetId:r=this._baseId,invalid:l,name:c,options:d=[],readOnly:h,required:p,value:u}=this.properties,b=d.map((e,t)=>Object(s.j)("option",{value:n?n(e,t):void 0,id:i?i(e,t):void 0,disabled:o?o(e,t):void 0,selected:a?a(e,t):void 0},[this._getOptionLabel(e)]));return Object(s.j)("div",{classes:this.theme(P.inputWrapper)},[Object(s.j)("select",Object.assign({},Object(_.b)(e),{classes:this.theme(P.input),disabled:t,focus:this.shouldFocus,"aria-invalid":l?"true":null,id:r,name:c,readOnly:h,"aria-readonly":h?"true":null,required:p,value:u,onblur:this._onBlur,onchange:this._onNativeChange,onfocus:this._onFocus}),b),this.renderExpandIcon()])}renderCustomSelect(){const{getOptionDisabled:e,getOptionId:t,getOptionLabel:o,getOptionSelected:i=this._getOptionSelected,widgetId:a=this._baseId,key:n,options:r=[],theme:l,classes:c,onChange:d}=this.properties;void 0===this._focusedIndex&&r.map(i).forEach((e,t)=>{e&&(this._focusedIndex=t)});const{_open:h,_focusedIndex:p=0}=this;return Object(s.j)("div",{key:"wrapper",classes:this.theme([P.inputWrapper,h?P.open:null])},[...this.renderCustomTrigger(),Object(s.j)("div",{classes:this.theme(P.dropdown),onfocusout:this._onListboxBlur,onkeydown:this._onDropdownKeyDown},[Object(s.k)(x,{key:"listbox",activeIndex:p,widgetId:a,focus:"listbox"===this._focusNode?this.shouldFocus:()=>!1,optionData:r,tabIndex:h?0:-1,getOptionDisabled:e,getOptionId:t,getOptionLabel:o,getOptionSelected:i,theme:l,classes:c,onActiveIndexChange:e=>{this._focusedIndex=e,this.invalidate()},onOptionSelect:e=>{d&&d(e,n),this._closeSelect(),this.focus()},onKeyDown:e=>{const t=this._getSelectedIndexOnInput(e);void 0!==t&&(this._focusedIndex=t,this.invalidate())}})])])}renderCustomTrigger(){const{aria:e={},disabled:t,getOptionSelected:o=this._getOptionSelected,invalid:i,options:a=[],placeholder:n,readOnly:r,required:l,value:c}=this.properties;let d,h=!1;const p=Object(u.a)(a,(e,t)=>o(e,t));return p?d=this._getOptionLabel(p):(h=!0,d=n||this._getOptionLabel(a[0])),[Object(s.j)("button",Object.assign({},Object(_.b)(e),{"aria-controls":this._baseId,"aria-expanded":`${this._open}`,"aria-haspopup":"listbox","aria-invalid":i?"true":null,"aria-required":l?"true":null,classes:this.theme([P.trigger,h?P.placeholder:null]),disabled:t||r,focus:"trigger"===this._focusNode?this.shouldFocus:()=>!1,key:"trigger",type:"button",value:c,onblur:this._onTriggerBlur,onclick:this._onTriggerClick,onfocus:this._onFocus,onkeydown:this._onTriggerKeyDown,onmousedown:this._onTriggerMouseDown}),[d]),this.renderExpandIcon()]}render(){const{label:e,labelHidden:t,disabled:o,helperText:i,widgetId:a=this._baseId,invalid:n,readOnly:r,required:l,useNativeElement:c=!1,theme:d,classes:p}=this.properties,u=this.meta(h.a).get("root");return Object(s.j)("div",{key:"root",classes:this.theme([P.root,o?P.disabled:null,u.containsFocus?P.focused:null,!0===n?P.invalid:null,!1===n?P.valid:null,r?P.readonly:null,l?P.required:null])},[e?Object(s.k)(g.a,{theme:d,classes:p,disabled:o,focused:u.containsFocus,invalid:n,readOnly:r,required:l,hidden:t,forId:a},[e]):null,c?this.renderNativeSelect():this.renderCustomSelect(),Object(s.k)(w.a,{theme:d,text:i})])}};var C=I=l.__decorate([Object(c.f)(P),Object(r.b)("options",n.b)],I),T=o(38);o.d(t,"a",function(){return D});class D extends a.b{constructor(){super(),this.Options=[],this.OptionsLabels=[],this.OptionValue="",this.OptionLabel="",Object(r.b)("value",n.a,this.diffFooReaction)(this)}diffFooReaction(e,t){this.internalValue=t.value}get internalValue(){return this.OptionValue}set internalValue(e){console.log("Set value ",e,e.length),e?this.Options.forEach((t,o)=>{t.value==e&&(this.OptionValue=t.value,this.OptionLabel=t.label,this.properties.onSelect&&this.properties.onSelect(t.label,t.value,t.disabled))}):console.log(e+" is not valid.")}async onAttach(){try{let e=await fetch(this.properties.url,{method:"POST",body:JSON.stringify(this.properties.params),headers:{"Content-Type":"application/json"}});if(200==e.status){let t=await e.json();this.Options=t,this.OptionsLabels=[],await this.Options.forEach((e,t)=>{this.OptionsLabels.push(e.label),this.Options.length==t+1&&(this.internalValue=this.properties.value,console.log("Invalida para volver a renderisar."),this.invalidate())})}else 401==e.status&&(window.location.href="/#login")}catch(e){console.log(e),this.invalidate()}}render(){return Object(s.k)(C,{label:this.properties.label,options:this.OptionsLabels,useNativeElement:!0,key:"simple",value:this.OptionLabel,onChange:e=>{console.log(this.Options,e),this.Options.forEach((t,o)=>{t.label==e&&(this.internalValue=t.value)})}},[])}}Object(i.a)([Object(T.a)()],D.prototype,"OptionLabel",void 0)},124:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var i,s=o(20),a=o(19),n=o(21),r=o(26),l=o(30),c=o(37),d=o(25),h=o(18),p=o(24),u=o(125);!function(e){e.normal="normal",e.toggle="toggle"}(i||(i={}));let _=class extends(Object(n.c)(Object(r.a)(a.a))){constructor(){super(...arguments),this._uuid=Object(p.c)()}_onBlur(e){const t=e.target;this.properties.onBlur&&this.properties.onBlur(t.value,t.checked)}_onChange(e){e.stopPropagation();const t=e.target;this.properties.onChange&&this.properties.onChange(t.value,t.checked)}_onClick(e){e.stopPropagation();const t=e.target;this.properties.onClick&&this.properties.onClick(t.value,t.checked)}_onFocus(e){const t=e.target;this.properties.onFocus&&this.properties.onFocus(t.value,t.checked)}_onMouseDown(e){e.stopPropagation(),this.properties.onMouseDown&&this.properties.onMouseDown()}_onMouseUp(e){e.stopPropagation(),this.properties.onMouseUp&&this.properties.onMouseUp()}_onTouchStart(e){e.stopPropagation(),this.properties.onTouchStart&&this.properties.onTouchStart()}_onTouchEnd(e){e.stopPropagation(),this.properties.onTouchEnd&&this.properties.onTouchEnd()}_onTouchCancel(e){e.stopPropagation(),this.properties.onTouchCancel&&this.properties.onTouchCancel()}getRootClasses(){const{checked:e=!1,disabled:t,invalid:o,mode:s,readOnly:a,required:n}=this.properties,r=this.meta(l.a).get("root");return[u.root,s===i.toggle?u.toggle:null,e?u.checked:null,t?u.disabled:null,r.containsFocus?u.focused:null,!0===o?u.invalid:null,!1===o?u.valid:null,a?u.readonly:null,n?u.required:null]}renderToggle(){const{checked:e,mode:t,onLabel:o,offLabel:s}=this.properties;return t===i.toggle?[s?Object(h.j)("div",{key:"offLabel",classes:this.theme(u.offLabel),"aria-hidden":e?"true":null},[s]):null,Object(h.j)("div",{key:"toggle",classes:this.theme(u.toggleSwitch)}),o?Object(h.j)("div",{key:"onLabel",classes:this.theme(u.onLabel),"aria-hidden":e?null:"true"},[o]):null]:[]}render(){const{aria:e={},classes:t,checked:o=!1,disabled:i,widgetId:s=this._uuid,invalid:a,label:n,labelAfter:r=!0,labelHidden:p,theme:_,name:b,readOnly:g,required:v,value:m}=this.properties,O=this.meta(l.a).get("root"),f=[Object(h.j)("div",{classes:this.theme(u.inputWrapper)},[...this.renderToggle(),Object(h.j)("input",Object.assign({id:s},Object(d.b)(e),{classes:this.theme(u.input),checked:o,disabled:i,focus:this.shouldFocus,"aria-invalid":!0===a?"true":null,name:b,readOnly:g,"aria-readonly":!0===g?"true":null,required:v,type:"checkbox",value:m,onblur:this._onBlur,onchange:this._onChange,onclick:this._onClick,onfocus:this._onFocus,onmousedown:this._onMouseDown,onmouseup:this._onMouseUp,ontouchstart:this._onTouchStart,ontouchend:this._onTouchEnd,ontouchcancel:this._onTouchCancel}))]),n?Object(h.k)(c.a,{key:"label",classes:t,theme:_,disabled:i,focused:O.containsFocus,invalid:a,readOnly:g,required:v,hidden:p,forId:s,secondary:!0},[n]):null];return Object(h.j)("div",{key:"root",classes:this.theme(this.getRootClasses())},r?f:f.reverse())}};_=s.__decorate([Object(n.f)(u)],_),t.b=_},125:function(e,t,o){o(126),e.exports={" _key":"@dojo/widgets/checkbox",root:"checkbox-m__root__306Hj",input:"checkbox-m__input__2c32X",inputWrapper:"checkbox-m__inputWrapper__18x6Q",checked:"checkbox-m__checked__3Mh6h",disabled:"checkbox-m__disabled__OQT1C",focused:"checkbox-m__focused__35iMF",readonly:"checkbox-m__readonly__jOqIs",required:"checkbox-m__required__g1cWt",invalid:"checkbox-m__invalid__FhP_j",valid:"checkbox-m__valid__19doN",toggle:"checkbox-m__toggle__3gWDr",onLabel:"checkbox-m__onLabel__1ISHp",offLabel:"checkbox-m__offLabel__1gBqt",toggleSwitch:"checkbox-m__toggleSwitch__cSjeF"}},126:function(e,t,o){},27:function(e,t,o){"use strict";o.d(t,"a",function(){return s});var i=o(0);o(1);function s(e,t=!1,o=!1){return o?i.default[e].bind(i.default):i.default[e]}},317:function(e,t,o){e.exports={" _key":"OpenMonitoringSystem/Vehicle",entrada:"Vehicle-m__entrada__309e8d36oBI",boton:"Vehicle-m__boton__309e8dnmqJN",favorite_checkbox:"Vehicle-m__favorite_checkbox__309e8d2k_zs"}},334:function(e,t,o){"use strict";o.r(t);var i=o(18),s=o(39),a=o(19),n=o(317),r=o(36),l=o(33),c=o(124),d=o(58),h=o(108),p=o(49),u=o(38),_=o(41),b=o(22),g=o(23);class v extends a.b{constructor(){super(),this._openSnack=!1,this._MsgSnackBar="",this.SnackBarType="error",Object(g.b)("preference",b.a,this.diffFooReaction)(this)}getLocalUser(){var e={};try{let t=localStorage.getItem("user");if(t){let o=JSON.parse(t);o&&(e=o)}}catch(e){console.error(e)}return console.log(e),e}diffFooReaction(e,t){console.log(t);try{let e=this.getLocalUser();switch(t.preference.name){case"default_idvehicle":e.default_idvehicle=t.preference.value;break;default:if(e&&e.preferences){let o=e.preferences;o[t.preference.name]!=t.preference.value?(o[t.preference.name]=t.preference.value,e.preferences=o,localStorage.setItem("user",JSON.stringify(e)),this.Save()):console.log("No ha cambiado la preferencia")}else this.openSnack("La preferencia "+t.preference.name+" no existe","error")}}catch(e){console.log(e),this.openSnack(e,"error")}}async Save(){var e=this.getLocalUser();if(e.preferences){let t=await fetch("/preferences_u",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),o=await t.json();console.log(o),o.iduser&&o.rowkey&&(e.rowkey=o.rowkey,localStorage.setItem("user",JSON.stringify(e)))}}openSnack(e,t){this._openSnack=!0,this._MsgSnackBar=e,this.SnackBarType=t,setTimeout(()=>{this._openSnack=!1},4e3)}render(){return Object(i.k)(p.a,{open:this._openSnack,leading:!1,type:this.SnackBarType,messageRenderer:()=>this._MsgSnackBar})}}Object(s.a)([Object(u.a)()],v.prototype,"_openSnack",void 0),Object(s.a)([Object(u.a)()],v.prototype,"_MsgSnackBar",void 0);var m=o(50);class O extends a.b{constructor(){super(...arguments),this.favorite={preference:{name:"",value:""}},this.checkbox_favorite=!1,this.Params={idvehicle:"-1",idaccount:localStorage.getItem("idaccount"),idcontact:"0",rowkey:0,license_plate:"",year:"",fuel_tank_capacity:"",idfuel_tank_capacitytype:"0",vin:"",idvehicletype:"0",idmark:"0",idmodel:"0",idcolor:"0",idfueltype:"0",idunit_measure_fuel_tank:"0",note:""},this._openSnack=!1,this._MsgSnackBar="-"}SnackBar(e){console.log("SnackBar "+e),this._openSnack=!0,this._MsgSnackBar=e,this.invalidate(),setTimeout(()=>{this._openSnack=!1,this.invalidate()},4e3)}async Save(){if(Number(this.Params.idcontact)>0)if(this.Params.license_plate.length>0){let e=await fetch("/vehicle_cu",{method:"POST",body:JSON.stringify(this.Params),headers:{"Content-Type":"application/json"}}),t=await e.json();200==e.status?(console.log(t),t.idvehicle>0?window.location.href="/#vehicles?idvehicle="+t.idvehicle+"&idaccount="+localStorage.getItem("idaccount"):this.SnackBar("No se pudo guardar")):401==e.status?window.location.href="/#login":this.SnackBar("No se pudo guardar "+e.status)}else this.SnackBar("Complete los campos que son requeridos");else this.SnackBar("Debe seleccionar un Propietario");this.invalidate()}async onAttach(){if(console.log(this.properties.idvehicle),this.properties.idvehicle){var e=window.location.hash.split("?")[1],t=new URLSearchParams(e);this.Params.idvehicle=t.get("idvehicle")||"-2";var o="/vehicle?idvehicle="+this.Params.idvehicle+"&idaccount="+localStorage.getItem("idaccount");const i=await fetch(o,{method:"GET",headers:{"Content-Type":"application/json"}});let s=await i.json();console.log(s),s.length>0&&(this.Params=s[0],this.invalidate())}}render(){return Object(i.j)("div",{},[Object(i.k)(m.a,{heading:"VEHÍCULO",collapseWidth:150},[Object(i.k)(_.a,{label:"NUEVO",classes:["fas","fa-car"],ShowLabel:!0,onClick:e=>{this.Params={idaccount:localStorage.getItem("idaccount"),idvehicle:"-1",idcontact:"0",rowkey:0,license_plate:"",year:"",fuel_tank_capacity:"",idfuel_tank_capacitytype:"0",vin:"",idvehicletype:"0",idmark:"0",idmodel:"0",idcolor:"0",idfueltype:"0",idunit_measure_fuel_tank:"0",note:""}}}),Object(i.j)("span",{},["|"]),Object(i.k)(_.a,{label:"GUARDAR",classes:["fas","fa-save"],ShowLabel:!0,onClick:e=>{this.Save()}})]),Object(i.j)("div",{classes:[r.container]},[Object(i.j)("div",{classes:n.favorite_checkbox},[Object(i.k)(c.b,{checked:this.checkbox_favorite,aria:{describedBy:"Predeterminado"},label:"Predeterminado",mode:c.a.toggle,name:"Predeterminado",onChange:(e,t)=>{Number(this.Params.idvehicle)>0?(this.checkbox_favorite=t,this.favorite.preference=t?{name:"default_idvehicle",value:this.Params.idvehicle}:{name:"default_idvehicle",value:0},this.invalidate()):this.SnackBar("Debe primero guardar el vehículo")}})]),Object(i.j)("div",{classes:[r.container_field_reset]},[Object(i.k)(h.a,{label:"Propietario",value:this.Params.idcontact,url:"/toselect/contacts",onSelect:(e,t,o)=>{console.log("onSelect",e,t,o),this.Params.idcontact=t}},[])]),Object(i.j)("div",{classes:[r.row]},[Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(l.a,{type:"text",label:"Placa",disabled:!1,readOnly:!1,required:!0,placeholder:"Placa",value:this.Params.license_plate,onChange:e=>{this.Params.license_plate=e,this.invalidate()}},[])]),Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(h.a,{label:"Marca",value:this.Params.idmark,url:"/toselect/marks",onSelect:(e,t,o)=>{console.log("onSelect",e,t,o),this.Params.idmark=t}},[])])]),Object(i.j)("div",{classes:r.row},[Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(l.a,{type:"number",label:"Año",disabled:!1,readOnly:!1,value:this.Params.year,onChange:e=>{this.Params.year=e,this.invalidate()}},[])]),Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(l.a,{type:"text",label:"VIN",disabled:!1,readOnly:!1,value:this.Params.vin,onChange:e=>{this.Params.vin=e,this.invalidate()}},[])])]),Object(i.j)("div",{classes:r.row},[Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(h.a,{label:"Color",url:"/toselect/colors",value:this.Params.idcolor,onSelect:(e,t,o)=>{console.log("onSelect",e,t,o),this.Params.idcolor=t}},[])]),Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(h.a,{label:"Tipo de combustible",url:"/toselect/fueltypes",value:this.Params.idfueltype,onSelect:(e,t,o)=>{console.log("onSelect",e,t,o),this.Params.idfueltype=t}},[])])]),Object(i.j)("div",{classes:r.row},[Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(l.a,{key:"t6",type:"number",label:"Capacidad del tanque",disabled:!1,readOnly:!1,value:this.Params.fuel_tank_capacity,onChange:e=>{this.Params.fuel_tank_capacity=e,this.invalidate()}},[])]),Object(i.j)("div",{classes:[r.column2]},[Object(i.k)(h.a,{label:"Unidad de medida del tanque",url:"/toselect/unit_measure_fuel_tanks",value:this.Params.idunit_measure_fuel_tank,onSelect:(e,t,o)=>{console.log("onSelect",e,t,o),this.Params.idunit_measure_fuel_tank=t}},[])])]),Object(i.j)("div",{classes:[r.container_field_reset]},[Object(i.k)(d.a,{columns:40,rows:5,placeholder:"Notas",label:"Notas",key:"text-area",value:this.Params.note,onInput:e=>{this.Params.note=e,this.invalidate()}})]),Object(i.k)(p.a,{open:this._openSnack,leading:!1,type:"error",messageRenderer:()=>this._MsgSnackBar}),Object(i.k)(v,this.favorite)])])}}Object(s.a)([Object(u.a)()],O.prototype,"Params",void 0),Object(s.a)([Object(u.a)()],O.prototype,"_openSnack",void 0);var f=o(46);const k=Object(i.a)();t.default=k(function({properties:e}){return Object(i.j)("div",{classes:[r.root]},[Object(i.k)(f.a,{}),Object(i.k)(O,{idvehicle:"0"},[])])})},42:function(e,t,o){o(62),e.exports={" _key":"@dojo/widgets/listbox",root:"listbox-m__root__16vSB",focused:"listbox-m__focused__3M-za",option:"listbox-m__option__MMFTf",activeOption:"listbox-m__activeOption__1FTY-",disabledOption:"listbox-m__disabledOption__275oq",selectedOption:"listbox-m__selectedOption__13tNG"}},58:function(e,t,o){"use strict";var i=o(20),s=o(19),a=o(21),n=o(26),r=o(18),l=o(30),c=o(37),d=o(25),h=o(24),p=o(59),u=o(48),_=o(116);let b=class extends(Object(a.c)(Object(n.a)(s.a))){constructor(){super(...arguments),this._dirty=!1,this._uuid=Object(h.c)()}_onBlur(e){this.properties.onBlur&&this.properties.onBlur(e.target.value)}_onChange(e){e.stopPropagation(),this.properties.onChange&&this.properties.onChange(e.target.value)}_onClick(e){e.stopPropagation(),this.properties.onClick&&this.properties.onClick(e.target.value)}_onFocus(e){this.properties.onFocus&&this.properties.onFocus(e.target.value)}_onInput(e){e.stopPropagation(),this.properties.onInput&&this.properties.onInput(e.target.value)}_onKeyDown(e){e.stopPropagation(),this.properties.onKeyDown&&this.properties.onKeyDown(e.which,()=>{e.preventDefault()})}_onKeyPress(e){e.stopPropagation(),this.properties.onKeyPress&&this.properties.onKeyPress(e.which,()=>{e.preventDefault()})}_onKeyUp(e){e.stopPropagation(),this.properties.onKeyUp&&this.properties.onKeyUp(e.which,()=>{e.preventDefault()})}_onMouseDown(e){e.stopPropagation(),this.properties.onMouseDown&&this.properties.onMouseDown()}_onMouseUp(e){e.stopPropagation(),this.properties.onMouseUp&&this.properties.onMouseUp()}_onTouchStart(e){e.stopPropagation(),this.properties.onTouchStart&&this.properties.onTouchStart()}_onTouchEnd(e){e.stopPropagation(),this.properties.onTouchEnd&&this.properties.onTouchEnd()}_onTouchCancel(e){e.stopPropagation(),this.properties.onTouchCancel&&this.properties.onTouchCancel()}_callOnValidate(e,t){let o,{valid:i}=this.properties;"object"==typeof i&&(o=i.message,i=i.valid),e===i&&t===o||this.properties.onValidate&&this.properties.onValidate(e,t)}_validate(){const{customValidator:e,value:t=""}=this.properties;if(""===t&&!this._dirty)return void this._callOnValidate(void 0,"");this._dirty=!0;let{valid:o,message:i=""}=this.meta(_.a).get("input",t);if(o&&e){const s=e(t);s&&(o=s.valid,i=s.message||"")}this._callOnValidate(o,i)}get validity(){const{valid:e={valid:void 0,message:void 0}}=this.properties;return"boolean"==typeof e?{valid:e,message:void 0}:{valid:e.valid,message:e.message}}getRootClasses(){const{disabled:e,readOnly:t,required:o}=this.properties,i=this.meta(l.a).get("root"),{valid:s}=this.validity;return[p.root,e?p.disabled:null,i.containsFocus?p.focused:null,!1===s?p.invalid:null,!0===s?p.valid:null,t?p.readonly:null,o?p.required:null]}render(){const{aria:e={},columns:t=20,disabled:o,widgetId:i=this._uuid,label:s,maxLength:a,minLength:n,name:h,placeholder:_,readOnly:b,required:g,rows:v=2,value:m,wrapText:O,theme:f,classes:k,labelHidden:j,helperText:y,onValidate:S}=this.properties,x=this.meta(l.a).get("root");S&&this._validate();const{valid:w,message:P}=this.validity,I=!1===w&&P||y;return Object(r.j)("div",{key:"root",classes:this.theme(this.getRootClasses())},[s?Object(r.k)(c.a,{theme:f,classes:k,disabled:o,focused:x.containsFocus,invalid:!1===w||void 0,readOnly:b,required:g,hidden:j,forId:i},[s]):null,Object(r.j)("div",{classes:this.theme(p.inputWrapper)},[Object(r.j)("textarea",Object.assign({id:i,key:"input"},Object(d.b)(e),{classes:this.theme(p.input),cols:`${t}`,disabled:o,focus:this.shouldFocus,"aria-invalid":!1===w?"true":null,maxlength:a?`${a}`:null,minlength:n?`${n}`:null,name:h,placeholder:_,readOnly:b,"aria-readonly":b?"true":null,required:g,rows:`${v}`,value:m,wrap:O,onblur:this._onBlur,onchange:this._onChange,onclick:this._onClick,onfocus:this._onFocus,oninput:this._onInput,onkeydown:this._onKeyDown,onkeypress:this._onKeyPress,onkeyup:this._onKeyUp,onmousedown:this._onMouseDown,onmouseup:this._onMouseUp,ontouchstart:this._onTouchStart,ontouchend:this._onTouchEnd,ontouchcancel:this._onTouchCancel}))]),Object(r.k)(u.a,{text:I,valid:w})])}};b=i.__decorate([Object(a.f)(p)],b),t.a=b},59:function(e,t,o){o(60),e.exports={" _key":"@dojo/widgets/text-area",root:"text-area-m__root__254DZ",input:"text-area-m__input__HvKNV",inputWrapper:"text-area-m__inputWrapper__2EiX0",disabled:"text-area-m__disabled__2Y7a9",focused:"text-area-m__focused__2WU0U",readonly:"text-area-m__readonly__3Tvfz",required:"text-area-m__required__2NiEh",invalid:"text-area-m__invalid__1iLaP",valid:"text-area-m__valid__3PXFD"}},60:function(e,t,o){},62:function(e,t,o){},64:function(e,t,o){o(65),e.exports={" _key":"@dojo/widgets/select",root:"select-m__root__1LR3Q",inputWrapper:"select-m__inputWrapper__1XSeT",trigger:"select-m__trigger__247df",placeholder:"select-m__placeholder__3QPbs",required:"select-m__required__2doLU",dropdown:"select-m__dropdown__1PomD",open:"select-m__open__2aIUM",input:"select-m__input__1oGGn",arrow:"select-m__arrow__3nXww",focused:"select-m__focused__TIg6n",disabled:"select-m__disabled__3AB08",readonly:"select-m__readonly__35xFL",invalid:"select-m__invalid__22-e6",valid:"select-m__valid__2BYdZ"}},65:function(e,t,o){}}]);
//# sourceMappingURL=4.5a2d8821216904880b54.bundle.js.map