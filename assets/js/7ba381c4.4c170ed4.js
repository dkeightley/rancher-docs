"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83878],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27977:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Creating an Azure Cluster"},i=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster",title:"Creating an Azure Cluster",description:"In this section, you'll learn how to install an RKE Kubernetes cluster in Azure through Rancher.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-azure-cluster.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{title:"Creating an Azure Cluster"},sidebar:"tutorialSidebar",previous:{title:"Creating a DigitalOcean Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-digitalocean-cluster"},next:{title:"Creating a vSphere Cluster",permalink:"/v2.0-v2.4/pages-for-subheaders/vsphere"}},s={},u=[{value:"Preparation in Azure",id:"preparation-in-azure",level:2},{value:"Creating an Azure Cluster",id:"creating-an-azure-cluster",level:2},{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials",level:3},{value:"2. Create a node template with your cloud credentials",id:"2-create-a-node-template-with-your-cloud-credentials",level:3},{value:"3. Create a cluster with node pools using the node template",id:"3-create-a-cluster-with-node-pools-using-the-node-template",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=c("Tabs"),d=c("TabItem"),h={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section, you'll learn how to install an ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE")," Kubernetes cluster in Azure through Rancher."),(0,a.kt)("p",null,"First, you will set up your Azure cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision new nodes in Azure."),(0,a.kt)("p",null,"Then you will create an Azure cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Warning:")," When the Rancher RKE cluster is running in Azure and has an Azure load balancer in front, the outbound flow will fail. The workaround for this problem is as follows:")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Terminate the SSL/TLS on the internal load balancer"),(0,a.kt)("li",{parentName:"ul"},"Use the L7 load balancer"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more information, refer to the documentation on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/load-balancer/components#limitations"},"Azure load balancer limitations"),".")),(0,a.kt)("p",null,"For more information on configuring the Kubernetes cluster that Rancher will install on the Azure nodes, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,a.kt)("p",null,"For more information on configuring Azure node templates, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"},"Azure node template configuration reference.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preparation-in-azure"},"Preparation in Azure")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-an-azure-cluster"},"Creating an Azure Cluster"))),(0,a.kt)("h2",{id:"preparation-in-azure"},"Preparation in Azure"),(0,a.kt)("p",null,"Before creating a node template in Rancher using a cloud infrastructure such as Azure, we must configure Rancher to allow the manipulation of resources in an Azure subscription."),(0,a.kt)("p",null,"To do this, we will first create a new Azure ",(0,a.kt)("strong",{parentName:"p"},"service principal (SP)")," in Azure ",(0,a.kt)("strong",{parentName:"p"},"Active Directory (AD)"),", which, in Azure, is an application user who has permission to manage Azure resources."),(0,a.kt)("p",null,"The following is a template ",(0,a.kt)("inlineCode",{parentName:"p"},"az cli")," script that you have to run for creating an service principal, where you have to enter your SP name, role, and scope:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'az ad sp create-for-rbac \\\n  --name="<Rancher ServicePrincipal name>" \\\n  --role="Contributor" \\\n  --scopes="/subscriptions/<subscription Id>"\n')),(0,a.kt)("p",null,"The creation of this service principal returns three pieces of identification information, ",(0,a.kt)("em",{parentName:"p"},"The application ID, also called the client ID"),", ",(0,a.kt)("em",{parentName:"p"},"The client secret"),", and ",(0,a.kt)("em",{parentName:"p"},"The tenant ID"),". This information will be used when you create a node template for Azure."),(0,a.kt)("h2",{id:"creating-an-azure-cluster"},"Creating an Azure Cluster"),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#1-create-your-cloud-credentials"},"Create your cloud credentials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#2-create-a-node-template-with-your-cloud-credentials"},"Create a node template with your cloud credentials")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#3-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,a.kt)("h3",{id:"1-create-your-cloud-credentials"},"1. Create your cloud credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Cloud Credential.")),(0,a.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credential Type")," field, select ",(0,a.kt)("strong",{parentName:"li"},"Azure"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your Azure credentials."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters."),(0,a.kt)("h3",{id:"2-create-a-node-template-with-your-cloud-credentials"},"2. Create a node template with your cloud credentials"),(0,a.kt)("p",null,"Creating a ",(0,a.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template")," for Azure will allow Rancher to provision new nodes in Azure. Node templates can be reused for other clusters."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,a.kt)("strong",{parentName:"li"},"Node Templates.")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Template.")),(0,a.kt)("li",{parentName:"ol"},"Fill out a node template for Azure. For help filling out the form, refer to ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"},"Azure Node Template Configuration."))),(0,a.kt)("h3",{id:"3-create-a-cluster-with-node-pools-using-the-node-template"},"3. Create a cluster with node pools using the node template"),(0,a.kt)("p",null,"Use Rancher to create a Kubernetes cluster in Azure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Azure"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"li"},"Show advanced options.")," For help configuring the cluster, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices, see ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces"))),(0,a.kt)(d,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,a.kt)("p",null,"Use Rancher to create a Kubernetes cluster in Azure."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,a.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,a.kt)("li",{parentName:"ol"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Azure"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,a.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,a.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,a.kt)("strong",{parentName:"li"},"Show advanced options.")," For help configuring the cluster, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,a.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. To create a node template, click ",(0,a.kt)("strong",{parentName:"li"},"Add Node Template")," and complete the ",(0,a.kt)("strong",{parentName:"li"},"Azure Options")," form. For help filling out the form, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/azure"},"Azure node template configuration reference.")," For more information about node pools, including best practices for assigning Kubernetes roles to them, see ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"this section.")),(0,a.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")),(0,a.kt)("p",null,"Your cluster is created and assigned a state of ",(0,a.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,a.kt)("p",null,"You can access your cluster after its state is updated to ",(0,a.kt)("strong",{parentName:"p"},"Active.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))),(0,a.kt)("h3",{id:"optional-next-steps"},"Optional Next Steps"),(0,a.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,a.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster.")))}m.isMDXComponent=!0}}]);