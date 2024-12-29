"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1028:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={description:"A short article on how to create an application for your Discord bot.",keywords:["disnake","bot","guide","tutorial","create","application","python"]},r="Creating your application",s={unversionedId:"prerequisites/creating-your-application",id:"prerequisites/creating-your-application",title:"Creating your application",description:"A short article on how to create an application for your Discord bot.",source:"@site/docs/prerequisites/creating-your-application.mdx",sourceDirName:"prerequisites",slug:"/prerequisites/creating-your-application",permalink:"/prerequisites/creating-your-application",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/prerequisites/creating-your-application.mdx",tags:[],version:"current",lastUpdatedBy:"shiftinv",lastUpdatedAt:1735485371,formattedLastUpdatedAt:"Dec 29, 2024",frontMatter:{description:"A short article on how to create an application for your Discord bot.",keywords:["disnake","bot","guide","tutorial","create","application","python"]},sidebar:"guideSidebar",previous:{title:"Migrating from discord.py",permalink:"/prerequisites/migrating-from-dpy"},next:{title:"Initial files",permalink:"/getting-started/initial-files"}},l={},p=[{value:"Creating a bot account",id:"creating-a-bot-account",level:2},{value:"Regarding bot tokens",id:"regarding-bot-tokens",level:2},{value:"What is a token, anyway?",id:"what-is-a-token-anyway",level:3},{value:"Token leak scenario",id:"token-leak-scenario",level:3},{value:"Discord&#39;s system messages",id:"discords-system-messages",level:3},{value:"Inviting your bot",id:"inviting-your-bot",level:2}],c=(u="DocsLink",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:p};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-your-application"},"Creating your application"),(0,o.kt)("p",null,"The steps mentioned further in this markdown are essentially a copy of the steps\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.disnake.dev/en/stable/discord.html"},"mentioned in the documentation"),". Therefore, you can follow the steps\nfrom either resource."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you have already made your bot application, you can skip this document and move on to\n",(0,o.kt)("a",{parentName:"p",href:"/getting-started/initial-files"},(0,o.kt)("inlineCode",{parentName:"a"},"initial-files")),".")),(0,o.kt)("h2",{id:"creating-a-bot-account"},"Creating a bot account"),(0,o.kt)("p",null,"In order to work with the library and the Discord API in general, we must first create a Discord Bot account."),(0,o.kt)("p",null,"Creating a Bot account is a pretty straightforward process."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure you're logged on to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.discord.com"},"Discord website"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"application page"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"New Application")," button."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(520).Z,alt:"New Application button",width:"40%"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Give the application a name and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Create"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(5125).Z,alt:"Create Application modal",width:"60%"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bot")," tab. A bot account is added automatically when the application is created.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"Public Bot")," is ticked if you want others to invite your bot."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(2521).Z,alt:"New Bot",width:"75%"})),(0,o.kt)("br",null),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You should also make sure that ",(0,o.kt)("inlineCode",{parentName:"li"},"Require OAuth2 Code Grant")," is unchecked unless you are developing a service that\nneeds it. If you're unsure, then ",(0,o.kt)("strong",{parentName:"li"},"leave it unchecked"),"."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the token by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset Token")," and then using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy")," button."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(4979).Z,alt:"Copy Token",width:"75%"})),(0,o.kt)("br",null),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Click "Yes, do it!" when asked.'),(0,o.kt)("li",{parentName:"ul"},"This is ",(0,o.kt)("strong",{parentName:"li"},"not")," the Client Secret at the General Information page.")))),(0,o.kt)("p",null,"And that's it. You now have a bot account and you can login with that token."),(0,o.kt)("h2",{id:"regarding-bot-tokens"},"Regarding bot tokens"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This section is critical, so pay close attention. It explains what your bot token is, as well as the security aspects of\nit.")),(0,o.kt)("h3",{id:"what-is-a-token-anyway"},"What is a token, anyway?"),(0,o.kt)("p",null,"It should be worth noting that the token is ",(0,o.kt)("strong",{parentName:"p"},"essentially your bot's password"),". You should ",(0,o.kt)("strong",{parentName:"p"},"never")," share this with\nsomeone else. In doing so, someone can log in to your bot and do malicious things, such as leaving servers, ban all\nmembers inside a server, or pinging everyone maliciously."),(0,o.kt)("p",null,"Tokens look like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"OTA4MjgxMjk4NTU1MTA5Mzk2.YYzc4A.TB7Ng6DOnVDlpMS4idjGptsreFg")," (don't worry, we immediately reset\nthis token before even posting it here!). If it's any shorter and looks more like this:\n",(0,o.kt)("inlineCode",{parentName:"p"},"CR8UbizwLgyES9LuHK7eIrXHbRTuqoEs"),", you copied your client secret instead. Make sure to copy the token if you want your\nbot to work!"),(0,o.kt)("h3",{id:"token-leak-scenario"},"Token leak scenario"),(0,o.kt)("p",null,"Let's imagine that you have a bot on over 1,000 servers, and it took you many, many months of coding and patience to get\nit on that amount. Your token gets leaked somewhere, and now someone else has it. That person can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spam every server your bot is on;"),(0,o.kt)("li",{parentName:"ul"},"DM spam as many users as possible;"),(0,o.kt)("li",{parentName:"ul"},"Delete as many channels as possible;"),(0,o.kt)("li",{parentName:"ul"},"Kick or ban as many server members as possible;"),(0,o.kt)("li",{parentName:"ul"},"Make your bot leave all of the servers it has joined;"),(0,o.kt)("li",{parentName:"ul"},"Access and damage the underlying infrastructure (your server).")),(0,o.kt)("p",null,"All that and much, much more. Sounds pretty terrible, right? So make sure to keep your token as safe as possible! In the\n",(0,o.kt)("a",{parentName:"p",href:"/getting-started/initial-files"},"initial files")," page of the guide, we cover how to safely store your token in a\nconfiguration file."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you accidentally leaked your token, click the \u201cRegenerate\u201d button as soon as possible. This revokes your old token\nand re-generates a new one. Now you need to use the new token to login.")),(0,o.kt)("h3",{id:"discords-system-messages"},"Discord's system messages"),(0,o.kt)("p",null,"System messages are official messages that Discord sends to alert you of an account issue. These messages can range from\na variety of payment issues, support ticket updates, and ToS violation warnings. You can also expect a system message if\nyour bot token has been posted on the internet publicly, and was found by Discord."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Such a message will look as follows:")),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(3293).Z,alt:"System message",width:"90%"})),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Since we do not know the extent to which Discord searches for bot tokens, or the time taken to inform the user about\nwhere the bot was found, we recommend not fully depending on this feature. But incase your bot token ",(0,o.kt)("em",{parentName:"p"},"is")," found on the\ninternet publicly (say, on ",(0,o.kt)("a",{parentName:"p",href:"https://www.github.com/"},"a GitHub repository"),"), you can expect Discord to send a system\nmessage to the account the bot is linked to.")),(0,o.kt)("p",null,"Note that Discord will never ask for your password or account token, and a system message will never request for the\nsame. System messages from Discord will have a verified ",(0,o.kt)("inlineCode",{parentName:"p"},"SYSTEM"),' tag, and the bar at the bottom of the DM will mention -\n"This thread is reserved for official Discord notifications".'),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(7479).Z,alt:"System DM",width:"50%"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can read more about the authenticity of these messages ",(0,o.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/360036118732-Discord-System-Messages"},"in this article"),"."),(0,o.kt)("h2",{id:"inviting-your-bot"},"Inviting your bot"),(0,o.kt)("p",null,"So, you've made the bot account, but it is not actually in any server. If you want to invite your bot you must create an\ninvite URL for it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure you're logged on to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.discord.com"},"Discord website"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"application page"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on your bot's page.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2")," tab."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(1367).Z,alt:"OAuth2 Page",width:"100%"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tick the ",(0,o.kt)("inlineCode",{parentName:"p"},"bot")," checkbox under ",(0,o.kt)("inlineCode",{parentName:"p"},"scopes"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(7417).Z,alt:"OAuth2 Scope",width:"100%"})),(0,o.kt)("br",null),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you would like to integrate slash commands and other interactions into your bot, make sure to check the\n",(0,o.kt)("inlineCode",{parentName:"li"},"applications.commands")," scope as well.")),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(4049).Z,alt:"OAuth2 Application Commands",width:"100%"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tick the permissions required for your bot to function under ",(0,o.kt)("inlineCode",{parentName:"p"},"Bot Permissions"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please be aware of the consequences of requiring your bot to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"Administrator")," permission.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bot owners must have 2FA enabled for certain actions and permissions when added in servers that have Server-Wide\n2FA enabled. Check the ",(0,o.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Two-Factor-Authentication"},"2FA support page")," for more information."))),(0,o.kt)("br",null),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:n(2884).Z,alt:"OAuth2 Permissions",width:"100%"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now the resulting URL can be used to add your bot to a server. Copy and paste the URL into your browser, choose a\nserver to invite the bot to, and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorize"),"."),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'The person adding the bot needs "Manage Server" permissions to do so.')))),(0,o.kt)("p",null,"If you want to generate this URL dynamically at run-time inside your bot and using the ",(0,o.kt)(c,{reference:"disnake.Permissions",mdxType:"DocsLink"})," interface, you can use ",(0,o.kt)(c,{reference:"disnake.utils.oauth_url",mdxType:"DocsLink"}),"."))}m.isMDXComponent=!0},5125:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/application-name-2dc00f6df6af7b2a1e2cd9b7050cddca.png"},4979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/copy-token-f40b7e8ed98ebe4f5a812b30508c4a69.png"},520:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-application-ca2363c9dbc663b4f93a9ee7e7496b54.png"},2521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-bot-28e1f5e7cd6d36d88e0e1d46be52daa1.png"},4049:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oauth-application-commands-196c983e665cefc3911a8e088dd686a4.png"},1367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oauth-page-157c9587de3e29550a210ce6ce3583e5.png"},2884:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oauth-permissions-3a5e5a1710b1f2527c2e7442abc955af.png"},7417:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oauth-scopes-5bfc1867992aa7bd16740ba1009d55de.png"},7479:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/system-dm-f4f272b537466bb49f2f352f8648fe07.png"},3293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/system-message-9fab7df006295e71e38c25e0b8f0ff8e.png"}}]);