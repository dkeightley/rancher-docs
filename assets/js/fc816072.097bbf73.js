"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[85165],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60165:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],i={title:"Creating a GKE Cluster"},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",title:"Creating a GKE Cluster",description:"Prerequisites in Google Kubernetes Engine",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Creating a GKE Cluster"},sidebar:"tutorialSidebar",previous:{title:"Setting up Clusters from Hosted Kubernetes Providers",permalink:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},next:{title:"Creating an AKS Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"}},p={},c=[{value:"Prerequisites in Google Kubernetes Engine",id:"prerequisites-in-google-kubernetes-engine",level:2},{value:"Create the GKE Cluster",id:"create-the-gke-cluster",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"prerequisites-in-google-kubernetes-engine"},"Prerequisites in Google Kubernetes Engine"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to GKE will incur charges.")),(0,s.kt)("p",null,"Create a service account using ",(0,s.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts"},"Google Kubernetes Engine"),". GKE uses this account to operate your cluster. Creating this account also generates a private key used for authentication."),(0,s.kt)("p",null,"The service account requires the following roles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Compute Viewer:")," ",(0,s.kt)("inlineCode",{parentName:"li"},"roles/compute.viewer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Project Viewer:")," ",(0,s.kt)("inlineCode",{parentName:"li"},"roles/viewer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Kubernetes Engine Admin:")," ",(0,s.kt)("inlineCode",{parentName:"li"},"roles/container.admin")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Service Account User:")," ",(0,s.kt)("inlineCode",{parentName:"li"},"roles/iam.serviceAccountUser"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://cloud.google.com/compute/docs/access/create-enable-service-accounts-for-instances"},"Google Documentation: Creating and Enabling Service Accounts")),(0,s.kt)("h2",{id:"create-the-gke-cluster"},"Create the GKE Cluster"),(0,s.kt)("p",null,"Use Rancher to set up and configure your Kubernetes cluster."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"From the ",(0,s.kt)("strong",{parentName:"p"},"Clusters")," page, click ",(0,s.kt)("strong",{parentName:"p"},"Add Cluster"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose ",(0,s.kt)("strong",{parentName:"p"},"Google Kubernetes Engine"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a ",(0,s.kt)("strong",{parentName:"p"},"Cluster Name"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Use ",(0,s.kt)("strong",{parentName:"p"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,s.kt)("strong",{parentName:"p"},"Add Member")," to add users that can access the cluster. Use the ",(0,s.kt)("strong",{parentName:"p"},"Role")," drop-down to set permissions for each user.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Either paste your service account private key in the ",(0,s.kt)("strong",{parentName:"p"},"Service Account")," text box or ",(0,s.kt)("strong",{parentName:"p"},"Read from a file"),". Then click ",(0,s.kt)("strong",{parentName:"p"},"Next: Configure Nodes"),"."),(0,s.kt)("blockquote",{parentName:"li"},(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:")," After submitting your private key, you may have to enable the Google Kubernetes Engine API. If prompted, browse to the URL displayed in the Rancher UI to enable the API."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select your ",(0,s.kt)("strong",{parentName:"p"},"Cluster Options"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Customize your ",(0,s.kt)("strong",{parentName:"p"},"Node Options")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Enabling the Auto Upgrade feature for Nodes is not recommended."))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select your ",(0,s.kt)("strong",{parentName:"p"},"Security Options"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Review your options to confirm they're correct. Then click ",(0,s.kt)("strong",{parentName:"p"},"Create"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")),(0,s.kt)("p",null,"Your cluster is created and assigned a state of ",(0,s.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,s.kt)("p",null,"You can access your cluster after its state is updated to ",(0,s.kt)("strong",{parentName:"p"},"Active.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,s.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,s.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))}d.isMDXComponent=!0}}]);