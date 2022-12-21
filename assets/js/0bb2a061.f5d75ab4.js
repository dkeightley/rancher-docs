"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13453],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(o),h=n,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return o?a.createElement(g,i(i({ref:t},c),{},{components:o})):a.createElement(g,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},47301:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=o(87462),n=(o(67294),o(3905));const r={title:"5. Set up the Istio Gateway"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",title:"5. Set up the Istio Gateway",description:"The gateway to each cluster can have its own port or load balancer, which is unrelated to a service mesh. By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1667008130,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"5. Set up the Istio Gateway"},sidebar:"tutorialSidebar",previous:{title:"4. Add Deployments and Services with the Istio Sidecar",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},next:{title:"6. Set up Istio's Components for Traffic Management",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"}},l={},u=[{value:"Enable the Istio Gateway",id:"enable-the-istio-gateway",level:2},{value:"Add a Kubernetes Gateway that Points to the Istio Gateway",id:"add-a-kubernetes-gateway-that-points-to-the-istio-gateway",level:2},{value:"Access the ProductPage Service from a Web Browser",id:"access-the-productpage-service-from-a-web-browser",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Confirming that the Kubernetes Gateway Matches Istio&#39;s Ingress Controller",id:"confirming-that-the-kubernetes-gateway-matches-istios-ingress-controller",level:3},{value:"Next: Set up Istio&#39;s Components for Traffic Management",id:"next-set-up-istios-components-for-traffic-management",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The gateway to each cluster can have its own port or load balancer, which is unrelated to a service mesh. By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster."),(0,n.kt)("p",null,"You can use the NGINX ingress controller with or without Istio installed. If this is the only gateway to your cluster, Istio will be able to route traffic from service to service, but Istio will not be able to receive traffic from outside the cluster."),(0,n.kt)("p",null,"To allow Istio to receive external traffic, you need to enable Istio's gateway, which works as a north-south proxy for external traffic. When you enable the Istio gateway, the result is that your cluster will have two ingresses."),(0,n.kt)("p",null,"You will also need to set up a Kubernetes gateway for your services. This Kubernetes resource points to Istio's implementation of the ingress gateway to the cluster."),(0,n.kt)("p",null,"You can route traffic into the service mesh with a load balancer or just Istio's NodePort gateway. This section describes how to set up the NodePort gateway."),(0,n.kt)("p",null,"For more information on the Istio gateway, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/docs/reference/config/networking/v1alpha3/gateway/"},"Istio documentation.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"In an Istio-enabled cluster, you can have two ingresses: the default Nginx ingress, and the default Istio controller.",src:o(74025).Z,width:"691",height:"572"})),(0,n.kt)("h2",{id:"enable-the-istio-gateway"},"Enable the Istio Gateway"),(0,n.kt)("p",null,"The ingress gateway is a Kubernetes service that will be deployed in your cluster. There is only one Istio gateway per cluster."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the cluster where you want to allow outside traffic into Istio."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Tools > Istio.")),(0,n.kt)("li",{parentName:"ol"},"Expand the ",(0,n.kt)("strong",{parentName:"li"},"Ingress Gateway")," section."),(0,n.kt)("li",{parentName:"ol"},"Under ",(0,n.kt)("strong",{parentName:"li"},"Enable Ingress Gateway,")," click ",(0,n.kt)("strong",{parentName:"li"},"True.")," The default type of service for the Istio gateway is NodePort. You can also configure it as a ",(0,n.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing"},"load balancer.")),(0,n.kt)("li",{parentName:"ol"},"Optionally, configure the ports, service types, node selectors and tolerations, and resource requests and limits for this service. The default resource requests for CPU and memory are the minimum recommended resources."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The gateway is deployed, which allows Istio to receive traffic from outside the cluster."),(0,n.kt)("h2",{id:"add-a-kubernetes-gateway-that-points-to-the-istio-gateway"},"Add a Kubernetes Gateway that Points to the Istio Gateway"),(0,n.kt)("p",null,"To allow traffic to reach Ingress, you will also need to provide a Kubernetes gateway resource in your YAML that points to Istio's implementation of the ingress gateway to the cluster."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the namespace where you want to deploy the Kubernetes gateway and click ",(0,n.kt)("strong",{parentName:"li"},"Import YAML.")),(0,n.kt)("li",{parentName:"ol"},"Upload the gateway YAML as a file or paste it into the form. An example gateway YAML is provided below."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Import."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.istio.io/v1alpha3\nkind: Gateway\nmetadata:\n  name: bookinfo-gateway\nspec:\n  selector:\n    istio: ingressgateway # use istio default controller\n  servers:\n    - port:\n        number: 80\n        name: http\n        protocol: HTTP\n      hosts:\n        - "*"\n---\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: bookinfo\nspec:\n  hosts:\n  - "*"\n  gateways:\n  - bookinfo-gateway\n  http:\n  - match:\n    - uri:\n        exact: /productpage\n    - uri:\n        prefix: /static\n    - uri:\n        exact: /login\n    - uri:\n        exact: /logout\n    - uri:\n        prefix: /api/v1/products\n    route:\n    - destination:\n        host: productpage\n        port:\n          number: 9080\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," You have configured your gateway resource so that Istio can receive traffic from outside the cluster."),(0,n.kt)("p",null,"Confirm that the resource exists by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get gateway -A\n")),(0,n.kt)("p",null,"The result should be something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NAME               AGE\nbookinfo-gateway   64m\n")),(0,n.kt)("h3",{id:"access-the-productpage-service-from-a-web-browser"},"Access the ProductPage Service from a Web Browser"),(0,n.kt)("p",null,"To test and see if the BookInfo app deployed correctly, the app can be viewed a web browser using the Istio controller IP and port, combined with the request name specified in your Kubernetes gateway resource:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"http://<IP of Istio controller>:<Port of istio controller>/productpage")),(0,n.kt)("p",null,"To get the ingress gateway URL and port,"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"System")," project in your cluster."),(0,n.kt)("li",{parentName:"ol"},"Within the ",(0,n.kt)("inlineCode",{parentName:"li"},"System")," project, go to ",(0,n.kt)("inlineCode",{parentName:"li"},"Resources")," > ",(0,n.kt)("inlineCode",{parentName:"li"},"Workloads")," then scroll down to the ",(0,n.kt)("inlineCode",{parentName:"li"},"istio-system")," namespace."),(0,n.kt)("li",{parentName:"ol"},"Within ",(0,n.kt)("inlineCode",{parentName:"li"},"istio-system"),", there is a workload named ",(0,n.kt)("inlineCode",{parentName:"li"},"istio-ingressgateway"),". Under the name of this workload, you should see links, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"80/tcp"),"."),(0,n.kt)("li",{parentName:"ol"},"Click one of those links. This should show you the URL of the ingress gateway in your web browser. Append ",(0,n.kt)("inlineCode",{parentName:"li"},"/productpage")," to the URL.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," You should see the BookInfo app in the web browser."),(0,n.kt)("p",null,"For help inspecting the Istio controller URL and ports, try the commands the ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/traffic-management/ingress/ingress-control/#determining-the-ingress-ip-and-ports"},"Istio documentation.")),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/docs/tasks/traffic-management/ingress/ingress-control/#troubleshooting"},"official Istio documentation")," suggests ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," commands to inspect the correct ingress host and ingress port for external requests."),(0,n.kt)("h3",{id:"confirming-that-the-kubernetes-gateway-matches-istios-ingress-controller"},"Confirming that the Kubernetes Gateway Matches Istio's Ingress Controller"),(0,n.kt)("p",null,"You can try the steps in this section to make sure the Kubernetes gateway is configured properly."),(0,n.kt)("p",null,"In the gateway resource, the selector refers to Istio's default ingress controller by its label, in which the key of the label is ",(0,n.kt)("inlineCode",{parentName:"p"},"istio")," and the value is ",(0,n.kt)("inlineCode",{parentName:"p"},"ingressgateway"),".  To make sure the label is appropriate for the gateway, do the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"System")," project in your cluster."),(0,n.kt)("li",{parentName:"ol"},"Within the ",(0,n.kt)("inlineCode",{parentName:"li"},"System")," project, go to the namespace ",(0,n.kt)("inlineCode",{parentName:"li"},"istio-system"),"."),(0,n.kt)("li",{parentName:"ol"},"Within ",(0,n.kt)("inlineCode",{parentName:"li"},"istio-system"),", there is a workload named ",(0,n.kt)("inlineCode",{parentName:"li"},"istio-ingressgateway"),"."),(0,n.kt)("li",{parentName:"ol"},"Click the name of this workload and go to the ",(0,n.kt)("strong",{parentName:"li"},"Labels and Annotations")," section. You should see that it has the key ",(0,n.kt)("inlineCode",{parentName:"li"},"istio")," and the value ",(0,n.kt)("inlineCode",{parentName:"li"},"ingressgateway"),". This confirms that the selector in the Gateway resource matches Istio's default ingress controller.")),(0,n.kt)("h3",{id:"next-set-up-istios-components-for-traffic-management"},(0,n.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-traffic-management"},"Next: Set up Istio's Components for Traffic Management")))}p.isMDXComponent=!0},74025:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/istio-ingress-3ca2b3bfa19fe1f0d38b74966b383ac0.svg"}}]);