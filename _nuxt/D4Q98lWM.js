import{_ as C}from"./D4zCcwdp.js";import{x as b,c as v,I as N,a as k,_ as V,D,b as M,P as A}from"./SoOoFC8f.js";import{f as _,C as w,o as i,c as f,b as o,D as y,u as e,i as m,w as a,r as u,j as B,k as P,a as d,d as p,_ as j}from"./DgUOmk48.js";const z={class:"absolute left-0 top-full flex justify-center"},H=_({__name:"NavigationMenuViewport",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(s){const t=s,n=w(()=>{const{class:r,...l}=t;return l}),c=b(n);return(r,l)=>(i(),f("div",z,[o(e(N),y(e(c),{class:e(v)("origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",t.class)}),null,16,["class"])]))}}),L=_({__name:"NavigationMenu",props:{modelValue:{},defaultValue:{},dir:{},orientation:{},delayDuration:{},skipDelayDuration:{},disableClickTrigger:{type:Boolean},disableHoverTrigger:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue"],setup(s,{emit:t}){const n=s,c=t,r=w(()=>{const{class:h,...$}=n;return $}),l=k(r,c);return(h,$)=>(i(),m(e(V),y(e(l),{class:e(v)("relative z-10 flex max-w-max flex-1 items-center justify-center",n.class)}),{default:a(()=>[u(h.$slots,"default"),o(H)]),_:3},16,["class"]))}}),S=_({__name:"NavigationMenuList",props:{asChild:{type:Boolean},as:{},class:{}},setup(s){const t=s,n=w(()=>{const{class:r,...l}=t;return l}),c=b(n);return(r,l)=>(i(),m(e(D),y(e(c),{class:e(v)("group flex flex-1 list-none items-center justify-center gap-x-1",t.class)}),{default:a(()=>[u(r.$slots,"default")]),_:3},16,["class"]))}}),x=_({__name:"NavigationMenuItem",props:{value:{},asChild:{type:Boolean},as:{}},setup(s){const t=s;return(n,c)=>(i(),m(e(M),B(P(t)),{default:a(()=>[u(n.$slots,"default")]),_:3},16))}}),g=_({__name:"NavigationMenuLink",props:{active:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["select"],setup(s,{emit:t}){const r=k(s,t);return(l,h)=>(i(),m(e(A),B(P(e(r))),{default:a(()=>[u(l.$slots,"default")]),_:3},16))}}),I={class:"bg-secondary p-2 flex items-center justify-between"},T={class:"container-fluid mx-auto flex self-start justify-between"},W={class:"flex items-center"},E=d("img",{src:"/imgs/logo.png",alt:"Wogwon Society Logo",class:"h-12"},null,-1),F={class:"text-white text-2xl font-semibold ml-4"},R={class:"container-fluid mx-auto flex items-center justify-end h-4"},q={class:"flex items-center"},G=_({__name:"AppHeader",setup(s){return(t,n)=>{const c=C;return i(),f("header",I,[d("div",T,[d("div",W,[E,d("h1",F,[o(c,{to:"/",class:"nav-link"},{default:a(()=>[p("Wogwon Society")]),_:1})])])]),d("div",R,[d("div",q,[o(e(L),null,{default:a(()=>[o(e(S),null,{default:a(()=>[o(e(x),null,{default:a(()=>[o(e(g),{href:"/",class:"nav-link"},{default:a(()=>[p("Home")]),_:1})]),_:1}),o(e(x),null,{default:a(()=>[o(e(g),{href:"/about",class:"nav-link ml-2"},{default:a(()=>[p("About")]),_:1})]),_:1}),o(e(x),null,{default:a(()=>[o(e(g),{href:"/projects",class:"nav-link ml-2"},{default:a(()=>[p("Projects")]),_:1})]),_:1})]),_:1})]),_:1})])])])}}}),J={},K={class:"bg-secondary text-center"},O=d("p",{class:"text-accent text-white"},"© 2024 Wogwon Society. All rights reserved.",-1),Q=[O];function U(s,t){return i(),f("footer",K,Q)}const X=j(J,[["render",U]]),Y={},Z={class:"dark text-text min-h-screen flex flex-col justify-between"};function ee(s,t){const n=G,c=X;return i(),f("div",Z,[o(n),u(s.$slots,"default"),o(c)])}const ae=j(Y,[["render",ee]]);export{ae as default};