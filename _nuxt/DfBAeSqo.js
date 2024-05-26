import{c as u,e as y}from"./CN5Wl9p4.js";import{n as c,o,c as l,u as p,v as m,x as e,y as g,w as i,z as k,A as w,b as _,d as f,t as h,a as d,r as S,F as x,B as b,p as B,e as P,_ as I}from"./DapzaHEA.js";const z=c({__name:"Card",props:{class:{}},setup(s){const t=s;return(a,n)=>(o(),l("div",{class:m(e(u)("rounded-xl border bg-card text-card-foreground shadow",t.class))},[p(a.$slots,"default")],2))}}),A=c({__name:"CardHeader",props:{class:{}},setup(s){const t=s;return(a,n)=>(o(),l("div",{class:m(e(u)("flex flex-col gap-y-1.5 p-6",t.class))},[p(a.$slots,"default")],2))}}),F=c({__name:"CardTitle",props:{class:{}},setup(s){const t=s;return(a,n)=>(o(),l("h3",{class:m(e(u)("font-semibold leading-none tracking-tight",t.class))},[p(a.$slots,"default")],2))}}),N=c({__name:"CardDescription",props:{class:{}},setup(s){const t=s;return(a,n)=>(o(),l("p",{class:m(e(u)("text-sm text-muted-foreground",t.class))},[p(a.$slots,"default")],2))}}),L=c({__name:"CardContent",props:{class:{}},setup(s){const t=s;return(a,n)=>(o(),l("div",{class:m(e(u)("p-6 pt-0",t.class))},[p(a.$slots,"default")],2))}}),O=c({__name:"CardFooter",props:{class:{}},setup(s){const t=s;return(a,n)=>(o(),l("div",{class:m(e(u)("flex items-center p-6 pt-0",t.class))},[p(a.$slots,"default")],2))}}),R=c({__name:"AspectRatio",props:{ratio:{},asChild:{type:Boolean},as:{}},setup(s){const t=s;return(a,n)=>(o(),g(e(y),k(w(t)),{default:i(()=>[p(a.$slots,"default")]),_:3},16))}}),V=["src","alt"],D=["href"],C=c({__name:"Project",props:{title:{},description:{},imageUrl:{},footerUrl:{},imageClasses:{}},setup(s){const t=s,{title:a,description:n,imageUrl:r,footerUrl:v,imageClasses:$}=t;return(q,J)=>(o(),g(e(z),{class:"text-center flex flex-col bg-secondary"},{default:i(()=>[_(e(A),{class:"flex"},{default:i(()=>[_(e(F),{class:"text-xl"},{default:i(()=>[f(h(e(a)),1)]),_:1}),_(e(N),null,{default:i(()=>[f(h(e(n)),1)]),_:1})]),_:1}),_(e(L),{class:"flex"},{default:i(()=>[_(e(R),{ratio:16/9},{default:i(()=>[d("img",{src:e(r),alt:e(a),class:m(["rounded-lg hover:scale-105 duration-150",[e($)]])},null,10,V)]),_:1})]),_:1}),_(e(O),{class:"justify-center flex"},{default:i(()=>[d("a",{href:e(v),class:"nav-link text-grey-700 text-sm duration-150"},"Learn More",8,D)]),_:1})]),_:1}))}}),U=s=>(B("data-v-c5419b69"),s=s(),P(),s),M={key:0,class:"container mx-auto py-12 px-4"},T=U(()=>d("section",{class:"text-center mb-12"},[d("h1",{class:"text-4xl font-bold text-secondary mb-4"},"Our Projects")],-1)),j={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"},E={key:1,class:"text-center mb-12"},G=U(()=>d("h2",{class:"text-3xl font-semibold text-black mb-4"},"Our Projects",-1)),H={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"},W=c({__name:"projects",props:{component:{type:Boolean}},setup(s){const t=S([{name:"Spellbound Saga",description:"Card Game to save the world from litter.",imageUrl:"/imgs/projects/spellbound-saga.png",footerUrl:"https://spellboundsaga.com"},{name:"Skreet Media Inc.",description:"Canadian Urban Record Label",imageUrl:"/imgs/projects/skreet-media-inc-white.png",footerUrl:"https://skreet.ca",imageClasses:"bg-black hover:filter hover:invert object-contain lg:h-52 sm:h-32 w-96"},{name:"Wogwon Society",description:"Arts & Culture Not for Profit Organization",imageUrl:"/imgs/logo-dark.png",footerUrl:"https://wogwonsociety.com/about",coverAndFit:!0,imageClasses:"bg-white hover:filter hover:invert object-contain lg:h-52 sm:h-32 w-96"}]);return(a,n)=>a.component?(o(),l("section",E,[G,d("div",H,[(o(!0),l(x,null,b(e(t),r=>(o(),g(C,{key:r.name,title:r.name,description:r.description,imageClasses:r.imageClasses,imageUrl:r.imageUrl,footerUrl:r.footerUrl},null,8,["title","description","imageClasses","imageUrl","footerUrl"]))),128))])])):(o(),l("main",M,[T,d("section",j,[(o(!0),l(x,null,b(e(t),r=>(o(),g(C,{key:r.name,title:r.name,description:r.description,imageUrl:r.imageUrl,footerUrl:r.footerUrl,imageClasses:r.imageClasses},null,8,["title","description","imageUrl","footerUrl","imageClasses"]))),128))])]))}}),X=I(W,[["__scopeId","data-v-c5419b69"]]);export{X as default};
