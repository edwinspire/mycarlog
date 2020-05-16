/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[9],{320:function(t,e,a){t.exports={" _key":"OpenMonitoringSystem/account_activation",root:"account_activation-m__root__309e8dLFnFN",body:"account_activation-m__body__309e8d6Uqi-",wrapper:"account_activation-m__wrapper__309e8drKOAi","form-success":"account_activation-m__form-success__309e8d10mhh",container:"account_activation-m__container__309e8d19dSw",form:"account_activation-m__form__309e8d1bY5q",links_block:"account_activation-m__links_block__309e8d1qUYl",bg_bubbles:"account_activation-m__bg_bubbles__309e8di3rXe",square:"account_activation-m__square__309e8d228oZ"}},331:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return s});var o=a(18),c=a(19),n=a(320),i=a(41);class s extends c.b{constructor(){super(...arguments),this._openSnack=!1,this._MsgSnackBar="-"}onAttach(){document.cookie="TOKEN_USER= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",console.log("Borrar")}SnackBar(t,e){console.log("SnackBar "+e),this._openSnack=!0,this._MsgSnackBar=e,this._SnackType=t,this.invalidate(),setTimeout(()=>{this._openSnack=!1,this.invalidate()},4e3)}render(){return Object(o.j)("div",{classes:[n.root]},[Object(o.j)("div",{classes:[n.body]},[Object(o.j)("div",{classes:n.wrapper},[Object(o.j)("div",{classes:[n.container]},[Object(o.j)("h1",{},["Bienvenido!"]),Object(o.j)("div",{},["Su cuenta ha sido creada. El siguiente paso es activarla.",Object(o.j)("p",{},["Presione el botón para activar su cuenta"])]),Object(o.j)("form",{classes:n.form,action:"/xyz",method:"POST",onsubmit:t=>{(async()=>{var t=window.location.hash.split("?")[1],e={code:new URLSearchParams(t).get("activation_code")};let a=await fetch("/account_activation",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),o=await a.json();200==a.status?o.idaccount&&o.idaccount>0?(this.SnackBar("success",o.notes),setTimeout(()=>{window.location.href="/#login"},5e3)):this.SnackBar("error",o.notes):(console.log("No se pudo registrar",o),this.SnackBar("error","no se pudo guardar"))})(),t.preventDefault()}},[Object(o.j)("input",{name:"Continuar",type:"submit",value:"Continuar"})])])]),Object(o.k)(i.a,{open:this._openSnack,leading:!1,type:this._SnackType,messageRenderer:()=>this._MsgSnackBar})]),Object(o.j)("ul",{classes:n.bg_bubbles},[Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li"),Object(o.j)("li")])])}}}}]);
//# sourceMappingURL=9.48fcffde0b654167f5dc.bundle.js.map