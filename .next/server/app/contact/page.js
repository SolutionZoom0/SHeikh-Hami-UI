(()=>{var e={};e.id=327,e.ids=[327],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2961:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(3483),s(7764),s(5866);var a=s(3191),r=s(8716),n=s(7922),o=s.n(n),i=s(5231),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);s.d(t,l);let c=["",{children:["contact",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,3483)),"C:\\Work\\Projects\\React\\sheikh-hami\\bentofolio\\app\\contact\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,7764)),"C:\\Work\\Projects\\React\\sheikh-hami\\bentofolio\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Work\\Projects\\React\\sheikh-hami\\bentofolio\\app\\contact\\page.js"],m="/contact/page",u={require:s,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/contact/page",pathname:"/contact",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},5786:(e,t,s)=>{Promise.resolve().then(s.bind(s,8001)),Promise.resolve().then(s.bind(s,786)),Promise.resolve().then(s.bind(s,6140)),Promise.resolve().then(s.bind(s,4392)),Promise.resolve().then(s.bind(s,2143))},8001:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(326);let r={_origin:"https://api.emailjs.com"},n=(e,t,s)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}let i=(e,t,s={})=>new Promise((a,n)=>{let i=new XMLHttpRequest;i.addEventListener("load",({target:e})=>{let t=new o(e);200===t.status||"OK"===t.text?a(t):n(t)}),i.addEventListener("error",({target:e})=>{n(new o(e))}),i.open("POST",r._origin+e,!0),Object.keys(s).forEach(e=>{i.setRequestHeader(e,s[e])}),i.send(t)}),l={send:(e,t,s,a)=>{let o=a||r._userID;return n(o,e,t),i("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:o,service_id:e,template_id:t,template_params:s}),{"Content-type":"application/json"})}};var c=s(7577);let d=()=>{let[e,t]=(0,c.useState)({name:"",email:"",budget:"",subject:"",message:"",template:"bentofolio tailwind react"}),{name:s,email:r,budget:n,subject:o,message:i,template:d}=e,[m,u]=(0,c.useState)(null),[h,p]=(0,c.useState)(null),x=s=>t({...e,[s.target.name]:s.target.value}),j=a=>{a.preventDefault(),console.log(e),0===s.length||0===r.length||0===n.length||0===o.length||0===i.length?(p(!0),u(!0),g()):l.send("service_gsps4gw","template_evezi69",e,"Q3pccdLZhU-mZT7tQ").then(e=>{u(!1),g(),p(!1),t({name:"",email:"",message:"",subject:"",budget:"",template:"Bentofolio react"})},e=>{console.log(e.text)})},g=()=>{setTimeout(()=>{u(null)},2e3)};return a.jsx("div",{className:"leave-comments-area",children:(0,a.jsxs)("div",{className:"comments-box",children:[a.jsx("form",{onSubmit:e=>j(e),id:"contact-form",children:(0,a.jsxs)("div",{className:"row gx-3",children:[a.jsx("div",{className:"col-md-6",children:(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"form-label",children:"Name"}),a.jsx("input",{name:"name",onChange:e=>x(e),value:s,required:"",type:"text",className:"form-control shadow-none",placeholder:"Enter your name"})]})}),a.jsx("div",{className:"col-md-6",children:(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"form-label",children:"Email"}),a.jsx("input",{name:"email",onChange:e=>x(e),value:r,required:"",type:"email",className:"form-control shadow-none",placeholder:"Enter your email"})]})}),a.jsx("div",{className:"col-md-6",children:(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"form-label",children:"Subject"}),a.jsx("input",{name:"subject",onChange:e=>x(e),value:o,required:"",type:"text",className:"form-control shadow-none",placeholder:"Subject"})]})}),a.jsx("div",{className:"col-md-6",children:(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"form-label",children:"Budget"}),(0,a.jsxs)("select",{name:"budget",onChange:e=>x(e),value:n,required:"",className:"form-select shadow-none",defaultValue:"select",children:[a.jsx("option",{disabled:!0,value:"select",children:"Select budget..."}),a.jsx("option",{value:"$5000",children:"$5000"}),a.jsx("option",{value:"$5000 - $1000",children:"$5000 - $10000"}),a.jsx("option",{value:"$10000 - $2000",children:"$10000 - $20000"}),a.jsx("option",{value:"$20000",children:"$20000+"})]})]})}),a.jsx("div",{className:"col-md-12",children:(0,a.jsxs)("div",{className:"mb-4",children:[a.jsx("label",{className:"form-label",children:"Comment"}),a.jsx("textarea",{name:"message",onChange:e=>x(e),value:i,className:"form-control shadow-none",rows:4,placeholder:"Type details about your inquiry"})]})}),a.jsx("div",{className:"col-md-12",children:(0,a.jsxs)("button",{className:"submit-btn",type:"submit",children:["Send Message",(0,a.jsxs)("svg",{className:"icon",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M17.5 11.6665V6.6665H12.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M17.5 6.6665L10 14.1665L2.5 6.6665",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]})}),a.jsx("p",{className:`ajax-response mb-0 ${m?"error":"success"}`,style:{display:null==m?"none":"block"},children:m?"Please complete the form and try again.":"Thank You! Your message has been sent."})]})})}},786:(e,t,s)=>{"use strict";s.d(t,{default:()=>o});var a=s(326),r=s(7577),n=s(7250);let o=()=>{let[e,t]=(0,r.useState)("collapse1");return(0,a.jsxs)("div",{className:"frequently-asked-questions",children:[a.jsx("h2",{className:"main-common-title",children:"Frequently Asked Questions"}),a.jsx("div",{className:"frequently-asked-questions-main",children:a.jsx(n.Z,{className:"accordion",defaultActiveKey:e,children:[{id:1,title:"What does a product designer need to know?"},{id:2,title:"What does a product designer need to know?"},{id:3,title:"What does a product designer need to know?"},{id:4,title:"What does a product designer need to know?"},{id:5,title:"What does a product designer need to know?"}].map(s=>(0,a.jsxs)("div",{className:"accordion-item",children:[a.jsx("h4",{className:"accordion-header",children:(0,a.jsxs)(n.Z.Toggle,{as:"button",className:`accordion-button ${`collapse${s.id}`==e?"":"collapsed"}`,eventKey:`collapse${s.id}`,onClick:()=>t(e==`collapse${s.id}`?null:`collapse${s.id}`),children:["What does a product designer need to know?",a.jsx("span",{className:"ms-auto",children:(0,a.jsxs)("span",{className:"icon ms-4",children:[a.jsx("img",{className:"icon-plus",src:"assets/img/icons/plus.svg",alt:"plus"}),a.jsx("img",{className:"icon-minus d-none",src:"assets/img/icons/minus.svg",alt:"minus"})]})})]})}),a.jsx(n.Z.Collapse,{eventKey:`collapse${s.id}`,children:a.jsx("div",{className:"accordion-body",children:a.jsx("p",{children:"I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."})})})]},s.id))})})]})}},3483:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(9510),r=s(8570);let n=(0,r.createProxy)(String.raw`C:\Work\Projects\React\sheikh-hami\bentofolio\components\ContactForm.js`),{__esModule:o,$$typeof:i}=n;n.default;let l=(0,r.createProxy)(String.raw`C:\Work\Projects\React\sheikh-hami\bentofolio\components\ContactForm.js#default`);var c=s(1665),d=s(1839);let m=()=>a.jsx(d.Z,{children:a.jsx("div",{className:"col-xl-8",children:a.jsx("div",{className:"card content-box-card",children:(0,a.jsxs)("div",{className:"card-body portfolio-card contact-card",children:[a.jsx("div",{className:"top-info",children:(0,a.jsxs)("div",{className:"text",children:[(0,a.jsxs)("h1",{className:"main-title",children:["Let's \uD83D\uDC4B ",a.jsx("span",{children:"Work"})," Together"]}),a.jsx("p",{children:"I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."})]})}),(0,a.jsxs)("div",{className:"contact-area",children:[a.jsx(l,{}),a.jsx("div",{className:"contact-map-area",children:a.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280012016!2d-74.14448732737499!3d40.69763123331177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1711832776336!5m2!1sen!2sbd",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),a.jsx(c.ZP,{})]})]})})})})},1665:(e,t,s)=>{"use strict";s.d(t,{ZP:()=>i});var a=s(8570);let r=(0,a.createProxy)(String.raw`C:\Work\Projects\React\sheikh-hami\bentofolio\components\Faq.js`),{__esModule:n,$$typeof:o}=r;r.default;let i=(0,a.createProxy)(String.raw`C:\Work\Projects\React\sheikh-hami\bentofolio\components\Faq.js#default`)},8029:(e,t)=>{var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];s&&(e=n(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var s in e)a.call(e,s)&&e[s]&&(t=n(t,s));return t}(s)))}return e}function n(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0!==(s=(function(){return r}).apply(t,[]))&&(e.exports=s)}()}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,471,697,250,780],()=>s(2961));module.exports=a})();