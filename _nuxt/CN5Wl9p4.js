import{W as Ge,C as E,X as Be,n as T,o as L,c as Ue,b as le,w as R,u as V,D as te,x as k,Y as De,r as A,Z as Ae,y as q,$ as We,H as ce,g as N,a0 as Fe,a1 as Ke,a2 as He,a3 as Se,m as G,L as ee,a4 as re,a5 as Ee,a6 as Me,a7 as qe,a8 as Je,F as Xe,a9 as Ze,aa as Ye,ab as Qe,ac as et,ad as tt}from"./DapzaHEA.js";function Ne(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(o=Ne(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function rt(){for(var e,t,o=0,r="",a=arguments.length;o<a;o++)(e=arguments[o])&&(t=Ne(e))&&(r&&(r+=" "),r+=t);return r}const ue="-";function ot(e){const t=at(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:r}=e;function a(i){const s=i.split(ue);return s[0]===""&&s.length!==1&&s.shift(),Te(s,t)||nt(i)}function n(i,s){const l=o[i]||[];return s&&r[i]?[...l,...r[i]]:l}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function Te(e,t){var i;if(e.length===0)return t.classGroupId;const o=e[0],r=t.nextPart.get(o),a=r?Te(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const n=e.join(ue);return(i=t.validators.find(({validator:s})=>s(n)))==null?void 0:i.classGroupId}const we=/^\[(.+)\]$/;function nt(e){if(we.test(e)){const t=we.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}}function at(e){const{theme:t,prefix:o}=e,r={nextPart:new Map,validators:[]};return st(Object.entries(e.classGroups),o).forEach(([n,i])=>{se(i,r,n,t)}),r}function se(e,t,o,r){e.forEach(a=>{if(typeof a=="string"){const n=a===""?t:xe(t,a);n.classGroupId=o;return}if(typeof a=="function"){if(it(a)){se(a(r),t,o,r);return}t.validators.push({validator:a,classGroupId:o});return}Object.entries(a).forEach(([n,i])=>{se(i,xe(t,n),o,r)})})}function xe(e,t){let o=e;return t.split(ue).forEach(r=>{o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o}function it(e){return e.isThemeGetter}function st(e,t){return t?e.map(([o,r])=>{const a=r.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>[t+i,s])):n);return[o,a]}):e}function lt(e){if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,r=new Map;function a(n,i){o.set(n,i),t++,t>e&&(t=0,r=o,o=new Map)}return{get(n){let i=o.get(n);if(i!==void 0)return i;if((i=r.get(n))!==void 0)return a(n,i),i},set(n,i){o.has(n)?o.set(n,i):a(n,i)}}}const Ie="!";function ct(e){const t=e.separator,o=t.length===1,r=t[0],a=t.length;return function(i){const s=[];let l=0,c=0,d;for(let u=0;u<i.length;u++){let v=i[u];if(l===0){if(v===r&&(o||i.slice(u,u+a)===t)){s.push(i.slice(c,u)),c=u+a;continue}if(v==="/"){d=u;continue}}v==="["?l++:v==="]"&&l--}const f=s.length===0?i:i.substring(c),p=f.startsWith(Ie),b=p?f.substring(1):f,C=d&&d>c?d-c:void 0;return{modifiers:s,hasImportantModifier:p,baseClassName:b,maybePostfixModifierPosition:C}}}function ut(e){if(e.length<=1)return e;const t=[];let o=[];return e.forEach(r=>{r[0]==="["?(t.push(...o.sort(),r),o=[]):o.push(r)}),t.push(...o.sort()),t}function dt(e){return{cache:lt(e.cacheSize),splitModifiers:ct(e),...ot(e)}}const pt=/\s+/;function ft(e,t){const{splitModifiers:o,getClassGroupId:r,getConflictingClassGroupIds:a}=t,n=new Set;return e.trim().split(pt).map(i=>{const{modifiers:s,hasImportantModifier:l,baseClassName:c,maybePostfixModifierPosition:d}=o(i);let f=r(d?c.substring(0,d):c),p=!!d;if(!f){if(!d)return{isTailwindClass:!1,originalClassName:i};if(f=r(c),!f)return{isTailwindClass:!1,originalClassName:i};p=!1}const b=ut(s).join(":");return{isTailwindClass:!0,modifierId:l?b+Ie:b,classGroupId:f,originalClassName:i,hasPostfixModifier:p}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:s,classGroupId:l,hasPostfixModifier:c}=i,d=s+l;return n.has(d)?!1:(n.add(d),a(l,c).forEach(f=>n.add(s+f)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function mt(){let e=0,t,o,r="";for(;e<arguments.length;)(t=arguments[e++])&&(o=Pe(t))&&(r&&(r+=" "),r+=o);return r}function Pe(e){if(typeof e=="string")return e;let t,o="";for(let r=0;r<e.length;r++)e[r]&&(t=Pe(e[r]))&&(o&&(o+=" "),o+=t);return o}function bt(e,...t){let o,r,a,n=i;function i(l){const c=t.reduce((d,f)=>f(d),e());return o=dt(c),r=o.cache.get,a=o.cache.set,n=s,s(l)}function s(l){const c=r(l);if(c)return c;const d=ft(l,o);return a(l,d),d}return function(){return n(mt.apply(null,arguments))}}function w(e){const t=o=>o[e]||[];return t.isThemeGetter=!0,t}const Re=/^\[(?:([a-z-]+):)?(.+)\]$/i,gt=/^\d+\/\d+$/,vt=new Set(["px","full","screen"]),ht=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,wt=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,xt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ct=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function M(e){return O(e)||vt.has(e)||gt.test(e)}function I(e){return B(e,"length",It)}function O(e){return!!e&&!Number.isNaN(Number(e))}function Y(e){return B(e,"number",O)}function F(e){return!!e&&Number.isInteger(Number(e))}function kt(e){return e.endsWith("%")&&O(e.slice(0,-1))}function m(e){return Re.test(e)}function P(e){return ht.test(e)}const At=new Set(["length","size","percentage"]);function St(e){return B(e,At,ze)}function Et(e){return B(e,"position",ze)}const Mt=new Set(["image","url"]);function Nt(e){return B(e,Mt,Rt)}function Tt(e){return B(e,"",Pt)}function K(){return!0}function B(e,t,o){const r=Re.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):o(r[2]):!1}function It(e){return yt.test(e)&&!wt.test(e)}function ze(){return!1}function Pt(e){return xt.test(e)}function Rt(e){return Ct.test(e)}function zt(){const e=w("colors"),t=w("spacing"),o=w("blur"),r=w("brightness"),a=w("borderColor"),n=w("borderRadius"),i=w("borderSpacing"),s=w("borderWidth"),l=w("contrast"),c=w("grayscale"),d=w("hueRotate"),f=w("invert"),p=w("gap"),b=w("gradientColorStops"),C=w("gradientColorStopPositions"),u=w("inset"),v=w("margin"),h=w("opacity"),y=w("padding"),g=w("saturate"),S=w("scale"),z=w("sepia"),$=w("skew"),me=w("space"),be=w("translate"),oe=()=>["auto","contain","none"],ne=()=>["auto","hidden","clip","visible","scroll"],ae=()=>["auto",m,t],x=()=>[m,t],ge=()=>["",M,I],J=()=>["auto",O,m],ve=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],X=()=>["solid","dashed","dotted","double","none"],he=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ie=()=>["start","end","center","between","around","evenly","stretch"],D=()=>["","0",m],ye=()=>["auto","avoid","all","avoid-page","page","left","right","column"],W=()=>[O,Y],Z=()=>[O,m];return{cacheSize:500,separator:":",theme:{colors:[K],spacing:[M,I],blur:["none","",P,m],brightness:W(),borderColor:[e],borderRadius:["none","","full",P,m],borderSpacing:x(),borderWidth:ge(),contrast:W(),grayscale:D(),hueRotate:Z(),invert:D(),gap:x(),gradientColorStops:[e],gradientColorStopPositions:[kt,I],inset:ae(),margin:ae(),opacity:W(),padding:x(),saturate:W(),scale:W(),sepia:D(),skew:Z(),space:x(),translate:x()},classGroups:{aspect:[{aspect:["auto","square","video",m]}],container:["container"],columns:[{columns:[P]}],"break-after":[{"break-after":ye()}],"break-before":[{"break-before":ye()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ve(),m]}],overflow:[{overflow:ne()}],"overflow-x":[{"overflow-x":ne()}],"overflow-y":[{"overflow-y":ne()}],overscroll:[{overscroll:oe()}],"overscroll-x":[{"overscroll-x":oe()}],"overscroll-y":[{"overscroll-y":oe()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[u]}],"inset-x":[{"inset-x":[u]}],"inset-y":[{"inset-y":[u]}],start:[{start:[u]}],end:[{end:[u]}],top:[{top:[u]}],right:[{right:[u]}],bottom:[{bottom:[u]}],left:[{left:[u]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",F,m]}],basis:[{basis:ae()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",m]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",F,m]}],"grid-cols":[{"grid-cols":[K]}],"col-start-end":[{col:["auto",{span:["full",F,m]},m]}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":[K]}],"row-start-end":[{row:["auto",{span:[F,m]},m]}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",m]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",m]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...ie()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ie(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ie(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[v]}],mx:[{mx:[v]}],my:[{my:[v]}],ms:[{ms:[v]}],me:[{me:[v]}],mt:[{mt:[v]}],mr:[{mr:[v]}],mb:[{mb:[v]}],ml:[{ml:[v]}],"space-x":[{"space-x":[me]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[me]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",m,t]}],"min-w":[{"min-w":[m,t,"min","max","fit"]}],"max-w":[{"max-w":[m,t,"none","full","min","max","fit","prose",{screen:[P]},P]}],h:[{h:[m,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[m,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[m,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[m,t,"auto","min","max","fit"]}],"font-size":[{text:["base",P,I]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Y]}],"font-family":[{font:[K]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",m]}],"line-clamp":[{"line-clamp":["none",O,Y]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",M,m]}],"list-image":[{"list-image":["none",m]}],"list-style-type":[{list:["none","disc","decimal",m]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...X(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",M,I]}],"underline-offset":[{"underline-offset":["auto",M,m]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:x()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",m]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",m]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ve(),Et]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",St]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Nt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...X(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:X()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...X()]}],"outline-offset":[{"outline-offset":[M,m]}],"outline-w":[{outline:[M,I]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ge()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[M,I]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",P,Tt]}],"shadow-color":[{shadow:[K]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...he(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":he()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",P,m]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[g]}],sepia:[{sepia:[z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[g]}],"backdrop-sepia":[{"backdrop-sepia":[z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",m]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",m]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",m]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[F,m]}],"translate-x":[{"translate-x":[be]}],"translate-y":[{"translate-y":[be]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",m]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",m]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":x()}],"scroll-mx":[{"scroll-mx":x()}],"scroll-my":[{"scroll-my":x()}],"scroll-ms":[{"scroll-ms":x()}],"scroll-me":[{"scroll-me":x()}],"scroll-mt":[{"scroll-mt":x()}],"scroll-mr":[{"scroll-mr":x()}],"scroll-mb":[{"scroll-mb":x()}],"scroll-ml":[{"scroll-ml":x()}],"scroll-p":[{"scroll-p":x()}],"scroll-px":[{"scroll-px":x()}],"scroll-py":[{"scroll-py":x()}],"scroll-ps":[{"scroll-ps":x()}],"scroll-pe":[{"scroll-pe":x()}],"scroll-pt":[{"scroll-pt":x()}],"scroll-pr":[{"scroll-pr":x()}],"scroll-pb":[{"scroll-pb":x()}],"scroll-pl":[{"scroll-pl":x()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",m]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[M,I,Y]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const $t=bt(zt);function mr(...e){return $t(rt(e))}function de(e,t){const o=typeof e=="string"&&!t?`${e}Context`:t,r=Symbol(o);return[a=>{const n=Ee(r,a);if(n||n===null)return n;throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},a=>(Me(r,a),a)]}function $e(e){return qe()?(Je(e),!0):!1}function Ot(e){let t=!1,o;const r=Fe(!0);return(...a)=>(t||(o=r.run(()=>e(...a)),t=!0),o)}function j(e){return typeof e=="function"?e():k(e)}const Oe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _t=e=>typeof e<"u",Ce=()=>{};function jt(e,t){function o(...r){return new Promise((a,n)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(a).catch(n)})}return o}function Lt(e,t={}){let o,r,a=Ce;const n=i=>{clearTimeout(i),a(),a=Ce};return i=>{const s=j(e),l=j(t.maxWait);return o&&n(o),s<=0||l!==void 0&&l<=0?(r&&(n(r),r=null),Promise.resolve(i())):new Promise((c,d)=>{a=t.rejectOnCancel?d:c,l&&!r&&(r=setTimeout(()=>{o&&n(o),r=null,c(i())},l)),o=setTimeout(()=>{r&&n(r),r=null,c(i())},s)})}}function Vt(e,t=1e4){return Ke((o,r)=>{let a=j(e),n;const i=()=>setTimeout(()=>{a=j(e),r()},j(t));return $e(()=>{clearTimeout(n)}),{get(){return o(),a},set(s){a=s,r(),clearTimeout(n),n=i()}}})}function Gt(e,t=200,o={}){return jt(Lt(t,o),e)}function H(e){var t;const o=j(e);return(t=o==null?void 0:o.$el)!=null?t:o}const Bt=Oe?window:void 0;function Ut(){const e=A(!1),t=G();return t&&ce(()=>{e.value=!0},t),e}function Dt(e){const t=Ut();return E(()=>(t.value,!!e()))}function Wt(e){return JSON.parse(JSON.stringify(e))}function Ft(e,t,o={}){const{window:r=Bt,...a}=o;let n;const i=Dt(()=>r&&"ResizeObserver"in r),s=()=>{n&&(n.disconnect(),n=void 0)},l=E(()=>Array.isArray(e)?e.map(f=>H(f)):[H(e)]),c=N(l,f=>{if(s(),i.value&&r){n=new ResizeObserver(t);for(const p of f)p&&n.observe(p,a)}},{immediate:!0,flush:"post"}),d=()=>{s(),c()};return $e(d),{isSupported:i,stop:d}}function Kt(e,t,o,r={}){var a,n,i;const{clone:s=!1,passive:l=!1,eventName:c,deep:d=!1,defaultValue:f,shouldEmit:p}=r,b=G(),C=o||(b==null?void 0:b.emit)||((a=b==null?void 0:b.$emit)==null?void 0:a.bind(b))||((i=(n=b==null?void 0:b.proxy)==null?void 0:n.$emit)==null?void 0:i.bind(b==null?void 0:b.proxy));let u=c;u=u||`update:${t.toString()}`;const v=g=>s?typeof s=="function"?s(g):Wt(g):g,h=()=>_t(e[t])?v(e[t]):f,y=g=>{p?p(g)&&C(u,g):C(u,g)};if(l){const g=h(),S=A(g);let z=!1;return N(()=>e[t],$=>{z||(z=!0,S.value=v($),re(()=>z=!1))}),N(S,$=>{!z&&($!==e[t]||d)&&y($)},{deep:d}),S}else return E({get(){return h()},set(g){y(g)}})}function pe(e){return e?e.flatMap(t=>t.type===Xe?pe(t.children):[t]):[]}const Ht=["INPUT","TEXTAREA"];function qt(e,t,o,r={}){if(!t||r.enableIgnoredElement&&Ht.includes(t.nodeName))return null;const{arrowKeyOptions:a="both",attributeName:n="[data-radix-vue-collection-item]",itemsArray:i=[],loop:s=!0,dir:l="ltr",preventScroll:c=!0,focus:d=!1}=r,[f,p,b,C,u,v]=[e.key==="ArrowRight",e.key==="ArrowLeft",e.key==="ArrowUp",e.key==="ArrowDown",e.key==="Home",e.key==="End"],h=b||C,y=f||p;if(!u&&!v&&(!h&&!y||a==="vertical"&&y||a==="horizontal"&&h))return null;const g=i;if(!g.length)return null;c&&e.preventDefault();let S=null;return y||h?S=_e(g,t,{goForward:h?C:l==="ltr"?f:p,loop:s}):u?S=g.at(0)||null:v&&(S=g.at(-1)||null),d&&(S==null||S.focus()),S}function _e(e,t,o,r=e.length){if(--r===0)return null;const a=e.indexOf(t),n=o.goForward?a+1:a-1;if(!o.loop&&(n<0||n>=e.length))return null;const i=(n+e.length)%e.length,s=e[i];return s?s.hasAttribute("disabled")&&s.getAttribute("disabled")!=="false"?_e(e,s,o,r):s:null}const[je,br]=de("ConfigProvider"),Jt="data-radix-vue-collection-item";function Le(e,t=Jt){const o=e;return{createCollection:r=>{const a=A([]);function n(){const i=H(r);return i?a.value=Array.from(i.querySelectorAll(`[${t}]:not([data-disabled])`)):a.value=[]}return Ze(()=>{a.value=[]}),ce(n),Ye(n),N(()=>r==null?void 0:r.value,n,{immediate:!0}),Me(o,a),a},injectCollection:()=>Ee(o,A([]))}}function Xt(e){const t=je({dir:A("ltr")});return E(()=>{var o;return(e==null?void 0:e.value)||((o=t.dir)==null?void 0:o.value)||"ltr"})}function Zt(e){const t=G(),o=t==null?void 0:t.type.emits,r={};return o!=null&&o.length||console.warn(`No emitted event found. Please check component: ${t==null?void 0:t.type.__name}`),o==null||o.forEach(a=>{r[He(Se(a))]=(...n)=>e(a,...n)}),r}function Yt(e){const t=G(),o=Object.keys((t==null?void 0:t.type.props)??{}).reduce((a,n)=>{const i=(t==null?void 0:t.type.props[n]).default;return i!==void 0&&(a[n]=i),a},{}),r=Ge(e);return E(()=>{const a={},n=(t==null?void 0:t.vnode.props)??{};return Object.keys(n).forEach(i=>{a[Se(i)]=n[i]}),Object.keys({...o,...a}).reduce((i,s)=>(r.value[s]!==void 0&&(i[s]=r.value[s]),i),{})})}function gr(e,t){const o=Yt(e),r=t?Zt(t):{};return E(()=>({...o.value,...r}))}function U(){const e=G(),t=A(),o=E(()=>{var i,s;return["#text","#comment"].includes((i=t.value)==null?void 0:i.$el.nodeName)?(s=t.value)==null?void 0:s.$el.nextElementSibling:H(t)}),r=Object.assign({},e.exposed),a={};for(const i in e.props)Object.defineProperty(a,i,{enumerable:!0,configurable:!0,get:()=>e.props[i]});if(Object.keys(r).length>0)for(const i in r)Object.defineProperty(a,i,{enumerable:!0,configurable:!0,get:()=>r[i]});Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=a;function n(i){t.value=i,!(i instanceof Element||!i)&&(Object.defineProperty(a,"$el",{enumerable:!0,configurable:!0,get:()=>i.$el}),e.exposed=a)}return{forwardRef:n,currentRef:t,currentElement:o}}let Qt=0;function Ve(e,t="radix"){if(e)return e;const{useId:o}=je({useId:void 0});return o&&typeof o=="function"?`${t}-${o()}`:`${t}-${++Qt}`}function er(e,t){const o=A(e);function r(a){return t[o.value][a]??o.value}return{state:o,dispatch:a=>{o.value=r(a)}}}const tr=T({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:o}){return()=>{var r,a;if(!o.default)return null;const n=pe(o.default()),i=n.findIndex(d=>d.type!==Qe);if(i===-1)return n;const s=n[i];(r=s.props)==null||delete r.ref;const l=s.props?te(t,s.props):t;t.class&&(a=s.props)!=null&&a.class&&delete s.props.class;const c=et(s,l);for(const d in l)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=l[d]);return n.length===1?c:(n[i]=c,n)}}}),_=T({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:o}){const r=e.asChild?"template":e.as;return typeof r=="string"&&["area","img","input"].includes(r)?()=>ee(r,t):r!=="template"?()=>ee(e.as,t,{default:o.default}):()=>ee(tr,t,{default:o.default})}});function rr(e,t){const o=A({}),r=A("none"),a=e.value?"mounted":"unmounted",{state:n,dispatch:i}=er(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),s=p=>{var b;if(Oe){const C=new CustomEvent(p,{bubbles:!1,cancelable:!1});(b=t.value)==null||b.dispatchEvent(C)}};N(e,async(p,b)=>{var C;const u=b!==p;if(await re(),u){const v=r.value,h=Q(t.value);p?(i("MOUNT"),s("enter"),h==="none"&&s("after-enter")):h==="none"||((C=o.value)==null?void 0:C.display)==="none"?(i("UNMOUNT"),s("leave"),s("after-leave")):b&&v!==h?(i("ANIMATION_OUT"),s("leave")):(i("UNMOUNT"),s("after-leave"))}},{immediate:!0});const l=p=>{const b=Q(t.value),C=b.includes(p.animationName),u=n.value==="mounted"?"enter":"leave";p.target===t.value&&C&&(s(`after-${u}`),i("ANIMATION_END")),p.target===t.value&&b==="none"&&i("ANIMATION_END")},c=p=>{p.target===t.value&&(r.value=Q(t.value))},d=N(t,(p,b)=>{p?(o.value=getComputedStyle(p),p.addEventListener("animationstart",c),p.addEventListener("animationcancel",l),p.addEventListener("animationend",l)):(i("ANIMATION_END"),b==null||b.removeEventListener("animationstart",c),b==null||b.removeEventListener("animationcancel",l),b==null||b.removeEventListener("animationend",l))},{immediate:!0}),f=N(n,()=>{const p=Q(t.value);r.value=n.value==="mounted"?p:"none"});return tt(()=>{d(),f()}),{isPresent:E(()=>["mounted","unmountSuspended"].includes(n.value))}}function Q(e){return e&&getComputedStyle(e).animationName||"none"}const or=T({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:t,expose:o}){var r;const{present:a,forceMount:n}=Ae(e),i=A(),{isPresent:s}=rr(a,i);o({present:s});let l=t.default({present:s});l=pe(l||[]);const c=G();if(l&&(l==null?void 0:l.length)>1){const d=(r=c==null?void 0:c.parent)!=null&&r.type.name?`<${c.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${d}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(f=>`  - ${f}`).join(`
`)].join(`
`))}return()=>n.value||a.value||s.value?ee(t.default({present:s})[0],{ref:d=>{const f=H(d);return typeof(f==null?void 0:f.hasAttribute)>"u"||(f!=null&&f.hasAttribute("data-radix-popper-content-wrapper")?i.value=f.firstElementChild:i.value=f),f}}):null}});Be({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});Ot(()=>A([]));const vr=T({inheritAttrs:!1,__name:"AspectRatio",props:{ratio:{default:1},asChild:{type:Boolean},as:{}},setup(e){const t=e,{forwardRef:o}=U(),r=E(()=>1/t.ratio*100);return(a,n)=>(L(),Ue("div",{style:De(`position: relative; width: 100%; padding-bottom: ${r.value}%`),"data-radix-aspect-ratio-wrapper":""},[le(k(_),te({ref:k(o),"as-child":a.asChild,as:a.as,style:{position:"absolute",inset:"0px"}},a.$attrs),{default:R(()=>[V(a.$slots,"default",{aspect:r.value})]),_:3},16,["as-child","as"])],4))}}),[fe,nr]=de(["NavigationMenuRoot","NavigationMenuSub"],"NavigationMenuContext"),hr=T({__name:"NavigationMenuRoot",props:{modelValue:{default:void 0},defaultValue:{},dir:{},orientation:{default:"horizontal"},delayDuration:{default:200},skipDelayDuration:{default:300},disableClickTrigger:{type:Boolean,default:!1},disableHoverTrigger:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"nav"}},emits:["update:modelValue"],setup(e,{emit:t}){const o=e,r=Kt(o,"modelValue",t,{defaultValue:o.defaultValue??"",passive:o.modelValue===void 0}),a=A(""),{forwardRef:n,currentElement:i}=U(),s=A(),l=A(),{createCollection:c}=Le("nav");c(s);const{delayDuration:d,skipDelayDuration:f,dir:p,disableClickTrigger:b,disableHoverTrigger:C}=Ae(o),u=Xt(p),v=Vt(!1,f),h=E(()=>r.value!==""||v.value?150:d.value),y=Gt(g=>{a.value=r.value,r.value=g},h);return nr({isRootMenu:!0,modelValue:r,previousValue:a,baseId:Ve(void 0,"radix-navigation-menu"),disableClickTrigger:b,disableHoverTrigger:C,dir:u,orientation:o.orientation,rootNavigationMenu:i,indicatorTrack:s,onIndicatorTrackChange:g=>{s.value=g},viewport:l,onViewportChange:g=>{l.value=g},onTriggerEnter:g=>{y(g)},onTriggerLeave:()=>{v.value=!0,y("")},onContentEnter:g=>{y(g)},onContentLeave:()=>{y("")},onItemSelect:g=>{a.value=r.value,r.value=g},onItemDismiss:()=>{a.value=r.value,r.value=""}}),(g,S)=>(L(),q(k(_),{ref:k(n),"aria-label":"Main",as:g.as,"as-child":g.asChild,"data-orientation":g.orientation,dir:k(u)},{default:R(()=>[V(g.$slots,"default",{modelValue:k(r)})]),_:3},8,["as","as-child","data-orientation","dir"]))}});function ar(e){return e?"open":"closed"}function ir(e,t){return`${e}-content-${t}`}const sr="navigationMenu.rootContentDismiss";function ke(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function lr(e){const t=document.activeElement;return e.some(o=>o===t?!0:(o.focus(),document.activeElement!==t))}function cr(e){return e.forEach(t=>{t.dataset.tabindex=t.getAttribute("tabindex")||"",t.setAttribute("tabindex","-1")}),()=>{e.forEach(t=>{const o=t.dataset.tabindex;t.setAttribute("tabindex",o)})}}function ur(e){return t=>t.pointerType==="mouse"?e(t):void 0}const[yr,dr]=de("NavigationMenuItem"),wr=T({__name:"NavigationMenuItem",props:{value:{},asChild:{type:Boolean},as:{default:"li"}},setup(e){const t=e;U();const{injectCollection:o}=Le("nav"),r=o(),a=fe(),n=Ve(t.value),i=A(),s=A(),l=ir(a.baseId,n);let c=()=>({});const d=A(!1);async function f(u="start"){const v=document.getElementById(l);if(v){c();const h=ke(v);h.length&&lr(u==="start"?h:h.reverse())}}function p(){const u=document.getElementById(l);if(u){const v=ke(u);v.length&&(c=cr(v))}}dr({value:n,contentId:l,triggerRef:i,focusProxyRef:s,wasEscapeCloseRef:d,onEntryKeyDown:f,onFocusProxyEnter:f,onContentFocusOutside:p,onRootContentClose:p});function b(){var u;a.onItemDismiss(),(u=i.value)==null||u.focus()}function C(u){const v=document.activeElement;if(u.keyCode===32||u.key==="Enter")if(a.modelValue.value===n){b(),u.preventDefault();return}else{u.target.click(),u.preventDefault();return}const h=r.value.filter(g=>{var S;return(S=g.parentElement)==null?void 0:S.hasAttribute("data-menu-item")}),y=qt(u,v,void 0,{itemsArray:h,loop:!1});y&&(y==null||y.focus()),u.preventDefault(),u.stopPropagation()}return(u,v)=>(L(),q(k(_),{"as-child":u.asChild,as:u.as,"data-menu-item":"",onKeydown:We(C,["up","down","left","right","home","end","space"])},{default:R(()=>[V(u.$slots,"default")]),_:3},8,["as-child","as"]))}}),xr=T({__name:"NavigationMenuLink",props:{active:{type:Boolean},asChild:{type:Boolean},as:{default:"a"}},emits:["select"],setup(e,{emit:t}){const o=e,r=t;U();async function a(n){var i;if(r("select",n),await re(),!n.defaultPrevented&&!n.metaKey){const s=new CustomEvent(sr,{bubbles:!0,cancelable:!0});(i=n.target)==null||i.dispatchEvent(s)}}return(n,i)=>(L(),q(k(_),{as:n.as,"data-active":n.active?"":void 0,"aria-current":n.active?"page":void 0,"as-child":o.asChild,"data-radix-vue-collection-item":"",onClick:a},{default:R(()=>[V(n.$slots,"default")]),_:3},8,["as","data-active","aria-current","as-child"]))}}),Cr=T({inheritAttrs:!1,__name:"NavigationMenuList",props:{asChild:{type:Boolean},as:{default:"ul"}},setup(e){const t=e,o=fe(),{forwardRef:r,currentElement:a}=U();return ce(()=>{o.onIndicatorTrackChange(a.value)}),(n,i)=>(L(),q(k(_),{ref:k(r),style:{position:"relative"}},{default:R(()=>[le(k(_),te(n.$attrs,{"as-child":t.asChild,as:n.as,"data-orientation":k(o).orientation}),{default:R(()=>[V(n.$slots,"default")]),_:3},16,["as-child","as","data-orientation"])]),_:3},512))}}),kr=T({inheritAttrs:!1,__name:"NavigationMenuViewport",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const{forwardRef:t,currentElement:o}=U(),r=fe(),a=A(),n=E(()=>!!r.modelValue.value),i=E(()=>r.modelValue.value);N(o,()=>{o.value&&r.onViewportChange(o.value)});const s=A();return N([i,n],async()=>{var l,c;if(await re(),!o.value)return;const d=(c=(l=o.value.querySelector("[data-state=open]"))==null?void 0:l.children)==null?void 0:c[0];s.value=d},{immediate:!0}),Ft(s,()=>{s.value&&(a.value={width:s.value.offsetWidth,height:s.value.offsetHeight})}),(l,c)=>(L(),q(k(or),{present:l.forceMount||n.value},{default:R(()=>{var d,f;return[le(k(_),te(l.$attrs,{ref:k(t),as:l.as,"as-child":l.asChild,"data-state":k(ar)(n.value),"data-orientation":k(r).orientation,style:{pointerEvents:!n.value&&k(r).isRootMenu?"none":void 0,"--radix-navigation-menu-viewport-width":a.value?`${(d=a.value)==null?void 0:d.width}px`:void 0,"--radix-navigation-menu-viewport-height":a.value?`${(f=a.value)==null?void 0:f.height}px`:void 0},onPointerenter:c[0]||(c[0]=p=>k(r).onContentEnter(k(r).modelValue.value)),onPointerleave:c[1]||(c[1]=p=>k(ur)(()=>k(r).onContentLeave())(p))}),{default:R(()=>[V(l.$slots,"default")]),_:3},16,["as","as-child","data-state","data-orientation","style"])]}),_:3},8,["present"]))}});function pr(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}pr();export{Cr as D,kr as I,xr as P,hr as _,gr as a,wr as b,mr as c,vr as e,Yt as x};
