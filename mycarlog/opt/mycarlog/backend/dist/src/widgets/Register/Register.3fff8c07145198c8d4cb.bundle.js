/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpmycarlog3=window.dojoWebpackJsonpmycarlog3||[]).push([["src/widgets/Register/Register"],{280:function(e,r,t){e.exports={" _key":"mycarlog3/Register",root:"Register-m__root__e9fe79ZfqvN",body:"Register-m__body__e9fe7914P3S",wrapper:"Register-m__wrapper__e9fe791i_sn","form-success":"Register-m__form-success__e9fe791TD6E",container:"Register-m__container__e9fe79159nE",form:"Register-m__form__e9fe79vdDOV",links_block:"Register-m__links_block__e9fe791j0gK",bg_bubbles:"Register-m__bg_bubbles__e9fe791NnOJ",square:"Register-m__square__e9fe793a002"}},300:function(e,r,t){"use strict";t.r(r),t.d(r,"default",function(){return i});var s=t(20),a=t(30),o=t(280);class i extends a.a{SnackBar(e,r){console.log("SnackBar "+r)}onAttach(){document.cookie="TOKEN_USER= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",console.log("Borrar")}render(){return Object(s.k)("div",{classes:[o.root]},[Object(s.k)("div",{classes:[o.body]},[Object(s.k)("div",{classes:o.wrapper},[Object(s.k)("div",{classes:[o.container]},[Object(s.k)("h1",{},["Registro"]),Object(s.k)("form",{classes:o.form,action:"/register",method:"post",onsubmit:e=>{if(e.target){let t=e.target.getElementsByTagName("input"),s=0;var r={};let a="",o="";for(s=0;s<t.length;s++)Object.defineProperty(r,t[s].name,{value:t[s].value,enumerable:!0}),"pwd"==t[s].name&&(a=t[s].value),"pwd2"==t[s].name&&(o=t[s].value),s+1==t.length&&(a==o?(async()=>{let e=await fetch("/register",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}),t=await e.json();200==e.status?(console.log(t),t.Register?(this.SnackBar("success",t.Message),setTimeout(()=>{window.location.href="/#login"},5e3)):this.SnackBar("error",t.Message)):(console.log("No se pudo registrar",t),this.SnackBar("error","no se pudo guardar"))})():this.SnackBar("error","Las contraseñas no coinciden"))}e.preventDefault()}},[Object(s.k)("input",{name:"firstname",type:"text",placeholder:"Nombre",required:"required"}),Object(s.k)("input",{name:"lastname",type:"text",placeholder:"Apellido",required:"required"}),Object(s.k)("input",{name:"username",type:"email",placeholder:"Email",required:"required"}),Object(s.k)("input",{name:"pwd",type:"password",placeholder:"Contraseña",required:"required"}),Object(s.k)("input",{name:"pwd2",type:"password",placeholder:"Confirme Contraseña",required:"required"}),Object(s.k)("input",{name:"register",type:"submit",value:"Aceptar"}),Object(s.k)("div",{classes:o.links_block},[Object(s.k)("a",{href:"/#login"},["Login"])])])])])]),Object(s.k)("ul",{classes:o.bg_bubbles},[Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li"),Object(s.k)("li")])])}}}}]);
//# sourceMappingURL=Register.3fff8c07145198c8d4cb.bundle.js.map