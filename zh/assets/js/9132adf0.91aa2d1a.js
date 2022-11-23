"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66951],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(r),c=a,k=g["".concat(l,".").concat(c)]||g[c]||m[c]||s;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},40338:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8"},l=void 0,p={unversionedId:"how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",id:"version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",title:"\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Rancher \u4e2d\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e\u73b0\u6709\u7684\u6301\u4e45\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8"},sidebar:"tutorialSidebar",previous:{title:"\u6301\u4e45\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},next:{title:"\u5728 Rancher \u4e2d\u52a8\u6001\u914d\u7f6e\u65b0\u5b58\u50a8",permalink:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"}},u={},m=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8",id:"1-\u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8",level:3},{value:"2. \u6dfb\u52a0\u4e00\u4e2a\u5f15\u7528\u6301\u4e45\u5b58\u50a8\u7684 PersistentVolume",id:"2-\u6dfb\u52a0\u4e00\u4e2a\u5f15\u7528\u6301\u4e45\u5b58\u50a8\u7684-persistentvolume",level:3},{value:"3. \u4e3a\u4f7f\u7528 StatefulSet \u90e8\u7f72\u7684 Pod \u4f7f\u7528\u5b58\u50a8\u7c7b",id:"3-\u4e3a\u4f7f\u7528-statefulset-\u90e8\u7f72\u7684-pod-\u4f7f\u7528\u5b58\u50a8\u7c7b",level:3}],g={toc:m};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 Rancher \u4e2d\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e\u73b0\u6709\u7684\u6301\u4e45\u5b58\u50a8\u3002"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u672c\u8282\u5047\u8bbe\u4f60\u4e86\u89e3 Kubernetes \u7684\u6301\u4e45\u5377\u548c\u6301\u4e45\u5377\u58f0\u660e\u7684\u6982\u5ff5\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-persistent-storage"},"\u5b58\u50a8\u7684\u5de5\u4f5c\u539f\u7406"),"\u3002"))),(0,s.kt)("p",null,"\u8981\u8bbe\u7f6e\u5b58\u50a8\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#1-%E8%AE%BE%E7%BD%AE%E6%8C%81%E4%B9%85%E5%AD%98%E5%82%A8"},"\u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#2-%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%BC%95%E7%94%A8%E6%8C%81%E4%B9%85%E5%AD%98%E5%82%A8%E7%9A%84-persistentvolume"},"\u6dfb\u52a0\u4e00\u4e2a\u5f15\u7528\u6301\u4e45\u5b58\u50a8\u7684 PersistentVolume"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#3-%E4%B8%BA%E4%BD%BF%E7%94%A8-statefulset-%E9%83%A8%E7%BD%B2%E7%9A%84-pod-%E4%BD%BF%E7%94%A8-persistentvolume"},"\u4e3a\u4f7f\u7528 StatefulSet \u90e8\u7f72\u7684 Pod \u4f7f\u7528 PersistentVolume"),"\u3002")),(0,s.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8981\u5c06\u6301\u4e45\u5377\u521b\u5efa\u4e3a Kubernetes \u8d44\u6e90\uff0c\u4f60\u5fc5\u987b\u5177\u6709",(0,s.kt)("inlineCode",{parentName:"li"},"\u7ba1\u7406\u5377"),"\u7684",(0,s.kt)("a",{parentName:"li",href:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#%E9%A1%B9%E7%9B%AE%E8%A7%92%E8%89%B2%E5%8F%82%E8%80%83"},"\u89d2\u8272\u3002")),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u8981\u4e3a\u4e91\u96c6\u7fa4\u914d\u7f6e\u5b58\u50a8\uff0c\u5219\u5b58\u50a8\u548c\u96c6\u7fa4\u4e3b\u673a\u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u4e91\u63d0\u4f9b\u5546\u3002")),(0,s.kt)("h3",{id:"1-\u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8"},"1. \u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8"),(0,s.kt)("p",null,"\u5728 Rancher \u4e2d\u521b\u5efa\u6301\u4e45\u5377\u4e0d\u4f1a\u521b\u5efa\u5b58\u50a8\u5377\u3002\u5b83\u53ea\u521b\u5efa\u6620\u5c04\u5230\u73b0\u6709\u5377\u7684 Kubernetes \u8d44\u6e90\u3002\u56e0\u6b64\uff0c\u5728\u4f60\u53ef\u4ee5\u5c06\u6301\u4e45\u5377\u521b\u5efa\u4e3a Kubernetes \u8d44\u6e90\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u5148\u914d\u7f6e\u5b58\u50a8\u3002"),(0,s.kt)("p",null,"\u8bbe\u7f6e\u6301\u4e45\u5b58\u50a8\u8bbe\u5907\u7684\u6b65\u9aa4\u4f1a\u56e0\u4f60\u7684\u57fa\u7840\u8bbe\u65bd\u800c\u5f02\u3002\u6211\u4eec\u63d0\u4f9b\u4e86\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/vsphere-storage"},"vSphere"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/nfs-storage"},"NFS")," \u6216 ",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs"},"Amazon EBS "),"\u8bbe\u7f6e\u5b58\u50a8\u7684\u793a\u4f8b\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u5757\u5b58\u50a8\u6c60\u5e76\u4e14\u4e0d\u60f3\u4f7f\u7528\u4e91\u63d0\u4f9b\u5546\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Longhorn \u4e3a Kubernetes \u96c6\u7fa4\u63d0\u4f9b\u6301\u4e45\u5b58\u50a8\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"/zh/v2.6/integrations-in-rancher/longhorn"},"\u672c\u9875\u9762"),"\u3002"),(0,s.kt)("h3",{id:"2-\u6dfb\u52a0\u4e00\u4e2a\u5f15\u7528\u6301\u4e45\u5b58\u50a8\u7684-persistentvolume"},"2. \u6dfb\u52a0\u4e00\u4e2a\u5f15\u7528\u6301\u4e45\u5b58\u50a8\u7684 PersistentVolume"),(0,s.kt)("p",null,"\u8fd9\u4e9b\u6b65\u9aa4\u63cf\u8ff0\u4e86\u5982\u4f55\u5728 Kubernetes \u7684\u96c6\u7fa4\u7ea7\u522b\u8bbe\u7f6e PersistentVolume\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u6301\u4e45\u5377\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u5b58\u50a8 > \u6301\u4e45\u5377"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f93\u5165\u6301\u4e45\u5377\u7684",(0,s.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u4e3a\u6b63\u5728\u4f7f\u7528\u7684\u78c1\u76d8\u7c7b\u578b\u6216\u670d\u52a1\u9009\u62e9",(0,s.kt)("strong",{parentName:"li"},"\u5377\u63d2\u4ef6"),"\u3002\u5c06\u5b58\u50a8\u6dfb\u52a0\u5230\u7531\u4e91\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u96c6\u7fa4\u65f6\uff0c\u8bf7\u4f7f\u7528\u4e91\u63d0\u4f9b\u5546\u7684\u4e91\u5b58\u50a8\u63d2\u4ef6\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u6709\u4e00\u4e2a Amazon EC2 \u96c6\u7fa4\u5e76\u4e14\u60f3\u8981\u4f7f\u7528\u4e91\u5b58\u50a8\uff0c\u5219\u5fc5\u987b\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"li"},"Amazon EBS \u78c1\u76d8"),"\u5377\u63d2\u4ef6\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5377\u7684",(0,s.kt)("strong",{parentName:"li"},"\u5bb9\u91cf"),"\uff08\u5355\u4f4d\uff1aGB\uff09\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u586b\u5199",(0,s.kt)("strong",{parentName:"li"},"\u63d2\u4ef6\u914d\u7f6e"),"\u8868\u5355\u3002\u6bcf\u4e2a\u63d2\u4ef6\u7c7b\u578b\u90fd\u9700\u8981\u78c1\u76d8\u7c7b\u578b\u4f9b\u5e94\u5546\u7684\u4fe1\u606f\u3002\u6709\u5173\u6bcf\u4e2a\u63d2\u4ef6\u7684\u8868\u5355\u548c\u6240\u9700\u4fe1\u606f\u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605\u63d2\u4ef6\u7684\u4f9b\u5e94\u5546\u6587\u6863\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5728",(0,s.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u8868\u5355\u4e2d\uff0c\u914d\u7f6e",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"\u8bbf\u95ee\u6a21\u5f0f"),"\u3002\u6b64\u9009\u9879\u8bbe\u7f6e\u53ef\u4ee5\u8bbf\u95ee\u5377\u7684\u8282\u70b9\u6570\u91cf\uff0c\u4ee5\u53ca\u8282\u70b9\u7684\u8bfb/\u5199\u6743\u9650\u3002",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"Kubernetes \u6587\u6863"),"\u4e2d\u7684\u8868\u683c\u5217\u51fa\u4e86\u63d2\u4ef6\u652f\u6301\u7684\u8bbf\u95ee\u6a21\u5f0f\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u5728",(0,s.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49"),"\u8868\u5355\u4e2d\uff0c\u914d\u7f6e",(0,s.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options"},"\u6302\u8f7d\u9009\u9879"),"\u3002\u6bcf\u4e2a\u5377\u63d2\u4ef6\u90fd\u5141\u8bb8\u4f60\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u6307\u5b9a\u5176\u4ed6\u547d\u4ee4\u884c\u9009\u9879\u3002\u8bf7\u67e5\u9605\u6bcf\u4e2a\u63d2\u4ef6\u7684\u4f9b\u5e94\u5546\u6587\u6863\u4ee5\u83b7\u53d6\u53ef\u7528\u7684\u6302\u8f7d\u9009\u9879\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u521b\u5efa\u4f60\u7684\u65b0\u6301\u4e45\u5377\u3002"),(0,s.kt)("h3",{id:"3-\u4e3a\u4f7f\u7528-statefulset-\u90e8\u7f72\u7684-pod-\u4f7f\u7528\u5b58\u50a8\u7c7b"},"3. \u4e3a\u4f7f\u7528 StatefulSet \u90e8\u7f72\u7684 Pod \u4f7f\u7528\u5b58\u50a8\u7c7b"),(0,s.kt)("p",null,"StatefulSet \u7ba1\u7406 Pod \u7684\u90e8\u7f72\u548c\u6269\u5c55\uff0c\u540c\u65f6\u4e3a\u6bcf\u4e2a Pod \u7ef4\u62a4\u4e00\u4e2a\u7c98\u6027\u6807\u8bc6\u3002\u5728\u8fd9\u4e2a StatefulSet \u4e2d\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u4e00\u4e2a VolumeClaimTemplate\u3002StatefulSet \u7ba1\u7406\u7684\u6bcf\u4e2a Pod \u90fd\u5c06\u90e8\u7f72\u4e00\u4e2a\u57fa\u4e8e\u6b64 VolumeClaimTemplate \u7684 PersistentVolumeClaim\u3002PersistentVolumeClaim \u5c06\u5f15\u7528\u6211\u4eec\u521b\u5efa\u7684 PersistentVolume\u3002\u56e0\u6b64\uff0c\u5728\u90e8\u7f72 StatefulSet \u7ba1\u7406\u7684\u6bcf\u4e2a Pod \u65f6\uff0c\u90fd\u4f1a\u7ed1\u5b9a\u4e00\u4e2a PersistentVolumeClaim \u4e2d\u5b9a\u4e49\u7684 PersistentVolume\u3002"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5de5\u4f5c\u8d1f\u8f7d\u521b\u5efa\u671f\u95f4\u6216\u4e4b\u540e\u4e3a StatefulSet \u914d\u7f6e\u5b58\u50a8\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u63cf\u8ff0\u4e86\u5982\u4f55\u5c06\u73b0\u6709\u5b58\u50a8\u5206\u914d\u7ed9\u65b0\u7684 StatefulSet\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u4e3a StatefulSet \u914d\u7f6e\u5b58\u50a8\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d > StatefulSets"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u9009\u62e9\u8981\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u7684\u547d\u540d\u7a7a\u95f4\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f93\u5165 StatefulSet \u7684\u540d\u79f0\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728",(0,s.kt)("strong",{parentName:"li"},"\u5377\u58f0\u660e\u6a21\u677f"),"\u9009\u9879\u5361\u4e0a\uff0c\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u58f0\u660e\u6a21\u677f"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u73b0\u6709\u7684\u6301\u4e45\u5377"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728",(0,s.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377"),"\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u4f60\u521b\u5efa\u7684\u6301\u4e45\u5377\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728",(0,s.kt)("strong",{parentName:"li"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u7528\u4e8e\u8bbf\u95ee\u5377\u7684\u8def\u5f84\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u542f\u52a8"),"\u3002")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5f53\u5de5\u4f5c\u8d1f\u8f7d\u88ab\u90e8\u7f72\u65f6\uff0c\u5b83\u4f1a\u5411 Kubernetes master \u8bf7\u6c42\u6307\u5b9a\u7684\u78c1\u76d8\u7a7a\u95f4\u3002\u5982\u679c\u5728\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u65f6\u5177\u6709\u6307\u5b9a\u8d44\u6e90\u7684 PV \u662f\u53ef\u7528\u7684\uff0c\u5219 Kubernetes master \u4f1a\u5c06 PV \u7ed1\u5b9a\u5230 PVC\u3002"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u63cf\u8ff0\u4e86\u5982\u4f55\u5c06\u6301\u4e45\u5b58\u50a8\u5206\u914d\u7ed9\u73b0\u6709\u5de5\u4f5c\u8d1f\u8f7d\uff1a"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,s.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u4e3a StatefulSet \u914d\u7f6e\u5b58\u50a8\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,s.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d > StatefulSets"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u6dfb\u52a0\u6301\u4e45\u5b58\u50a8\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5355\u51fb ",(0,s.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728",(0,s.kt)("strong",{parentName:"li"},"\u5377\u58f0\u660e\u6a21\u677f"),"\u9009\u9879\u5361\u4e0a\uff0c\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u58f0\u660e\u6a21\u677f"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u73b0\u6709\u7684\u6301\u4e45\u5377"),"\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728",(0,s.kt)("strong",{parentName:"li"},"\u6301\u4e45\u5377"),"\u5b57\u6bb5\u4e2d\uff0c\u9009\u62e9\u4f60\u521b\u5efa\u7684\u6301\u4e45\u5377\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5728",(0,s.kt)("strong",{parentName:"li"},"\u6302\u8f7d\u70b9"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u7528\u4e8e\u8bbf\u95ee\u5377\u7684\u8def\u5f84\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,s.kt)("strong",{parentName:"li"},"\u542f\u52a8"),"\u3002")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u5411 Kubernetes master \u8bf7\u6c42\u6307\u5b9a\u7684\u78c1\u76d8\u7a7a\u95f4\u3002\u5982\u679c\u5728\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u65f6\u5177\u6709\u6307\u5b9a\u8d44\u6e90\u7684 PV \u662f\u53ef\u7528\u7684\uff0c\u5219 Kubernetes master \u4f1a\u5c06 PV \u7ed1\u5b9a\u5230 PVC\u3002"))}c.isMDXComponent=!0}}]);