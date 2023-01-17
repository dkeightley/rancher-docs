"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72518:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"ConfigMaps"},s=void 0,i={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",title:"ConfigMaps",description:"While most types of Kubernetes secrets store sensitive information, ConfigMaps store general configuration information, such as a group of config files. Because ConfigMaps don't store sensitive information, they can be updated automatically, and therefore don't require their containers to be restarted following update (unlike most secret types, which require manual updates and a container restart to take effect).",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"ConfigMaps"},sidebar:"tutorialSidebar",previous:{title:"Encrypting HTTP Communication",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},next:{title:"Secrets",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"}},p={},u=[{value:"What&#39;s Next?",id:"whats-next",level:2}],c={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"While most types of Kubernetes secrets store sensitive information, ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"ConfigMaps")," store general configuration information, such as a group of config files. Because ConfigMaps don't store sensitive information, they can be updated automatically, and therefore don't require their containers to be restarted following update (unlike most secret types, which require manual updates and a container restart to take effect)."),(0,a.kt)("p",null,"ConfigMaps accept key value pairs in common string formats, like config files or JSON blobs. After you upload a config map, any workload can reference it as either an environment variable or a volume mount."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the cluster that has the workload that should reference a ConfigMap and click ",(0,a.kt)("strong",{parentName:"p"},"Explore"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"p"},"More Resources > Core > ConfigMaps"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter a ",(0,a.kt)("strong",{parentName:"p"},"Name")," for the Config Map."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Kubernetes classifies ConfigMaps as ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your ConfigMaps must have a unique name among the other certificates, registries, and secrets within your workspace."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Namespace")," you want to add Config Map to.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Data")," tab, add a key-value pair to your ConfigMap. Add as many values as you need.  You can add multiple key value pairs to the ConfigMap by copying and pasting. Alternatively, use ",(0,a.kt)("strong",{parentName:"p"},"Read from File")," to add the data. Note: If you need to store sensitive data, ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"use a secret"),", not a ConfigMap.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Create"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your ConfigMap is added to the namespace. You can view it in the Rancher UI from the ",(0,a.kt)("strong",{parentName:"p"},"Resources > Config Maps")," view."),(0,a.kt)("h2",{id:"whats-next"},"What's Next?"),(0,a.kt)("p",null,"Now that you have a ConfigMap added to a namespace, you can add it to a workload that you deploy from the namespace of origin. You can use the ConfigMap to specify information for you application to consume, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application environment variables."),(0,a.kt)("li",{parentName:"ul"},"Specifying parameters for a Volume mounted to the workload.")),(0,a.kt)("p",null,"For more information on adding ConfigMaps to a workload, see ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),"."))}l.isMDXComponent=!0}}]);