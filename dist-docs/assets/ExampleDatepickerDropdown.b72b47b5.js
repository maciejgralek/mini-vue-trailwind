import{_ as v,r as x,c as f,a,w as d,b as l,F as b,d as n,o as V,m as w,t as k}from"./index.55f63345.js";const h={setup(){return{example:x({date:"",buttons:!1})}}},g={class:"mt-4 lg:ml-10 lg:mt-0"},B={class:"mb-2"},U=l("label",{for:"dropdown-buttons"},"buttons:",-1),y=l("option",{value:!0},"true",-1),C=l("option",{value:!1},"false",-1);function D(r,t,E,e,F,N){const p=n("v-input"),m=n("v-date-picker"),c=n("v-card"),_=n("v-dropdown"),u=n("v-select-prop");return V(),f(b,null,[a(_,null,{reference:d(({reference:o,onTrigger:s})=>[a(p,w({ref:o},k(s),{type:"text",modelValue:e.example.date,"onUpdate:modelValue":t[0]||(t[0]=i=>e.example.date=i),placeholder:"Pick date"}),null,16,["modelValue"])]),default:d(({hide:o})=>[a(c,{"style-card":"shadow",class:"p-2"},{default:d(()=>[a(m,{modelValue:e.example.date,"onUpdate:modelValue":t[1]||(t[1]=s=>e.example.date=s),width:"305px",buttons:e.example.buttons,"adjacent-months":"","onState:done":o},null,8,["modelValue","buttons","onState:done"])]),_:2},1024)]),_:1}),l("div",g,[l("div",B,[U,a(u,{id:"dropdown-buttons",modelValue:e.example.buttons,"onUpdate:modelValue":t[2]||(t[2]=o=>e.example.buttons=o)},{default:d(()=>[y,C]),_:1},8,["modelValue"])])])],64)}const S=v(h,[["render",D]]);export{S as default};
