"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80784],{3905:function(e,r,n){n.d(r,{Zo:function(){return o},kt:function(){return p}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},o=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),h=l(n),p=a,g=h["".concat(c,".").concat(p)]||h[p]||d[p]||i;return n?t.createElement(g,s(s({ref:r},o),{},{components:n})):t.createElement(g,s({ref:r},o))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<i;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},28599:function(e,r,n){n.r(r),n.d(r,{assets:function(){return o},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return d}});var t=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],u={title:"Rancher v2.4",weight:2,aliases:["/rancher/v2.x/en/security/rancher-2.4/"]},c=void 0,l={unversionedId:"pages-for-subheaders/rancher-v2.4-hardening-guides",id:"version-2.0-2.4/pages-for-subheaders/rancher-v2.4-hardening-guides",title:"Rancher v2.4",description:"Self Assessment Guide",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-v2.4-hardening-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-v2.4-hardening-guides",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-v2.4-hardening-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-v2.4-hardening-guides.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/25/2022",frontMatter:{title:"Rancher v2.4",weight:2,aliases:["/rancher/v2.x/en/security/rancher-2.4/"]},sidebar:"tutorialSidebar",previous:{title:"Hardening Guide v2.3.5",permalink:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.3-hardening-guides/rancher-v2.3.5-hardening-guide-with-cis-v1.5-benchmark"},next:{title:"CIS Benchmark Rancher Self-Assessment Guide - v2.4",permalink:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.4-hardening-guides/self-assessment-guide-with-cis-v1.5-benchmark"}},o={},d=[{value:"Self Assessment Guide",id:"self-assessment-guide",level:3},{value:"Hardening Guide",id:"hardening-guide",level:3}],h={toc:d};function p(e){var r=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},h,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"self-assessment-guide"},"Self Assessment Guide"),(0,i.kt)("p",null,"This ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.4-hardening-guides/self-assessment-guide-with-cis-v1.5-benchmark"},"guide")," corresponds to specific versions of the hardening guide, Rancher, Kubernetes, and the CIS Benchmark:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Self Assessment Guide Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guide Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Self Assessment Guide v2.4"),(0,i.kt)("td",{parentName:"tr",align:null},"Rancher v2.4"),(0,i.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.4"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes v1.15"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmark v1.5")))),(0,i.kt)("h3",{id:"hardening-guide"},"Hardening Guide"),(0,i.kt)("p",null,"This hardening ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-security/rancher-v2.4-hardening-guides/hardening-guide-with-cis-v1.5-benchmark"},"guide")," is intended to be used with specific versions of the CIS Kubernetes Benchmark, Kubernetes, and Rancher:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hardening Guide Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Rancher Version"),(0,i.kt)("th",{parentName:"tr",align:null},"CIS Benchmark Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Kubernetes Version"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Hardening Guide v2.4"),(0,i.kt)("td",{parentName:"tr",align:null},"Rancher v2.4"),(0,i.kt)("td",{parentName:"tr",align:null},"Benchmark v1.5"),(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes 1.15")))))}p.isMDXComponent=!0}}]);