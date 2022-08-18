import{_ as u,r as b,f,c as V,a,w as s,F as y,b as t,d as n,o as g,e as p,g as h}from"./index.55f63345.js";const w={setup(){let d=b({model:"",label:"Textarea label",state:""}),l=f([]);return{example:d,events:l}}},T=t("p",{class:"my-6"},"Alternative style textarea",-1),U={class:"flex flex-col gap-y-2 mt-5"},B=t("label",{for:"model",class:"font-semibold"},"v-model:",-1),E=t("label",{for:"label"},"label:",-1),N=t("label",{for:"state"},"state:",-1),k=t("option",{value:null},"component controlled (null)",-1),C=t("option",{value:""},"normal (empty string)",-1),F=t("option",{value:"valid"},"valid",-1),A=t("option",{value:"invalid"},"invalid",-1),D=p(" Events ");function P(d,l,S,e,j,q){const m=n("v-textarea"),i=n("v-input"),r=n("v-select"),_=n("v-tab"),v=n("v-badge"),c=n("event-viewer"),x=n("v-tabs");return g(),V(y,null,[a(m,{modelValue:e.example.model,"onUpdate:modelValue":l[0]||(l[0]=o=>e.example.model=o),label:e.example.label,state:e.example.state,inline:"",placeholder:"Type something...",class:"w-[400px] h-[120px]"},null,8,["modelValue","label","state"]),T,a(m,{modelValue:e.example.model,"onUpdate:modelValue":l[1]||(l[1]=o=>e.example.model=o),base:"underlined",label:e.example.label,state:e.example.state,inline:"",placeholder:"Type something...",class:"w-[400px] h-[120px]"},null,8,["modelValue","label","state"]),a(x,{base:"material",class:"mt-10"},{default:s(()=>[a(_,{name:"Props"},{default:s(()=>[t("div",U,[t("div",null,[B,a(i,{type:"text",id:"model",inline:"",modelValue:e.example.model,"onUpdate:modelValue":l[2]||(l[2]=o=>e.example.model=o)},null,8,["modelValue"])]),t("div",null,[E,a(i,{type:"text",id:"label",inline:"",modelValue:e.example.label,"onUpdate:modelValue":l[3]||(l[3]=o=>e.example.label=o)},null,8,["modelValue"])]),t("div",null,[N,a(r,{id:"state",modelValue:e.example.state,"onUpdate:modelValue":l[4]||(l[4]=o=>e.example.state=o)},{default:s(()=>[k,C,F,A]),_:1},8,["modelValue"])])])]),_:1}),a(_,null,{name:s(()=>[D,a(v,{"style-badge":"secondary tiny"},{default:s(()=>[p(h(e.events.length),1)]),_:1})]),default:s(()=>[a(c,{events:e.events},null,8,["events"])]),_:1})]),_:1})],64)}const G=u(w,[["render",P]]);export{G as default};
