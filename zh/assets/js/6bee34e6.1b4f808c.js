"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Cloning Clusters"},l=void 0,i={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",id:"version-2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",title:"Cloning Clusters",description:"If you have a cluster in Rancher that you want to use as a template for creating similar clusters, you can use Rancher CLI to clone the cluster's configuration, edit it, and then use it to quickly launch the cloned cluster.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Cloning Clusters"},sidebar:"tutorialSidebar",previous:{title:"Projects and Kubernetes Namespaces with Rancher",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},next:{title:"Certificate Rotation",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Export Cluster Config",id:"1-export-cluster-config",level:2},{value:"2. Modify Cluster Config",id:"2-modify-cluster-config",level:2},{value:"3. Launch Cloned Cluster",id:"3-launch-cloned-cluster",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you have a cluster in Rancher that you want to use as a template for creating similar clusters, you can use Rancher CLI to clone the cluster's configuration, edit it, and then use it to quickly launch the cloned cluster."),(0,a.kt)("p",null,"Duplication of registered clusters is not supported."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Cluster Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Cloneable?"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/v2.5/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"Nodes Hosted by Infrastructure Provider")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/v2.5/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Kubernetes Providers")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/v2.5/pages-for-subheaders/use-existing-nodes"},"Custom Cluster")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/zh/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"Registered Cluster")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," During the process of duplicating a cluster, you will edit a config file full of cluster settings. However, we recommend editing only values explicitly listed in this document, as cluster duplication is designed for simple cluster copying, ",(0,a.kt)("em",{parentName:"p"},"not")," wide scale configuration changes. Editing other values may invalidate the config file, which will lead to cluster deployment failure.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Download and install ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/cli-with-rancher"},"Rancher CLI"),". Remember to ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/user-settings/api-keys"},"create an API bearer token")," if necessary."),(0,a.kt)("h2",{id:"1-export-cluster-config"},"1. Export Cluster Config"),(0,a.kt)("p",null,"Begin by using Rancher CLI to export the configuration for the cluster that you want to clone."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open Terminal and change your directory to the location of the Rancher CLI binary, ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the following command to list the clusters managed by Rancher."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    ./rancher cluster ls\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Find the cluster that you want to clone, and copy either its resource ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NAME")," to your clipboard. From this point on, we'll refer to the resource ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"NAME")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"<RESOURCE_ID>"),", which is used as a placeholder in the next step.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enter the following command to export the configuration for your cluster."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    ./rancher clusters export <RESOURCE_ID>\n\n\n**Step Result:** The YAML for a cloned cluster prints to Terminal.\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the YAML to your clipboard and paste it in a new file. Save the file as ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster-template.yml")," (or any other name, as long as it has a ",(0,a.kt)("inlineCode",{parentName:"li"},".yml")," extension).")),(0,a.kt)("h2",{id:"2-modify-cluster-config"},"2. Modify Cluster Config"),(0,a.kt)("p",null,"Use your favorite text editor to modify the cluster configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-template.yml")," for your cloned cluster."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Cluster configuration directives must be nested under the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". For more information, refer to the section on ",(0,a.kt)("a",{parentName:"p",href:"cluster-provisioning/rke-clusters/options/#config-file-structure-in-rancher-v2-3-0"},"the config file structure in Rancher v2.3.0+."))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-template.yml")," (or whatever you named your config) in your favorite text editor."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," Only edit the cluster config values explicitly called out below. Many of the values listed in this file are used to provision your cloned cluster, and editing their values may break the provisioning process.")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"As depicted in the example below, at the ",(0,a.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>")," placeholder, replace your original cluster's name with a unique name (",(0,a.kt)("inlineCode",{parentName:"p"},"<CLUSTER_NAME>"),"). If your cloned cluster has a duplicate name, the cluster will not provision successfully."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"Version: v3\nclusters:\n    <CLUSTER_NAME>: # ENTER UNIQUE NAME\n    dockerRootDir: /var/lib/docker\n    enableNetworkPolicy: false\n    rancherKubernetesEngineConfig:\n    addonJobTimeout: 30\n    authentication:\n        strategy: x509\n    authorization: {}\n    bastionHost: {}\n    cloudProvider: {}\n    ignoreDockerVersion: true\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For each ",(0,a.kt)("inlineCode",{parentName:"p"},"nodePools")," section, replace the original nodepool name with a unique name at the ",(0,a.kt)("inlineCode",{parentName:"p"},"<NODEPOOL_NAME>")," placeholder.  If your cloned cluster has a duplicate nodepool name, the cluster will not provision successfully."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"nodePools:\n    <NODEPOOL_NAME>:\n    clusterId: do\n    controlPlane: true\n    etcd: true\n    hostnamePrefix: mark-do\n    nodeTemplateId: do\n    quantity: 1\n    worker: true\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When you're done, save and close the configuration."))),(0,a.kt)("h2",{id:"3-launch-cloned-cluster"},"3. Launch Cloned Cluster"),(0,a.kt)("p",null,"Move ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster-template.yml")," into the same directory as the Rancher CLI binary. Then run this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./rancher up --file cluster-template.yml\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," Your cloned cluster begins provisioning. Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"./rancher cluster ls")," to confirm. You can also log into the Rancher UI and open the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view to watch your provisioning cluster's progress."))}p.isMDXComponent=!0}}]);