/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpmycarlog3=window.dojoWebpackJsonpmycarlog3||[]).push([["src/widgets/Login/Login"],{281:function(e,o,t){e.exports={" _key":"mycarlog3/Login",root:"Login-m__root__e9fe791YVXP",body:"Login-m__body__e9fe79Z7a8j",wrapper:"Login-m__wrapper__e9fe792f8oy","form-success":"Login-m__form-success__e9fe793ALq-",container:"Login-m__container__e9fe79NQvnb",form:"Login-m__form__e9fe79rnNI7",links_block:"Login-m__links_block__e9fe79eBLqT",bg_bubbles:"Login-m__bg_bubbles__e9fe793ft1S",square:"Login-m__square__e9fe792G8Jf"}},302:function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return c});var r=t(20),a=t(28),s=t(281),n=t(40);class c extends a.a{showSnackBar(e,o){console.log(e);var{path:t,apply:r}=window.GlobalStore;r([Object(n.a)(t("root","notifications"),{message:e,type:o})],!0)}onAttach(){document.cookie="TOKEN_USER= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",console.log("Borrar")}render(){return Object(r.k)("div",{classes:[s.root]},[Object(r.k)("div",{classes:[s.body]},[Object(r.k)("div",{classes:s.wrapper},[Object(r.k)("div",{classes:[s.container]},[Object(r.k)("h1",{},["Login"]),Object(r.k)("form",{classes:s.form,action:"/login",method:"post",onsubmit:e=>{const{path:o,apply:t}=window.GlobalStore;if(e.target){let a=e.target.getElementsByTagName("input"),s=0;var r={};for(s=0;s<a.length;s++)Object.defineProperty(r,a[s].name,{value:a[s].value,enumerable:!0}),s+1==a.length&&(async()=>{try{let a=await fetch("/login",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}});var e=await a.json();console.log(e),200==a.status?e.login&&(t([Object(n.a)(o("root","user","idaccount"),e.idaccount)],!0),t([Object(n.a)(o("root","user","iduser"),e.iduser)],!0),t([Object(n.a)(o("root","user","preferences"),e.preferences)],!0),t([Object(n.a)(o("root","user","username"),e.username)],!0),t([Object(n.a)(o("root","user","fullname"),e.fullname)],!0),t([Object(n.a)(o("root","user","rowkey"),e.rowkey)],!0),window.location.href="/#home"):this.showSnackBar("Algo salió mal",void 0)}catch(e){this.showSnackBar(e,"error")}})()}e.preventDefault()}},[Object(r.k)("input",{name:"username",type:"text",placeholder:"Usuario",required:"required"},[]),Object(r.k)("input",{name:"pwd",type:"password",placeholder:"Contraseña",required:"required"},[]),Object(r.k)("input",{type:"submit",name:"submit",value:"Aceptar"}),Object(r.k)("div",{classes:s.links_block},[Object(r.k)("a",{href:"/#register"},["Registro"])])])])])]),Object(r.k)("ul",{classes:s.bg_bubbles},[Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li"),Object(r.k)("li")])])}}}}]);
//# sourceMappingURL=Login.22bd68cddf05443d5a73.bundle.js.map