"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10889],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>d});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(t),d=n,u=g["".concat(p,".").concat(d)]||g[d]||m[d]||o;return t?r.createElement(u,i(i({ref:a},c),{},{components:t})):r.createElement(u,i({ref:a},c))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},80352:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const o={title:"Upgrading Cert-Manager"},i=void 0,l={unversionedId:"getting-started/installation-and-upgrade/resources/upgrade-cert-manager",id:"getting-started/installation-and-upgrade/resources/upgrade-cert-manager",title:"Upgrading Cert-Manager",description:"Rancher uses cert-manager to automatically generate and renew TLS certificates for HA deployments of Rancher. As of Fall 2019, three important changes to cert-manager are set to occur that you need to take action on if you have an HA deployment of Rancher:",source:"@site/docs/getting-started/installation-and-upgrade/resources/upgrade-cert-manager.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",permalink:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/upgrade-cert-manager.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"Upgrading Cert-Manager"},sidebar:"tutorialSidebar",previous:{title:"About Custom CA Root Certificates",permalink:"/getting-started/installation-and-upgrade/resources/custom-ca-root-certificates"},next:{title:"Updating the Rancher Certificate",permalink:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate"}},p={},s=[{value:"Upgrade Cert-Manager",id:"upgrade-cert-manager",level:2},{value:"Option A: Upgrade cert-manager with Internet Access",id:"option-a-upgrade-cert-manager-with-internet-access",level:3},{value:"Option B: Upgrade cert-manager in an Air-Gapped Environment",id:"option-b-upgrade-cert-manager-in-an-air-gapped-environment",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Option C: Upgrade cert-manager from Versions 1.5 and Below",id:"option-c-upgrade-cert-manager-from-versions-15-and-below",level:3},{value:"Verify the Deployment",id:"verify-the-deployment",level:3},{value:"Cert-Manager API change and data migration",id:"cert-manager-api-change-and-data-migration",level:2}],c={toc:s};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rancher uses cert-manager to automatically generate and renew TLS certificates for HA deployments of Rancher. As of Fall 2019, three important changes to cert-manager are set to occur that you need to take action on if you have an HA deployment of Rancher:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://community.letsencrypt.org/t/blocking-old-cert-manager-versions/98753"},"Let's Encrypt will be blocking cert-manager instances older than 0.8.0 starting November 1st 2019.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"Cert-manager is deprecating and replacing the certificate.spec.acme.solvers field"),". This change has no exact deadline."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"Cert-manager is deprecating ",(0,n.kt)("inlineCode",{parentName:"a"},"v1alpha1")," API and replacing its API group"))),(0,n.kt)("p",null,"To address these changes, this guide will do two things:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Document the procedure for upgrading cert-manager"),(0,n.kt)("li",{parentName:"ol"},"Explain the cert-manager API changes and link to cert-manager's official documentation for migrating your data")),(0,n.kt)("admonition",{title:"Important:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are upgrading cert-manager to the latest version from a version older than 1.5, follow the steps in ",(0,n.kt)("a",{parentName:"p",href:"#option-c-upgrade-to-new-cert-manager-from-versions-15-and-below"},"Option C")," below to do so. Note that you do not need to reinstall Rancher to perform this upgrade.")),(0,n.kt)("h2",{id:"upgrade-cert-manager"},"Upgrade Cert-Manager"),(0,n.kt)("p",null,"The namespace used in these instructions depends on the namespace cert-manager is currently installed in. If it is in kube-system use that in the instructions below. You can verify by running ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces")," and checking which namespace the cert-manager-","*"," pods are listed in. Do not change the namespace cert-manager is running in or this can cause issues."),(0,n.kt)("p",null,"In order to upgrade cert-manager, follow these instructions:"),(0,n.kt)("h3",{id:"option-a-upgrade-cert-manager-with-internet-access"},"Option A: Upgrade cert-manager with Internet Access"),(0,n.kt)("details",{id:"normal"},(0,n.kt)("summary",null,"Click to expand"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/"},"Back up existing resources")," as a precaution"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl get -o yaml --all-namespaces \\\nissuer,clusterissuer,certificates,certificaterequests > cert-manager-backup.yaml\n")),(0,n.kt)("admonition",{parentName:"li",title:"Important:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are upgrading from a version older than 0.11.0, Update the apiVersion on all your backed up resources from ",(0,n.kt)("inlineCode",{parentName:"p"},"certmanager.k8s.io/v1alpha1")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1alpha2"),". If you use any cert-manager annotations on any of your other resources, you will need to update them to reflect the new API group. For details, refer to the documentation on ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/#additional-annotation-changes"},"additional annotation changes.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/uninstall/kubernetes/#uninstalling-with-helm"},"Uninstall existing deployment")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm uninstall cert-manager\n")),(0,n.kt)("p",{parentName:"li"},"Delete the CustomResourceDefinition using the link to the version vX.Y.Z you installed"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl delete -f https://github.com/cert-manager/cert-manager/releases/download/vX.Y.Z/cert-manager.crds.yaml\n\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the CustomResourceDefinition resources separately"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply --validate=false -f https://github.com/cert-manager/cert-manager/releases/download/vX.Y.Z/cert-manager.crds.yaml\n\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are running Kubernetes v1.15 or below, you will need to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"--validate=false")," flag to your ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command above. Otherwise, you will receive a validation error relating to the ",(0,n.kt)("inlineCode",{parentName:"p"},"x-kubernetes-preserve-unknown-fields")," field in cert-manager\u2019s CustomResourceDefinition resources. This is a benign error and occurs due to the way kubectl performs resource validation."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the namespace for cert-manager if needed"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the Jetstack Helm repository"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Update your local Helm chart repository cache"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo update\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the new version of cert-manager"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm install \\\n  cert-manager jetstack/cert-manager \\\n  --namespace cert-manager \\\n  --version v0.12.0\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/#restoring-resources"},"Restore back up resources")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager-backup.yaml\n"))))),(0,n.kt)("h3",{id:"option-b-upgrade-cert-manager-in-an-air-gapped-environment"},"Option B: Upgrade cert-manager in an Air-Gapped Environment"),(0,n.kt)("details",{id:"airgap"},(0,n.kt)("summary",null,"Click to expand"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before you can perform the upgrade, you must prepare your air gapped environment by adding the necessary container images to your private registry and downloading or rendering the required Kubernetes manifest files."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the guide to ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Prepare your Private Registry")," with the images needed for the upgrade.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From a system connected to the internet, add the cert-manager repo to Helm"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fetch the latest cert-manager chart available from the ",(0,n.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/cert-manager/cert-manager"},"Helm chart repository"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch jetstack/cert-manager --version v0.12.0\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Render the cert manager template with the options you would like to use to install the chart. Remember to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"image.repository")," option to pull the image from your private registry. This will create a ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager")," directory with the Kubernetes manifest files."),(0,n.kt)("p",{parentName:"li"},"The Helm 3 command is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm template cert-manager ./cert-manager-v0.12.0.tgz --output-dir . \\\n--namespace cert-manager \\\n--set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller\n--set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook\n--set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector\n")),(0,n.kt)("p",{parentName:"li"},"The Helm 2 command is as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"helm template ./cert-manager-v0.12.0.tgz --output-dir . \\\n--name cert-manager --namespace cert-manager \\\n--set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller\n--set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook\n--set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the required CRD file for cert-manager (old and new)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"curl -L -o cert-manager/cert-manager-crd.yaml https://raw.githubusercontent.com/cert-manager/cert-manager/release-0.12/deploy/manifests/00-crds.yaml\ncurl -L -o cert-manager/cert-manager-crd-old.yaml https://raw.githubusercontent.com/cert-manager/cert-manager/release-X.Y/deploy/manifests/00-crds.yaml\n")))),(0,n.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Back up existing resources as a precaution"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl get -o yaml --all-namespaces \\\nissuer,clusterissuer,certificates,certificaterequests > cert-manager-backup.yaml\n")),(0,n.kt)("admonition",{parentName:"li",title:"Important:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are upgrading from a version older than 0.11.0, Update the apiVersion on all your backed up resources from ",(0,n.kt)("inlineCode",{parentName:"p"},"certmanager.k8s.io/v1alpha1")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1alpha2"),". If you use any cert-manager annotations on any of your other resources, you will need to update them to reflect the new API group. For details, refer to the documentation on ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/#additional-annotation-changes"},"additional annotation changes.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the existing cert-manager installation"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cert-manager \\\ndelete deployment,sa,clusterrole,clusterrolebinding \\\n-l 'app=cert-manager' -l 'chart=cert-manager-v0.5.2'\n")),(0,n.kt)("p",{parentName:"li"},"Delete the CustomResourceDefinition using the link to the version vX.Y you installed"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl delete -f cert-manager/cert-manager-crd-old.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install the CustomResourceDefinition resources separately"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager/cert-manager-crd.yaml\n")),(0,n.kt)("admonition",{parentName:"li",title:"Important:",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you are running Kubernetes v1.15 or below, you will need to add the ",(0,n.kt)("inlineCode",{parentName:"p"},"--validate=false")," flag to your ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command above. Otherwise, you will receive a validation error relating to the ",(0,n.kt)("inlineCode",{parentName:"p"},"x-kubernetes-preserve-unknown-fields")," field in cert-manager\u2019s CustomResourceDefinition resources. This is a benign error and occurs due to the way kubectl performs resource validation."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the namespace for cert-manager"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install cert-manager"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl -n cert-manager apply -R -f ./cert-manager\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/tutorials/backup/#restoring-resources"},"Restore back up resources")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager-backup.yaml\n"))))),(0,n.kt)("h3",{id:"option-c-upgrade-cert-manager-from-versions-15-and-below"},"Option C: Upgrade cert-manager from Versions 1.5 and Below"),(0,n.kt)("details",{id:"normal"},(0,n.kt)("summary",null,"Click to expand"),(0,n.kt)("p",null,"Previously, in order to upgrade cert-manager from an older version, an uninstall and reinstall of Rancher was recommended. Using the method below, you may upgrade cert-manager without those additional steps in order to better preserve your production environment:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"cmctl"),", the cert-manager CLI tool, using ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/cmctl/#installation"},"the installation guide"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that any cert-manager custom resources that may have been stored in etcd at a deprecated API version get migrated to v1:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"cmctl upgrade migrate-api-version\n")),(0,n.kt)("p",{parentName:"li"},"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/usage/cmctl/#migrate-api-version"},"API version migration docs")," for more information. Please also see the ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.5-1.6/"},"docs to upgrade from 1.5 to 1.6")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.6-1.7/"},"docs to upgrade from 1.6. to 1.7")," if needed.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade cert-manager to v1.7.1 with a normal ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade"),". You may go directly from version 1.5 to 1.7 if desired.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the Helm tutorial to ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/topics/kubernetes_apis/#updating-api-versions-of-a-release-manifest"},"update the API version of a release manifest"),". The chart release name is ",(0,n.kt)("inlineCode",{parentName:"p"},"release_name=rancher")," and the release namespace is ",(0,n.kt)("inlineCode",{parentName:"p"},"release_namespace=cattle-system"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the decoded file, search for ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1beta1")," and ",(0,n.kt)("strong",{parentName:"p"},"replace it")," with ",(0,n.kt)("inlineCode",{parentName:"p"},"cert-manager.io/v1"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade Rancher normally with ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade"),".")))),(0,n.kt)("h3",{id:"verify-the-deployment"},"Verify the Deployment"),(0,n.kt)("p",null,"Once you\u2019ve installed cert-manager, you can verify it is deployed correctly by checking the kube-system namespace for running pods:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get pods --namespace cert-manager\n\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-5c6866597-zw7kh               1/1     Running   0          2m\ncert-manager-cainjector-577f6d9fd7-tr77l   1/1     Running   0          2m\ncert-manager-webhook-787858fcdb-nlzsq      1/1     Running   0          2m\n")),(0,n.kt)("h2",{id:"cert-manager-api-change-and-data-migration"},"Cert-Manager API change and data migration"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"New in v2.6.4")),(0,n.kt)("p",null,"Rancher now supports cert-manager versions 1.6.2 and 1.7.1. We recommend v1.7.x because v 1.6.x will reach end-of-life on March 30, 2022. To read more, see the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-install-cert-manager"},"cert-manager docs"),". For instructions on upgrading cert-manager from version 1.5 to 1.6, see the upstream cert-manager documentation ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.5-1.6/"},"here"),". For instructions on upgrading cert-manager from version 1.6 to 1.7, see the upstream cert-manager documentation ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-1.6-1.7/"},"here"),"."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Cert-manager has deprecated the use of the ",(0,n.kt)("inlineCode",{parentName:"p"},"certificate.spec.acme.solvers")," field and will drop support for it completely in an upcoming release."),(0,n.kt)("p",null,"Per the cert-manager documentation, a new format for configuring ACME certificate resources was introduced in v0.8. Specifically, the challenge solver configuration field was moved. Both the old format and new are supported as of v0.9, but support for the old format will be dropped in an upcoming release of cert-manager. The cert-manager documentation strongly recommends that after upgrading you update your ACME Issuer and Certificate resources to the new format."),(0,n.kt)("p",null,"Details about the change and migration instructions can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"cert-manager v0.7 to v0.8 upgrade instructions"),"."),(0,n.kt)("p",null,"The v0.11 release marks the removal of the v1alpha1 API that was used in previous versions of cert-manager, as well as our API group changing to be cert-manager.io instead of certmanager.k8s.io."),(0,n.kt)("p",null,"We have also removed support for the old configuration format that was deprecated in the v0.8 release. This means you must transition to using the new solvers style configuration format for your ACME issuers before upgrading to v0.11. For more information, see the ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.7-0.8/"},"upgrading to v0.8 guide"),"."),(0,n.kt)("p",null,"Details about the change and migration instructions can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/upgrading-0.10-0.11/"},"cert-manager v0.10 to v0.11 upgrade instructions"),"."),(0,n.kt)("p",null,"More info about ",(0,n.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/upgrading/"},"cert-manager upgrade information"),"."))}m.isMDXComponent=!0}}]);