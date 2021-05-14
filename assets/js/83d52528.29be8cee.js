(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4234],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},585:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var i=n(2122),a=n(9756),o=(n(7294),n(3905)),r={id:"git",title:"Git",sidebar_label:"Git"},l={unversionedId:"git",id:"git",isDocsHomePage:!1,title:"Git",description:"What",source:"@site/docs/segment-git.md",sourceDirName:".",slug:"/git",permalink:"/docs/git",editUrl:"https://github.com/jandedobbeleer/oh-my-posh/edit/main/docs/docs/segment-git.md",version:"current",sidebar_label:"Git",frontMatter:{id:"git",title:"Git",sidebar_label:"Git"},sidebar:"docs",previous:{title:"Exit code",permalink:"/docs/exit"},next:{title:"Posh-Git",permalink:"/docs/poshgit"}},s=[{value:"What",id:"what",children:[]},{value:"Sample Configuration",id:"sample-configuration",children:[]},{value:"Properties",id:"properties",children:[{value:"Standard",id:"standard",children:[]},{value:"Status",id:"status",children:[]},{value:"HEAD context",id:"head-context",children:[]},{value:"Upstream context",id:"upstream-context",children:[]},{value:"Colors",id:"colors",children:[]}]}],d={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what"},"What"),(0,o.kt)("p",null,"Display ",(0,o.kt)("inlineCode",{parentName:"p"},"git status")," information when in a git repository. Also works for subfolders.\nLocal changes can also shown by default using the following syntax for both the working and staging area:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"+")," added"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"~")," modified"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-")," deleted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"?")," untracked")),(0,o.kt)("h2",{id:"sample-configuration"},"Sample Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "git",\n  "style": "powerline",\n  "powerline_symbol": "\\uE0B0",\n  "foreground": "#193549",\n  "background": "#ffeb3b",\n  "properties": {\n    "display_stash_count": true,\n    "display_upstream_icon": true\n  }\n}\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"standard"},"Standard"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"branch_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to use in front of the git branch name - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE0A0 ")),(0,o.kt)("li",{parentName:"ul"},"display_branch_status: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display the branch status or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"branch_identical_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when remote and local are identical - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2261")),(0,o.kt)("li",{parentName:"ul"},"branch_ahead_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when the local branch is ahead of its remote - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2191")),(0,o.kt)("li",{parentName:"ul"},"branch_behind_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when the local branch is behind its remote - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2193")),(0,o.kt)("li",{parentName:"ul"},"branch_gone_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display when there's no remote branch - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\u2262"))),(0,o.kt)("h3",{id:"status"},"Status"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"display_status: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display the local changes or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"display_status_detail: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display the local changes in detail or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"display_stash_count: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," show stash count or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"status_separator_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display between staging and working area changes - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"}," |")),(0,o.kt)("li",{parentName:"ul"},"local_working_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display in front of the working area changes - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF044")),(0,o.kt)("li",{parentName:"ul"},"local_staged_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - the icon to display in front of the staged area changes - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF046")),(0,o.kt)("li",{parentName:"ul"},"stash_count_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display before the stash context - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF692"))),(0,o.kt)("h3",{id:"head-context"},"HEAD context"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"commit_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the commit context (detached HEAD) - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF417")),(0,o.kt)("li",{parentName:"ul"},"tag_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the tag context - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF412")),(0,o.kt)("li",{parentName:"ul"},"rebase_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the context when in a rebase - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE728 ")),(0,o.kt)("li",{parentName:"ul"},"cherry_pick_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display before the context when doing a cherry-pick - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE29B ")),(0,o.kt)("li",{parentName:"ul"},"merge_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display before the merge context - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE727 ")),(0,o.kt)("li",{parentName:"ul"},"no_commits_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," icon/text to display when there are no commits in the repo - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF594 "))),(0,o.kt)("h3",{id:"upstream-context"},"Upstream context"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"display_upstream_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - display upstream icon or not - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"github_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Github - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF408 ")),(0,o.kt)("li",{parentName:"ul"},"gitlab_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Gitlab - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF296 ")),(0,o.kt)("li",{parentName:"ul"},"bitbucket_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is Bitbucket - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uF171 ")),(0,o.kt)("li",{parentName:"ul"},"git_icon: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - icon/text to display when the upstream is not known/mapped - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"\\uE5FB "))),(0,o.kt)("h3",{id:"colors"},"Colors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"working_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - foreground color for the working area status - defaults to segment foreground"),(0,o.kt)("li",{parentName:"ul"},"staging_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - foreground color for the staging area status - defaults to segment foreground"),(0,o.kt)("li",{parentName:"ul"},"status_colors_enabled: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - color the segment based on the repository status - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"false")),(0,o.kt)("li",{parentName:"ul"},"color_background: ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - color background or foreground - defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"local_changes_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when there are local changes - defaults to segment\nforeground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")"),(0,o.kt)("li",{parentName:"ul"},"ahead_and_behind_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when the branch is ahead and behind -\ndefaults to segment foreground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")"),(0,o.kt)("li",{parentName:"ul"},"behind_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when the branch is behind - defaults to segment\nforeground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")"),(0,o.kt)("li",{parentName:"ul"},"ahead_color: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/configure#colors"},"color")," - segment color when the branch is ahead - defaults to segment\nforeground/background (see ",(0,o.kt)("inlineCode",{parentName:"li"},"color_background"),")")))}c.isMDXComponent=!0}}]);