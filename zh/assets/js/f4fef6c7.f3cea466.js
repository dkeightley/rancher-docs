"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[41219],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Installing Rancher in an Air Gapped Environment with Helm 2"},s=void 0,u={unversionedId:"pages-for-subheaders/air-gap-helm2",id:"version-2.0-2.4/pages-for-subheaders/air-gap-helm2",title:"Installing Rancher in an Air Gapped Environment with Helm 2",description:"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/air-gap-helm2.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/air-gap-helm2",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/air-gap-helm2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/air-gap-helm2.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Installing Rancher in an Air Gapped Environment with Helm 2"},sidebar:"tutorialSidebar",previous:{title:"404 - default backend",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/default-backend"},next:{title:"1. Prepare your Node(s)",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/air-gap-helm2/prepare-nodes"}},p={},d=[{value:"Air Gapped Kubernetes Installations",id:"air-gapped-kubernetes-installations",level:3},{value:"Air Gapped Docker Installations",id:"air-gapped-docker-installations",level:3},{value:"Next: Prepare your Node(s)",id:"next-prepare-your-nodes",level:3}],c={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After Helm 3 was released, the Rancher installation instructions were updated to use Helm 3."),(0,i.kt)("p",{parentName:"blockquote"},"If you are using Helm 2, we recommend ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/blog/migrate-from-helm-v2-to-helm-v3/"},"migrating to Helm 3")," because it is simpler to use and more secure than Helm 2."),(0,i.kt)("p",{parentName:"blockquote"},"This section provides a copy of the older instructions for installing Rancher on a Kubernetes cluster using Helm 2 in an air air gap environment, and it is intended to be used if upgrading to Helm 3 is not feasible.")),(0,i.kt)("p",null,"This section is about installations of Rancher server in an air gapped environment. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,i.kt)("p",null,"Throughout the installations instructions, there will be ",(0,i.kt)("em",{parentName:"p"},"tabs")," for either a high availability Kubernetes installation or a single-node Docker installation."),(0,i.kt)("h3",{id:"air-gapped-kubernetes-installations"},"Air Gapped Kubernetes Installations"),(0,i.kt)("p",null,"This section covers how to install Rancher on a Kubernetes cluster in an air gapped environment."),(0,i.kt)("p",null,"A Kubernetes installation is comprised of three nodes running the Rancher server components on a Kubernetes cluster. The persistence layer (etcd) is also replicated on these three nodes, providing redundancy and data duplication in case one of the nodes fails."),(0,i.kt)("h3",{id:"air-gapped-docker-installations"},"Air Gapped Docker Installations"),(0,i.kt)("p",null,"These instructions also cover how to install Rancher on a single node in an air gapped environment."),(0,i.kt)("p",null,"The Docker installation is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster, you install the Rancher server component on a single node using a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command. Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," If you install Rancher following the Docker installation guide, there is no upgrade path to transition your Docker Installation to a Kubernetes Installation.")),(0,i.kt)("p",null,"Instead of running the Docker installation, you have the option to follow the Kubernetes Install guide, but only use one node to install Rancher. Afterwards, you can scale up the etcd nodes in your Kubernetes cluster to make it a Kubernetes Installation."),(0,i.kt)("h1",{id:"installation-outline"},"Installation Outline"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"1. Prepare your Node(s)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"2. Collect and Publish Images to your Private Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},"3. Launch a Kubernetes Cluster with RKE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha"},"4. Install Rancher"))),(0,i.kt)("h3",{id:"next-prepare-your-nodes"},(0,i.kt)("a",{parentName:"h3",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry"},"Next: Prepare your Node(s)")))}h.isMDXComponent=!0}}]);