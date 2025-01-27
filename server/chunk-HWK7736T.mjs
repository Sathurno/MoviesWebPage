import './polyfills.server.mjs';
import{A as ne,B as ft,C as E,D as He,E as zt,F as Ut,G as V,H as je,a as Fe,b as Oe,g as ee,h as jt,i as De,j as Wt,k as Qt,l as Pe,m as mt,n as ze,o as Be,p as gt,q as he,r as Le,s as Ve,t as Ne,u as Dt,v as me,w as Re,x as Ae,y as Pt,z as ie}from"./chunk-IHHR6V4V.mjs";import{$a as q,$b as ht,Ab as $e,Ba as we,Ea as I,Fa as Z,Ga as wt,Gb as R,Ha as T,Hb as Xt,Ia as xt,J as L,Ja as u,K as Y,Kb as pe,Mb as ke,O as Kt,P as w,Sa as f,Ta as a,Ua as Zt,Ub as te,V as _t,Va as xe,W as X,Wa as B,X as tt,Xa as d,Y as st,Ya as h,Z as b,Za as y,Zb as lt,_ as _e,_a as U,_b as Ht,ab as A,ac as et,ba as ut,bb as at,bc as Tt,ca as Vt,cb as G,cc as Me,db as p,dc as W,ea as St,eb as pt,fa as Nt,fb as it,gb as k,gc as rt,hb as At,hc as Ee,ib as C,j as ue,ja as Yt,jb as S,k as Mt,kb as Ft,lb as nt,mb as ot,n as z,nb as H,ob as Ct,pb as J,qb as Ot,ra as Rt,rb as It,s as yt,sa as Ce,sb as Ie,tb as Te,u as x,ua as c,ub as dt,va as Et,za as Se}from"./chunk-D3XN5EGV.mjs";import{a as N,b as Lt}from"./chunk-X2SEQXRR.mjs";var We=(()=>{class e extends V{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),j=(()=>{class e{document=w(te);platformId=w(Yt);el=w(Nt);injector=w(_e);cd=w($e);renderer=w(Se);config=w(je);baseComponentStyle=w(We);baseStyle=w(V);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Pt("pc");_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,i="",n={}){return Ae(t,i,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Ee(this.platformId)){let{dt:i}=t;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles()}_loadStyles(){let t=()=>{Ut.isStyleNameLoaded("base")||(this.baseStyle.loadCSS(this.styleOptions),Ut.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!Ut.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Ut.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!zt.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:n,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,N({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,N({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,N({name:"global-variables"},this.styleOptions)),this.baseStyle.loadTheme(N({name:"global-style"},this.styleOptions),r),zt.setLoadedStyleName("common")}if(!zt.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,N({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(N({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),zt.setLoadedStyleName(this.componentStyle?.name)}if(!zt.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,N({name:"layer-order",first:!0},this.styleOptions)),zt.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:i}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(i,N({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Ut.clearLoadedStyleNames(),He.on("theme:change",t)}cx(t,i){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let i=this.componentStyle?.inlineStyles?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:N({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||e)};static \u0275dir=wt({type:e,inputs:{dt:"dt"},features:[H([We,V]),_t]})}return e})();var Qe=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,i){t&&i&&(t.classList?t.classList.add(i):t.className+=" "+i)}static addMultipleClasses(t,i){if(t&&i)if(t.classList){let n=i.trim().split(" ");for(let r=0;r<n.length;r++)t.classList.add(n[r])}else{let n=i.split(" ");for(let r=0;r<n.length;r++)t.className+=" "+n[r]}}static removeClass(t,i){t&&i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,i){t&&i&&[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,i){return t&&i?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(i){return i!==t})}static find(t,i){return Array.from(t.querySelectorAll(i))}static findSingle(t,i){return this.isElement(t)?t.querySelector(i):null}static index(t){let i=t.parentNode.childNodes,n=0;for(var r=0;r<i.length;r++){if(i[r]==t)return n;i[r].nodeType==1&&n++}return-1}static indexWithinGroup(t,i){let n=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<n.length;s++){if(n[s]==t)return r;n[s].attributes&&n[s].attributes[i]&&n[s].nodeType==1&&r++}return-1}static appendOverlay(t,i,n="self"){n!=="self"&&t&&i&&this.appendChild(t,i)}static alignOverlay(t,i,n="self",r=!0){t&&i&&(r&&(t.style.minWidth=`${e.getOuterWidth(i)}px`),n==="self"?this.relativePosition(t,i):this.absolutePosition(t,i))}static relativePosition(t,i,n=!0){let r=O=>{if(O)return getComputedStyle(O).getPropertyValue("position")==="relative"?O:r(O.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),l=i.offsetHeight,m=i.getBoundingClientRect(),v=this.getWindowScrollTop(),g=this.getWindowScrollLeft(),M=this.getViewport(),F=r(t)?.getBoundingClientRect()||{top:-1*v,left:-1*g},P,K;m.top+l+s.height>M.height?(P=m.top-F.top-s.height,t.style.transformOrigin="bottom",m.top+P<0&&(P=-1*m.top)):(P=l+m.top-F.top,t.style.transformOrigin="top");let _=m.left+s.width-M.width,$=m.left-F.left;s.width>M.width?K=(m.left-F.left)*-1:_>0?K=$-_:K=m.left-F.left,t.style.top=P+"px",t.style.left=K+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,i,n=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,l=r.width,m=i.offsetHeight,v=i.offsetWidth,g=i.getBoundingClientRect(),M=this.getWindowScrollTop(),D=this.getWindowScrollLeft(),F=this.getViewport(),P,K;g.top+m+s>F.height?(P=g.top+M-s,t.style.transformOrigin="bottom",P<0&&(P=M)):(P=m+g.top+M,t.style.transformOrigin="top"),g.left+l>F.width?K=Math.max(0,g.left+D+v-l):K=g.left+D,t.style.top=P+"px",t.style.left=K+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,i=[]){return t.parentNode===null?i:this.getParents(t.parentNode,i.concat([t.parentNode]))}static getScrollableParents(t){let i=[];if(t){let n=this.getParents(t),r=/(auto|scroll)/,s=l=>{let m=window.getComputedStyle(l,null);return r.test(m.getPropertyValue("overflow"))||r.test(m.getPropertyValue("overflowX"))||r.test(m.getPropertyValue("overflowY"))};for(let l of n){let m=l.nodeType===1&&l.dataset.scrollselectors;if(m){let v=m.split(",");for(let g of v){let M=this.findSingle(l,g);M&&s(M)&&i.push(M)}}l.nodeType!==9&&s(l)&&i.push(l)}}return i}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementDimensions(t){let i={};return t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",i}static scrollInView(t,i){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=n?parseFloat(n):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),l=s?parseFloat(s):0,m=t.getBoundingClientRect(),g=i.getBoundingClientRect().top+document.body.scrollTop-(m.top+document.body.scrollTop)-r-l,M=t.scrollTop,D=t.clientHeight,F=this.getOuterHeight(i);g<0?t.scrollTop=M+g:g+F>D&&(t.scrollTop=M+g-D+F)}static fadeIn(t,i){t.style.opacity=0;let n=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/i,t.style.opacity=r,n=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,i){var n=1,r=50,s=i,l=r/s;let m=setInterval(()=>{n=n-l,n<=0&&(n=0,clearInterval(m)),t.style.opacity=n},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,i){var n=Element.prototype,r=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,i)}static getOuterWidth(t,i){let n=t.offsetWidth;if(i){let r=getComputedStyle(t);n+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return n}static getHorizontalPadding(t){let i=getComputedStyle(t);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(t){let i=getComputedStyle(t);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(t){let i=t.offsetWidth,n=getComputedStyle(t);return i+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static width(t){let i=t.offsetWidth,n=getComputedStyle(t);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),i}static getInnerHeight(t){let i=t.offsetHeight,n=getComputedStyle(t);return i+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),i}static getOuterHeight(t,i){let n=t.offsetHeight;if(i){let r=getComputedStyle(t);n+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return n}static getHeight(t){let i=t.offsetHeight,n=getComputedStyle(t);return i-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),i}static getWidth(t){let i=t.offsetWidth,n=getComputedStyle(t);return i-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),i}static getViewport(){let t=window,i=document,n=i.documentElement,r=i.getElementsByTagName("body")[0],s=t.innerWidth||n.clientWidth||r.clientWidth,l=t.innerHeight||n.clientHeight||r.clientHeight;return{width:s,height:l}}static getOffset(t){var i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,i){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(i,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,i=t.indexOf("MSIE ");if(i>0)return!0;var n=t.indexOf("Trident/");if(n>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,i){if(this.isElement(i))i.appendChild(t);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(t);else throw"Cannot append "+i+" to "+t}static removeChild(t,i){if(this.isElement(i))i.removeChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+i}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let n=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(t,i,n){t[i].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,i){t&&document.activeElement!==t&&t.focus(i)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,i=""){let n=this.find(t,this.getFocusableSelectorString(i)),r=[];for(let s of n){let l=getComputedStyle(s);this.isVisible(s)&&l.display!="none"&&l.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,i=""){let n=this.findSingle(t,this.getFocusableSelectorString(i));if(n){let r=getComputedStyle(n);if(this.isVisible(n)&&r.display!="none"&&r.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,i=""){let n=this.getFocusableElements(t,i);return n.length>0?n[0]:null}static getLastFocusableElement(t,i){let n=this.getFocusableElements(t,i);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,i=!1){let n=e.getFocusableElements(t),r=0;if(n&&n.length>0){let s=n.indexOf(n[0].ownerDocument.activeElement);i?s==-1||s===0?r=n.length-1:r=s-1:s!=-1&&s!==n.length-1&&(r=s+1)}return n[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,i){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(l=>!!(l&&l.constructor&&l.call&&l.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,i){if(t){let n=t.getAttribute(i);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,i={},...n){if(t){let r=document.createElement(t);return this.setAttributes(r,i),r.append(...n),r}}static setAttribute(t,i="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(i,n)}static setAttributes(t,i={}){if(this.isElement(t)){let n=(r,s)=>{let l=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((m,v)=>{if(v!=null){let g=typeof v;if(g==="string"||g==="number")m.push(v);else if(g==="object"){let M=Array.isArray(v)?n(r,v):Object.entries(v).map(([D,F])=>r==="style"&&(F||F===0)?`${D.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${F}`:F?D:void 0);m=M.length?m.concat(M.filter(D=>!!D)):m}}return m},l)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let l=r.match(/^on(.+)/);l?t.addEventListener(l[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(n("class",s))].join(" ").trim():r==="style"?n("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,i=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return e})();var Ue=(()=>{class e extends j{autofocus=!1;_autofocus=!1;focused=!1;platformId=w(Yt);document=w(te);host=w(Nt);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){rt(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=Qe.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275dir=wt({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",R],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[xt,T]})}return e})();var fi=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,bi={root:({props:e,instance:o})=>["p-badge p-component",{"p-badge-circle":me(e.value)&&String(e.value).length===1,"p-badge-dot":Dt(e.value)&&!o.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},qe=(()=>{class e extends V{name="badge";theme=fi;classes=bi;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var ge=(()=>{class e extends j{styleClass=St();style=St();badgeSize=St();size=St();severity=St();value=St();badgeDisabled=St(!1,{transform:R});_componentStyle=w(qe);containerClass=pe(()=>{let t="p-badge p-component";return me(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),Dt(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,n){i&2&&(xe(n.style()),B(n.containerClass()),Zt("display",n.badgeDisabled()&&"none"))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[H([qe]),T],decls:1,vars:1,template:function(i,n){i&1&&nt(0),i&2&&ot(n.value())},dependencies:[W,E],encapsulation:2,changeDetection:0})}return e})(),Ge=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[ge,E,E]})}return e})();var yi=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,_i=(()=>{class e extends V{name="baseicon";inlineStyles=yi;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Ci=["*"],bt=(()=>{class e extends j{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=Dt(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",R],styleClass:"styleClass"},features:[H([_i]),xt,T],ngContentSelectors:Ci,decls:1,vars:0,template:function(i,n){i&1&&(pt(),it(0))},encapsulation:2,changeDetection:0})}return e})();var Je=(()=>{class e extends bt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronDownIcon"]],features:[T],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(i,n){i&1&&(st(),d(0,"svg",0),y(1,"path",1),h()),i&2&&(B(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var Ke=(()=>{class e extends bt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronLeftIcon"]],features:[T],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(st(),d(0,"svg",0),y(1,"path",1),h()),i&2&&(B(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var Ye=(()=>{class e extends bt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronRightIcon"]],features:[T],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(st(),d(0,"svg",0),y(1,"path",1),h()),i&2&&(B(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var Ze=(()=>{class e extends bt{static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["ChevronUpIcon"]],features:[T],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M12.2097 10.4113C12.1057 10.4118 12.0027 10.3915 11.9067 10.3516C11.8107 10.3118 11.7237 10.2532 11.6506 10.1792L6.93602 5.46461L2.22139 10.1476C2.07272 10.244 1.89599 10.2877 1.71953 10.2717C1.54307 10.2556 1.3771 10.1808 1.24822 10.0593C1.11933 9.93766 1.035 9.77633 1.00874 9.6011C0.982477 9.42587 1.0158 9.2469 1.10338 9.09287L6.37701 3.81923C6.52533 3.6711 6.72639 3.58789 6.93602 3.58789C7.14565 3.58789 7.3467 3.6711 7.49502 3.81923L12.7687 9.09287C12.9168 9.24119 13 9.44225 13 9.65187C13 9.8615 12.9168 10.0626 12.7687 10.2109C12.616 10.3487 12.4151 10.4207 12.2097 10.4113Z","fill","currentColor"]],template:function(i,n){i&1&&(st(),d(0,"svg",0),y(1,"path",1),h()),i&2&&(B(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var oe=(()=>{class e extends bt{pathId;ngOnInit(){this.pathId="url(#"+Pt()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["SpinnerIcon"]],features:[T],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(st(),d(0,"svg",0)(1,"g"),y(2,"path",1),h(),d(3,"defs")(4,"clipPath",2),y(5,"rect",3),h()()()),i&2&&(B(n.getClassNames()),f("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),c(),f("clip-path",n.pathId),c(3),a("id",n.pathId))},encapsulation:2})}return e})();var Si=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,wi={root:"p-ink"},Xe=(()=>{class e extends V{name="ripple";theme=Si;classes=wi;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var re=(()=>{class e extends j{zone=w(Vt);_componentStyle=w(Xe);animationListener;mouseDownListener;timeout;constructor(){super(),ke(()=>{rt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(jt(i,"p-ink-active"),!mt(i)&&!gt(i)){let l=Math.max(De(this.el.nativeElement),Be(this.el.nativeElement));i.style.height=l+"px",i.style.width=l+"px"}let n=ze(this.el.nativeElement),r=t.pageX-n.left+this.document.body.scrollTop-gt(i)/2,s=t.pageY-n.top+this.document.body.scrollLeft-mt(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),ee(i,"p-ink-active"),this.timeout=setTimeout(()=>{let l=this.getInk();l&&jt(l,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&jt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),jt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Ve(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=wt({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[H([Xe]),T]})}return e})();var xi=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Ii={root:({instance:e,props:o})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!o.label&&!o.badge,"p-button-vertical":(o.iconPos==="top"||o.iconPos==="bottom")&&o.label,"p-button-loading":o.loading,"p-button-link":o.link,[`p-button-${o.severity}`]:o.severity,"p-button-raised":o.raised,"p-button-rounded":o.rounded,"p-button-text":o.text,"p-button-outlined":o.outlined,"p-button-sm":o.size==="small","p-button-lg":o.size==="large","p-button-plain":o.plain,"p-button-fluid":o.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},ti=(()=>{class e extends V{name="button";theme=xi;classes=Ii;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Ti=["content"],$i=["loading"],ki=["icon"],Mi=["*"],ei=e=>({class:e});function Ei(e,o){e&1&&A(0)}function Fi(e,o){if(e&1&&y(0,"span",8),e&2){let t=p(3);a("ngClass",t.iconClass()),f("aria-hidden",!0)("data-pc-section","loadingicon")}}function Oi(e,o){if(e&1&&y(0,"SpinnerIcon",9),e&2){let t=p(3);a("styleClass",t.spinnerIconClass())("spin",!0),f("aria-hidden",!0)("data-pc-section","loadingicon")}}function Di(e,o){if(e&1&&(U(0),u(1,Fi,1,3,"span",6)(2,Oi,1,4,"SpinnerIcon",7),q()),e&2){let t=p(2);c(),a("ngIf",t.loadingIcon),c(),a("ngIf",!t.loadingIcon)}}function Pi(e,o){}function zi(e,o){if(e&1&&u(0,Pi,0,0,"ng-template",10),e&2){let t=p(2);a("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function Bi(e,o){if(e&1&&(U(0),u(1,Di,3,2,"ng-container",2)(2,zi,1,1,null,5),q()),e&2){let t=p();c(),a("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),c(),a("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",J(3,ei,t.iconClass()))}}function Li(e,o){if(e&1&&y(0,"span",8),e&2){let t=p(2);B(t.icon),a("ngClass",t.iconClass()),f("data-pc-section","icon")}}function Vi(e,o){}function Ni(e,o){if(e&1&&u(0,Vi,0,0,"ng-template",10),e&2){let t=p(2);a("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function Ri(e,o){if(e&1&&(U(0),u(1,Li,1,4,"span",11)(2,Ni,1,1,null,5),q()),e&2){let t=p();c(),a("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),c(),a("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",J(3,ei,t.iconClass()))}}function Ai(e,o){if(e&1&&(d(0,"span",12),nt(1),h()),e&2){let t=p();f("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),c(),ot(t.label)}}function Hi(e,o){if(e&1&&y(0,"p-badge",13),e&2){let t=p();a("value",t.badge)("severity",t.badgeSeverity)}}var fe=(()=>{class e extends j{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new ut;onFocus=new ut;onBlur=new ut;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return Dt(this.fluid)?!!i:this.fluid}_componentStyle=w(ti);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let n=i.currentValue;for(let r in n)this[r]=n[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[i])=>t+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-button"]],contentQueries:function(i,n,r){if(i&1&&(k(r,Ti,5),k(r,$i,5),k(r,ki,5),k(r,ft,4)),i&2){let s;C(s=S())&&(n.contentTemplate=s.first),C(s=S())&&(n.loadingIconTemplate=s.first),C(s=S())&&(n.iconTemplate=s.first),C(s=S())&&(n.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",R],loading:[2,"loading","loading",R],loadingIcon:"loadingIcon",raised:[2,"raised","raised",R],rounded:[2,"rounded","rounded",R],text:[2,"text","text",R],plain:[2,"plain","plain",R],severity:"severity",outlined:[2,"outlined","outlined",R],link:[2,"link","link",R],tabindex:[2,"tabindex","tabindex",Xt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",R],fluid:[2,"fluid","fluid",R],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[H([ti]),xt,T,_t],ngContentSelectors:Mi,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,n){i&1&&(pt(),d(0,"button",0),G("click",function(s){return n.onClick.emit(s)})("focus",function(s){return n.onFocus.emit(s)})("blur",function(s){return n.onBlur.emit(s)}),it(1),u(2,Ei,1,0,"ng-container",1)(3,Bi,3,5,"ng-container",2)(4,Ri,3,5,"ng-container",2)(5,Ai,2,3,"span",3)(6,Hi,1,2,"p-badge",4),h()),i&2&&(a("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),f("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),c(2),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),c(),a("ngIf",n.loading),c(),a("ngIf",!n.loading),c(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),c(),a("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[W,lt,ht,Tt,et,re,Ue,oe,Ge,ge,E],encapsulation:2,changeDetection:0})}return e})(),qt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[W,fe,E,E]})}return e})();var Wi=({dt:e})=>`
.p-carousel {
    display: flex;
    flex-direction: column;
}

.p-carousel-content-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.p-carousel-content {
    display: flex;
    flex-direction: row;
    gap: ${e("carousel.content.gap")};
}

.p-carousel-content:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-viewport {
    overflow: hidden;
    width: 100%;
}

.p-carousel-item-list {
    display: flex;
    flex-direction: row;
}

.p-carousel-item-list:dir(rtl) {
    flex-direction: row-reverse;
}

.p-carousel-prev-button,
.p-carousel-next-button {
    align-self: center;
    flex-shrink: 0;
}

.p-carousel-indicator-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: ${e("carousel.indicator.list.padding")};
    gap: ${e("carousel.indicator.list.gap")};
    margin: 0;
    list-style: none;
}

.p-carousel-indicator-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${e("carousel.indicator.background")};
    width: ${e("carousel.indicator.width")};
    height: ${e("carousel.indicator.height")};
    border: 0 none;
    transition: background ${e("carousel.transition.duration")}, color ${e("carousel.transition.duration")}, outline-color ${e("carousel.transition.duration")}, box-shadow ${e("carousel.transition.duration")};
    outline-color: transparent;
    border-radius: ${e("carousel.indicator.border.radius")};
    padding: 0;
    margin: 0;
    user-select: none;
    cursor: pointer;
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: ${e("carousel.indicator.focus.ring.shadow")};
    outline: ${e("carousel.indicator.focus.ring.width")} ${e("carousel.indicator.focus.ring.style")} ${e("carousel.indicator.focus.ring.color")};
    outline-offset: ${e("carousel.indicator.focus.ring.offset")};
}

.p-carousel-indicator-button:hover {
    background: ${e("carousel.indicator.hover.background")};
}

.p-carousel-indicator-active .p-carousel-indicator-button {
    background: ${e("carousel.indicator.active.background")};
}

.p-carousel-vertical .p-carousel-content {
    flex-direction: column;
}

.p-carousel-vertical .p-carousel-item-list {
    flex-direction: column;
    height: 100%;
}

.p-items-hidden .p-carousel-item {
    visibility: hidden;
}

.p-items-hidden .p-carousel-item.p-carousel-item-active {
    visibility: visible;
}
`,Qi={root:({instance:e})=>["p-carousel p-component",{"p-carousel-vertical":e.isVertical(),"p-carousel-horizontal":!e.isVertical()}],header:"p-carousel-header",contentContainer:"p-carousel-content-container",content:"p-carousel-content",pcPrevButton:({instance:e})=>["p-carousel-prev-button",{"p-disabled":e.backwardIsDisabled}],viewport:"p-carousel-viewport",itemList:"p-carousel-item-list",itemClone:({index:e,value:o,totalShiftedItems:t,d_numVisible:i})=>["p-carousel-item p-carousel-item-clone",{"p-carousel-item-active":t*-1===o.length+i,"p-carousel-item-start":e===0,"p-carousel-item-end":o.slice(-1*i).length-1===e}],item:({instance:e,index:o})=>["p-carousel-item",{"p-carousel-item-active":e.firstIndex()<=o&&e.lastIndex()>=o,"p-carousel-item-start":e.firstIndex()===o,"p-carousel-item-end":e.lastIndex()===o}],pcNextButton:({instance:e})=>["p-carousel-next-button",{"p-disabled":e.forwardIsDisabled}],indicatorList:"p-carousel-indicator-list",indicator:({instance:e,index:o})=>["p-carousel-indicator",{"p-carousel-indicator-active":e.d_page===o}],indicatorButton:"p-carousel-indicator-button",footer:"p-carousel-footer"},ii=(()=>{class e extends V{name="carousel";theme=Wi;classes=Qi;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Ui=["item"],qi=["header"],Gi=["footer"],Ji=["previousicon"],Ki=["nexticon"],Yi=["itemsContainer"],Zi=["indicatorContent"],Xi=[[["p-header"]],[["p-footer"]]],tn=["p-header","p-footer"],en=(e,o)=>({"p-carousel p-component":!0,"p-carousel-vertical":e,"p-carousel-horizontal":o}),nn=e=>({height:e}),on=e=>({"p-carousel-prev-button":!0,"p-disabled":e}),ni=(e,o,t)=>({"p-carousel-item p-carousel-item-clone":!0,"p-carousel-item-active":e,"p-carousel-item-start":o,"p-carousel-item-end":t}),be=e=>({$implicit:e}),rn=(e,o,t)=>({"p-carousel-item":!0,"p-carousel-item-active":e,"p-carousel-item-start":o,"p-carousel-item-end":t}),sn=e=>({"p-carousel-next-button":!0,"p-disabled":e}),an=e=>({"p-carousel-indicator":!0,"p-carousel-indicator-active":e});function ln(e,o){e&1&&A(0)}function cn(e,o){if(e&1&&(d(0,"div",14),it(1),u(2,ln,1,0,"ng-container",15),h()),e&2){let t=p();c(2),a("ngTemplateOutlet",t.headerTemplate)}}function dn(e,o){e&1&&y(0,"ChevronLeftIcon",20),e&2&&a("styleClass","carousel-prev-icon")}function un(e,o){e&1&&y(0,"ChevronUpIcon",20),e&2&&a("styleClass","carousel-prev-icon")}function pn(e,o){if(e&1&&(U(0),u(1,dn,1,1,"ChevronLeftIcon",19)(2,un,1,1,"ChevronUpIcon",19),q()),e&2){let t=p(3);c(),a("ngIf",!t.isVertical()),c(),a("ngIf",t.isVertical())}}function hn(e,o){}function mn(e,o){e&1&&u(0,hn,0,0,"ng-template")}function gn(e,o){if(e&1&&(d(0,"span",21),u(1,mn,1,0,null,15),h()),e&2){let t=p(3);c(),a("ngTemplateOutlet",t.previousIconTemplate||t._previousIconTemplate)}}function fn(e,o){if(e&1&&u(0,pn,3,2,"ng-container",17)(1,gn,2,1,"span",18),e&2){let t=p(2);a("ngIf",!t.previousIconTemplate&&!t._previousIconTemplate&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon)),c(),a("ngIf",(t.previousIconTemplate||t._previousIconTemplate)&&!(t.prevButtonProps!=null&&t.prevButtonProps.icon))}}function bn(e,o){if(e&1){let t=at();d(0,"p-button",16),G("click",function(n){X(t);let r=p();return tt(r.navBackward(n))}),u(1,fn,2,2,"ng-template",null,1,dt),h()}if(e&2){let t=p();a("ngClass",J(5,on,t.isBackwardNavDisabled()))("disabled",t.isBackwardNavDisabled())("text",!0)("buttonProps",t.prevButtonProps),f("aria-label",t.ariaPrevButtonLabel())}}function vn(e,o){e&1&&A(0)}function yn(e,o){if(e&1&&(d(0,"div",5),u(1,vn,1,0,"ng-container",22),h()),e&2){let t=o.$implicit,i=o.index,n=p();a("ngClass",It(6,ni,n.totalShiftedItems*-1===n.value.length,i===0,n.clonedItemsForStarting.length-1===i)),f("aria-hidden",n.totalShiftedItems*-1!==n.value.length)("aria-label",n.ariaSlideNumber(i))("aria-roledescription",n.ariaSlideLabel()),c(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",J(10,be,t))}}function _n(e,o){e&1&&A(0)}function Cn(e,o){if(e&1&&(d(0,"div",5),u(1,_n,1,0,"ng-container",22),h()),e&2){let t=o.$implicit,i=o.index,n=p();a("ngClass",It(6,rn,n.firstIndex()<=i&&n.lastIndex()>=i,n.firstIndex()===i,n.lastIndex()===i)),f("aria-hidden",n.totalShiftedItems*-1!==n.value.length)("aria-label",n.ariaSlideNumber(i))("aria-roledescription",n.ariaSlideLabel()),c(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",J(10,be,t))}}function Sn(e,o){e&1&&A(0)}function wn(e,o){if(e&1&&(d(0,"div",5),u(1,Sn,1,0,"ng-container",22),h()),e&2){let t=o.$implicit,i=o.index,n=p();a("ngClass",It(3,ni,n.totalShiftedItems*-1===n.numVisible,i===0,n.clonedItemsForFinishing.length-1===i)),c(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",J(7,be,t))}}function xn(e,o){e&1&&y(0,"ChevronRightIcon",20),e&2&&a("styleClass","carousel-prev-icon")}function In(e,o){e&1&&y(0,"ChevronDownIcon",20),e&2&&a("styleClass","carousel-prev-icon")}function Tn(e,o){if(e&1&&(U(0),u(1,xn,1,1,"ChevronRightIcon",19)(2,In,1,1,"ChevronDownIcon",19),q()),e&2){let t=p(2);c(),a("ngIf",!t.isVertical()),c(),a("ngIf",t.isVertical())}}function $n(e,o){}function kn(e,o){e&1&&u(0,$n,0,0,"ng-template")}function Mn(e,o){if(e&1&&(d(0,"span",21),u(1,kn,1,0,null,15),h()),e&2){let t=p(2);c(),a("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function En(e,o){if(e&1){let t=at();d(0,"p-button",23),G("click",function(n){X(t);let r=p();return tt(r.navForward(n))}),u(1,Tn,3,2,"ng-container",17)(2,Mn,2,1,"span",18),h()}if(e&2){let t=p();a("ngClass",J(7,sn,t.isForwardNavDisabled()))("disabled",t.isForwardNavDisabled())("buttonProps",t.nextButtonProps)("text",!0),f("aria-label",t.ariaNextButtonLabel()),c(),a("ngIf",!t.nextIconTemplate&&!t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon)),c(),a("ngIf",t.nextIconTemplate||t._nextIconTemplate&&!(t.nextButtonProps!=null&&t.nextButtonProps.icon))}}function Fn(e,o){if(e&1){let t=at();d(0,"li",5)(1,"button",25),G("click",function(n){let r=X(t).index,s=p(2);return tt(s.onDotClick(n,r))}),h()()}if(e&2){let t=o.index,i=p(2);a("ngClass",J(9,an,i._page===t)),f("data-pc-section","indicator"),c(),B(i.indicatorStyleClass),a("ngClass","p-carousel-indicator-button")("ngStyle",i.indicatorStyle)("tabindex",i._page===t?0:-1),f("aria-label",i.ariaPageLabel(t+1))("aria-current",i._page===t?"page":void 0)}}function On(e,o){if(e&1){let t=at();d(0,"ul",24,2),G("keydown",function(n){X(t);let r=p();return tt(r.onIndicatorKeydown(n))}),u(2,Fn,2,11,"li",10),h()}if(e&2){let t=p();B(t.indicatorsContentClass),a("ngClass","p-carousel-indicator-list")("ngStyle",t.indicatorsContentStyle),c(2),a("ngForOf",t.totalDotsArray())}}function Dn(e,o){e&1&&A(0)}function Pn(e,o){if(e&1&&(d(0,"div",26),it(1,1),u(2,Dn,1,0,"ng-container",15),h()),e&2){let t=p();c(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Gt=(()=>{class e extends j{el;zone;get page(){return this._page}set page(t){this.isCreated&&t!==this._page&&(this.autoplayInterval&&this.stopAutoplay(),t>this._page&&t<=this.totalDots()-1?this.step(-1,t):t<this._page&&this.step(1,t)),this._page=t}get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t}get numScroll(){return this._numVisible}set numScroll(t){this._numScroll=t}responsiveOptions;orientation="horizontal";verticalViewPortHeight="300px";contentClass="";indicatorsContentClass="";indicatorsContentStyle;indicatorStyleClass="";indicatorStyle;get value(){return this._value}set value(t){this._value=t}circular=!1;showIndicators=!0;showNavigators=!0;autoplayInterval=0;style;styleClass;prevButtonProps={severity:"secondary",text:!0,rounded:!0};nextButtonProps={severity:"secondary",text:!0,rounded:!0};onPage=new ut;itemsContainer;indicatorContent;headerFacet;footerFacet;_numVisible=1;_numScroll=1;_oldNumScroll=0;prevState={numScroll:0,numVisible:0,value:[]};defaultNumScroll=1;defaultNumVisible=1;_page=0;_value;carouselStyle;id;totalShiftedItems;isRemainingItemsAdded=!1;animationTimeout;translateTimeout;remainingItems=0;_items;startPos;documentResizeListener;clonedItemsForStarting;clonedItemsForFinishing;allowAutoplay;interval;isCreated;swipeThreshold=20;itemTemplate;headerTemplate;footerTemplate;previousIconTemplate;nextIconTemplate;_itemTemplate;_headerTemplate;_footerTemplate;_previousIconTemplate;_nextIconTemplate;window;_componentStyle=w(ii);constructor(t,i){super(),this.el=t,this.zone=i,this.totalShiftedItems=this.page*this.numScroll*-1,this.window=this.document.defaultView}ngOnChanges(t){rt(this.platformId)&&(t.value&&this.circular&&this._value&&this.setCloneItems(),this.isCreated&&(t.numVisible&&(this.responsiveOptions&&(this.defaultNumVisible=this.numVisible),this.isCircular()&&this.setCloneItems(),this.createStyle(),this.calculatePosition()),t.numScroll&&this.responsiveOptions&&(this.defaultNumScroll=this.numScroll))),this.cd.markForCheck()}templates;ngAfterContentInit(){this.id=Pt("pn_id_"),rt(this.platformId)&&(this.allowAutoplay=!!this.autoplayInterval,this.circular&&this.setCloneItems(),this.responsiveOptions&&(this.defaultNumScroll=this._numScroll,this.defaultNumVisible=this._numVisible),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()),this.templates?.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"previousicon":this._previousIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}}),this.cd.detectChanges()}ngAfterContentChecked(){if(rt(this.platformId)){let t=this.isCircular(),i=this.totalShiftedItems;if(this.value&&this.itemsContainer&&(this.prevState.numScroll!==this._numScroll||this.prevState.numVisible!==this._numVisible||this.prevState.value.length!==this.value.length)){this.autoplayInterval&&this.stopAutoplay(!1),this.remainingItems=(this.value.length-this._numVisible)%this._numScroll;let n=this._page;this.totalDots()!==0&&n>=this.totalDots()&&(n=this.totalDots()-1,this._page=n,this.onPage.emit({page:this.page})),i=n*this._numScroll*-1,t&&(i-=this._numVisible),n===this.totalDots()-1&&this.remainingItems>0?(i+=-1*this.remainingItems+this._numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,i!==this.totalShiftedItems&&(this.totalShiftedItems=i),this._oldNumScroll=this._numScroll,this.prevState.numScroll=this._numScroll,this.prevState.numVisible=this._numVisible,this.prevState.value=[...this._value],this.totalDots()>0&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this._numVisible)}%, 0)`:`translate3d(${i*(100/this._numVisible)}%, 0, 0)`),this.isCreated=!0,this.autoplayInterval&&this.isAutoplay()&&this.startAutoplay()}t&&(this.page===0?i=-1*this._numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i))}}createStyle(){this.carouselStyle||(this.carouselStyle=this.renderer.createElement("style"),this.carouselStyle.type="text/css",Ne(this.carouselStyle,"nonce",this.config?.csp()?.nonce),this.renderer.appendChild(this.document.head,this.carouselStyle));let t=`
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100/this.numVisible}%
			}
        `;if(this.responsiveOptions){this.responsiveOptions.sort((i,n)=>{let r=i.breakpoint,s=n.breakpoint,l=null;return r==null&&s!=null?l=-1:r!=null&&s==null?l=1:r==null&&s==null?l=0:typeof r=="string"&&typeof s=="string"?l=r.localeCompare(s,void 0,{numeric:!0}):l=r<s?-1:r>s?1:0,-1*l});for(let i=0;i<this.responsiveOptions.length;i++){let n=this.responsiveOptions[i];t+=`
                    @media screen and (max-width: ${n.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/n.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=t}calculatePosition(){if(this.responsiveOptions){let t={numVisible:this.defaultNumVisible,numScroll:this.defaultNumScroll};if(typeof window<"u"){let i=window.innerWidth;for(let n=0;n<this.responsiveOptions.length;n++){let r=this.responsiveOptions[n];parseInt(r.breakpoint,10)>=i&&(t=r)}}if(this._numScroll!==t.numScroll){let i=this._page;i=Math.floor(i*this._numScroll/t.numScroll);let n=t.numScroll*this.page*-1;this.isCircular()&&(n-=t.numVisible),this.totalShiftedItems=n,this._numScroll=t.numScroll,this._page=i,this.onPage.emit({page:this.page})}this._numVisible!==t.numVisible&&(this._numVisible=t.numVisible,this.setCloneItems()),this.cd.markForCheck()}}setCloneItems(){this.clonedItemsForStarting=[],this.clonedItemsForFinishing=[],this.isCircular()&&(this.clonedItemsForStarting.push(...this.value.slice(-1*this._numVisible)),this.clonedItemsForFinishing.push(...this.value.slice(0,this._numVisible)))}firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.numVisible):this.totalShiftedItems*-1}lastIndex(){return this.firstIndex()+this.numVisible-1}totalDots(){return this.value?.length?Math.ceil((this.value.length-this._numVisible)/this._numScroll)+1:0}totalDotsArray(){let t=this.totalDots();return t<=0?[]:Array(t).fill(0)}isVertical(){return this.orientation==="vertical"}isCircular(){return this.circular&&this.value&&this.value.length>=this.numVisible}isAutoplay(){return this.autoplayInterval&&this.allowAutoplay}isForwardNavDisabled(){return this.isEmpty()||this._page>=this.totalDots()-1&&!this.isCircular()}isBackwardNavDisabled(){return this.isEmpty()||this._page<=0&&!this.isCircular()}isEmpty(){return!this.value||this.value.length===0}navForward(t,i){(this.isCircular()||this._page<this.totalDots()-1)&&this.step(-1,i),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}navBackward(t,i){(this.isCircular()||this._page!==0)&&this.step(1,i),this.autoplayInterval&&this.stopAutoplay(),t&&t.cancelable&&t.preventDefault()}onDotClick(t,i){let n=this._page;this.autoplayInterval&&this.stopAutoplay(),i>n?this.navForward(t,i):i<n&&this.navBackward(t,i)}onIndicatorKeydown(t){switch(t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break}}onRightKey(){let t=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,i+1===t.length?t.length-1:i+1)}onLeftKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)}onHomeKey(){let t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)}onEndKey(){let t=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]r')],i=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(i,t.length-1)}onTabKey(){let t=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],i=t.findIndex(s=>Pe(s,"data-p-highlight")===!0),n=Qt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=t.findIndex(s=>s===n.parentElement);t[r].children[0].tabIndex="-1",t[i].children[0].tabIndex="0"}findFocusedIndicatorIndex(){let t=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')],i=Qt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"] > button[tabindex="0"]');return t.findIndex(n=>n===i.parentElement)}changedFocusedIndicator(t,i){let n=[...Wt(this.indicatorContent.nativeElement,'[data-pc-section="indicator"]')];n[t].children[0].tabIndex="-1",n[i].children[0].tabIndex="0",n[i].children[0].focus()}step(t,i){let n=this.totalShiftedItems,r=this.isCircular();if(i!=null)n=this._numScroll*i*-1,r&&(n-=this._numVisible),this.isRemainingItemsAdded=!1;else{n+=this._numScroll*t,this.isRemainingItemsAdded&&(n+=this.remainingItems-this._numScroll*t,this.isRemainingItemsAdded=!1);let s=r?n+this._numVisible:n;i=Math.abs(Math.floor(s/this._numScroll))}r&&this.page===this.totalDots()-1&&t===-1?(n=-1*(this.value.length+this._numVisible),i=0):r&&this.page===0&&t===1?(n=0,i=this.totalDots()-1):i===this.totalDots()-1&&this.remainingItems>0&&(n+=this.remainingItems*-1-this._numScroll*t,this.isRemainingItemsAdded=!0),this.itemsContainer&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${n*(100/this._numVisible)}%, 0)`:`translate3d(${n*(100/this._numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n,this._page=i,this.onPage.emit({page:this.page}),this.cd.markForCheck()}startAutoplay(){this.interval=setInterval(()=>{this.totalDots()>0&&(this.page===this.totalDots()-1?this.step(-1,0):this.step(-1,this.page+1))},this.autoplayInterval),this.allowAutoplay=!0,this.cd.markForCheck()}stopAutoplay(t=!0){this.interval&&(clearInterval(this.interval),this.interval=void 0,t&&(this.allowAutoplay=!1)),this.cd.markForCheck()}isPlaying(){return!!this.interval}onTransitionEnd(){this.itemsContainer&&(this.itemsContainer.nativeElement.style.transition="",(this.page===0||this.page===this.totalDots()-1)&&this.isCircular()&&(this.itemsContainer.nativeElement.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this._numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this._numVisible)}%, 0, 0)`))}onTouchStart(t){let i=t.changedTouches[0];this.startPos={x:i.pageX,y:i.pageY}}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchEnd(t){let i=t.changedTouches[0];this.isVertical()?this.changePageOnTouch(t,i.pageY-this.startPos.y):this.changePageOnTouch(t,i.pageX-this.startPos.x)}changePageOnTouch(t,i){Math.abs(i)>this.swipeThreshold&&(i<0?this.navForward(t):this.navBackward(t))}ariaPrevButtonLabel(){return this.config.translation.aria?this.config.translation.aria.prevPageLabel:void 0}ariaSlideLabel(){return this.config.translation.aria?this.config.translation.aria.slide:void 0}ariaNextButtonLabel(){return this.config.translation.aria?this.config.translation.aria.nextPageLabel:void 0}ariaSlideNumber(t){return this.config.translation.aria?this.config.translation.aria.slideNumber.replace(/{slideNumber}/g,t):void 0}ariaPageLabel(t){return this.config.translation.aria?this.config.translation.aria.pageLabel.replace(/{page}/g,t):void 0}bindDocumentListeners(){rt(this.platformId)&&(this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",t=>{this.calculatePosition()})))}unbindDocumentListeners(){rt(this.platformId)&&this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()}static \u0275fac=function(i){return new(i||e)(Et(Nt),Et(Vt))};static \u0275cmp=I({type:e,selectors:[["p-carousel"]],contentQueries:function(i,n,r){if(i&1&&(k(r,ie,5),k(r,ne,5),k(r,Ui,4),k(r,qi,4),k(r,Gi,4),k(r,Ji,4),k(r,Ki,4),k(r,ft,4)),i&2){let s;C(s=S())&&(n.headerFacet=s.first),C(s=S())&&(n.footerFacet=s.first),C(s=S())&&(n.itemTemplate=s.first),C(s=S())&&(n.headerTemplate=s.first),C(s=S())&&(n.footerTemplate=s.first),C(s=S())&&(n.previousIconTemplate=s.first),C(s=S())&&(n.nextIconTemplate=s.first),C(s=S())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(At(Yi,5),At(Zi,5)),i&2){let r;C(r=S())&&(n.itemsContainer=r.first),C(r=S())&&(n.indicatorContent=r.first)}},inputs:{page:"page",numVisible:"numVisible",numScroll:"numScroll",responsiveOptions:"responsiveOptions",orientation:"orientation",verticalViewPortHeight:"verticalViewPortHeight",contentClass:"contentClass",indicatorsContentClass:"indicatorsContentClass",indicatorsContentStyle:"indicatorsContentStyle",indicatorStyleClass:"indicatorStyleClass",indicatorStyle:"indicatorStyle",value:"value",circular:[2,"circular","circular",R],showIndicators:[2,"showIndicators","showIndicators",R],showNavigators:[2,"showNavigators","showNavigators",R],autoplayInterval:[2,"autoplayInterval","autoplayInterval",Xt],style:"style",styleClass:"styleClass",prevButtonProps:"prevButtonProps",nextButtonProps:"nextButtonProps"},outputs:{onPage:"onPage"},features:[H([ii]),xt,T,_t],ngContentSelectors:tn,decls:14,vars:23,consts:[["itemsContainer",""],["icon",""],["indicatorContent",""],["role","region",3,"ngClass","ngStyle"],["class","p-carousel-header",4,"ngIf"],[3,"ngClass"],[1,"p-carousel-content"],[3,"ngClass","disabled","text","buttonProps","click",4,"ngIf"],[1,"p-carousel-viewport",3,"touchend","touchstart","touchmove","ngStyle"],[1,"p-carousel-item-list",3,"transitionend"],[3,"ngClass",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"ngClass","disabled","buttonProps","text","click",4,"ngIf"],[3,"ngClass","class","ngStyle","keydown",4,"ngIf"],["class","p-carousel-footer",4,"ngIf"],[1,"p-carousel-header"],[4,"ngTemplateOutlet"],[3,"click","ngClass","disabled","text","buttonProps"],[4,"ngIf"],["class","p-carousel-prev-icon",4,"ngIf"],[3,"styleClass",4,"ngIf"],[3,"styleClass"],[1,"p-carousel-prev-icon"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button","pRipple","",3,"click","ngClass","disabled","buttonProps","text"],[3,"keydown","ngClass","ngStyle"],["type","button",3,"click","ngClass","ngStyle","tabindex"],[1,"p-carousel-footer"]],template:function(i,n){if(i&1){let r=at();pt(Xi),d(0,"div",3),u(1,cn,3,1,"div",4),d(2,"div",5)(3,"div",6),u(4,bn,3,7,"p-button",7),d(5,"div",8),G("touchend",function(l){return X(r),tt(n.onTouchEnd(l))})("touchstart",function(l){return X(r),tt(n.onTouchStart(l))})("touchmove",function(l){return X(r),tt(n.onTouchMove(l))}),d(6,"div",9,0),G("transitionend",function(){return X(r),tt(n.onTransitionEnd())}),u(8,yn,2,12,"div",10)(9,Cn,2,12,"div",10)(10,wn,2,9,"div",10),h()(),u(11,En,3,9,"p-button",11),h(),u(12,On,3,5,"ul",12),h(),u(13,Pn,3,1,"div",13),h()}i&2&&(B(n.styleClass),a("ngClass",Ot(18,en,n.isVertical(),!n.isVertical()))("ngStyle",n.style),f("id",n.id),c(),a("ngIf",n.headerFacet||n.headerTemplate),c(),B(n.contentClass),a("ngClass","p-carousel-content-container"),c(),f("aria-live",n.allowAutoplay?"polite":"off"),c(),a("ngIf",n.showNavigators),c(),a("ngStyle",J(21,nn,n.isVertical()?n.verticalViewPortHeight:"auto")),c(3),a("ngForOf",n.clonedItemsForStarting),c(),a("ngForOf",n.value),c(),a("ngForOf",n.clonedItemsForFinishing),c(),a("ngIf",n.showNavigators),c(),a("ngIf",n.showIndicators),c(),a("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[W,lt,Ht,ht,Tt,et,re,Ye,qt,fe,Ke,Je,Ze,E],encapsulation:2,changeDetection:0})}return e})(),se=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[Gt,E,E]})}return e})();var Bn=()=>({"left.px":5,"top.px":5});function Ln(e,o){if(e&1){let t=at();d(0,"div",4),G("click",function(){let n=X(t).$implicit,r=p();return tt(r.onMovieClick(n))}),d(1,"div",5)(2,"div",6),y(3,"img",7)(4,"p-tag",8),h()(),d(5,"div",9)(6,"div",10),nt(7),h()()()}if(e&2){let t=o.$implicit;c(3),a("src",t.imgSrc,Rt)("alt",t.title),c(),a("ngStyle",Ct(4,Bn)),c(3),ot(t.releaseYear)}}var ae=class e{title="";movies=[];responsiveOptions=[{breakpoint:"1200px",numVisible:5,numScroll:1},{breakpoint:"992px",numVisible:4,numScroll:1},{breakpoint:"768px",numVisible:3,numScroll:1},{breakpoint:"576px",numVisible:2,numScroll:1},{breakpoint:"375px",numVisible:1,numScroll:1}];onMovieClick(o){console.log("Pel\xEDcula seleccionada:",o)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-movie-category"]],inputs:{title:"title",movies:"movies"},decls:7,vars:7,consts:[["item",""],[1,"movie-category"],[1,"category-header"],["containerClass","custom-carousel",1,"p-carousel",3,"value","numVisible","numScroll","circular","responsiveOptions","showIndicators"],[1,"border","border-surface-200","dark:border-surface-700","rounded","m-2","p-4","movie-card",3,"click"],[1,"mb-4"],[1,"relative","mx-auto"],[1,"movie-poster",3,"src","alt"],["value","Popular","severity","success",1,"absolute",3,"ngStyle"],[1,"flex","justify-between","items-center"],[1,"mt-0","font-semibold","text-xl"]],template:function(t,i){t&1&&(d(0,"div",1)(1,"div",2)(2,"h2"),nt(3),h()(),d(4,"p-carousel",3),u(5,Ln,8,5,"ng-template",null,0,dt),h()()),t&2&&(c(3),ot(i.title),c(),a("value",i.movies)("numVisible",5)("numScroll",5)("circular",!0)("responsiveOptions",i.responsiveOptions)("showIndicators",!1))},dependencies:[W,et,se,Gt,qt],styles:['@charset "UTF-8";.movie-category[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-bottom:30px;position:relative}.category-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;font-size:1.5rem;font-weight:700;position:absolute;top:0;left:5%;z-index:10;width:90%;padding:10px 0}.custom-carousel[_ngcontent-%COMP%]   .p-carousel-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:20px}.custom-carousel[_ngcontent-%COMP%]   .p-carousel-item[_ngcontent-%COMP%]{flex:1 1 auto;transition:transform .3s ease-in-out;cursor:pointer}.movie-card[_ngcontent-%COMP%]{margin-top:90px;width:100%;padding:25px;max-width:400px;text-align:center;position:relative}.movie-poster[_ngcontent-%COMP%]{cursor:pointer;width:100%;min-width:220px;border-radius:10px;transition:transform .3s ease}.movie-poster[_ngcontent-%COMP%]:hover{transform:scale(1.1)}']})};var Vn=({dt:e})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${e("progressspinner.color.1")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${e("progressspinner.color.1")};
    }
    40% {
        stroke: ${e("progressspinner.color.2")};
    }
    66% {
        stroke: ${e("progressspinner.color.3")};
    }
    80%,
    90% {
        stroke: ${e("progressspinner.color.4")};
    }
}
`,Nn={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ri=(()=>{class e extends V{name="progressspinner";theme=Vn;classes=Nn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var Rn=(()=>{class e extends j{styleClass;style;strokeWidth="2";fill="none";animationDuration="2s";ariaLabel;_componentStyle=w(ri);static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-progressSpinner"],["p-progress-spinner"],["p-progressspinner"]],inputs:{styleClass:"styleClass",style:"style",strokeWidth:"strokeWidth",fill:"fill",animationDuration:"animationDuration",ariaLabel:"ariaLabel"},features:[H([ri]),T],decls:3,vars:11,consts:[["role","progressbar",1,"p-progressspinner",3,"ngStyle","ngClass"],["viewBox","25 25 50 50",1,"p-progressspinner-spin"],["cx","50","cy","50","r","20","stroke-miterlimit","10",1,"p-progressspinner-circle"]],template:function(i,n){i&1&&(d(0,"div",0),st(),d(1,"svg",1),y(2,"circle",2),h()()),i&2&&(a("ngStyle",n.style)("ngClass",n.styleClass),f("aria-label",n.ariaLabel)("aria-busy",!0)("data-pc-name","progressspinner")("data-pc-section","root"),c(),Zt("animation-duration",n.animationDuration),f("data-pc-section","root"),c(),f("fill",n.fill)("stroke-width",n.strokeWidth))},dependencies:[W,lt,et,E],encapsulation:2,changeDetection:0})}return e})(),si=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[Rn,E,E]})}return e})();var An=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,Hn={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ai=(()=>{class e extends V{name="card";theme=An;classes=Hn;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var jn=["header"],Wn=["title"],Qn=["subtitle"],Un=["content"],qn=["footer"],Gn=["*",[["p-header"]],[["p-footer"]]],Jn=["*","p-header","p-footer"];function Kn(e,o){e&1&&A(0)}function Yn(e,o){if(e&1&&(d(0,"div",8),it(1,1),u(2,Kn,1,0,"ng-container",6),h()),e&2){let t=p();c(2),a("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Zn(e,o){if(e&1&&(U(0),nt(1),q()),e&2){let t=p(2);c(),ot(t.header)}}function Xn(e,o){e&1&&A(0)}function to(e,o){if(e&1&&(d(0,"div",9),u(1,Zn,2,1,"ng-container",10)(2,Xn,1,0,"ng-container",6),h()),e&2){let t=p();c(),a("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),c(),a("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function eo(e,o){if(e&1&&(U(0),nt(1),q()),e&2){let t=p(2);c(),ot(t.subheader)}}function io(e,o){e&1&&A(0)}function no(e,o){if(e&1&&(d(0,"div",11),u(1,eo,2,1,"ng-container",10)(2,io,1,0,"ng-container",6),h()),e&2){let t=p();c(),a("ngIf",t.subheader&&!t._subtitleTemplate&&t.subtitleTemplate),c(),a("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function oo(e,o){e&1&&A(0)}function ro(e,o){e&1&&A(0)}function so(e,o){if(e&1&&(d(0,"div",12),it(1,2),u(2,ro,1,0,"ng-container",6),h()),e&2){let t=p();c(2),a("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var ao=(()=>{class e extends j{header;subheader;set style(t){Re(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=we(null);_componentStyle=w(ai);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-card"]],contentQueries:function(i,n,r){if(i&1&&(k(r,ie,5),k(r,ne,5),k(r,jn,4),k(r,Wn,4),k(r,Qn,4),k(r,Un,4),k(r,qn,4),k(r,ft,4)),i&2){let s;C(s=S())&&(n.headerFacet=s.first),C(s=S())&&(n.footerFacet=s.first),C(s=S())&&(n.headerTemplate=s.first),C(s=S())&&(n.titleTemplate=s.first),C(s=S())&&(n.subtitleTemplate=s.first),C(s=S())&&(n.contentTemplate=s.first),C(s=S())&&(n.footerTemplate=s.first),C(s=S())&&(n.templates=s)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[H([ai]),T],ngContentSelectors:Jn,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,n){i&1&&(pt(Gn),d(0,"div",0),u(1,Yn,3,1,"div",1),d(2,"div",2),u(3,to,3,2,"div",3)(4,no,3,2,"div",4),d(5,"div",5),it(6),u(7,oo,1,0,"ng-container",6),h(),u(8,so,3,1,"div",7),h()()),i&2&&(B(n.styleClass),a("ngClass","p-card p-component")("ngStyle",n._style()),f("data-pc-name","card"),c(),a("ngIf",n.headerFacet||n.headerTemplate||n._headerTemplate),c(2),a("ngIf",n.header||n.titleTemplate||n._titleTemplate),c(),a("ngIf",n.subheader||n.subtitleTemplate||n._subtitleTemplate),c(3),a("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),c(),a("ngIf",n.footerFacet||n.footerTemplate||n._footerTemplate))},dependencies:[W,lt,ht,Tt,et,E],encapsulation:2,changeDetection:0})}return e})(),li=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[ao,E,E]})}return e})();var lo=({dt:e})=>`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e("virtualscroller.loader.mask.background")};
    color: ${e("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: ${e("virtualscroller.loader.icon.size")};
    width: ${e("virtualscroller.loader.icon.size")};
    height: ${e("virtualscroller.loader.icon.size")};
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,ci=(()=>{class e extends V{name="virtualscroller";theme=lo;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var di=["content"],co=["item"],uo=["loader"],po=["loadericon"],ho=["element"],mo=["*"],go=(e,o,t)=>({"p-virtualscroller":!0,"p-virtualscroller-inline":e,"p-virtualscroller-both p-both-scroll":o,"p-virtualscroller-horizontal p-horizontal-scroll":t}),ve=(e,o)=>({$implicit:e,options:o}),fo=e=>({"p-virtualscroller-loading ":e}),bo=e=>({"p-virtualscroller-loader-mask":e}),vo=e=>({numCols:e}),ui=e=>({options:e}),yo=()=>({styleClass:"p-virtualscroller-loading-icon"}),_o=(e,o)=>({rows:e,columns:o});function Co(e,o){e&1&&A(0)}function So(e,o){if(e&1&&(U(0),u(1,Co,1,0,"ng-container",10),q()),e&2){let t=p(2);c(),a("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",Ot(2,ve,t.loadedItems,t.getContentOptions()))}}function wo(e,o){e&1&&A(0)}function xo(e,o){if(e&1&&(U(0),u(1,wo,1,0,"ng-container",10),q()),e&2){let t=o.$implicit,i=o.index,n=p(3);c(),a("ngTemplateOutlet",n.itemTemplate||n._itemTemplate)("ngTemplateOutletContext",Ot(2,ve,t,n.getOptions(i)))}}function Io(e,o){if(e&1&&(d(0,"div",11,3),u(2,xo,2,5,"ng-container",12),h()),e&2){let t=p(2);a("ngClass",J(5,fo,t.d_loading))("ngStyle",t.contentStyle),f("data-pc-section","content"),c(2),a("ngForOf",t.loadedItems)("ngForTrackBy",t._trackBy)}}function To(e,o){if(e&1&&y(0,"div",13),e&2){let t=p(2);a("ngStyle",t.spacerStyle),f("data-pc-section","spacer")}}function $o(e,o){e&1&&A(0)}function ko(e,o){if(e&1&&(U(0),u(1,$o,1,0,"ng-container",10),q()),e&2){let t=o.index,i=p(4);c(),a("ngTemplateOutlet",i.loaderTemplate||i._loaderTemplate)("ngTemplateOutletContext",J(4,ui,i.getLoaderOptions(t,i.both&&J(2,vo,i.numItemsInViewport.cols))))}}function Mo(e,o){if(e&1&&(U(0),u(1,ko,2,6,"ng-container",15),q()),e&2){let t=p(3);c(),a("ngForOf",t.loaderArr)}}function Eo(e,o){e&1&&A(0)}function Fo(e,o){if(e&1&&(U(0),u(1,Eo,1,0,"ng-container",10),q()),e&2){let t=p(4);c(),a("ngTemplateOutlet",t.loaderIconTemplate||t._loaderIconTemplate)("ngTemplateOutletContext",J(3,ui,Ct(2,yo)))}}function Oo(e,o){e&1&&y(0,"SpinnerIcon",16),e&2&&(a("styleClass","p-virtualscroller-loading-icon pi-spin"),f("data-pc-section","loadingIcon"))}function Do(e,o){if(e&1&&u(0,Fo,2,5,"ng-container",6)(1,Oo,1,2,"ng-template",null,5,dt),e&2){let t=Ft(2),i=p(3);a("ngIf",i.loaderIconTemplate||i._loaderIconTemplate)("ngIfElse",t)}}function Po(e,o){if(e&1&&(d(0,"div",14),u(1,Mo,2,1,"ng-container",6)(2,Do,3,2,"ng-template",null,4,dt),h()),e&2){let t=Ft(3),i=p(2);a("ngClass",J(4,bo,!i.loaderTemplate)),f("data-pc-section","loader"),c(),a("ngIf",i.loaderTemplate||i._loaderTemplate)("ngIfElse",t)}}function zo(e,o){if(e&1){let t=at();U(0),d(1,"div",7,1),G("scroll",function(n){X(t);let r=p();return tt(r.onContainerScroll(n))}),u(3,So,2,5,"ng-container",6)(4,Io,3,7,"ng-template",null,2,dt)(6,To,1,2,"div",8)(7,Po,4,6,"div",9),h(),q()}if(e&2){let t=Ft(5),i=p();c(),B(i._styleClass),a("ngStyle",i._style)("ngClass",It(12,go,i.inline,i.both,i.horizontal)),f("id",i._id)("tabindex",i.tabindex)("data-pc-name","scroller")("data-pc-section","root"),c(2),a("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",t),c(3),a("ngIf",i._showSpacer),c(),a("ngIf",!i.loaderDisabled&&i._showLoader&&i.d_loading)}}function Bo(e,o){e&1&&A(0)}function Lo(e,o){if(e&1&&(U(0),u(1,Bo,1,0,"ng-container",10),q()),e&2){let t=p(2);c(),a("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",Ot(5,ve,t.items,Ot(2,_o,t._items,t.loadedColumns)))}}function Vo(e,o){if(e&1&&(it(0),u(1,Lo,2,8,"ng-container",17)),e&2){let t=p();c(),a("ngIf",t.contentTemplate||t._contentTemplate)}}var No=(()=>{class e extends j{zone;get id(){return this._id}set id(t){this._id=t}get style(){return this._style}set style(t){this._style=t}get styleClass(){return this._styleClass}set styleClass(t){this._styleClass=t}get tabindex(){return this._tabindex}set tabindex(t){this._tabindex=t}get items(){return this._items}set items(t){this._items=t}get itemSize(){return this._itemSize}set itemSize(t){this._itemSize=t}get scrollHeight(){return this._scrollHeight}set scrollHeight(t){this._scrollHeight=t}get scrollWidth(){return this._scrollWidth}set scrollWidth(t){this._scrollWidth=t}get orientation(){return this._orientation}set orientation(t){this._orientation=t}get step(){return this._step}set step(t){this._step=t}get delay(){return this._delay}set delay(t){this._delay=t}get resizeDelay(){return this._resizeDelay}set resizeDelay(t){this._resizeDelay=t}get appendOnly(){return this._appendOnly}set appendOnly(t){this._appendOnly=t}get inline(){return this._inline}set inline(t){this._inline=t}get lazy(){return this._lazy}set lazy(t){this._lazy=t}get disabled(){return this._disabled}set disabled(t){this._disabled=t}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(t){this._loaderDisabled=t}get columns(){return this._columns}set columns(t){this._columns=t}get showSpacer(){return this._showSpacer}set showSpacer(t){this._showSpacer=t}get showLoader(){return this._showLoader}set showLoader(t){this._showLoader=t}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(t){this._numToleratedItems=t}get loading(){return this._loading}set loading(t){this._loading=t}get autoSize(){return this._autoSize}set autoSize(t){this._autoSize=t}get trackBy(){return this._trackBy}set trackBy(t){this._trackBy=t}get options(){return this._options}set options(t){this._options=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,n])=>this[`_${i}`]!==n&&(this[`_${i}`]=n))}onLazyLoad=new ut;onScroll=new ut;onScrollIndexChange=new ut;elementViewChild;contentViewChild;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(t=>this._columns?t:t.slice(this._appendOnly?0:this.first.cols,this.last.cols)):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=w(ci);constructor(t){super(),this.zone=t}ngOnInit(){super.ngOnInit(),this.setInitialState()}ngOnChanges(t){super.ngOnChanges(t);let i=!1;if(t.loading){let{previousValue:n,currentValue:r}=t.loading;this.lazy&&n!==r&&r!==this.d_loading&&(this.d_loading=r,i=!0)}if(t.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),t.numToleratedItems){let{previousValue:n,currentValue:r}=t.numToleratedItems;n!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(t.options){let{previousValue:n,currentValue:r}=t.options;this.lazy&&n?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,i=!0),n?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!i&&(t.items?.previousValue?.length!==t.items?.currentValue?.length||t.itemSize||t.scrollHeight||t.scrollWidth)&&(this.init(),this.calculateAutoSize())}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"item":this._itemTemplate=t.template;break;case"loader":this._loaderTemplate=t.template;break;case"loadericon":this._loaderIconTemplate=t.template;break;default:this._itemTemplate=t.template;break}})}ngAfterViewInit(){super.ngAfterViewInit(),Promise.resolve().then(()=>{this.viewInit()})}ngAfterViewChecked(){this.initialized||this.viewInit()}ngOnDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1,super.ngOnDestroy()}viewInit(){rt(this.platformId)&&!this.initialized&&he(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=gt(this.elementViewChild?.nativeElement),this.defaultHeight=mt(this.elementViewChild?.nativeElement),this.defaultContentWidth=gt(this.contentEl),this.defaultContentHeight=mt(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize(),this.bindResizeListener(),this.cd.detectChanges())}setContentEl(t){this.contentEl=t||this.contentViewChild?.nativeElement||Qt(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,this.d_loading=this._loading||!1,this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=[],this.spacerStyle={},this.contentStyle={}}getElementRef(){return this.elementViewChild}getPageByFirst(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(t){return this._step?this.page!==this.getPageByFirst(t??this.first):!0}scrollTo(t){this.elementViewChild?.nativeElement?.scrollTo(t)}scrollToIndex(t,i="auto"){if(this.both?t.every(r=>r>-1):t>-1){let r=this.first,{scrollTop:s=0,scrollLeft:l=0}=this.elementViewChild?.nativeElement,{numToleratedItems:m}=this.calculateNumItems(),v=this.getContentPosition(),g=this.itemSize,M=($=0,O)=>$<=O?0:$,D=($,O,ct)=>$*O+ct,F=($=0,O=0)=>this.scrollTo({left:$,top:O,behavior:i}),P=this.both?{rows:0,cols:0}:0,K=!1,_=!1;this.both?(P={rows:M(t[0],m[0]),cols:M(t[1],m[1])},F(D(P.cols,g[1],v.left),D(P.rows,g[0],v.top)),_=this.lastScrollPos.top!==s||this.lastScrollPos.left!==l,K=P.rows!==r.rows||P.cols!==r.cols):(P=M(t,m),this.horizontal?F(D(P,g,v.left),s):F(l,D(P,g,v.top)),_=this.lastScrollPos!==(this.horizontal?l:s),K=P!==r),this.isRangeChanged=K,_&&(this.first=P)}}scrollInView(t,i,n="auto"){if(i){let{first:r,viewport:s}=this.getRenderedRange(),l=(g=0,M=0)=>this.scrollTo({left:g,top:M,behavior:n}),m=i==="to-start",v=i==="to-end";if(m){if(this.both)s.first.rows-r.rows>t[0]?l(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>t[1]&&l((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>t){let g=(s.first-1)*this._itemSize;this.horizontal?l(g,0):l(0,g)}}else if(v){if(this.both)s.last.rows-r.rows<=t[0]+1?l(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=t[1]+1&&l((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=t+1){let g=(s.first+1)*this._itemSize;this.horizontal?l(g,0):l(0,g)}}}else this.scrollToIndex(t,n)}getRenderedRange(){let t=(r,s)=>s||r?Math.floor(r/(s||r)):0,i=this.first,n=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)i={rows:t(r,this._itemSize[0]),cols:t(s,this._itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{let l=this.horizontal?s:r;i=t(l,this._itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}}calculateNumItems(){let t=this.getContentPosition(),i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-t.left:0)||0,n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-t.top:0)||0,r=(v,g)=>g||v?Math.ceil(v/(g||v)):0,s=v=>Math.ceil(v/2),l=this.both?{rows:r(n,this._itemSize[0]),cols:r(i,this._itemSize[1])}:r(this.horizontal?i:n,this._itemSize),m=this.d_numToleratedItems||(this.both?[s(l.rows),s(l.cols)]:s(l));return{numItemsInViewport:l,numToleratedItems:m}}calculateOptions(){let{numItemsInViewport:t,numToleratedItems:i}=this.calculateNumItems(),n=(l,m,v,g=!1)=>this.getLast(l+m+(l<v?2:3)*v,g),r=this.first,s=this.both?{rows:n(this.first.rows,t.rows,i[0]),cols:n(this.first.cols,t.cols,i[1],!0)}:n(this.first,t,i);this.last=s,this.numItemsInViewport=t,this.d_numToleratedItems=i,this.showLoader&&(this.loaderArr=this.both?Array.from({length:t.rows}).map(()=>Array.from({length:t.cols})):Array.from({length:t})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this.items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[t,i]=[gt(this.contentEl),mt(this.contentEl)];t!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),i!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[n,r]=[gt(this.elementViewChild.nativeElement),mt(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=n<this.defaultWidth?n+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(t=0,i=!1){return this._items?Math.min(i?(this._columns||this._items[0]).length:this._items.length,t):0}getContentPosition(){if(this.contentEl){let t=getComputedStyle(this.contentEl),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),n=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),r=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),s=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:n,top:r,bottom:s,x:i+n,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let t=this.elementViewChild.nativeElement.parentElement.parentElement,i=this._scrollWidth||`${this.elementViewChild.nativeElement.offsetWidth||t.offsetWidth}px`,n=this._scrollHeight||`${this.elementViewChild.nativeElement.offsetHeight||t.offsetHeight}px`,r=(s,l)=>this.elementViewChild.nativeElement.style[s]=l;this.both||this.horizontal?(r("height",n),r("width",i)):r("height",n)}}setSpacerSize(){if(this._items){let t=this.getContentPosition(),i=(n,r,s,l=0)=>this.spacerStyle=Lt(N({},this.spacerStyle),{[`${n}`]:(r||[]).length*s+l+"px"});this.both?(i("height",this._items,this._itemSize[0],t.y),i("width",this._columns||this._items[1],this._itemSize[1],t.x)):this.horizontal?i("width",this._columns||this._items,this._itemSize,t.x):i("height",this._items,this._itemSize,t.y)}}setContentPosition(t){if(this.contentEl&&!this._appendOnly){let i=t?t.first:this.first,n=(s,l)=>s*l,r=(s=0,l=0)=>this.contentStyle=Lt(N({},this.contentStyle),{transform:`translate3d(${s}px, ${l}px, 0)`});if(this.both)r(n(i.cols,this._itemSize[1]),n(i.rows,this._itemSize[0]));else{let s=n(i,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(t){let i=t.target,n=this.getContentPosition(),r=(_,$)=>_?_>$?_-$:_:0,s=(_,$)=>$||_?Math.floor(_/($||_)):0,l=(_,$,O,ct,vt,kt)=>_<=vt?vt:kt?O-ct-vt:$+vt-1,m=(_,$,O,ct,vt,kt,Jt)=>_<=kt?0:Math.max(0,Jt?_<$?O:_-kt:_>$?O:_-2*kt),v=(_,$,O,ct,vt,kt=!1)=>{let Jt=$+ct+2*vt;return _>=vt&&(Jt+=vt+1),this.getLast(Jt,kt)},g=r(i.scrollTop,n.top),M=r(i.scrollLeft,n.left),D=this.both?{rows:0,cols:0}:0,F=this.last,P=!1,K=this.lastScrollPos;if(this.both){let _=this.lastScrollPos.top<=g,$=this.lastScrollPos.left<=M;if(!this._appendOnly||this._appendOnly&&(_||$)){let O={rows:s(g,this._itemSize[0]),cols:s(M,this._itemSize[1])},ct={rows:l(O.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],_),cols:l(O.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],$)};D={rows:m(O.rows,ct.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],_),cols:m(O.cols,ct.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],$)},F={rows:v(O.rows,D.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:v(O.cols,D.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},P=D.rows!==this.first.rows||F.rows!==this.last.rows||D.cols!==this.first.cols||F.cols!==this.last.cols||this.isRangeChanged,K={top:g,left:M}}}else{let _=this.horizontal?M:g,$=this.lastScrollPos<=_;if(!this._appendOnly||this._appendOnly&&$){let O=s(_,this._itemSize),ct=l(O,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,$);D=m(O,ct,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,$),F=v(O,D,this.last,this.numItemsInViewport,this.d_numToleratedItems),P=D!==this.first||F!==this.last||this.isRangeChanged,K=_}}return{first:D,last:F,isRangeChanged:P,scrollPos:K}}onScrollChange(t){let{first:i,last:n,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(t);if(r){let l={first:i,last:n};if(this.setContentPosition(l),this.first=i,this.last=n,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",l),this._lazy&&this.isPageChanged(i)){let m={first:this._step?Math.min(this.getPageByFirst(i)*this._step,this.items.length-this._step):i,last:Math.min(this._step?(this.getPageByFirst(i)+1)*this._step:n,this.items.length)};(this.lazyLoadState.first!==m.first||this.lazyLoadState.last!==m.last)&&this.handleEvents("onLazyLoad",m),this.lazyLoadState=m}}}onContainerScroll(t){if(this.handleEvents("onScroll",{originalEvent:t}),this._delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){let{isRangeChanged:i}=this.onScrollPositionChange(t);(i||(this._step?this.isPageChanged():!1))&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(t),this.d_loading&&this.showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(t)}bindResizeListener(){rt(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let t=this.document.defaultView,i=Le()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(t,i,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(he(this.elementViewChild?.nativeElement)){let[t,i]=[gt(this.elementViewChild?.nativeElement),mt(this.elementViewChild?.nativeElement)],[n,r]=[t!==this.defaultWidth,i!==this.defaultHeight];(this.both?n||r:this.horizontal?n:this.vertical?r:!1)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=t,this.defaultHeight=i,this.defaultContentWidth=gt(this.contentEl),this.defaultContentHeight=mt(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(t,i){return this.options&&this.options[t]?this.options[t](i):this[t].emit(i)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:t=>this.getOptions(t),loading:this.d_loading,getLoaderOptions:(t,i)=>this.getLoaderOptions(t,i),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both}}getOptions(t){let i=(this._items||[]).length,n=this.both?this.first.rows+t:this.first+t;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}}getLoaderOptions(t,i){let n=this.loaderArr.length;return N({index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0},i)}static \u0275fac=function(i){return new(i||e)(Et(Vt))};static \u0275cmp=I({type:e,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(i,n,r){if(i&1&&(k(r,di,4),k(r,co,4),k(r,uo,4),k(r,po,4),k(r,ft,4)),i&2){let s;C(s=S())&&(n.contentTemplate=s.first),C(s=S())&&(n.itemTemplate=s.first),C(s=S())&&(n.loaderTemplate=s.first),C(s=S())&&(n.loaderIconTemplate=s.first),C(s=S())&&(n.templates=s)}},viewQuery:function(i,n){if(i&1&&(At(ho,5),At(di,5)),i&2){let r;C(r=S())&&(n.elementViewChild=r.first),C(r=S())&&(n.contentViewChild=r.first)}},inputs:{id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[H([ci]),T,_t],ngContentSelectors:mo,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","ngClass"],["class","p-virtualscroller-spacer",3,"ngStyle",4,"ngIf"],["class","p-virtualscroller-loader",3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-virtualscroller-content",3,"ngClass","ngStyle"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-virtualscroller-spacer",3,"ngStyle"],[1,"p-virtualscroller-loader",3,"ngClass"],[4,"ngFor","ngForOf"],[3,"styleClass"],[4,"ngIf"]],template:function(i,n){if(i&1&&(pt(),u(0,zo,8,16,"ng-container",6)(1,Vo,2,1,"ng-template",null,0,dt)),i&2){let r=Ft(2);a("ngIf",!n._disabled)("ngIfElse",r)}},dependencies:[W,lt,Ht,ht,Tt,et,oe,E],encapsulation:2})}return e})(),pi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[No,E,E]})}return e})();var Ro=({dt:e})=>`
.p-skeleton {
    overflow: hidden;
    background: ${e("skeleton.background")};
    border-radius: ${e("skeleton.border.radius")};
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ${e("skeleton.animation.background")}, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`,Ao={root:{position:"relative"}},Ho={root:({props:e})=>["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]},hi=(()=>{class e extends V{name="skeleton";theme=Ro;classes=Ho;inlineStyles=Ao;static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275prov=L({token:e,factory:e.\u0275fac})}return e})();var jo=(()=>{class e extends j{styleClass;style;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=w(hi);containerClass(){return{"p-skeleton p-component":!0,"p-skeleton-circle":this.shape==="circle","p-skeleton-animation-none":this.animation==="none"}}get containerStyle(){let t=this._componentStyle?.inlineStyles.root,i;return this.size?i=Lt(N(N({},this.style),t),{width:this.size,height:this.size,borderRadius:this.borderRadius}):i=N(Lt(N({},t),{width:this.width,height:this.height,borderRadius:this.borderRadius}),this.style),i}static \u0275fac=(()=>{let t;return function(n){return(t||(t=b(e)))(n||e)}})();static \u0275cmp=I({type:e,selectors:[["p-skeleton"]],inputs:{styleClass:"styleClass",style:"style",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[H([hi]),T],decls:1,vars:7,consts:[[3,"ngClass","ngStyle"]],template:function(i,n){i&1&&y(0,"div",0),i&2&&(B(n.styleClass),a("ngClass",n.containerClass())("ngStyle",n.containerStyle),f("data-pc-name","skeleton")("aria-hidden",!0)("data-pc-section","root"))},dependencies:[W,lt,et,E],encapsulation:2,changeDetection:0})}return e})(),mi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=Z({type:e});static \u0275inj=Y({imports:[jo,E,E]})}return e})();function ye(e){return{aspect_ratio:e.aspect_ratio,height:e.height,iso_639_1:e.iso_639_1,file_path:e.file_path,vote_average:e.vote_average,vote_count:e.vote_count,width:e.width,getBackdropUrl:function(){return`https://image.tmdb.org/t/p/original${this.file_path}`}}}var gi={production:!0,apiKey:process.env.OMDB_API_KEY||""};var le=class e{constructor(o){this.http=o}apiKey=gi.apiKey;apiUrl="https://api.themoviedb.org/3";language="en-US";getMovieLogos(o){return yt([this.http.get(`${this.apiUrl}/movie/${o}/images?api_key=${this.apiKey}&language=es`).pipe(z(t=>t.logos&&t.logos.length>0?`https://image.tmdb.org/t/p/w500${t.logos[0].file_path}`:null)),this.http.get(`${this.apiUrl}/movie/${o}/images?api_key=${this.apiKey}&language=en`).pipe(z(t=>t.logos&&t.logos.length>0?`https://image.tmdb.org/t/p/w500${t.logos[0].file_path}`:null)),this.http.get(`${this.apiUrl}/movie/${o}/images?api_key=${this.apiKey}&language=`).pipe(z(t=>t.logos&&t.logos.length>0?`https://image.tmdb.org/t/p/w500${t.logos[0].file_path}`:null))]).pipe(z(t=>t.filter(i=>i!==null)),x(this.handleError))}getNowPlaying(o,t){let i=this.buildParams({page:t.toString()});return this.http.get(`${this.apiUrl}/${o}/now_playing`,{params:i}).pipe(x(this.handleError))}getCategory(o,t,i,n={}){let r=this.buildParams(N({page:t.toString()},n));return this.http.get(`${this.apiUrl}/${i}/${o}`,{params:r}).pipe(x(this.handleError))}getMovie(o){return this.http.get(`${this.apiUrl}/movie/${o}`,{params:this.buildParams({})}).pipe(x(this.handleError))}getExternalId(o,t){return this.http.get(`${this.apiUrl}/${t}/${o}/external_ids`,{params:this.buildParams({})}).pipe(x(this.handleError))}getRecommended(o,t,i){return this.http.get(`${this.apiUrl}/${i}/${o}/recommendations`,{params:this.buildParams({})})}getBackdrops(o,t){let i=`${this.apiUrl}/${t}/${o}/images?api_key=${this.apiKey}`;return this.http.get(i)}getYouTubeVideo(o,t){let i=this.buildParams({});return this.http.get(`${this.apiUrl}/${t}/${o}/videos`,{params:i}).pipe(x(this.handleError))}getTrending(o,t){let i=this.buildParams({page:t.toString()});return this.http.get(`${this.apiUrl}/trending/${o}/week`,{params:i}).pipe(x(this.handleError))}getTvDiscover(o){let t=this.buildParams({page:o.toString()});return this.http.get(`${this.apiUrl}/discover/tv`,{params:t}).pipe(x(this.handleError))}getPersonExternalId(o){return this.http.get(`${this.apiUrl}/person/${o}/external_ids`,{params:this.buildParams({})}).pipe(x(this.handleError))}getTvShow(o){return this.http.get(`${this.apiUrl}/tv/${o}`,{params:this.buildParams({})}).pipe(x(this.handleError))}getTvShowEpisodes(o,t){let i=this.buildParams({});return this.http.get(`${this.apiUrl}/tv/${o}/season/${t}`,{params:i}).pipe(x(this.handleError))}getMediaByGenre(o,t,i){let n=this.buildParams({page:i.toString(),with_genres:t.toString()});return this.http.get(`${this.apiUrl}/discover/${o}`,{params:n}).pipe(x(this.handleError))}getGenreMovieList(o){let t=this.buildParams({});return this.http.get(`${this.apiUrl}/genre/${o}/list`,{params:t}).pipe(x(this.handleError))}getGenreList(o){let t=this.buildParams({});return this.http.get(`${this.apiUrl}/genre/movie/list`,{params:t}).pipe(x(this.handleError))}getByGenre(o,t,i){let n=this.buildParams({page:i.toString()});return this.http.get(`${this.apiUrl}/genre/${o}/${t}`,{params:n}).pipe(x(this.handleError))}getDiscoverMovies(o){let t=this.buildParams({page:o.toString(),sort_by:"popularity.desc"});return this.http.get(`${this.apiUrl}/discover/movie`,{params:t}).pipe(x(this.handleError))}getCredits(o,t){let i=this.buildParams({});return this.http.get(`${this.apiUrl}/${t}/${o}/credits`,{params:i}).pipe(x(this.handleError))}getPerson(o){let t=this.buildParams({});return this.http.get(`${this.apiUrl}/person/${o}`,{params:t}).pipe(x(this.handleError))}getPersonImages(o){let t=this.buildParams({});return this.http.get(`${this.apiUrl}/person/${o}/images`,{params:t}).pipe(x(this.handleError))}getPersonCredit(o){let t=this.buildParams({});return this.http.get(`${this.apiUrl}/person/${o}/movie_credits`,{params:t}).pipe(x(this.handleError))}search(o,t){let i=this.buildParams({query:o,page:t.toString()});return this.http.get(`${this.apiUrl}/search/multi`,{params:i}).pipe(x(this.handleError))}getMoviesBackdrop(o,t="en"){let i=this.buildParams({movieId:o.toString(),language:t,include_image_language:"en,null"});return this.http.get(`${this.apiUrl}/movie/${o}/images`,{params:i}).pipe(z(n=>n.backdrops),x(this.handleError))}buildParams(o){let t=new Fe().set("api_key",this.apiKey||"").set("language",this.language);for(let i in o)o.hasOwnProperty(i)&&(t=t.set(i,o[i]));return t}handleError(o){return console.error("An error occurred",o),Mt(()=>new Error("Something went wrong"))}static \u0275fac=function(t){return new(t||e)(Kt(Oe))};static \u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"})};var ce=class e{constructor(o){this.apiService=o}mapMovieData(o){return{id:o.id,link:`/movie/${o.id}`,imgSrc:o.poster_path?`https://image.tmdb.org/t/p/w370_and_h556_bestv2${o.poster_path}`:null,title:o.title,rating:o.vote_average*10,vote:o.vote_average,description:o.overview||""}}initializeMoviesImages(o){yt(o.map(t=>this.getMoviesScreenCaptures([t]))).subscribe(t=>{o.forEach((i,n)=>{let r=t[n].filter(l=>l.width>=1920&&l.height>=1080&&l.aspect_ratio>=1.77),s=this.getRandomImages(r,5);i.principalImage=s[0]||null,i.thumbnails=s.slice(1)||[]})})}getMoviesScreenCaptures(o){return yt(o.map(t=>this.apiService.getMoviesBackdrop(Number(t.link.split("/movie/")[1])))).pipe(z(t=>t.flat().filter(i=>!this.containsLogo(i)&&!this.isDuplicateBackdrop(i)).map(i=>ye(i))),x(t=>(console.error("Error fetching screen captures:",t),ue([]))))}getRandomImages(o,t){return[...o].sort(()=>.5-Math.random()).slice(0,t)}initializeMoviesLogos(o){yt(o.map(t=>this.apiService.getMovieLogos(t.id))).subscribe(t=>{o.forEach((i,n)=>{i.logosUrls=t[n]||[]})})}fetchTrendingMovies(){return this.apiService.getTrending("movie",1).pipe(z(o=>o.results.map(this.mapMovieData)))}getNowPlayingMovies(){return this.apiService.getNowPlaying("movie",1).pipe(z(o=>o.results.map(this.mapMovieData)))}getPopularMovies(){return this.apiService.getCategory("popular",1,"movie",{language:"es"}).pipe(z(o=>o.results.map(this.mapMovieData)))}getRecommendedMovies(o){return this.apiService.getRecommended(o,1,"movie").pipe(z(t=>t.results.map(this.mapMovieData)))}processedBackdropLinks=new Set;getMoviesBackdrops(o){return yt(o.map(t=>this.apiService.getMoviesBackdrop(Number(t.link.split("/movie/")[1])))).pipe(z(t=>t.flat().filter(i=>!this.containsLogo(i)&&!this.isDuplicateBackdrop(i)).map(i=>ye(i))),x(t=>(console.error("Error fetching backdrops:",t),ue([]))))}containsLogo(o){return o.file_path.includes("logo")||o.file_path.includes("watermark")}isDuplicateBackdrop(o){let t=o.file_path;return this.processedBackdropLinks.has(t)?!0:(this.processedBackdropLinks.add(t),!1)}getAllMoviesPaginated(o){let t=Array.from({length:o},(i,n)=>this.apiService.getDiscoverMovies(n+1));return yt(t).pipe(z(i=>i.results.map(this.mapMovieData)),x(i=>Mt(()=>new Error("Error fetching movies"))))}getMoviesByPage(o){return this.apiService.getDiscoverMovies(o).pipe(z(t=>t.results.map(this.mapMovieData)),x(t=>Mt(()=>new Error("Error fetching movies"))))}getYouTubeTrailer(o){return this.apiService.getYouTubeVideo(o,"movie").pipe(z(t=>t.results.find(i=>i.site==="YouTube"&&i.type==="Trailer")))}getMovieDetails(o){return this.apiService.getMovie(o).pipe(z(t=>t.results.map(this.mapMovieData)))}getMovieWallpapers(o){return this.apiService.getMoviesBackdrop(o).pipe(z(t=>t.map(i=>`https://image.tmdb.org/t/p/original${i.file_path}`)),x(t=>Mt(()=>new Error("Error fetching movie wallpapers"))))}getByGenre(o,t,i){return this.apiService.getByGenre(o,t,i).pipe(z(n=>n.results.map(this.mapMovieData)))}getMediaByGenreRange(o,t,i){let n=i.map(r=>this.apiService.getMediaByGenre(o,t,r).pipe(z(s=>s.results.map(this.mapMovieData))));return yt(n).pipe(z(r=>r.flat()))}getCategory(o,t,i){return this.apiService.getCategory(o,t,i).pipe(z(n=>n.results.map(this.mapMovieData)))}getGenreList(o){return this.apiService.getGenreList(o).pipe(z(t=>t.genres.map(i=>({id:i.id,name:i.name}))),x(t=>Mt(()=>new Error("Error fetching genres"))))}static \u0275fac=function(t){return new(t||e)(Kt(le))};static \u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"})};var Uo=()=>({breakpoint:"1024px",numVisible:1,numScroll:1}),qo=()=>({breakpoint:"768px",numVisible:1,numScroll:1}),Go=()=>({breakpoint:"560px",numVisible:1,numScroll:1}),Jo=(e,o,t)=>[e,o,t],Ko=()=>[];function Yo(e,o){if(e&1&&y(0,"img",14),e&2){let t=p().$implicit;a("src",t.logosUrls[0],Rt)}}function Zo(e,o){if(e&1&&(d(0,"h2",15),nt(1),h()),e&2){let t=p().$implicit;c(),ot(t.title)}}function Xo(e,o){if(e&1){let t=at();d(0,"div")(1,"img",16),G("click",function(){let n=X(t).$implicit,r=p(2);return tt(r.onThumbnailClick(n))}),h()()}if(e&2){let t=o.$implicit;c(),a("src",t.getBackdropUrl(),Rt)}}function tr(e,o){if(e&1&&(d(0,"div",7)(1,"div",8),u(2,Yo,1,1,"img",9)(3,Zo,2,1,"ng-template",null,0,dt),d(5,"p",10),nt(6),h()(),d(7,"div",11),u(8,Xo,2,1,"div",12),h(),y(9,"img",13),h()),e&2){let t=o.$implicit,i=Ft(4),n=p();c(2),a("ngIf",(t.logosUrls==null?null:t.logosUrls.length)>0)("ngIfElse",i),c(4),ot(t.description),c(2),a("ngForOf",t.thumbnails),c(),a("src",n.getImageForCarousel(t),Rt)}}function er(e,o){if(e&1&&(y(0,"app-movie-category",17),Ie(1,"async")),e&2){let t=o.$implicit;a("title",t.name)("movies",Te(1,2,t.movies$)||Ct(4,Ko))}}var de=class e{constructor(o){this.movieService=o;this.genreList=this.movieService.getGenreList("movie")}showNavigators=!0;popularMovies=[];carouselPosition=0;movieCategories=[];selectedImage=null;genreList;allMovies=new Set;onResize(o){window.innerWidth<800?this.showNavigators=!1:this.showNavigators=!0}ngOnInit(){this.movieService.getPopularMovies().subscribe(o=>{this.movieService.initializeMoviesImages(o),this.movieService.initializeMoviesLogos(o),this.popularMovies=o.filter(t=>t.description&&t.description.trim()!==""&&t.thumbnails&&t.thumbnails?.length>0)}),this.movieService.getGenreList("movie").subscribe(o=>{let t=o.slice(0,11).map(i=>({name:i.name,movies$:this.movieService.getMediaByGenreRange("movie",i.id,[1,2]).pipe(z(n=>{let r=n.filter(s=>!this.allMovies.has(Number(s.id)));return r.forEach(s=>this.allMovies.add(Number(s.id))),r}))}));this.movieCategories=t}),this.movieCategories=[...this.movieCategories]}onPageChange(o){this.carouselPosition=o.page,this.selectedImage=null}onThumbnailClick(o){this.selectedImage=o}getImageForCarousel(o){return this.selectedImage?.getBackdropUrl()||o.principalImage?.getBackdropUrl()||""}static \u0275fac=function(t){return new(t||e)(Et(ce))};static \u0275cmp=I({type:e,selectors:[["app-home"]],hostAttrs:["ngSkipHydration","true"],hostBindings:function(t,i){t&1&&G("resize",function(r){return i.onResize(r)},!1,Ce)},decls:7,vars:14,consts:[["showTitle",""],[1,"container"],[1,"movie-banner"],[3,"onPage","value","responsiveOptions","autoplayInterval","showNavigators","numVisible","showIndicators"],["pTemplate","item"],[1,"movie-grid"],[3,"title","movies",4,"ngFor","ngForOf"],[1,"movie-item"],[1,"movie-info"],["alt","Movie Logo","class","movie-logo",3,"src",4,"ngIf","ngIfElse"],[1,"movie-description"],[1,"backdrop-thumbnails"],[4,"ngFor","ngForOf"],["alt","Backdrop",1,"big-image",3,"src"],["alt","Movie Logo",1,"movie-logo",3,"src"],[1,"movie-title"],["alt","Thumbnail",1,"thumbnail",3,"click","src"],[3,"title","movies"]],template:function(t,i){t&1&&(d(0,"div",1)(1,"div",2)(2,"p-carousel",3),G("onPage",function(r){return i.onPageChange(r)}),u(3,tr,10,5,"ng-template",4),h()(),d(4,"div",5)(5,"div",1),u(6,er,2,5,"app-movie-category",6),h()()()),t&2&&(c(2),a("value",i.popularMovies)("responsiveOptions",It(10,Jo,Ct(7,Uo),Ct(8,qo),Ct(9,Go)))("autoplayInterval",7e3)("showNavigators",!1)("numVisible",1)("showIndicators",i.showNavigators),c(4),a("ngForOf",i.movieCategories))},dependencies:[si,ft,li,qt,pi,W,Ht,ht,Me,mi,se,Gt,ae],styles:['@charset "UTF-8";.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;padding:0 20px;max-width:2440px;margin:0 auto;text-align:center}.movie-banner[_ngcontent-%COMP%]{position:relative;margin-left:80px;margin-right:80px}.movie-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:end;position:relative;gap:20px}.movie-info[_ngcontent-%COMP%]{position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;left:0;max-width:50%;height:100%;padding-left:2vw;padding-right:clamp(50px,7vw,200px);z-index:1;font-size:1rem;line-height:1.3;text-align:left;text-shadow:2px 2px 10px rgba(0,0,0,.7)}.movie-logo[_ngcontent-%COMP%]{width:clamp(130px,27vw,650px);object-fit:contain;margin-bottom:10px}.movie-description[_ngcontent-%COMP%]{font-size:clamp(.7rem,1.15vw,1.4rem);text-align:justify;background-image:linear-gradient(to right,#f3f3f3,#ccc);-webkit-background-clip:text;background-clip:text;color:transparent}.big-image[_ngcontent-%COMP%]{width:90%;height:80%;max-height:1000px;object-fit:fill;z-index:0;mask-image:linear-gradient(to right,#0000,#000 60%,#0000)}.backdrop-thumbnails[_ngcontent-%COMP%]{position:absolute;z-index:2;bottom:2vw;left:1.5vw;display:flex;gap:1vw;background:#0009;padding:1vw;border-radius:1vw;box-shadow:0 4px 8px #0000004d}.backdrop-thumbnails[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]{height:clamp(60px,5vw,130px);border-radius:.5vw;cursor:pointer;opacity:.9;transition:transform .3s ease,opacity .3s ease}.backdrop-thumbnails[_ngcontent-%COMP%]   .thumbnail[_ngcontent-%COMP%]:hover{transform:scale(1.1);opacity:1}@media (max-width: 1100px){.movie-description[_ngcontent-%COMP%]{display:none}}@media (max-width: 1000px){.backdrop-thumbnails[_ngcontent-%COMP%]{display:none}}@media (max-width: 1500px){.movie-description[_ngcontent-%COMP%]{display:none}}']})};var Al=[{path:"",component:de}];export{Al as HOME_ROUTES};
