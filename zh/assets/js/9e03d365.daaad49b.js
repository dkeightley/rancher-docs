"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(c,".").concat(m)]||d[m]||i[m]||o;return r?n.createElement(g,p(p({ref:t},l),{},{components:r})):n.createElement(g,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,p[1]=u;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>i,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"Rancher \u9879\u76ee\u4e2d\u8d44\u6e90\u914d\u989d\u7684\u5de5\u4f5c\u539f\u7406"},p=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",id:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",title:"Rancher \u9879\u76ee\u4e2d\u8d44\u6e90\u914d\u989d\u7684\u5de5\u4f5c\u539f\u7406",description:"Rancher \u4e2d\u7684\u8d44\u6e90\u914d\u989d\u5305\u542b\u4e0e Kubernetes \u539f\u751f\u7248\u672c\u76f8\u540c\u7684\u529f\u80fd\u3002Rancher \u8fd8\u6269\u5c55\u4e86\u8d44\u6e90\u914d\u989d\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u5c06\u8d44\u6e90\u914d\u989d\u5e94\u7528\u4e8e\u9879\u76ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/about-project-resource-quotas.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"Rancher \u9879\u76ee\u4e2d\u8d44\u6e90\u914d\u989d\u7684\u5de5\u4f5c\u539f\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee\u8d44\u6e90\u914d\u989d",permalink:"/zh/pages-for-subheaders/manage-project-resource-quotas"},next:{title:"\u8986\u76d6\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"}},c={},s=[],l={toc:s};function i(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rancher \u4e2d\u7684\u8d44\u6e90\u914d\u989d\u5305\u542b\u4e0e ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/"},"Kubernetes \u539f\u751f\u7248\u672c"),"\u76f8\u540c\u7684\u529f\u80fd\u3002Rancher \u8fd8\u6269\u5c55\u4e86\u8d44\u6e90\u914d\u989d\u7684\u529f\u80fd\uff0c\u8ba9\u4f60\u5c06\u8d44\u6e90\u914d\u989d\u5e94\u7528\u4e8e\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u5728\u6807\u51c6 Kubernetes deployment \u4e2d\uff0c\u8d44\u6e90\u914d\u989d\u4f1a\u5e94\u7528\u4e8e\u5404\u4e2a\u547d\u540d\u7a7a\u95f4\u3002\u4f46\u662f\uff0c\u4f60\u4e0d\u80fd\u901a\u8fc7\u5355\u6b21\u64cd\u4f5c\u5c06\u914d\u989d\u5e94\u7528\u5230\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\uff0c\u800c\u5fc5\u987b\u591a\u6b21\u5e94\u7528\u8d44\u6e90\u914d\u989d\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0cKubernetes \u7ba1\u7406\u5458\u8bd5\u56fe\u5728\u6ca1\u6709 Rancher \u7684\u60c5\u51b5\u4e0b\u5f3a\u5236\u6267\u884c\u8d44\u6e90\u914d\u989d\u3002\u7ba1\u7406\u5458\u60f3\u8981\u4f7f\u7528\u4e00\u4e2a\u8d44\u6e90\u914d\u989d\u6765\u4e3a\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u914d\u7f6e\u7edf\u4e00\u7684 CPU \u548c\u5185\u5b58\u9650\u5236 (",(0,a.kt)("inlineCode",{parentName:"p"},"Namespace 1-4"),")\u3002\u4f46\u662f\uff0c\u5728 Kubernetes \u7684\u57fa\u7840\u7248\u672c\u4e2d\uff0c\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u90fd\u9700\u8981\u5355\u72ec\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\u3002\u56e0\u6b64\uff0c\u7ba1\u7406\u5458\u5fc5\u987b\u521b\u5efa\u56db\u4e2a\u914d\u7f6e\u76f8\u540c\u89c4\u683c\u7684\u4e0d\u540c\u8d44\u6e90\u914d\u989d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"Resource Quota 1-4"),"\uff09\u5e76\u5355\u72ec\u5e94\u7528\u8fd9\u4e9b\u914d\u989d\u3002"),(0,a.kt)("sup",null,"Kubernetes \u57fa\u7840\u7248\u672c\uff1a\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u90fd\u9700\u8981\u72ec\u7acb\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u539f\u751f Kubernetes \u8d44\u6e90\u914d\u989d\u5b9e\u73b0",src:r(58914).Z,width:"1281",height:"632"})),(0,a.kt)("p",null,"\u548c\u539f\u751f Kubernetes \u76f8\u6bd4\uff0cRancher \u7684\u8d44\u6e90\u914d\u989d\u6709\u4e0d\u540c\u3002\u5728 Rancher \u4e2d\uff0c\u4f60\u53ef\u4ee5\u628a\u8d44\u6e90\u914d\u989d\u5e94\u7528\u5230\u9879\u76ee\u5c42\u7ea7\uff0c\u8fdb\u800c\u8ba9\u9879\u76ee\u7684\u8d44\u6e90\u914d\u989d\u6cbf\u7528\u5230\u9879\u76ee\u5185\u7684\u6bcf\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e Kubernetes \u4f1a\u4f7f\u7528\u539f\u751f\u7684\u8d44\u6e90\u914d\u989d\u6765\u5f3a\u5236\u6267\u884c\u4f60\u8bbe\u7f6e\u7684\u9650\u5236\u3002\u5982\u679c\u8981\u66f4\u6539\u7279\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u914d\u989d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8986\u76d6\u8bbe\u7f6e\u3002"),(0,a.kt)("p",null,"\u9879\u76ee\u914d\u989d\u5305\u62ec\u4f60\u5728\u521b\u5efa\u6216\u7f16\u8f91\u96c6\u7fa4\u65f6\u8bbe\u7f6e\u7684\u4e24\u4e2a\u9650\u5236\uff1a"),(0,a.kt)("a",{id:"project-limits"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u9879\u76ee\u9650\u5236"),"\uff1a"),(0,a.kt)("p",{parentName:"li"}," \u914d\u7f6e\u4e86\u9879\u76ee\u4e2d\u6240\u6709\u547d\u540d\u7a7a\u95f4\u5171\u4eab\u7684\u6bcf\u4e2a\u6307\u5b9a\u8d44\u6e90\u7684\u603b\u9650\u5236\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236"),"\uff1a"),(0,a.kt)("p",{parentName:"li"}," \u914d\u7f6e\u4e86\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u5bf9\u6bcf\u4e2a\u6307\u5b9a\u8d44\u6e90\u7684\u9ed8\u8ba4\u914d\u989d\u3002\n\u5982\u679c\u9879\u76ee\u4e2d\u7684\u547d\u540d\u7a7a\u95f4\u914d\u7f6e\u6ca1\u6709\u88ab\u8986\u76d6\uff0c\u90a3\u4e48\u6b64\u9650\u5236\u4f1a\u81ea\u52a8\u7ed1\u5b9a\u5230\u547d\u540d\u7a7a\u95f4\u5e76\u5f3a\u5236\u6267\u884c\u3002"))),(0,a.kt)("p",null,"\u5728\u4e0b\u56fe\u4e2d\uff0cRancher \u7ba1\u7406\u5458\u60f3\u4f7f\u7528\u8d44\u6e90\u914d\u989d\u6765\u4e3a\u9879\u76ee\u4e2d\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4 1-4"),"\uff09\u8bbe\u7f6e\u76f8\u540c\u7684 CPU \u548c\u5185\u5b58\u9650\u5236\u3002\u5728 Rancher \u4e2d\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u4e3a\u9879\u76ee\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u8d44\u6e90\u914d\u989d"),"\uff09\uff0c\u800c\u4e0d\u9700\u8981\u4e3a\u547d\u540d\u7a7a\u95f4\u5355\u72ec\u8fdb\u884c\u8bbe\u7f6e\u3002\u6b64\u914d\u989d\u5305\u62ec\u6574\u4e2a\u9879\u76ee\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u9650\u5236"),"\uff09\u548c\u5355\u4e2a\u547d\u540d\u7a7a\u95f4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236"),"\uff09\u7684\u8d44\u6e90\u9650\u5236\u3002\u7136\u540e\uff0cRancher \u4f1a\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u9650\u5236"),"\u7684\u914d\u989d\u6cbf\u7528\u5230\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u914d\u989d"),"\uff09\u3002"),(0,a.kt)("sup",null,"Rancher\uff1a\u8d44\u6e90\u914d\u989d\u6cbf\u7528\u5230\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rancher \u8d44\u6e90\u914d\u989d\u5b9e\u73b0",src:r(8421).Z,width:"1848",height:"1178"})),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4ecb\u7ecd\u5728 Rancher UI ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u4e2d"))," \u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u7684\u66f4\u7ec6\u5fae\u7684\u529f\u80fd\u3002\u5982\u679c\u4f60\u5220\u9664\u4e86\u9879\u76ee\u7ea7\u522b\u7684\u8d44\u6e90\u914d\u989d\uff0c\u65e0\u8bba\u547d\u540d\u7a7a\u95f4\u5c42\u7ea7\u662f\u5426\u6709\u81ea\u5b9a\u4e49\u7684\u8d44\u6e90\u914d\u989d\uff0c\u9879\u76ee\u5185\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u4e5f\u4f1a\u79fb\u9664\u8fd9\u4e2a\u8d44\u6e90\u914d\u989d\u3002\u5728\u9879\u76ee\u5c42\u7ea7\u4fee\u6539\u5df2\u6709\u7684\u547d\u540d\u7a7a\u95f4\u9ed8\u8ba4\u8d44\u6e90\u914d\u989d\uff0c\u4e0d\u4f1a\u5f71\u54cd\u547d\u540d\u7a7a\u95f4\u5185\u7684\u8d44\u6e90\u914d\u989d\uff0c\u4fee\u6539\u540e\u7684\u9879\u76ee\u5c42\u7ea7\u8d44\u6e90\u914d\u989d\u53ea\u4f1a\u5bf9\u4ee5\u540e\u65b0\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u751f\u6548\u3002\u8981\u4fee\u6539\u591a\u4e2a\u73b0\u6709\u547d\u540d\u7a7a\u95f4\u7684\u9ed8\u8ba4\u9650\u5236\uff0c\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u5c42\u7ea7\u5220\u9664\u8be5\u9650\u5236\uff0c\u7136\u540e\u518d\u4f7f\u7528\u65b0\u7684\u9ed8\u8ba4\u503c\u91cd\u65b0\u521b\u5efa\u914d\u989d\u3002\u8fd9\u79cd\u65b9\u5f0f\u4f1a\u5c06\u65b0\u7684\u9ed8\u8ba4\u503c\u5e94\u7528\u4e8e\u9879\u76ee\u4e2d\u7684\u6240\u6709\u73b0\u6709\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u5728\u9879\u76ee\u4e2d\u521b\u5efa\u547d\u540d\u7a7a\u95f4\u4e4b\u524d\uff0cRancher \u4f1a\u4f7f\u7528\u9ed8\u8ba4\u9650\u5236\u548c\u8986\u76d6\u9650\u5236\u6765\u5bf9\u6bd4\u9879\u76ee\u5185\u7684\u53ef\u7528\u8d44\u6e90\u548c\u8bf7\u6c42\u8d44\u6e90\u3002\n\u5982\u679c\u8bf7\u6c42\u7684\u8d44\u6e90\u8d85\u8fc7\u4e86\u9879\u76ee\u4e2d\u8fd9\u4e9b\u8d44\u6e90\u7684\u5269\u4f59\u5bb9\u91cf\uff0cRancher \u5c06\u4e3a\u547d\u540d\u7a7a\u95f4\u5206\u914d\u8be5\u8d44\u6e90\u7684\u5269\u4f59\u5bb9\u91cf\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u5728 Rancher \u7684 UI ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u5916"))," \u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\u7684\u5904\u7406\u65b9\u6cd5\u5219\u4e0d\u4e00\u6837\u3002\u5bf9\u4e8e\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u7684\u547d\u540d\u7a7a\u95f4\uff0c\u5982\u679c\u8bf7\u6c42\u7684\u8d44\u6e90\u91cf\u591a\u4f59\u9879\u76ee\u5185\u7684\u4f59\u91cf\uff0cRancher \u4f1a\u5206\u914d\u4e00\u4e2a\u6570\u503c\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"0")," \u7684\u8d44\u6e90\u914d\u989d\u3002"),(0,a.kt)("p",null,"\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5728\u73b0\u6709\u9879\u76ee\u4e2d\u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"field.cattle.io/projectId")," \u6ce8\u91ca\u3002\u8981\u8986\u76d6\u9ed8\u8ba4\u7684\u8bf7\u6c42\u914d\u989d\u9650\u5236\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"field.cattle.io/resourceQuota")," \u6ce8\u91ca\u3002"),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cRancher \u53ea\u4f1a\u8986\u76d6\u9879\u76ee\u914d\u989d\u4e0a\u5b9a\u4e49\u7684\u8d44\u6e90\u9650\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  annotations:\n    field.cattle.io/projectId: [your-cluster-ID]:[your-project-ID]\n    field.cattle.io/resourceQuota: \'{"limit":{"limitsCpu":"100m", "configMaps": "50"}}\'\n  name: my-ns\n')),(0,a.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5982\u679c\u9879\u76ee\u914d\u989d\u5728\u5176\u8d44\u6e90\u5217\u8868\u4e2d\u4e0d\u5305\u542b configMaps\uff0c\u90a3\u4e48 Rancher \u5c06\u5ffd\u7565\u6b64\u8986\u76d6\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"configMaps"),"\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u9879\u76ee\u4e2d\u672a\u5b9a\u4e49\u7684\u8d44\u6e90\uff0c\u5efa\u8bae\u4f60\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u4e13\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ResourceQuota")," \u5bf9\u8c61\u6765\u914d\u7f6e\u5176\u5b83\u81ea\u5b9a\u4e49\u9650\u5236\u3002\n\u8d44\u6e90\u914d\u989d\u662f\u539f\u751f Kubernetes \u5bf9\u8c61\uff0c\u5982\u679c\u547d\u540d\u7a7a\u95f4\u5c5e\u4e8e\u5177\u6709\u914d\u989d\u7684\u9879\u76ee\uff0cRancher \u5c06\u5ffd\u7565\u7528\u6237\u5b9a\u4e49\u7684\u914d\u989d\uff0c\u4ece\u800c\u7ed9\u4e88\u7528\u6237\u66f4\u591a\u7684\u63a7\u5236\u6743\u3002"),(0,a.kt)("p",null,"\u4e0b\u8868\u5bf9\u6bd4\u4e86 Rancher \u548c Kubernetes \u8d44\u6e90\u914d\u989d\u7684\u4e3b\u8981\u533a\u522b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Rancher \u8d44\u6e90\u914d\u989d"),(0,a.kt)("th",{parentName:"tr",align:null},"Kubernetes \u8d44\u6e90\u914d\u989d"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u4e8e\u9879\u76ee\u548c\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5e94\u7528\u4e8e\u547d\u540d\u7a7a\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u4e3a\u9879\u76ee\u4e2d\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u521b\u5efa\u8d44\u6e90\u6c60\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u9759\u6001\u8d44\u6e90\u9650\u5236\u5e94\u7528\u5230\u5355\u72ec\u7684\u547d\u540d\u7a7a\u95f4\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u6cbf\u7528\u7684\u6a21\u5f0f\uff0c\u5c06\u8d44\u6e90\u914d\u989d\u5e94\u7528\u4e8e\u5404\u4e2a\u547d\u540d\u7a7a\u95f4\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ec5\u5e94\u7528\u4e8e\u6307\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u3002")))))}i.isMDXComponent=!0},58914:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kubernetes-resource-quota-1449edd8bea51560951f519a6098dda0.svg"},8421:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rancher-resource-quota-3c2bc9f34b4fe75494a937bee75a601a.png"}}]);