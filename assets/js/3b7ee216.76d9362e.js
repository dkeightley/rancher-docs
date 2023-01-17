"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,k=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"2. Install Kubernetes"},l=void 0,s={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",title:"2. Install Kubernetes",description:"Once the infrastructure is ready, you can continue with setting up a Kubernetes cluster to install Rancher in.",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1673860649,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{title:"2. Install Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"1. Set up Infrastructure",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/set-up-infrastructure"},next:{title:"3. Install Rancher",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"}},i={},u=[{value:"Air-gapped proxy",id:"air-gapped-proxy",level:4},{value:"Creating the RKE Cluster",id:"creating-the-rke-cluster",level:3},{value:"Save Your Files",id:"save-your-files",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=c("Tabs"),d=c("TabItem"),h={toc:u};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once the infrastructure is ready, you can continue with setting up a Kubernetes cluster to install Rancher in."),(0,a.kt)("p",null,"The steps to set up RKE, RKE2, or K3s are shown below."),(0,a.kt)("p",null,"For convenience, export the IP address and port of your proxy into an environment variable and set up the HTTP_PROXY variables for your current shell on every node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export proxy_host="10.0.0.5:8888"\nexport HTTP_PROXY=http://${proxy_host}\nexport HTTPS_PROXY=http://${proxy_host}\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16\n')),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"K3s",mdxType:"TabItem"},(0,a.kt)("p",null,"First configure the HTTP proxy settings on the K3s systemd service, so that K3s's containerd can pull images through the proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat <<'EOF' | sudo tee /etc/default/k3s > /dev/null\nHTTP_PROXY=http://${proxy_host}\nHTTPS_PROXY=http://${proxy_host}\"\nNO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\nEOF\n")),(0,a.kt)("p",null,"Then run the K3s installation script to create a new K3s cluster. Ensure that the K3s version you are installing is ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"supported by Rancher"),"."),(0,a.kt)("p",null,"On the first node, create a new cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=v1.xx K3S_TOKEN=your_secret sh -s - server --cluster-init\n")),(0,a.kt)("p",null,"And then join the other nodes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=v1.xx K3S_TOKEN=your_secret sh -s - server --server https://<ip or hostname of server1>:6443\n")),(0,a.kt)("p",null,"For more information on installing K3s see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.k3s.io/installation"},"K3s installation docs"),"."),(0,a.kt)("p",null,"To have a look at your cluster run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl cluster-info\nkubectl get pods --all-namespaces\n"))),(0,a.kt)(d,{value:"RKE2",mdxType:"TabItem"},(0,a.kt)("p",null,"On every node, run the RKE2 installation script. Ensure that the RKE2 version you are installing is ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/"},"supported by Rancher"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sfL https://get.rke2.io | INSTALL_RKE2_CHANNEL=v1.xx sh -\n")),(0,a.kt)("p",null,"Then you have to configure the HTTP proxy settings on the RKE2 systemd service, so that RKE2's containerd can pull images through the proxy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat <<'EOF' | sudo tee /etc/default/rke2-server > /dev/null\nHTTP_PROXY=http://${proxy_host}\nHTTPS_PROXY=http://${proxy_host}\"\nNO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16,.svc,.cluster.local\nEOF\n")),(0,a.kt)("p",null,"Next create the RKE2 configuration file on every node following the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/ha"},"RKE2 High Availability documentation"),"."),(0,a.kt)("p",null,"After that start and enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-server")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl enable rke2-server.service\nsystemctl start rke2-server.service\n")),(0,a.kt)("p",null,"For more information on installing RKE2 see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/"},"RKE2 installation docs"),"."),(0,a.kt)("p",null,"To have a look at your cluster run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export KUBECONFIG=/etc/rancher/rke2/rke2.yaml\nalias kubectl=/var/lib/rancher/rke2/bin/kubectl\nkubectl cluster-info\nkubectl get pods --all-namespaces\n"))),(0,a.kt)(d,{value:"RKE",mdxType:"TabItem"},(0,a.kt)("p",null,"First, you have to install Docker and setup the HTTP proxy on all three Linux nodes. For this perform the following steps on all three nodes."),(0,a.kt)("p",null,"Next configure apt to use this proxy when installing packages. If you are not using Ubuntu, you have to adapt this step accordingly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'cat <<\'EOF\' | sudo tee /etc/apt/apt.conf.d/proxy.conf > /dev/null\nAcquire::http::Proxy "http://${proxy_host}/";\nAcquire::https::Proxy "http://${proxy_host}/";\nEOF\n')),(0,a.kt)("p",null,"Now you can install Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sL https://releases.rancher.com/install-docker/19.03.sh | sh\n")),(0,a.kt)("p",null,"Then ensure that your current user is able to access the Docker daemon without sudo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo usermod -aG docker YOUR_USERNAME\n")),(0,a.kt)("p",null,"And configure the Docker daemon to use the proxy to pull images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'sudo mkdir -p /etc/systemd/system/docker.service.d\ncat <<\'EOF\' | sudo tee /etc/systemd/system/docker.service.d/http-proxy.conf > /dev/null\n[Service]\nEnvironment="HTTP_PROXY=http://${proxy_host}"\nEnvironment="HTTPS_PROXY=http://${proxy_host}"\nEnvironment="NO_PROXY=127.0.0.0/8,10.0.0.0/8,cattle-system.svc,172.16.0.0/12,192.168.0.0/16"\nEOF\n')),(0,a.kt)("p",null,"To apply the configuration, restart the Docker daemon:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\nsudo systemctl restart docker\n")),(0,a.kt)("h4",{id:"air-gapped-proxy"},"Air-gapped proxy"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"New in v2.6.4")),(0,a.kt)("p",null,"You can now provision node driver clusters from an air-gapped cluster configured to use a proxy for outbound connections."),(0,a.kt)("p",null,"In addition to setting the default rules for a proxy server, you will need to add additional rules, shown below, to provision node driver clusters from a proxied Rancher environment."),(0,a.kt)("p",null,"You will configure your filepath according to your setup, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apt/apt.conf.d/proxy.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"acl SSL_ports port 22\nacl SSL_ports port 2376\n\nacl Safe_ports port 22      # ssh\nacl Safe_ports port 2376    # docker port\n")),(0,a.kt)("h3",{id:"creating-the-rke-cluster"},"Creating the RKE Cluster"),(0,a.kt)("p",null,"You need several command line tools on the host where you have SSH access to the Linux nodes to create and interact with the cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#download-the-rke-binary"},"RKE CLI binary"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo curl -fsSL -o /usr/local/bin/rke https://github.com/rancher/rke/releases/download/v1.1.4/rke_linux-amd64\nsudo chmod +x /usr/local/bin/rke\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl -LO "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"\nchmod +x ./kubectl\nsudo mv ./kubectl /usr/local/bin/kubectl\n')),(0,a.kt)("p",null,"Next, create a YAML file that describes the RKE cluster. Ensure that the IP addresses of the nodes and the SSH username are correct. For more information on the cluster YAML, have a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE documentation"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"nodes:\n  - address: 10.0.1.200\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.201\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n  - address: 10.0.1.202\n    user: ubuntu\n    role: [controlplane,worker,etcd]\n\nservices:\n  etcd:\n    backup_config:\n      interval_hours: 12\n      retention: 6\n")),(0,a.kt)("p",null,"After that, you can create the Kubernetes cluster by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yaml\n")),(0,a.kt)("p",null,"RKE creates a state file called ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-cluster.rkestate"),", this is needed if you want to perform updates, modify your cluster configuration or restore it from a backup. It also creates a ",(0,a.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yaml")," file, that you can use to connect to the remote Kubernetes cluster locally with tools like kubectl or Helm. Make sure to save all of these files in a secure location, for example by putting them into a version control system."),(0,a.kt)("p",null,"To have a look at your cluster run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export KUBECONFIG=kube_config_cluster.yaml\nkubectl cluster-info\nkubectl get pods --all-namespaces\n")),(0,a.kt)("p",null,"You can also verify that your external load balancer works, and the DNS entry is set up correctly. If you send a request to either, you should receive HTTP 404 response from the ingress controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ curl 10.0.1.100\ndefault backend - 404\n$ curl rancher.example.com\ndefault backend - 404\n")),(0,a.kt)("h3",{id:"save-your-files"},"Save Your Files"),(0,a.kt)("admonition",{title:"Important:",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster.")),(0,a.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains the current state of the cluster including the RKE configuration and the certificates.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.')))),(0,a.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," page."),(0,a.kt)("h3",{id:"next-install-rancher"},(0,a.kt)("a",{parentName:"h3",href:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"},"Next: Install Rancher")))}k.isMDXComponent=!0}}]);