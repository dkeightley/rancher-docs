"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[89961],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(87462),a=r(67294),o=r(86010),i=r(72389),l=r(67392),u=r(7094),s=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,i=e.lazy,d=e.block,m=e.defaultValue,h=e.values,g=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.l)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),w=y.tabGroupChoices,P=y.setTabGroupChoices,R=(0,a.useState)(N),x=R[0],T=R[1],C=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var A=w[g];null!=A&&A!==x&&b.some((function(e){return e.value===A}))&&T(A)}var E=function(e){var t=e.currentTarget,r=C.indexOf(t),n=b[r].value;n!==x&&(O(t),T(n),null!=g&&P(g,String(n)))},L=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=C.indexOf(e.currentTarget)+1;r=null!=(n=C[a])?n:C[0];break;case"ArrowLeft":var o,i=C.indexOf(e.currentTarget)-1;r=null!=(o=C[i])?o:C[C.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return C.push(e)},onKeyDown:L,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,i.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},13629:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=r(65488),l=r(85162),u=["components"],s={title:"Configuring PrometheusRules"},c=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",title:"Configuring PrometheusRules",description:"A PrometheusRule defines a group of Prometheus alerting and/or recording rules.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"2022/10/29",frontMatter:{title:"Configuring PrometheusRules"},sidebar:"tutorialSidebar",previous:{title:"Prometheus Configuration",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"},next:{title:"Setup Guide",permalink:"/zh/v2.5/pages-for-subheaders/istio-setup-guide"}},d={},m=[{value:"Creating PrometheusRules in the Rancher UI",id:"creating-prometheusrules-in-the-rancher-ui",level:2},{value:"About the PrometheusRule Custom Resource",id:"about-the-prometheusrule-custom-resource",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Rule Group",id:"rule-group",level:3},{value:"Alerting Rules",id:"alerting-rules",level:3},{value:"Recording Rules",id:"recording-rules",level:3}],h={toc:m};function g(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A PrometheusRule defines a group of Prometheus alerting and/or recording rules."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This section assumes familiarity with how monitoring components work together. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this section."))),(0,o.kt)("h2",{id:"creating-prometheusrules-in-the-rancher-ui"},"Creating PrometheusRules in the Rancher UI"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v2.5.4")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," The monitoring application needs to be installed.")),(0,o.kt)("p",null,"To create rule groups in the Rancher UI,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Cluster Explorer > Monitoring > Advanced")," and click ",(0,o.kt)("strong",{parentName:"li"},"Prometheus Rules.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create.")),(0,o.kt)("li",{parentName:"ol"},"Enter a ",(0,o.kt)("strong",{parentName:"li"},"Group Name.")),(0,o.kt)("li",{parentName:"ol"},"Configure the rules. In Rancher's UI, we expect a rule group to contain either alert rules or recording rules, but not both. For help filling out the forms, refer to the configuration options below."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Alerts can be configured to send notifications to the receiver(s)."),(0,o.kt)("h2",{id:"about-the-prometheusrule-custom-resource"},"About the PrometheusRule Custom Resource"),(0,o.kt)("p",null,"When you define a Rule (which is declared within a RuleGroup in a PrometheusRule resource), the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#rule"},"spec of the Rule itself")," contains labels that are used by Alertmanager to figure out which Route should receive this Alert. For example, an Alert with the label ",(0,o.kt)("inlineCode",{parentName:"p"},"team: front-end")," will be sent to all Routes that match on that label."),(0,o.kt)("p",null,"Prometheus rule files are held in PrometheusRule custom resources. A PrometheusRule allows you to define one or more RuleGroups. Each RuleGroup consists of a set of Rule objects that can each represent either an alerting or a recording rule with the following fields:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The name of the new alert or record"),(0,o.kt)("li",{parentName:"ul"},"A PromQL expression for the new alert or record"),(0,o.kt)("li",{parentName:"ul"},"Labels that should be attached to the alert or record that identify it (e.g. cluster name or severity)"),(0,o.kt)("li",{parentName:"ul"},"Annotations that encode any additional important pieces of information that need to be displayed on the notification for an alert (e.g. summary, description, message, runbook URL, etc.). This field is not required for recording rules.")),(0,o.kt)("p",null,"For more information on what fields can be specified, please look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#prometheusrulespec"},"Prometheus Operator spec.")),(0,o.kt)("p",null,"Use the label selector field ",(0,o.kt)("inlineCode",{parentName:"p"},"ruleSelector")," in the Prometheus object to define the rule files that you want to be mounted into Prometheus."),(0,o.kt)("p",null,"For examples, refer to the Prometheus documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"},"recording rules")," and ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"alerting rules.")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Rancher v2.5.4",mdxType:"TabItem"},(0,o.kt)("p",null,"Rancher v2.5.4 introduced the capability to configure PrometheusRules by filling out forms in the Rancher UI."),(0,o.kt)("h3",{id:"rule-group"},"Rule Group"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Group Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the group. Must be unique within a rules file.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Override Group Interval"),(0,o.kt)("td",{parentName:"tr",align:null},"Duration in seconds for how often rules in the group are evaluated.")))),(0,o.kt)("h3",{id:"alerting-rules"},"Alerting Rules"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"Alerting rules")," allow you to define alert conditions based on PromQL (Prometheus Query Language) expressions and to send notifications about firing alerts to an external service."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Alert Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the alert. Must be a valid label value.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Wait To Fire For"),(0,o.kt)("td",{parentName:"tr",align:null},"Duration in seconds. Alerts are considered firing once they have been returned for this long. Alerts which have not yet fired for long enough are considered pending.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PromQL Expression"),(0,o.kt)("td",{parentName:"tr",align:null},"The PromQL expression to evaluate. Prometheus will evaluate the current value of this PromQL expression on every evaluation cycle and all resultant time series will become pending/firing alerts. For more information, refer to the ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"Prometheus documentation")," or our ",(0,o.kt)("a",{parentName:"td",href:"/zh/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},"example PromQL expressions."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"Labels to add or overwrite for each alert.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Severity"),(0,o.kt)("td",{parentName:"tr",align:null},"When enabled, labels are attached to the alert or record that identify it by the severity level.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Severity Label Value"),(0,o.kt)("td",{parentName:"tr",align:null},"Critical, warning, or none")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Annotations"),(0,o.kt)("td",{parentName:"tr",align:null},"Annotations are a set of informational labels that can be used to store longer additional information, such as alert descriptions or runbook links. A ",(0,o.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Runbook"},"runbook")," is a set of documentation about how to handle alerts. The annotation values can be ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/#templating"},"templated."))))),(0,o.kt)("h3",{id:"recording-rules"},"Recording Rules"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#recording-rules"},"Recording rules")," allow you to precompute frequently needed or computationally expensive PromQL (Prometheus Query Language) expressions and save their result as a new set of time series."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Time Series Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the time series to output to. Must be a valid metric name.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PromQL Expression"),(0,o.kt)("td",{parentName:"tr",align:null},"The PromQL expression to evaluate. Prometheus will evaluate the current value of this PromQL expression on every evaluation cycle and the result will be recorded as a new set of time series with the metric name as given by 'record'.  For more information about expressions, refer to the ",(0,o.kt)("a",{parentName:"td",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/"},"Prometheus documentation")," or our ",(0,o.kt)("a",{parentName:"td",href:"/zh/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/promql-expressions"},"example PromQL expressions."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Labels"),(0,o.kt)("td",{parentName:"tr",align:null},"Labels to add or overwrite before storing the result."))))),(0,o.kt)(l.Z,{value:"Rancher v2.5.0-v2.5.3",mdxType:"TabItem"},(0,o.kt)("p",null,"For Rancher v2.5.0-v2.5.3, PrometheusRules must be configured in YAML. For examples, refer to the Prometheus documentation on ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"},"recording rules")," and ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"},"alerting rules.")))))}g.isMDXComponent=!0}}]);