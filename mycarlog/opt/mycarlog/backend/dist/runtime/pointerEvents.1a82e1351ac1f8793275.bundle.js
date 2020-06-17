/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpmycarlog3=window.dojoWebpackJsonpmycarlog3||[]).push([["runtime/pointerEvents"],{18:function(t,e,n){"use strict";n.r(e);n(65)},65:function(t,e,n){
/*!
 * PEP v0.4.2 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */
t.exports=function(){"use strict";var t=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","pageX","pageY"],e=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0];function n(n,i){i=i||Object.create(null);var r=document.createEvent("Event");r.initEvent(n,i.bubbles||!1,i.cancelable||!1);for(var o,s=2;s<t.length;s++)o=t[s],r[o]=i[o]||e[s];r.buttons=i.buttons||0;var a=0;return a=i.pressure&&r.buttons?i.pressure:r.buttons?.5:0,r.x=r.clientX,r.y=r.clientY,r.pointerId=i.pointerId||0,r.width=i.width||0,r.height=i.height||0,r.pressure=a,r.tiltX=i.tiltX||0,r.tiltY=i.tiltY||0,r.pointerType=i.pointerType||"",r.hwTimestamp=i.hwTimestamp||0,r.isPrimary=i.isPrimary||!1,r}var i=window.Map&&window.Map.prototype.forEach?Map:r;function r(){this.array=[],this.size=0}r.prototype={set:function(t,e){if(void 0===e)return this.delete(t);this.has(t)||this.size++,this.array[t]=e},has:function(t){return void 0!==this.array[t]},delete:function(t){this.has(t)&&(delete this.array[t],this.size--)},get:function(t){return this.array[t]},clear:function(){this.array.length=0,this.size=0},forEach:function(t,e){return this.array.forEach(function(n,i){t.call(e,n,i,this)},this)}};var o=["bubbles","cancelable","view","detail","screenX","screenY","clientX","clientY","ctrlKey","altKey","shiftKey","metaKey","button","relatedTarget","buttons","pointerId","width","height","pressure","tiltX","tiltY","pointerType","hwTimestamp","isPrimary","type","target","currentTarget","which","pageX","pageY","timeStamp"],s=[!1,!1,null,null,0,0,0,0,!1,!1,!1,!1,0,null,0,0,0,0,0,0,0,"",0,!1,"",null,null,0,0,0,0],a={pointerover:1,pointerout:1,pointerenter:1,pointerleave:1},u="undefined"!=typeof SVGElementInstance,c={pointermap:new i,eventMap:Object.create(null),captureInfo:Object.create(null),eventSources:Object.create(null),eventSourceList:[],registerSource:function(t,e){var n=e,i=n.events;i&&(i.forEach(function(t){n[t]&&(this.eventMap[t]=n[t].bind(n))},this),this.eventSources[t]=n,this.eventSourceList.push(n))},register:function(t){for(var e,n=this.eventSourceList.length,i=0;i<n&&(e=this.eventSourceList[i]);i++)e.register.call(e,t)},unregister:function(t){for(var e,n=this.eventSourceList.length,i=0;i<n&&(e=this.eventSourceList[i]);i++)e.unregister.call(e,t)},contains:function(t,e){try{return t.contains(e)}catch(t){return!1}},down:function(t){t.bubbles=!0,this.fireEvent("pointerdown",t)},move:function(t){t.bubbles=!0,this.fireEvent("pointermove",t)},up:function(t){t.bubbles=!0,this.fireEvent("pointerup",t)},enter:function(t){t.bubbles=!1,this.fireEvent("pointerenter",t)},leave:function(t){t.bubbles=!1,this.fireEvent("pointerleave",t)},over:function(t){t.bubbles=!0,this.fireEvent("pointerover",t)},out:function(t){t.bubbles=!0,this.fireEvent("pointerout",t)},cancel:function(t){t.bubbles=!0,this.fireEvent("pointercancel",t)},leaveOut:function(t){this.out(t),this.propagate(t,this.leave,!1)},enterOver:function(t){this.over(t),this.propagate(t,this.enter,!0)},eventHandler:function(t){if(!t._handledByPE){var e=t.type,n=this.eventMap&&this.eventMap[e];n&&n(t),t._handledByPE=!0}},listen:function(t,e){e.forEach(function(e){this.addEvent(t,e)},this)},unlisten:function(t,e){e.forEach(function(e){this.removeEvent(t,e)},this)},addEvent:function(t,e){t.addEventListener(e,this.boundHandler)},removeEvent:function(t,e){t.removeEventListener(e,this.boundHandler)},makeEvent:function(t,e){this.captureInfo[e.pointerId]&&(e.relatedTarget=null);var i=new n(t,e);return e.preventDefault&&(i.preventDefault=e.preventDefault),i._target=i._target||e.target,i},fireEvent:function(t,e){var n=this.makeEvent(t,e);return this.dispatchEvent(n)},cloneEvent:function(t){for(var e,n=Object.create(null),i=0;i<o.length;i++)n[e=o[i]]=t[e]||s[i],!u||"target"!==e&&"relatedTarget"!==e||n[e]instanceof SVGElementInstance&&(n[e]=n[e].correspondingUseElement);return t.preventDefault&&(n.preventDefault=function(){t.preventDefault()}),n},getTarget:function(t){var e=this.captureInfo[t.pointerId];return e?t._target!==e&&t.type in a?void 0:e:t._target},propagate:function(t,e,n){for(var i=t.target,r=[];!i.contains(t.relatedTarget)&&i!==document;)r.push(i),i=i.parentNode;n&&r.reverse(),r.forEach(function(n){t.target=n,e.call(this,t)},this)},setCapture:function(t,e){this.captureInfo[t]&&this.releaseCapture(t),this.captureInfo[t]=e;var i=new n("gotpointercapture");i.pointerId=t,this.implicitRelease=this.releaseCapture.bind(this,t),document.addEventListener("pointerup",this.implicitRelease),document.addEventListener("pointercancel",this.implicitRelease),i._target=e,this.asyncDispatchEvent(i)},releaseCapture:function(t){var e=this.captureInfo[t];if(e){var i=new n("lostpointercapture");i.pointerId=t,this.captureInfo[t]=void 0,document.removeEventListener("pointerup",this.implicitRelease),document.removeEventListener("pointercancel",this.implicitRelease),i._target=e,this.asyncDispatchEvent(i)}},dispatchEvent:function(t){var e=this.getTarget(t);if(e)return e.dispatchEvent(t)},asyncDispatchEvent:function(t){requestAnimationFrame(this.dispatchEvent.bind(this,t))}};c.boundHandler=c.eventHandler.bind(c);var h={shadow:function(t){if(t)return t.shadowRoot||t.webkitShadowRoot},canTarget:function(t){return t&&Boolean(t.elementFromPoint)},targetingShadow:function(t){var e=this.shadow(t);if(this.canTarget(e))return e},olderShadow:function(t){var e=t.olderShadowRoot;if(!e){var n=t.querySelector("shadow");n&&(e=n.olderShadowRoot)}return e},allShadows:function(t){for(var e=[],n=this.shadow(t);n;)e.push(n),n=this.olderShadow(n);return e},searchRoot:function(t,e,n){if(t){var i,r,o=t.elementFromPoint(e,n);for(r=this.targetingShadow(o);r;){if(i=r.elementFromPoint(e,n)){var s=this.targetingShadow(i);return this.searchRoot(s,e,n)||i}r=this.olderShadow(r)}return o}},owner:function(t){for(var e=t;e.parentNode;)e=e.parentNode;return e.nodeType!==Node.DOCUMENT_NODE&&e.nodeType!==Node.DOCUMENT_FRAGMENT_NODE&&(e=document),e},findTarget:function(t){var e=t.clientX,n=t.clientY,i=this.owner(t.target);return i.elementFromPoint(e,n)||(i=document),this.searchRoot(i,e,n)}},l=Array.prototype.forEach.call.bind(Array.prototype.forEach),p=Array.prototype.map.call.bind(Array.prototype.map),v=Array.prototype.slice.call.bind(Array.prototype.slice),d=Array.prototype.filter.call.bind(Array.prototype.filter),f=window.MutationObserver||window.WebKitMutationObserver,m={subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0,attributeFilter:["touch-action"]};function E(t,e,n,i){this.addCallback=t.bind(i),this.removeCallback=e.bind(i),this.changedCallback=n.bind(i),f&&(this.observer=new f(this.mutationWatcher.bind(this)))}function b(t){return"body /shadow-deep/ "+T(t)}function T(t){return'[touch-action="'+t+'"]'}function g(t){return"{ -ms-touch-action: "+t+"; touch-action: "+t+"; }"}E.prototype={watchSubtree:function(t){this.observer&&h.canTarget(t)&&this.observer.observe(t,m)},enableOnSubtree:function(t){this.watchSubtree(t),t===document&&"complete"!==document.readyState?this.installOnLoad():this.installNewSubtree(t)},installNewSubtree:function(t){l(this.findElements(t),this.addElement,this)},findElements:function(t){return t.querySelectorAll?t.querySelectorAll("[touch-action]"):[]},removeElement:function(t){this.removeCallback(t)},addElement:function(t){this.addCallback(t)},elementChanged:function(t,e){this.changedCallback(t,e)},concatLists:function(t,e){return t.concat(v(e))},installOnLoad:function(){document.addEventListener("readystatechange",function(){"complete"===document.readyState&&this.installNewSubtree(document)}.bind(this))},isElement:function(t){return t.nodeType===Node.ELEMENT_NODE},flattenMutationTree:function(t){var e=p(t,this.findElements,this);return e.push(d(t,this.isElement)),e.reduce(this.concatLists,[])},mutationWatcher:function(t){t.forEach(this.mutationHandler,this)},mutationHandler:function(t){if("childList"===t.type){var e=this.flattenMutationTree(t.addedNodes);e.forEach(this.addElement,this);var n=this.flattenMutationTree(t.removedNodes);n.forEach(this.removeElement,this)}else"attributes"===t.type&&this.elementChanged(t.target,t.oldValue)}};var y=["none","auto","pan-x","pan-y",{rule:"pan-x pan-y",selectors:["pan-x pan-y","pan-y pan-x"]}],w="",P=window.PointerEvent||window.MSPointerEvent,S=!window.ShadowDOMPolyfill&&document.head.createShadowRoot,O=c.pointermap,I=[1,4,2,8,16],M=!1;try{M=1===new MouseEvent("test",{buttons:1}).buttons}catch(t){}var R,C={POINTER_ID:1,POINTER_TYPE:"mouse",events:["mousedown","mousemove","mouseup","mouseover","mouseout"],register:function(t){c.listen(t,this.events)},unregister:function(t){c.unlisten(t,this.events)},lastTouches:[],isEventSimulatedFromTouch:function(t){for(var e,n=this.lastTouches,i=t.clientX,r=t.clientY,o=0,s=n.length;o<s&&(e=n[o]);o++){var a=Math.abs(i-e.x),u=Math.abs(r-e.y);if(a<=25&&u<=25)return!0}},prepareEvent:function(t){var e=c.cloneEvent(t),n=e.preventDefault;return e.preventDefault=function(){t.preventDefault(),n()},e.pointerId=this.POINTER_ID,e.isPrimary=!0,e.pointerType=this.POINTER_TYPE,e},prepareButtonsForMove:function(t,e){var n=O.get(this.POINTER_ID);0!==e.which&&n?t.buttons=n.buttons:t.buttons=0,e.buttons=t.buttons},mousedown:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=O.get(this.POINTER_ID),n=this.prepareEvent(t);M||(n.buttons=I[n.button],e&&(n.buttons|=e.buttons),t.buttons=n.buttons),O.set(this.POINTER_ID,t),e&&0!==e.buttons?c.move(n):c.down(n)}},mousemove:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);M||this.prepareButtonsForMove(e,t),e.button=-1,O.set(this.POINTER_ID,t),c.move(e)}},mouseup:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=O.get(this.POINTER_ID),n=this.prepareEvent(t);if(!M){var i=I[n.button];n.buttons=e?e.buttons&~i:0,t.buttons=n.buttons}O.set(this.POINTER_ID,t),n.buttons&=~I[n.button],0===n.buttons?c.up(n):c.move(n)}},mouseover:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);M||this.prepareButtonsForMove(e,t),e.button=-1,O.set(this.POINTER_ID,t),c.enterOver(e)}},mouseout:function(t){if(!this.isEventSimulatedFromTouch(t)){var e=this.prepareEvent(t);M||this.prepareButtonsForMove(e,t),e.button=-1,c.leaveOut(e)}},cancel:function(t){var e=this.prepareEvent(t);c.cancel(e),this.deactivateMouse()},deactivateMouse:function(){O.delete(this.POINTER_ID)}},Y=c.captureInfo,_=h.findTarget.bind(h),D=h.allShadows.bind(h),N=c.pointermap,L={events:["touchstart","touchmove","touchend","touchcancel"],register:function(t){R.enableOnSubtree(t)},unregister:function(){},elementAdded:function(t){var e=t.getAttribute("touch-action"),n=this.touchActionToScrollType(e);n&&(t._scrollType=n,c.listen(t,this.events),D(t).forEach(function(t){t._scrollType=n,c.listen(t,this.events)},this))},elementRemoved:function(t){t._scrollType=void 0,c.unlisten(t,this.events),D(t).forEach(function(t){t._scrollType=void 0,c.unlisten(t,this.events)},this)},elementChanged:function(t,e){var n=t.getAttribute("touch-action"),i=this.touchActionToScrollType(n),r=this.touchActionToScrollType(e);i&&r?(t._scrollType=i,D(t).forEach(function(t){t._scrollType=i},this)):r?this.elementRemoved(t):i&&this.elementAdded(t)},scrollTypes:{EMITTER:"none",XSCROLLER:"pan-x",YSCROLLER:"pan-y",SCROLLER:/^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/},touchActionToScrollType:function(t){var e=t,n=this.scrollTypes;return"none"===e?"none":e===n.XSCROLLER?"X":e===n.YSCROLLER?"Y":n.SCROLLER.exec(e)?"XY":void 0},POINTER_TYPE:"touch",firstTouch:null,isPrimaryTouch:function(t){return this.firstTouch===t.identifier},setPrimaryTouch:function(t){(0===N.size||1===N.size&&N.has(1))&&(this.firstTouch=t.identifier,this.firstXY={X:t.clientX,Y:t.clientY},this.scrolling=!1,this.cancelResetClickCount())},removePrimaryPointer:function(t){t.isPrimary&&(this.firstTouch=null,this.firstXY=null,this.resetClickCount())},clickCount:0,resetId:null,resetClickCount:function(){var t=function(){this.clickCount=0,this.resetId=null}.bind(this);this.resetId=setTimeout(t,200)},cancelResetClickCount:function(){this.resetId&&clearTimeout(this.resetId)},typeToButtons:function(t){var e=0;return"touchstart"!==t&&"touchmove"!==t||(e=1),e},touchToPointer:function(t){var e=this.currentTouchEvent,n=c.cloneEvent(t),i=n.pointerId=t.identifier+2;n.target=Y[i]||_(n),n.bubbles=!0,n.cancelable=!0,n.detail=this.clickCount,n.button=0,n.buttons=this.typeToButtons(e.type),n.width=t.radiusX||t.webkitRadiusX||0,n.height=t.radiusY||t.webkitRadiusY||0,n.pressure=t.force||t.webkitForce||.5,n.isPrimary=this.isPrimaryTouch(t),n.pointerType=this.POINTER_TYPE,n.altKey=e.altKey,n.ctrlKey=e.ctrlKey,n.metaKey=e.metaKey,n.shiftKey=e.shiftKey;var r=this;return n.preventDefault=function(){r.scrolling=!1,r.firstXY=null,e.preventDefault()},n},processTouches:function(t,e){var n=t.changedTouches;this.currentTouchEvent=t;for(var i,r=0;r<n.length;r++)i=n[r],e.call(this,this.touchToPointer(i))},shouldScroll:function(t){if(this.firstXY){var e,n=t.currentTarget._scrollType;if("none"===n)e=!1;else if("XY"===n)e=!0;else{var i=t.changedTouches[0],r=n,o="Y"===n?"X":"Y",s=Math.abs(i["client"+r]-this.firstXY[r]),a=Math.abs(i["client"+o]-this.firstXY[o]);e=s>=a}return this.firstXY=null,e}},findTouch:function(t,e){for(var n,i=0,r=t.length;i<r&&(n=t[i]);i++)if(n.identifier===e)return!0},vacuumTouches:function(t){var e=t.touches;if(N.size>=e.length){var n=[];N.forEach(function(t,i){if(1!==i&&!this.findTouch(e,i-2)){var r=t.out;n.push(r)}},this),n.forEach(this.cancelOut,this)}},touchstart:function(t){this.vacuumTouches(t),this.setPrimaryTouch(t.changedTouches[0]),this.dedupSynthMouse(t),this.scrolling||(this.clickCount++,this.processTouches(t,this.overDown))},overDown:function(t){N.set(t.pointerId,{target:t.target,out:t,outTarget:t.target}),c.enterOver(t),c.down(t)},touchmove:function(t){this.scrolling||(this.shouldScroll(t)?(this.scrolling=!0,this.touchcancel(t)):(t.preventDefault(),this.processTouches(t,this.moveOverOut)))},moveOverOut:function(t){var e=t,n=N.get(e.pointerId);if(n){var i=n.out,r=n.outTarget;c.move(e),i&&r!==e.target&&(i.relatedTarget=e.target,e.relatedTarget=r,i.target=r,e.target?(c.leaveOut(i),c.enterOver(e)):(e.target=r,e.relatedTarget=null,this.cancelOut(e))),n.out=e,n.outTarget=e.target}},touchend:function(t){this.dedupSynthMouse(t),this.processTouches(t,this.upOut)},upOut:function(t){this.scrolling||(c.up(t),c.leaveOut(t)),this.cleanUpPointer(t)},touchcancel:function(t){this.processTouches(t,this.cancelOut)},cancelOut:function(t){c.cancel(t),c.leaveOut(t),this.cleanUpPointer(t)},cleanUpPointer:function(t){N.delete(t.pointerId),this.removePrimaryPointer(t)},dedupSynthMouse:function(t){var e=C.lastTouches,n=t.changedTouches[0];if(this.isPrimaryTouch(n)){var i={x:n.clientX,y:n.clientY};e.push(i);var r=function(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}.bind(null,e,i);setTimeout(r,2500)}}};R=new E(L.elementAdded,L.elementRemoved,L.elementChanged,L);var X,k,A=c.pointermap,F=window.MSPointerEvent&&"number"==typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE,K={events:["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerOut","MSPointerOver","MSPointerCancel","MSGotPointerCapture","MSLostPointerCapture"],register:function(t){c.listen(t,this.events)},unregister:function(t){c.unlisten(t,this.events)},POINTER_TYPES:["","unavailable","touch","pen","mouse"],prepareEvent:function(t){var e=t;return F&&((e=c.cloneEvent(t)).pointerType=this.POINTER_TYPES[t.pointerType]),e},cleanup:function(t){A.delete(t)},MSPointerDown:function(t){A.set(t.pointerId,t);var e=this.prepareEvent(t);c.down(e)},MSPointerMove:function(t){var e=this.prepareEvent(t);c.move(e)},MSPointerUp:function(t){var e=this.prepareEvent(t);c.up(e),this.cleanup(t.pointerId)},MSPointerOut:function(t){var e=this.prepareEvent(t);c.leaveOut(e)},MSPointerOver:function(t){var e=this.prepareEvent(t);c.enterOver(e)},MSPointerCancel:function(t){var e=this.prepareEvent(t);c.cancel(e),this.cleanup(t.pointerId)},MSLostPointerCapture:function(t){var e=c.makeEvent("lostpointercapture",t);c.dispatchEvent(e)},MSGotPointerCapture:function(t){var e=c.makeEvent("gotpointercapture",t);c.dispatchEvent(e)}};function x(t){if(!c.pointermap.has(t)){var e=new Error("InvalidPointerId");throw e.name="InvalidPointerId",e}}function j(t){if(!t.ownerDocument.contains(t)){var e=new Error("InvalidStateError");throw e.name="InvalidStateError",e}}function B(t){var e=c.pointermap.get(t);return 0!==e.buttons}return window.navigator.msPointerEnabled?(X=function(t){x(t),j(this),B(t)&&this.msSetPointerCapture(t)},k=function(t){x(t),this.msReleasePointerCapture(t)}):(X=function(t){x(t),j(this),B(t)&&c.setCapture(t,this)},k=function(t){x(t),c.releaseCapture(t,this)}),function(){if(P){y.forEach(function(t){String(t)===t?(w+=T(t)+g(t)+"\n",S&&(w+=b(t)+g(t)+"\n")):(w+=t.selectors.map(T)+g(t.rule)+"\n",S&&(w+=t.selectors.map(b)+g(t.rule)+"\n"))});var t=document.createElement("style");t.textContent=w,document.head.appendChild(t)}}(),function(){if(!window.PointerEvent){if(window.PointerEvent=n,window.navigator.msPointerEnabled){var t=window.navigator.msMaxTouchPoints;Object.defineProperty(window.navigator,"maxTouchPoints",{value:t,enumerable:!0}),c.registerSource("ms",K)}else c.registerSource("mouse",C),void 0!==window.ontouchstart&&c.registerSource("touch",L);c.register(document)}}(),window.Element&&!Element.prototype.setPointerCapture&&Object.defineProperties(Element.prototype,{setPointerCapture:{value:X},releasePointerCapture:{value:k}}),{dispatcher:c,Installer:E,PointerEvent:n,PointerMap:i,targetFinding:h}}()}}]);
//# sourceMappingURL=pointerEvents.1a82e1351ac1f8793275.bundle.js.map