"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(r),g=n,m=h["".concat(l,".").concat(g)]||h[g]||u[g]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={slug:"2021-07-03/k3s-cluster-with-vsphere-storage-part-iv",title:"K3S Cluster with vSphere Storage (Part IV)",authors:["Peter"],tags:["Rancher","Kubernetes","Storage","K3S","VMWare"],image:"k3s_vsphere_part4.png"},s="K3S Cluster with vSphere Storage [Part IV]",i={permalink:"/2021-07-03/k3s-cluster-with-vsphere-storage-part-iv",source:"@site/blog/2021-07-30-k3s-vsphere-part4/index.md",title:"K3S Cluster with vSphere Storage (Part IV)",description:"K3S Cluster with vSphere Storage Hero",date:"2021-07-30T00:00:00.000Z",formattedDate:"July 30, 2021",tags:[{label:"Rancher",permalink:"/tags/rancher"},{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"Storage",permalink:"/tags/storage"},{label:"K3S",permalink:"/tags/k-3-s"},{label:"VMWare",permalink:"/tags/vm-ware"}],readingTime:5.835,hasTruncateMarker:!0,authors:[{name:"Peter Keech",title:"DevOps Engineer",url:"https://github.com/pkeech",imageURL:"https://github.com/pkeech.png",key:"Peter"}],frontMatter:{slug:"2021-07-03/k3s-cluster-with-vsphere-storage-part-iv",title:"K3S Cluster with vSphere Storage (Part IV)",authors:["Peter"],tags:["Rancher","Kubernetes","Storage","K3S","VMWare"],image:"k3s_vsphere_part4.png"},prevItem:{title:"K3S Cluster with vSphere Storage (Part III)",permalink:"/2021-07-03/k3s-cluster-with-vsphere-storage-part-iii"},nextItem:{title:"Rancher Academy",permalink:"/2021-04-16/rancher-academy"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:" K3S Cluster with vSphere Storage Hero",src:r(2206).Z,width:"1400",height:"933"})),(0,n.kt)("p",null,"Having followed along with the previous 3 blog posts, you should have a cluster that is one small step away from demonstrating the storage capabilities. In this final part of the series, we will perform our final configurations and demonstrate the simplicity of our storage solution."))}u.isMDXComponent=!0},2206:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/k3s_vsphere_part4-9c736185f2b2ffb46091a6f0982203d8.png"}}]);