import{s as m}from"./doc-tools.f01ca670.js";import{_ as h,f as o,c as l,b as n,a as d,w as x,e as t,d as _,o as r,F as f,i as p}from"./index.55f63345.js";const b={setup(){let i=o([]),a=o({}),c={required:!0,minElements:3,maxElements:5},e=o(["english","swedish","korean","german","icelandic","japanese"]);return{languages:i,languagesStatus:a,languagesRules:c,languagesData:e,stringifyObject:m}}},v={class:"flex gap-x-20"},k={class:"basis-1/2 pl-4"},V={class:"my-2"},y={class:"m-0"},L=t("      "),T=["innerHTML"],H=t(`\r
      `),M=["innerHTML"],j=t(`\r
      `),E=["innerHTML"],C=t(`\r
    `);function O(i,a,c,e,w,B){const u=_("v-checkbox"),g=_("v-checkbox-group");return r(),l("div",v,[n("div",k,[d(g,{modelValue:e.languages,"onUpdate:modelValue":a[0]||(a[0]=s=>e.languages=s),rules:e.languagesRules,"onUpdate:status":a[1]||(a[1]=s=>e.languagesStatus=s)},{default:x(()=>[(r(!0),l(f,null,p(e.languagesData,s=>(r(),l("div",V,[d(u,{value:s,id:"language-"+s,label:s},null,8,["value","id","label"])]))),256))]),_:1},8,["modelValue","rules"])]),n("pre",y,[L,n("code",{innerHTML:"model: "+e.stringifyObject(e.languages)},null,8,T),H,n("code",{innerHTML:"rules: "+e.stringifyObject(e.languagesRules)},null,8,M),j,n("code",{innerHTML:"status: "+e.stringifyObject(e.languagesStatus,!0)},null,8,E),C])])}const S=h(b,[["render",O],["__scopeId","data-v-6369d7d6"]]);export{S as default};
