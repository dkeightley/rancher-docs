"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13714],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),g=r,d=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99760:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u5185\u7f6e\u4eea\u8868\u677f"},s=void 0,m={unversionedId:"integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",id:"version-2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",title:"\u5185\u7f6e\u4eea\u8868\u677f",description:"Grafana UI",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards.md",sourceDirName:"integrations-in-rancher/monitoring-and-alerting",slug:"/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",permalink:"/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/monitoring-and-alerting/built-in-dashboards.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u5185\u7f6e\u4eea\u8868\u677f"},sidebar:"tutorialSidebar",previous:{title:"RBAC",permalink:"/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"},next:{title:"Monitoring V2 \u7684 Windows \u96c6\u7fa4\u652f\u6301",permalink:"/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/windows-support"}},p={},u=[{value:"Grafana UI",id:"grafana-ui",level:2},{value:"\u81ea\u5b9a\u4e49 Grafana",id:"\u81ea\u5b9a\u4e49-grafana",level:3},{value:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",id:"\u6301\u4e45\u5316-grafana-\u4eea\u8868\u677f",level:3},{value:"\u8bbf\u95ee Grafana",id:"\u8bbf\u95ee-grafana",level:3},{value:"Alertmanager UI",id:"alertmanager-ui",level:2},{value:"\u8bbf\u95ee Alertmanager UI",id:"\u8bbf\u95ee-alertmanager-ui",level:3},{value:"\u67e5\u770b\u9ed8\u8ba4\u544a\u8b66",id:"\u67e5\u770b\u9ed8\u8ba4\u544a\u8b66",level:3},{value:"Prometheus UI",id:"prometheus-ui",level:2},{value:"\u67e5\u770b Prometheus \u76ee\u6807",id:"\u67e5\u770b-prometheus-\u76ee\u6807",level:3},{value:"\u67e5\u770b PrometheusRules",id:"\u67e5\u770b-prometheusrules",level:3}],c={toc:u};function g(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"grafana-ui"},"Grafana UI"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/"},"Grafana")," \u5bf9\u5b58\u50a8\u5728\u5404\u4e2a\u5730\u65b9\u7684\u6307\u6807\u8fdb\u884c\u67e5\u8be2\u3001\u53ef\u89c6\u5316\u3001\u544a\u8b66\u548c\u4e86\u89e3\u3002\u4f60\u80fd\u4e0e\u4f60\u7684\u56e2\u961f\u521b\u5efa\u3001\u63a2\u7d22\u548c\u5171\u4eab\u4eea\u8868\u677f\uff0c\u5e76\u57f9\u517b\u6570\u636e\u9a71\u52a8\u7684\u6587\u5316\u3002"),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u53ef\u89c6\u5316\u7684\u9ed8\u8ba4\u4eea\u8868\u677f\uff0c\u8bf7\u8f6c\u5230 Grafana UI\u3002"),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49-grafana"},"\u81ea\u5b9a\u4e49 Grafana"),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u548c\u81ea\u5b9a\u4e49\u7528\u4e8e\u652f\u6301 Grafana \u4eea\u8868\u677f\u7684 PromQL \u67e5\u8be2\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u6301\u4e45\u5316-grafana-\u4eea\u8868\u677f"},"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f"),(0,i.kt)("p",null,"\u8981\u521b\u5efa\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("h3",{id:"\u8bbf\u95ee-grafana"},"\u8bbf\u95ee Grafana"),(0,i.kt)("p",null,"\u6709\u5173 Grafana \u7684 RBAC\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#grafana-%E7%9A%84-rbac"},"\u672c\u8282"),"\u3002"),(0,i.kt)("h2",{id:"alertmanager-ui"},"Alertmanager UI"),(0,i.kt)("p",null,"\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u540e\uff0c\u4f1a\u90e8\u7f72 Prometheus Alertmanager UI\uff0c\u4ece\u800c\u8ba9\u4f60\u67e5\u770b\u544a\u8b66\u4ee5\u53ca\u5f53\u524d\u7684 Alertmanager \u914d\u7f6e\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173 Alertmanager \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#alertmanager-%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"},"\u672c\u8282"),"\u3002"))),(0,i.kt)("h3",{id:"\u8bbf\u95ee-alertmanager-ui"},"\u8bbf\u95ee Alertmanager UI"),(0,i.kt)("p",null,"Alertmanager UI \u53ef\u8ba9\u4f60\u67e5\u770b\u6700\u8fd1\u89e6\u53d1\u7684\u544a\u8b66\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5fc5\u987b\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u5e94\u7528\u3002"))),(0,i.kt)("p",null,"\u8981\u67e5\u770b Alertmanager UI\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u67e5\u770b Alertmanager UI \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Alertmanager"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5728\u65b0\u9009\u9879\u5361\u4e2d\u6253\u5f00 Alertmanager UI\u3002\u5982\u9700\u914d\u7f6e\u5e2e\u52a9\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"\u5b98\u65b9 Alertmanager \u6587\u6863"),"\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5728 Rancher \u4e2d\u914d\u7f6e Alertmanager \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},"\u6b64\u9875\u9762"),"\u3002"),(0,i.kt)("figcaption",null,"Alertmanager UI"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Alertmanager UI",src:n(75729).Z,width:"2102",height:"930"})),(0,i.kt)("h3",{id:"\u67e5\u770b\u9ed8\u8ba4\u544a\u8b66"},"\u67e5\u770b\u9ed8\u8ba4\u544a\u8b66"),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u9ed8\u8ba4\u89e6\u53d1\u7684\u544a\u8b66\uff0c\u8bf7\u8f6c\u5230 Alertmanager UI \u5e76\u5355\u51fb",(0,i.kt)("strong",{parentName:"p"},"\u5c55\u5f00\u6240\u6709\u7ec4"),"\u3002"),(0,i.kt)("h2",{id:"prometheus-ui"},"Prometheus UI"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-state-metrics"},"kube-state-metrics service")," \u5411 monitoring \u5e94\u7528\u63d0\u4f9b CPU \u548c\u5185\u5b58\u5229\u7528\u7387\u7684\u5927\u91cf\u4fe1\u606f\u3002\u8fd9\u4e9b\u6307\u6807\u6db5\u76d6\u4e86\u8de8\u547d\u540d\u7a7a\u95f4\u7684 Kubernetes \u8d44\u6e90\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c\u4f60\u8981\u67e5\u770b\u670d\u52a1\u7684\u8d44\u6e90\u6307\u6807\uff0c\u4f60\u65e0\u9700\u4e3a\u5176\u521b\u5efa\u65b0\u7684 ServiceMonitor\u3002\u7531\u4e8e\u6570\u636e\u5df2\u7ecf\u5728\u65f6\u95f4\u5e8f\u5217\u6570\u636e\u5e93\u4e2d\uff0c\u4f60\u53ef\u4ee5\u8f6c\u5230 Prometheus UI \u5e76\u8fd0\u884c PromQL \u67e5\u8be2\u6765\u83b7\u53d6\u4fe1\u606f\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u67e5\u8be2\u6765\u914d\u7f6e Grafana \u4eea\u8868\u677f\uff0c\u4ece\u800c\u663e\u793a\u8fd9\u4e9b\u6307\u6807\u968f\u65f6\u95f4\u53d8\u5316\u7684\u56fe\u8868\u3002"),(0,i.kt)("p",null,"\u8981\u67e5\u770b Prometheus UI\uff0c\u8bf7\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"\u3002\u7136\u540e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u67e5\u770b Prometheus UI \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Prometheus Graph"),"\u3002")),(0,i.kt)("figcaption",null,"Prometheus Graph UI"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Prometheus Graph UI",src:n(54586).Z,width:"2240",height:"1060"})),(0,i.kt)("h3",{id:"\u67e5\u770b-prometheus-\u76ee\u6807"},"\u67e5\u770b Prometheus \u76ee\u6807"),(0,i.kt)("p",null,"\u8981\u67e5\u770b\u4f60\u6b63\u5728\u76d1\u63a7\u7684\u670d\u52a1\uff0c\u4f60\u9700\u8981\u67e5\u770b\u4f60\u7684\u76ee\u6807\u3002\u76ee\u6807\u662f\u7531 ServiceMonitor \u548c PodMonitor \u8bbe\u7f6e\u7684\uff0c\u6307\u7684\u662f\u6307\u6807\u6293\u53d6\u7684\u7684\u6e90\u3002\u4f60\u65e0\u9700\u76f4\u63a5\u7f16\u8f91\u76ee\u6807\uff0c\u4f46 Prometheus UI \u53ef\u4e3a\u4f60\u63d0\u4f9b\u6293\u53d6\u7684\u6240\u6709\u6307\u6807\u6765\u6e90\u7684\u6982\u89c8\u3002"),(0,i.kt)("p",null,"\u8981\u67e5\u770b Prometheus \u76ee\u6807\uff0c\u8bf7\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"\u3002\u7136\u540e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u67e5\u770b Prometheus \u76ee\u6807\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Prometheus \u76ee\u6807"),"\u3002")),(0,i.kt)("figcaption",null,"Prometheus UI \u4e2d\u7684\u76ee\u6807"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Prometheus \u76ee\u6807 UI",src:n(14600).Z,width:"2228",height:"1426"})),(0,i.kt)("h3",{id:"\u67e5\u770b-prometheusrules"},"\u67e5\u770b PrometheusRules"),(0,i.kt)("p",null,"\u5f53\u4f60\u5b9a\u4e49\u89c4\u5219\u65f6\uff08\u5728 PrometheusRule \u8d44\u6e90\u7684 RuleGroup \u4e2d\u58f0\u660e\uff09\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#rule"},"\u89c4\u5219\u672c\u8eab\u7684\u89c4\u8303"),"\u4f1a\u5305\u542b\u6807\u7b7e\uff0c\u7136\u540e Alertmanager \u4f1a\u4f7f\u7528\u8fd9\u4e9b\u6807\u7b7e\u6765\u786e\u5b9a\u63a5\u6536\u5bf9\u5e94\u544a\u8b66\u7684\u8def\u7531\u3002"),(0,i.kt)("p",null,"\u8981\u67e5\u770b PrometheusRule\uff0c\u8bf7\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"\u3002\u7136\u540e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728",(0,i.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u53ef\u89c6\u5316\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u76d1\u63a7"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Prometheus \u89c4\u5219"),"\u3002")),(0,i.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5728 Prometheus UI \u4e2d\u67e5\u770b\u89c4\u5219\uff1a"),(0,i.kt)("figcaption",null,"Prometheus UI \u4e2d\u7684\u89c4\u5219"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PrometheusRules UI",src:n(96232).Z,width:"2212",height:"1488"})),(0,i.kt)("p",null,"\u6709\u5173\u5728 Rancher \u4e2d\u914d\u7f6e PrometheusRule \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"},"\u6b64\u9875\u9762"),"\u3002"))}g.isMDXComponent=!0},75729:function(e,t,n){t.Z=n.p+"assets/images/alertmanager-ui-89d0ac64bf76e827dcaedc22cc78c670.png"},54586:function(e,t,n){t.Z=n.p+"assets/images/prometheus-graph-ui-a0b6b6fe31625c199d4c896002972f23.png"},96232:function(e,t,n){t.Z=n.p+"assets/images/prometheus-rules-ui-7f0740aeee34fa07335e62d5569542cf.png"},14600:function(e,t,n){t.Z=n.p+"assets/images/prometheus-targets-ui-fc1b78f126988b768dbc914035b558a3.png"}}]);