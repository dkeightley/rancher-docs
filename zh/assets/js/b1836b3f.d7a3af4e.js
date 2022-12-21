"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[70258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||a;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Generic troubleshooting"},l=void 0,i={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting",title:"Generic troubleshooting",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/generic-troubleshooting.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022\u5e749\u670823\u65e5",frontMatter:{title:"Generic troubleshooting"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting HA RKE Add-On Install",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/helm2-rke-add-on-troubleshooting"},next:{title:"Failed to get job complete status",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/troubleshooting/job-complete-status"}},s={},c=[{value:"Double check if all the required ports are opened in your (host) firewall",id:"double-check-if-all-the-required-ports-are-opened-in-your-host-firewall",level:3},{value:"All nodes should be present and in <strong>Ready</strong> state",id:"all-nodes-should-be-present-and-in-ready-state",level:3},{value:"All pods/jobs should be in <strong>Running</strong>/<strong>Completed</strong> state",id:"all-podsjobs-should-be-in-runningcompleted-state",level:3},{value:"Describe pod",id:"describe-pod",level:4},{value:"Pod container logs",id:"pod-container-logs",level:4},{value:"Describe job",id:"describe-job",level:4},{value:"Logs from the containers of pods of the job",id:"logs-from-the-containers-of-pods-of-the-job",level:4},{value:"Check ingress",id:"check-ingress",level:3},{value:"List all Kubernetes cluster events",id:"list-all-kubernetes-cluster-events",level:3},{value:"Check Rancher container logging",id:"check-rancher-container-logging",level:3},{value:"Check NGINX ingress controller logging",id:"check-nginx-ingress-controller-logging",level:3},{value:"Check if overlay network is functioning correctly",id:"check-if-overlay-network-is-functioning-correctly",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,o.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Kubernetes Install "),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,o.kt)("p",null,"Below are steps that you can follow to determine what is wrong in your cluster."),(0,o.kt)("h3",{id:"double-check-if-all-the-required-ports-are-opened-in-your-host-firewall"},"Double check if all the required ports are opened in your (host) firewall"),(0,o.kt)("p",null,"Double check if all the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"required ports")," are opened in your (host) firewall."),(0,o.kt)("h3",{id:"all-nodes-should-be-present-and-in-ready-state"},"All nodes should be present and in ",(0,o.kt)("strong",{parentName:"h3"},"Ready")," state"),(0,o.kt)("p",null,"To check, run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml get nodes\n")),(0,o.kt)("p",null,"If a node is not shown in this output or a node is not in ",(0,o.kt)("strong",{parentName:"p"},"Ready")," state, you can check the logging of the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," container. Login to the node and run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker logs kubelet"),"."),(0,o.kt)("h3",{id:"all-podsjobs-should-be-in-runningcompleted-state"},"All pods/jobs should be in ",(0,o.kt)("strong",{parentName:"h3"},"Running"),"/",(0,o.kt)("strong",{parentName:"h3"},"Completed")," state"),(0,o.kt)("p",null,"To check, run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml get pods --all-namespaces\n")),(0,o.kt)("p",null,"If a pod is not in ",(0,o.kt)("strong",{parentName:"p"},"Running")," state, you can dig into the root cause by running:"),(0,o.kt)("h4",{id:"describe-pod"},"Describe pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml describe pod POD_NAME -n NAMESPACE\n")),(0,o.kt)("h4",{id:"pod-container-logs"},"Pod container logs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml logs POD_NAME -n NAMESPACE\n")),(0,o.kt)("p",null,"If a job is not in ",(0,o.kt)("strong",{parentName:"p"},"Completed")," state, you can dig into the root cause by running:"),(0,o.kt)("h4",{id:"describe-job"},"Describe job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml describe job JOB_NAME -n NAMESPACE\n")),(0,o.kt)("h4",{id:"logs-from-the-containers-of-pods-of-the-job"},"Logs from the containers of pods of the job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml logs -l job-name=JOB_NAME -n NAMESPACE\n")),(0,o.kt)("h3",{id:"check-ingress"},"Check ingress"),(0,o.kt)("p",null,"Ingress should have the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"HOSTS")," (showing the configured FQDN) and ",(0,o.kt)("inlineCode",{parentName:"p"},"ADDRESS")," (address(es) it will be routed to)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml get ingress --all-namespaces\n")),(0,o.kt)("h3",{id:"list-all-kubernetes-cluster-events"},"List all Kubernetes cluster events"),(0,o.kt)("p",null,"Kubernetes cluster events are stored, and can be retrieved by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml get events --all-namespaces\n")),(0,o.kt)("h3",{id:"check-rancher-container-logging"},"Check Rancher container logging"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml logs -l app=cattle -n cattle-system\n")),(0,o.kt)("h3",{id:"check-nginx-ingress-controller-logging"},"Check NGINX ingress controller logging"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl --kubeconfig kube_config_rancher-cluster.yml logs -l app=ingress-nginx -n ingress-nginx\n")),(0,o.kt)("h3",{id:"check-if-overlay-network-is-functioning-correctly"},"Check if overlay network is functioning correctly"),(0,o.kt)("p",null,"The pod can be scheduled to any of the hosts you used for your cluster, but that means that the NGINX ingress controller needs to be able to route the request from ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_1")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE_2"),". This happens over the overlay network. If the overlay network is not functioning, you will experience intermittent TCP/HTTP connection failures due to the NGINX ingress controller not being able to route to the pod."),(0,o.kt)("p",null,"To test the overlay network, you can launch the following ",(0,o.kt)("inlineCode",{parentName:"p"},"DaemonSet")," definition. This will run an ",(0,o.kt)("inlineCode",{parentName:"p"},"alpine")," container on every host, which we will use to run a ",(0,o.kt)("inlineCode",{parentName:"p"},"ping")," test between containers on all hosts."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the following file as ",(0,o.kt)("inlineCode",{parentName:"p"},"ds-alpine.yml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: alpine\nspec:\n  selector:\n      matchLabels:\n        name: alpine\n  template:\n    metadata:\n      labels:\n        name: alpine\n    spec:\n      tolerations:\n      - effect: NoExecute\n        key: "node-role.kubernetes.io/etcd"\n        value: "true"\n      - effect: NoSchedule\n        key: "node-role.kubernetes.io/controlplane"\n        value: "true"\n      containers:\n      - image: alpine\n        imagePullPolicy: Always\n        name: alpine\n        command: ["sh", "-c", "tail -f /dev/null"]\n        terminationMessagePath: /dev/termination-log\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch it using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl --kubeconfig kube_config_rancher-cluster.yml create -f ds-alpine.yml"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait until ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl --kubeconfig kube_config_rancher-cluster.yml rollout status ds/alpine -w")," returns: ",(0,o.kt)("inlineCode",{parentName:"p"},'daemon set "alpine" successfully rolled out'),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command to let each container on every host ping each other (it's a single line command)."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'echo "=> Start"; kubectl --kubeconfig kube_config_rancher-cluster.yml get pods -l name=alpine -o jsonpath=\'{range .items[*]}{@.metadata.name}{" "}{@.spec.nodeName}{"\\n"}{end}\' | while read spod shost; do kubectl --kubeconfig kube_config_rancher-cluster.yml get pods -l name=alpine -o jsonpath=\'{range .items[*]}{@.status.podIP}{" "}{@.spec.nodeName}{"\\n"}{end}\' | while read tip thost; do kubectl --kubeconfig kube_config_rancher-cluster.yml --request-timeout=\'10s\' exec $spod -- /bin/sh -c "ping -c2 $tip > /dev/null 2>&1"; RC=$?; if [ $RC -ne 0 ]; then echo $shost cannot reach $thost; fi; done; done; echo "=> End"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When this command has finished running, the output indicating everything is correct is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"=> Start\n=> End\n")))),(0,o.kt)("p",null,"If you see error in the output, that means that the ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"required ports")," for overlay networking are not opened between the hosts indicated."),(0,o.kt)("p",null,"Example error output of a situation where NODE1 had the UDP ports blocked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"=> Start\ncommand terminated with exit code 1\nNODE2 cannot reach NODE1\ncommand terminated with exit code 1\nNODE3 cannot reach NODE1\ncommand terminated with exit code 1\nNODE1 cannot reach NODE2\ncommand terminated with exit code 1\nNODE1 cannot reach NODE3\n=> End\n")))}u.isMDXComponent=!0}}]);