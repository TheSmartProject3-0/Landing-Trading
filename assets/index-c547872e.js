import{j as s,r as c,R as n}from"./react-84cb2727.js";import{c as m}from"./react-dom-13b4f1e8.js";import"./scheduler-04ce0582.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function d(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=d(t);fetch(t.href,a)}})();const u=s.Fragment,e=s.jsx,r=s.jsxs,h=()=>e("nav",{class:"bg-slate-900 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-50 top-0 left-0",children:r("div",{class:"container flex flex-wrap items-center justify-between mx-auto",children:[r("a",{href:"https://flowbite.com/",class:"flex items-center",children:[e("img",{src:"./images/logoSTP3-0.png",class:"h-6 mr-3 sm:h-9 rounded-full",alt:"Flowbite Logo"}),e("span",{class:"self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white",children:"The Smart Project 3.0"})]}),r("div",{class:"flex md:order-2",children:[e("a",{href:"#contacto",children:e("button",{type:"button",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Empieza Ahora"})}),r("button",{"data-collapse-toggle":"navbar-cta",type:"button",class:"inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"navbar-cta","aria-expanded":"false",children:[e("span",{class:"sr-only",children:"Open main menu"}),e("svg",{class:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})})]})]}),e("div",{class:"items-center justify-between hidden w-full md:flex md:w-auto md:order-1",id:"navbar-sticky",children:r("ul",{class:"flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700",children:[e("li",{children:e("a",{href:"#",class:"block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white","aria-current":"page",children:"Home"})}),e("li",{children:e("a",{href:"#articulo",class:"block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"Artículo"})}),e("li",{children:e("a",{href:"#ventajas",class:"block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"Ventajas"})}),e("li",{children:e("a",{href:"#contacto",class:"block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700",children:"Contacto"})})]})})]})}),g=()=>r("div",{id:"default-carousel",class:"relative mt-20","data-carousel":"static",children:[r("div",{class:"relative h-56 overflow-hidden rounded-none md:h-96",children:[e("div",{class:"duration-700 ease-in-out","data-carousel-item":!0,children:e("img",{src:"./images/banner-talgidi.png",class:"w-full",alt:"..."})}),e("div",{class:"duration-1000 ease-in-out","data-carousel-item":!0,children:e("img",{src:"./images/banner-jurisconsulta.png",class:"w-full",alt:"..."})}),e("div",{class:"duration-1000 ease-in-out","data-carousel-item":"active",children:e("img",{src:"./images/banner-hamparteplayers.png",class:"w-full",alt:"..."})})]}),r("div",{class:"absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2",children:[e("button",{type:"button",class:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 1","data-carousel-slide-to":"0"}),e("button",{type:"button",class:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 2","data-carousel-slide-to":"1"}),e("button",{type:"button",class:"w-3 h-3 rounded-full","aria-current":"false","aria-label":"Slide 3","data-carousel-slide-to":"2"})]}),e("button",{type:"button",class:"absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-prev":!0,children:r("span",{class:"inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})}),e("span",{class:"sr-only",children:"Previous"})]})}),e("button",{type:"button",class:"absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none","data-carousel-next":!0,children:r("span",{class:"inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none",children:[e("svg",{"aria-hidden":"true",class:"w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})}),e("span",{class:"sr-only",children:"Next"})]})})]}),p=()=>e("footer",{class:"p-4 sm:p-6 border-t border-slate-400 dark:bg-gray-800",children:r("div",{class:"mx-auto max-w-screen-xl",children:[r("div",{class:"md:flex md:justify-between",children:[e("div",{class:"mb-6 md:mb-0",children:r("a",{href:"https://thesmartproject3-0.github.io/TheSmartProject3-0/",class:"flex items-center",children:[e("img",{src:"./images/logoSTP3-0.png",class:"mr-3 h-8 rounded-full",alt:"FlowBite Logo"}),e("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-yellow-400",children:"The Smart Project 3.0"})]})}),r("div",{class:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",children:[r("div",{children:[e("h2",{class:"mb-6 text-sm font-semibold text-white uppercase dark:text-white",children:"Recursos"}),r("ul",{class:"text-gray-600 dark:text-gray-400",children:[e("li",{class:"mb-4",children:e("a",{href:"https://reactjs.org/",class:"hover:underline",children:"React.js"})}),e("li",{class:"mb-4",children:e("a",{href:"https://vitejs.dev/",class:"hover:underline",children:"Vite.js"})}),e("li",{class:"mb-4",children:e("a",{href:"https://tailwindcss.com/",class:"hover:underline",children:"Tailwind"})}),e("li",{class:"mb-4",children:e("a",{href:"https://flowbite.com",class:"hover:underline",children:"Flowbite"})})]})]}),r("div",{children:[e("h2",{class:"mb-6 text-sm font-semibold text-white uppercase dark:text-white",children:"Siguenos"}),r("ul",{class:"text-gray-600 dark:text-gray-400",children:[e("li",{class:"mb-4",children:e("a",{href:"https://github.com/TheSmartProject3-0/",class:"hover:underline",children:"Github"})}),e("li",{class:"mb-4",children:e("a",{href:"https://www.instagram.com/thesmartproject3.0/",class:"hover:underline ",children:"Instagran"})}),e("li",{class:"mb-4",children:e("a",{href:"https://twitter.com/SmartProject3_0",class:"hover:underline",children:"Twitter"})}),e("li",{class:"mb-4",children:e("a",{href:"",class:"hover:underline",children:"Telegram"})}),e("li",{class:"mb-4",children:e("a",{href:"https://discord.gg/KFkCQbqYZf",class:"hover:underline",children:"Discord"})})]})]}),r("div",{children:[e("h2",{class:"mb-6 text-sm font-semibold text-white uppercase dark:text-white",children:"Otros Servicios"}),r("ul",{class:"text-gray-600 dark:text-gray-400",children:[e("li",{class:"mb-4",children:e("a",{href:"https://github.com/themesberg/flowbite",class:"hover:underline ",children:"Trading"})}),e("li",{children:e("a",{href:"https://discord.gg/4eeurUVvTy",class:"hover:underline",children:"NFT's"})})]})]})]})]}),e("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"}),r("div",{class:"sm:flex sm:items-center sm:justify-between",children:[r("span",{class:"text-sm text-gray-500 sm:text-center dark:text-gray-400",children:["© 2023 ",e("a",{href:"https://flowbite.com",class:"hover:underline",children:"The Smart Project 3.0™"}),". All Rights Reserved."]}),r("div",{class:"flex mt-4 space-x-6 sm:justify-center sm:mt-0",children:[e("a",{href:"#",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white",children:e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e("path",{"fill-rule":"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z","clip-rule":"evenodd"})})}),e("a",{href:"https://www.instagram.com/thesmartproject3.0/",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white",children:e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e("path",{"fill-rule":"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z","clip-rule":"evenodd"})})}),e("a",{href:"https://twitter.com/SmartProject3_0",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white",children:e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})}),e("a",{href:"https://github.com/TheSmartProject3-0/",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white",children:e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})})})]})]})]})}),x=()=>r(u,{children:[r("section",{className:"dark:bg-gray-900",id:"ventajas",children:[r("div",{class:"gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6",children:[e("img",{class:"w-full shadow-xl shadow-slate-500 dark:hidden",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg",alt:"dashboard image"}),e("img",{class:"w-full hidden dark:block",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg",alt:"dashboard image"}),r("div",{class:"mt-4 md:mt-0",children:[e("h2",{class:"mb-4 text-4xl tracking-tight font-extrabold text-yellow-400 dark:text-white",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),e("p",{class:"mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sit similique. Delectus animi placeat quis expedita obcaecati nostrum deleniti, deserunt dolorem non eveniet explicabo recusandae commodi hic, enim qui alias?"}),r("a",{href:"#",class:"inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900",children:["Get started",e("svg",{class:"ml-2 -mr-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})})]})]})]}),r("div",{class:"gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6",children:[e("img",{class:"w-full shadow-xl shadow-slate-500 dark:hidden md:order-last",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg",alt:"dashboard image"}),e("img",{class:"w-full hidden dark:block",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg",alt:"dashboard image"}),r("div",{class:"mt-4 md:mt-0",children:[e("h2",{class:"mb-4 text-4xl tracking-tight font-extrabold text-yellow-400 dark:text-white",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),e("p",{class:"mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sit similique. Delectus animi placeat quis expedita obcaecati nostrum deleniti, deserunt dolorem non eveniet explicabo recusandae commodi hic, enim qui alias?"}),r("a",{href:"#",class:"inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900",children:["Get started",e("svg",{class:"ml-2 -mr-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})})]})]})]}),r("div",{class:"gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6",children:[e("img",{class:"w-full shadow-xl shadow-slate-500 dark:hidden",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg",alt:"dashboard image"}),e("img",{class:"w-full hidden dark:block",src:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg",alt:"dashboard image"}),r("div",{class:"mt-4 md:mt-0",children:[e("h2",{class:"mb-4 text-4xl tracking-tight font-extrabold text-yellow-400 dark:text-white",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),e("p",{class:"mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sit similique. Delectus animi placeat quis expedita obcaecati nostrum deleniti, deserunt dolorem non eveniet explicabo recusandae commodi hic, enim qui alias?"}),r("a",{href:"#",class:"inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900",children:["Get started",e("svg",{class:"ml-2 -mr-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"})})]})]})]})]}),e("section",{class:"dark:bg-gray-900",children:e("div",{class:"py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6",children:r("div",{class:"max-w-screen-md",children:[e("h2",{class:"mb-4 text-4xl text-center tracking-tight font-extrabold text-yellow-400 dark:text-white",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),e("p",{class:"mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, sit similique. Delectus animi placeat quis expedita obcaecati nostrum deleniti, deserunt dolorem non eveniet explicabo recusandae commodi hic, enim qui alias?"}),r("div",{class:"flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4",children:[e("a",{href:"#contacto",class:"inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-gradient-to-br from-green-400 to-blue-600 rounded-lg hover:bg-gradient-to-bl focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900",children:"Get started"}),r("a",{href:"https://www.youtube.com/channel/UCBSFlyXoX-Mv91E16ECISZg",class:"inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-yellow-400 border border-yellow-400 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[e("svg",{class:"mr-2 -ml-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"})}),"View more"]})]})]})})})]}),b=()=>e("section",{class:"dark:bg-gray-900",id:"contacto",children:r("div",{class:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md",children:[e("h2",{class:"mb-4 text-4xl tracking-tight font-extrabold text-center text-yellow-400 dark:text-white",children:"Contáctame"}),e("p",{class:"mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl",children:"Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."}),r("form",{action:"https://formspree.io/f/mrgdvpwd",method:"POST",class:"space-y-8",children:[r("div",{children:[e("label",{for:"name",class:"block mb-2 text-sm font-medium text-white dark:text-gray-300",children:"Nombre"}),e("input",{name:"name",type:"text",id:"name",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"example@email.com",required:!0})]}),r("div",{children:[e("label",{for:"email",class:"block mb-2 text-sm font-medium text-white dark:text-gray-300",children:"Correo"}),e("input",{name:"email",type:"email",id:"email",class:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"example@email.com",required:!0})]}),r("div",{children:[e("label",{for:"subject",class:"block mb-2 text-sm font-medium text-white dark:text-gray-300",children:"Subject"}),e("input",{name:"subject",type:"text",id:"subject",class:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",placeholder:"Let us know how we can help you",required:!0})]}),r("div",{class:"sm:col-span-2",children:[e("label",{for:"message",class:"block mb-2 text-sm font-medium text-white dark:text-gray-400",children:"Your message"}),e("textarea",{name:"message",id:"message",rows:"6",class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Leave a comment..."})]}),e("button",{type:"submit",class:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-blue-700 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",children:e("span",{class:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",children:"Send Message"})})]})]})}),f=()=>e("div",{id:"articulo",children:e("main",{class:"pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900",children:e("div",{class:"flex justify-between px-4 mx-auto max-w-screen-xl ",children:r("article",{class:"mx-auto w-full max-w-screen-lg format format-sm sm:format-base lg:format-lg format-blue dark:format-invert",children:[r("header",{class:"mb-4 lg:mb-6 not-format",children:[e("address",{class:"flex items-center mb-6 not-italic",children:r("div",{class:"inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white",children:[e("img",{class:"mr-4 w-16 h-16 rounded-full",src:"./images/Dangelo-foto.jpeg",alt:"Dangelo Arrivillaga"}),r("div",{children:[e("a",{href:"#",rel:"author",class:"text-xl font-bold text-yellow-400 dark:text-white",children:"Dangelo Arrivillaga"}),e("p",{class:"text-base font-light text-gray-500 dark:text-gray-400",children:"Desarrollador web, educador & CTO/Co-founder The Smart Project 3.0"}),e("p",{class:"text-base font-light text-gray-500 dark:text-gray-400",children:e("time",{pubdate:!0,datetime:"2022-02-07",title:"February 8th, 2022",children:"Feb. 7, 2022"})})]})]})}),e("h1",{class:"mb-4 text-3xl font-extrabold leading-tight text-white lg:mb-6 lg:text-4xl dark:text-white",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."})]}),e("p",{class:"lead text-slate-400",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quia magnam ipsum ratione amet excepturi tempore qui totam molestiae consequatur. Ratione saepe voluptatibus aliquam harum, quam a libero maxime dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tempora delectus magni consequuntur ab iusto asperiores assumenda, similique vero quisquam voluptas cupiditate laborum alias aperiam blanditiis nesciunt numquam est. Error?"}),e("p",{class:"text-slate-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur ullam ad harum ducimus cum cupiditate repellendus, fuga sunt, vitae provident sed? Ipsum, dolorum expedita laboriosam et voluptas saepe numquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus vitae laboriosam nam. Dolores deserunt enim eius deleniti illo inventore quo ex facilis harum? Voluptatum ab corrupti esse ipsam sed nostrum."}),e("p",{class:"text-slate-400",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quo autem suscipit molestiae perferendis recusandae ea veritatis dolor dolorum voluptatum rem illum facilis tenetur rerum animi et, dicta unde voluptatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quos doloribus numquam veritatis sapiente corporis est, minus, magnam rem debitis sit quaerat distinctio minima atque impedit velit, nemo aliquid blanditiis?"})]})})})});function w(){return c.useState(0),r("div",{class:"bg-slate-900",children:[e(h,{}),e(g,{}),e(f,{}),e(x,{}),e(b,{}),e(p,{})]})}m.createRoot(document.getElementById("root")).render(e(n.StrictMode,{children:e(w,{})}));
