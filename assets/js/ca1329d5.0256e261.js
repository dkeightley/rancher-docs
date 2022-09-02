"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[4215],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),m=a,h=l["".concat(c,".").concat(m)]||l[m]||d[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},92781:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],i={title:"Rancher Deployment Quick Start Guides",metaDescription:"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.","short title":"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.",weight:2,aliases:["/rancher/v2.x/en/quick-start-guide/"]},c=void 0,u={unversionedId:"pages-for-subheaders/quick-start-guides",id:"pages-for-subheaders/quick-start-guides",title:"Rancher Deployment Quick Start Guides",description:"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see Installation.",source:"@site/docs/pages-for-subheaders/quick-start-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/quick-start-guides",permalink:"/pages-for-subheaders/quick-start-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/quick-start-guides.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Rancher Deployment Quick Start Guides",metaDescription:"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.","short title":"Use this section to jump start your Rancher deployment and testing. It contains instructions for a simple Rancher setup and some common use cases.",weight:2,aliases:["/rancher/v2.x/en/quick-start-guide/"]},sidebar:"tutorialSidebar",previous:{title:"What Are Divio Docs?",permalink:"/getting-started/introduction/what-are-divio-docs"},next:{title:"Deploying Rancher Server",permalink:"/pages-for-subheaders/deploy-rancher-manager"}},p={},d=[],l={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"Installation"),"."))),(0,o.kt)("p",null,"Use this section of the docs to jump start your deployment and testing of Rancher 2.x. It contains instructions for a simple Rancher setup and some common use cases. We plan on adding more content to this section in the future."),(0,o.kt)("p",null,"We have Quick Start Guides for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/deploy-rancher-manager"},"Deploying Rancher Server"),": Get started running Rancher using the method most convenient for you.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/deploy-rancher-workloads"},"Deploying Workloads"),": Deploy a simple ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"workload")," and expose it, letting you access it from outside the cluster."))))}m.isMDXComponent=!0}}]);