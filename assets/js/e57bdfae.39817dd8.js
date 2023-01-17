"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={title:"Role-based Access Control"},l=void 0,o={unversionedId:"explanations/integrations-in-rancher/istio/rbac-for-istio",id:"version-2.5/explanations/integrations-in-rancher/istio/rbac-for-istio",title:"Role-based Access Control",description:"This section describes the permissions required to access Istio features.",source:"@site/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/rbac-for-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/rbac-for-istio",permalink:"/v2.5/explanations/integrations-in-rancher/istio/rbac-for-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/explanations/integrations-in-rancher/istio/rbac-for-istio.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Role-based Access Control"},sidebar:"tutorialSidebar",previous:{title:"CPU and Memory Allocations",permalink:"/v2.5/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},next:{title:"Disabling Istio",permalink:"/v2.5/explanations/integrations-in-rancher/istio/disable-istio"}},s={},d=[{value:"Cluster-Admin Access",id:"cluster-admin-access",level:2},{value:"Admin and Edit access",id:"admin-and-edit-access",level:2},{value:"Summary of Default Permissions for Kubernetes Default roles",id:"summary-of-default-permissions-for-kubernetes-default-roles",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes the permissions required to access Istio features."),(0,r.kt)("p",null,"The rancher istio chart installs three ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoles")),(0,r.kt)("h2",{id:"cluster-admin-access"},"Cluster-Admin Access"),(0,r.kt)("p",null,"By default, only those with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-admin")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install istio app in a cluster"),(0,r.kt)("li",{parentName:"ul"},"Configure resource allocations for Istio")),(0,r.kt)("h2",{id:"admin-and-edit-access"},"Admin and Edit access"),(0,r.kt)("p",null,"By default, only Admin and Edit roles can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable and disable Istio sidecar auto-injection for namespaces"),(0,r.kt)("li",{parentName:"ul"},"Add the Istio sidecar to workloads"),(0,r.kt)("li",{parentName:"ul"},"View the traffic metrics and traffic graph for the cluster"),(0,r.kt)("li",{parentName:"ul"},"Configure Istio's resources (such as the gateway, destination rules, or virtual services)")),(0,r.kt)("h2",{id:"summary-of-default-permissions-for-kubernetes-default-roles"},"Summary of Default Permissions for Kubernetes Default roles"),(0,r.kt)("p",null,"Istio creates three ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRoles")," and adds Istio CRD access to the following default K8s ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"ClusterRole create by chart"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Default K8s ClusterRole"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Rancher Role"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"istio-admin")),(0,r.kt)("td",{parentName:"tr",align:"right"},"admin"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Project Owner")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"istio-edit")),(0,r.kt)("td",{parentName:"tr",align:"right"},"edit"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Project Member")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"istio-view")),(0,r.kt)("td",{parentName:"tr",align:"right"},"view"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Read-only")))),(0,r.kt)("p",null,"Rancher will continue to use cluster-owner, cluster-member, project-owner, project-member, etc as role names, but will utilize default roles to determine access. For each default K8s ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterRole")," there are different Istio CRD permissions and K8s actions (Create ( C ), Get ( G ), List ( L ), Watch ( W ), Update ( U ), Patch ( P ), Delete( D ), All ( * )) that can be performed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"CRDs"),(0,r.kt)("th",{parentName:"tr",align:null},"Admin"),(0,r.kt)("th",{parentName:"tr",align:null},"Edit"),(0,r.kt)("th",{parentName:"tr",align:null},"View"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"config.istio.io")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"adapters")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"attributemanifests")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"handlers")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"httpapispecbindings")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"httpapispecs")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"instances")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"quotaspecbindings")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"quotaspecs")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"rules")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"templates"))))),(0,r.kt)("td",{parentName:"tr",align:null},"GLW"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"networking.istio.io")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"destinationrules")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"envoyfilters")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"gateways")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"serviceentries")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"sidecars")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"virtualservices")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"workloadentries"))))),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"security.istio.io")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"authorizationpolicies")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"peerauthentications")),(0,r.kt)("li",null,(0,r.kt)("inlineCode",{parentName:"td"},"requestauthentications"))))),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"GLW")))))}p.isMDXComponent=!0}}]);