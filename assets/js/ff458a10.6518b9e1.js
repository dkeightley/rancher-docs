"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58658],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=n,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={title:"OpenLDAP Configuration Reference"},o=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference",title:"OpenLDAP Configuration Reference",description:"This section is intended to be used as a reference when setting up an OpenLDAP authentication provider in Rancher.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/configure-openldap/openldap-config-reference.md",tags:[],version:"current",lastUpdatedAt:1667002146,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{title:"OpenLDAP Configuration Reference"},sidebar:"tutorialSidebar",previous:{title:"Configuring OpenLDAP",permalink:"/pages-for-subheaders/configure-openldap"},next:{title:"Configuring Microsoft Active Directory Federation Service (SAML)",permalink:"/pages-for-subheaders/configure-microsoft-ad-federation-service-saml"}},u={},l=[{value:"Background: OpenLDAP Authentication Flow",id:"background-openldap-authentication-flow",level:2},{value:"OpenLDAP Server Configuration",id:"openldap-server-configuration",level:2},{value:"User/Group Schema Configuration",id:"usergroup-schema-configuration",level:2},{value:"User Schema Configuration",id:"user-schema-configuration",level:3},{value:"Group Schema Configuration",id:"group-schema-configuration",level:3}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This section is intended to be used as a reference when setting up an OpenLDAP authentication provider in Rancher."),(0,n.kt)("p",null,"For further details on configuring OpenLDAP, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.openldap.org/doc/"},"official documentation.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Before you proceed with the configuration, please familiarize yourself with the concepts of ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/authentication-config#external-authentication-configuration-and-principal-users"},"External Authentication Configuration and Principal Users"),".")),(0,n.kt)("h2",{id:"background-openldap-authentication-flow"},"Background: OpenLDAP Authentication Flow"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"When a user attempts to login with LDAP credentials, Rancher creates an initial bind to the LDAP server using a service account with permissions to search the directory and read user/group attributes."),(0,n.kt)("li",{parentName:"ol"},"Rancher then searches the directory for the user by using a search filter based on the provided username and configured attribute mappings."),(0,n.kt)("li",{parentName:"ol"},"Once the user has been found, they are authenticated with another LDAP bind request using the user's DN and provided password."),(0,n.kt)("li",{parentName:"ol"},"Once authentication succeeded, Rancher then resolves the group memberships both from the membership attribute in the user's object and by performing a group search based on the configured user mapping attribute.")),(0,n.kt)("h2",{id:"openldap-server-configuration"},"OpenLDAP Server Configuration"),(0,n.kt)("p",null,"You will need to enter the address, port, and protocol to connect to your OpenLDAP server. ",(0,n.kt)("inlineCode",{parentName:"p"},"389")," is the standard port for insecure traffic, ",(0,n.kt)("inlineCode",{parentName:"p"},"636")," for TLS traffic."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Using TLS?")),(0,n.kt)("p",{parentName:"blockquote"},"If the certificate used by the OpenLDAP server is self-signed or not from a recognized certificate authority, make sure have at hand the CA certificate (concatenated with any intermediate certificates) in PEM format. You will have to paste in this certificate during the configuration so that Rancher is able to validate the certificate chain.")),(0,n.kt)("p",null,"If you are in doubt about the correct values to enter in the user/group Search Base configuration fields, consult your LDAP administrator or refer to the section ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory#annex-identify-search-base-and-schema-using-ldapsearch"},"Identify Search Base and Schema using ldapsearch")," in the Active Directory authentication documentation."),(0,n.kt)("figcaption",null,"OpenLDAP Server Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Hostname"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify the hostname or IP address of the OpenLDAP server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specify the port at which the OpenLDAP server is listening for connections. Unencrypted LDAP normally uses the standard port of 389, while LDAPS uses port 636.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TLS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Check this box to enable LDAP over SSL/TLS (commonly known as LDAPS). You will also need to paste in the CA certificate if the server uses a self-signed/enterprise-signed certificate.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Server Connection Timeout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The duration in number of seconds that Rancher waits before considering the server unreachable.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Service Account Distinguished Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enter the Distinguished Name (DN) of the user that should be used to bind, search and retrieve LDAP entries.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Service Account Password"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The password for the service account.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User Search Base"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Enter the Distinguished Name of the node in your directory tree from which to start searching for user objects. All users must be descendents of this base DN. For example: "ou=people,dc=acme,dc=com".')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Group Search Base"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If your groups live under a different node than the one configured under ",(0,n.kt)("inlineCode",{parentName:"td"},"User Search Base"),' you will need to provide the Distinguished Name here. Otherwise leave this field empty. For example: "ou=groups,dc=acme,dc=com".')))),(0,n.kt)("h2",{id:"usergroup-schema-configuration"},"User/Group Schema Configuration"),(0,n.kt)("p",null,"If your OpenLDAP directory deviates from the standard OpenLDAP schema, you must complete the ",(0,n.kt)("strong",{parentName:"p"},"Customize Schema")," section to match it."),(0,n.kt)("p",null,"Note that the attribute mappings configured in this section are used by Rancher to construct search filters and resolve group membership. It is therefore always recommended to verify that the configuration here matches the schema used in your OpenLDAP."),(0,n.kt)("p",null,"If you are unfamiliar with the user/group schema used in the OpenLDAP server, consult your LDAP administrator or refer to the section ",(0,n.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-active-directory#annex-identify-search-base-and-schema-using-ldapsearch"},"Identify Search Base and Schema using ldapsearch")," in the Active Directory authentication documentation."),(0,n.kt)("h3",{id:"user-schema-configuration"},"User Schema Configuration"),(0,n.kt)("p",null,"The table below details the parameters for the user schema configuration."),(0,n.kt)("figcaption",null,"User Schema Configuration Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the object class used for user objects in your domain. If defined, only specify the name of the object class - ",(0,n.kt)("em",{parentName:"td"},"don't")," include it in an LDAP wrapper such as &(objectClass=xxxx)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Username Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The user attribute whose value is suitable as a display name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Login Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The attribute whose value matches the username part of credentials entered by your users when logging in to Rancher. This is typically ",(0,n.kt)("inlineCode",{parentName:"td"},"uid"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User Member Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The user attribute containing the Distinguished Name of groups a user is member of. Usually this is one of ",(0,n.kt)("inlineCode",{parentName:"td"},"memberOf")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"isMemberOf"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},'When a user enters text to add users or groups in the UI, Rancher queries the LDAP server and attempts to match users by the attributes provided in this setting. Multiple attributes can be specified by separating them with the pipe ("',"|",'") symbol.')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"User Enabled Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"If the schema of your OpenLDAP server supports a user attribute whose value can be evaluated to determine if the account is disabled or locked, enter the name of that attribute. The default OpenLDAP schema does not support this and the field should usually be left empty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disabled Status Bitmask"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This is the value for a disabled/locked user account. The parameter is ignored if ",(0,n.kt)("inlineCode",{parentName:"td"},"User Enabled Attribute")," is empty.")))),(0,n.kt)("h3",{id:"group-schema-configuration"},"Group Schema Configuration"),(0,n.kt)("p",null,"The table below details the parameters for the group schema configuration."),(0,n.kt)("figcaption",null,"Group Schema Configuration Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Object Class"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the object class used for group entries in your domain. If defined, only specify the name of the object class - ",(0,n.kt)("em",{parentName:"td"},"don't")," include it in an LDAP wrapper such as &(objectClass=xxxx)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Name Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The group attribute whose value is suitable for a display name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Group Member User Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the ",(0,n.kt)("strong",{parentName:"td"},"user attribute")," whose format matches the group members in the ",(0,n.kt)("inlineCode",{parentName:"td"},"Group Member Mapping Attribute"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Group Member Mapping Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the group attribute containing the members of a group.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Search Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Attribute used to construct search filters when adding groups to clusters or projects in the UI. See description of user schema ",(0,n.kt)("inlineCode",{parentName:"td"},"Search Attribute"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Group DN Attribute"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the group attribute whose format matches the values in the user's group membership attribute. See  ",(0,n.kt)("inlineCode",{parentName:"td"},"User Member Attribute"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Nested Group Membership"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This settings defines whether Rancher should resolve nested group memberships. Use only if your organization makes use of these nested memberships (ie. you have groups that contain other groups as members). This option is disabled if you are using Shibboleth.")))))}p.isMDXComponent=!0}}]);