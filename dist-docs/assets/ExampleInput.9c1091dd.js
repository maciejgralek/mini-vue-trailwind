import{_ as h,r as b,f as C,c as g,b as l,a as t,m as s,w as n,F as y,d as i,o as k,e as _,g as B}from"./index.55f63345.js";const U={setup(){let m=b({model:"",type:"text",label:"",clearable:!1,useLoader:!1,isLoading:!1,state:""}),o=C([]);return{example:m,events:o,handleClickClear:e=>{m.model="",o.value.unshift({ev:"click:clear-button",data:e})}}}},w=l("p",{class:"my-6"},"Input with icon (prop and slot)",-1),T={class:"flex gap-x-10"},L=l("p",{class:"my-6 mt-12"},"Prepend and append slots",-1),E={class:"flex gap-x-10"},N=l("div",{class:"mr-2"},"http://",-1),P=l("div",{class:"ml-2"},".com",-1),F=l("p",{class:"my-6 mt-12"},"Alternative style input",-1),I={class:"flex gap-x-10"},A={class:"flex flex-col gap-y-2 mt-5"},D=l("label",{for:"model",class:"font-semibold"},"v-model:",-1),S=l("label",{for:"type"},"type:",-1),j=l("option",{value:"text"},"text",-1),q=l("option",{value:"password"},"password",-1),z=l("option",{value:"email"},"email",-1),G=l("option",{value:"number"},"number",-1),H=l("option",{value:"search"},"search",-1),J=l("option",{value:"time"},"time",-1),K=l("option",{value:"url"},"url",-1),M=l("option",{value:"color"},"color",-1),O=l("option",{value:"date"},"date",-1),Q=l("label",{for:"label"},"label:",-1),R=l("label",{for:"clearable"},"clearable:",-1),W=l("option",{value:!0},"true",-1),X=l("option",{value:!1},"false",-1),Y=l("label",{for:"use-loader"},"use-loader:",-1),Z=l("option",{value:!0},"true",-1),$=l("option",{value:!1},"false",-1),ee=l("label",{for:"is-loading"},"is-loading:",-1),le=l("option",{value:!0},"true",-1),oe=l("option",{value:!1},"false",-1),ae=l("label",{for:"state"},"state:",-1),te=l("option",{value:null},"component controlled (null)",-1),ne=l("option",{value:""},"normal (empty string)",-1),de=l("option",{value:"valid"},"valid",-1),ie=l("option",{value:"invalid"},"invalid",-1),se=_(" Events ");function me(m,o,u,e,re,ce){const d=i("v-input"),v=i("v-icon"),c=i("v-select"),r=i("v-select-prop"),p=i("v-tab"),x=i("v-badge"),V=i("event-viewer"),f=i("v-tabs");return k(),g(y,null,[w,l("div",T,[t(d,s({modelValue:e.example.model,"onUpdate:modelValue":o[0]||(o[0]=a=>e.example.model=a)},e.example,{icon:"b-exclamation-circle",placeholder:"Type something...","onClick:clearButton":e.handleClickClear}),null,16,["modelValue","onClick:clearButton"]),t(d,s({modelValue:e.example.model,"onUpdate:modelValue":o[1]||(o[1]=a=>e.example.model=a)},e.example,{icon:"b-exclamation-circle",placeholder:"Type something...","onClick:clearButton":e.handleClickClear}),{icon:n(()=>[t(v,{name:"b-exclamation-circle",class:"h-6 w-6 text-gray-400 dark:text-gray-400 mr-2"})]),_:1},16,["modelValue","onClick:clearButton"])]),L,l("div",E,[t(d,s({modelValue:e.example.model,"onUpdate:modelValue":o[2]||(o[2]=a=>e.example.model=a)},e.example,{placeholder:"Type something...","onClick:clearButton":e.handleClickClear}),{prepend:n(()=>[N]),_:1},16,["modelValue","onClick:clearButton"]),t(d,s({modelValue:e.example.model,"onUpdate:modelValue":o[3]||(o[3]=a=>e.example.model=a)},e.example,{placeholder:"Type something...","onClick:clearButton":e.handleClickClear}),{append:n(()=>[P]),_:1},16,["modelValue","onClick:clearButton"])]),F,l("div",I,[t(d,s({modelValue:e.example.model,"onUpdate:modelValue":o[4]||(o[4]=a=>e.example.model=a)},e.example,{base:"underlined",placeholder:"Type something...","onClick:clearButton":e.handleClickClear}),null,16,["modelValue","onClick:clearButton"]),t(d,s({modelValue:e.example.model,"onUpdate:modelValue":o[5]||(o[5]=a=>e.example.model=a)},e.example,{base:"round",placeholder:"Type something...","onClick:clearButton":e.handleClickClear}),null,16,["modelValue","onClick:clearButton"])]),t(f,{base:"material",class:"mt-10"},{default:n(()=>[t(p,{name:"Props"},{default:n(()=>[l("div",A,[l("div",null,[D,t(d,{type:"text",id:"model",inline:"",modelValue:e.example.model,"onUpdate:modelValue":o[6]||(o[6]=a=>e.example.model=a)},null,8,["modelValue"])]),l("div",null,[S,t(c,{id:"type",modelValue:e.example.type,"onUpdate:modelValue":o[7]||(o[7]=a=>e.example.type=a)},{default:n(()=>[j,q,z,G,H,J,K,M,O]),_:1},8,["modelValue"])]),l("div",null,[Q,t(d,{type:"text",id:"label",inline:"",modelValue:e.example.label,"onUpdate:modelValue":o[8]||(o[8]=a=>e.example.label=a)},null,8,["modelValue"])]),l("div",null,[R,t(r,{id:"clearable",modelValue:e.example.clearable,"onUpdate:modelValue":o[9]||(o[9]=a=>e.example.clearable=a)},{default:n(()=>[W,X]),_:1},8,["modelValue"])]),l("div",null,[Y,t(r,{id:"use-loader",modelValue:e.example.useLoader,"onUpdate:modelValue":o[10]||(o[10]=a=>e.example.useLoader=a)},{default:n(()=>[Z,$]),_:1},8,["modelValue"])]),l("div",null,[ee,t(r,{id:"is-loading",modelValue:e.example.isLoading,"onUpdate:modelValue":o[11]||(o[11]=a=>e.example.isLoading=a)},{default:n(()=>[le,oe]),_:1},8,["modelValue"])]),l("div",null,[ae,t(c,{id:"state",modelValue:e.example.state,"onUpdate:modelValue":o[12]||(o[12]=a=>e.example.state=a)},{default:n(()=>[te,ne,de,ie]),_:1},8,["modelValue"])])])]),_:1}),t(p,null,{name:n(()=>[se,t(x,{"style-badge":"secondary tiny",class:"ml-2","update-animation":"scale-up","update-key":e.events.length},{default:n(()=>[_(B(e.events.length),1)]),_:1},8,["update-key"])]),default:n(()=>[t(V,{events:e.events},null,8,["events"])]),_:1})]),_:1})],64)}const _e=h(U,[["render",me]]);export{_e as default};