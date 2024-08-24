(function(){var aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},ca=ba(this),g=function(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-
1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&aa(c,a,{configurable:!0,writable:!0,value:b})}},h=function(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""};
g("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=h(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});g("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
g("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});g("String.prototype.includes",function(a){return a?a:function(b,c){return h(this,b,"includes").indexOf(b,c||0)!==-1}});window.gapi=window.gapi||{};window.gapi.A=(new Date).getTime();/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m=this||self,n="closure_uid_"+(Math.random()*1E9>>>0),da=0,t=function(a){return a};/*

 SPDX-License-Identifier: Apache-2.0
*/
var x={};var y=function(a){if(x!==x)throw Error("Bad secret");this.v=a};y.prototype.toString=function(){return this.v};new y("about:blank");new y("about:invalid#zClosurez");var A=[],B=function(a){console.warn("A URL with content '"+a+"' was sanitized away.")};A.indexOf(B)===-1&&A.push(B);var E={},F=function(){if(E!==E)throw Error("SafeStyle is not meant to be built directly");this.s=""};F.prototype.toString=function(){return this.s.toString()};new F;var ea={},fa=function(){if(ea!==ea)throw Error("SafeStyleSheet is not meant to be built directly");this.o=""};fa.prototype.toString=function(){return this.o.toString()};new fa;var ha={},ia=function(){var a=m.trustedTypes&&m.trustedTypes.emptyHTML||"";if(ha!==ha)throw Error("SafeHtml is not meant to be built directly");this.l=a};ia.prototype.toString=function(){return this.l.toString()};new ia;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var G=window,I=document,ja=G.location,ka=function(){},la=/\[native code\]/,J=function(a,b,c){return a[b]=a[b]||c},ma=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b},K=function(){var a;if((a=Object.create)&&la.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a},N=J(G,"gapi",{});var O={};O=J(G,"___jsl",K());J(O,"I",0);J(O,"hel",10);var na=function(){var a=ja.href;if(O.dpo)var b=O.h;else{b=O.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b},oa=function(a){var b=J(O,"PQ",[]);O.PQ=[];var c=b.length;if(c===0)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},P=function(a){return J(J(O,"H",K()),a,K())};var Q=J(O,"perf",K()),pa=J(Q,"g",K()),qa=J(Q,"i",K());J(Q,"r",[]);K();K();var R=function(a,b,c){var d=Q.r;typeof d==="function"?d(a,b,c):d.push([a,b,c])},T=function(a,b,c){b&&b.length>0&&(b=sa(b),c&&c.length>0&&(b+="___"+sa(c)),b.length>28&&(b=b.substr(0,28)+(b.length-28)),c=b,b=J(qa,"_p",K()),J(b,c,K())[a]=(new Date).getTime(),R(a,"_p",c))},sa=function(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")};var ta=K(),U=[],V=function(a){throw Error("Bad hint: "+a);};U.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];typeof c=="object"?O[b]=J(O,b,[]).concat(c):J(O,b,c)}if(b=a.u)a=J(O,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var ua=/^(\/[a-zA-Z0-9_\-]+)+$/,va=[/\/amp\//,/\/amp$/,/^\/amp$/],wa=/^[a-zA-Z0-9\-_\.,!]+$/,xa=/^gapi\.loaded_[0-9]+$/,ya=/^[a-zA-Z0-9,._-]+$/,Ca=function(a,b,c,d,e){var f=a.split(";"),k=f.shift(),l=ta[k],p=null;l?p=l(f,b,c,d):V("no hint processor for: "+k);p||V("failed to generate load url");b=p;c=b.match(za);(d=b.match(Aa))&&d.length===1&&Ba.test(b)&&c&&c.length===1||V("failed sanity: "+a);try{a="?";if(e&&e.length>0){c=b=0;for(d={};c<e.length;){var q=e[c++];f=void 0;k=typeof q;f=k=="object"&&q!=
null||k=="function"?"o"+(Object.prototype.hasOwnProperty.call(q,n)&&q[n]||(q[n]=++da)):(typeof q).charAt(0)+q;Object.prototype.hasOwnProperty.call(d,f)||(d[f]=!0,e[b++]=q)}e.length=b;p=p+"?le="+e.join(",");a="&"}if(O.rol){var z=O.ol;z&&z.length&&(p=""+p+a+"ol="+z.length)}}catch(H){}return p},Fa=function(a,b,c,d){a=Da(a);xa.test(c)||V("invalid_callback");b=Ea(b);d=d&&d.length?Ea(d):null;var e=function(f){return encodeURIComponent(f).replace(/%2C/g,",")};return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,
",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.g?"/am="+e(a.g):"",a.i?"/rs="+e(a.i):"",a.j?"/t="+e(a.j):"","/cb=",e(c)].join("")},Da=function(a){a.charAt(0)!=="/"&&V("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||a.indexOf(".")==0)V("empty/relative directory");else if(a.indexOf("=")>0){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),k=decodeURIComponent(f[0]),l=
decodeURIComponent(f[1]);f.length==2&&k&&l&&(a[k]=a[k]||l)}b="/"+c.join("/");ua.test(b)||V("invalid_prefix");c=0;for(d=va.length;c<d;++c)va[c].test(b)&&V("invalid_prefix");c=W(a,"k",!0);d=W(a,"am");e=W(a,"rs");a=W(a,"t");return{pathPrefix:b,version:c,g:d,i:e,j:a}},Ea=function(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");ya.test(e)&&b.push(e)}return b.join(",")},W=function(a,b,c){a=a[b];!a&&c&&V("missing: "+b);if(a){if(wa.test(a))return a;V("invalid: "+b)}return null},
Ba=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Aa=/\/cb=/g,za=/\/\//g;ta.m=function(a,b,c,d){(a=a[0])||V("missing_hint");return"https://apis.google.com"+Fa(a,b,c,d)};var X=decodeURI("%73cript"),Ga=/^[-+_0-9\/A-Za-z]+={0,2}$/,Ha=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=f<0}f&&c.push(e)}return c},Ia=function(){var a=O.nonce;return a!==void 0?a&&a===String(a)&&a.match(Ga)?a:O.nonce=null:I.querySelector?(a=I.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Ga)?O.nonce=a:O.nonce=null):null:null},Ka=function(a){if(I.readyState!="loading")Ja(a);
else{var b=Ia(),c="";b!==null&&(c=' nonce="'+b+'"');a="<"+X+' src="'+encodeURI(a)+'"'+c+"></"+X+">";I.write(Y?Y.createHTML(a):a)}},Ja=function(a){var b=I.createElement(X);b.setAttribute("src",Y?Y.createScriptURL(a):a);a=Ia();a!==null&&b.setAttribute("nonce",a);b.async="true";(a=I.getElementsByTagName(X)[0])?a.parentNode.insertBefore(b,a):(I.head||I.body||I.documentElement).appendChild(b)},Ma=function(a,b,c){La(function(){var d=b===na()?J(N,"_",K()):K();d=J(P(b),"_",d);a(d)},c)},Oa=function(a,b){var c=
b||{};typeof b=="function"&&(c={},c.callback=b);var d=(b=c)&&b._c;if(d)for(var e=0;e<U.length;e++){var f=U[e][0],k=U[e][1];k&&Object.prototype.hasOwnProperty.call(d,f)&&k(d[f],a,b)}b=[];a?b=a.split(":"):c.features&&(b=c.features);if(!(a=c.h)&&(a=na(),!a))throw Error("Bad hint: !hint");Na(b||[],c,a)},Na=function(a,b,c){a=ma(a)||[];var d=b.callback,e=b.config,f=b.timeout,k=b.ontimeout,l=b.onerror,p=void 0;typeof l=="function"&&(p=l);var q=null,z=!1;if(f&&!k||!f&&k)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
l=J(P(c),"r",[]).sort();var H=J(P(c),"L",[]).sort(),Sa=O.le||[],L=[].concat(l),ra=function(w,C){if(z)return 0;G.clearTimeout(q);H.push.apply(H,r);var D=((N||{}).config||{}).update;D?D(e):e&&J(O,"cu",[]).push(e);if(C){T("me0",w,L);try{Ma(C,c,p)}finally{T("me1",w,L)}}return 1};f>0&&(q=G.setTimeout(function(){z=!0;k()},f));var r=Ha(a,H);if(r.length){r=Ha(a,l);var u=J(O,"CP",[]),v=u.length;u[v]=function(w){if(!w)return 0;T("ml1",r,L);var C=function(M){u[v]=null;ra(r,w)&&oa(function(){d&&d();M()})},D=
function(){var M=u[v+1];M&&M()};v>0&&u[v-1]?u[v]=function(){C(D)}:C(D)};if(r.length){var S="loaded_"+O.I++;N[S]=function(w){u[v](w);N[S]=null};a=Ca(c,r,"gapi."+S,l,Sa);l.push.apply(l,r);T("ml0",r,L);b.sync||G.___gapisync?Ka(a):Ja(a)}else u[v](ka)}else ra(r)&&d&&d()},Pa;var Qa=null,Z=m.trustedTypes;if(Z&&Z.createPolicy)try{Qa=Z.createPolicy("gapi#gapi",{createHTML:t,createScript:t,createScriptURL:t})}catch(a){m.console&&m.console.error(a.message)}Pa=Qa;var Y=Pa;var La=function(a,b){if(O.hee&&O.hel>0)try{return a()}catch(c){b&&b(c),O.hel--,Oa("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;}};var Ra=N.load;Ra&&J(O,"ol",[]).push(Ra);N.load=function(a,b){return La(function(){return Oa(a,b)})};U.unshift(["url",function(a,b,c){!a||b&&b!==""||!a.endsWith(".js")||(a=a.substring(0,a.length-3),b=a.lastIndexOf("/")+1,b>=a.length||(a=a.substr(b).split(":").filter(function(d){return!["api","platform"].includes(d)}),c.features=a))}]);pa.bs0=window.gapi._bs||(new Date).getTime();R("bs0");pa.bs1=(new Date).getTime();R("bs1");delete window.gapi._bs;window.gapi.load("",{callback:window["gapiLoaded"],_c:{url:"https://apis.google.com/js/client.js",jsl:{ci:{"oauth-flow":{authUrl:"https://accounts.google.com/o/oauth2/auth",proxyUrl:"https://accounts.google.com/o/oauth2/postmessageRelay",disableOpt:!0,idpIframeUrl:"https://accounts.google.com/o/oauth2/iframe",usegapi:!1},debug:{reportExceptionRate:1,forceIm:!1,rethrowException:!0,host:"https://apis.google.com"},gen204logger:{ interval: 30000, rate: 0.01, batch: false },enableMultilogin:!0,"googleapis.config":{auth:{useFirstPartyAuthV2:!0},root:"https://content.googleapis.com","root-1p":"https://clients6.google.com"},
inline:{css:1},disableRealtimeCallback:!1,drive_share:{skipInitCommand:!0},csi:{rate:.01},client:{cors:!1},signInDeprecation:{rate:0},include_granted_scopes:!0,llang:"zh",iframes:{youtube:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1",methods:["scroll","openwindow"]},ytsubscribe:{url:"https://www.youtube.com/subscribe_embed?usegapi=1"},plus_circle:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi=1"},
plus_share:{params:{url:""},url:":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare=true&usegapi=1"},rbr_s:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller"},":source:":"3p",playemm:{url:"https://play.google.com/work/embedded/search?usegapi=1&usegapi=1"},savetoandroidpay:{url:"https://pay.google.com/gp/v/widget/save"},blogger:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/blogger?usegapi=1",methods:["scroll",
"openwindow"]},evwidget:{params:{url:""},url:":socialhost:/:session_prefix:_/events/widget?usegapi=1"},partnersbadge:{url:"https://www.gstatic.com/partners/badge/templates/badge.html?usegapi=1"},dataconnector:{url:"https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi=1"},surveyoptin:{url:"https://www.google.com/shopping/customerreviews/optin?usegapi=1"},":socialhost:":"https://apis.google.com",shortlists:{url:""},hangout:{url:"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget"},
plus_followers:{params:{url:""},url:":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"},post:{params:{url:""},url:":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi=1"},signin:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/signin?usegapi=1",methods:["onauth"]},rbr_i:{params:{url:""},url:":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation"},share:{url:":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi=1"},plusone:{params:{count:"",
size:"",url:""},url:":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi=1"},comments:{params:{location:["search","hash"]},url:":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1",methods:["scroll","openwindow"]},":im_socialhost:":"https://plus.googleapis.com",backdrop:{url:"https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi=1"},visibility:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/visibility?usegapi=1"},autocomplete:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/autocomplete"},
":signuphost:":"https://plus.google.com",ratingbadge:{url:"https://www.google.com/shopping/customerreviews/badge?usegapi=1"},appcirclepicker:{url:":socialhost:/:session_prefix:_/widget/render/appcirclepicker"},follow:{url:":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"},community:{url:":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"},sharetoclassroom:{url:"https://classroom.google.com/sharewidget?usegapi=1"},ytshare:{params:{url:""},url:":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi=1"},
plus:{url:":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"},family_creation:{params:{url:""},url:"https://families.google.com/webcreation?usegapi=1&usegapi=1"},commentcount:{url:":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"},configurator:{url:":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"},zoomableimage:{url:"https://ssl.gstatic.com/microscope/embed/"},appfinder:{url:"https://workspace.google.com/:session_prefix:marketplace/appfinder?usegapi=1"},savetowallet:{url:"https://pay.google.com/gp/v/widget/save"},
person:{url:":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"},savetodrive:{url:"https://drive.google.com/savetodrivebutton?usegapi=1",methods:["save"]},page:{url:":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"},card:{url:":socialhost:/:session_prefix:_/hovercard/card"}}},h:"m;/_/scs/abc-static/_/js/k=gapi.lb.zh_TW.74MpcWxLxM0.O/am=AABA/d=1/rs=AHpOoo9vMc-jGJ-K7qKZ9N6gNI7cKQTMiQ/m=__features__",u:"https://apis.google.com/js/client.js",hee:!0,dpo:!1,le:["scs"]},platform:"backdrop blogger comments commentcount community donation family_creation follow hangout health page partnersbadge person playemm playreview plus plusone post ratingbadge savetoandroidpay savetodrive savetowallet sharetoclassroom shortlists signin2 surveyoptin visibility youtube ytsubscribe zoomableimage".split(" "),
annotation:["interactivepost","recobar","signin2","autocomplete"]}});}).call(this);
