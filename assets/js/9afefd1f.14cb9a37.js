"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[91702],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return a?i.createElement(m,o(o({ref:t},u),{},{components:a})):i.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={title:"Istio"},o=void 0,s={unversionedId:"pages-for-subheaders/istio",id:"pages-for-subheaders/istio",title:"Istio",description:"Istio is an open-source tool that makes it easier for DevOps teams to observe, secure, control, and troubleshoot the traffic within a complex network of microservices.",source:"@site/docs/pages-for-subheaders/istio.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/istio",permalink:"/pages-for-subheaders/istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/istio.md",tags:[],version:"current",lastUpdatedAt:1668560971,formattedLastUpdatedAt:"Nov 16, 2022",frontMatter:{title:"Istio"},sidebar:"tutorialSidebar",previous:{title:"Harvester Integration",permalink:"/integrations-in-rancher/harvester"},next:{title:"CPU and Memory Allocations",permalink:"/integrations-in-rancher/istio/cpu-and-memory-allocations"}},l={},c=[{value:"What&#39;s New in Rancher v2.5",id:"whats-new-in-rancher-v25",level:2},{value:"Tools Bundled with Istio",id:"tools-bundled-with-istio",level:2},{value:"Kiali",id:"kiali",level:3},{value:"Jaeger",id:"jaeger",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup Guide",id:"setup-guide",level:2},{value:"Remove Istio",id:"remove-istio",level:2},{value:"Accessing Visualizations",id:"accessing-visualizations",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Multiple Ingresses",id:"multiple-ingresses",level:3},{value:"Egress Support",id:"egress-support",level:3},{value:"Additional Steps for Installing Istio on an RKE2 Cluster",id:"additional-steps-for-installing-istio-on-an-rke2-cluster",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," is an open-source tool that makes it easier for DevOps teams to observe, secure, control, and troubleshoot the traffic within a complex network of microservices."),(0,n.kt)("p",null,"As a network of microservices changes and grows, the interactions between them can become increasingly difficult to manage and understand. In such a situation, it is useful to have a service mesh as a separate infrastructure layer. Istio's service mesh lets you manipulate traffic between microservices without changing the microservices directly."),(0,n.kt)("p",null,"Our integration of Istio is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to a team of developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing."),(0,n.kt)("p",null,"This core service mesh provides features that include but are not limited to the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Traffic Management")," such as ingress and egress routing, circuit breaking, mirroring."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Security")," with resources to authenticate and authorize traffic and users, mTLS included."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Observability")," of logs, metrics, and distributed traffic flows.")),(0,n.kt)("p",null,"After ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/istio-setup-guide"},"setting up istio")," you can leverage Istio's control plane functionality through the Rancher UI, ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"istioctl"),"."),(0,n.kt)("p",null,"Istio needs to be set up by a ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-admin")," before it can be used in a project."),(0,n.kt)("h2",{id:"whats-new-in-rancher-v25"},"What's New in Rancher v2.5"),(0,n.kt)("p",null,"The overall architecture of Istio has been simplified. A single component, Istiod, has been created by combining Pilot, Citadel, Galley and the sidecar injector. Node Agent functionality has also been merged into istio-agent."),(0,n.kt)("p",null,"Addons that were previously installed by Istio (cert-manager, Grafana, Jaeger, Kiali, Prometheus, Zipkin) will now need to be installed separately. Istio will support installation of integrations that are from the Istio Project and will maintain compatibility with those that are not."),(0,n.kt)("p",null,"A Prometheus integration will still be available through an installation of ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/monitoring-and-alerting"},"Rancher Monitoring"),", or by installing your own Prometheus operator. Rancher's Istio chart will also install Kiali by default to ensure you can get a full picture of your microservices out of the box."),(0,n.kt)("p",null,"Istio has migrated away from Helm as a way to install Istio and now provides installation through the istioctl binary or Istio Operator. To ensure the easiest interaction with Istio, Rancher's Istio will maintain a Helm chart that utilizes the istioctl binary to manage your Istio installation."),(0,n.kt)("p",null,"This Helm chart will be available via the Apps and Marketplace in the UI. A user that has access to the Rancher Chart's catalog will need to set up Istio before it can be used in the project."),(0,n.kt)("h2",{id:"tools-bundled-with-istio"},"Tools Bundled with Istio"),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," installer wraps the istioctl binary commands in a handy Helm chart, including an overlay file option to allow complex customization."),(0,n.kt)("p",null,"It also includes the following:"),(0,n.kt)("h3",{id:"kiali"},"Kiali"),(0,n.kt)("p",null,"Kiali is a comprehensive visualization aid used for graphing traffic flow throughout the service mesh. It allows you to see how they are connected, including the traffic rates and latencies between them."),(0,n.kt)("p",null,"You can check the health of the service mesh, or drill down to see the incoming and outgoing requests to a single component."),(0,n.kt)("h3",{id:"jaeger"},"Jaeger"),(0,n.kt)("p",null,"Our Istio installer includes a quick-start, all-in-one installation of ",(0,n.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"Jaeger,")," a tool used for tracing distributed systems."),(0,n.kt)("p",null,"Note that this is not a production-qualified deployment of Jaeger. This deployment uses an in-memory storage component, while a persistent storage component is recommended for production. For more information on which deployment strategy you may need, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/latest/operator/#production-strategy"},"Jaeger documentation.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough ",(0,n.kt)("a",{parentName:"p",href:"/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU and memory")," to run all of the components of Istio."),(0,n.kt)("p",null,"If you are installing Istio on RKE2 cluster, some additional steps are required. For details, see ",(0,n.kt)("a",{parentName:"p",href:"#additional-steps-for-installing-istio-on-an-rke2-cluster"},"this section.")),(0,n.kt)("p",null,"Note that Istio v2 (upstream Istio v1.7+) cannot be upgraded in an air gapped environment."),(0,n.kt)("h2",{id:"setup-guide"},"Setup Guide"),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/istio-setup-guide"},"setup guide")," for instructions on how to set up Istio and use it in a project."),(0,n.kt)("h2",{id:"remove-istio"},"Remove Istio"),(0,n.kt)("p",null,"To remove Istio components from a cluster, namespace, or workload, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/integrations-in-rancher/istio/disable-istio"},"uninstalling Istio.")),(0,n.kt)("h2",{id:"accessing-visualizations"},"Accessing Visualizations"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"By default, only cluster-admins have access to Kiali. For instructions on how to allow admin, edit or views roles to access them, see ",(0,n.kt)("a",{parentName:"p",href:"/integrations-in-rancher/istio/rbac-for-istio"},"this section."))),(0,n.kt)("p",null,"After Istio is set up in a cluster, Grafana, Prometheus, and Kiali are available in the Rancher UI."),(0,n.kt)("p",null,"To access the Grafana and Prometheus visualizations,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see the visualizations and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Grafana")," or any of the other dashboards.")),(0,n.kt)("p",null,"To access the Kiali visualization,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"On the ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to see Kiali and click ",(0,n.kt)("strong",{parentName:"li"},"Explore"),"."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Istio"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Kiali"),". From here you can access the ",(0,n.kt)("strong",{parentName:"li"},"Traffic Graph")," tab or the ",(0,n.kt)("strong",{parentName:"li"},"Traffic Metrics")," tab to see network visualizations and metrics.")),(0,n.kt)("p",null,"By default, all namespace will picked up by prometheus and make data available for Kiali graphs. Refer to ",(0,n.kt)("a",{parentName:"p",href:"/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},"selector/scrape config setup")," if you would like to use a different configuration for prometheus data scraping."),(0,n.kt)("p",null,"Your access to the visualizations depend on your role. Grafana and Prometheus are only available for ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-admin")," roles. The Kiali UI is available only to ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-admin")," by default, but ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-admin")," can allow other roles to access them by editing the Istio values.yaml."),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Istio installs a service mesh that uses ",(0,n.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/learn/service-mesh"},"Envoy")," sidecar proxies to intercept traffic to each workload. These sidecars intercept and manage service-to-service communication, allowing fine-grained observation and control over traffic within the cluster."),(0,n.kt)("p",null,"Only workloads that have the Istio sidecar injected can be tracked and controlled by Istio."),(0,n.kt)("p",null,"When a namespace has Istio enabled, new workloads deployed in the namespace will automatically have the Istio sidecar. You need to manually enable Istio in preexisting workloads."),(0,n.kt)("p",null,"For more information on the Istio sidecar, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/"},"Istio sidecare-injection docs")," and for more information on Istio's architecture, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/ops/deployment/architecture/"},"Istio Architecture docs")),(0,n.kt)("h3",{id:"multiple-ingresses"},"Multiple Ingresses"),(0,n.kt)("p",null,"By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster. Istio also installs an ingress gateway by default into the ",(0,n.kt)("inlineCode",{parentName:"p"},"istio-system")," namespace.  The result is that your cluster will have two ingresses in your cluster."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"In an Istio-enabled cluster, you can have two ingresses: the default Nginx ingress, and the default Istio controller.",src:a(74025).Z,width:"691",height:"572"})),(0,n.kt)("p",null," Additional Istio Ingress gateways can be enabled via the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/configuration-options#overlay-file"},"overlay file"),"."),(0,n.kt)("h3",{id:"egress-support"},"Egress Support"),(0,n.kt)("p",null,"By default the Egress gateway is disabled, but can be enabled on install or upgrade through the values.yaml or via the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/configuration-options#overlay-file"},"overlay file"),"."),(0,n.kt)("h2",{id:"additional-steps-for-installing-istio-on-an-rke2-cluster"},"Additional Steps for Installing Istio on an RKE2 Cluster"),(0,n.kt)("p",null,"To install Istio on an RKE2 cluster, follow the steps in ",(0,n.kt)("a",{parentName:"p",href:"/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster"},"this section.")))}p.isMDXComponent=!0},74025:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/istio-ingress-3ca2b3bfa19fe1f0d38b74966b383ac0.svg"}}]);