"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[675],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57370:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={title:"iSCSI \u5377"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",id:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",title:"iSCSI \u5377",description:"\u5728\u5c06\u6570\u636e\u5b58\u50a8\u5728 iSCSI \u5377\u4e0a\u7684 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230 kubelet \u65e0\u6cd5\u81ea\u52a8\u8fde\u63a5 iSCSI \u5377\u7684\u95ee\u9898\u3002\u6210\u6b64\u95ee\u9898\u7684\u539f\u56e0\u5f88\u53ef\u80fd\u662f iSCSI \u542f\u52a8\u5668\u5de5\u5177\u4e0d\u517c\u5bb9\u3002\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e0a\u5b89\u88c5 iSCSI \u542f\u52a8\u5668\u5de5\u5177\u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage",slug:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/install-iscsi-volumes.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"iSCSI \u5377"},sidebar:"tutorialSidebar",previous:{title:"GlusterFS \u5377",permalink:"/zh/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/about-glusterfs-volumes"},next:{title:"\u914d\u7f6e\u5b58\u50a8\u793a\u4f8b",permalink:"/zh/pages-for-subheaders/provisioning-storage-examples"}},c={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u5c06\u6570\u636e\u5b58\u50a8\u5728 iSCSI \u5377\u4e0a\u7684 ",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4"),"\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230 kubelet \u65e0\u6cd5\u81ea\u52a8\u8fde\u63a5 iSCSI \u5377\u7684\u95ee\u9898\u3002\u6210\u6b64\u95ee\u9898\u7684\u539f\u56e0\u5f88\u53ef\u80fd\u662f iSCSI \u542f\u52a8\u5668\u5de5\u5177\u4e0d\u517c\u5bb9\u3002\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e2a\u96c6\u7fa4\u8282\u70b9\u4e0a\u5b89\u88c5 iSCSI \u542f\u52a8\u5668\u5de5\u5177\u6765\u89e3\u51b3\u6b64\u95ee\u9898\u3002"),(0,i.kt)("p",null,"\u5c06\u6570\u636e\u5b58\u50a8\u5230 iSCSI \u5377\u7684\u7531 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"http://www.open-iscsi.com/"},"iSCSI \u542f\u52a8\u5668\u5de5\u5177"),"\uff0c\u8be5\u5de5\u5177\u5d4c\u5165\u5728 kubelet \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/hyperkube")," Docker \u955c\u50cf\u4e2d\u3002\u8be5\u5de5\u5177\u4ece\u6bcf\u4e2a kubelet\uff08\u5373 ",(0,i.kt)("em",{parentName:"p"},"initiator"),"\uff09\u53d1\u73b0\u5e76\u53d1\u8d77\u4e0e iSCSI \u5377\uff08\u5373 ",(0,i.kt)("em",{parentName:"p"},"target"),"\uff09\u7684\u4f1a\u8bdd\u3002\u4f46\u662f\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0cinitiator \u548c target \u4e0a\u5b89\u88c5\u7684 iSCSI \u542f\u52a8\u5668\u5de5\u5177\u7684\u7248\u672c\u53ef\u80fd\u4e0d\u5339\u914d\uff0c\u4ece\u800c\u5bfc\u81f4\u8fde\u63a5\u5931\u8d25\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9047\u5230\u6b64\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u5728\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u8282\u70b9\u4e0a\u5b89\u88c5\u542f\u52a8\u5668\u5de5\u5177\u6765\u89e3\u51b3\u8be5\u95ee\u9898\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u767b\u5f55\u5230\u96c6\u7fa4\u8282\u70b9\u5e76\u8f93\u5165\u4ee5\u4e0b\u5176\u4e2d\u4e00\u4e2a\u547d\u4ee4\u6765\u5b89\u88c5 iSCSI \u542f\u52a8\u5668\u5de5\u5177\uff1a"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5305\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5b89\u88c5\u547d\u4ee4"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ubuntu/Debian"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"open-iscsi")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sudo apt install open-iscsi"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RHEL"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"iscsi-initiator-utils")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"yum install iscsi-initiator-utils -y"))))),(0,i.kt)("p",null,"\u5728\u8282\u70b9\u4e0a\u5b89\u88c5\u542f\u52a8\u5668\u5de5\u5177\u540e\uff0c\u7f16\u8f91\u96c6\u7fa4\u7684 YAML\uff0c\u7f16\u8f91 kubelet \u914d\u7f6e\u4ee5\u6302\u8f7d iSCSI \u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u914d\u7f6e\uff0c\u5982\u4e0b\u9762\u7684\u793a\u4f8b\u6240\u793a\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728\u66f4\u65b0 Kubernetes YAML \u4ee5\u6302\u8f7d iSCSI \u4e8c\u8fdb\u5236\u6587\u4ef6\u548c\u914d\u7f6e\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u5df2\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"open-iscsi"),"\uff08deb\uff09\u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"iscsi-initiator-utils"),"\uff08yum\uff09\u5b89\u88c5\u5230\u4f60\u7684\u96c6\u7fa4\u8282\u70b9\u3002\u5982\u679c\u5728\u7ed1\u5b9a\u6302\u8f7d\u521b\u5efa\u5230\u4f60\u7684 Kubernetes YAML ",(0,i.kt)("em",{parentName:"p"},"\u4e4b\u524d")," \u672a\u5b89\u88c5\u6b64\u5305\uff0cDocker \u5c06\u81ea\u52a8\u5728\u6bcf\u4e2a\u8282\u70b9\u4e0a\u521b\u5efa\u76ee\u5f55\u548c\u6587\u4ef6\uff0c\u5e76\u4e14\u4e0d\u5141\u8bb8\u5305\u5b89\u88c5\u6210\u529f\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4e0b\u9762\u7684\u793a\u4f8b YAML \u4e0d\u9002\u7528\u4e8e K3s\uff0c\u4ec5\u9002\u7528\u4e8e RKE \u96c6\u7fa4\u3002\u7531\u4e8e K3s kubelet \u4e0d\u5728\u5bb9\u5668\u4e2d\u8fd0\u884c\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u7ed1\u5b9a\u3002\u4f46\u662f\uff0c\u6240\u6709 iSCSI \u5de5\u5177\u4ecd\u5fc5\u987b\u5b89\u88c5\u5728\u4f60\u7684 K3s \u8282\u70b9\u4e0a\u3002"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_binds:\n      - "/etc/iscsi:/etc/iscsi"\n      - "/sbin/iscsiadm:/sbin/iscsiadm"\n')))}m.isMDXComponent=!0}}]);