"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83488],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=c(r),m=n,p=g["".concat(u,".").concat(m)]||g[m]||l[m]||i;return r?o.createElement(p,a(a({ref:t},d),{},{components:r})):o.createElement(p,a({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},20342:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var o=r(87462),n=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"Configuration"},u=void 0,c={unversionedId:"pages-for-subheaders/monitoring-v2-configuration-guides",id:"version-2.5/pages-for-subheaders/monitoring-v2-configuration-guides",title:"Configuration",description:"This page captures some of the most important options for configuring Monitoring V2 in the Rancher UI.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/monitoring-v2-configuration-guides.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/monitoring-v2-configuration-guides",permalink:"/v2.5/pages-for-subheaders/monitoring-v2-configuration-guides",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/monitoring-v2-configuration-guides.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"10/29/2022",frontMatter:{title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Migrating to Rancher v2.5 Monitoring",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring"},next:{title:"Advanced Configuration",permalink:"/v2.5/pages-for-subheaders/advanced-configuration"}},d={},l=[{value:"Setting Resource Limits and Requests",id:"setting-resource-limits-and-requests",level:2},{value:"Prometheus Configuration",id:"prometheus-configuration",level:2},{value:"ServiceMonitor and PodMonitor Configuration",id:"servicemonitor-and-podmonitor-configuration",level:3},{value:"Advanced Prometheus Configuration",id:"advanced-prometheus-configuration",level:3},{value:"Alertmanager Configuration",id:"alertmanager-configuration",level:2},{value:"Receivers",id:"receivers",level:3},{value:"Routes",id:"routes",level:3},{value:"Advanced",id:"advanced",level:3}],g={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page captures some of the most important options for configuring Monitoring V2 in the Rancher UI."),(0,i.kt)("p",null,"For information on configuring custom scrape targets and rules for Prometheus, please refer to the upstream documentation for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator.")," Some of the most important custom resources are explained in the Prometheus Operator ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/design.md"},"design documentation.")," The Prometheus Operator documentation can help also you set up RBAC, Thanos, or custom configuration."),(0,i.kt)("h2",{id:"setting-resource-limits-and-requests"},"Setting Resource Limits and Requests"),(0,i.kt)("p",null,"The resource requests and limits for the monitoring application can be configured when installing ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),". For more information about the default limits, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"this page.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," On an idle cluster, Monitoring V2 has significantly higher CPU usage (up to 70%) as compared to Monitoring V1. To improve performance and achieve similar results as in Monitoring V1, turn off the Prometheus adapter.")),(0,i.kt)("h2",{id:"prometheus-configuration"},"Prometheus Configuration"),(0,i.kt)("p",null,"It is usually not necessary to directly edit the Prometheus custom resource."),(0,i.kt)("p",null,"Instead, to configure Prometheus to scrape custom metrics, you will only need to create a new ServiceMonitor or PodMonitor to configure Prometheus to scrape additional metrics."),(0,i.kt)("h3",{id:"servicemonitor-and-podmonitor-configuration"},"ServiceMonitor and PodMonitor Configuration"),(0,i.kt)("p",null,"For details, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors"},"this page.")),(0,i.kt)("h3",{id:"advanced-prometheus-configuration"},"Advanced Prometheus Configuration"),(0,i.kt)("p",null,"For more information about directly editing the Prometheus custom resource, which may be helpful in advanced use cases, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},"this page.")),(0,i.kt)("h2",{id:"alertmanager-configuration"},"Alertmanager Configuration"),(0,i.kt)("p",null,"The Alertmanager custom resource usually doesn't need to be edited directly. For most common use cases, you can manage alerts by updating Routes and Receivers."),(0,i.kt)("p",null,"Routes and receivers are part of the configuration of the alertmanager custom resource. In the Rancher UI, Routes and Receivers are not true custom resources, but pseudo-custom resources that the Prometheus Operator uses to synchronize your configuration with the Alertmanager custom resource. When routes and receivers are updated, the monitoring application will automatically update Alertmanager to reflect those changes."),(0,i.kt)("p",null,"For some advanced use cases, you may want to configure alertmanager directly. For more information, refer to ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"this page.")),(0,i.kt)("h3",{id:"receivers"},"Receivers"),(0,i.kt)("p",null,"Receivers are used to set up notifications. For details on how to configure receivers, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/monitoring-v2-configuration/receivers"},"this page.")),(0,i.kt)("h3",{id:"routes"},"Routes"),(0,i.kt)("p",null,"Routes filter notifications before they reach receivers. Each route needs to refer to a receiver that has already been configured. For details on how to configure routes, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/monitoring-v2-configuration/routes"},"this page.")),(0,i.kt)("h3",{id:"advanced"},"Advanced"),(0,i.kt)("p",null,"For more information about directly editing the Alertmanager custom resource, which may be helpful in advanced use cases, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"this page.")))}m.isMDXComponent=!0}}]);