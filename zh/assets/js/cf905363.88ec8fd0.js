"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[62717],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"\u6dfb\u52a0\u9879\u76ee\u6210\u5458"},p=void 0,l={unversionedId:"how-to-guides/new-user-guides/add-users-to-projects",id:"version-2.6/how-to-guides/new-user-guides/add-users-to-projects",title:"\u6dfb\u52a0\u9879\u76ee\u6210\u5458",description:"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u96c6\u7fa4\u5185 \u7279\u5b9a \u9879\u76ee\u548c\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u4e3a\u7528\u6237\u5206\u914d\u9879\u76ee\u6210\u5458\u8d44\u683c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/add-users-to-projects.md",sourceDirName:"how-to-guides/new-user-guides",slug:"/how-to-guides/new-user-guides/add-users-to-projects",permalink:"/zh/v2.6/how-to-guides/new-user-guides/add-users-to-projects",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/add-users-to-projects.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u6dfb\u52a0\u9879\u76ee\u6210\u5458"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u5907\u4efd\u6062\u590d\u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},next:{title:"\u547d\u540d\u7a7a\u95f4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-namespaces"}},c={},u=[{value:"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u65b0\u9879\u76ee",id:"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u65b0\u9879\u76ee",level:3},{value:"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u73b0\u6709\u9879\u76ee",id:"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u73b0\u6709\u9879\u76ee",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e3a\u7528\u6237\u63d0\u4f9b\u96c6\u7fa4\u5185 ",(0,i.kt)("em",{parentName:"p"},"\u7279\u5b9a")," \u9879\u76ee\u548c\u8d44\u6e90\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u4e3a\u7528\u6237\u5206\u914d\u9879\u76ee\u6210\u5458\u8d44\u683c\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u9879\u76ee\u65f6\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\uff0c\u6216\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u73b0\u6709\u9879\u76ee\u4e2d\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u9700\u8981\u4e3a\u7528\u6237\u63d0\u4f9b\u5bf9\u96c6\u7fa4\u5185 ",(0,i.kt)("em",{parentName:"p"},"\u6240\u6709")," \u9879\u76ee\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"\u6dfb\u52a0\u96c6\u7fa4\u6210\u5458"),"\u3002"))),(0,i.kt)("h3",{id:"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u65b0\u9879\u76ee"},"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u65b0\u9879\u76ee"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u521b\u5efa\u9879\u76ee\u65f6\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\uff08\u5efa\u8bae\uff09\u3002\u6709\u5173\u521b\u5efa\u65b0\u9879\u76ee\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"\u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("h3",{id:"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u73b0\u6709\u9879\u76ee"},"\u5c06\u6210\u5458\u6dfb\u52a0\u5230\u73b0\u6709\u9879\u76ee"),(0,i.kt)("p",null,"\u521b\u5efa\u9879\u76ee\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06\u7528\u6237\u6dfb\u52a0\u4e3a\u9879\u76ee\u6210\u5458\uff0c\u4ee5\u4fbf\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u9879\u76ee\u7684\u8d44\u6e90\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u6dfb\u52a0\u9879\u76ee\u6210\u5458\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u6210\u5458\u7684\u9879\u76ee\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728",(0,i.kt)("strong",{parentName:"p"},"\u6210\u5458"),"\u9009\u9879\u5361\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u6dfb\u52a0"),"\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u641c\u7d22\u8981\u6dfb\u52a0\u5230\u9879\u76ee\u7684\u7528\u6237\u6216\u7ec4\u3002"),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u914d\u7f6e\u4e86\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\uff1a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u4f60\u952e\u5165\u65f6\uff0cRancher \u4f1a\u4ece\u4f60\u7684\u5916\u90e8\u8eab\u4efd\u9a8c\u8bc1\u6e90\u8fd4\u56de\u7528\u6237\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u5728\u4e0b\u62c9\u83dc\u5355\u4e2d\u6dfb\u52a0\u7ec4\uff0c\u800c\u4e0d\u662f\u5355\u4e2a\u7528\u6237\u3002\u4e0b\u62c9\u5217\u8868\u4ec5\u4f1a\u5217\u51fa\u4f60\uff08\u767b\u5f55\u7528\u6237\uff09\u6240\u5728\u7684\u7ec4\u3002"))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4ee5\u672c\u5730\u7528\u6237\u8eab\u4efd\u767b\u5f55\uff0c\u5916\u90e8\u7528\u6237\u4e0d\u4f1a\u663e\u793a\u5728\u4f60\u7684\u641c\u7d22\u7ed3\u679c\u4e2d\u3002")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5206\u914d\u7528\u6237\u6216\u7ec4\u7684",(0,i.kt)("strong",{parentName:"p"},"\u9879\u76ee"),"\u89d2\u8272\u3002"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"\u4ec0\u4e48\u662f\u9879\u76ee\u89d2\u8272\uff1f")),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u4e8b\u9879\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u5206\u914d\u5230\u4e86\u9879\u76ee\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u6240\u6709\u8005"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"\u6210\u5458"),"\u89d2\u8272\uff0c\u7528\u6237\u4f1a\u81ea\u52a8\u7ee7\u627f",(0,i.kt)("inlineCode",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u521b\u5efa"),"\u89d2\u8272\u3002\u7136\u800c\uff0c\u8fd9\u4e2a\u89d2\u8272\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole"},"Kubernetes ClusterRole"),"\uff0c\u8fd9\u8868\u793a\u89d2\u8272\u7684\u8303\u56f4\u4f1a\u5ef6\u5c55\u5230\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u9879\u76ee\u3002\u56e0\u6b64\uff0c\u5bf9\u4e8e\u663e\u5f0f\u5206\u914d\u5230\u4e86\u9879\u76ee",(0,i.kt)("inlineCode",{parentName:"p"},"\u6240\u6709\u8005"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"\u6210\u5458"),"\u89d2\u8272\u7684\u7528\u6237\u6765\u8bf4\uff0c\u5373\u4f7f\u53ea\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"\u53ea\u8bfb"),"\u89d2\u8272\uff0c\u8fd9\u4e9b\u7528\u6237\u4e5f\u53ef\u4ee5\u5728\u5206\u914d\u7ed9\u4ed6\u4eec\u7684\u5176\u4ed6\u9879\u76ee\u4e2d\u521b\u5efa\u6216\u5220\u9664\u547d\u540d\u7a7a\u95f4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u7684",(0,i.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6210\u5458"),"\u89d2\u8272\u7ee7\u627f\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes-edit")," \u89d2\u8272\uff0c\u800c",(0,i.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6240\u6709\u8005"),"\u89d2\u8272\u7ee7\u627f\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"Kubernetes-admin")," \u89d2\u8272\u3002\u56e0\u6b64\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6210\u5458"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u6240\u6709\u8005"),"\u89d2\u8272\u90fd\u80fd\u7ba1\u7406\u547d\u540d\u7a7a\u95f4\uff0c\u5305\u62ec\u521b\u5efa\u548c\u5220\u9664\u547d\u540d\u7a7a\u95f4\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5bf9\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"\u81ea\u5b9a\u4e49"),"\u89d2\u8272\uff0c\u4f60\u53ef\u4ee5\u4fee\u6539\u53ef\u5206\u914d\u7684\u89d2\u8272\u5217\u8868\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8981\u5c06\u89d2\u8272\u6dfb\u52a0\u5230\u5217\u8868\u4e2d\uff0c\u8bf7",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles"},"\u6dfb\u52a0\u81ea\u5b9a\u4e49\u89d2\u8272"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u4ece\u5217\u8868\u4e2d\u5220\u9664\u89d2\u8272\uff0c\u8bf7",(0,i.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/locked-roles"},"\u9501\u5b9a/\u89e3\u9501\u89d2\u8272"),"\u3002")))))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06\u9009\u4e2d\u7684\u7528\u6237\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8981\u64a4\u9500\u9879\u76ee\u6210\u5458\u8d44\u683c\uff0c\u8bf7\u9009\u62e9\u7528\u6237\u5e76\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002\u6b64\u64cd\u4f5c\u4f1a\u5220\u9664\u6210\u5458\u8d44\u683c\uff0c\u800c\u4e0d\u4f1a\u5220\u9664\u7528\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8981\u4fee\u6539\u9879\u76ee\u4e2d\u7684\u7528\u6237\u89d2\u8272\uff0c\u8bf7\u5c06\u5176\u4ece\u9879\u76ee\u4e2d\u5220\u9664\uff0c\u7136\u540e\u4f7f\u7528\u4fee\u6539\u540e\u7684\u89d2\u8272\u91cd\u65b0\u6dfb\u52a0\u7528\u6237\u3002")))}d.isMDXComponent=!0}}]);