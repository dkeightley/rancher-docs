"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[22856],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79771:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"How Monitoring Works",weight:1},l=void 0,u={unversionedId:"explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works",id:"explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works",title:"How Monitoring Works",description:"1. Architecture Overview",source:"@site/docs/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works.md",sourceDirName:"explanations/integrations-in-rancher/monitoring-and-alerting",slug:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works",permalink:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works.md",tags:[],version:"current",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"How Monitoring Works",weight:1},sidebar:"tutorialSidebar",previous:{title:"Monitoring and Alerting",permalink:"/pages-for-subheaders/monitoring-and-alerting"},next:{title:"Role-based Access Control",permalink:"/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"}},p={},c=[{value:"Prometheus Operator",id:"prometheus-operator",level:3},{value:"ServiceMonitors and PodMonitors",id:"servicemonitors-and-podmonitors",level:3},{value:"How PushProx Works",id:"how-pushprox-works",level:3},{value:"PrometheusRules",id:"prometheusrules",level:3},{value:"Alert Routing",id:"alert-routing",level:3},{value:"Storing Time Series Data",id:"storing-time-series-data",level:3},{value:"Defining Rules for Prometheus",id:"defining-rules-for-prometheus",level:3},{value:"Alerting and Recording Rules",id:"alerting-and-recording-rules",level:3},{value:"Alerts Forwarded by alertingDrivers",id:"alerts-forwarded-by-alertingdrivers",level:3},{value:"Routing Alerts to Receivers",id:"routing-alerts-to-receivers",level:3},{value:"Configuring Multiple Receivers",id:"configuring-multiple-receivers",level:3},{value:"Resources Deployed by Default",id:"resources-deployed-by-default",level:3},{value:"Default Exporters",id:"default-exporters",level:3},{value:"Components Exposed in the Rancher UI",id:"components-exposed-in-the-rancher-ui",level:3},{value:"PushProx",id:"pushprox",level:3},{value:"Defining what Metrics are Scraped",id:"defining-what-metrics-are-scraped",level:3},{value:"How the Prometheus Operator Sets up Metrics Scraping",id:"how-the-prometheus-operator-sets-up-metrics-scraping",level:3},{value:"How Kubernetes Component Metrics are Exposed",id:"how-kubernetes-component-metrics-are-exposed",level:3},{value:"Scraping Metrics with PushProx",id:"scraping-metrics-with-pushprox",level:3},{value:"Scraping Metrics",id:"scraping-metrics",level:3},{value:"Scraping Metrics Based on Kubernetes Distribution",id:"scraping-metrics-based-on-kubernetes-distribution",level:3},{value:"Terminology",id:"terminology",level:3}],d={toc:c};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-architecture-overview"},"Architecture Overview")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-how-prometheus-works"},"How Prometheus Works")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-how-alertmanager-works"},"How Alertmanager Works")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4-monitoring-v2-specific-components"},"Monitoring V2 Specific Components")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#5-scraping-and-exposing-metrics"},"Scraping and Exposing Metrics"))),(0,o.kt)("h1",{id:"1-architecture-overview"},"1. Architecture Overview"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"The following sections describe how data flows through the Monitoring V2 application:"))),(0,o.kt)("h3",{id:"prometheus-operator"},"Prometheus Operator"),(0,o.kt)("p",null,"Prometheus Operator observes ServiceMonitors, PodMonitors, and PrometheusRules being created. When the Prometheus configuration resources are created, Prometheus Operator calls the Prometheus API to sync the new configuration. As the diagram at the end of this section shows, the Prometheus Operator acts as the intermediary between Prometheus and Kubernetes, calling the Prometheus API to synchronize Prometheus with the monitoring-related resources in Kubernetes."),(0,o.kt)("h3",{id:"servicemonitors-and-podmonitors"},"ServiceMonitors and PodMonitors"),(0,o.kt)("p",null,"ServiceMonitors and PodMonitors declaratively specify targets, such as Services and Pods, that need to be monitored."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Targets are scraped on a recurring schedule based on the configured Prometheus scrape interval, and the metrics that are scraped are stored into the Prometheus Time Series Database (TSDB).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In order to perform the scrape, ServiceMonitors and PodMonitors are defined with label selectors that determine which Services or Pods should be scraped and endpoints that determine how the scrape should happen on the given target, e.g., scrape/metrics in TCP 10252, proxying through IP addr x.x.x.x.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Out of the box, Monitoring V2 comes with certain pre-configured exporters that are deployed based on the type of Kubernetes cluster that it is deployed on. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"#5-scraping-and-exposing-metrics"},"Scraping and Exposing Metrics"),"."))),(0,o.kt)("h3",{id:"how-pushprox-works"},"How PushProx Works"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Certain internal Kubernetes components are scraped via a proxy deployed as part of Monitoring V2 called ",(0,o.kt)("strong",{parentName:"p"},"PushProx"),". The Kubernetes components that expose metrics to Prometheus through PushProx are the following:\n",(0,o.kt)("inlineCode",{parentName:"p"},"kube-controller-manager"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-scheduler"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"etcd"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-proxy"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For each PushProx exporter, we deploy one PushProx client onto all target nodes. For example, a PushProx client is deployed onto all controlplane nodes for kube-controller-manager, all etcd nodes for kube-etcd, and all nodes for kubelet.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We deploy exactly one PushProx proxy per exporter. The process for exporting metrics is as follows:"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The PushProx Client establishes an outbound connection with the PushProx Proxy."),(0,o.kt)("li",{parentName:"ol"},"The client then polls the proxy for scrape requests that have come into the proxy."),(0,o.kt)("li",{parentName:"ol"},"When the proxy receives a scrape request from Prometheus, the client sees it as a result of the poll."),(0,o.kt)("li",{parentName:"ol"},"The client scrapes the internal component."),(0,o.kt)("li",{parentName:"ol"},"The internal component responds by pushing metrics back to the proxy.")),(0,o.kt)("figcaption",null,(0,o.kt)("br",null),"Process for Exporting Metrics with PushProx:",(0,o.kt)("br",null)),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Process for Exporting Metrics with PushProx",src:r(88049).Z,width:"821",height:"612"})),(0,o.kt)("h3",{id:"prometheusrules"},"PrometheusRules"),(0,o.kt)("p",null,"PrometheusRules allow users to define rules for what metrics or time series database queries should result in alerts being fired. Rules are evaluated on an interval."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recording rules")," create a new time series based on existing series that have been collected. They are frequently used to precompute complex queries."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Alerting rules")," run a particular query and fire an alert from Prometheus if the query evaluates to a non-zero value.")),(0,o.kt)("h3",{id:"alert-routing"},"Alert Routing"),(0,o.kt)("p",null,"Once Prometheus determines that an alert needs to be fired, alerts are forwarded to ",(0,o.kt)("strong",{parentName:"p"},"Alertmanager"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Alerts contain labels that come from the PromQL query itself and additional labels and annotations that can be provided as part of specifying the initial PrometheusRule.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Before receiving any alerts, Alertmanager will use the ",(0,o.kt)("strong",{parentName:"p"},"routes")," and ",(0,o.kt)("strong",{parentName:"p"},"receivers")," specified in its configuration to form a routing tree on which all incoming alerts are evaluated. Each node of the routing tree can specify additional grouping, labeling, and filtering that needs to happen based on the labels attached to the Prometheus alert. A node on the routing tree (usually a leaf node) can also specify that an alert that reaches it needs to be sent out to a configured Receiver, e.g., Slack, PagerDuty, SMS, etc. Note that Alertmanager will send an alert first to ",(0,o.kt)("strong",{parentName:"p"},"alertingDriver"),", then alertingDriver will send or forward alert to the proper destination.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Routes and receivers are also stored in the Kubernetes API via the Alertmanager Secret. When the Secret is updated, Alertmanager is also updated automatically. Note that routing occurs via labels only (not via annotations, etc.)."))),(0,o.kt)("figcaption",null,"How data flows through the monitoring application:"),(0,o.kt)("h1",{id:"2-how-prometheus-works"},"2. How Prometheus Works"),(0,o.kt)("h3",{id:"storing-time-series-data"},"Storing Time Series Data"),(0,o.kt)("p",null,"After collecting metrics from exporters, Prometheus stores the time series in a local on-disk time series database. Prometheus optionally integrates with remote systems, but ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," uses local storage for the time series database."),(0,o.kt)("p",null,"Once stored, users can query this TSDB using PromQL, the query language for Prometheus."),(0,o.kt)("p",null,"PromQL queries can be visualized in one of two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By supplying the query in Prometheus's Graph UI, which will show a simple graphical view of the data."),(0,o.kt)("li",{parentName:"ol"},"By creating a Grafana Dashboard that contains the PromQL query and additional formatting directives that label axes, add units, change colors, use alternative visualizations, etc.")),(0,o.kt)("h3",{id:"defining-rules-for-prometheus"},"Defining Rules for Prometheus"),(0,o.kt)("p",null,"Rules define queries that Prometheus needs to execute on a regular ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluationInterval")," to perform certain actions, such as firing an alert (alerting rules) or precomputing a query based on others existing in its TSDB (recording rules). These rules are encoded in PrometheusRules custom resources. When PrometheusRule custom resources are created or updated, the Prometheus Operator observes the change and calls the Prometheus API to synchronize the set of rules that Prometheus is currently evaluating on a regular interval."),(0,o.kt)("p",null,"A PrometheusRule allows you to define one or more RuleGroups. Each RuleGroup consists of a set of Rule objects that can each represent either an alerting or a recording rule with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the new alert or record"),(0,o.kt)("li",{parentName:"ul"},"A PromQL expression for the new alert or record"),(0,o.kt)("li",{parentName:"ul"},"Labels that should be attached to the alert or record that identify it (e.g. cluster name or severity)"),(0,o.kt)("li",{parentName:"ul"},"Annotations that encode any additional important pieces of information that need to be displayed on the notification for an alert (e.g. summary, description, message, runbook URL, etc.). This field is not required for recording rules.")),(0,o.kt)("p",null,"On evaluating a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/main/Documentation/api.md#rule"},"rule"),", Prometheus will execute the provided PromQL query, add additional provided labels (or annotations - only for alerting rules), and execute the appropriate action for the rule. For example, an Alerting Rule that adds ",(0,o.kt)("inlineCode",{parentName:"p"},"team: front-end")," as a label to the provided PromQL query will append that label to the fired alert, which will allow Alertmanager to forward the alert to the correct Receiver."),(0,o.kt)("h3",{id:"alerting-and-recording-rules"},"Alerting and Recording Rules"),(0,o.kt)("p",null,"Prometheus doesn't maintain the state of whether alerts are active. It fires alerts repetitively at every evaluation interval, relying on Alertmanager to group and filter the alerts into meaningful notifications."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluation_interval")," constant defines how often Prometheus evaluates its alerting rules against the time series database. Similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape_interval"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"evaluation_interval")," also defaults to one minute."),(0,o.kt)("p",null,"The rules are contained in a set of rule files. Rule files include both alerting rules and recording rules, but only alerting rules result in alerts being fired after their evaluation."),(0,o.kt)("p",null,"For recording rules, Prometheus runs a query, then stores it as a time series. This synthetic time series is useful for storing the results of an expensive or time-consuming query so that it can be queried more quickly in the future."),(0,o.kt)("p",null,"Alerting rules are more commonly used. Whenever an alerting rule evaluates to a positive number, Prometheus fires an alert."),(0,o.kt)("p",null,"The Rule file adds labels and annotations to alerts before firing them, depending on the use case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Labels indicate information that identifies the alert and could affect the routing of the alert. For example, if when sending an alert about a certain container, the container ID could be used as a label.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Annotations denote information that doesn't affect where an alert is routed, for example, a runbook or an error message."))),(0,o.kt)("h1",{id:"3-how-alertmanager-works"},"3. How Alertmanager Works"),(0,o.kt)("p",null,"The Alertmanager handles alerts sent by client applications such as the Prometheus server. It takes care of the following tasks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Deduplicating, grouping, and routing alerts to the correct receiver integration such as email, PagerDuty, or OpsGenie")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Silencing and inhibition of alerts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tracking alerts that fire over time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sending out the status of whether an alert is currently firing, or if it is resolved"))),(0,o.kt)("h3",{id:"alerts-forwarded-by-alertingdrivers"},"Alerts Forwarded by alertingDrivers"),(0,o.kt)("p",null,"When alertingDrivers are installed, this creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," that can be used as the receiver's URL for Teams or SMS, based on the alertingDriver's configuration. The URL in the Receiver points to the alertingDrivers; so the Alertmanager sends alert first to alertingDriver, then alertingDriver forwards or sends alert to the proper destination."),(0,o.kt)("h3",{id:"routing-alerts-to-receivers"},"Routing Alerts to Receivers"),(0,o.kt)("p",null,"Alertmanager coordinates where alerts are sent. It allows you to group alerts based on labels and fire them based on whether certain labels are matched. One top-level route accepts all alerts. From there, Alertmanager continues routing alerts to receivers based on whether they match the conditions of the next route."),(0,o.kt)("p",null,"While the Rancher UI forms only allow editing a routing tree that is two levels deep, you can configure more deeply nested routing structures by editing the Alertmanager Secret."),(0,o.kt)("h3",{id:"configuring-multiple-receivers"},"Configuring Multiple Receivers"),(0,o.kt)("p",null,"By editing the forms in the Rancher UI, you can set up a Receiver resource with all the information Alertmanager needs to send alerts to your notification system."),(0,o.kt)("p",null,"By editing custom YAML in the Alertmanager or Receiver configuration, you can also send alerts to multiple notification systems. For more information, see the section on configuring ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/monitoring-v2-configuration/receivers#configuring-multiple-receivers"},"Receivers.")),(0,o.kt)("h1",{id:"4-monitoring-v2-specific-components"},"4. Monitoring V2 Specific Components"),(0,o.kt)("p",null,"Prometheus Operator introduces a set of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator#customresourcedefinitions"},"Custom Resource Definitions")," that allow users to deploy and manage Prometheus and Alertmanager instances by creating and modifying those custom resources on a cluster."),(0,o.kt)("p",null,"Prometheus Operator will automatically update your Prometheus configuration based on the live state of the resources and configuration options that are edited in the Rancher UI."),(0,o.kt)("h3",{id:"resources-deployed-by-default"},"Resources Deployed by Default"),(0,o.kt)("p",null,"By default, a set of resources curated by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/kube-prometheus"},"kube-prometheus")," project are deployed onto your cluster as part of installing the Rancher Monitoring Application to set up a basic Monitoring/Alerting stack."),(0,o.kt)("p",null,"The resources that get deployed onto your cluster to support this solution can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/main/charts/rancher-monitoring"},(0,o.kt)("inlineCode",{parentName:"a"},"rancher-monitoring"))," Helm chart, which closely tracks the upstream ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"kube-prometheus-stack")," Helm chart maintained by the Prometheus community with certain changes tracked in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/blob/main/charts/rancher-monitoring/CHANGELOG.md"},"CHANGELOG.md"),"."),(0,o.kt)("h3",{id:"default-exporters"},"Default Exporters"),(0,o.kt)("p",null,"Monitoring V2 deploys three default exporters that provide additional metrics for Prometheus to store:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"node-exporter"),": exposes hardware and OS metrics for Linux hosts. For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"node-exporter"),", refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/guides/node-exporter/"},"upstream documentation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"windows-exporter"),": exposes hardware and OS metrics for Windows hosts (only deployed on Windows clusters). For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"windows-exporter"),", refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/windows_exporter"},"upstream documentation"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"kube-state-metrics"),": expose additional metrics that track the state of resources contained in the Kubernetes API (e.g., pods, workloads, etc.). For more information on ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-state-metrics"),", refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-state-metrics/tree/master/docs"},"upstream documentation"),"."))),(0,o.kt)("p",null,"ServiceMonitors and PodMonitors will scrape these exporters, as defined ",(0,o.kt)("a",{parentName:"p",href:"#defining-what-metrics-are-scraped"},"here"),". Prometheus stores these metrics, and you can query the results via either Prometheus's UI or Grafana."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"#1-architecture-overview"},"architecture")," section for more information on recording rules, alerting rules, and Alertmanager."),(0,o.kt)("h3",{id:"components-exposed-in-the-rancher-ui"},"Components Exposed in the Rancher UI"),(0,o.kt)("p",null,"When the monitoring application is installed, you will be able to edit the following components in the Rancher UI:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Type of Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose and Common Use Cases for Editing"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ServiceMonitor"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets up Kubernetes Services to scrape custom metrics from. Automatically updates the scrape configuration in the Prometheus custom resource.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PodMonitor"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Sets up Kubernetes Pods to scrape custom metrics from. Automatically updates the scrape configuration in the Prometheus custom resource.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Receiver"),(0,o.kt)("td",{parentName:"tr",align:null},"Configuration block (part of Alertmanager)"),(0,o.kt)("td",{parentName:"tr",align:null},"Modifies information on where to send an alert (e.g., Slack, PagerDuty, etc.) and any necessary information to send the alert (e.g., TLS certs, proxy URLs, etc.). Automatically updates the Alertmanager custom resource.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Route"),(0,o.kt)("td",{parentName:"tr",align:null},"Configuration block (part of Alertmanager)"),(0,o.kt)("td",{parentName:"tr",align:null},"Modifies the routing tree that is used to filter, label, and group alerts based on labels and send them to the appropriate Receiver. Automatically updates the Alertmanager custom resource.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PrometheusRule"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom resource"),(0,o.kt)("td",{parentName:"tr",align:null},"Defines additional queries that need to trigger alerts or define materialized views of existing series that are within Prometheus's TSDB.  Automatically updates the Prometheus custom resource.")))),(0,o.kt)("h3",{id:"pushprox"},"PushProx"),(0,o.kt)("p",null,"PushProx allows Prometheus to scrape metrics across a network boundary, which prevents users from having to expose metrics ports for internal Kubernetes components on each node in a Kubernetes cluster."),(0,o.kt)("p",null,"Since the metrics for Kubernetes components are generally exposed on the host network of nodes in the cluster, PushProx deploys a DaemonSet of clients that sit on the hostNetwork of each node and make an outbound connection to a single proxy that is sitting on the Kubernetes API. Prometheus can then be configured to proxy scrape requests through the proxy to each client, which allows it to scrape metrics from the internal Kubernetes components without requiring any inbound node ports to be open."),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"#scraping-metrics-with-pushprox"},"Scraping Metrics with PushProx")," for more."),(0,o.kt)("h1",{id:"5-scraping-and-exposing-metrics"},"5. Scraping and Exposing Metrics"),(0,o.kt)("h3",{id:"defining-what-metrics-are-scraped"},"Defining what Metrics are Scraped"),(0,o.kt)("p",null,"ServiceMonitors and PodMonitors define targets that are intended for Prometheus to scrape. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/design.md#prometheus"},"Prometheus custom resource")," tells Prometheus which ServiceMonitors or PodMonitors it should use to find out where to scrape metrics from."),(0,o.kt)("p",null,"The Prometheus Operator observes the ServiceMonitors and PodMonitors. When it observes that they are created or updated, it calls the Prometheus API to update the scrape configuration in the Prometheus custom resource and keep it in sync with the scrape configuration in the ServiceMonitors or PodMonitors. This scrape configuration tells Prometheus which endpoints to scrape metrics from and how it will label the metrics from those endpoints."),(0,o.kt)("p",null,"Prometheus scrapes all of the metrics defined in its scrape configuration at every ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape_interval"),", which is one minute by default."),(0,o.kt)("p",null,"The scrape configuration can be viewed as part of the Prometheus custom resource that is exposed in the Rancher UI."),(0,o.kt)("h3",{id:"how-the-prometheus-operator-sets-up-metrics-scraping"},"How the Prometheus Operator Sets up Metrics Scraping"),(0,o.kt)("p",null,"The Prometheus Deployment or StatefulSet scrapes metrics, and the configuration of Prometheus is controlled by the Prometheus custom resources. The Prometheus Operator watches for Prometheus and Alertmanager resources, and when they are created, the Prometheus Operator creates a Deployment or StatefulSet for Prometheus or Alertmanager with the user-defined configuration."),(0,o.kt)("p",null,"When the Prometheus Operator observes ServiceMonitors, PodMonitors, and PrometheusRules being created, it knows that the scrape configuration needs to be updated in Prometheus. It updates Prometheus by first updating the configuration and rules files in the volumes of Prometheus's Deployment or StatefulSet. Then it calls the Prometheus API to sync the new configuration, resulting in the Prometheus Deployment or StatefulSet to be modified in place."),(0,o.kt)("h3",{id:"how-kubernetes-component-metrics-are-exposed"},"How Kubernetes Component Metrics are Exposed"),(0,o.kt)("p",null,"Prometheus scrapes metrics from deployments known as ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/instrumenting/exporters/"},"exporters,")," which export the time series data in a format that Prometheus can ingest. In Prometheus, time series consist of streams of timestamped values belonging to the same metric and the same set of labeled dimensions."),(0,o.kt)("h3",{id:"scraping-metrics-with-pushprox"},"Scraping Metrics with PushProx"),(0,o.kt)("p",null,"Certain internal Kubernetes components are scraped via a proxy deployed as part of Monitoring V2 called PushProx. For detailed information on PushProx, refer ",(0,o.kt)("a",{parentName:"p",href:"#how-pushprox-works"},"here")," and to the above ",(0,o.kt)("a",{parentName:"p",href:"#1-architecture-overview"},"architecture")," section."),(0,o.kt)("h3",{id:"scraping-metrics"},"Scraping Metrics"),(0,o.kt)("p",null,"The following Kubernetes components are directly scraped by Prometheus:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"kubelet*"),(0,o.kt)("li",{parentName:"ul"},"ingress-nginx**"),(0,o.kt)("li",{parentName:"ul"},"coreDns/kubeDns"),(0,o.kt)("li",{parentName:"ul"},"kube-api-server")),(0,o.kt)("p",null,"*"," You can optionally use ",(0,o.kt)("inlineCode",{parentName:"p"},"hardenedKubelet.enabled")," to use a PushProx, but that is not the default."),(0,o.kt)("p",null,"** For RKE and RKE2 clusters, ingress-nginx is deployed by default and treated as an internal Kubernetes component."),(0,o.kt)("h3",{id:"scraping-metrics-based-on-kubernetes-distribution"},"Scraping Metrics Based on Kubernetes Distribution"),(0,o.kt)("p",null,"Metrics are scraped differently based on the Kubernetes distribution. For help with terminology, refer ",(0,o.kt)("a",{parentName:"p",href:"#terminology"},"here"),". For details, see the table below:"),(0,o.kt)("figcaption",null,"How Metrics are Exposed to Prometheus"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Kubernetes Component"),(0,o.kt)("th",{parentName:"tr",align:null},"RKE"),(0,o.kt)("th",{parentName:"tr",align:null},"RKE2"),(0,o.kt)("th",{parentName:"tr",align:null},"KubeADM"),(0,o.kt)("th",{parentName:"tr",align:null},"K3s"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-controller-manager"),(0,o.kt)("td",{parentName:"tr",align:null},"rkeControllerManager.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"rke2ControllerManager.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"kubeAdmControllerManager.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"k3sServer.enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-scheduler"),(0,o.kt)("td",{parentName:"tr",align:null},"rkeScheduler.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"rke2Scheduler.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"kubeAdmScheduler.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"k3sServer.enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"etcd"),(0,o.kt)("td",{parentName:"tr",align:null},"rkeEtcd.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"rke2Etcd.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"kubeAdmEtcd.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Not available")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"rkeProxy.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"rke2Proxy.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"kubeAdmProxy.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"k3sServer.enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kubelet"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kubelet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ingress-nginx*"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kubelet, exposed by rkeIngressNginx.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kubelet, Exposed by rke2IngressNginx.enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Not available"),(0,o.kt)("td",{parentName:"tr",align:null},"Not available")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"coreDns/kubeDns"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by coreDns/kubeDns"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by coreDns/kubeDns"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by coreDns/kubeDns"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by coreDns/kubeDns")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"kube-api-server"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kube-api-server"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kube-api-server"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kube-appi-server"),(0,o.kt)("td",{parentName:"tr",align:null},"Collects metrics directly exposed by kube-api-server")))),(0,o.kt)("p",null,"*"," For RKE and RKE2 clusters, ingress-nginx is deployed by default and treated as an internal Kubernetes component."),(0,o.kt)("h3",{id:"terminology"},"Terminology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-scheduler:")," The internal Kubernetes component that uses information in the pod spec to decide on which node to run a pod."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-controller-manager:")," The internal Kubernetes component that is responsible for node management (detecting if a node fails), pod replication and endpoint creation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"etcd:")," The internal Kubernetes component that is the distributed key/value store which Kubernetes uses for persistent storage of all cluster information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-proxy:")," The internal Kubernetes component that watches the API server for pods/services changes in order to maintain the network up to date."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kubelet:")," The internal Kubernetes component that watches the API server for pods on a node and makes sure they are running."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ingress-nginx:")," An Ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"coreDns/kubeDns:")," The internal Kubernetes component responsible for DNS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kube-api-server:")," The main internal Kubernetes component that is responsible for exposing APIs for the other master components.")))}h.isMDXComponent=!0},88049:function(e,t,r){t.Z=r.p+"assets/images/pushprox-process-55d88db60b9b3bc052a693a41774df74.svg"}}]);