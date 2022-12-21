"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96630],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=u(r),d=o,f=g["".concat(l,".").concat(d)]||g[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},10118:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"DigitalOcean Machine Configuration"},a=void 0,c={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",id:"version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",title:"DigitalOcean Machine Configuration",description:"For more details about DigitalOcean, Droplets, refer to the official documentation.",source:"@site/versioned_docs/version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",permalink:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/digitalocean.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"DigitalOcean Machine Configuration"},sidebar:"tutorialSidebar",previous:{title:"EC2 Machine Configuration Reference",permalink:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/amazon-ec2"},next:{title:"Azure Machine Configuration",permalink:"/v2.6/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/azure"}},l={},u=[{value:"Region",id:"region",level:3},{value:"Size",id:"size",level:3},{value:"OS Image",id:"os-image",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"IPv6",id:"ipv6",level:3},{value:"Private Networking",id:"private-networking",level:3},{value:"Droplet Tags",id:"droplet-tags",level:3}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For more details about DigitalOcean, Droplets, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/compute/"},"official documentation"),"."),(0,o.kt)("h3",{id:"region"},"Region"),(0,o.kt)("p",null,"Configure the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/app-platform/concepts/region/"},"region")," where Droplets are created."),(0,o.kt)("h3",{id:"size"},"Size"),(0,o.kt)("p",null,"Configure the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/droplets/resources/choose-plan/"},"size")," of Droplets."),(0,o.kt)("h3",{id:"os-image"},"OS Image"),(0,o.kt)("p",null,"Configure the operating system ",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/images/"},"image")," Droplets are created from."),(0,o.kt)("h3",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"Enable the DigitalOcean agent for additional ",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/monitoring/"},"monitoring"),"."),(0,o.kt)("h3",{id:"ipv6"},"IPv6"),(0,o.kt)("p",null,"Enable IPv6 for Droplets."),(0,o.kt)("h3",{id:"private-networking"},"Private Networking"),(0,o.kt)("p",null,"Enable private networking for Droplets."),(0,o.kt)("h3",{id:"droplet-tags"},"Droplet Tags"),(0,o.kt)("p",null,"Apply a tag (label) to a Droplet. Tags may only contain letters, numbers, colons, dashes, and underscores. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"my_server"),"."))}p.isMDXComponent=!0}}]);