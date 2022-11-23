"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89281],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},37247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Dockershim"},l=void 0,u={unversionedId:"getting-started/installation-and-upgrade/installation-requirements/dockershim",id:"version-2.6/getting-started/installation-and-upgrade/installation-requirements/dockershim",title:"Dockershim",description:"The Dockershim is the CRI compliant layer between the Kubelet and the Docker daemon. As part of the Kubernetes 1.20 release, the deprecation of the in-tree Dockershim was announced. For more information on the deprecation and its timelines, see the Kubernetes Dockershim Deprecation FAQ.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/installation-requirements/dockershim.md",sourceDirName:"getting-started/installation-and-upgrade/installation-requirements",slug:"/getting-started/installation-and-upgrade/installation-requirements/dockershim",permalink:"/v2.6/getting-started/installation-and-upgrade/installation-requirements/dockershim",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/installation-requirements/dockershim.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Dockershim"},sidebar:"tutorialSidebar",previous:{title:"Installing Docker",permalink:"/v2.6/getting-started/installation-and-upgrade/installation-requirements/install-docker"},next:{title:"Port Requirements",permalink:"/v2.6/getting-started/installation-and-upgrade/installation-requirements/port-requirements"}},c={},d=[{value:"FAQ",id:"faq",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Dockershim is the CRI compliant layer between the Kubelet and the Docker daemon. As part of the Kubernetes 1.20 release, the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"},"deprecation of the in-tree Dockershim was announced"),". For more information on the deprecation and its timelines, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim Deprecation FAQ"),"."),(0,a.kt)("p",null,"RKE clusters now support the external Dockershim to continue leveraging Docker as the CRI runtime. We now implement the upstream open source community external Dockershim announced by ",(0,a.kt)("a",{parentName:"p",href:"https://www.mirantis.com/blog/mirantis-to-take-over-support-of-kubernetes-dockershim-2/"},"Mirantis and Docker")," to ensure RKE clusters can continue to leverage Docker."),(0,a.kt)("p",null,"RKE2 and K3s clusters use an embedded containerd as a container runtime and are not affected."),(0,a.kt)("p",null,"To enable the external Dockershim in versions of RKE before 1.24, configure the following option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"enable_cri_dockerd: true\n")),(0,a.kt)("p",null,"Starting with version 1.24, the above defaults to true."),(0,a.kt)("p",null,"For users looking to use another container runtime, Rancher has the edge-focused K3s and datacenter-focused RKE2 Kubernetes distributions that use containerd as the default runtime. Imported RKE2 and K3s Kubernetes clusters can then be upgraded and managed through Rancher going forward."),(0,a.kt)("h3",{id:"faq"},"FAQ"),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: Do I have to upgrade Rancher to get Rancher\u2019s support of the upstream external Dockershim replacement?"),(0,a.kt)("p",null,"A: The upstream support of the Dockershim replacement ",(0,a.kt)("inlineCode",{parentName:"p"},"cri_dockerd")," begins for RKE in Kubernetes 1.21. You will need to be on a version of Rancher that supports RKE 1.21. See our support matrix for details."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: I am currently on RKE with Kubernetes 1.23. What happens when upstream finally removes Dockershim in 1.24?"),(0,a.kt)("p",null,"A: The version of Dockershim in RKE with Kubernetes will continue to work until 1.23. For information on the timeline, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2020/12/02/dockershim-faq/#when-will-dockershim-be-removed"},"Kubernetes Dockershim Deprecation FAQ"),". After this, starting in 1.24, RKE will default to enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"cri_dockerd")," by default and will continue to do for versions afterwards."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: What are my other options if I don\u2019t want to depend on the Dockershim or cri_dockerd?"),(0,a.kt)("p",null,"A: You can use a runtime like containerd with Kubernetes that does not require Dockershim support. RKE2 or K3s are two options for doing this."),(0,a.kt)("br",null),(0,a.kt)("p",null,"Q: If I am already using RKE1 and want to switch to RKE2, what are my migration options?"),(0,a.kt)("p",null,"A: Today, you can stand up a new cluster and migrate workloads to a new RKE2 cluster that uses containerd. Rancher is exploring the possibility of an in-place upgrade path."),(0,a.kt)("br",null))}m.isMDXComponent=!0}}]);