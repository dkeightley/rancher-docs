"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36017],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(g,a(a({ref:t},s),{},{components:r})):n.createElement(g,a({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84912:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={title:"\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u7684\u7528\u6237 ID \u8ddf\u8e2a"},l=void 0,c={unversionedId:"troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",id:"troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",title:"\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u7684\u7528\u6237 ID \u8ddf\u8e2a",description:"Rancher \u4f7f\u7528\u4ee5\u4e0b\u5ba1\u8ba1\u65e5\u5fd7\u6765\u8ddf\u8e2a\u672c\u5730\u548c\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",permalink:"/zh/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u7684\u7528\u6237 ID \u8ddf\u8e2a"},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/zh/troubleshooting/other-troubleshooting-tips/logging"},next:{title:"\u8fc7\u671f Webhook \u8bc1\u4e66\u8f6e\u6362",permalink:"/zh/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"}},s={},p=[{value:"\u529f\u80fd\u63cf\u8ff0",id:"\u529f\u80fd\u63cf\u8ff0",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rancher \u4f7f\u7528\u4ee5\u4e0b\u5ba1\u8ba1\u65e5\u5fd7\u6765\u8ddf\u8e2a\u672c\u5730\u548c\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u53d1\u751f\u7684\u4e8b\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/audit-log/"},"Kubernetes \u5ba1\u8ba1\u65e5\u5fd7")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},"Rancher API \u5ba1\u6838\u65e5\u5fd7"))),(0,i.kt)("p",null,"Rancher 2.6 \u589e\u5f3a\u4e86\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u5728 Rancher \u548c\u4e0b\u6e38 Kubernetes \u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u90fd\u5305\u542b\u4e86\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u540d\u79f0\uff08\u5373\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u4e2d\u7528\u6237\u7684\u901a\u7528\u540d\u79f0\uff09\u3002"),(0,i.kt)("p",null,"\u5728 Rancher 2.6 \u4e4b\u524d\uff0c\u5982\u679c\u7ba1\u7406\u5458\u4e0d\u77e5\u9053\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u4e2d\u7684\u7528\u6237\u540d\u548c Rancher \u4e2d\u7684 userId (",(0,i.kt)("inlineCode",{parentName:"p"},"u-xXXX"),") \u4e4b\u95f4\u7684\u6620\u5c04\uff0c\u5219\u65e0\u6cd5\u901a\u8fc7 Rancher \u5ba1\u8ba1\u65e5\u5fd7\u548c Kubernetes \u5ba1\u8ba1\u65e5\u5fd7\u6765\u8ffd\u8e2a\u4e8b\u4ef6\u3002\n\u8981\u77e5\u9053\u8fd9\u4e2a\u6620\u5c04\uff0c\u96c6\u7fa4\u7ba1\u7406\u5458\u9700\u8981\u80fd\u591f\u8bbf\u95ee Rancher API\u3001UI \u548c local \u7ba1\u7406\u96c6\u7fa4\u3002"),(0,i.kt)("p",null,"\u6709\u4e86\u8fd9\u4e2a\u529f\u80fd\u4e4b\u540e\uff0c\u4e0b\u6e38\u96c6\u7fa4\u7ba1\u7406\u5458\u5c31\u80fd\u591f\u67e5\u770b Kubernetes \u5ba1\u8ba1\u65e5\u5fd7\uff0c\u5e76\u4e14\u53ef\u4ee5\u4e0d\u5728 Rancher \u4e2d\u67e5\u770b\u4efb\u4f55\u5185\u5bb9\u5c31\u80fd\u77e5\u9053\u54ea\u4e2a\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f (IDP) \u7528\u6237\u6267\u884c\u4e86\u67d0\u9879\u64cd\u4f5c\u3002\n\u5982\u679c\u96c6\u7fa4\u4f20\u51fa\u4e86\u5ba1\u8ba1\u65e5\u5fd7\uff0c\u65e5\u5fd7\u7cfb\u7edf\u7684\u7528\u6237\u5c31\u80fd\u591f\u8bc6\u522b\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u4e2d\u7684\u7528\u6237\u3002\nRancher \u7ba1\u7406\u5458\u73b0\u5728\u80fd\u591f\u67e5\u770b Rancher \u5ba1\u8ba1\u65e5\u5fd7\uff0c\u5e76\u4f7f\u7528\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u7528\u6237\u540d\u6765\u8ddf\u8e2a Kubernetes \u5ba1\u8ba1\u65e5\u5fd7\u3002"),(0,i.kt)("h3",{id:"\u529f\u80fd\u63cf\u8ff0"},"\u529f\u80fd\u63cf\u8ff0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e0b\u6e38\u96c6\u7fa4\u542f\u7528\u4e86 Kubernetes \u5ba1\u8ba1\u65e5\u5fd7\u540e\uff0c\u4f1a\u5728\u201c\u5143\u6570\u636e\u201d\u7ea7\u522b\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u8bb0\u5f55\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u7684\u7528\u6237\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728 Rancher \u542f\u7528 Rancher API \u5ba1\u8ba1\u65e5\u5fd7\u540e\uff0c\u6bcf\u4e2a\u5230\u8fbe Rancher API Server \u7684\u8bf7\u6c42\u8bb0\u5f55\uff08\u5305\u62ec\u767b\u5f55\u8bf7\u6c42\uff09\u5bf9\u5e94\u7684\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u7528\u6237\u540d\u4e5f\u4f1a\u8bb0\u5f55\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"auditLog.level=1")," \u4e2d\u3002")))}h.isMDXComponent=!0}}]);