"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),N=m(r),c=a,u=N["".concat(l,".").concat(c)]||N[c]||k[c]||i;return r?n.createElement(u,p(p({ref:t},s),{},{components:r})):n.createElement(u,p({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=N;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var m=2;m<i;m++)p[m]=r[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}N.displayName="MDXCreateElement"},53739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={title:"\u4e3a\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u6301\u4e45\u6570\u636e"},p=void 0,o={unversionedId:"reference-guides/pipelines/configure-persistent-data",id:"version-2.6/reference-guides/pipelines/configure-persistent-data",title:"\u4e3a\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u6301\u4e45\u6570\u636e",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d41\u6c34\u7ebf\u5185\u90e8\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u5de5\u4f5c\u8d1f\u8f7d\u90fd\u4f7f\u7528\u4e34\u65f6\u5377\u3002\u8fd9\u662f\u5f00\u7bb1\u5373\u7528\u7684\u9ed8\u8ba4\u5b58\u50a8\u65b9\u5f0f\uff0c\u80fd\u8ba9\u6d4b\u8bd5\u53d8\u5f97\u66f4\u52a0\u4fbf\u5229\u3002\u4f46\u5982\u679c\u8fd0\u884c Docker \u955c\u50cf\u4ed3\u5e93\u6216 Minio \u7684\u8282\u70b9\u51fa\u73b0\u6545\u969c\uff0c\u4f60\u5c06\u4e22\u5931\u6784\u5efa\u955c\u50cf\u548c\u6784\u5efa\u65e5\u5fd7\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e0d\u662f\u592a\u5927\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u5e0c\u671b\u6784\u5efa\u955c\u50cf\u548c\u65e5\u5fd7\u80fd\u591f\u5728\u8282\u70b9\u6545\u969c\u4e2d\u5e78\u514d\u4e8e\u96be\uff0c\u4f60\u53ef\u4ee5\u8ba9 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u4f7f\u7528\u6301\u4e45\u5377\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/reference-guides/pipelines/configure-persistent-data.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/configure-persistent-data",permalink:"/zh/v2.6/reference-guides/pipelines/configure-persistent-data",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/reference-guides/pipelines/configure-persistent-data.md",tags:[],version:"2.6",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"\u4e3a\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u6301\u4e45\u6570\u636e"},sidebar:"tutorialSidebar",previous:{title:"\u6d41\u6c34\u7ebf\u914d\u7f6e\u53c2\u8003",permalink:"/zh/v2.6/reference-guides/pipelines/pipeline-configuration"},next:{title:"\u793a\u4f8b\u4ed3\u5e93",permalink:"/zh/v2.6/reference-guides/pipelines/example-repositories"}},l={},m=[{value:"A. \u4e3a Docker \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e",id:"a-\u4e3a-docker-\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e",level:3},{value:"B. \u4e3a Minio \u914d\u7f6e\u6301\u4e45\u6570\u636e",id:"b-\u4e3a-minio-\u914d\u7f6e\u6301\u4e45\u6570\u636e",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},k=s("Tabs"),N=s("TabItem"),c={toc:m};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6d41\u6c34\u7ebf\u5185\u90e8\u7684 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u5de5\u4f5c\u8d1f\u8f7d\u90fd\u4f7f\u7528\u4e34\u65f6\u5377\u3002\u8fd9\u662f\u5f00\u7bb1\u5373\u7528\u7684\u9ed8\u8ba4\u5b58\u50a8\u65b9\u5f0f\uff0c\u80fd\u8ba9\u6d4b\u8bd5\u53d8\u5f97\u66f4\u52a0\u4fbf\u5229\u3002\u4f46\u5982\u679c\u8fd0\u884c Docker \u955c\u50cf\u4ed3\u5e93\u6216 Minio \u7684\u8282\u70b9\u51fa\u73b0\u6545\u969c\uff0c\u4f60\u5c06\u4e22\u5931\u6784\u5efa\u955c\u50cf\u548c\u6784\u5efa\u65e5\u5fd7\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e0d\u662f\u592a\u5927\u7684\u95ee\u9898\u3002\u5982\u679c\u4f60\u5e0c\u671b\u6784\u5efa\u955c\u50cf\u548c\u65e5\u5fd7\u80fd\u591f\u5728\u8282\u70b9\u6545\u969c\u4e2d\u5e78\u514d\u4e8e\u96be\uff0c\u4f60\u53ef\u4ee5\u8ba9 Docker \u955c\u50cf\u4ed3\u5e93\u548c Minio \u4f7f\u7528\u6301\u4e45\u5377\u3002"),(0,a.kt)("p",null,"\u672c\u8282\u5047\u8bbe\u4f60\u4e86\u89e3\u6301\u4e45\u5b58\u50a8\u5728 Kubernetes \u4e2d\u7684\u5de5\u4f5c\u539f\u7406\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406"),"\u3002"),(0,a.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff08\u9002\u7528\u4e8e A \u548c B\uff09\uff1a",type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/create-kubernetes-persistent-storage"},"\u6301\u4e45\u5377"),"\u5fc5\u987b\u5728\u96c6\u7fa4\u4e2d\u53ef\u7528\u3002")),(0,a.kt)("h3",{id:"a-\u4e3a-docker-\u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e"},"A. \u4e3a Docker \u955c\u50cf\u4ed3\u5e93\u914d\u7f6e\u6301\u4e45\u6570\u636e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-registry")," \u5de5\u4f5c\u8d1f\u8f7d\u5e76\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6eda\u52a8\u5230",(0,a.kt)("strong",{parentName:"p"},"\u5377"),"\u90e8\u5206\u5e76\u5c55\u5f00\u5b83\u3002\u4ece\u5e95\u90e8\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u5377"),"\u83dc\u5355\u4e2d\u9009\u62e9\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4e3a\u5185\u90e8 Docker \u955c\u50cf\u4ed3\u5e93\u9009\u62e9\u6301\u4e45\u5377\u7684\u8868\u5355\u3002"),(0,a.kt)(k,{mdxType:"Tabs"},(0,a.kt)(N,{value:"\u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,a.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u5377\u58f0\u660e",(0,a.kt)("strong",{parentName:"li"},"\u6e90"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5b58\u50a8\u7c7b\u6765\u914d\u7f6e\u65b0\u6301\u4e45\u5377"),"\uff0c\u8bf7\u9009\u62e9\u5b58\u50a8\u7c7b\u5e76\u8f93\u5165",(0,a.kt)("strong",{parentName:"li"},"\u5bb9\u91cf"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377"),"\uff0c\u8bf7\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u4ece",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))),(0,a.kt)(N,{value:"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,a.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377\u58f0\u660e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ece",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/registry"),"\uff0c\u8fd9\u662f Docker \u955c\u50cf\u4ed3\u5e93\u5bb9\u5668\u5185\u7684\u6570\u636e\u5b58\u50a8\u8def\u5f84\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u5347\u7ea7"),"\u3002"))),(0,a.kt)("h3",{id:"b-\u4e3a-minio-\u914d\u7f6e\u6301\u4e45\u6570\u636e"},"B. \u4e3a Minio \u914d\u7f6e\u6301\u4e45\u6570\u636e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"minio")," \u5de5\u4f5c\u8d1f\u8f7d\u5e76\u9009\u62e9 ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91"),"\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6eda\u52a8\u5230",(0,a.kt)("strong",{parentName:"p"},"\u5377"),"\u90e8\u5206\u5e76\u5c55\u5f00\u5b83\u3002\u4ece\u5e95\u90e8\u7684",(0,a.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u5377"),"\u83dc\u5355\u4e2d\u9009\u62e9\u4ee5\u4e0b\u9009\u9879\u4e4b\u4e00\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u5377 > \u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377\uff08\u58f0\u660e\uff09")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b8c\u6210\u4e3a\u5185\u90e8 Docker \u955c\u50cf\u4ed3\u5e93\u9009\u62e9\u6301\u4e45\u5377\u7684\u8868\u5355\u3002"),(0,a.kt)(k,{mdxType:"Tabs"},(0,a.kt)(N,{value:"\u6dfb\u52a0\u65b0\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,a.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u5377\u58f0\u660e",(0,a.kt)("strong",{parentName:"li"},"\u6e90"),"\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5b58\u50a8\u7c7b\u6765\u914d\u7f6e\u65b0\u6301\u4e45\u5377"),"\uff0c\u8bf7\u9009\u62e9\u5b58\u50a8\u7c7b\u5e76\u8f93\u5165",(0,a.kt)("strong",{parentName:"li"},"\u5bb9\u91cf"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377"),"\uff0c\u8bf7\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},"\u4ece",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))),(0,a.kt)(N,{value:"\u4f7f\u7528\u5df2\u6709\u7684\u6301\u4e45\u5377",mdxType:"TabItem"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u58f0\u660e\u7684",(0,a.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ece\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377\u58f0\u660e"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4ece",(0,a.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u4e2d\uff0c\u9009\u62e9\u5377\u7684\u8bfb/\u5199\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5b9a\u4e49"),"\u3002"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728",(0,a.kt)("strong",{parentName:"p"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"/data"),"\uff0c\u8fd9\u662f Minio \u5bb9\u5668\u5185\u7684\u6570\u636e\u5b58\u50a8\u8def\u5f84\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,a.kt)("strong",{parentName:"p"},"\u5347\u7ea7"),"\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u4e3a\u4f60\u7684\u6d41\u6c34\u7ebf\u7ec4\u4ef6\u914d\u7f6e\u4e86\u6301\u4e45\u5b58\u50a8\u3002"))}u.isMDXComponent=!0}}]);