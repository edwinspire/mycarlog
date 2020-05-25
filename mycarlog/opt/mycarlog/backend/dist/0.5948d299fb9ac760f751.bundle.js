/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonppen_onitoring_ystem=window.dojoWebpackJsonppen_onitoring_ystem||[]).push([[0],{101:function(e,t,i){i(102),e.exports={" _key":"@dojo/widgets/grid",rootFixed:"grid-m__rootFixed__2GZXD",headerFixed:"grid-m__headerFixed__2X7jF"}},102:function(e,t,i){},104:function(e,t,i){"use strict";var o=i(20),r=i(19),s=i(18),a=i(21),n=i(23),d=i(22),c=i(108),l=i(40),h=i(52),g=(i(43),i(2)),_=i(37),p=i(28);i(1);const u=new p.b,m=Symbol("value");const b="State updates are not available on legacy browsers";function f(e,t,i,o,r,s){const{apply:a,get:n,path:d,at:c}=i;function l(e,t,o){return e(i)(t)}return async h=>{const u=[],f=[...t];let j=[],y=f.shift(),O=null;const w=s?s(h):h;if(o){let t=o(w,i,e);t&&await t}function v(){const e=new p.b,t=new p.b,i=[],o=r=>({get(i,s){const a=r?d(r,s):d(s),c=a.path;if("symbol"==typeof s&&s===m)return t.get(c);let l=r||i.hasOwnProperty(s)?i[s]:n(a);if("object"==typeof l&&null!==l){let r;return e.has(c)?r=e.get(c):(l=Array.isArray(l)?l.slice():Object.assign({},l),r=new Proxy(l,o(a)),e.set(c,r),t.set(c,l)),i[s]=l,r}return i[s]=l,l},set:(e,t,o)=>(o=function e(t){if("object"==typeof t&&null!==t){t[m]&&(t=t[m]);const i=Array.isArray(t)?[]:{},o=Object.keys(t);for(let r=0;r<o.length;r++)i[o[r]]=e(t[o[r]]);t=i}return t}(o),i.push(Object(_.c)(r?d(r,t):d(t),o)),e[t]=o,!0),deleteProperty:(e,t)=>(i.push(Object(_.b)(r?d(r,t):d(t))),delete e[t],!0)});return{proxy:new Proxy({},o()),operations:i}}try{for(;y;){let e=[];let t;t=(e=(Array.isArray(y)?y:[y]).map(e=>{let t,i=[];if("undefined"!=typeof Proxy){const{operations:e,proxy:o}=v();t=o,i=e}let o=e({at:c,get:n,path:d,payload:w,get state(){if("undefined"==typeof Proxy)throw new Error(b);return t}});return Object(g.isThenable)(o)?o.then(e=>e=e?[...i,...e]:[...i]):o=o&&Array.isArray(o)?[...i,...o]:[...i]})).some(g.isThenable)?await Promise.all(e):e;for(let i=0;i<e.length;i++)u.push(...t[i]),j=[...a(t[i]),...j];i.invalidate(),y=f.shift()}}catch(e){if(e.message===b)throw e;O={error:e,command:y}}return r&&r(O,{undoOperations:j,store:i,id:e,operations:u,apply:a,at:c,get:n,path:d,executor:l,payload:w}),Promise.resolve({store:i,undoOperations:j,id:e,error:O,operations:u,apply:a,at:c,get:n,path:d,executor:l,payload:w})}}function j(e,t,i){const o=(i=Array.isArray(i)?i:i?[i]:[]).length?i.reduce((t,i)=>(function(e,t){const{before:i,after:o}=e();return e=>{const{before:r,after:s}=e?e():{};return()=>({after(e,t){s&&s(e,t),o&&o(e,t)},before(e,o){r&&r(e,o,t),i&&i(e,o,t)}})}})(i,e)(t)):void 0,{before:r,after:s}=o?o():{};return u.set(e,[e,t,r,s]),(i,o)=>f(e,t,i,r,s,o)}var y=i(32);const O=function(e){return e},w=O(({path:e,get:t,payload:{id:i,page:o}})=>{return o!==t(e(i,"meta","page"))?[Object(_.c)(e(i,"meta","page"),o)]:[]}),v=O(({path:e,get:t,payload:{id:i,page:o}})=>{const r=t(e(i,"meta","fetchedPages"))||[];if(-1===r.indexOf(o))return[Object(_.c)(e(i,"meta","fetchedPages"),[...r,o]),Object(_.c)(e(i,"meta","page"),o)];throw Error("The page has already been requested")}),x=O(({at:e,path:t,get:i,payload:{id:r,fetcher:s,page:a,pageSize:n}})=>o.__awaiter(void 0,void 0,void 0,function*(){let e;if(i(t(r,"meta","isSorting")))throw Error("The grid is being sorted or filtered");{const o=i(t(r,"meta","sort")),d=i(t(r,"meta","filter"));try{e=yield s(a,n,{sort:o,filter:d})}catch(e){return[Object(_.b)(t(r,"data","pages",`page-${a}`))]}return[Object(_.c)(t(r,"data","pages",`page-${a}`),e.data),Object(_.c)(t(r,"meta","total"),e.meta.total),Object(_.c)(t(r,"meta","pageSize"),n)]}})),S=O(({at:e,path:t,get:i,payload:{id:o,columnId:r,direction:s}})=>{const a=i(t(o,"meta","page"));return[Object(_.b)(t(o,"data","pages")),Object(_.b)(t(o,"meta","selection")),Object(_.c)(t(o,"meta","fetchedPages"),1===a?[1]:[a,a-1]),Object(_.c)(t(o,"meta","sort","columnId"),r),Object(_.c)(t(o,"meta","sort","direction"),s),Object(_.c)(t(o,"meta","isSorting"),!0)]}),k=O(({at:e,path:t,get:i,payload:{id:o,filterOptions:r}})=>[Object(_.b)(t(o,"data","pages")),Object(_.b)(t(o,"meta","selection")),Object(_.c)(t(o,"meta","fetchedPages"),[1]),Object(_.c)(t(o,"meta","filter",r.columnId),r.value),Object(_.c)(t(o,"meta","currentFilter"),r),Object(_.c)(t(o,"meta","page"),1),Object(_.c)(t(o,"meta","isSorting"),!0)]),R=O(({at:e,path:t,get:i,payload:r,state:s})=>o.__awaiter(void 0,void 0,void 0,function*(){const{id:o,fetcher:a,columnId:n,direction:d}=r,c=i(t(o,"meta","page"));if(1===c)return C({at:e,get:i,path:t,payload:r,state:s});const l=i(t(o,"meta","pageSize")),h=i(t(o,"meta","filter"));let g;try{const e={sort:{columnId:n,direction:d},filter:h},t=a(c-1,l,e),i=a(c,l,e);g=yield Promise.all([t,i])}catch(e){return[]}return[Object(_.c)(t(o,"data","pages",`page-${c-1}`),g[0].data),Object(_.c)(t(o,"data","pages",`page-${c}`),g[1].data),Object(_.c)(t(o,"meta","sort","columnId"),n),Object(_.c)(t(o,"meta","sort","direction"),d),Object(_.c)(t(o,"meta","total"),g[1].meta.total),Object(_.c)(t(o,"meta","page"),c),Object(_.c)(t(o,"meta","isSorting"),!1)]})),C=O(({at:e,path:t,get:i,payload:{id:r,fetcher:s,columnId:a,direction:n}})=>o.__awaiter(void 0,void 0,void 0,function*(){const e=i(t(r,"meta","pageSize")),o=i(t(r,"meta","filter"));let d;try{d=yield s(1,e,{sort:{columnId:a,direction:n},filter:o})}catch(e){return[]}return[Object(_.c)(t(r,"data","pages","page-1"),d.data),Object(_.c)(t(r,"meta","sort","columnId"),a),Object(_.c)(t(r,"meta","sort","direction"),n),Object(_.c)(t(r,"meta","total"),d.meta.total),Object(_.c)(t(r,"meta","page"),1),Object(_.c)(t(r,"meta","isSorting"),!1)]})),P=O(({at:e,path:t,get:i,payload:{id:r,fetcher:s,filterOptions:a}})=>o.__awaiter(void 0,void 0,void 0,function*(){const e=i(t(r,"meta","pageSize")),o=i(t(r,"meta","sort")),n=i(t(r,"meta","filter"));let d;try{d=yield s(1,e,{sort:o,filter:n})}catch(e){return[]}if(a!==i(t(r,"meta","currentFilter")))throw new Error;return[Object(_.b)(t(r,"data","pages")),Object(_.c)(t(r,"data","pages","page-1"),d.data),Object(_.c)(t(r,"meta","total"),d.meta.total),Object(_.c)(t(r,"meta","isSorting"),!1)]})),F=O(({at:e,path:t,get:i,payload:{id:o,updater:r,columnId:s,value:a,page:n,rowNumber:d}})=>{const c=i(e(t(o,"data","pages",`page-${n}`),d)),l=Object.assign({},c,{[s]:a});return[Object(_.c)(e(t(o,"data","pages",`page-${n}`),d),l),Object(_.c)(t(o,"meta","editedRow","page"),n),Object(_.c)(t(o,"meta","editedRow","index"),d),Object(_.c)(t(o,"meta","editedRow","item"),Object.assign({},c))]}),z=O(({at:e,path:t,get:i,payload:{id:r,updater:s,columnId:a,value:n,page:d,rowNumber:c}})=>o.__awaiter(void 0,void 0,void 0,function*(){const o=i(e(t(r,"data","pages",`page-${d}`),c));try{yield s(o)}catch(o){const s=i(t(r,"meta","editedRow","item"));return[Object(_.c)(e(t(r,"data","pages",`page-${d}`),c),s)]}return[Object(_.c)(t(r,"meta","editedRow"),void 0)]})),I=O(({payload:{id:e,index:t,type:i},get:o,path:r})=>{let s=[...o(r(e,"meta","selection"))||[]];if("single"===i)s=-1===s.indexOf(t)?[t]:s.length>1?[t]:[];else{const e=Object(y.b)(s,e=>e===t);-1===e?s=[...s,t]:s.splice(e,1)}return[Object(_.c)(r(e,"meta","selection"),s)]}),$=O(({payload:{id:e},path:t})=>[Object(_.b)(t(e,"meta","selection"))]),W=j("grid-update",[F,z]),M=j("grid-fetch",[v,x]),N=j("grid-filter",[k,P]),D=j("grid-sort",[S,R]),T=j("grid-selection",[I]),E=(j("clear-selection",[$]),j("grid-page-change",[w]));var L=i(24),A=i(0),V=i(106),H=i(51),K=i(34);const B=Object.freeze({delta:Object.freeze({x:0,y:0}),isDragging:!1});function X(e){return{client:{x:e.clientX,y:e.clientY},offset:{x:e.offsetX,y:e.offsetY},page:{x:e.pageX,y:e.pageY},screen:{x:e.screenX,y:e.screenY}}}function G(e,t){return{x:t.client.x-e.client.x,y:t.client.y-e.client.y}}const J=new class{constructor(){this._nodeMap=new H.a,this._dragging=void 0,this._onDragStart=(e=>{const{_dragging:t}=this;if(!e.isPrimary&&t){const e=this._nodeMap.get(t);return e.dragResults.isDragging=!1,e.invalidate(),void(this._dragging=void 0)}if(0!==e.button)return;const i=this._getData(e.target);if(i){const{state:t,target:o}=i;this._dragging=o,t.last=t.start=X(e),t.dragResults.delta={x:0,y:0},t.dragResults.start=Object(L.b)({},t.start),t.dragResults.isDragging=!0,t.invalidate(),e.preventDefault(),e.stopPropagation()}}),this._onDrag=(e=>{const{_dragging:t}=this;if(!t)return;const i=this._nodeMap.get(t);i.last=X(e),i.dragResults.delta=G(i.start,i.last),i.dragResults.start||(i.dragResults.start=Object(L.b)({},i.start)),i.invalidate(),e.preventDefault(),e.stopPropagation()}),this._onDragStop=(e=>{const{_dragging:t}=this;if(!t)return;const i=this._nodeMap.get(t);i.last=X(e),i.dragResults.delta=G(i.start,i.last),i.dragResults.start||(i.dragResults.start=Object(L.b)({},i.start)),i.dragResults.isDragging=!1,i.invalidate(),this._dragging=void 0,e.preventDefault(),e.stopPropagation()});const e=A.default.window;e.addEventListener("pointerdown",this._onDragStart),e.addEventListener("pointermove",this._onDrag,!0),e.addEventListener("pointerup",this._onDragStop,!0)}_getData(e){return this._nodeMap.has(e)?{state:this._nodeMap.get(e),target:e}:e.parentElement?this._getData(e.parentElement):void 0}get(e,t){const{_nodeMap:i}=this;if(!i.has(e))return i.set(e,function(e){return{dragResults:Object(L.b)({},B),invalidate:e,last:{client:{x:0,y:0},offset:{x:0,y:0},page:{x:0,y:0},screen:{x:0,y:0}},start:{client:{x:0,y:0},offset:{x:0,y:0},page:{x:0,y:0},screen:{x:0,y:0}}}}(t)),function(e){e.style.touchAction="none",e.setAttribute("touch-action","none")}(e),B;const o=i.get(e),r=Object(V.a)({},o.dragResults);return o.start=o.last,o.dragResults.delta={x:0,y:0},delete o.dragResults.start,r}};var Y=class extends K.a{constructor(){super(...arguments),this._boundInvalidate=this.invalidate.bind(this)}get(e){const t=this.getNode(e);return t?J.get(t,this._boundInvalidate):B}},Z=i(31),U=i(29),q=i(64),Q=i(67);let ee=class extends(Object(a.d)(r.b)){constructor(){super(...arguments),this._sortRenderer=((e,t,i)=>{const{theme:o,classes:r}=this.properties;return Object(s.j)("button",{classes:this.theme(q.sort),onclick:i},[Object(s.k)(U.a,{theme:o,classes:r,type:"asc"===t?"upIcon":"downIcon",altText:`Sort by ${this._getColumnTitle(e)}`})])}),this._filterRenderer=((e,t,i,o)=>{const{theme:r,classes:a}=this.properties;return Object(s.k)(Z.a,{key:"filter",theme:r,classes:a,extraClasses:{root:q.filter},label:`Filter by ${o}`,labelHidden:!0,type:"search",value:t,onInput:i})})}_getColumnTitle(e){return"function"==typeof e.title?e.title():e.title}_sortColumn(e){const{sort:t,sorter:i}=this.properties;i(e,t?t.columnId!==e?"desc":"desc"===t.direction?"asc":"desc":"desc")}render(){const{columnConfig:e,sort:t,filterer:i,filter:o={},sortRenderer:r=this._sortRenderer,filterRenderer:a=this._filterRenderer,columnWidths:n,onColumnResize:d}=this.properties,c=n&&Object.keys(n).reduce((e,t)=>e+n[t],0);return Object(s.j)("div",{styles:c?{width:`${c}px`}:{},classes:[this.theme(q.root),Q.rootFixed],role:"row"},e.map((e,c)=>{const l=this._getColumnTitle(e);let h={};const g=t&&t.columnId===e.id,_=Boolean(t&&t.columnId===e.id&&"asc"===t.direction);e.sortable&&(h={classes:[Q.column,this.theme(q.sortable),g?this.theme(q.sorted):null,g&&!_?this.theme(q.desc):null,_?this.theme(q.asc):null],onclick:()=>{this._sortColumn(e.id)}});const p=g?_?"asc":"desc":void 0,u=Object.keys(o).indexOf(e.id)>-1?o[e.id]:"";if(e.resizable){const t=this.meta(Y).get(`${e.id}-resize`);t.isDragging&&0!==t.delta.x&&d&&d(c,t.delta.x)}return Object(s.j)("div",{"aria-sort":g?_?"ascending":"descending":null,classes:[this.theme(q.cell),Q.cellFixed],role:"columnheader",styles:n?{flex:`0 1 ${n[e.id]}px`}:{}},[Object(s.j)("div",h,[l,e.sortable?r(e,p,()=>{this._sortColumn(e.id)}):null]),e.filterable?a(e,u,t=>{i(e.id,t)},l):null,e.resizable&&Object(s.j)("span",{key:`${e.id}-resize`,classes:[Q.resize]})])}))}};var te=ee=o.__decorate([Object(a.f)(q)],ee),ie=i(70);let oe=class extends(Object(a.d)(r.b)){render(){return Object(s.j)("div",{classes:this.theme(ie.root)},[Object(s.j)("div",{classes:this.theme(ie.loading)})])}};var re=oe=o.__decorate([Object(a.f)(ie)],oe),se=i(26),ae=i(25),ne=i(111),de=i(73),ce=i(76);let le=class extends(Object(a.d)(Object(se.a)(r.b))){constructor(){super(...arguments),this._editing=!1,this._editingValue="",this._idBase=Object(L.c)(),this._onEdit=(()=>{const{editable:e}=this.properties;e&&(this._editing=!0,this._callFocus("input"),this._editingValue=this.properties.rawValue,this.invalidate())})}_callFocus(e){this._focusKey=e,this.focus()}_onBlur(){this._editing&&this._onSave()}_onInput(e){this._editingValue=e}_onKeyDown(e){e===ae.a.Enter?(this._onSave(),this._callFocus("button")):e===ae.a.Escape&&(this._editing=!1,this._callFocus("button"),this.invalidate())}_onSave(){this._editing=!1,this.properties.updater(this._editingValue),this.invalidate()}renderContent(){const{value:e}=this.properties;return Object(s.j)("div",{key:"content",id:this._idBase,ondblclick:this._onEdit},[e])}render(){let{editable:e,rawValue:t,theme:i,classes:o,width:r}=this.properties;return Object(s.j)("div",{role:"cell",styles:r?{flex:`0 1 ${r}px`}:{},classes:[this.theme(ce.root),de.rootFixed]},[this._editing?Object(s.k)(Z.a,{key:"input",theme:i,classes:o,label:`Edit ${t}`,labelHidden:!0,extraClasses:{input:this.theme(ce.input)},focus:"input"===this._focusKey?this.shouldFocus:()=>!1,value:this._editingValue,onInput:this._onInput,onBlur:this._onBlur,onKeyDown:this._onKeyDown}):this.renderContent(),e&&!this._editing?Object(s.k)(ne.a,{key:"button",theme:i,classes:o,aria:{describedby:this._idBase},focus:"button"===this._focusKey?this.shouldFocus:()=>!1,type:"button",extraClasses:{root:this.theme(ce.edit)},onClick:this._onEdit},[Object(s.k)(U.a,{type:"editIcon",altText:"Edit",classes:o,theme:i})]):null])}};var he=le=o.__decorate([Object(a.f)(ce)],le),ge=i(79),_e=i(82);let pe=class extends(Object(a.d)(r.b)){_onRowSelect(e){const{onRowSelect:t}=this.properties,i=e.ctrlKey||e.metaKey?"multi":"single";t&&t(i)}render(){const{item:e,columnConfig:t,id:i,theme:o,classes:r,columnWidths:a,onRowSelect:n,selected:d}=this.properties;let c=t.map(t=>{let n=`${e[t.id]}`;return t.renderer&&(n=t.renderer({value:n})),Object(s.k)(he,{theme:o,key:t.id,classes:r,updater:e=>{this.properties.updater(i,t.id,e)},value:n,editable:t.editable,rawValue:`${e[t.id]}`,width:a?a[t.id]:void 0})},[]);return Object(s.j)("div",{key:"root",classes:[this.theme(_e.root),d&&this.theme(_e.selected),ge.rootFixed],role:"row",onclick:n?this._onRowSelect:void 0,"aria-rowindex":`${i+1}`},c)}};var ue=pe=o.__decorate([Object(a.f)(_e)],pe),me=i(44),be=i(45);const fe=e=>Object(s.k)(re,{key:e});let je=class extends(Object(a.d)(r.b)){constructor(){super(...arguments),this._start=0,this._end=100,this._resetScroll=!1}_updater(e,t,i){const o=Math.max(Math.ceil(e/this.properties.pageSize),1),r=e-(o-1)*this.properties.pageSize;this.properties.updater(o,r,t,i)}_onScroll(e){const{totalRows:t=0,onScroll:i}=this.properties,o=e.target.scrollTop,r=e.target.scrollLeft,s=Math.round(o/this._rowHeight),a=s+this._rowsInView;s<=this._start&&(this._start=Math.max(0,s-this._renderPageSize),this._end=Math.min(t,this._start+2*this._renderPageSize)),a>=this._end&&(this._start=Math.min(s,t-this._renderPageSize),this._end=Math.min(t,this._start+2*this._renderPageSize)),i&&i(r),this.invalidate()}_onDiffTotalRows(){this._start=0,this._end=100,this._resetScroll=!0}_renderRows(e,t){const{pageSize:i,fetcher:o,pages:r,columnConfig:a,placeholderRowRenderer:n=fe,pageChange:d,totalRows:c,theme:l,classes:h,columnWidths:g,onRowSelect:_,selectedRows:p=[]}=this.properties,u=Math.max(Math.ceil(e/i),1),m=Math.ceil(t/i);let b=r[`page-${u}`]||[];if(!b.length&&(void 0===c||c>0)&&o(u,i),u!==m){const t=r[`page-${m}`]||[];t.length||o(m,i),d(Math.max(Math.ceil((e+this._rowsInView/2)/i),1)),b=[...b,...t]}else d(u);const f=[];for(let o=e;o<t;o++){const e=b[o-(u*i-i)];e?f.push(Object(s.k)(ue,{id:o,key:o,theme:l,classes:h,item:e,columnConfig:a,updater:this._updater,columnWidths:g,onRowSelect:_?e=>{_&&_(o,e)}:void 0,selected:-1!==p.indexOf(o)})):(void 0===c||o>-1&&o<c)&&f.push(n(o))}return f}render(){const{placeholderRowRenderer:e=fe,totalRows:t=0,pageSize:i,height:o,width:a,columnWidths:n}=this.properties,d=n&&Object.keys(n).reduce((e,t)=>e+n[t],0);if(!this._rowHeight){const t=(e=>{const t=Object(s.b)(()=>Object(s.k)(class extends r.b{render(){return e}},{})),i=A.default.document.createElement("div");i.style.position="absolute",A.default.document.body.appendChild(i),t.mount({domNode:i,sync:!0});const o=i.getBoundingClientRect();return A.default.document.body.removeChild(i),o})(e(0));this._rowHeight=t.height,this._rowsInView=Math.ceil(o/this._rowHeight),this._renderPageSize=2*this._rowsInView}const c=this._renderRows(this._start,this._end),l=this._rowHeight*this._start;let h=0;t>=i&&(h=t*this._rowHeight-l-(this._end-this._start)*this._rowHeight);let g={key:"root",classes:[this.theme(be.root),me.rootFixed],role:"rowgroup",onscroll:this._onScroll,styles:a?{height:`${o}px`,width:`${a}px`}:{height:`${o}px`}};return this._resetScroll&&(this._resetScroll=!1,g=Object.assign({},g,{scrollTop:0})),Object(s.j)("div",g,[Object(s.j)("div",{styles:d?{width:`${d}px`}:{}},[Object(s.j)("div",{key:"top",styles:{height:`${l}px`}}),...c,Object(s.j)("div",{key:"bottom",styles:{height:`${h}px`}})])])}};o.__decorate([Object(n.b)("totalRows",d.a),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[]),o.__metadata("design:returntype",void 0)],je.prototype,"_onDiffTotalRows",null);var ye=je=o.__decorate([Object(a.f)(be),Object(n.b)("pages",d.b)],je),Oe=i(89);let we=class extends(Object(a.d)(r.b)){render(){const{total:e,page:t,pageSize:i}=this.properties,o=void 0!==e?`Page ${t} of ${Math.ceil(e/i)}. Total rows ${e}`:`Page ${t} of ?`;return Object(s.j)("div",{classes:this.theme(Oe.root)},[o])}};var ve=we=o.__decorate([Object(a.f)(Oe)],we),xe=i(92),Se=i(95);let ke=class extends(Object(a.c)(r.a)){_renderPageControl(e){const{onPageChange:t,page:i}=this.properties,o=e===i;return Object(s.j)("button",{key:o?"current":`${e}`,disabled:o,onclick:()=>{t(e)},"aria-current":o?"page":void 0,"aria-label":o?`Current Page, Page ${e}`:`Goto Page ${e}`,classes:[this.theme(Se.pageNumber),o&&this.theme(Se.active)]},[`${e}`])}_renderPaginationControls(e){const{page:t}=this.properties;return t<4?[this._renderPageControl(1),e>1&&this._renderPageControl(2),e>2&&this._renderPageControl(3),e>3&&this._renderPageControl(4),e>4&&this._renderPageControl(5),e>5&&Object(s.j)("span",{key:"more","aria-hidden":!0,classes:[this.theme(Se.more),xe.moreFixed]},["..."]),e>5&&this._renderPageControl(e)]:t>e-3?[this._renderPageControl(1),Object(s.j)("span",{key:"less","aria-hidden":!0,classes:[this.theme(Se.more),xe.moreFixed]},["..."]),this._renderPageControl(e-4),this._renderPageControl(e-3),this._renderPageControl(e-2),this._renderPageControl(e-1),this._renderPageControl(e)]:[this._renderPageControl(1),Object(s.j)("span",{key:"less","aria-hidden":!0,classes:[this.theme(Se.more),xe.moreFixed]},["..."]),this._renderPageControl(t-1),this._renderPageControl(t),this._renderPageControl(t+1),Object(s.j)("span",{key:"more","aria-hidden":!0,classes:[this.theme(Se.more),xe.moreFixed]},["..."]),this._renderPageControl(e)]}render(){const{onPageChange:e,page:t,total:i,pageSize:o}=this.properties;if(void 0===i)return null;const r=Math.ceil(i/o),a=1===t?"1":`${(t-1)*o+1}`,n=1===t?o:t*o,d=i?this._renderPaginationControls(r):[];return Object(s.j)("div",{classes:[this.theme(Se.root),xe.rootFixed]},[Object(s.j)("div",{classes:[xe.containerFixed,this.theme(Se.details),xe.detailsFixed]},[i?`${a} - ${i<n?i:n} of ${i} Results`:"0 Results"]),Object(s.j)("nav",{role:"navigation","aria-label":"Pagination Navigation",classes:[this.theme(Se.pagination)]},[Object(s.j)("ul",{classes:[xe.containerFixed,this.theme(Se.paginationList),xe.paginationListFixed]},[Object(s.j)("li",{classes:[xe.itemFixed,this.theme(Se.item)]},[r>1&&Object(s.j)("button",{key:"previous",disabled:1===t,onclick:()=>{e(t-1)},"aria-label":`Goto Page ${t-1}`,classes:[this.theme(Se.pageNav),xe.pageNavFixed]},["<"]),...d,r>1&&Object(s.j)("button",{key:"next",disabled:t===r,onclick:()=>{e(t+1)},"aria-label":`Goto Page ${t+1}`,classes:[this.theme(Se.pageNav),xe.pageNavFixed]},[">"])])])])])}};var Re=ke=o.__decorate([Object(a.f)(Se)],ke);const Ce=e=>Object(s.k)(re,{key:e});let Pe=class extends(Object(a.d)(r.b)){_updater(e,t,i){const o=Math.max(Math.ceil(e/this.properties.pageSize),1),r=e-(o-1)*this.properties.pageSize;this.properties.updater(o,r,t,i)}_onScroll(e){const t=e.target.scrollLeft;this.properties.onScroll(t)}_renderRows(){const{pageSize:e,fetcher:t,pages:i,columnConfig:o,placeholderRowRenderer:r=Ce,pageNumber:a,theme:n,classes:d,columnWidths:c,onRowSelect:l,selectedRows:h=[]}=this.properties;let g=i[`page-${a}`];g||t(a,e);let _=[];const p=g?g.length:e;for(let e=0;e<p;e++)g?_.push(Object(s.k)(ue,{id:e,key:e,theme:n,classes:d,item:g[e],columnConfig:o,columnWidths:c,updater:this._updater,onRowSelect:l?t=>{l&&l(e,t)}:void 0,selected:-1!==h.indexOf(e)})):_.push(r(e));return _}render(){const{height:e,width:t,columnWidths:i}=this.properties,o=i&&Object.keys(i).reduce((e,t)=>e+i[t],0);return Object(s.j)("div",{key:"root",classes:[this.theme(be.root),me.rootFixed],role:"rowgroup",onscroll:this._onScroll,styles:t?{height:`${e}px`,width:`${t}px`}:{height:`${e}px`}},[Object(s.j)("div",{styles:o?{width:`${o}px`}:{}},[Object(s.j)("div"),...this._renderRows()])])}};var Fe=Pe=o.__decorate([Object(a.f)(be),Object(n.b)("pages",d.b)],Pe),ze=i(98),Ie=i(101);const $e={page:1,total:void 0,sort:void 0,filter:void 0,isSorting:!1,editedRow:void 0,selection:[]};let We=class extends(Object(a.d)(r.b)){constructor(){super(),this._store=new c.a,this._scrollLeft=0,this._pageSize=100,this._gridWidth=0,this._handle=this._store.onChange(this._store.path("_grid"),this.invalidate.bind(this))}onStoreProperty(e,t){const{storeId:i="_grid"}=t;this._handle.remove(),this._store=t.store,this._handle=this._store.onChange(this._store.path(i),()=>{this.invalidate()})}_getProperties(){const{storeId:e="_grid"}=this.properties;return Object.assign({},this.properties,{storeId:e})}_getBodyDimensions(){const{height:e}=this.properties,t=this.meta(l.b).get("header"),i=this.meta(l.b).get("header-wrapper"),o=this.meta(l.b).get("footer");return{headerWidth:i.size.width,bodyHeight:e-t.size.height-o.size.height,bodyWidth:t.size.width}}_onColumnResize(e,t){const{columnConfig:i}=this.properties;if(!this._columnWidths)return;const o=this._columnWidths[i[e].id];o<=100&&t<0||(o+t<=100&&(t-=o+t-100),this._columnWidths=Object.assign({},this._columnWidths,{[i[e].id]:o+t}),this.invalidate())}_fetcher(e,t){const{storeId:i,fetcher:o}=this._getProperties();M(this._store)({id:i,fetcher:o,page:e,pageSize:t})}_sorter(e,t){const{storeId:i,fetcher:o,onRowSelect:r}=this._getProperties();if(r){(this._store.get(this._store.path(i,"meta","selection"))||[]).length&&r([])}D(this._store)({id:i,fetcher:o,columnId:e,direction:t})}_filterer(e,t){const{storeId:i,fetcher:o,onRowSelect:r}=this._getProperties();if(r){(this._store.get(this._store.path(i,"meta","selection"))||[]).length&&r([])}N(this._store)({id:i,fetcher:o,filterOptions:{columnId:e,value:t}})}_updater(e,t,i,o){const{storeId:r,updater:s}=this._getProperties();W(this._store)({id:r,page:e,columnId:i,rowNumber:t,value:o,updater:s})}_pageChange(e){const{storeId:t}=this._getProperties();E(this._store)({id:t,page:e})}_selection(e,t){const{storeId:i,onRowSelect:o}=this._getProperties();T(this._store)({id:i,index:e,type:t});const r=this._store.get(this._store.path(i,"meta","selection"))||[],s=[],a=this._store.get(this._store.path(i,"data","pages"));for(let e=0;e<r.length;e++){const t=r[e],i=Math.floor(t/this._pageSize)+1,o=t-(i-1)*this._pageSize;a[`page-${i}`]&&s.push(a[`page-${i}`][o])}o&&o(s)}_onScroll(e){this._scrollLeft=e,this.invalidate()}render(){const{columnConfig:e,storeId:t,theme:i,classes:o,pagination:r=!1,customRenderers:a={},onRowSelect:n}=this._getProperties(),{sortRenderer:d,filterRenderer:c}=a;if(!e||!this.properties.fetcher)return null;const l=this._store.get(this._store.path(t,"meta"))||$e,g=this._store.get(this._store.path(t,"data","pages"))||{},_=e.some(e=>!!e.filterable),p=e.some(e=>!!e.resizable),{bodyHeight:u,bodyWidth:m,headerWidth:b}=this._getBodyDimensions();if(this.meta(h.a).get("root"),m&&b&&p&&!this._columnWidths){const t=b/e.length;this._columnWidths=e.reduce((e,{id:i})=>(e[i]=Math.max(100,t),e),{}),this._gridWidth=Math.max(m,100*e.length)}return Object(s.j)("div",{key:"root",classes:[this.theme(ze.root),Ie.rootFixed],role:"table","aria-rowcount":l.total?`${l.total}`:null},[Object(s.j)("div",{key:"header",scrollLeft:this._scrollLeft,styles:p&&this._gridWidth?{width:`${this._gridWidth}px`}:{},classes:[this.theme(ze.header),Ie.headerFixed,_?this.theme(ze.filterGroup):null],row:"rowgroup"},[Object(s.j)("div",{key:"header-wrapper"},[Object(s.k)(te,{key:"header-row",theme:i,columnWidths:this._columnWidths,classes:o,columnConfig:e,sorter:this._sorter,sort:l.sort,filter:l.filter,filterer:this._filterer,sortRenderer:d,filterRenderer:c,onColumnResize:this._onColumnResize})])]),r?Object(s.k)(Fe,{key:"paginated-body",theme:i,classes:o,pages:g,columnWidths:this._columnWidths,pageNumber:l.page,pageSize:this._pageSize,onScroll:this._onScroll,columnConfig:e,fetcher:this._fetcher,updater:this._updater,height:u,width:p?this._gridWidth:void 0,onRowSelect:n?this._selection:void 0,selectedRows:l.selection}):Object(s.k)(ye,{key:"body",theme:i,classes:o,pages:g,columnWidths:this._columnWidths,totalRows:l.total,pageSize:this._pageSize,columnConfig:e,fetcher:this._fetcher,pageChange:this._pageChange,updater:this._updater,onScroll:this._onScroll,height:u,width:p?this._gridWidth:void 0,onRowSelect:n?this._selection:void 0,selectedRows:l.selection}),Object(s.j)("div",{key:"footer"},[r?Object(s.k)(Re,{theme:i,classes:o,total:l.total,page:l.page,pageSize:this._pageSize,onPageChange:e=>{this._pageChange(e)}}):Object(s.k)(ve,{key:"footer-row",theme:i,classes:o,total:l.total,page:l.page,pageSize:this._pageSize})])])}};o.__decorate([Object(n.a)("store",d.b),o.__metadata("design:type",Function),o.__metadata("design:paramtypes",[Object,Object]),o.__metadata("design:returntype",void 0)],We.prototype,"onStoreProperty",null),We=o.__decorate([Object(a.f)(ze),o.__metadata("design:paramtypes",[])],We);t.a=We},27:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var o=i(0);i(1);function r(e,t=!1,i=!1){return i?o.default[e].bind(o.default):o.default[e]}},300:function(e,t,i){"use strict";i.r(t);var o=i(18),r=i(47),s=i(19),a=i(104),n=i(43),d=i(46),c=i(39);class l extends s.b{constructor(){super(...arguments),this.columnConfig=[{id:"lfname",title:"Nombre",filterable:!0,sortable:!0,resizable:!0},{id:"identificationtype_label",title:"Tipo ID",filterable:!0,sortable:!0,resizable:!0},{id:"identification",title:"Identificación",filterable:!0,sortable:!0,resizable:!0},{id:"gender_label",title:"Género",filterable:!0,sortable:!0,resizable:!0},{id:"contactype_label",title:"Tipo Contacto",filterable:!0,sortable:!0,resizable:!0},{id:"note",title:"Notas",sortable:!0,resizable:!0}]}async onAttach(){const e=await fetch("/contacts_r",{method:"POST",body:JSON.stringify({idaccount:localStorage.getItem("idaccount")}),headers:{"Content-Type":"application/json"}});let t=await e.json();console.log(t),this._fetcher=Object(n.a)(t),this.invalidate()}render(){return Object(o.j)("div",{},[Object(o.k)(d.a,{heading:"CONTACTOS",collapseWidth:150},[Object(o.k)(c.a,{label:"NUEVO",classes:["fas","fa-user-plus"],ShowLabel:!0,onClick:e=>{window.location.href="/#contact?idcontact=0&rowkey=0&idaccount="+localStorage.getItem("idaccount")}})]),Object(o.j)("div",{},[this._fetcher?Object(o.k)(a.a,{columnConfig:this.columnConfig,fetcher:this._fetcher,height:400,onRowSelect:e=>{console.log(e,this._fetcher),window.location.href="/#contact?idcontact="+e[0].idcontact+"&rowkey="+e[0].rowkey+"&idaccount="+localStorage.getItem("idaccount")}}):null])])}}var h=i(33);const g=Object(o.a)();t.default=g(function({properties:e}){return Object(o.j)("div",{classes:[h.root]},[Object(o.k)(r.a,{}),Object(o.k)(l,{url:"/contacts"})])})},43:function(e,t,i){"use strict";i.d(t,"a",function(){return r});var o=i(20);i(32);function r(e){return(t,i,r={})=>o.__awaiter(this,void 0,void 0,function*(){return function(e,t,i){return o.__awaiter(this,void 0,void 0,function*(){const o=[...e];return{data:[...o].splice((t-1)*i,i),meta:{total:o.length}}})}(function(e,{sort:t}){const i=[...e];return t&&i.sort((e,i)=>{const o="asc"===t.direction?i:e,r="asc"===t.direction?e:i;return o[t.columnId]<r[t.columnId]?1:o[t.columnId]>r[t.columnId]?-1:0}),i}(function(e,{filter:t}){return t?e.filter(e=>{let i=!0;return Object.keys(t).forEach(o=>{-1===e[o].toLowerCase().indexOf(t[o].toLowerCase())&&(i=!1)}),i}):[...e]}(e,r),r),t,i)})}},44:function(e,t,i){i(85),e.exports={" _key":"@dojo/widgets/body",rootFixed:"body-m__rootFixed__2K95C"}},45:function(e,t,i){i(87),e.exports={" _key":"@dojo/widgets/grid-body",root:"grid-body-m__root__1yYLp"}},64:function(e,t,i){i(65),e.exports={" _key":"@dojo/widgets/grid-header",root:"grid-header-m__root__10T4d",cell:"grid-header-m__cell__14Kc4",sortable:"grid-header-m__sortable__2yeMz",sorted:"grid-header-m__sorted__2yNUr",desc:"grid-header-m__desc__pLIpr",asc:"grid-header-m__asc__2gtzM",sort:"grid-header-m__sort__1e8Kx",filter:"grid-header-m__filter__f6CI9"}},65:function(e,t,i){},67:function(e,t,i){i(68),e.exports={" _key":"@dojo/widgets/header",rootFixed:"header-m__rootFixed__1gcHn",cellFixed:"header-m__cellFixed__1R9rb",column:"header-m__column__3Z_b8",resize:"header-m__resize__3cPDx"}},68:function(e,t,i){},70:function(e,t,i){i(71),e.exports={" _key":"@dojo/widgets/grid-placeholder-row",root:"grid-placeholder-row-m__root__1I0Qr grid-row-m__root__2PlMc",loading:"grid-placeholder-row-m__loading__1ASJP",spin:"grid-placeholder-row-m__spin__2NsZe"}},71:function(e,t,i){},73:function(e,t,i){i(74),e.exports={" _key":"@dojo/widgets/cell",rootFixed:"cell-m__rootFixed__1lXNB"}},74:function(e,t,i){},76:function(e,t,i){i(77),e.exports={" _key":"@dojo/widgets/grid-cell",root:"grid-cell-m__root__3icaN",input:"grid-cell-m__input__2J0_c",edit:"grid-cell-m__edit__xjg9f base-m__visuallyHidden__1AeWe base-m__focusable__1_qAN"}},77:function(e,t,i){},79:function(e,t,i){i(80),e.exports={" _key":"@dojo/widgets/row",rootFixed:"row-m__rootFixed__3ejCY"}},80:function(e,t,i){},82:function(e,t,i){i(83),e.exports={" _key":"@dojo/widgets/grid-row",root:"grid-row-m__root__2PlMc",selected:"grid-row-m__selected__Em4gT"}},83:function(e,t,i){},85:function(e,t,i){},87:function(e,t,i){},89:function(e,t,i){i(90),e.exports={" _key":"@dojo/widgets/grid-footer",root:"grid-footer-m__root__2hvVs"}},90:function(e,t,i){},92:function(e,t,i){i(93),e.exports={" _key":"@dojo/widgets/paginated-footer",rootFixed:"paginated-footer-m__rootFixed__54_sK",containerFixed:"paginated-footer-m__containerFixed__HzKF8",detailsFixed:"paginated-footer-m__detailsFixed__3gQUX",paginationListFixed:"paginated-footer-m__paginationListFixed__1JPbF",itemFixed:"paginated-footer-m__itemFixed__2W4-4",moreFixed:"paginated-footer-m__moreFixed__1VMXn",pageNavFixed:"paginated-footer-m__pageNavFixed__20MBZ"}},93:function(e,t,i){},95:function(e,t,i){i(96),e.exports={" _key":"@dojo/widgets/grid-paginated-footer",root:"grid-paginated-footer-m__root__2xW9j",pagination:"grid-paginated-footer-m__pagination__mMw0Z",details:"grid-paginated-footer-m__details__3OO9A",paginationList:"grid-paginated-footer-m__paginationList__1dOPM",item:"grid-paginated-footer-m__item__1_Tjb",more:"grid-paginated-footer-m__more__2TJ3y",pageNumber:"grid-paginated-footer-m__pageNumber__3aae7",pageNav:"grid-paginated-footer-m__pageNav__6zNer",active:"grid-paginated-footer-m__active__3zI7L"}},96:function(e,t,i){},98:function(e,t,i){i(99),e.exports={" _key":"@dojo/widgets/grid",root:"grid-m__root___v2E_",header:"grid-m__header__1tmI3",filterGroup:"grid-m__filterGroup__2dOAI"}},99:function(e,t,i){}}]);
//# sourceMappingURL=0.5948d299fb9ac760f751.bundle.js.map