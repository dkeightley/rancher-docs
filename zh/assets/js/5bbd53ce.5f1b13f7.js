"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36322],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(r),d=a,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},78516:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"\u542f\u7528 Prometheus Federator"},l=void 0,m={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",id:"version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",title:"\u542f\u7528 Prometheus Federator",description:"\u8981\u6c42",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/enable-prometheus-federator.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u542f\u7528 Prometheus Federator"},sidebar:"tutorialSidebar",previous:{title:"Prometheus Federator \u6307\u5357",permalink:"/zh/v2.6/pages-for-subheaders/prometheus-federator-guides"},next:{title:"\u5378\u8f7d Prometheus Federator",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/prometheus-federator-guides/uninstall-prometheus-federator"}},p={},u=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u786e\u4fdd cattle-monitoring-system \u547d\u540d\u7a7a\u95f4\u4f4d\u4e8e System \u9879\u76ee\u4e2d\uff08\u6216\u8005\u4f4d\u4e8e\u4e00\u4e2a\u9501\u5b9a\u5e76\u80fd\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u5176\u4ed6\u9879\u76ee\u7684\u9879\u76ee\u4e2d\uff09",id:"\u786e\u4fdd-cattle-monitoring-system-\u547d\u540d\u7a7a\u95f4\u4f4d\u4e8e-system-\u9879\u76ee\u4e2d\u6216\u8005\u4f4d\u4e8e\u4e00\u4e2a\u9501\u5b9a\u5e76\u80fd\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u5176\u4ed6\u9879\u76ee\u7684\u9879\u76ee\u4e2d",level:3},{value:"\u5c06 rancher-monitoring \u914d\u7f6e\u4e3a\u4ec5\u76d1\u89c6 Helm Chart \u521b\u5efa\u7684\u8d44\u6e90",id:"\u5c06-rancher-monitoring-\u914d\u7f6e\u4e3a\u4ec5\u76d1\u89c6-helm-chart-\u521b\u5efa\u7684\u8d44\u6e90",level:3},{value:"\u63d0\u9ad8 Cluster Prometheus \u7684 CPU/\u5185\u5b58\u9650\u5236",id:"\u63d0\u9ad8-cluster-prometheus-\u7684-cpu\u5185\u5b58\u9650\u5236",level:3},{value:"\u5b89\u88c5 Prometheus Federator \u5e94\u7528\u7a0b\u5e8f",id:"\u5b89\u88c5-prometheus-federator-\u5e94\u7528\u7a0b\u5e8f",level:2}],c={toc:u};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cPrometheus Federator \u5df2\u914d\u7f6e\u5e76\u65e8\u5728\u4e0e ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/monitoring-alerting/"},"rancher-monitoring")," \u4e00\u8d77\u90e8\u7f72\u3002rancher-monitoring \u540c\u65f6\u90e8\u7f72\u4e86 Prometheus Operator \u548c Cluster Prometheus\uff0c\u6bcf\u4e2a\u9879\u76ee\u76d1\u63a7\u5806\u6808\uff08Project Monitoring Stack\uff09\u9ed8\u8ba4\u4f1a\u8054\u5408\u547d\u540d\u7a7a\u95f4\u8303\u56f4\u7684\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u5b89\u88c5 rancher-monitoring \u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u4e0e\u4f60\u7684 rancher-monitoring \u5806\u6808\u662f\u517c\u5bb9\u7684\u3002\u4f46\u662f\uff0c\u4e3a\u4e86\u63d0\u9ad8\u96c6\u7fa4\u4e2d Prometheus Federator \u7684\u5b89\u5168\u6027\u548c\u53ef\u7528\u6027\uff0c\u6211\u4eec\u5efa\u8bae\u5bf9 rancher-monitoring \u8fdb\u884c\u4ee5\u4e0b\u989d\u5916\u7684\u914d\u7f6e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E7%A1%AE%E4%BF%9D-cattle-monitoring-system-%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E4%BD%8D%E4%BA%8E-system-%E9%A1%B9%E7%9B%AE%E4%B8%AD%EF%BC%88%E6%88%96%E8%80%85%E4%BD%8D%E4%BA%8E%E4%B8%80%E4%B8%AA%E9%94%81%E5%AE%9A%E5%B9%B6%E8%83%BD%E8%AE%BF%E9%97%AE%E9%9B%86%E7%BE%A4%E4%B8%AD%E5%85%B6%E4%BB%96%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%A1%B9%E7%9B%AE%E4%B8%AD%EF%BC%89"},"\u786e\u4fdd cattle-monitoring-system \u547d\u540d\u7a7a\u95f4\u4f4d\u4e8e System \u9879\u76ee\u4e2d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E5%B0%86-rancher-monitoring-%E9%85%8D%E7%BD%AE%E4%B8%BA%E4%BB%85%E7%9B%91%E8%A7%86-helm-chart-%E5%88%9B%E5%BB%BA%E7%9A%84%E8%B5%84%E6%BA%90"},"\u5c06 rancher-monitoring \u914d\u7f6e\u4e3a\u4ec5\u76d1\u89c6 Helm Chart \u521b\u5efa\u7684\u8d44\u6e90")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E6%8F%90%E9%AB%98-cluster-prometheus-%E7%9A%84-cpu/%E5%86%85%E5%AD%98%E9%99%90%E5%88%B6"},"\u63d0\u9ad8 Cluster Prometheus \u7684 CPU/\u5185\u5b58\u9650\u5236"))),(0,o.kt)("h3",{id:"\u786e\u4fdd-cattle-monitoring-system-\u547d\u540d\u7a7a\u95f4\u4f4d\u4e8e-system-\u9879\u76ee\u4e2d\u6216\u8005\u4f4d\u4e8e\u4e00\u4e2a\u9501\u5b9a\u5e76\u80fd\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u5176\u4ed6\u9879\u76ee\u7684\u9879\u76ee\u4e2d"},"\u786e\u4fdd cattle-monitoring-system \u547d\u540d\u7a7a\u95f4\u4f4d\u4e8e System \u9879\u76ee\u4e2d\uff08\u6216\u8005\u4f4d\u4e8e\u4e00\u4e2a\u9501\u5b9a\u5e76\u80fd\u8bbf\u95ee\u96c6\u7fa4\u4e2d\u5176\u4ed6\u9879\u76ee\u7684\u9879\u76ee\u4e2d\uff09"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"\u9009\u62e9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4",src:r(96912).Z,width:"1118",height:"402"})),(0,o.kt)("p",null,"Prometheus Operator \u7684\u5b89\u5168\u6a21\u578b\u6709\u4e00\u5b9a\u7684\u8981\u6c42\uff0c\u5373\u5e0c\u671b\u90e8\u7f72\u5b83\u7684\u547d\u540d\u7a7a\u95f4\uff08\u4f8b\u5982\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system"),"\uff09\u5bf9\u9664\u96c6\u7fa4\u7ba1\u7406\u5458\u4e4b\u5916\u7684\u4efb\u4f55\u7528\u6237\u90fd\u53ea\u6709\u6709\u9650\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u4ece\u800c\u907f\u514d\u901a\u8fc7 Pod \u5185\u6267\u884c\uff08\u4f8b\u5982\u6b63\u5728\u6267\u884c\u7684 Helm \u64cd\u4f5c\u7684 Job\uff09\u6765\u63d0\u5347\u6743\u9650\u3002\u6b64\u5916\uff0c\u5982\u679c\u5c06 Prometheus Federator \u548c\u6240\u6709 Project Prometheus \u5806\u6808\u90fd\u90e8\u7f72\u5230 System \u9879\u76ee\u4e2d\uff0c\u5373\u4f7f\u7f51\u7edc\u7b56\u7565\u662f\u901a\u8fc7\u9879\u76ee\u7f51\u7edc\u9694\u79bb\u5b9a\u4e49\u7684\uff0c\u6bcf\u4e2a Project Prometheus \u90fd\u4f9d\u7136\u80fd\u591f\u5728\u6240\u6709\u9879\u76ee\u4e2d\u6293\u53d6\u5de5\u4f5c\u8d1f\u8f7d\u3002\u5b83\u8fd8\u4e3a\u9879\u76ee\u6240\u6709\u8005\u3001\u9879\u76ee\u6210\u5458\u548c\u5176\u4ed6\u7528\u6237\u63d0\u4f9b\u6709\u9650\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u4ece\u800c\u786e\u4fdd\u8fd9\u4e9b\u7528\u6237\u65e0\u6cd5\u8bbf\u95ee\u4ed6\u4eec\u4e0d\u5e94\u8bbf\u95ee\u7684\u6570\u636e\uff08\u4f8b\u5982\uff0c\u5728 pod \u4e2d\u6267\u884c\uff0c\u5728\u9879\u76ee\u5916\u90e8\u6293\u53d6\u547d\u540d\u7a7a\u95f4\u6570\u636e\u7b49\uff09\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," \u9879\u76ee\u4ee5\u68c0\u67e5\u4f60\u7684\u547d\u540d\u7a7a\u95f4\uff1a"),(0,o.kt)("p",{parentName:"li"},"\u5728 Rancher UI \u4e2d\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Cluster > Projects/Namespaces"),"\u3002\u8fd9\u5c06\u663e\u793a ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," \u9879\u76ee\u4e2d\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\uff1a"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"\u9009\u62e9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4",src:r(56814).Z,width:"894",height:"693"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5982\u679c\u4f60\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86\u4e00\u4e2a Monitoring V2\uff0c\u4f46\u8be5\u547d\u540d\u7a7a\u95f4\u4e0d\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," \u9879\u76ee\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle- monitoring-system")," \u547d\u540d\u7a7a\u95f4\u79fb\u52a8\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," \u9879\u76ee\u6216\u53e6\u4e00\u4e2a\u8bbf\u95ee\u53d7\u9650\u7684\u9879\u76ee\u4e2d\u3002\u4e3a\u6b64\uff0c\u4f60\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u5c06\u547d\u540d\u7a7a\u95f4\u62d6\u653e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"System")," \u9879\u76ee\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u9009\u62e9\u547d\u540d\u7a7a\u95f4\u53f3\u4fa7\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u22ee"),"\uff0c\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Move"),"\uff0c\u7136\u540e\u4ece ",(0,o.kt)("strong",{parentName:"p"},"Target Project")," \u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"System"),"\uff1a"),(0,o.kt)("p",{parentName:"li"}," ",(0,o.kt)("img",{alt:"\u79fb\u81f3\u65b0\u9879\u76ee",src:r(81643).Z,width:"484",height:"347"})))))),(0,o.kt)("h3",{id:"\u5c06-rancher-monitoring-\u914d\u7f6e\u4e3a\u4ec5\u76d1\u89c6-helm-chart-\u521b\u5efa\u7684\u8d44\u6e90"},"\u5c06 rancher-monitoring \u914d\u7f6e\u4e3a\u4ec5\u76d1\u89c6 Helm Chart \u521b\u5efa\u7684\u8d44\u6e90"),(0,o.kt)("p",null,"\u6bcf\u4e2a\u9879\u76ee\u76d1\u63a7\u5806\u6808\u90fd\u4f1a\u76d1\u89c6\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u5e76\u6536\u96c6\u5176\u4ed6\u81ea\u5b9a\u4e49\u5de5\u4f5c\u8d1f\u8f7d\u6307\u6807\u6216\u4eea\u8868\u677f\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u6240\u6709\u9009\u62e9\u5668\u4e0a\u914d\u7f6e\u4ee5\u4e0b\u8bbe\u7f6e\uff0c\u4ee5\u786e\u4fdd Cluster Prometheus \u5806\u6808\u4ec5\u76d1\u63a7\u7531 Helm Chart \u521b\u5efa\u7684\u8d44\u6e90\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'matchLabels:\n  release: "rancher-monitoring"\n')),(0,o.kt)("p",null,"\u5efa\u8bae\u4e3a\u4ee5\u4e0b\u9009\u62e9\u5668\u5b57\u6bb5\u8d4b\u4e88\u6b64\u503c\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".Values.alertmanager.alertmanagerSpec.alertmanagerConfigSelector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.serviceMonitorSelector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.podMonitorSelector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.ruleSelector")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".Values.prometheus.prometheusSpec.probeSelector"))),(0,o.kt)("p",null,"\u542f\u7528\u6b64\u8bbe\u7f6e\u540e\uff0c\u4f60\u59cb\u7ec8\u53ef\u4ee5\u901a\u8fc7\u5411\u5b83\u4eec\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},'release: "rancher-monitoring"')," \u6807\u7b7e\u6765\u521b\u5efa\u7531 Cluster Prometheus \u6293\u53d6\u7684 ServiceMonitor \u6216 PodMonitor\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5373\u4f7f\u8fd9\u4e9b ServiceMonitor \u6216 PodMonitor \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4\u4e0d\u662f System \u547d\u540d\u7a7a\u95f4\uff0c\u9879\u76ee\u76d1\u63a7\u5806\u6808\u4e5f\u4f1a\u9ed8\u8ba4\u81ea\u52a8\u5ffd\u7565\u5b83\u4eec\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u7528\u6237\u80fd\u591f\u5728 Project \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u805a\u5408\u5230 Cluster Prometheus \u4e2d\u7684 ServiceMonitor \u548c PodMonitor\uff0c\u4f60\u53ef\u4ee5\u53e6\u5916\u5c06 Chart \u4e0a\u7684 namespaceSelectors \u8bbe\u7f6e\u4e3a\u4ec5\u76ee\u6807 System \u547d\u540d\u7a7a\u95f4\uff08\u5fc5\u987b\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u8d44\u6e90\u901a\u8fc7 rancher-monitoring \u90e8\u7f72\u5230\u8be5\u547d\u540d\u7a7a\u95f4\u4e2d\u3002\u4f60\u8fd8\u9700\u8981\u76d1\u63a7 ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u4ee5\u83b7\u53d6 apiserver \u6307\u6807\uff0c\u6216\u521b\u5efa\u81ea\u5b9a\u4e49 ServiceMonitor \u4ee5\u6293\u53d6\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 Service \u7684 apiserver \u6307\u6807\uff09\uff0c\u4ece\u800c\u9650\u5236\u4f60\u7684 Cluster Prometheus \u83b7\u53d6\u5176\u4ed6 Prometheus Operator CR\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},".Values.prometheus.prometheusSpec.ignoreNamespaceSelectors=true"),"\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u80fd\u4ece System \u547d\u540d\u7a7a\u95f4\u4e2d\u76d1\u89c6\u975e System \u547d\u540d\u7a7a\u95f4\u7684 ServiceMonitor\u3002"))),(0,o.kt)("h3",{id:"\u63d0\u9ad8-cluster-prometheus-\u7684-cpu\u5185\u5b58\u9650\u5236"},"\u63d0\u9ad8 Cluster Prometheus \u7684 CPU/\u5185\u5b58\u9650\u5236"),(0,o.kt)("p",null,"\u6839\u636e\u96c6\u7fa4\u7684\u8bbe\u7f6e\uff0c\u6211\u4eec\u4e00\u822c\u5efa\u8bae\u4e3a Cluster Prometheus \u914d\u7f6e\u5927\u91cf\u7684\u4e13\u7528\u5185\u5b58\uff0c\u4ee5\u907f\u514d\u56e0\u5185\u5b58\u4e0d\u8db3\u7684\u9519\u8bef\uff08OOMKilled\uff09\u800c\u91cd\u542f\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u96c6\u7fa4\u4e2d\u521b\u5efa\u7684\u6539\u52a8\u9879\uff08churn\uff09\u4f1a\u5bfc\u81f4\u5927\u91cf\u9ad8\u57fa\u6570\u6307\u6807\u5728\u4e00\u4e2a\u65f6\u95f4\u5757\u5185\u751f\u6210\u5e76\u88ab Prometheus \u5f15\u5165\uff0c\u7136\u540e\u5bfc\u81f4\u8fd9\u4e9b\u9519\u8bef\u3002\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u9ed8\u8ba4\u7684 Rancher Monitoring \u5806\u6808\u5e0c\u671b\u80fd\u5206\u914d\u5230\u5927\u7ea6 4GB \u7684 RAM \u4ee5\u5728\u6b63\u5e38\u5927\u5c0f\u7684\u96c6\u7fa4\u4e2d\u8fd0\u884c\u7684\u539f\u56e0\u4e4b\u4e00\u3002\u4f46\u662f\uff0c\u5982\u679c\u4f60\u5f15\u5165\u5411\u540c\u4e00\u4e2a Cluster Prometheus \u53d1\u9001 ",(0,o.kt)("inlineCode",{parentName:"p"},"/federate")," \u8bf7\u6c42\u7684\u9879\u76ee\u76d1\u63a7\u5806\u6808\uff0c\u5e76\u4e14\u9879\u76ee\u76d1\u63a7\u5806\u6808\u4f9d\u8d56\u4e8e Cluster Prometheus \u7684\u542f\u52a8\u72b6\u6001\u6765\u5728\u5176\u547d\u540d\u7a7a\u95f4\u4e0a\u8054\u5408\u7cfb\u7edf\u6570\u636e\uff0c\u90a3\u4e48\u4f60\u66f4\u52a0\u9700\u8981\u4e3a Cluster Prometheus \u5206\u914d\u8db3\u591f\u7684 CPU/\u5185\u5b58\uff0c\u4ee5\u9632\u6b62\u96c6\u7fa4\u4e2d\u7684\u6240\u6709 Prometheus \u9879\u76ee\u51fa\u73b0\u6570\u636e\u95f4\u9699\u7684\u4e2d\u65ad\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6211\u4eec\u6ca1\u6709 Cluster Prometheus \u5185\u5b58\u914d\u7f6e\u7684\u5177\u4f53\u5efa\u8bae\uff0c\u56e0\u4e3a\u8fd9\u5b8c\u5168\u53d6\u51b3\u4e8e\u7528\u6237\u7684\u8bbe\u7f6e\uff08\u5373\u9047\u5230\u9ad8\u6539\u52a8\u7387\u7684\u53ef\u80fd\u6027\u4ee5\u53ca\u53ef\u80fd\u540c\u65f6\u751f\u6210\u7684\u6307\u6807\u7684\u89c4\u6a21\uff09\u3002\u4e0d\u540c\u7684\u8bbe\u7f6e\u901a\u5e38\u6709\u4e0d\u540c\u7684\u63a8\u8350\u53c2\u6570\u3002"))),(0,o.kt)("h2",{id:"\u5b89\u88c5-prometheus-federator-\u5e94\u7528\u7a0b\u5e8f"},"\u5b89\u88c5 Prometheus Federator \u5e94\u7528\u7a0b\u5e8f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5b89\u88c5 Prometheus Federator \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5e94\u7528 > Charts"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Prometheus Federator")," Chart\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u5143\u6570\u636e"),"\u9875\u9762\uff0c\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u4e0b\u4e00\u6b65"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u9879\u76ee Release \u547d\u540d\u7a7a\u95f4\u9879\u76ee ID")," \u5b57\u6bb5\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"System \u9879\u76ee"),"\u662f\u9ed8\u8ba4\u503c\uff0c\u4f46\u4f60\u53ef\u4ee5\u4f7f\u7528\u5177\u6709\u7c7b\u4f3c",(0,o.kt)("a",{parentName:"li",href:"#%E7%A1%AE%E4%BF%9D-cattle-monitoring-system-%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4%E4%BD%8D%E4%BA%8E-system-%E9%A1%B9%E7%9B%AE%E4%B8%AD%EF%BC%88%E6%88%96%E8%80%85%E4%BD%8D%E4%BA%8E%E4%B8%80%E4%B8%AA%E9%94%81%E5%AE%9A%E5%B9%B6%E8%83%BD%E8%AE%BF%E9%97%AE%E9%9B%86%E7%BE%A4%E4%B8%AD%E5%85%B6%E4%BB%96%E9%A1%B9%E7%9B%AE%E7%9A%84%E9%A1%B9%E7%9B%AE%E4%B8%AD%EF%BC%89"},"\u6709\u9650\u8bbf\u95ee\u6743\u9650"),"\u7684\u53e6\u4e00\u4e2a\u9879\u76ee\u8986\u76d6\u5b83\u3002\x3c!-- add info on retrieving project IDs >"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aPrometheus Federator \u5e94\u7528\u7a0b\u5e8f\u5df2\u90e8\u7f72\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002"))}d.isMDXComponent=!0},56814:function(e,t,r){t.Z=r.p+"assets/images/cattle-monitoring-system-8e4a3ee096b3865e2d8878fd7f7f1eab.png"},96912:function(e,t,r){t.Z=r.p+"assets/images/install-in-system-project-835e5a71298c8874a2011604b5d28618.png"},81643:function(e,t,r){t.Z=r.p+"assets/images/move-to-new-project-c7bc87d42c5189c2cccb2e25960da44e.png"}}]);