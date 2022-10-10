"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80597],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),d=a,v=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(v,s(s({ref:t},c),{},{components:r})):n.createElement(v,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function s(e){var t=e.children,r=e.hidden,s=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(87462),a=r(67294),o=r(86010),s=r(72389),i=r(67392),l=r(7094),u=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,r,s=e.lazy,h=e.block,d=e.defaultValue,v=e.values,m=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),w=(0,i.l)(g,(function(e,t){return e.value===t.value}));if(w.length>0)throw new Error('Docusaurus error: Duplicate values "'+w.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(r=k.find((function(e){return e.props.default})))?void 0:r.props.value)?t:k[0].props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,l.U)(),y=N.tabGroupChoices,C=N.setTabGroupChoices,S=(0,a.useState)(b),R=S[0],T=S[1],E=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var I=y[m];null!=I&&I!==R&&g.some((function(e){return e.value===I}))&&T(I)}var P=function(e){var t=e.currentTarget,r=E.indexOf(t),n=g[r].value;n!==R&&(A(t),T(n),null!=m&&C(m,String(n)))},O=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=E.indexOf(e.currentTarget)+1;r=null!=(n=E[a])?n:E[0];break;case"ArrowLeft":var o,s=E.indexOf(e.currentTarget)-1;r=null!=(o=E[s])?o:E[E.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},f)},g.map((function(e){var t=e.value,r=e.label,s=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return E.push(e)},onKeyDown:O,onFocus:P,onClick:P},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":R===t})}),null!=r?r:t)}))),s?(0,a.cloneElement)(k.filter((function(e){return e.props.value===R}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function d(e){var t=(0,s.Z)();return a.createElement(h,(0,n.Z)({key:String(t)},e))}},44713:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=r(65488),i=r(85162),l=["components"],u={title:"Provisioning Kubernetes Clusters in vSphere"},c=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",title:"Provisioning Kubernetes Clusters in vSphere",description:"In this section, you'll learn how to use Rancher to install an RKE  Kubernetes cluster in vSphere.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/provision-kubernetes-clusters-in-vsphere.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Provisioning Kubernetes Clusters in vSphere"},sidebar:"tutorialSidebar",previous:{title:"Creating a vSphere Cluster",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/vsphere"},next:{title:"Creating Credentials in the vSphere Console",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"}},h={},d=[{value:"Create Credentials in vSphere",id:"create-credentials-in-vsphere",level:3},{value:"Network Permissions",id:"network-permissions",level:3},{value:"Valid ESXi License for vSphere API Access",id:"valid-esxi-license-for-vsphere-api-access",level:3},{value:"VM-VM Affinity Rules for Clusters with DRS",id:"vm-vm-affinity-rules-for-clusters-with-drs",level:3},{value:"Creating a vSphere Cluster",id:"creating-a-vsphere-cluster",level:2},{value:"1. Create your cloud credentials",id:"1-create-your-cloud-credentials",level:3},{value:"2. Create a node template with your cloud credentials",id:"2-create-a-node-template-with-your-cloud-credentials",level:3},{value:"3. Create a cluster with node pools using the node template",id:"3-create-a-cluster-with-node-pools-using-the-node-template",level:3},{value:"Optional Next Steps",id:"optional-next-steps",level:2}],v={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to use Rancher to install an ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE"),"  Kubernetes cluster in vSphere."),(0,o.kt)("p",null,"First, you will set up your vSphere cloud credentials in Rancher. Then you will use your cloud credentials to create a node template, which Rancher will use to provision nodes in vSphere."),(0,o.kt)("p",null,"Then you will create a vSphere cluster in Rancher, and when configuring the new cluster, you will define node pools for it. Each node pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE Kubernetes on the new nodes, and it will set up each node with the Kubernetes role defined by the node pool."),(0,o.kt)("p",null,"For details on configuring the vSphere node template, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/creating-a-vsphere-cluster"},"vSphere node template configuration reference.")),(0,o.kt)("p",null,"For details on configuring RKE Kubernetes clusters in Rancher, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"cluster configuration reference.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#preparation-in-vsphere"},"Preparation in vSphere")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-vsphere-cluster"},"Creating a vSphere Cluster"))),(0,o.kt)("h1",{id:"preparation-in-vsphere"},"Preparation in vSphere"),(0,o.kt)("p",null,"This section describes the requirements for setting up vSphere so that Rancher can provision VMs and clusters."),(0,o.kt)("p",null,"The node templates are documented and tested with the vSphere Web Services API version 6.5."),(0,o.kt)("h3",{id:"create-credentials-in-vsphere"},"Create Credentials in vSphere"),(0,o.kt)("p",null,"Before proceeding to create a cluster, you must ensure that you have a vSphere user with sufficient permissions. When you set up a node template, the template will need to use these vSphere credentials."),(0,o.kt)("p",null,"Refer to this ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"},"how-to guide")," for instructions on how to create a user in vSphere with the required permissions. These steps result in a username and password that you will need to provide to Rancher, which allows Rancher to provision resources in vSphere."),(0,o.kt)("h3",{id:"network-permissions"},"Network Permissions"),(0,o.kt)("p",null,"It must be ensured that the hosts running the Rancher server are able to establish the following network connections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To the vSphere API on the vCenter server (usually port 443/TCP)."),(0,o.kt)("li",{parentName:"ul"},"To the Host API (port 443/TCP) on all ESXi hosts used to instantiate virtual machines for the clusters (",(0,o.kt)("em",{parentName:"li"},"only required with Rancher before v2.3.3 or when using the ISO creation method in later versions"),")."),(0,o.kt)("li",{parentName:"ul"},"To port 22/TCP and 2376/TCP on the created VMs")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"Node Networking Requirements")," for a detailed list of port requirements applicable for creating nodes on an infrastructure provider."),(0,o.kt)("h3",{id:"valid-esxi-license-for-vsphere-api-access"},"Valid ESXi License for vSphere API Access"),(0,o.kt)("p",null,"The free ESXi license does not support API access. The vSphere servers must have a valid or evaluation ESXi license."),(0,o.kt)("h3",{id:"vm-vm-affinity-rules-for-clusters-with-drs"},"VM-VM Affinity Rules for Clusters with DRS"),(0,o.kt)("p",null,"If you have a cluster with DRS enabled, setting up ",(0,o.kt)("a",{parentName:"p",href:"https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-7297C302-378F-4AF2-9BD6-6EDB1E0A850A.html"},"VM-VM Affinity Rules")," is recommended. These rules allow VMs assigned the etcd and control-plane roles to operate on separate ESXi hosts when they are assigned to different node pools. This practice ensures that the failure of a single physical machine does not affect the availability of those planes."),(0,o.kt)("h2",{id:"creating-a-vsphere-cluster"},"Creating a vSphere Cluster"),(0,o.kt)("p",null,"The a vSphere cluster is created in Rancher depends on the Rancher version."),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"Rancher v2.2.0+",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-create-your-cloud-credentials"},"Create your cloud credentials")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-create-a-node-template-with-your-cloud-credentials"},"Create a node template with your cloud credentials")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-create-a-cluster-with-node-pools-using-the-node-template"},"Create a cluster with node pools using the node template"))),(0,o.kt)("h3",{id:"1-create-your-cloud-credentials"},"1. Create your cloud credentials"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,o.kt)("strong",{parentName:"li"},"Cloud Credentials.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Cloud Credential.")),(0,o.kt)("li",{parentName:"ol"},"Enter a name for the cloud credential."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("strong",{parentName:"li"},"Cloud Credential Type")," field, select ",(0,o.kt)("strong",{parentName:"li"},"vSphere"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter your vSphere credentials. For help, refer to ",(0,o.kt)("strong",{parentName:"li"},"Account Access")," in the ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/creating-a-vsphere-cluster"},"configuration reference for your Rancher version.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters."),(0,o.kt)("h3",{id:"2-create-a-node-template-with-your-cloud-credentials"},"2. Create a node template with your cloud credentials"),(0,o.kt)("p",null,"Creating a ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"node template")," for vSphere will allow Rancher to provision new nodes in vSphere. Node templates can be reused for other clusters."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI, click the user profile button in the upper right corner, and click ",(0,o.kt)("strong",{parentName:"li"},"Node Templates.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Template.")),(0,o.kt)("li",{parentName:"ol"},"Fill out a node template for vSphere. For help filling out the form, refer to the vSphere node template configuration reference. Refer to the newest version of the configuration reference that is less than or equal to your Rancher version:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.3"},"v2.3.3")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.3.0"},"v2.3.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.2.0"},"v2.2.0"))))),(0,o.kt)("h3",{id:"3-create-a-cluster-with-node-pools-using-the-node-template"},"3. Create a cluster with node pools using the node template"),(0,o.kt)("p",null,"Use Rancher to create a Kubernetes cluster in vSphere."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," in the ",(0,o.kt)("strong",{parentName:"li"},"Global")," view."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add Cluster")," and select the ",(0,o.kt)("strong",{parentName:"li"},"vSphere")," infrastructure provider."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Cluster Name.")),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,o.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,o.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,o.kt)("strong",{parentName:"li"},"Show advanced options.")," For help configuring the cluster, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,o.kt)("li",{parentName:"ol"},"If you want to dynamically provision persistent storage or other infrastructure later, you will need to enable the vSphere cloud provider by modifying the cluster YAML file. For details, refer to ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"this section.")),(0,o.kt)("li",{parentName:"ol"},"Add one or more node pools to your cluster. Each node pool uses a node template to provision new nodes. For more information about node pools, including best practices for assigning Kubernetes roles to the nodes, see ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"this section.")),(0,o.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces"))),(0,o.kt)(i.Z,{value:"Rancher before v2.2.0",mdxType:"TabItem"},(0,o.kt)("p",null,"Use Rancher to create a Kubernetes cluster in vSphere."),(0,o.kt)("p",null,"For Rancher versions before v2.0.4, when you create the cluster, you will also need to follow the steps in ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9001/rancher/v2.0-v2.4/en/cluster-provisioning/rke-clusters/node-pools/vsphere/vpshere-node-template-config/prior-to-2.0.4/#disk-uuids"},"this section")," to enable disk UUIDs."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"From the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, click ",(0,o.kt)("strong",{parentName:"li"},"Add Cluster"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose ",(0,o.kt)("strong",{parentName:"li"},"vSphere"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Cluster Name"),"."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("strong",{parentName:"li"},"Member Roles")," to configure user authorization for the cluster. Click ",(0,o.kt)("strong",{parentName:"li"},"Add Member")," to add users that can access the cluster. Use the ",(0,o.kt)("strong",{parentName:"li"},"Role")," drop-down to set permissions for each user."),(0,o.kt)("li",{parentName:"ol"},"Use ",(0,o.kt)("strong",{parentName:"li"},"Cluster Options")," to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. To see more cluster options, click on ",(0,o.kt)("strong",{parentName:"li"},"Show advanced options.")," For help configuring the cluster, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE cluster configuration reference.")),(0,o.kt)("li",{parentName:"ol"},"If you want to dynamically provision persistent storage or other infrastructure later, you will need to enable the vSphere cloud provider by modifying the cluster YAML file. For details, refer to ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"this section.")),(0,o.kt)("li",{parentName:"ol"},"Add one or more ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-pools"},"node pools")," to your cluster. Each node pool uses a node template to provision new nodes. To create a node template, click ",(0,o.kt)("strong",{parentName:"li"},"Add Node Template")," and complete the ",(0,o.kt)("strong",{parentName:"li"},"vSphere Options")," form. For help filling out the form, refer to the vSphere node template configuration reference. Refer to the newest version of the configuration reference that is less than or equal to your Rancher version:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.0.4"},"v2.0.4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4"},"before v2.0.4")))),(0,o.kt)("li",{parentName:"ol"},"Review your options to confirm they're correct. Then click ",(0,o.kt)("strong",{parentName:"li"},"Create")," to start provisioning the VMs and Kubernetes services.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")),(0,o.kt)("p",null,"Your cluster is created and assigned a state of ",(0,o.kt)("strong",{parentName:"p"},"Provisioning.")," Rancher is standing up your cluster."),(0,o.kt)("p",null,"You can access your cluster after its state is updated to ",(0,o.kt)("strong",{parentName:"p"},"Active.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Active")," clusters are assigned two Projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Default"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"default")," namespace"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"System"),", containing the ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"ingress-nginx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-public"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespaces")))),(0,o.kt)("h2",{id:"optional-next-steps"},"Optional Next Steps"),(0,o.kt)("p",null,"After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI:")," Follow ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#accessing-clusters-with-kubectl-on-your-workstation"},"these steps")," to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server\u2019s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Access your cluster with the kubectl CLI, using the authorized cluster endpoint:")," Follow ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#authenticating-directly-with-a-downstream-cluster"},"these steps")," to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can\u2019t connect to Rancher, you can still access the cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Provision Storage:")," For an example of how to provision storage in vSphere using Rancher, refer to ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/provisioning-storage-examples/vsphere-storage"},"this section.")," In order to dynamically provision storage in vSphere, the vSphere provider must be ",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/vsphere"},"enabled."))))}m.isMDXComponent=!0}}]);