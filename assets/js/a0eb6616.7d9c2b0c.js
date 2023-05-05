"use strict";(self.webpackChunkbioinfotech=self.webpackChunkbioinfotech||[]).push([[9091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="Git",l={unversionedId:"Git",id:"Git",title:"Git",description:"Git \u5b89\u88c5",source:"@site/docs/Git.md",sourceDirName:".",slug:"/Git",permalink:"/docs/Git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker \u57fa\u672c\u64cd\u4f5c\uff08CentOS\uff09",permalink:"/docs/Docker"},next:{title:"Node.js",permalink:"/docs/Nodejs"}},s={},c=[{value:"Git \u5b89\u88c5",id:"git-\u5b89\u88c5",level:2},{value:"\u751f\u6210 ssh key",id:"\u751f\u6210-ssh-key",level:2},{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u521d\u59cb\u5316\u53ca\u63d0\u4ea4",id:"\u521d\u59cb\u5316\u53ca\u63d0\u4ea4",level:3},{value:"\u5207\u6362\u8fdc\u7a0b\u4ed3\u5e93/\u51b2\u7a81\u89e3\u51b3",id:"\u5207\u6362\u8fdc\u7a0b\u4ed3\u5e93\u51b2\u7a81\u89e3\u51b3",level:3},{value:"\u5173\u4e8e\u5206\u652f",id:"\u5173\u4e8e\u5206\u652f",level:3}],u={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git"},"Git"),(0,i.kt)("h2",{id:"git-\u5b89\u88c5"},"Git \u5b89\u88c5"),(0,i.kt)("p",null,"\u5b89\u88c5\u5f88\u7b80\u5355"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install git\n")),(0,i.kt)("h2",{id:"\u751f\u6210-ssh-key"},"\u751f\u6210 ssh key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t rsa -C "\u586b\u4e00\u4e2a\u90ae\u7bb1"\n')),(0,i.kt)("h2",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316\u53ca\u63d0\u4ea4"},"\u521d\u59cb\u5316\u53ca\u63d0\u4ea4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# \u521d\u59cb\u5316 git \u4ed3\u5e93\ngit init\n# \u5173\u8054\u8fdc\u7a0b\u4ed3\u5e93\ngit remote add origin git@github.com:xxx/xxx.git\n# \u6dfb\u52a0\u5230\u6682\u5b58\u533a\ngit add file\n# \u63d0\u4ea4\u5230\u5de5\u4f5c\u533a\ngit commit -m "message"\n\n# \u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93\n# \u7b2c\u4e00\u6b21\u63d0\u4ea4\ngit push -u origin \u5206\u652f\n# \u540e\u7eed\u4e0d\u9700\u8981 -u\ngit push origin \u5206\u652f\n')),(0,i.kt)("h3",{id:"\u5207\u6362\u8fdc\u7a0b\u4ed3\u5e93\u51b2\u7a81\u89e3\u51b3"},"\u5207\u6362\u8fdc\u7a0b\u4ed3\u5e93/\u51b2\u7a81\u89e3\u51b3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5207\u6362\u8fdc\u7a0b\u4ed3\u5e93\ngit remote set-url origin <new url>\n# \u672c\u5730\u4e0e\u8fdc\u7a0b\u4e0d\u4e00\u81f4\uff0c\u62c9\u53d6\u4e00\u4e0b\u8fdc\u7a0b\ngit pull origin master\n# \u53ef\u80fd\u4f1a\u51fa\u73b0 MERGING \u9519\u8bef\n# \u653e\u5f03\u672c\u5730\u5185\u5bb9\uff0c\u4f7f\u5176\u4e0e\u8fdc\u7a0b\u4e00\u81f4\ngit reset --hard origin/master\n# \u4fee\u6539\u672c\u5730\u548c\u8fdc\u7a0b\u5206\u652f\u7684\u5173\u8054\ngit branch --set-upstream-to=origin/remote_branch your_branch\n")),(0,i.kt)("h3",{id:"\u5173\u4e8e\u5206\u652f"},"\u5173\u4e8e\u5206\u652f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u5206\u652f\ngit branch\n# \u5207\u6362\u5206\u652f\ngit checkout br\n# \u521b\u5efa\u5e76\u5207\u6362\u5206\u652f\ngit checkout -b br\n# \u5408\u5e76\u5206\u652f br \u5230\u5f53\u524d\u5206\u652f\ngit merge br\n# \u5220\u9664\u672c\u5730\u5206\u652f\ngit branch -D br\n# \u5220\u9664\u8fdc\u7a0b\u5206\u652f\ngit push origin :br\n\n# \u76ee\u524d git \u53ea\u80fd\u4e0a\u4f20\u5230 master \u5206\u652f\uff0cmain \u4f1a\u62a5\u9519\uff0c\u901a\u8fc7\u5408\u5e76\u5206\u652f\u89e3\u51b3\n# \u672c\u5730\u521b\u5efa main \u5206\u652f\ngit checkout -b main\n# \u5c06 master \u5206\u652f\u5408\u5e76\u5230 main \u4e0a\ngit merge master\n# git pull origin main \u4f1a\u62a5\u9519\uff1arefusing to merge unrelated histories\ngit pull origin main --allow-unrelated-histories\ngit push origin main\n")))}g.isMDXComponent=!0}}]);