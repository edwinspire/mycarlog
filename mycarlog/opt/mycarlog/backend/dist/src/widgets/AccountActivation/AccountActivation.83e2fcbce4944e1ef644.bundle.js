/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpmycarlog3=window.dojoWebpackJsonpmycarlog3||[]).push([["src/widgets/AccountActivation/AccountActivation"],{289:function(t,e,c){t.exports={" _key":"mycarlog3/AccountActivation",root:"AccountActivation-m__root__e9fe791prX4",body:"AccountActivation-m__body__e9fe792Rcia",wrapper:"AccountActivation-m__wrapper__e9fe792z0rd","form-success":"AccountActivation-m__form-success__e9fe79XXack",container:"AccountActivation-m__container__e9fe793cew6",form:"AccountActivation-m__form__e9fe7924utU",links_block:"AccountActivation-m__links_block__e9fe791xGLF",bg_bubbles:"AccountActivation-m__bg_bubbles__e9fe79E9QUt",square:"AccountActivation-m__square__e9fe791muf0"}},370:function(t,e,c){"use strict";c.r(e),c.d(e,"default",function(){return i});var o=c(20),a=c(21),n=c(289);class i extends a.b{onAttach(){document.cookie="TOKEN_USER= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",console.log("Borrar")}SnackBar(t,e){}render(){return Object(o.k)("div",{classes:[n.root]},[Object(o.k)("div",{classes:[n.body]},[Object(o.k)("div",{classes:n.wrapper},[Object(o.k)("div",{classes:[n.container]},[Object(o.k)("h1",{},["Bienvenido!"]),Object(o.k)("div",{},["Su cuenta ha sido creada. El siguiente paso es activarla.",Object(o.k)("p",{},["Presione el botón para activar su cuenta"])]),Object(o.k)("form",{classes:n.form,action:"/xyz",method:"POST",onsubmit:t=>{(async()=>{var t=window.location.hash.split("?")[1],e={code:new URLSearchParams(t).get("activation_code")};let c=await fetch("/account_activation",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),o=await c.json();200==c.status?o.idaccount&&o.idaccount>0?(this.SnackBar("success",o.notes),setTimeout(()=>{window.location.href="/#login"},5e3)):this.SnackBar("error",o.notes):(console.log("No se pudo registrar",o),this.SnackBar("error","no se pudo guardar"))})(),t.preventDefault()}},[Object(o.k)("input",{name:"Continuar",type:"submit",value:"Continuar"})])])])]),Object(o.k)("ul",{classes:n.bg_bubbles},[Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li"),Object(o.k)("li")])])}}}}]);
//# sourceMappingURL=AccountActivation.83e2fcbce4944e1ef644.bundle.js.map