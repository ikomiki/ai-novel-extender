// ==UserScript==
// @name        ai-novel-extender
// @description AIのべりすとの拡張
// @namespace   https://github.com
// @version     1.3.0
// @homepage    https://github.com/ikomiki
// @author      Takuya Matsuda
// @match       https://ai-novel.com/novel.php
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ai-novel.com
// @run-at      document-idle
// @downloadURL https:/github.com/ikomiki/ai-novel-extender/dist/bundle.js
// @updateURL   https:/github.com/ikomiki/ai-novel-extender/dist/bundle.js
// @grant       none
// ==/UserScript==
var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function f(){return l(" ")}function d(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function p(e){return""===e?null:+e}function g(e,t){e.value=null==t?"":t}function m(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}let b;function v(e){b=e}function y(){const e=function(){if(!b)throw new Error("Function called outside component initialization");return b}();return(t,n,{cancelable:r=!1}={})=>{const o=e.$$.callbacks[t];if(o){const a=function(e,t,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,n,r,t),o}(t,n,{cancelable:r});return o.slice().forEach((t=>{t.call(e,a)})),!a.defaultPrevented}return!0}}const $=[],k=[],w=[],x=[],C=Promise.resolve();let A=!1;function _(e){w.push(e)}const E=new Set;let S=0;function H(){const e=b;do{for(;S<$.length;){const e=$[S];S++,v(e),O(e.$$)}for(v(null),$.length=0,S=0;k.length;)k.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];E.has(t)||(E.add(t),t())}w.length=0}while($.length);for(;x.length;)x.pop()();A=!1,E.clear(),v(e)}function O(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(_)}}const R=new Set;let T;function z(e,t){e&&e.i&&(R.delete(e),e.i(t))}function P(e,t,n,r){if(e&&e.o){if(R.has(e))return;R.add(e),T.c.push((()=>{R.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function j(e){e&&e.c()}function N(e,n,a,i){const{fragment:c,on_mount:s,on_destroy:u,after_update:l}=e.$$;c&&c.m(n,a),i||_((()=>{const n=s.map(t).filter(o);u?u.push(...n):r(n),e.$$.on_mount=[]})),l.forEach(_)}function I(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&($.push(e),A||(A=!0,C.then(H)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function M(t,o,a,i,c,u,l,f=[-1]){const d=b;v(t);const h=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};l&&l(h.root);let p=!1;if(h.ctx=a?a(t,o.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),p&&W(t,e)),n})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(s)}else h.fragment&&h.fragment.c();o.intro&&z(t.$$.fragment),N(t,o.target,o.anchor,o.customElement),H()}v(d)}class B{$destroy(){I(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function G(t){let n,o,a,b,v,y,$,k,w;return{c(){n=u("span"),o=u("input"),a=f(),b=u("label"),v=l("リピート数"),y=u("input"),$=u("br"),h(o,"type","button"),h(o,"id","repeatbutton"),h(o,"class","btn-square"),o.value="リピート",m(o,"font-size","18px"),m(o,"color","rgb(255, 255, 255)"),m(o,"background-color","rgb(153, 95, 39)"),m(o,"border-color","rgb(123, 75, 19)"),m(o,"width","12em"),m(o,"margin-right","2vw"),m(o,"margin-top","3vw"),h(y,"id","repeat-count"),h(y,"type","number"),h(y,"min","2"),h(y,"max","10")},m(e,r){c(e,n,r),i(n,o),i(n,a),i(n,b),i(b,v),i(b,y),g(y,t[0]),i(n,$),k||(w=[d(o,"click",t[1]),d(y,"input",t[2])],k=!0)},p(e,[t]){1&t&&p(y.value)!==e[0]&&g(y,e[0])},i:e,o:e,d(e){e&&s(n),k=!1,r(w)}}}function q(e,t,n){let{value:r=5}=t;const o=y();return e.$$set=e=>{"value"in e&&n(0,r=e.value)},[r,function(){console.log("repeat handleClick",r),o("notify",{repeatCount:r})},function(){r=p(this.value),n(0,r)}]}class L extends B{constructor(e){super(),M(this,e,q,G,a,{value:0})}}function F(t){let n,o,a,b,v,y,$,k,w;return{c(){n=u("span"),o=u("input"),a=f(),b=u("label"),v=l("リトライ数"),y=u("input"),$=u("br"),h(o,"type","button"),h(o,"id","repeatbutton"),h(o,"class","btn-square"),o.value="リトライ",m(o,"font-size","18px"),m(o,"color","rgb(255, 255, 255)"),m(o,"background-color","rgb(153, 95, 39)"),m(o,"border-color","rgb(123, 75, 19)"),m(o,"width","12em"),m(o,"margin-right","2vw"),m(o,"margin-top","3vw"),h(y,"id","repeat-count"),h(y,"type","number"),h(y,"min","2"),h(y,"max","10")},m(e,r){c(e,n,r),i(n,o),i(n,a),i(n,b),i(b,v),i(b,y),g(y,t[0]),i(n,$),k||(w=[d(o,"click",t[1]),d(y,"input",t[2])],k=!0)},p(e,[t]){1&t&&p(y.value)!==e[0]&&g(y,e[0])},i:e,o:e,d(e){e&&s(n),k=!1,r(w)}}}function D(e,t,n){let{value:r=3}=t;const o=y();return e.$$set=e=>{"value"in e&&n(0,r=e.value)},[r,function(){console.log("retry handleClick",r),o("notify",{retryCount:r})},function(){r=p(this.value),n(0,r)}]}class U extends B{constructor(e){super(),M(this,e,D,F,a,{value:0})}}function Z(t){let n,r,o,a;return{c(){n=u("span"),r=u("input"),h(r,"type","button"),h(r,"class","btn-square"),m(r,"font-size","18px"),m(r,"color","rgb(255, 255, 255)"),m(r,"background-color","rgb(153, 95, 39)"),m(r,"border-color","rgb(123, 75, 19)"),m(r,"width","8em"),m(r,"margin-right","2vw"),m(r,"margin-top","3vw"),r.value=t[0]},m(e,s){c(e,n,s),i(n,r),o||(a=d(r,"click",t[1]),o=!0)},p(e,[t]){1&t&&(r.value=e[0])},i:e,o:e,d(e){e&&s(n),o=!1,a()}}}function J(e,t,n){let{caption:r}=t;const o=y();return e.$$set=e=>{"caption"in e&&n(0,r=e.caption)},[r,function(){o("notify",{})}]}class K extends B{constructor(e){super(),M(this,e,J,Z,a,{caption:0})}}class Q{constructor(){this.clickCount=0,this.maxCount=3,this.waitMs=3e3,this.changeHandler=()=>{}}buttonChecker(){const e=this.getcontinuation;if(e)if(this.clickCount++,this.changeHandler&&this.changeHandler(),this.maxCount>this.clickCount)if("getcontinuation"===this.mode)this.handler=setTimeout((()=>{e.click(),this.startWait()}),this.waitMs);else if("retry"===this.mode){const e=this.retry;this.handler=setTimeout((()=>{e.click(),this.startWait()}),this.waitMs)}else null===this.mode?this.handler&&(this.abort(),console.info("繰り返し処理は中断されました。")):console.warn(`wrong mode: ${this.mode}`);else this.abort(),console.log("リトライ完了");else setTimeout((()=>this.buttonChecker()),100);this.changeHandler&&this.changeHandler()}get getcontinuation(){return document.getElementById("getcontinuation")}get retry(){return document.getElementById("retry")}doRepeat(e){console.log("doRepeat",e),this.clickCount=0,this.maxCount=e,this.mode="getcontinuation",this.changeHandler&&this.changeHandler(),this.getcontinuation.click(),this.startWait()}doRetry(e,t){console.log("doRetry",e),this.clickCount=0,this.maxCount=e,this.mode="retry",this.changeHandler&&this.changeHandler(),t?this.retry.click():this.getcontinuation.click(),this.startWait()}startWait(){null!==this.handler&&(clearTimeout(this.handler),this.handler=null,this.changeHandler&&this.changeHandler());const e=()=>{"none"==document.getElementById("loading_anim").style.display?(console.log("執筆終了"),this.buttonChecker()):this.handler=setTimeout((()=>e()),1e3)};e()}abort(){this.mode=null,null!==this.handler&&(clearTimeout(this.handler),this.handler=null),this.changeHandler&&this.changeHandler()}setChangeHandler(e){this.changeHandler=e}}var V=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),X="-ms-",Y="-moz-",ee="-webkit-",te="comm",ne="rule",re="decl",oe="@keyframes",ae=Math.abs,ie=String.fromCharCode,ce=Object.assign;function se(e){return e.trim()}function ue(e,t,n){return e.replace(t,n)}function le(e,t){return e.indexOf(t)}function fe(e,t){return 0|e.charCodeAt(t)}function de(e,t,n){return e.slice(t,n)}function he(e){return e.length}function pe(e){return e.length}function ge(e,t){return t.push(e),e}var me=1,be=1,ve=0,ye=0,$e=0,ke="";function we(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:me,column:be,length:i,return:""}}function xe(e,t){return ce(we("",null,null,"",null,null,0),e,{length:-e.length},t)}function Ce(){return $e=ye>0?fe(ke,--ye):0,be--,10===$e&&(be=1,me--),$e}function Ae(){return $e=ye<ve?fe(ke,ye++):0,be++,10===$e&&(be=1,me++),$e}function _e(){return fe(ke,ye)}function Ee(){return ye}function Se(e,t){return de(ke,e,t)}function He(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oe(e){return me=be=1,ve=he(ke=e),ye=0,[]}function Re(e){return ke="",e}function Te(e){return se(Se(ye-1,je(91===e?e+2:40===e?e+1:e)))}function ze(e){for(;($e=_e())&&$e<33;)Ae();return He(e)>2||He($e)>3?"":" "}function Pe(e,t){for(;--t&&Ae()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return Se(e,Ee()+(t<6&&32==_e()&&32==Ae()))}function je(e){for(;Ae();)switch($e){case e:return ye;case 34:case 39:34!==e&&39!==e&&je($e);break;case 40:41===e&&je(e);break;case 92:Ae()}return ye}function Ne(e,t){for(;Ae()&&e+$e!==57&&(e+$e!==84||47!==_e()););return"/*"+Se(t,ye-1)+"*"+ie(47===e?e:Ae())}function Ie(e){for(;!He(_e());)Ae();return Se(e,ye)}function We(e){return Re(Me("",null,null,null,[""],e=Oe(e),0,[0],e))}function Me(e,t,n,r,o,a,i,c,s){for(var u=0,l=0,f=i,d=0,h=0,p=0,g=1,m=1,b=1,v=0,y="",$=o,k=a,w=r,x=y;m;)switch(p=v,v=Ae()){case 40:if(108!=p&&58==x.charCodeAt(f-1)){-1!=le(x+=ue(Te(v),"&","&\f"),"&\f")&&(b=-1);break}case 34:case 39:case 91:x+=Te(v);break;case 9:case 10:case 13:case 32:x+=ze(p);break;case 92:x+=Pe(Ee()-1,7);continue;case 47:switch(_e()){case 42:case 47:ge(Ge(Ne(Ae(),Ee()),t,n),s);break;default:x+="/"}break;case 123*g:c[u++]=he(x)*b;case 125*g:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+l:h>0&&he(x)-f&&ge(h>32?qe(x+";",r,n,f-1):qe(ue(x," ","")+";",r,n,f-2),s);break;case 59:x+=";";default:if(ge(w=Be(x,t,n,u,l,o,c,y,$=[],k=[],f),a),123===v)if(0===l)Me(x,t,w,w,$,a,f,c,k);else switch(d){case 100:case 109:case 115:Me(e,w,w,r&&ge(Be(e,w,w,0,0,o,c,y,o,$=[],f),k),o,k,f,c,r?$:k);break;default:Me(x,w,w,w,[""],k,0,c,k)}}u=l=h=0,g=b=1,y=x="",f=i;break;case 58:f=1+he(x),h=p;default:if(g<1)if(123==v)--g;else if(125==v&&0==g++&&125==Ce())continue;switch(x+=ie(v),v*g){case 38:b=l>0?1:(x+="\f",-1);break;case 44:c[u++]=(he(x)-1)*b,b=1;break;case 64:45===_e()&&(x+=Te(Ae())),d=_e(),l=f=he(y=x+=Ie(Ee())),v++;break;case 45:45===p&&2==he(x)&&(g=0)}}return a}function Be(e,t,n,r,o,a,i,c,s,u,l){for(var f=o-1,d=0===o?a:[""],h=pe(d),p=0,g=0,m=0;p<r;++p)for(var b=0,v=de(e,f+1,f=ae(g=i[p])),y=e;b<h;++b)(y=se(g>0?d[b]+" "+v:ue(v,/&\f/g,d[b])))&&(s[m++]=y);return we(e,t,n,0===o?ne:c,s,u,l)}function Ge(e,t,n){return we(e,t,n,te,ie($e),de(e,2,-2),0)}function qe(e,t,n,r){return we(e,t,n,re,de(e,0,r),de(e,r+1,-1),r)}function Le(e,t){switch(function(e,t){return(((t<<2^fe(e,0))<<2^fe(e,1))<<2^fe(e,2))<<2^fe(e,3)}(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Y+e+X+e+e;case 6828:case 4268:return ee+e+X+e+e;case 6165:return ee+e+X+"flex-"+e+e;case 5187:return ee+e+ue(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return ee+e+X+"flex-item-"+ue(e,/flex-|-self/,"")+e;case 4675:return ee+e+X+"flex-line-pack"+ue(e,/align-content|flex-|-self/,"")+e;case 5548:return ee+e+X+ue(e,"shrink","negative")+e;case 5292:return ee+e+X+ue(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+ue(e,"-grow","")+ee+e+X+ue(e,"grow","positive")+e;case 4554:return ee+ue(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return ue(ue(ue(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return ue(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return ue(ue(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4095:case 3583:case 4068:case 2532:return ue(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(he(e)-1-t>6)switch(fe(e,t+1)){case 109:if(45!==fe(e,t+4))break;case 102:return ue(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+Y+(108==fe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~le(e,"stretch")?Le(ue(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==fe(e,t+1))break;case 6444:switch(fe(e,he(e)-3-(~le(e,"!important")&&10))){case 107:return ue(e,":",":"+ee)+e;case 101:return ue(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(45===fe(e,14)?"inline-":"")+"box$3$1"+ee+"$2$3$1"+X+"$2box$3")+e}break;case 5936:switch(fe(e,t+11)){case 114:return ee+e+X+ue(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+X+ue(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+X+ue(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ee+e+X+e+e}return e}function Fe(e,t){for(var n="",r=pe(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function De(e,t,n,r){switch(e.type){case"@import":case re:return e.return=e.return||e.value;case te:return"";case oe:return e.return=e.value+"{"+Fe(e.children,r)+"}";case ne:e.value=e.props.join(",")}return he(n=Fe(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ue(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var Ze=function(e,t,n){for(var r=0,o=0;r=o,o=_e(),38===r&&12===o&&(t[n]=1),!He(o);)Ae();return Se(e,ye)},Je=function(e,t){return Re(function(e,t){var n=-1,r=44;do{switch(He(r)){case 0:38===r&&12===_e()&&(t[n]=1),e[n]+=Ze(ye-1,t,n);break;case 2:e[n]+=Te(r);break;case 4:if(44===r){e[++n]=58===_e()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=ie(r)}}while(r=Ae());return e}(Oe(e),t))},Ke=new WeakMap,Qe=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ke.get(n))&&!r){Ke.set(e,!0);for(var o=[],a=Je(t,o),i=n.props,c=0,s=0;c<a.length;c++)for(var u=0;u<i.length;u++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[u]):i[u]+" "+a[c]}}},Ve=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},Xe=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case re:e.return=Le(e.value,e.length);break;case oe:return Fe([xe(e,{value:ue(e.value,"@","@"+ee)})],r);case ne:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Fe([xe(e,{props:[ue(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return Fe([xe(e,{props:[ue(t,/:(plac\w+)/,":-webkit-input-$1")]}),xe(e,{props:[ue(t,/:(plac\w+)/,":-moz-$1")]}),xe(e,{props:[ue(t,/:(plac\w+)/,X+"input-$1")]})],r)}return""}))}}],Ye=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,o,a=e.stylisPlugins||Xe,i={},c=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)i[t[n]]=!0;c.push(e)}));var s,u,l=[De,(u=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],f=function(e){var t=pe(e);return function(n,r,o,a){for(var i="",c=0;c<t;c++)i+=e[c](n,r,o,a)||"";return i}}([Qe,Ve].concat(a,l));o=function(e,t,n,r){s=n,Fe(We(e?e+"{"+t.styles+"}":t.styles),f),r&&(d.inserted[t.name]=!0)};var d={key:t,sheet:new V({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:i,registered:{},insert:o};return d.sheet.hydrate(c),d};var et={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},tt=/[A-Z]|^ms/g,nt=/_EMO_([^_]+?)_([^]*?)_EMO_/g,rt=function(e){return 45===e.charCodeAt(1)},ot=function(e){return null!=e&&"boolean"!=typeof e},at=Ue((function(e){return rt(e)?e:e.replace(tt,"-$&").toLowerCase()})),it=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(nt,(function(e,t,n){return st={name:t,styles:n,next:st},t}))}return 1===et[e]||rt(e)||"number"!=typeof t||0===t?t:t+"px"};function ct(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return st={name:n.name,styles:n.styles,next:st},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)st={name:r.name,styles:r.styles,next:st},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ct(e,t,n[o])+";";else for(var a in n){var i=n[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?r+=a+"{"+t[i]+"}":ot(i)&&(r+=at(a)+":"+it(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=ct(e,t,i);switch(a){case"animation":case"animationName":r+=at(a)+":"+c+";";break;default:r+=a+"{"+c+"}"}}else for(var s=0;s<i.length;s++)ot(i[s])&&(r+=at(a)+":"+it(a,i[s])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=st,a=n(e);return st=o,ct(e,t,a)}}if(null==t)return n;var i=t[n];return void 0!==i?i:n}var st,ut=/label:\s*([^\s;\n{]+)\s*(;|$)/g,lt=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";st=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=ct(n,t,a)):o+=a[0];for(var i=1;i<e.length;i++)o+=ct(n,t,e[i]),r&&(o+=a[i]);ut.lastIndex=0;for(var c,s="";null!==(c=ut.exec(o));)s+="-"+c[1];var u=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(o)+s;return{name:u,styles:o,next:st}};function ft(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):r+=n+" "})),r}var dt=function(e,t,n){!function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)}(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+r:"",o,e.sheet,!0),o=o.next}while(void 0!==o)}};function ht(e,t,n){var r=[],o=ft(e,r,n);return r.length<2?n:o+t(r)}function pt(e,t,n){const r=e.slice();return r[8]=t[n],r}function gt(e){let t,n;return t=new K({props:{caption:`リトライ x${e[8]}`}}),t.$on("notify",(function(...t){return e[4](e[8],...t)})),{c(){j(t.$$.fragment)},m(e,r){N(t,e,r),n=!0},p(t,n){e=t},i(e){n||(z(t.$$.fragment,e),n=!0)},o(e){P(t.$$.fragment,e),n=!1},d(e){I(t,e)}}}function mt(e){let t,n,o,a,p,g,b,v,y,$,k,w,x,C,A,_,E,S,H,O,R;b=new K({props:{caption:"中止"}}),b.$on("notify",e[3]);let W=[2,3,5,7,10],M=[];for(let t=0;t<5;t+=1)M[t]=gt(pt(e,W,t));const B=e=>P(M[e],1,1,(()=>{M[e]=null}));return A=new U({}),A.$on("notify",e[6]),S=new L({}),S.$on("notify",e[7]),{c(){t=u("div"),n=u("div"),o=l("STATUS:"),a=l(e[0]),p=f(),g=u("div"),j(b.$$.fragment),v=f();for(let e=0;e<5;e+=1)M[e].c();y=f(),$=u("label"),k=l("追加リトライ\r\n            "),w=u("input"),x=f(),C=u("div"),j(A.$$.fragment),_=f(),E=u("div"),j(S.$$.fragment),h(w,"type","checkbox"),m(t,"margin-left","4em"),m(t,"margin-right","4em")},m(r,s){c(r,t,s),i(t,n),i(n,o),i(n,a),i(t,p),i(t,g),N(b,g,null),i(g,v);for(let e=0;e<5;e+=1)M[e].m(g,null);i(g,y),i(g,$),i($,k),i($,w),w.checked=e[1],i(t,x),i(t,C),N(A,C,null),i(t,_),i(t,E),N(S,E,null),H=!0,O||(R=d(w,"change",e[5]),O=!0)},p(e,[t]){if((!H||1&t)&&function(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}(a,e[0]),6&t){let n;for(W=[2,3,5,7,10],n=0;n<5;n+=1){const r=pt(e,W,n);M[n]?(M[n].p(r,t),z(M[n],1)):(M[n]=gt(r),M[n].c(),z(M[n],1),M[n].m(g,y))}for(T={r:0,c:[],p:T},n=5;n<5;n+=1)B(n);T.r||r(T.c),T=T.p}2&t&&(w.checked=e[1])},i(e){if(!H){z(b.$$.fragment,e);for(let e=0;e<5;e+=1)z(M[e]);z(A.$$.fragment,e),z(S.$$.fragment,e),H=!0}},o(e){P(b.$$.fragment,e),M=M.filter(Boolean);for(let e=0;e<5;e+=1)P(M[e]);P(A.$$.fragment,e),P(S.$$.fragment,e),H=!1},d(e){e&&s(t),I(b),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(M,e),I(A),I(S),O=!1,R()}}}function bt(e,t,n){const r=new Q;let o="",a=!1;r.setChangeHandler((()=>{r.mode?n(0,o=`[${r.mode}] ${r.clickCount} / ${r.maxCount}`):n(0,o="未処理")}));return[o,a,r,e=>r.abort(),(e,t)=>{r.doRetry(e,a),n(1,a=!1)},function(){a=this.checked,n(1,a)},e=>{r.doRetry(e.detail.retryCount,a),n(1,a=!1)},e=>r.doRepeat(e.detail.repeatCount)]}!function(e){var t=Ye(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var o=lt(n,t.registered,void 0);return dt(t,o,!1),t.key+"-"+o.name};t.sheet,ft.bind(null,t.registered),ht.bind(null,t.registered,n)}({key:"css"});return new class extends B{constructor(e){super(),M(this,e,bt,mt,a,{})}}({target:document.getElementById("options_usermod_history"),props:{}})}();