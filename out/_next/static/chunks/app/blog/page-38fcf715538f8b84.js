(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{2924:function(e,s,a){Promise.resolve().then(a.bind(a,7944))},7944:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return j}});var t=a(7437),i=a(2265),l=a(7138),n=e=>{let{item:s}=e;return(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsx)("div",{className:"article-publications-item",children:(0,t.jsxs)("div",{className:"text",children:[(0,t.jsx)(l.default,{href:s.URL,target:"_blank",className:"title",children:s.title}),(0,t.jsxs)("ul",{className:"list-unstyled",children:[(0,t.jsxs)("li",{children:[s.duration," read"]}),(0,t.jsx)("li",{children:s.publishDate})]})]})})},s.id)},c=a(1430),r=()=>(0,t.jsxs)("div",{className:"background-shapes",children:[(0,t.jsx)("div",{className:"shape-1 common-shape",children:(0,t.jsx)("img",{src:"assets/img/bg/banner-shape-1.png",alt:"banner-shape-1"})}),(0,t.jsx)("div",{className:"shape-2 common-shape",children:(0,t.jsx)("img",{src:"assets/img/bg/banner-shape-1.png",alt:"banner-shape-1"})}),(0,t.jsx)("div",{className:"threed-shape-1 move-with-cursor","data-value":1,children:(0,t.jsx)("img",{src:"assets/img/bg/object-3d-1.png",alt:"object-3d-1"})}),(0,t.jsx)("div",{className:"threed-shape-2 move-with-cursor","data-value":1,children:(0,t.jsx)("img",{src:"assets/img/bg/object-3d-2.png",alt:"object-3d-2"})})]}),o=a(4463),d=()=>(0,t.jsx)("footer",{className:"footer-area",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"text text-center",children:(0,t.jsxs)("p",{children:["@ Sheikh Hami ",new Date().getFullYear(),", Design By"," ",(0,t.jsx)("a",{target:"_blank",href:"https://github.com/SolutionZoom",children:"SolutionZoom LLC"})]})})})}),h=a(4135),m=e=>{let{children:s,homePage:a=!1}=e;return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(o.default,{}),(0,t.jsx)(h.default,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)("section",{className:a?"home-area":"content-box-area mt-4",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row g-4",children:[(0,t.jsx)("div",{className:"col-xl-4",children:(0,t.jsx)(c.default,{})}),s]})})}),(0,t.jsx)(r,{})]}),(0,t.jsx)(d,{})]})};async function x(e){let s=await fetch("https://us-central1-sheikhhami-d00bd.cloudfunctions.net/readData?collection=Article&_start=".concat((e-1)*10,"&_limit=").concat(10));if(!s.ok)throw Error("Failed to fetch data");return{data:await s.json()}}function j(){let[e,s]=(0,i.useState)(1),[a,l]=(0,i.useState)([]),[c,r]=(0,i.useState)(0),[o,d]=(0,i.useState)(!1),h=Math.ceil(c/10);(0,i.useEffect)(()=>{(async()=>{d(!0);try{let{data:s}=await x(e);l(s.data),r(s.totalPosts)}catch(e){console.error("Error fetching blog items:",e)}finally{d(!1)}})()},[e]);let j=e=>{s(e)};return(0,t.jsx)(m,{children:(0,t.jsx)("div",{className:"col-xl-8",children:(0,t.jsx)("div",{className:"card content-box-card",children:(0,t.jsxs)("div",{className:"card-body portfolio-card",children:[(0,t.jsx)("div",{className:"top-info",children:(0,t.jsx)("div",{className:"text",children:(0,t.jsx)("h1",{className:"main-title",children:"Recent Articles and Publications"})})}),(0,t.jsx)("div",{className:"article-publications article-area",children:(0,t.jsx)("div",{className:"article-publications-main",children:o?(0,t.jsx)("p",{children:"Loading..."}):(0,t.jsx)("div",{className:"row",children:a.map(e=>(0,t.jsx)(n,{item:e},e.id))})})}),(0,t.jsx)("div",{className:"pagination",children:(0,t.jsxs)("ul",{className:"list-unstyled",children:[(0,t.jsx)("li",{className:"prev",children:e>1&&(0,t.jsx)("button",{onClick:()=>j(e-1),children:(0,t.jsx)("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"})})})}),Array.from({length:h},(s,a)=>(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:()=>j(a+1),className:e===a+1?"active":"",children:a+1})},a)),(0,t.jsx)("li",{className:"next",children:e<h&&(0,t.jsx)("button",{onClick:()=>j(e+1),children:(0,t.jsx)("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})})})})]})})]})})})})}}},function(e){e.O(0,[453,310,971,23,744],function(){return e(e.s=2924)}),_N_E=e.O()}]);