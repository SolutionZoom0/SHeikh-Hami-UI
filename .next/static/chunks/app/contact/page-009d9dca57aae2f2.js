(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{4012:function(e,s,t){Promise.resolve().then(t.bind(t,1760)),Promise.resolve().then(t.bind(t,4011)),Promise.resolve().then(t.bind(t,4463)),Promise.resolve().then(t.bind(t,1430)),Promise.resolve().then(t.bind(t,4135))},1760:function(e,s,t){"use strict";t.d(s,{default:function(){return d}});var n=t(7437);let a={_origin:"https://api.emailjs.com"},i=(e,s,t)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!s)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}let r=(e,s,t={})=>new Promise((n,i)=>{let r=new XMLHttpRequest;r.addEventListener("load",({target:e})=>{let s=new o(e);200===s.status||"OK"===s.text?n(s):i(s)}),r.addEventListener("error",({target:e})=>{i(new o(e))}),r.open("POST",a._origin+e,!0),Object.keys(t).forEach(e=>{r.setRequestHeader(e,t[e])}),r.send(s)});var l={send:(e,s,t,n)=>{let o=n||a._userID;return i(o,e,s),r("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:o,service_id:e,template_id:s,template_params:t}),{"Content-type":"application/json"})}},c=t(2265),d=()=>{let[e,s]=(0,c.useState)({name:"",email:"",budget:"",subject:"",message:"",template:"bentofolio tailwind react"}),{name:t,email:a,budget:i,subject:o,message:r,template:d}=e,[m,u]=(0,c.useState)(null),[h,p]=(0,c.useState)(null),g=t=>s({...e,[t.target.name]:t.target.value}),j=n=>{n.preventDefault(),console.log(e),0===t.length||0===a.length||0===i.length||0===o.length||0===r.length?(p(!0),u(!0),v()):l.send("service_gsps4gw","template_evezi69",e,"Q3pccdLZhU-mZT7tQ").then(e=>{u(!1),v(),p(!1),s({name:"",email:"",message:"",subject:"",budget:"",template:"Bentofolio react"})},e=>{console.log(e.text)})},v=()=>{setTimeout(()=>{u(null)},2e3)};return(0,n.jsx)("div",{className:"leave-comments-area",children:(0,n.jsxs)("div",{className:"comments-box",children:[(0,n.jsx)("form",{onSubmit:e=>j(e),id:"contact-form",children:(0,n.jsxs)("div",{className:"row gx-3",children:[(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"form-label",children:"Name"}),(0,n.jsx)("input",{name:"name",onChange:e=>g(e),value:t,required:"",type:"text",className:"form-control shadow-none",placeholder:"Enter your name"})]})}),(0,n.jsx)("div",{className:"col-md-6",children:(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"form-label",children:"Email"}),(0,n.jsx)("input",{name:"email",onChange:e=>g(e),value:a,required:"",type:"email",className:"form-control shadow-none",placeholder:"Enter your email"})]})}),(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"form-label",children:"Subject"}),(0,n.jsx)("input",{name:"subject",onChange:e=>g(e),value:o,required:"",type:"text",className:"form-control shadow-none",placeholder:"Subject"})]})}),(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"form-label",children:"Question"}),(0,n.jsx)("textarea",{name:"message",onChange:e=>g(e),value:r,className:"form-control shadow-none",rows:4,placeholder:"Type details about your question"})]})}),(0,n.jsx)("div",{className:"col-md-12",children:(0,n.jsxs)("button",{className:"submit-btn",type:"submit",children:["Ask Al-Sheikh",(0,n.jsxs)("svg",{className:"icon",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M17.5 11.6665V6.6665H12.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,n.jsx)("path",{d:"M17.5 6.6665L10 14.1665L2.5 6.6665",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})]})}),(0,n.jsx)("p",{className:"ajax-response mb-0 ".concat(m?"error":"success"),style:{display:null==m?"none":"block"},children:m?"Please complete the form and try again.":"Thank You! Your message has been sent."})]})})}},4011:function(e,s,t){"use strict";t.r(s);var n=t(7437),a=t(2265),i=t(3024);s.default=()=>{let[e,s]=(0,a.useState)("collapse1");return(0,n.jsxs)("div",{className:"frequently-asked-questions",children:[(0,n.jsx)("h2",{className:"main-common-title",children:"Frequently Asked Questions"}),(0,n.jsx)("div",{className:"frequently-asked-questions-main",children:(0,n.jsx)(i.Z,{className:"accordion",defaultActiveKey:e,children:[{id:1,title:"What does a product designer need to know?"},{id:2,title:"What does a product designer need to know?"},{id:3,title:"What does a product designer need to know?"},{id:4,title:"What does a product designer need to know?"},{id:5,title:"What does a product designer need to know?"}].map(t=>(0,n.jsxs)("div",{className:"accordion-item",children:[(0,n.jsx)("h4",{className:"accordion-header",children:(0,n.jsxs)(i.Z.Toggle,{as:"button",className:"accordion-button ".concat("collapse".concat(t.id)==e?"":"collapsed"),eventKey:"collapse".concat(t.id),onClick:()=>s(e=="collapse".concat(t.id)?null:"collapse".concat(t.id)),children:["What does a product designer need to know?",(0,n.jsx)("span",{className:"ms-auto",children:(0,n.jsxs)("span",{className:"icon ms-4",children:[(0,n.jsx)("img",{className:"icon-plus",src:"assets/img/icons/plus.svg",alt:"plus"}),(0,n.jsx)("img",{className:"icon-minus d-none",src:"assets/img/icons/minus.svg",alt:"minus"})]})})]})}),(0,n.jsx)(i.Z.Collapse,{eventKey:"collapse".concat(t.id),children:(0,n.jsx)("div",{className:"accordion-body",children:(0,n.jsx)("p",{children:"I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level."})})})]},t.id))})})]})}},6800:function(e,s){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)n.call(e,t)&&e[t]&&(s=i(s,t));return s}(t)))}return e}function i(e,s){return s?e?e+" "+s:e+s:e}e.exports?(a.default=a,e.exports=a):void 0!==(t=(function(){return a}).apply(s,[]))&&(e.exports=t)}()}},function(e){e.O(0,[453,24,310,971,23,744],function(){return e(e.s=4012)}),_N_E=e.O()}]);