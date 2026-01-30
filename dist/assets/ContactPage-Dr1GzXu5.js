import{s as Rt,R as zt,r as j,j as g,k as C,S as Ka}from"./index-B-RPJ948.js";import{P as Ja}from"./PageHeaderBicolorBackground-DfNAR2kv.js";import{B as qa}from"./BackgroundColor-CVaScox1.js";import{T as Qa}from"./index-lY1mLKRw.js";import"./PageTitle-CZLpa0WS.js";const Za="_pageWrapper_ew0f1_4",er="_growingSection_ew0f1_10",tr="_contactSection_ew0f1_14",ar="_contactTextWrap_ew0f1_38",rr="_contactImageWrap_ew0f1_49",nr="_contactImage_ew0f1_49",ir="_title_ew0f1_68",or="_paragraph_ew0f1_98",z={pageWrapper:Za,growingSection:er,contactSection:tr,contactTextWrap:ar,contactImageWrap:rr,contactImage:nr,title:ir,paragraph:or},Z={titleLine1:"聯絡",titleLine2:"與我聯繫",paragraph:"有任何問題，以及服務諮詢或合作邀約，都歡迎透過以下方式與我聯絡。我會盡快與您聯繫！",imageUrl:"/images/林育如大頭貼日本橫濱 2019.jpg",imageAlt:"聯絡頁面示意圖"},Wt=[{id:"contact-mail",icon:"IconMail",contactName:"Mail",contactUrl:`mailto:${Rt.outlinks.email}`},{id:"contact-line",icon:"LINE",contactName:"LINE",contactUrl:"#"},{id:"contact-messenger",icon:"Messenger",contactName:"Messenger",contactUrl:"#"}],sr="_contactLinksContainer_vc9dv_4",lr="_linkItem_vc9dv_11",fr="_iconWrapper_vc9dv_18",ur="_contactName_vc9dv_29",ue={contactLinksContainer:sr,linkItem:lr,iconWrapper:fr,contactName:ur};/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function je(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}function cr(e){if(Array.isArray(e))return e}function dr(e){if(Array.isArray(e))return je(e)}function mr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vr(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ut(r.key),r)}}function hr(e,t,a){return t&&vr(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function me(e,t){var a=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=Xe(e))||t){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,i=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var l=a.next();return i=l.done,l},e:function(l){s=!0,o=l},f:function(){try{i||a.return==null||a.return()}finally{if(s)throw o}}}}function p(e,t,a){return(t=Ut(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function pr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function gr(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r,n,o,i,s=[],l=!0,u=!1;try{if(o=(a=a.call(e)).next,t===0){if(Object(a)!==a)return;l=!1}else for(;!(l=(r=o.call(a)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(d){u=!0,n=d}finally{try{if(!l&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(u)throw n}}return s}}function br(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ot(Object(a),!0).forEach(function(r){p(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ot(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ye(e,t){return cr(e)||gr(e,t)||Xe(e,t)||br()}function N(e){return dr(e)||pr(e)||Xe(e)||yr()}function xr(e,t){if(typeof e!="object"||!e)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ut(e){var t=xr(e,"string");return typeof t=="symbol"?t:t+""}function pe(e){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pe(e)}function Xe(e,t){if(e){if(typeof e=="string")return je(e,t);var a={}.toString.call(e).slice(8,-1);return a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set"?Array.from(e):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?je(e,t):void 0}}var st=function(){},Ke={},Yt={},Ht=null,Bt={mark:st,measure:st};try{typeof window<"u"&&(Ke=window),typeof document<"u"&&(Yt=document),typeof MutationObserver<"u"&&(Ht=MutationObserver),typeof performance<"u"&&(Bt=performance)}catch{}var Sr=Ke.navigator||{},lt=Sr.userAgent,ft=lt===void 0?"":lt,W=Ke,S=Yt,ut=Ht,ce=Bt;W.document;var R=!!S.documentElement&&!!S.head&&typeof S.addEventListener=="function"&&typeof S.createElement=="function",Gt=~ft.indexOf("MSIE")||~ft.indexOf("Trident/"),Ie,wr=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,kr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Vt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Ar={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Xt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],E="classic",oe="duotone",Kt="sharp",Jt="sharp-duotone",qt="chisel",Qt="etch",Zt="jelly",ea="jelly-duo",ta="jelly-fill",aa="notdog",ra="notdog-duo",na="slab",ia="slab-press",oa="thumbprint",sa="utility",la="utility-duo",fa="utility-fill",ua="whiteboard",Ir="Classic",Pr="Duotone",Er="Sharp",_r="Sharp Duotone",Cr="Chisel",Fr="Etch",Nr="Jelly",jr="Jelly Duo",Or="Jelly Fill",Tr="Notdog",Lr="Notdog Duo",Mr="Slab",$r="Slab Press",Dr="Thumbprint",Rr="Utility",zr="Utility Duo",Wr="Utility Fill",Ur="Whiteboard",ca=[E,oe,Kt,Jt,qt,Qt,Zt,ea,ta,aa,ra,na,ia,oa,sa,la,fa,ua];Ie={},p(p(p(p(p(p(p(p(p(p(Ie,E,Ir),oe,Pr),Kt,Er),Jt,_r),qt,Cr),Qt,Fr),Zt,Nr),ea,jr),ta,Or),aa,Tr),p(p(p(p(p(p(p(p(Ie,ra,Lr),na,Mr),ia,$r),oa,Dr),sa,Rr),la,zr),fa,Wr),ua,Ur);var Yr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Hr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},Br=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Gr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},da=["fak","fa-kit","fakd","fa-kit-duotone"],ct={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vr=["kit"],Xr="kit",Kr="kit-duotone",Jr="Kit",qr="Kit Duotone";p(p({},Xr,Jr),Kr,qr);var Qr={kit:{"fa-kit":"fak"}},Zr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},en={kit:{fak:"fa-kit"}},dt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Pe,de={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],an="classic",rn="duotone",nn="sharp",on="sharp-duotone",sn="chisel",ln="etch",fn="jelly",un="jelly-duo",cn="jelly-fill",dn="notdog",mn="notdog-duo",vn="slab",hn="slab-press",pn="thumbprint",gn="utility",bn="utility-duo",yn="utility-fill",xn="whiteboard",Sn="Classic",wn="Duotone",kn="Sharp",An="Sharp Duotone",In="Chisel",Pn="Etch",En="Jelly",_n="Jelly Duo",Cn="Jelly Fill",Fn="Notdog",Nn="Notdog Duo",jn="Slab",On="Slab Press",Tn="Thumbprint",Ln="Utility",Mn="Utility Duo",$n="Utility Fill",Dn="Whiteboard";Pe={},p(p(p(p(p(p(p(p(p(p(Pe,an,Sn),rn,wn),nn,kn),on,An),sn,In),ln,Pn),fn,En),un,_n),cn,Cn),dn,Fn),p(p(p(p(p(p(p(p(Pe,mn,Nn),vn,jn),hn,On),pn,Tn),gn,Ln),bn,Mn),yn,$n),xn,Dn);var Rn="kit",zn="kit-duotone",Wn="Kit",Un="Kit Duotone";p(p({},Rn,Wn),zn,Un);var Yn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Hn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},Oe={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Bn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ma=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(tn,Bn),Gn=["solid","regular","light","thin","duotone","brands","semibold"],va=[1,2,3,4,5,6,7,8,9,10],Vn=va.concat([11,12,13,14,15,16,17,18,19,20]),Xn=["aw","fw","pull-left","pull-right"],Kn=[].concat(N(Object.keys(Hn)),Gn,Xn,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",de.GROUP,de.SWAP_OPACITY,de.PRIMARY,de.SECONDARY]).concat(va.map(function(e){return"".concat(e,"x")})).concat(Vn.map(function(e){return"w-".concat(e)})),Jn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},$="___FONT_AWESOME___",Te=16,ha="fa",pa="svg-inline--fa",B="data-fa-i2svg",Le="data-fa-pseudo-element",qn="data-fa-pseudo-element-pending",Je="data-prefix",qe="data-icon",mt="fontawesome-i2svg",Qn="async",Zn=["HTML","HEAD","STYLE","SCRIPT"],ga=["::before","::after",":before",":after"],ba=(function(){try{return!0}catch{return!1}})();function se(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[E]}})}var ya=f({},Vt);ya[E]=f(f(f(f({},{"fa-duotone":"duotone"}),Vt[E]),ct.kit),ct["kit-duotone"]);var ei=se(ya),Me=f({},Gr);Me[E]=f(f(f(f({},{duotone:"fad"}),Me[E]),dt.kit),dt["kit-duotone"]);var vt=se(Me),$e=f({},Oe);$e[E]=f(f({},$e[E]),en.kit);var Qe=se($e),De=f({},Yn);De[E]=f(f({},De[E]),Qr.kit);se(De);var ti=wr,xa="fa-layers-text",ai=kr,ri=f({},Yr);se(ri);var ni=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ee=Ar,ii=[].concat(N(Vr),N(Kn)),te=W.FontAwesomeConfig||{};function oi(e){var t=S.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function si(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(S&&typeof S.querySelector=="function"){var li=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];li.forEach(function(e){var t=ye(e,2),a=t[0],r=t[1],n=si(oi(a));n!=null&&(te[r]=n)})}var Sa={styleDefault:"solid",familyDefault:E,cssPrefix:ha,replacementClass:pa,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};te.familyPrefix&&(te.cssPrefix=te.familyPrefix);var q=f(f({},Sa),te);q.autoReplaceSvg||(q.observeMutations=!1);var m={};Object.keys(Sa).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(a){q[e]=a,ae.forEach(function(r){return r(m)})},get:function(){return q[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){q.cssPrefix=t,ae.forEach(function(a){return a(m)})},get:function(){return q.cssPrefix}});W.FontAwesomeConfig=m;var ae=[];function fi(e){return ae.push(e),function(){ae.splice(ae.indexOf(e),1)}}var V=Te,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ui(e){if(!(!e||!R)){var t=S.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var a=S.head.childNodes,r=null,n=a.length-1;n>-1;n--){var o=a[n],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return S.head.insertBefore(t,r),e}}var ci="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){for(var e=12,t="";e-- >0;)t+=ci[Math.random()*62|0];return t}function Q(e){for(var t=[],a=(e||[]).length>>>0;a--;)t[a]=e[a];return t}function Ze(e){return e.classList?Q(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function wa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function di(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(wa(e[a]),'" ')},"").trim()}function xe(e){return Object.keys(e||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(e[a].trim(),";")},"")}function et(e){return e.size!==O.size||e.x!==O.x||e.y!==O.y||e.rotate!==O.rotate||e.flipX||e.flipY}function mi(e){var t=e.transform,a=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:u}}function vi(e){var t=e.transform,a=e.width,r=a===void 0?Te:a,n=e.height,o=n===void 0?Te:n,i="";return Gt?i+="translate(".concat(t.x/V-r/2,"em, ").concat(t.y/V-o/2,"em) "):i+="translate(calc(-50% + ".concat(t.x/V,"em), calc(-50% + ").concat(t.y/V,"em)) "),i+="scale(".concat(t.size/V*(t.flipX?-1:1),", ").concat(t.size/V*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var hi=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function ka(){var e=ha,t=pa,a=m.cssPrefix,r=m.replacementClass,n=hi;if(a!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");n=n.replace(o,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(s,".".concat(r))}return n}var pt=!1;function _e(){m.autoAddCss&&!pt&&(ui(ka()),pt=!0)}var pi={mixout:function(){return{dom:{css:ka,insertCss:_e}}},hooks:function(){return{beforeDOMElementCreation:function(){_e()},beforeI2svg:function(){_e()}}}},D=W||{};D[$]||(D[$]={});D[$].styles||(D[$].styles={});D[$].hooks||(D[$].hooks={});D[$].shims||(D[$].shims=[]);var F=D[$],Aa=[],Ia=function(){S.removeEventListener("DOMContentLoaded",Ia),ge=1,Aa.map(function(t){return t()})},ge=!1;R&&(ge=(S.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(S.readyState),ge||S.addEventListener("DOMContentLoaded",Ia));function gi(e){R&&(ge?setTimeout(e,0):Aa.push(e))}function le(e){var t=e.tag,a=e.attributes,r=a===void 0?{}:a,n=e.children,o=n===void 0?[]:n;return typeof e=="string"?wa(e):"<".concat(t," ").concat(di(r),">").concat(o.map(le).join(""),"</").concat(t,">")}function gt(e,t,a){if(e&&e[t]&&e[t][a])return{prefix:t,iconName:a,icon:e[t][a]}}var Ce=function(t,a,r,n){var o=Object.keys(t),i=o.length,s=a,l,u,d;for(r===void 0?(l=1,d=t[o[0]]):(l=0,d=r);l<i;l++)u=o[l],d=s(d,t[u],u,t);return d};function Pa(e){return N(e).length!==1?null:e.codePointAt(0).toString(16)}function bt(e){return Object.keys(e).reduce(function(t,a){var r=e[a],n=!!r.icon;return n?t[r.iconName]=r.icon:t[a]=r,t},{})}function Re(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,n=r===void 0?!1:r,o=bt(t);typeof F.hooks.addPack=="function"&&!n?F.hooks.addPack(e,bt(t)):F.styles[e]=f(f({},F.styles[e]||{}),o),e==="fas"&&Re("fa",t)}var ne=F.styles,bi=F.shims,Ea=Object.keys(Qe),yi=Ea.reduce(function(e,t){return e[t]=Object.keys(Qe[t]),e},{}),tt=null,_a={},Ca={},Fa={},Na={},ja={};function xi(e){return~ii.indexOf(e)}function Si(e,t){var a=t.split("-"),r=a[0],n=a.slice(1).join("-");return r===e&&n!==""&&!xi(n)?n:null}var Oa=function(){var t=function(o){return Ce(ne,function(i,s,l){return i[l]=Ce(s,o,{}),i},{})};_a=t(function(n,o,i){if(o[3]&&(n[o[3]]=i),o[2]){var s=o[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=i})}return n}),Ca=t(function(n,o,i){if(n[i]=i,o[2]){var s=o[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=i})}return n}),ja=t(function(n,o,i){var s=o[2];return n[i]=i,s.forEach(function(l){n[l]=i}),n});var a="far"in ne||m.autoFetchSvg,r=Ce(bi,function(n,o){var i=o[0],s=o[1],l=o[2];return s==="far"&&!a&&(s="fas"),typeof i=="string"&&(n.names[i]={prefix:s,iconName:l}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Fa=r.names,Na=r.unicodes,tt=Se(m.styleDefault,{family:m.familyDefault})};fi(function(e){tt=Se(e.styleDefault,{family:m.familyDefault})});Oa();function at(e,t){return(_a[e]||{})[t]}function wi(e,t){return(Ca[e]||{})[t]}function H(e,t){return(ja[e]||{})[t]}function Ta(e){return Fa[e]||{prefix:null,iconName:null}}function ki(e){var t=Na[e],a=at("fas",e);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function U(){return tt}var La=function(){return{prefix:null,iconName:null,rest:[]}};function Ai(e){var t=E,a=Ea.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return ca.forEach(function(r){(e.includes(a[r])||e.some(function(n){return yi[r].includes(n)}))&&(t=r)}),t}function Se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,r=a===void 0?E:a,n=ei[r][e];if(r===oe&&!e)return"fad";var o=vt[r][e]||vt[r][n],i=e in F.styles?e:null,s=o||i||null;return s}function Ii(e){var t=[],a=null;return e.forEach(function(r){var n=Si(m.cssPrefix,r);n?a=n:r&&t.push(r)}),{iconName:a,rest:t}}function yt(e){return e.sort().filter(function(t,a,r){return r.indexOf(t)===a})}var xt=ma.concat(da);function we(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,n=null,o=yt(e.filter(function(v){return xt.includes(v)})),i=yt(e.filter(function(v){return!xt.includes(v)})),s=o.filter(function(v){return n=v,!Xt.includes(v)}),l=ye(s,1),u=l[0],d=u===void 0?null:u,c=Ai(o),h=f(f({},Ii(i)),{},{prefix:Se(d,{family:c})});return f(f(f({},h),Ci({values:e,family:c,styles:ne,config:m,canonical:h,givenPrefix:n})),Pi(r,n,h))}function Pi(e,t,a){var r=a.prefix,n=a.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var o=t==="fa"?Ta(n):{},i=H(r,n);return n=o.iconName||i||n,r=o.prefix||r,r==="far"&&!ne.far&&ne.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var Ei=ca.filter(function(e){return e!==E||e!==oe}),_i=Object.keys(Oe).filter(function(e){return e!==E}).map(function(e){return Object.keys(Oe[e])}).flat();function Ci(e){var t=e.values,a=e.family,r=e.canonical,n=e.givenPrefix,o=n===void 0?"":n,i=e.styles,s=i===void 0?{}:i,l=e.config,u=l===void 0?{}:l,d=a===oe,c=t.includes("fa-duotone")||t.includes("fad"),h=u.familyDefault==="duotone",v=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(c||h||v)&&(r.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(r.prefix="fab"),!r.prefix&&Ei.includes(a)){var x=Object.keys(s).find(function(w){return _i.includes(w)});if(x||u.autoFetchSvg){var y=Br.get(a).defaultShortPrefixId;r.prefix=y,r.iconName=H(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||o==="fa")&&(r.prefix=U()||"fas"),r}var Fi=(function(){function e(){mr(this,e),this.definitions={}}return hr(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){a.definitions[s]=f(f({},a.definitions[s]||{}),i[s]),Re(s,i[s]);var l=Qe[E][s];l&&Re(l,i[s]),Oa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(o){var i=n[o],s=i.prefix,l=i.iconName,u=i.icon,d=u[2];a[s]||(a[s]={}),d.length>0&&d.forEach(function(c){typeof c=="string"&&(a[s][c]=u)}),a[s][l]=u}),a}}])})(),St=[],K={},J={},Ni=Object.keys(J);function ji(e,t){var a=t.mixoutsTo;return St=e,K={},Object.keys(J).forEach(function(r){Ni.indexOf(r)===-1&&delete J[r]}),St.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(i){typeof n[i]=="function"&&(a[i]=n[i]),pe(n[i])==="object"&&Object.keys(n[i]).forEach(function(s){a[i]||(a[i]={}),a[i][s]=n[i][s]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(i){K[i]||(K[i]=[]),K[i].push(o[i])})}r.provides&&r.provides(J)}),a}function ze(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];var o=K[e]||[];return o.forEach(function(i){t=i.apply(null,[t].concat(r))}),t}function G(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var n=K[e]||[];n.forEach(function(o){o.apply(null,a)})}function Y(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return J[e]?J[e].apply(null,t):void 0}function We(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,a=e.prefix||U();if(t)return t=H(a,t)||t,gt(Ma.definitions,a,t)||gt(F.styles,a,t)}var Ma=new Fi,Oi=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},Ti={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(G("beforeI2svg",t),Y("pseudoElements2svg",t),Y("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,gi(function(){Mi({autoReplaceSvgRoot:a}),G("watch",t)})}},Li={icon:function(t){if(t===null)return null;if(pe(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:H(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Se(t[0]);return{prefix:r,iconName:H(r,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ti))){var n=we(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||U(),iconName:H(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){var o=U();return{prefix:o,iconName:H(o,t)||t}}}},_={noAuto:Oi,config:m,dom:Ti,parse:Li,library:Ma,findIconDefinition:We,toHtml:le},Mi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,r=a===void 0?S:a;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&R&&m.autoReplaceSvg&&_.dom.i2svg({node:r})};function ke(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return le(r)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var r=S.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function $i(e){var t=e.children,a=e.main,r=e.mask,n=e.attributes,o=e.styles,i=e.transform;if(et(i)&&a.found&&!r.found){var s=a.width,l=a.height,u={x:s/l/2,y:.5};n.style=xe(f(f({},o),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:n,children:t}]}function Di(e){var t=e.prefix,a=e.iconName,r=e.children,n=e.attributes,o=e.symbol,i=o===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:i}),children:r}]}]}function Ri(e){var t=["aria-label","aria-labelledby","title","role"];return t.some(function(a){return a in e})}function rt(e){var t=e.icons,a=t.main,r=t.mask,n=e.prefix,o=e.iconName,i=e.transform,s=e.symbol,l=e.maskId,u=e.extra,d=e.watchable,c=d===void 0?!1:d,h=r.found?r:a,v=h.width,x=h.height,y=[m.replacementClass,o?"".concat(m.cssPrefix,"-").concat(o):""].filter(function(b){return u.classes.indexOf(b)===-1}).filter(function(b){return b!==""||!!b}).concat(u.classes).join(" "),w={children:[],attributes:f(f({},u.attributes),{},{"data-prefix":n,"data-icon":o,class:y,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!Ri(u.attributes)&&!u.attributes["aria-hidden"]&&(w.attributes["aria-hidden"]="true"),c&&(w.attributes[B]="");var k=f(f({},w),{},{prefix:n,iconName:o,main:a,mask:r,maskId:l,transform:i,symbol:s,styles:f({},u.styles)}),A=r.found&&a.found?Y("generateAbstractMask",k)||{children:[],attributes:{}}:Y("generateAbstractIcon",k)||{children:[],attributes:{}},P=A.children,T=A.attributes;return k.children=P,k.attributes=T,s?Di(k):$i(k)}function wt(e){var t=e.content,a=e.width,r=e.height,n=e.transform,o=e.extra,i=e.watchable,s=i===void 0?!1:i,l=f(f({},o.attributes),{},{class:o.classes.join(" ")});s&&(l[B]="");var u=f({},o.styles);et(n)&&(u.transform=vi({transform:n,width:a,height:r}),u["-webkit-transform"]=u.transform);var d=xe(u);d.length>0&&(l.style=d);var c=[];return c.push({tag:"span",attributes:l,children:[t]}),c}function zi(e){var t=e.content,a=e.extra,r=f(f({},a.attributes),{},{class:a.classes.join(" ")}),n=xe(a.styles);n.length>0&&(r.style=n);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),o}var Fe=F.styles;function Ue(e){var t=e[0],a=e[1],r=e.slice(4),n=ye(r,1),o=n[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ee.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ee.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:a,icon:i}}var Wi={found:!1,width:512,height:512};function Ui(e,t){!ba&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ye(e,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=U()),new Promise(function(r,n){if(a==="fa"){var o=Ta(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&Fe[t]&&Fe[t][e]){var i=Fe[t][e];return r(Ue(i))}Ui(e,t),r(f(f({},Wi),{},{icon:m.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}}))})}var kt=function(){},He=m.measurePerformance&&ce&&ce.mark&&ce.measure?ce:{mark:kt,measure:kt},ee='FA "7.1.0"',Yi=function(t){return He.mark("".concat(ee," ").concat(t," begins")),function(){return $a(t)}},$a=function(t){He.mark("".concat(ee," ").concat(t," ends")),He.measure("".concat(ee," ").concat(t),"".concat(ee," ").concat(t," begins"),"".concat(ee," ").concat(t," ends"))},nt={begin:Yi,end:$a},ve=function(){};function At(e){var t=e.getAttribute?e.getAttribute(B):null;return typeof t=="string"}function Hi(e){var t=e.getAttribute?e.getAttribute(Je):null,a=e.getAttribute?e.getAttribute(qe):null;return t&&a}function Bi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Gi(){if(m.autoReplaceSvg===!0)return he.replace;var e=he[m.autoReplaceSvg];return e||he.replace}function Vi(e){return S.createElementNS("http://www.w3.org/2000/svg",e)}function Xi(e){return S.createElement(e)}function Da(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,r=a===void 0?e.tag==="svg"?Vi:Xi:a;if(typeof e=="string")return S.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){n.setAttribute(i,e.attributes[i])});var o=e.children||[];return o.forEach(function(i){n.appendChild(Da(i,{ceFn:r}))}),n}function Ki(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var he={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(n){a.parentNode.insertBefore(Da(n),a)}),a.getAttribute(B)===null&&m.keepOriginalSource){var r=S.createComment(Ki(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(t){var a=t[0],r=t[1];if(~Ze(a).indexOf(m.replacementClass))return he.replace(t);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",o.toNode.join(" "))}var i=r.map(function(s){return le(s)}).join(`
`);a.setAttribute(B,""),a.innerHTML=i}};function It(e){e()}function Ra(e,t){var a=typeof t=="function"?t:ve;if(e.length===0)a();else{var r=It;m.mutateApproach===Qn&&(r=W.requestAnimationFrame||It),r(function(){var n=Gi(),o=nt.begin("mutate");e.map(n),o(),a()})}}var it=!1;function za(){it=!0}function Be(){it=!1}var be=null;function Pt(e){if(ut&&m.observeMutations){var t=e.treeCallback,a=t===void 0?ve:t,r=e.nodeCallback,n=r===void 0?ve:r,o=e.pseudoElementsCallback,i=o===void 0?ve:o,s=e.observeMutationsRoot,l=s===void 0?S:s;be=new ut(function(u){if(!it){var d=U();Q(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!At(c.addedNodes[0])&&(m.searchPseudoElements&&i(c.target),a(c.target)),c.type==="attributes"&&c.target.parentNode&&m.searchPseudoElements&&i([c.target],!0),c.type==="attributes"&&At(c.target)&&~ni.indexOf(c.attributeName))if(c.attributeName==="class"&&Hi(c.target)){var h=we(Ze(c.target)),v=h.prefix,x=h.iconName;c.target.setAttribute(Je,v||d),x&&c.target.setAttribute(qe,x)}else Bi(c.target)&&n(c.target)})}}),R&&be.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ji(){be&&be.disconnect()}function qi(e){var t=e.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(r,n){var o=n.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),a}function Qi(e){var t=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=we(Ze(e));return n.prefix||(n.prefix=U()),t&&a&&(n.prefix=t,n.iconName=a),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=wi(n.prefix,e.innerText)||at(n.prefix,Pa(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Zi(e){var t=Q(e.attributes).reduce(function(a,r){return a.name!=="class"&&a.name!=="style"&&(a[r.name]=r.value),a},{});return t}function eo(){return{iconName:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Et(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Qi(e),r=a.iconName,n=a.prefix,o=a.rest,i=Zi(e),s=ze("parseNodeAttributes",{},e),l=t.styleParser?qi(e):[];return f({iconName:r,prefix:n,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:i}},s)}var to=F.styles;function Wa(e){var t=m.autoReplaceSvg==="nest"?Et(e,{styleParser:!1}):Et(e);return~t.extra.classes.indexOf(xa)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}function ao(){return[].concat(N(da),N(ma))}function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var a=S.documentElement.classList,r=function(c){return a.add("".concat(mt,"-").concat(c))},n=function(c){return a.remove("".concat(mt,"-").concat(c))},o=m.autoFetchSvg?ao():Xt.concat(Object.keys(to));o.includes("fa")||o.push("fa");var i=[".".concat(xa,":not([").concat(B,"])")].concat(o.map(function(d){return".".concat(d,":not([").concat(B,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=Q(e.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=nt.begin("onTree"),u=s.reduce(function(d,c){try{var h=Wa(c);h&&d.push(h)}catch(v){ba||v.name==="MissingIcon"&&console.error(v)}return d},[]);return new Promise(function(d,c){Promise.all(u).then(function(h){Ra(h,function(){r("active"),r("complete"),n("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(h){l(),c(h)})})}function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wa(e).then(function(a){a&&Ra([a],t)})}function no(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:We(t||{}),n=a.mask;return n&&(n=(n||{}).icon?n:We(n||{})),e(r,f(f({},a),{},{mask:n}))}}var io=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,n=r===void 0?O:r,o=a.symbol,i=o===void 0?!1:o,s=a.mask,l=s===void 0?null:s,u=a.maskId,d=u===void 0?null:u,c=a.classes,h=c===void 0?[]:c,v=a.attributes,x=v===void 0?{}:v,y=a.styles,w=y===void 0?{}:y;if(t){var k=t.prefix,A=t.iconName,P=t.icon;return ke(f({type:"icon"},t),function(){return G("beforeDOMElementCreation",{iconDefinition:t,params:a}),rt({icons:{main:Ue(P),mask:l?Ue(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:k,iconName:A,transform:f(f({},O),n),symbol:i,maskId:d,extra:{attributes:x,styles:w,classes:h}})})}},oo={mixout:function(){return{icon:no(io)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=_t,a.nodeCallback=ro,a}}},provides:function(t){t.i2svg=function(a){var r=a.node,n=r===void 0?S:r,o=a.callback,i=o===void 0?function(){}:o;return _t(n,i)},t.generateSvgReplacementMutation=function(a,r){var n=r.iconName,o=r.prefix,i=r.transform,s=r.symbol,l=r.mask,u=r.maskId,d=r.extra;return new Promise(function(c,h){Promise.all([Ye(n,o),l.iconName?Ye(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=ye(v,2),y=x[0],w=x[1];c([a,rt({icons:{main:y,mask:w},prefix:o,iconName:n,transform:i,symbol:s,maskId:u,extra:d,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.transform,s=a.styles,l=xe(s);l.length>0&&(n.style=l);var u;return et(i)&&(u=Y("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:n}}}},so={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,o=n===void 0?[]:n;return ke({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(s){Array.isArray(s)?s.map(function(l){i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(N(o)).join(" ")},children:i}]})}}}},lo={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,o=n===void 0?[]:n,i=r.attributes,s=i===void 0?{}:i,l=r.styles,u=l===void 0?{}:l;return ke({type:"counter",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),zi({content:a.toString(),extra:{attributes:s,styles:u,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(N(o))}})})}}}},fo={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,o=n===void 0?O:n,i=r.classes,s=i===void 0?[]:i,l=r.attributes,u=l===void 0?{}:l,d=r.styles,c=d===void 0?{}:d;return ke({type:"text",content:a},function(){return G("beforeDOMElementCreation",{content:a,params:r}),wt({content:a,transform:f(f({},O),o),extra:{attributes:u,styles:c,classes:["".concat(m.cssPrefix,"-layers-text")].concat(N(s))}})})}}},provides:function(t){t.generateLayersText=function(a,r){var n=r.transform,o=r.extra,i=null,s=null;if(Gt){var l=parseInt(getComputedStyle(a).fontSize,10),u=a.getBoundingClientRect();i=u.width/l,s=u.height/l}return Promise.resolve([a,wt({content:a.innerHTML,width:i,height:s,transform:n,extra:o,watchable:!0})])}}},Ua=new RegExp('"',"ug"),Ct=[1105920,1112319],Ft=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Hr),Jn),Zr),Ge=Object.keys(Ft).reduce(function(e,t){return e[t.toLowerCase()]=Ft[t],e},{}),uo=Object.keys(Ge).reduce(function(e,t){var a=Ge[t];return e[t]=a[900]||N(Object.entries(a))[0][1],e},{});function co(e){var t=e.replace(Ua,"");return Pa(N(t)[0]||"")}function mo(e){var t=e.getPropertyValue("font-feature-settings").includes("ss01"),a=e.getPropertyValue("content"),r=a.replace(Ua,""),n=r.codePointAt(0),o=n>=Ct[0]&&n<=Ct[1],i=r.length===2?r[0]===r[1]:!1;return o||i||t}function vo(e,t){var a=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(t),n=isNaN(r)?"normal":r;return(Ge[a]||{})[n]||uo[a]}function Nt(e,t){var a="".concat(qn).concat(t.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(a)!==null)return r();var o=Q(e.children),i=o.filter(function(fe){return fe.getAttribute(Le)===t})[0],s=W.getComputedStyle(e,t),l=s.getPropertyValue("font-family"),u=l.match(ai),d=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(i&&!u)return e.removeChild(i),r();if(u&&c!=="none"&&c!==""){var h=s.getPropertyValue("content"),v=vo(l,d),x=co(h),y=u[0].startsWith("FontAwesome"),w=mo(s),k=at(v,x),A=k;if(y){var P=ki(x);P.iconName&&P.prefix&&(k=P.iconName,v=P.prefix)}if(k&&!w&&(!i||i.getAttribute(Je)!==v||i.getAttribute(qe)!==A)){e.setAttribute(a,A),i&&e.removeChild(i);var T=eo(),b=T.extra;b.attributes[Le]=t,Ye(k,v).then(function(fe){var Va=rt(f(f({},T),{},{icons:{main:fe,mask:La()},prefix:v,iconName:A,extra:b,watchable:!0})),Ae=S.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(Ae,e.firstChild):e.appendChild(Ae),Ae.outerHTML=Va.map(function(Xa){return le(Xa)}).join(`
`),e.removeAttribute(a),r()}).catch(n)}else r()}else r()})}function ho(e){return Promise.all([Nt(e,"::before"),Nt(e,"::after")])}function po(e){return e.parentNode!==document.head&&!~Zn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Le)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var go=function(t){return!!t&&ga.some(function(a){return t.includes(a)})},bo=function(t){if(!t)return[];var a=new Set,r=t.split(/,(?![^()]*\))/).map(function(l){return l.trim()});r=r.flatMap(function(l){return l.includes("(")?l:l.split(",").map(function(u){return u.trim()})});var n=me(r),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;if(go(i)){var s=ga.reduce(function(l,u){return l.replace(u,"")},i);s!==""&&s!=="*"&&a.add(s)}}}catch(l){n.e(l)}finally{n.f()}return a};function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(R){var a;if(t)a=e;else if(m.searchPseudoElementsFullScan)a=e.querySelectorAll("*");else{var r=new Set,n=me(document.styleSheets),o;try{for(n.s();!(o=n.n()).done;){var i=o.value;try{var s=me(i.cssRules),l;try{for(s.s();!(l=s.n()).done;){var u=l.value,d=bo(u.selectorText),c=me(d),h;try{for(c.s();!(h=c.n()).done;){var v=h.value;r.add(v)}}catch(y){c.e(y)}finally{c.f()}}}catch(y){s.e(y)}finally{s.f()}}catch(y){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(y.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(y){n.e(y)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{a=e.querySelectorAll(x)}catch{}}return new Promise(function(y,w){var k=Q(a).filter(po).map(ho),A=nt.begin("searchPseudoElements");za(),Promise.all(k).then(function(){A(),Be(),y()}).catch(function(){A(),Be(),w()})})}}var yo={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=jt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var r=a.node,n=r===void 0?S:r;m.searchPseudoElements&&jt(n)}}},Ot=!1,xo={mixout:function(){return{dom:{unwatch:function(){za(),Ot=!0}}}},hooks:function(){return{bootstrap:function(){Pt(ze("mutationObserverCallbacks",{}))},noAuto:function(){Ji()},watch:function(a){var r=a.observeMutationsRoot;Ot?Be():Pt(ze("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Tt=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,n){var o=n.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return r.flipX=!0,r;if(i&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(i){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},a)},So={mixout:function(){return{parse:{transform:function(a){return Tt(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-transform");return n&&(a.transform=Tt(n)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var r=a.main,n=a.transform,o=a.containerWidth,i=a.iconWidth,s={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),u="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(l," ").concat(u," ").concat(d)},h={transform:"translate(".concat(i/2*-1," -256)")},v={outer:s,inner:c,path:h};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),v.path)}]}]}}}},Ne={x:0,y:0,width:"100%",height:"100%"};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wo(e){return e.tag==="g"?e.children:[e]}var ko={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-mask"),o=n?we(n.split(" ").map(function(i){return i.trim()})):La();return o.prefix||(o.prefix=U()),a.mask=o,a.maskId=r.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var r=a.children,n=a.attributes,o=a.main,i=a.mask,s=a.maskId,l=a.transform,u=o.width,d=o.icon,c=i.width,h=i.icon,v=mi({transform:l,containerWidth:c,iconWidth:u}),x={tag:"rect",attributes:f(f({},Ne),{},{fill:"white"})},y=d.children?{children:d.children.map(Lt)}:{},w={tag:"g",attributes:f({},v.inner),children:[Lt(f({tag:d.tag,attributes:f(f({},d.attributes),v.path)},y))]},k={tag:"g",attributes:f({},v.outer),children:[w]},A="mask-".concat(s||ht()),P="clip-".concat(s||ht()),T={tag:"mask",attributes:f(f({},Ne),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:wo(h)},T]};return r.push(b,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(A,")")},Ne)}),{children:r,attributes:n}}}},Ao={provides:function(t){var a=!1;W.matchMedia&&(a=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=f(f({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:f(f({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},i),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Io={hooks:function(){return{parseNodeAttributes:function(a,r){var n=r.getAttribute("data-fa-symbol"),o=n===null?!1:n===""?!0:n;return a.symbol=o,a}}}},Po=[pi,oo,so,lo,fo,yo,xo,So,ko,Ao,Io];ji(Po,{mixoutsTo:_});_.noAuto;var ie=_.config;_.library;_.dom;var Ya=_.parse;_.findIconDefinition;_.toHtml;var Eo=_.icon;_.layer;_.text;_.counter;function _o(e){return e=e-0,e===e}function Ha(e){return _o(e)?e:(e=e.replace(/[_-]+(.)?/g,(t,a)=>a?a.toUpperCase():""),e.charAt(0).toLowerCase()+e.slice(1))}function Co(e){return e.charAt(0).toUpperCase()+e.slice(1)}var X=new Map,Fo=1e3;function No(e){if(X.has(e))return X.get(e);const t={};let a=0;const r=e.length;for(;a<r;){const n=e.indexOf(";",a),o=n===-1?r:n,i=e.slice(a,o).trim();if(i){const s=i.indexOf(":");if(s>0){const l=i.slice(0,s).trim(),u=i.slice(s+1).trim();if(l&&u){const d=Ha(l);t[d.startsWith("webkit")?Co(d):d]=u}}}a=o+1}if(X.size===Fo){const n=X.keys().next().value;n&&X.delete(n)}return X.set(e,t),t}function Ba(e,t,a={}){if(typeof t=="string")return t;const r=(t.children||[]).map(d=>Ba(e,d)),n=t.attributes||{},o={};for(const[d,c]of Object.entries(n))switch(!0){case d==="class":{o.className=c;break}case d==="style":{o.style=No(String(c));break}case d.startsWith("aria-"):case d.startsWith("data-"):{o[d.toLowerCase()]=c;break}default:o[Ha(d)]=c}const{style:i,role:s,"aria-label":l,...u}=a;return i&&(o.style=o.style?{...o.style,...i}:i),s&&(o.role=s),l&&(o["aria-label"]=l,o["aria-hidden"]="false"),e(t.tag,{...u,...o},...r)}var jo=Ba.bind(null,zt.createElement),Mt=(e,t)=>{const a=j.useId();return e||(t?a:void 0)},Oo=class{constructor(e="react-fontawesome"){this.enabled=!1;let t=!1;try{t=typeof process<"u"&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}},To="searchPseudoElementsFullScan"in ie?"7.0.0":"6.0.0",Lo=Number.parseInt(To)>=7,re="fa",L={beat:"fa-beat",fade:"fa-fade",beatFade:"fa-beat-fade",bounce:"fa-bounce",shake:"fa-shake",spin:"fa-spin",spinPulse:"fa-spin-pulse",spinReverse:"fa-spin-reverse",pulse:"fa-pulse"},Mo={left:"fa-pull-left",right:"fa-pull-right"},$o={90:"fa-rotate-90",180:"fa-rotate-180",270:"fa-rotate-270"},Do={"2xs":"fa-2xs",xs:"fa-xs",sm:"fa-sm",lg:"fa-lg",xl:"fa-xl","2xl":"fa-2xl","1x":"fa-1x","2x":"fa-2x","3x":"fa-3x","4x":"fa-4x","5x":"fa-5x","6x":"fa-6x","7x":"fa-7x","8x":"fa-8x","9x":"fa-9x","10x":"fa-10x"},M={border:"fa-border",fixedWidth:"fa-fw",flip:"fa-flip",flipHorizontal:"fa-flip-horizontal",flipVertical:"fa-flip-vertical",inverse:"fa-inverse",rotateBy:"fa-rotate-by",swapOpacity:"fa-swap-opacity",widthAuto:"fa-width-auto"};function Ro(e){const t=ie.cssPrefix||ie.familyPrefix||re;return t===re?e:e.replace(new RegExp(String.raw`(?<=^|\s)${re}-`,"g"),`${t}-`)}function zo(e){const{beat:t,fade:a,beatFade:r,bounce:n,shake:o,spin:i,spinPulse:s,spinReverse:l,pulse:u,fixedWidth:d,inverse:c,border:h,flip:v,size:x,rotation:y,pull:w,swapOpacity:k,rotateBy:A,widthAuto:P,className:T}=e,b=[];return T&&b.push(...T.split(" ")),t&&b.push(L.beat),a&&b.push(L.fade),r&&b.push(L.beatFade),n&&b.push(L.bounce),o&&b.push(L.shake),i&&b.push(L.spin),l&&b.push(L.spinReverse),s&&b.push(L.spinPulse),u&&b.push(L.pulse),d&&b.push(M.fixedWidth),c&&b.push(M.inverse),h&&b.push(M.border),v===!0&&b.push(M.flip),(v==="horizontal"||v==="both")&&b.push(M.flipHorizontal),(v==="vertical"||v==="both")&&b.push(M.flipVertical),x!=null&&b.push(Do[x]),y!=null&&y!==0&&b.push($o[y]),w!=null&&b.push(Mo[w]),k&&b.push(M.swapOpacity),Lo?(A&&b.push(M.rotateBy),P&&b.push(M.widthAuto),(ie.cssPrefix||ie.familyPrefix||re)===re?b:b.map(Ro)):b}var Wo=e=>typeof e=="object"&&"icon"in e&&!!e.icon;function $t(e){if(e)return Wo(e)?e:Ya.icon(e)}function Uo(e){return Object.keys(e)}var Dt=new Oo("FontAwesomeIcon"),Ga={border:!1,className:"",mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1},Yo=new Set(Object.keys(Ga)),Ve=zt.forwardRef((e,t)=>{const a={...Ga,...e},{icon:r,mask:n,symbol:o,title:i,titleId:s,maskId:l,transform:u}=a,d=Mt(l,!!n),c=Mt(s,!!i),h=$t(r);if(!h)return Dt.error("Icon lookup is undefined",r),null;const v=zo(a),x=typeof u=="string"?Ya.transform(u):u,y=$t(n),w=Eo(h,{...v.length>0&&{classes:v},...x&&{transform:x},...y&&{mask:y},symbol:o,title:i,titleId:c,maskId:d});if(!w)return Dt.error("Could not find icon",h),null;const{abstract:k}=w,A={ref:t};for(const P of Uo(a))Yo.has(P)||(A[P]=a[P]);return jo(k[0],A)});Ve.displayName="FontAwesomeIcon";/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Ho={prefix:"fab",iconName:"line",icon:[512,512,[],"f3c0","M311 196.8l0 81.3c0 2.1-1.6 3.7-3.7 3.7l-13 0c-1.3 0-2.4-.7-3-1.5L254 230 254 278.2c0 2.1-1.6 3.7-3.7 3.7l-13 0c-2.1 0-3.7-1.6-3.7-3.7l0-81.3c0-2.1 1.6-3.7 3.7-3.7l12.9 0c1.1 0 2.4 .6 3 1.6l37.3 50.3 0-48.2c0-2.1 1.6-3.7 3.7-3.7l13 0c2.1-.1 3.8 1.6 3.8 3.5l0 .1zm-93.7-3.7l-13 0c-2.1 0-3.7 1.6-3.7 3.7l0 81.3c0 2.1 1.6 3.7 3.7 3.7l13 0c2.1 0 3.7-1.6 3.7-3.7l0-81.3c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1l-35.6 0 0-64.4c0-2.1-1.6-3.7-3.7-3.7l-13 0c-2.1 0-3.7 1.6-3.7 3.7l0 81.3c0 1 .3 1.8 1 2.5 .7 .6 1.5 1 2.5 1l52.2 0c2.1 0 3.7-1.6 3.7-3.7l0-13c0-1.9-1.6-3.7-3.5-3.7l.1 0zm193.7-68.1l-52.3 0c-1.9 0-3.7 1.6-3.7 3.7l0 81.3c0 1.9 1.6 3.7 3.7 3.7l52.2 0c2.1 0 3.7-1.6 3.7-3.7l0-13.1c0-2.1-1.6-3.7-3.7-3.7l-35.5 0 0-13.6 35.5 0c2.1 0 3.7-1.6 3.7-3.7l0-13.1c0-2.1-1.6-3.7-3.7-3.7l-35.5 0 0-13.7 35.5 0c2.1 0 3.7-1.6 3.7-3.7l0-13c-.1-1.9-1.7-3.7-3.7-3.7l.1 0zM512 93.4l0 326c-.1 51.2-42.1 92.7-93.4 92.6l-326 0C41.4 511.9-.1 469.8 0 418.6l0-326C.1 41.4 42.2-.1 93.4 0l326 0c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3S68.8 150.1 68.8 233.5c0 74.7 66.3 137.4 155.9 149.3 21.8 4.7 19.3 12.7 14.4 42.1-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1l0-.2z"]},Bo={prefix:"fab",iconName:"facebook-messenger",icon:[512,512,[],"f39f","M256.6 8c-140 0-248.6 102.3-248.6 240.6 0 72.3 29.7 134.8 78.1 177.9 8.3 7.5 6.6 11.9 8 58.2 .1 3.2 1 6.4 2.6 9.2s3.9 5.2 6.7 6.9 5.9 2.8 9.1 3 6.5-.3 9.5-1.6C174.9 479 175.6 477.2 184.6 479.6 337.8 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zM405.8 193.1l-73 115.6c-2.8 4.3-6.4 8.1-10.6 11s-9.1 4.8-14.1 5.8-10.3 .8-15.3-.4-9.7-3.4-13.8-6.4l-58.1-43.5c-2.6-1.9-5.8-3-9-3s-6.4 1.1-9 3l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6c2.8-4.3 6.4-8.1 10.6-11s9.1-4.8 14.1-5.8 10.3-.8 15.3 .4 9.7 3.4 13.9 6.4l58.1 43.5c2.6 1.9 5.8 3 9 3s6.4-1.1 9-3l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z"]};const Go=e=>j.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"icon icon-tabler icons-tabler-outline icon-tabler-mail",...e},j.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),j.createElement("path",{d:"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"}),j.createElement("path",{d:"M3 7l9 6l9 -6"})),Vo={IconMail:g.jsx(Go,{}),LINE:g.jsx(Ve,{icon:Ho}),Messenger:g.jsx(Ve,{icon:Bo})};function Xo(){return g.jsx("div",{className:ue.contactLinksContainer,children:Wt.map(e=>g.jsxs("a",{href:e.contactUrl,className:ue.linkItem,target:"_blank",rel:"noopener noreferrer",children:[g.jsx("div",{className:ue.iconWrapper,children:Vo[e.icon]}),g.jsx("span",{className:ue.contactName,children:e.contactName})]},e.id))})}const Ko="_formContainer_1lm9k_4",Jo="_formSubtitle_1lm9k_42",qo="_formGroup_1lm9k_56",Qo="_label_1lm9k_60",Zo="_input_1lm9k_67",es="_textarea_1lm9k_68",ts="_submitButton_1lm9k_95",as="_statusMessage_1lm9k_141",rs="_success_1lm9k_148",ns="_error_1lm9k_153",I={formContainer:Ko,formSubtitle:Jo,formGroup:qo,label:Qo,input:Zo,textarea:es,submitButton:ts,statusMessage:as,success:rs,error:ns};function is(){const[e,t]=j.useState({name:"",email:"",message:""}),[a,r]=j.useState("idle"),[n,o]=j.useState(""),i=j.useRef(null),s=c=>{const{name:h,value:v}=c.target;t(x=>({...x,[h]:v}))},l=async c=>{var h,v;if(c.preventDefault(),!n){alert("請完成 CAPTCHA 驗證。");return}r("sending");try{if(!(await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...e,token:n})})).ok)throw new Error("Network response was not ok");r("success"),t({name:"",email:"",message:""}),(h=i.current)==null||h.reset()}catch(x){console.error("Form submission error:",x),r("error"),(v=i.current)==null||v.reset()}};j.useEffect(()=>{if(a==="success"||a==="error"){const c=setTimeout(()=>{r("idle")},2e3);return()=>clearTimeout(c)}},[a]);const u=Wt.find(c=>c.id==="contact-mail"),d=u?u.contactUrl.replace("mailto:",""):"";return g.jsxs("div",{className:I.formContainer,children:[g.jsxs("p",{className:I.formSubtitle,children:[C.formSubtitle,g.jsx("a",{href:`mailto:${d}`,children:d})]}),g.jsxs("form",{onSubmit:l,className:I.form,children:[g.jsxs("div",{className:I.formGroup,children:[g.jsx("label",{htmlFor:"name",className:I.label,children:C.nameLabel}),g.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:s,placeholder:C.namePlaceholder,className:I.input,required:!0,disabled:a==="sending"})]}),g.jsxs("div",{className:I.formGroup,children:[g.jsx("label",{htmlFor:"email",className:I.label,children:C.emailLabel}),g.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:s,placeholder:C.emailPlaceholder,className:I.input,required:!0,disabled:a==="sending"})]}),g.jsxs("div",{className:I.formGroup,children:[g.jsx("label",{htmlFor:"message",className:I.label,children:C.messageLabel}),g.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:s,placeholder:C.messagePlaceholder,className:I.textarea,required:!0,disabled:a==="sending"})]}),g.jsx(Qa,{ref:i,sitekey:"1x00000000000000000000AA",onVerify:c=>o(c)}),g.jsx("button",{type:"submit",className:I.submitButton,disabled:a==="sending"||!n,children:a==="sending"?C.statusMessage.sending:C.submitButtonText}),a==="sending"&&g.jsx("p",{className:`${I.statusMessage} ${I.sending}`,children:C.statusMessage.sending}),a==="success"&&g.jsx("p",{className:`${I.statusMessage} ${I.success}`,children:C.statusMessage.success}),a==="error"&&g.jsx("p",{className:`${I.statusMessage} ${I.error}`,children:C.statusMessage.error})]})]})}const os="_dividerContainer_1givu_4",ss={dividerContainer:os};function ls(){return g.jsx("div",{className:ss.dividerContainer})}function vs(){const{title:e,description:t}=Rt.pages.contact;return g.jsxs("div",{className:z.pageWrapper,children:[g.jsx(Ka,{title:e,description:t}),g.jsx(Ja,{title:Z.titleLine1}),g.jsxs(qa,{color:"lightGreen",className:z.growingSection,children:[g.jsxs("div",{className:z.contactSection,children:[g.jsxs("div",{className:z.contactTextWrap,children:[g.jsx("h2",{className:z.title,children:Z.titleLine2}),g.jsx("p",{className:z.paragraph,children:Z.paragraph}),g.jsx(Xo,{})]}),g.jsx("div",{className:z.contactImageWrap,children:g.jsx("img",{src:Z.imageUrl,alt:Z.imageAlt,className:z.contactImage})})]}),g.jsx(ls,{}),g.jsx(is,{})]})]})}export{vs as default};
