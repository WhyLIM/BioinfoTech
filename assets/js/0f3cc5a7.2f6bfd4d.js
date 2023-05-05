"use strict";(self.webpackChunkbioinfotech=self.webpackChunkbioinfotech||[]).push([[3116],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||o;return t?a.createElement(f,c(c({ref:n},u),{},{components:t})):a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[d]="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},c="Anaconda",i={unversionedId:"Anaconda",id:"Anaconda",title:"Anaconda",description:"\u5b89\u88c5 Anaconda",source:"@site/docs/Anaconda.md",sourceDirName:".",slug:"/Anaconda",permalink:"/BioinfoTech/docs/Anaconda",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Anaconda.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65b0\u7cfb\u7edf\u4f18\u5316",permalink:"/BioinfoTech/docs/\u7cfb\u7edf\u4f18\u5316"},next:{title:"CUDA",permalink:"/BioinfoTech/docs/CUDA"}},l={},p=[{value:"\u5b89\u88c5 Anaconda",id:"\u5b89\u88c5-anaconda",level:2},{value:"\u4e0b\u8f7d .sh \u540e",id:"\u4e0b\u8f7d-sh-\u540e",level:3},{value:"\u8bbe\u7f6e\u9ed8\u8ba4\u4e0d\u8fdb\u5165 base \u73af\u5883",id:"\u8bbe\u7f6e\u9ed8\u8ba4\u4e0d\u8fdb\u5165-base-\u73af\u5883",level:3},{value:"\u8bbe\u7f6e\u7cfb\u7edf\u4f7f\u7528 conda \u7684 python \u73af\u5883",id:"\u8bbe\u7f6e\u7cfb\u7edf\u4f7f\u7528-conda-\u7684-python-\u73af\u5883",level:3},{value:"\u5b89\u88c5 Miniconda",id:"\u5b89\u88c5-miniconda",level:2}],u={toc:p},d="wrapper";function s(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anaconda"},"Anaconda"),(0,r.kt)("h2",{id:"\u5b89\u88c5-anaconda"},"\u5b89\u88c5 Anaconda"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u5305\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://mirror.nju.edu.cn/anaconda/archive/"},"\u5357\u4eac\u5927\u5b66\u955c\u50cf\u7ad9"),"\u4e0b\u8f7d")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5b89\u88c5\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u4e0b\u8f7d-sh-\u540e"},"\u4e0b\u8f7d .sh \u540e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x Anaconda3-2023.03-Linux-x86_64.sh \nbash ./Anaconda3-2023.03-Linux-x86_64.sh\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u9ed8\u8ba4\u4e0d\u8fdb\u5165-base-\u73af\u5883"},"\u8bbe\u7f6e\u9ed8\u8ba4\u4e0d\u8fdb\u5165 base \u73af\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"conda config --set auto_activate_base false\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u7cfb\u7edf\u4f7f\u7528-conda-\u7684-python-\u73af\u5883"},"\u8bbe\u7f6e\u7cfb\u7edf\u4f7f\u7528 conda \u7684 python \u73af\u5883"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gedit ~/.bashrc\n")),(0,r.kt)("p",null,"\u5199\u5165\u5982\u4e0b\u5185\u5bb9\uff0c\u6ce8\u610f\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"/path/to/anaconda3")," \u6539\u4e3a\u81ea\u5df1\u7684\u8def\u5f84"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export PATH="/path/to/anaconda3/bin:$PATH"\n')),(0,r.kt)("p",null,"\u5237\u65b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"source ~/.bashrc\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5-miniconda"},"\u5b89\u88c5 Miniconda"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b89\u88c5\u5305\u540c\u6837\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://mirror.nju.edu.cn/anaconda/miniconda/"},"\u5357\u4eac\u5927\u5b66\u955c\u50cf\u7ad9"),"\u4e0b\u8f7d")),(0,r.kt)("p",null,"\u5b89\u88c5\u8fc7\u7a0b\u4e0e Anaconda \u7684\u5b89\u88c5\u7c7b\u4f3c"))}s.isMDXComponent=!0}}]);