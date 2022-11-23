"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[71711],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51830:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],s={title:"\u5c06 vSphere \u6811\u5185\u5377\u8fc1\u79fb\u5230 CSI"},i=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree",title:"\u5c06 vSphere \u6811\u5185\u5377\u8fc1\u79fb\u5230 CSI",description:"Kubernetes \u6b63\u5728\u9010\u6e10\u4e0d\u5728\u6811\u5185\u7ef4\u62a4\u4e91\u63d0\u4f9b\u5546\u3002vSphere \u6709\u4e00\u4e2a\u6811\u5916\u4e91\u63d0\u4f9b\u5546\uff0c\u53ef\u901a\u8fc7\u5b89\u88c5 vSphere \u4e91\u63d0\u4f9b\u5546\u548c\u4e91\u5b58\u50a8\u63d2\u4ef6\u6765\u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/migrate-from-in-tree-to-out-of-tree.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u5c06 vSphere \u6811\u5185\u5377\u8fc1\u79fb\u5230 CSI"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u6811\u5916 vSphere \u4e91\u63d0\u4f9b\u5546",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-cloud-providers/configure-out-of-tree-vsphere"},next:{title:"\u6ce8\u518c\u73b0\u6709\u96c6\u7fa4",permalink:"/zh/v2.6/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"}},p={},c=[{value:"Cloud-config \u683c\u5f0f\u9650\u5236",id:"cloud-config-\u683c\u5f0f\u9650\u5236",level:3},{value:"1. \u5b89\u88c5 CPI \u63d2\u4ef6",id:"1-\u5b89\u88c5-cpi-\u63d2\u4ef6",level:3},{value:"2. \u5b89\u88c5 CSI \u9a71\u52a8",id:"2-\u5b89\u88c5-csi-\u9a71\u52a8",level:3},{value:"3. \u7f16\u8f91\u96c6\u7fa4\u4ee5\u542f\u7528 CSI \u8fc1\u79fb\u7684\u529f\u80fd\u5f00\u5173",id:"3-\u7f16\u8f91\u96c6\u7fa4\u4ee5\u542f\u7528-csi-\u8fc1\u79fb\u7684\u529f\u80fd\u5f00\u5173",level:3},{value:"4. \u6e05\u7a7a worker \u8282\u70b9",id:"4-\u6e05\u7a7a-worker-\u8282\u70b9",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes \u6b63\u5728\u9010\u6e10\u4e0d\u5728\u6811\u5185\u7ef4\u62a4\u4e91\u63d0\u4f9b\u5546\u3002vSphere \u6709\u4e00\u4e2a\u6811\u5916\u4e91\u63d0\u4f9b\u5546\uff0c\u53ef\u901a\u8fc7\u5b89\u88c5 vSphere \u4e91\u63d0\u4f9b\u5546\u548c\u4e91\u5b58\u50a8\u63d2\u4ef6\u6765\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u672c\u9875\u4ecb\u7ecd\u5982\u4f55\u4ece\u6811\u5185 vSphere \u4e91\u63d0\u4f9b\u5546\u8fc1\u79fb\u5230\u6811\u5916\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u8fc1\u79fb\u540e\u7ba1\u7406\u73b0\u6709\u865a\u62df\u673a\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u9075\u5faa\u5b98\u65b9 ",(0,o.kt)("a",{parentName:"p",href:"https://vsphere-csi-driver.sigs.k8s.io/features/vsphere_csi_migration.html"},"vSphere \u8fc1\u79fb\u6587\u6863"),"\u4e2d\u63d0\u4f9b\u7684\u6b65\u9aa4\uff0c\u5e76\u4ecb\u7ecd\u4e86\u8981\u5728 Rancher \u4e2d\u6267\u884c\u7684\u6b65\u9aa4\u3002"),(0,o.kt)("h3",{id:"cloud-config-\u683c\u5f0f\u9650\u5236"},"Cloud-config \u683c\u5f0f\u9650\u5236"),(0,o.kt)("p",null,"\u7531\u4e8e vSphere CSI \u4e2d\u7684\u73b0\u6709\u9519\u8bef\uff0c\u4f7f\u7528\u4ee5\u4e0b cloud-config \u683c\u5f0f\u914d\u7f6e\u7684\u73b0\u6709\u5377\u5c06\u4e0d\u4f1a\u8fc1\u79fb\u3002"),(0,o.kt)("p",null,"\u5982\u679c cloud-config \u5177\u6709\u4ee5\u4e0b\u683c\u5f0f\u7684 datastore \u548c\u8d44\u6e90\u6c60\u8def\u5f84\uff0cvsphere CSI \u9a71\u52a8\u5c06\u65e0\u6cd5\u8bc6\u522b\u5b83\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'default-datastore: </datacenter>/datastore/<default-datastore-name>\nresourcepool-path: "</datacenter>/host/<cluster-name>/Resources/<resource-pool-name>"\n')),(0,o.kt)("p",null,"\u683c\u5f0f\u5982\u4e0b\u7684\u4f7f\u7528\u6811\u5185\u63d0\u4f9b\u5546\u9884\u7f6e\u7684\u5377\u5c06\u80fd\u6b63\u786e\u8fc1\u79fb\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'default-datastore: <default-datastore-name>\nresourcepool-path: "<cluster-name>/Resources/<resource-pool-name>"\n')),(0,o.kt)("p",null,"\u4e0a\u6e38 bug\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/vsphere-csi-driver/issues/628"},"https://github.com/kubernetes-sigs/vsphere-csi-driver/issues/628")),(0,o.kt)("p",null,"\u8ddf\u8e2a\u6b64 bug \u7684 Rancher issue\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/31105"},"https://github.com/rancher/rancher/issues/31105")),(0,o.kt)("h1",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"vSphere CSI \u8fc1\u79fb\u9700\u8981 vSphere 7.0u1\u3002\u4e3a\u4e86\u7ba1\u7406\u73b0\u6709\u7684\u6811\u5185 vSphere \u5377\uff0c\u8bf7\u5c06 vSphere \u5347\u7ea7\u5230 7.0u1\u3002"),(0,o.kt)("li",{parentName:"ul"},"Kubernetes \u7248\u672c\u5fc5\u987b\u4e3a 1.19 \u6216\u66f4\u9ad8\u7248\u672c\u3002")),(0,o.kt)("h1",{id:"\u8fc1\u79fb"},"\u8fc1\u79fb"),(0,o.kt)("h3",{id:"1-\u5b89\u88c5-cpi-\u63d2\u4ef6"},"1. \u5b89\u88c5 CPI \u63d2\u4ef6"),(0,o.kt)("p",null,"\u5728\u5b89\u88c5 CPI \u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"node.cloudprovider.kubernetes.io/uninitialized=true:NoSchedule")," \u4e3a\u6240\u6709\u8282\u70b9\u6dfb\u52a0\u6c61\u70b9\u3002"),(0,o.kt)("p",null,"\u8fd9\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5b8c\u6210\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -O https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh\n")),(0,o.kt)("p",null,"\u6216\u8005\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://raw.githubusercontent.com/rancher/helm3-charts/56b622f519728378abeddfe95074f1b87ab73b1e/charts/vsphere-cpi/taints.sh\nchmod +x taints.sh\n./taints.sh <path to kubeconfig if running the command outside the cluster>\n")),(0,o.kt)("p",null,"\u901a\u8fc7\u8fd0\u884c\u811a\u672c\u4e3a\u6240\u6709\u8282\u70b9\u6dfb\u52a0\u6c61\u70b9\u540e\uff0c\u542f\u52a8 Helm vSphere CPI Chart\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5c06\u5b89\u88c5 vSphere CPI chart \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"vSphere CPI"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u586b\u5199\u6240\u9700\u7684 vCenter \u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,o.kt)("p",null,"vSphere CPI \u4f7f\u7528 vSphere CSI \u9a71\u52a8\u6240\u9700\u7684 ProviderID \u6765\u521d\u59cb\u5316\u6240\u6709\u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u68c0\u67e5\u662f\u5426\u5df2\u4f7f\u7528 ProviderID \u521d\u59cb\u5316\u4e86\u6240\u6709\u8282\u70b9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl describe nodes | grep "ProviderID"\n')),(0,o.kt)("h3",{id:"2-\u5b89\u88c5-csi-\u9a71\u52a8"},"2. \u5b89\u88c5 CSI \u9a71\u52a8"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5c06\u5b89\u88c5 vSphere CSI chart \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"vSphere CSI"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u586b\u5199\u6240\u9700\u7684 vCenter \u8be6\u7ec6\u4fe1\u606f\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u5728\u5b89\u88c5\u524d\u81ea\u5b9a\u4e49 Helm \u9009\u9879"),"\uff0c\u7136\u540e\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u529f\u80fd"),"\u9009\u9879\u5361\u4e2d\uff0c\u9009\u4e2d",(0,o.kt)("strong",{parentName:"li"},"\u542f\u7528 CSI \u8fc1\u79fb"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4f60\u4e5f\u53ef\u4ee5\u8f6c\u5230",(0,o.kt)("strong",{parentName:"li"},"\u5b58\u50a8"),"\u9009\u9879\u5361\u5e76\u8bbe\u7f6e datastore\u3002\u6b64 Chart \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"csi.vsphere.vmware.com")," \u4f5c\u4e3a\u7f6e\u5907\u7a0b\u5e8f\u6765\u521b\u5efa\u4e00\u4e2a StorageClass\u3002\u5728\u521b\u5efa\u6b64 StorageClass \u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u63d0\u4f9b\u7528\u4e8e\u914d\u7f6e CSI \u5377\u7684 datastore URL\u3002\u901a\u8fc7\u9009\u62e9 datastore \u5e76\u8f6c\u5230",(0,o.kt)("strong",{parentName:"li"},"\u6982\u8ff0"),"\u9009\u9879\u5361\uff0c\u4f60\u53ef\u4ee5\u5728 vSphere \u5ba2\u6237\u7aef\u4e2d\u627e\u5230 datastore URL\u3002\u586b\u5199 StorageClass \u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,o.kt)("h3",{id:"3-\u7f16\u8f91\u96c6\u7fa4\u4ee5\u542f\u7528-csi-\u8fc1\u79fb\u7684\u529f\u80fd\u5f00\u5173"},"3. \u7f16\u8f91\u96c6\u7fa4\u4ee5\u542f\u7528 CSI \u8fc1\u79fb\u7684\u529f\u80fd\u5f00\u5173"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u7f16\u8f91\u96c6\u7fa4\u65f6\uff0c\u5982\u679c Kubernetes \u7248\u672c\u4f4e\u4e8e 1.19\uff0c\u8bf7\u4ece ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes \u7248\u672c"),"\u4e0b\u62c9\u83dc\u5355\u4e2d\u9009\u62e9 Kubernetes 1.19 \u6216\u66f4\u9ad8\u7248\u672c\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8981\u542f\u7528\u529f\u80fd\u5f00\u5173\uff0c\u8bf7\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u4ee5 YAML \u6587\u4ef6\u7f16\u8f91"),"\uff0c\u7136\u540e\u5728 kube-controller \u548c kubelet \u4e0b\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'  extra_args:\n    feature-gates: "CSIMigration=true,CSIMigrationvSphere=true"\n')))),(0,o.kt)("h3",{id:"4-\u6e05\u7a7a-worker-\u8282\u70b9"},"4. \u6e05\u7a7a worker \u8282\u70b9"),(0,o.kt)("p",null,"\u5728\u66f4\u6539 kubelet \u548c kube-controller-manager \u53c2\u6570\u4e4b\u524d\uff0c\u5fc5\u987b\u5728\u5347\u7ea7\u671f\u95f4\u6e05\u7a7a worker \u8282\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u6e05\u7a7a worker \u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u7f16\u8f91\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u9ad8\u7ea7\u9009\u9879"),"\u4e2d\uff0c\u5c06",(0,o.kt)("strong",{parentName:"li"},"\u6700\u5927\u4e0d\u53ef\u7528\u7684 Worker \u8282\u70b9\u6570"),"\u5b57\u6bb5\u8bbe\u7f6e\u4e3a 1\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8981\u5728\u5347\u7ea7\u671f\u95f4\u6e05\u7a7a\u8282\u70b9\uff0c\u8bf7\u9009\u62e9",(0,o.kt)("strong",{parentName:"li"},"\u6e05\u7a7a\u8282\u70b9 > \u662f"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06",(0,o.kt)("strong",{parentName:"li"},"\u5f3a\u5236"),"\u548c",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664\u672c\u5730\u6570\u636e"),"\u8bbe\u7f6e\u4e3a ",(0,o.kt)("strong",{parentName:"li"},"true"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u4ee5\u5347\u7ea7\u96c6\u7fa4\u3002")))}d.isMDXComponent=!0}}]);