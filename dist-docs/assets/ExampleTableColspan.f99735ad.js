import{d as r}from"./company-simple.0b079c78.js";import{_ as d,r as p,h as i,w as _,d as m,o as f,b as a,e as o,g as n}from"./index.55f63345.js";const u={setup(){let s=p({data:r.slice(0,5)});return s.data=s.data.map(e=>({colspan:{...e},...e})),{example:s}}},x={class:"dark:bg-dark-700 p-2 px-4 m-2"},b=a("span",{class:"font-semibold"},"First name:",-1),v=a("span",{class:"font-semibold"},"City:",-1);function h(s,e,k,c,C,g){const l=m("v-table");return f(),i(l,{items:c.example.data,class:"w-full"},{colspan:_(({item:t})=>[a("div",x,[a("div",null,[b,o(" "+n(t.first_name),1)]),a("div",null,[v,o(" "+n(t.city),1)])])]),_:1},8,["items"])}const B=d(u,[["render",h]]);export{B as default};