import{_ as p,r as i,c as _,b as l,a as s,w as d,g as r,F as x,d as m,o as g}from"./index.55f63345.js";const u={setup(){return{example:i({single:"",range:""})}}},f={class:"flex"},v={class:"ml-10"},V={class:"flex"},h={class:"ml-10"};function k(c,a,w,e,y,B){const t=m("v-date-picker"),o=m("v-card");return g(),_(x,null,[l("div",f,[s(o,{style:{width:"320px"},class:"p-2"},{default:d(()=>[s(t,{modelValue:e.example.single,"onUpdate:modelValue":a[0]||(a[0]=n=>e.example.single=n),"adjacent-months":""},null,8,["modelValue"])]),_:1}),l("span",v,"v-model (single): "+r(e.example.single),1)]),l("div",V,[s(o,{style:{width:"320px"},class:"p-2 mt-2"},{default:d(()=>[s(t,{modelValue:e.example.range,"onUpdate:modelValue":a[1]||(a[1]=n=>e.example.range=n),range:"","adjacent-months":""},null,8,["modelValue"])]),_:1}),l("span",h,"v-model (range): "+r(e.example.range),1)])],64)}const C=p(u,[["render",k]]);export{C as default};
