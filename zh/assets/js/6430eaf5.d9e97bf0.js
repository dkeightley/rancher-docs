"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=p(a),m=r,d=k["".concat(i,".").concat(m)]||k[m]||u[m]||l;return a?n.createElement(d,c(c({ref:t},o),{},{components:a})):n.createElement(d,c({ref:t},o))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,c=new Array(l);c[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<l;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},52888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u66f4\u65b0 Rancher \u8bc1\u4e66"},c=void 0,s={unversionedId:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",id:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",title:"\u66f4\u65b0 Rancher \u8bc1\u4e66",description:"\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate",permalink:"/zh/getting-started/installation-and-upgrade/resources/update-rancher-certificate",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",tags:[],version:"current",lastUpdatedAt:1670485593,formattedLastUpdatedAt:"2022\u5e7412\u67088\u65e5",frontMatter:{title:"\u66f4\u65b0 Rancher \u8bc1\u4e66"},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7 Cert-Manager",permalink:"/zh/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},next:{title:"\u5f15\u5bfc\u5bc6\u7801",permalink:"/zh/getting-started/installation-and-upgrade/resources/bootstrap-password"}},i={},p=[{value:"\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66",id:"\u66f4\u65b0\u79c1\u6709-ca-\u8bc1\u4e66",level:2},{value:"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 Secret \u5bf9\u8c61",id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-secret-\u5bf9\u8c61",level:3},{value:"2. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 CA Secret \u5bf9\u8c61",id:"2-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-ca-secret-\u5bf9\u8c61",level:3},{value:"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72",id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72",level:3},{value:"4. \u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u79c1\u6709 CA",id:"4-\u91cd\u65b0\u914d\u7f6e-rancher-agent-\u4ee5\u4fe1\u4efb\u79c1\u6709-ca",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4",level:4},{value:"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5",id:"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5",level:4},{value:"\u65b9\u6cd5 1\uff1a\u5f3a\u5236\u91cd\u65b0\u90e8\u7f72 Rancher Agent",id:"\u65b9\u6cd5-1\u5f3a\u5236\u91cd\u65b0\u90e8\u7f72-rancher-agent",level:4},{value:"\u65b9\u6cd5\u4e8c\uff1a\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c\u73af\u5883\u53d8\u91cf",id:"\u65b9\u6cd5\u4e8c\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c\u73af\u5883\u53d8\u91cf",level:4},{value:"\u65b9\u6cd5\u4e09\uff1a\u624b\u52a8\u91cd\u65b0\u90e8\u7f72 Rancher agent",id:"\u65b9\u6cd5\u4e09\u624b\u52a8\u91cd\u65b0\u90e8\u7f72-rancher-agent",level:4},{value:"5. \u5f3a\u5236\u66f4\u65b0 Fleet \u96c6\u7fa4\uff0c\u4ece\u800c\u5c06 fleet-agent \u91cd\u65b0\u8fde\u63a5\u5230 Rancher",id:"5-\u5f3a\u5236\u66f4\u65b0-fleet-\u96c6\u7fa4\u4ece\u800c\u5c06-fleet-agent-\u91cd\u65b0\u8fde\u63a5\u5230-rancher",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-1",level:4},{value:"\u5c06\u79c1\u6709 CA \u8bc1\u4e66\u66f4\u6539\u4e3a\u516c\u5171\u8bc1\u4e66",id:"\u5c06\u79c1\u6709-ca-\u8bc1\u4e66\u66f4\u6539\u4e3a\u516c\u5171\u8bc1\u4e66",level:2},{value:"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 Secret \u5bf9\u8c61",id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-secret-\u5bf9\u8c61-1",level:3},{value:"2. \u5220\u9664 CA \u8bc1\u4e66 Secret \u5bf9\u8c61",id:"2-\u5220\u9664-ca-\u8bc1\u4e66-secret-\u5bf9\u8c61",level:3},{value:"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72",id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72-1",level:3},{value:"4. \u4e3a\u975e\u79c1\u6709/\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e Rancher Agent",id:"4-\u4e3a\u975e\u79c1\u6709\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e-rancher-agent",level:3},{value:"5. \u5f3a\u5236\u66f4\u65b0 Fleet \u96c6\u7fa4\uff0c\u4ece\u800c\u5c06 fleet-agent \u91cd\u65b0\u8fde\u63a5\u5230 Rancher",id:"5-\u5f3a\u5236\u66f4\u65b0-fleet-\u96c6\u7fa4\u4ece\u800c\u5c06-fleet-agent-\u91cd\u65b0\u8fde\u63a5\u5230-rancher-1",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-2",level:4}],o={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u66f4\u65b0\u79c1\u6709-ca-\u8bc1\u4e66"},"\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66"),(0,r.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8f6e\u6362",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u5b89\u88c5\u5728 Kubernetes \u96c6\u7fa4\u4e0a"),"\u3001\u7531 Rancher \u4f7f\u7528\u7684 SSL \u8bc1\u4e66\u548c\u79c1\u6709 CA\uff0c\u6216\u8f6c\u7528\u7531\u79c1\u6709 CA \u7b7e\u53d1\u7684 SSL \u8bc1\u4e66\u3002"),(0,r.kt)("p",null,"\u6b65\u9aa4\u6982\u8ff0\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u65b0\u8bc1\u4e66\u548c\u79c1\u94a5\u521b\u5efa\u6216\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"tls-rancher-ingress")," Kubernetes Secret \u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6839 CA \u8bc1\u4e66\u521b\u5efa\u6216\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"tls-ca")," Kubernetes Secret \u5bf9\u8c61\uff08\u4ec5\u5728\u4f7f\u7528\u79c1\u6709 CA \u65f6\u9700\u8981\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Helm CLI \u66f4\u65b0 Rancher \u5b89\u88c5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u65b0\u7684 CA \u8bc1\u4e66\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9 Fleet \u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\uff0c\u6765\u5c06 fleet-agent \u8fde\u63a5\u5230 Rancher\u3002")),(0,r.kt)("p",null,"\u5404\u4e2a\u6b65\u9aa4\u7684\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\u3002"),(0,r.kt)("h3",{id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-secret-\u5bf9\u8c61"},"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 Secret \u5bf9\u8c61"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u548c\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\u5408\u5e76\u5230\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.crt")," \u7684\u6587\u4ef6\uff0c\u5e76\u5728\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.key")," \u7684\u6587\u4ef6\u4e2d\u63d0\u4f9b\u76f8\u5e94\u7684\u8bc1\u4e66\u5bc6\u94a5\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728 Rancher\uff08\u672c\u5730\uff09\u7ba1\u7406\u96c6\u7fa4\u4e2d\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," Secret \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u66f4\u65b0\u73b0\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," Secret\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,r.kt)("h3",{id:"2-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-ca-secret-\u5bf9\u8c61"},"2. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 CA Secret \u5bf9\u8c61"),(0,r.kt)("p",null,"\u5982\u679c\u65b0\u8bc1\u4e66\u7531\u79c1\u6709 CA \u7b7e\u53d1\u7684\uff0c\u4f60\u9700\u8981\u5c06\u76f8\u5e94\u7684\u6839 CA \u8bc1\u4e66\u590d\u5236\u5230\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," \u7684\u6587\u4ef6\u4e2d\uff0c\u5e76\u521b\u5efa\u6216\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," Secret\u3002\u5982\u679c\u8bc1\u4e66\u7531\u4e2d\u95f4 CA \u7b7e\u540d\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," \u5fc5\u987b\u6309\u987a\u5e8f\u540c\u65f6\u5305\u542b\u4e2d\u95f4 CA \u8bc1\u4e66\u548c\u6839 CA \u8bc1\u4e66\u3002"),(0,r.kt)("p",null,"\u521b\u5efa\u521d\u59cb ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," Secret\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem\n")),(0,r.kt)("p",null,"\u8981\u66f4\u65b0\u73b0\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," Secret\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,r.kt)("h3",{id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72"},"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72"),(0,r.kt)("p",null,"\u5982\u679c\u8bc1\u4e66\u6e90\u6709\u66f4\u6539\uff0c\u5219\u9700\u8981\u6267\u884c\u6b64\u6b65\u9aa4\u3002\u5982\u679c\u4f60\u7684 Rancher \u4e4b\u524d\u4f7f\u7528\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66 (",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),") \u6216 Let's Encrypt (",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),") \u8bc1\u4e66\uff0c\u5e76\u4e14\u73b0\u5728\u6b63\u5728\u4f7f\u7528\u7531\u79c1\u6709 CA (",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret"),") \u7b7e\u540d\u7684\u8bc1\u4e66\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u66f4\u65b0\u4e86 Rancher Chart \u7684 Helm \u503c\uff0c\u56e0\u6b64 Rancher pod \u548c ingress \u4f1a\u4f7f\u7528\u5728\u6b65\u9aa4 1 \u548c 2 \u4e2d\u521b\u5efa\u7684\u65b0\u79c1\u6709 CA \u8bc1\u4e66\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8c03\u6574\u521d\u59cb\u5b89\u88c5\u671f\u95f4\u4f7f\u7528\u7684\u503c\uff0c\u5c06\u5f53\u524d\u503c\u5b58\u50a8\u4e3a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm get values rancher -n cattle-system -o yaml > values.yaml\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u68c0\u7d22\u5f53\u524d\u90e8\u7f72\u7684 Rancher Chart \u7684\u7248\u672c\u5b57\u7b26\u4e32\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm ls -n cattle-system\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u6587\u4ef6\u4e2d\u7684\u5f53\u524d Helm \u503c\u4ee5\u5305\u542b\u4e0b\u65b9\u5185\u5bb9\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"ingress:\n  tls:\n    source: secret\nprivateCA: true\n")),(0,r.kt)("admonition",{title:"\u91cd\u8981\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u8bc1\u4e66\u7531\u79c1\u6709 CA \u7b7e\u53d1\uff0c\u56e0\u6b64\u786e\u4fdd\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options#%E5%B8%B8%E7%94%A8%E9%80%89%E9%A1%B9"},(0,r.kt)("inlineCode",{parentName:"a"},"privateCA: true"))," \u662f\u975e\u5e38\u91cd\u8981\u7684\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u6587\u4ef6\u548c\u5f53\u524d Chart \u7248\u672c\u5347\u7ea7 Helm \u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b\u3002\u7248\u672c\u5fc5\u987b\u5339\u914d\u4ee5\u9632\u6b62 Rancher \u5347\u7ea7\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  -f values.yaml \\\n  --version <DEPLOYED_RANCHER_VERSION>\n")),(0,r.kt)("p",null,"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<RANCHER_SERVER_URL>/v3/settings/cacerts"),"\uff0c\u9a8c\u8bc1\u8be5\u503c\u662f\u5426\u4e0e\u5148\u524d\u5199\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," Secret \u4e2d\u7684 CA \u8bc1\u4e66\u5339\u914d\u3002\u5728\u6240\u6709 Rancher pod \u542f\u52a8\u4e4b\u524d\uff0cCA ",(0,r.kt)("inlineCode",{parentName:"p"},"cacerts")," \u503c\u53ef\u80fd\u4e0d\u4f1a\u66f4\u65b0\u3002"),(0,r.kt)("h3",{id:"4-\u91cd\u65b0\u914d\u7f6e-rancher-agent-\u4ee5\u4fe1\u4efb\u79c1\u6709-ca"},"4. \u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u79c1\u6709 CA"),(0,r.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86\u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u79c1\u6709 CA \u7684\u4e09\u79cd\u65b9\u6cd5\u3002\u5982\u679c\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u7b26\u5408\u4ee5\u4e0b\u4efb\u610f\u4e00\u4e2a\u6761\u4ef6\uff0c\u8bf7\u6267\u884c\u6b64\u6b65\u9aa4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rancher \u5728\u5148\u524d\u7684\u914d\u7f6e\u4e2d\u4f7f\u7528\u4e86 Rancher \u81ea\u7b7e\u540d\u8bc1\u4e66 (",(0,r.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=rancher"),") \u6216 Let's Encrypt \u8bc1\u4e66 (",(0,r.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=letsEncrypt"),")\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8be5\u8bc1\u4e66\u7531\u4e0d\u540c\u7684\u79c1\u6709 CA \u7b7e\u53d1")),(0,r.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4"},"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f"),(0,r.kt)("p",null,"\u5982\u679c Rancher \u914d\u7f6e\u4e86\u79c1\u6709 CA \u7b7e\u540d\u7684\u8bc1\u4e66\u65f6\uff0cCA \u8bc1\u4e66\u94fe\u5c06\u53d7\u5230 Rancher agent \u5bb9\u5668\u7684\u4fe1\u4efb\u3002Agent \u4f1a\u5bf9\u4e0b\u8f7d\u8bc1\u4e66\u7684\u6821\u9a8c\u548c\u53ca ",(0,r.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," \u73af\u5883\u53d8\u91cf\u8fdb\u884c\u6bd4\u8f83\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c Rancher \u4f7f\u7528\u7684\u79c1\u6709 CA \u8bc1\u4e66\u53d1\u751f\u53d8\u5316\uff0c\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," \u5fc5\u987b\u76f8\u5e94\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5"},"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6cd5 1\uff08\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff09\uff1a\u5728\u8f6e\u6362\u8bc1\u4e66\u540e\u5c06\u6240\u6709\u96c6\u7fa4\u8fde\u63a5\u5230 Rancher\u3002\u9002\u7528\u4e8e\u66f4\u65b0 Rancher \u90e8\u7f72\uff08\u6b65\u9aa4 3\uff09\u540e\u7acb\u5373\u6267\u884c\u7684\u60c5\u51b5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6cd5 2\uff1a\u9002\u7528\u4e8e\u96c6\u7fa4\u4e0e Rancher \u5931\u53bb\u8fde\u63a5\uff0c\u4f46\u6240\u6709\u96c6\u7fa4\u90fd\u542f\u7528\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"Authorized Cluster Endpoint")," (ACE) \u7684\u60c5\u51b5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6cd5 3\uff1a\u5982\u679c\u65b9\u6cd5 1 \u548c 2 \u4e0d\u53ef\u884c\uff0c\u5219\u53ef\u4f7f\u7528\u65b9\u6cd5 3 \u8fdb\u884c\u56de\u9000\u3002"))),(0,r.kt)("h4",{id:"\u65b9\u6cd5-1\u5f3a\u5236\u91cd\u65b0\u90e8\u7f72-rancher-agent"},"\u65b9\u6cd5 1\uff1a\u5f3a\u5236\u91cd\u65b0\u90e8\u7f72 Rancher Agent"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\uff0c\u4f7f\u7528 Rancher\uff08\u672c\u5730\uff09\u7ba1\u7406\u96c6\u7fa4\u7684 Kubeconfig \u6587\u4ef6\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate clusters.management.cattle.io <CLUSTER_ID> io.cattle.agent.force.deploy=true\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u627e\u5230\u4e0b\u6e38\u96c6\u7fa4\u7684\u96c6\u7fa4 ID (c-xxxxx)\u3002\u4f60\u53ef\u4ee5\u5728 Rancher UI \u7684",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406"),"\u4e2d\u67e5\u770b\u96c6\u7fa4\u65f6\u5728\u6d4f\u89c8\u5668 URL \u4e2d\u627e\u5230 ID\u3002")),(0,r.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06\u4f7f Agent \u6e05\u5355\u91cd\u65b0\u5e94\u7528\u65b0\u8bc1\u4e66\u7684\u6821\u9a8c\u548c\u3002"),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e8c\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c\u73af\u5883\u53d8\u91cf"},"\u65b9\u6cd5\u4e8c\uff1a\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c\u73af\u5883\u53d8\u91cf"),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," \u73af\u5883\u53d8\u91cf\u66f4\u65b0\u4e3a\u5339\u914d\u65b0 CA \u8bc1\u4e66\u6821\u9a8c\u548c\u7684\u503c\uff0c\u4ece\u800c\u624b\u52a8\u4e3a Agent Kubernetes \u5bf9\u8c61\u6253\u4e0a\u8865\u4e01\u3002\u901a\u8fc7\u4ee5\u4e0b\u64cd\u4f5c\u751f\u6210\u65b0\u7684\u6821\u9a8c\u548c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k -s -fL <RANCHER_SERVER_URL>/v3/settings/cacerts | jq -r .value | sha256sum cacert.tmp | awk '{print $1}'\n")),(0,r.kt)("p",null,"\u4e3a\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u4f7f\u7528 Kubeconfig \u66f4\u65b0\u4e24\u4e2a Agent \u90e8\u7f72\u7684\u73af\u5883\u53d8\u91cf\u3002\u5982\u679c\u96c6\u7fa4\u542f\u7528\u4e86 ",(0,r.kt)("a",{parentName:"p",href:"../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"ACE"),"\uff0c\u4f60\u53ef\u4ee5",(0,r.kt)("a",{parentName:"p",href:"../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u8c03\u6574 kubectl \u4e0a\u4e0b\u6587"),"\uff0c\u4ece\u800c\u76f4\u63a5\u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit -n cattle-system ds/cattle-node-agent\nkubectl edit -n cattle-system deployment/cattle-cluster-agent\n")),(0,r.kt)("h4",{id:"\u65b9\u6cd5\u4e09\u624b\u52a8\u91cd\u65b0\u90e8\u7f72-rancher-agent"},"\u65b9\u6cd5\u4e09\uff1a\u624b\u52a8\u91cd\u65b0\u90e8\u7f72 Rancher agent"),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u901a\u8fc7\u5728\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u7684 control plane \u8282\u70b9\u4e0a\u8fd0\u884c\u4e00\u7ec4\u547d\u4ee4\uff0c\u4ece\u800c\u91cd\u65b0\u5e94\u7528 Rancher agent\u3002"),(0,r.kt)("p",null,"\u5bf9\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u91cd\u590d\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u68c0\u7d22 agent \u6ce8\u518c kubectl \u547d\u4ee4\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u627e\u5230\u4e0b\u6e38\u96c6\u7fa4\u7684\u96c6\u7fa4 ID (c-xxxxx)\u3002\u4f60\u53ef\u4ee5\u5728 Rancher UI \u7684",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4\u7ba1\u7406"),"\u4e2d\u67e5\u770b\u96c6\u7fa4\u65f6\u5728\u6d4f\u89c8\u5668 URL \u4e2d\u627e\u5230 ID\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 Rancher Server URL \u548c\u96c6\u7fa4 ID \u6dfb\u52a0\u5230\u4ee5\u4e0b URL\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_SERVER_URL>/v3/clusterregistrationtokens?clusterId=<CLUSTER_ID>"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236 ",(0,r.kt)("inlineCode",{parentName:"li"},"insecureCommand")," \u5b57\u6bb5\u4e2d\u7684\u547d\u4ee4\uff0c\u4f7f\u7528\u6b64\u547d\u4ee4\u662f\u56e0\u4e3a\u672a\u4f7f\u7528\u79c1\u6709 CA\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4ee5\u4e0b\u5176\u4e2d\u4e00\u79cd\u65b9\u6cd5\uff0c\u4f7f\u7528 kubeconfig \u4e3a\u4e0b\u6e38\u96c6\u7fa4\u8fd0\u884c\u4e0a\u4e00\u6b65\u4e2d\u7684 kubectl \u547d\u4ee4\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u96c6\u7fa4\u542f\u7528\u4e86 ",(0,r.kt)("a",{parentName:"li",href:"../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/authorized-cluster-endpoint"},"ACE"),"\uff0c\u4f60\u53ef\u4ee5",(0,r.kt)("a",{parentName:"li",href:"../../../how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig#%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8%E4%B8%8B%E6%B8%B8%E9%9B%86%E7%BE%A4%E8%BF%9B%E8%A1%8C%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81"},"\u8c03\u6574\u4e0a\u4e0b\u6587"),"\uff0c\u4ece\u800c\u76f4\u63a5\u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6216\u8005\uff0cSSH \u5230 control plane \u8282\u70b9\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"RKE\uff1a\u4f7f\u7528",(0,r.kt)("a",{parentName:"li",href:"https://github.com/rancherlabs/support-tools/tree/master/how-to-retrieve-kubeconfig-from-custom-cluster"},"\u6b64\u5904\u6587\u6863\u4e2d\u7684\u6b65\u9aa4"),"\u751f\u6210 kubeconfig"),(0,r.kt)("li",{parentName:"ul"},"RKE2/K3s\uff1a\u4f7f\u7528\u5b89\u88c5\u65f6\u586b\u5145\u7684 kubeconfig")))))),(0,r.kt)("h3",{id:"5-\u5f3a\u5236\u66f4\u65b0-fleet-\u96c6\u7fa4\u4ece\u800c\u5c06-fleet-agent-\u91cd\u65b0\u8fde\u63a5\u5230-rancher"},"5. \u5f3a\u5236\u66f4\u65b0 Fleet \u96c6\u7fa4\uff0c\u4ece\u800c\u5c06 fleet-agent \u91cd\u65b0\u8fde\u63a5\u5230 Rancher"),(0,r.kt)("p",null,"\u5728 Rancher UI \u7684",(0,r.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#%E5%9C%A8-rancher-ui-%E4%B8%AD%E8%AE%BF%E9%97%AE-fleet"},"\u6301\u7eed\u4ea4\u4ed8"),"\u4e2d\uff0c\u4e3a\u96c6\u7fa4\u9009\u62e9\u201c\u5f3a\u5236\u66f4\u65b0\u201d\uff0c\u6765\u5141\u8bb8\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684 fleet-agent \u6210\u529f\u8fde\u63a5\u5230 Rancher\u3002"),(0,r.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-1"},"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f"),(0,r.kt)("p",null,"Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u4e2d\u7684 Fleet agent \u5b58\u50a8\u4e86\u7528\u4e8e\u8fde\u63a5\u5230 Rancher \u7684 kubeconfig\u3002kubeconfig \u5305\u542b\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"certificate-authority-data")," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u5305\u542b Rancher \u4f7f\u7528\u7684\u8bc1\u4e66\u7684 CA\u3002\u66f4\u6539 CA \u65f6\uff0c\u4f60\u9700\u8981\u66f4\u65b0\u6b64\u5757\u6765\u5141\u8bb8 fleet-agent \u4fe1\u4efb Rancher \u4f7f\u7528\u7684\u8bc1\u4e66\u3002"),(0,r.kt)("h2",{id:"\u5c06\u79c1\u6709-ca-\u8bc1\u4e66\u66f4\u6539\u4e3a\u516c\u5171\u8bc1\u4e66"},"\u5c06\u79c1\u6709 CA \u8bc1\u4e66\u66f4\u6539\u4e3a\u516c\u5171\u8bc1\u4e66"),(0,r.kt)("p",null,"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6267\u884c\u4e0e\u4e0a\u9762\u76f8\u53cd\u7684\u64cd\u4f5c\uff0c\u5c06\u79c1\u6709 CA \u9881\u53d1\u7684\u8bc1\u4e66\u66f4\u6539\u4e3a\u516c\u5171\u6216\u81ea\u7b7e\u540d CA\u3002"),(0,r.kt)("h3",{id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-secret-\u5bf9\u8c61-1"},"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 Secret \u5bf9\u8c61"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u548c\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\u5408\u5e76\u5230\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.crt")," \u7684\u6587\u4ef6\uff0c\u5e76\u5728\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.key")," \u7684\u6587\u4ef6\u4e2d\u63d0\u4f9b\u76f8\u5e94\u7684\u8bc1\u4e66\u5bc6\u94a5\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5728 Rancher\uff08\u672c\u5730\uff09\u7ba1\u7406\u96c6\u7fa4\u4e2d\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," Secret \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u66f4\u65b0\u73b0\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," Secret\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,r.kt)("h3",{id:"2-\u5220\u9664-ca-\u8bc1\u4e66-secret-\u5bf9\u8c61"},"2. \u5220\u9664 CA \u8bc1\u4e66 Secret \u5bf9\u8c61"),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca secret"),"\uff08\u4e0d\u518d\u9700\u8981\u5b83\uff09\u3002\u5982\u679c\u9700\u8981\uff0c\u4f60\u8fd8\u53ef\u4ee5\u9009\u62e9\u4fdd\u5b58 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," secret \u7684\u526f\u672c\u3002"),(0,r.kt)("p",null,"\u8981\u4fdd\u5b58\u73b0\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," Secret\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml\n")),(0,r.kt)("p",null,"\u8981\u5220\u9664\u73b0\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n cattle-system delete secret tls-ca\n")),(0,r.kt)("h3",{id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72-1"},"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72"),(0,r.kt)("p",null,"\u5982\u679c\u8bc1\u4e66\u6e90\u6709\u66f4\u6539\uff0c\u5219\u9700\u8981\u6267\u884c\u6b64\u6b65\u9aa4\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b83\u53d8\u5316\u7684\u539f\u56e0\u5f88\u53ef\u80fd\u662f\u56e0\u4e3a Rancher \u4e4b\u524d\u914d\u7f6e\u4e3a\u4f7f\u7528\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66 (",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),")\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u66f4\u65b0\u4e86 Rancher Chart \u7684 Helm \u503c\uff0c\u56e0\u6b64 Rancher pod \u548c Ingress \u4f1a\u4f7f\u7528\u5728\u6b65\u9aa4 1 \u4e2d\u521b\u5efa\u7684\u65b0\u8bc1\u4e66\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8c03\u6574\u521d\u59cb\u5b89\u88c5\u671f\u95f4\u4f7f\u7528\u7684\u503c\uff0c\u5c06\u5f53\u524d\u503c\u5b58\u50a8\u4e3a\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm get values rancher -n cattle-system -o yaml > values.yaml\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5f53\u524d\u90e8\u7f72\u7684 Rancher Chart \u7684\u7248\u672c\u5b57\u7b26\u4e32\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm ls -n cattle-system\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u6587\u4ef6\u4e2d\u7684\u5f53\u524d Helm \u503c\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e\u4e0d\u518d\u4f7f\u7528\u79c1\u6709 CA\uff0c\u5220\u9664 ",(0,r.kt)("inlineCode",{parentName:"li"},"privateCA: true")," \u5b57\u6bb5\uff0c\u6216\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u9700\u8981\u8c03\u6574 ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress.tls.source")," \u5b57\u6bb5\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"li",href:"../installation-references/helm-chart-options#%E5%B8%B8%E7%94%A8%E9%80%89%E9%A1%B9"},"Chart \u9009\u9879"),"\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528\u516c\u5171 CA\uff0c\u7ee7\u7eed\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"secret")),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 Let's Encrypt\uff0c\u5c06\u503c\u66f4\u65b0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"letsEncrypt")))))),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," \u6587\u4ef6\u66f4\u65b0 Rancher Chart \u7684 Helm \u503c\uff0c\u5e76\u4f7f\u7528\u5f53\u524d Chart \u7248\u672c\u9632\u6b62\u5347\u7ea7\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  helm upgrade rancher rancher-stable/rancher \\\n   --namespace cattle-system \\\n   -f values.yaml \\\n   --version <DEPLOYED_RANCHER_VERSION>\n")),(0,r.kt)("h3",{id:"4-\u4e3a\u975e\u79c1\u6709\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e-rancher-agent"},"4. \u4e3a\u975e\u79c1\u6709/\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e Rancher Agent"),(0,r.kt)("p",null,"\u7531\u4e8e\u4e0d\u518d\u4f7f\u7528\u79c1\u6709 CA\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u5220\u9664\u4e0b\u6e38\u96c6\u7fa4 agent \u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM"),' \u73af\u5883\u53d8\u91cf\uff0c\u6216\u5c06\u5176\u8bbe\u7f6e\u4e3a ""\uff08\u7a7a\u5b57\u7b26\u4e32\uff09\u3002'),(0,r.kt)("h3",{id:"5-\u5f3a\u5236\u66f4\u65b0-fleet-\u96c6\u7fa4\u4ece\u800c\u5c06-fleet-agent-\u91cd\u65b0\u8fde\u63a5\u5230-rancher-1"},"5. \u5f3a\u5236\u66f4\u65b0 Fleet \u96c6\u7fa4\uff0c\u4ece\u800c\u5c06 fleet-agent \u91cd\u65b0\u8fde\u63a5\u5230 Rancher"),(0,r.kt)("p",null,"\u5728 Rancher UI \u7684",(0,r.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#%E5%9C%A8-rancher-ui-%E4%B8%AD%E8%AE%BF%E9%97%AE-fleet"},"\u6301\u7eed\u4ea4\u4ed8"),"\u4e2d\uff0c\u4e3a\u96c6\u7fa4\u9009\u62e9\u201c\u5f3a\u5236\u66f4\u65b0\u201d\uff0c\u6765\u5141\u8bb8\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684 fleet-agent \u6210\u529f\u8fde\u63a5\u5230 Rancher\u3002"),(0,r.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-2"},"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f"),(0,r.kt)("p",null,"Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u4e2d\u7684 Fleet agent \u5b58\u50a8\u4e86\u7528\u4e8e\u8fde\u63a5\u5230 Rancher \u7684 kubeconfig\u3002kubeconfig \u5305\u542b\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"certificate-authority-data")," \u5b57\u6bb5\uff0c\u8be5\u5b57\u6bb5\u5305\u542b Rancher \u4f7f\u7528\u7684\u8bc1\u4e66\u7684 CA\u3002\u66f4\u6539 CA \u65f6\uff0c\u4f60\u9700\u8981\u66f4\u65b0\u6b64\u5757\u6765\u5141\u8bb8 fleet-agent \u4fe1\u4efb Rancher \u4f7f\u7528\u7684\u8bc1\u4e66\u3002"))}u.isMDXComponent=!0}}]);