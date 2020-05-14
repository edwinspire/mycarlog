/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[11],{323:function(e,t,r){e.exports={" _key":"OpenMonitoringSystem/Register",root:"Register-m__root__309e8dG_7Wm",body:"Register-m__body__309e8dnYxNd",wrapper:"Register-m__wrapper__309e8d3dbVy","form-success":"Register-m__form-success__309e8d6e9DT",container:"Register-m__container__309e8dJoasP",form:"Register-m__form__309e8d3H5iy",links_block:"Register-m__links_block__309e8dDgrCe",bg_bubbles:"Register-m__bg_bubbles__309e8d1jFri",square:"Register-m__square__309e8d1u4wt"}},329:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return o});var s=r(18),i=r(19),a=r(323),n=r(49);class o extends i.b{constructor(){super(...arguments),this._openSnack=!1,this._MsgSnackBar="-"}SnackBar(e,t){console.log("SnackBar "+t),this._openSnack=!0,this._MsgSnackBar=t,this._SnackType=e,this.invalidate(),setTimeout(()=>{this._openSnack=!1,this.invalidate()},4e3)}onAttach(){document.cookie="TOKEN_USER= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",console.log("Borrar")}render(){return Object(s.j)("div",{classes:[a.root]},[Object(s.j)("div",{classes:[a.body]},[Object(s.j)("div",{classes:a.wrapper},[Object(s.j)("div",{classes:[a.container]},[Object(s.j)("h1",{},["Registro"]),Object(s.j)("form",{classes:a.form,action:"/register",method:"post",onsubmit:e=>{if(e.target){let r=e.target.getElementsByTagName("input"),s=0;var t={};let i="",a="";for(s=0;s<r.length;s++)Object.defineProperty(t,r[s].name,{value:r[s].value,enumerable:!0}),"pwd"==r[s].name&&(i=r[s].value),"pwd2"==r[s].name&&(a=r[s].value),s+1==r.length&&(i==a?(async()=>{let e=await fetch("/register",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}),r=await e.json();200==e.status?(console.log(r),r.Register?(this.SnackBar("success",r.Message),setTimeout(()=>{window.location.href="/#login"},5e3)):this.SnackBar("error",r.Message)):(console.log("No se pudo registrar",r),this.SnackBar("error","no se pudo guardar"))})():this.SnackBar("error","Las contraseñas no coinciden"))}e.preventDefault()}},[Object(s.j)("input",{name:"firstname",type:"text",placeholder:"Nombre",required:"required"}),Object(s.j)("input",{name:"lastname",type:"text",placeholder:"Apellido",required:"required"}),Object(s.j)("input",{name:"username",type:"email",placeholder:"Email",required:"required"}),Object(s.j)("input",{name:"pwd",type:"password",placeholder:"Contraseña",required:"required"}),Object(s.j)("input",{name:"pwd2",type:"password",placeholder:"Confirme Contraseña",required:"required"}),Object(s.j)("input",{name:"register",type:"submit",value:"Aceptar"}),Object(s.j)("div",{classes:a.links_block},[Object(s.j)("a",{href:"/#login"},["Login"])])])]),Object(s.k)(n.a,{open:this._openSnack,leading:!1,type:this._SnackType,messageRenderer:()=>this._MsgSnackBar})])]),Object(s.j)("ul",{classes:a.bg_bubbles},[Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li"),Object(s.j)("li")])])}}}}]);
//# sourceMappingURL=11.cd3049d34b8fefcc33cb.bundle.js.map