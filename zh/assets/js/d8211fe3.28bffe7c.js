"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},80159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Vagrant \u5feb\u901f\u5165\u95e8"},l=void 0,o={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/vagrant",id:"version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",title:"Vagrant \u5feb\u901f\u5165\u95e8",description:"\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u5feb\u901f\u90e8\u7f72 Rancher Server\uff0c\u5e76\u9644\u52a0\u4e00\u4e2a\u5355\u8282\u70b9\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/vagrant.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/vagrant",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/vagrant.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"Vagrant \u5feb\u901f\u5165\u95e8"},sidebar:"tutorialSidebar",previous:{title:"Rancher Hetzner Cloud \u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"},next:{title:"Rancher Equinix Metal \u5feb\u901f\u5165\u95e8",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"}},p={},c=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:3},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",level:2},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:3},{value:"\u9500\u6bc1\u73af\u5883",id:"\u9500\u6bc1\u73af\u5883",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\u5feb\u901f\u90e8\u7f72 Rancher Server\uff0c\u5e76\u9644\u52a0\u4e00\u4e2a\u5355\u8282\u70b9\u96c6\u7fa4\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u672c\u7ae0\u8282\u4e2d\u63d0\u4f9b\u7684\u6307\u5357\uff0c\u65e8\u5728\u5e2e\u52a9\u4f60\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u7528\u4e8e Rancher \u7684\u6c99\u76d2\uff0c\u4ee5\u8bc4\u4f30 Rancher \u662f\u5426\u80fd\u6ee1\u8db3\u4f60\u7684\u4f7f\u7528\u9700\u6c42\u3002\u5feb\u901f\u5165\u95e8\u6307\u5357\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002\u5982\u679c\u4f60\u9700\u8981\u83b7\u53d6\u751f\u4ea7\u73af\u5883\u7684\u64cd\u4f5c\u6307\u5bfc\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/installation-and-upgrade"},"\u5b89\u88c5"),"\u3002")),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.vagrantup.com"},"Vagrant"),"\uff1aVagrant \u662f\u5fc5\u9700\u7684\uff0c\u7528\u4e8e\u6839\u636e Vagrantfile \u914d\u7f6e\u4e3b\u673a\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.virtualbox.org"},"Virtualbox"),"\uff1a\u9700\u8981\u628a Vagrant \u914d\u7f6e\u7684\u865a\u62df\u673a\u914d\u7f6e\u5230 VirtualBox\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u81f3\u5c11 4GB \u7684\u53ef\u7528\u5185\u5b58\u3002")),(0,n.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Vagrant \u9700\u8981\u4f7f\u7528\u63d2\u4ef6\u6765\u521b\u5efa VirtualBox \u865a\u62df\u673a\u3002\u8bf7\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("inlineCode",{parentName:"p"},"vagrant plugin install vagrant-vboxmanage")),(0,n.kt)("p",{parentName:"li"}," ",(0,n.kt)("inlineCode",{parentName:"p"},"vagrant plugin install vagrant-vbguest")))),(0,n.kt)("h2",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart")," \u628a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," \u514b\u9686\u5230\u672c\u5730\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"cd quickstart/rancher/vagrant")," \u547d\u4ee4\uff0c\u8fdb\u5165\u5305\u542b Vagrantfile \u6587\u4ef6\u7684\u6587\u4ef6\u5939\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1a\u7f16\u8f91 ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u6587\u4ef6\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6839\u636e\u9700\u8981\u66f4\u6539\u8282\u70b9\u6570\u548c\u5185\u5b58\u5206\u914d\uff08",(0,n.kt)("inlineCode",{parentName:"li"},"node.count"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"node.cpus"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"node.memory"),"\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u6539 ",(0,n.kt)("inlineCode",{parentName:"li"},"admin")," \u7684\u5bc6\u7801\u4ee5\u767b\u5f55 Rancher\u3002(",(0,n.kt)("inlineCode",{parentName:"li"},"admin_password"),")"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"vagrant up --provider=virtualbox")," \u4ee5\u521d\u59cb\u5316\u73af\u5883\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"p"},"https://192.168.56.101"),"\u3002\u9ed8\u8ba4\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"admin/adminPassword"),"\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aRancher Server \u548c\u4f60\u7684 Kubernetes \u96c6\u7fa4\u5df2\u5b89\u88c5\u5728 VirtualBox \u4e0a\u3002"),(0,n.kt)("h3",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,n.kt)("p",null,"\u4f7f\u7528 Rancher \u521b\u5efa deployment\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/deploy-rancher-workloads"},"\u521b\u5efa Deployment"),"\u3002"),(0,n.kt)("h2",{id:"\u9500\u6bc1\u73af\u5883"},"\u9500\u6bc1\u73af\u5883"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/vagrant")," \u6587\u4ef6\u5939\uff0c\u7136\u540e\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"vagrant destroy -f"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7b49\u5f85\u6240\u6709\u8d44\u6e90\u5df2\u5220\u9664\u7684\u786e\u8ba4\u6d88\u606f\u3002"))))}d.isMDXComponent=!0}}]);