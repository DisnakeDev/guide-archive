"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[519],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var s=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=s.createContext({}),d=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,v=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return r?s.createElement(v,i(i({ref:t},l),{},{components:r})):s.createElement(v,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<n;d++)i[d]=r[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var s=r(7462),a=(r(7294),r(3905));const n={slug:"/popular-topics",hide_table_of_contents:!0,description:"This section covers several Discord client and gateway features extensively, including their methods and various use-cases."},i="Popular Topics",o={unversionedId:"popular-topics/intro",id:"popular-topics/intro",title:"Popular Topics",description:"This section covers several Discord client and gateway features extensively, including their methods and various use-cases.",source:"@site/docs/popular-topics/intro.mdx",sourceDirName:"popular-topics",slug:"/popular-topics",permalink:"/popular-topics",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/popular-topics/intro.mdx",tags:[],version:"current",lastUpdatedBy:"shiftinv",lastUpdatedAt:1735485371,formattedLastUpdatedAt:"Dec 29, 2024",frontMatter:{slug:"/popular-topics",hide_table_of_contents:!0,description:"This section covers several Discord client and gateway features extensively, including their methods and various use-cases."},sidebar:"guideSidebar",previous:{title:"Modals & Text Inputs",permalink:"/interactions/modals"},next:{title:"Threads",permalink:"/popular-topics/threads"}},c={},d=[{value:"Resulting Code",id:"resulting-code",level:2}],l=(p="ResultingCode",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"popular-topics"},"Popular Topics"),(0,a.kt)("p",null,"This section covers several Discord client and gateway features extensively, including their methods and various\nuse-cases."),(0,a.kt)("div",{class:"container"},(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col padding-vert--md"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image"},(0,a.kt)("a",{href:"/popular-topics/threads"},(0,a.kt)("img",{src:r(9449).Z,alt:"Threads Intro Image"}))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("a",{href:"/popular-topics/threads"},(0,a.kt)("h3",null,"Threads")),(0,a.kt)("div",null,"Think of them as sub-channels inside a channel.")))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"col padding-vert--md"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image"},(0,a.kt)("a",{href:"/popular-topics/embeds"},(0,a.kt)("img",{src:r(4758).Z,alt:"Embeds Intro Image"}))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("a",{href:"/popular-topics/embeds"},(0,a.kt)("h3",null,"Embeds")),(0,a.kt)("div",null,"Present your content in an organized format.")))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"col padding-vert--md"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image"},(0,a.kt)("a",{href:"/popular-topics/reactions"},(0,a.kt)("img",{src:r(9128).Z,alt:"Reactions Intro Image"}))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("a",{href:"/popular-topics/reactions"},(0,a.kt)("h3",null,"Reactions")),(0,a.kt)("div",null,"Create polls, paginate your commands, and more."))))),(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col padding-vert--md"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image"},(0,a.kt)("a",{href:"/popular-topics/webhooks"},(0,a.kt)("img",{src:r(42).Z,alt:"Webhooks Intro Image"}))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("a",{href:"/popular-topics/webhooks"},(0,a.kt)("h3",null,"Webhooks")),(0,a.kt)("div",null,"Send messages in a text channel without a bot user.")))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"col padding-vert--md"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image"},(0,a.kt)("a",{href:"/popular-topics/permissions"},(0,a.kt)("img",{src:r(4780).Z,alt:"Permissions Intro Image"}))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("a",{href:"/popular-topics/permissions"},(0,a.kt)("h3",null,"Permissions")),(0,a.kt)("div",null,"Understand and utilize the permission system.")))),(0,a.kt)("br",null),(0,a.kt)("div",{class:"col padding-vert--md"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image"},(0,a.kt)("a",{href:"/popular-topics/intents"},(0,a.kt)("img",{src:r(4370).Z,alt:"Intents Intro Image"}))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("a",{href:"/popular-topics/intents"},(0,a.kt)("h3",null,"Gateway Intents")),(0,a.kt)("div",null,"Learn how intents limit your bot's functions.")))))),(0,a.kt)("h2",{id:"resulting-code"},"Resulting Code"),(0,a.kt)(l,{mdxType:"ResultingCode"}))}m.isMDXComponent=!0},4758:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/embeds-intro-10cc28860d2894718184379a8a20ec79.png"},4370:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/intents-intro-6b3d19ceb3b38c4f789df9cfc9674b02.png"},4780:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/permissions-intro-a2cd48c3283f8e5b14c8e468b9b81ec9.png"},9128:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/reactions-intro-8619603d74bb3e293d2476feb506d20d.png"},9449:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/threads-intro-1f80faaebaaa23a1b0d6bbedd9b89502.png"},42:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/webhooks-intro-f954c2cf98834b1b5243dbf8f074978e.png"}}]);