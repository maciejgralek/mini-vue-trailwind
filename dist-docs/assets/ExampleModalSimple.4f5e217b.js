import{_ as m,f as c,c as _,a as s,w as l,F as p,d as i,o as u,e as a}from"./index.55f63345.js";const f={setup(){return{isVisible:c(!1)}}},V=a("Show modal"),b=a(" Simple modal it is. ");function v(n,e,x,o,S,k){const d=i("v-button"),r=i("v-modal");return u(),_(p,null,[s(d,{onClick:e[0]||(e[0]=t=>o.isVisible=!o.isVisible)},{default:l(()=>[V]),_:1}),s(r,{modelValue:o.isVisible,"onUpdate:modelValue":e[1]||(e[1]=t=>o.isVisible=t),title:"Simple modal","primary-button-close":"","secondary-button-close":""},{default:l(()=>[b]),_:1},8,["modelValue"])],64)}const C=m(f,[["render",v]]);export{C as default};
