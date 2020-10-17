(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{89:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return f})),t.d(n,"metadata",(function(){return O})),t.d(n,"rightToc",(function(){return y})),t.d(n,"default",(function(){return w}));var o=t(2),a=t(6),r=t(0),l=t.n(r),i=t(90),c=t(97),s=t(92),u=t(86),p=t.n(u),b=37,d=39;var m=function(e){var n=e.block,t=e.children,o=e.defaultValue,a=e.values,i=e.groupId,u=Object(c.a)(),m=u.tabGroupChoices,h=u.setTabGroupChoices,f=Object(r.useState)(o),O=f[0],y=f[1],j=Object(r.useState)(!1),w=j[0],g=j[1];if(null!=i){var v=m[i];null!=v&&v!==O&&a.some((function(e){return e.value===v}))&&y(v)}var x=function(e){y(e),null!=i&&h(i,e)},T=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},C=function(){g(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",N),window.addEventListener("mousedown",C)}),[]),l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n})},a.map((function(e){var n=e.value,t=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(s.a)("tabs__item",p.a.tabItem,{"tabs__item--active":O===n}),style:w?{}:{outline:"none"},key:n,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case b:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(T,e.target,e),N(e)},onFocus:function(){return x(n)},onClick:function(){x(n),g(!1)},onPointerDown:function(){return g(!1)}},t)}))),l.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===O}))[0]))};var h=function(e){return l.a.createElement("div",null,e.children)},f={id:"installation",title:"Manual Installation",sidebar_label:"Manual Installation"},O={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Manual Installation",description:"1. Setup your terminal",source:"@site/docs/installation.mdx",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/installation.mdx",version:"current",sidebar_label:"Manual Installation",sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/upgrading"},next:{title:"Configuration",permalink:"/docs/configure"}},y=[{value:"1. Setup your terminal",id:"1-setup-your-terminal",children:[]},{value:"2. Download the latest binary",id:"2-download-the-latest-binary",children:[]},{value:"3. Download a theme",id:"3-download-a-theme",children:[]},{value:"4. Replace your existing prompt",id:"4-replace-your-existing-prompt",children:[]},{value:"5. Profit",id:"5-profit",children:[]}],j={rightToc:y};function w(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},j,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"1-setup-your-terminal"},"1. Setup your terminal"),Object(i.b)("p",null,"Oh my Posh uses ANSI color codes under the hood, these should work everywhere,\nbut you may have to set ",Object(i.b)("inlineCode",{parentName:"p"},"$TERM")," to ",Object(i.b)("inlineCode",{parentName:"p"},"xterm-256color")," for it to work."),Object(i.b)("p",null,"For maximum enjoyment, make sure to install a powerline enabled font. The fonts I use are patched by ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nerdfonts.com/"}),"Nerd Fonts"),",\nwhich offers a maximum of icons you can use to configure your prompt."),Object(i.b)("p",null,"Oh my Posh was designed using ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Meslo.zip"}),"Meslo LGM NF"),", so if you happen to see missing icons either change to that font or replace the icons\nby changing the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/themes"}),"theme")," to your liking."),Object(i.b)("h3",{id:"2-download-the-latest-binary"},"2. Download the latest binary"),Object(i.b)(m,{defaultValue:"windows",values:[{label:"windows",value:"windows"},{label:"macos",value:"macos"},{label:"unix",value:"unix"}],mdxType:"Tabs"},Object(i.b)(h,{value:"windows",mdxType:"TabItem"},Object(i.b)("p",null,"If you're looking to use the shell in PowerShell, there's a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/powershell"}),"PowerShell package")," for your enjoyment that facilitates the whole process.\nBut, if you insist on doing it manually, or you use a pre-core version of PowerShell, here you go :-)"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),"mkdir C:\\tools\nInvoke-Webrequest https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-windows-amd64.exe -OutFile C:\\tools\\oh-my-posh.exe\n"))),Object(i.b)(h,{value:"macos",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-darwin-amd64 -O /usr/local/bin/oh-my-posh\nchmod +x /usr/local/bin/oh-my-posh\n"))),Object(i.b)(h,{value:"unix",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"wget https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh\nchmod +x /usr/local/bin/oh-my-posh\n")))),Object(i.b)("h3",{id:"3-download-a-theme"},"3. Download a theme"),Object(i.b)("p",null,"Find a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/tree/main/themes"}),"theme")," you like, download it and store it somewhere you can find it again."),Object(i.b)("h3",{id:"4-replace-your-existing-prompt"},"4. Replace your existing prompt"),Object(i.b)(m,{defaultValue:"powershell",values:[{label:"powershell",value:"powershell"},{label:"zsh",value:"zsh"},{label:"bash",value:"bash"},{label:"nix",value:"nix"},{label:"fish",value:"fish"}],mdxType:"Tabs"},Object(i.b)(h,{value:"powershell",mdxType:"TabItem"},Object(i.b)("p",null,"Edit ",Object(i.b)("inlineCode",{parentName:"p"},"$PROFILE")," in your preferred PowerShell version and add the following lines."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-powershell"}),'[ScriptBlock]$Prompt = {\n  $realLASTEXITCODE = $global:LASTEXITCODE\n  & "C:\\tools\\oh-my-posh.exe" -config "~/downloadedtheme.json" -error $realLASTEXITCODE -pwd $PWD\n  $global:LASTEXITCODE = $realLASTEXITCODE\n  Remove-Variable realLASTEXITCODE -Confirm:$false\n}\nSet-Item -Path Function:prompt -Value $Prompt -Force\n'))),Object(i.b)(h,{value:"zsh",mdxType:"TabItem"},Object(i.b)("p",null,"Add the following to ",Object(i.b)("inlineCode",{parentName:"p"},"~/.zshrc"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'function powerline_precmd() {\n    PS1="$(oh-my-posh -config ~/downloadedtheme.json --error $?)"\n}\n\nfunction install_powerline_precmd() {\n  for s in "${precmd_functions[@]}"; do\n    if [ "$s" = "powerline_precmd" ]; then\n      return\n    fi\n  done\n  precmd_functions+=(powerline_precmd)\n}\n\nif [ "$TERM" != "linux" ]; then\n    install_powerline_precmd\nfi\n'))),Object(i.b)(h,{value:"bash",mdxType:"TabItem"},Object(i.b)("p",null,"Add the following to ",Object(i.b)("inlineCode",{parentName:"p"},"~/.bashrc")," (or ",Object(i.b)("inlineCode",{parentName:"p"},"~/.profile")," on MacOS):"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'function _update_ps1() {\n    PS1="$(oh-my-posh -config ~/downloadedtheme.json -error $?)"\n}\n\nif [ "$TERM" != "linux" ] && [ -x "$(command -v oh-my-posh)" ]; then\n    PROMPT_COMMAND="_update_ps1; $PROMPT_COMMAND"\nfi\n'))),Object(i.b)(h,{value:"nix",mdxType:"TabItem"},Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"nix-shell --pure"),", ",Object(i.b)("inlineCode",{parentName:"p"},"oh-my-posh")," will not be accessible, and\nyour prompt will not appear."),Object(i.b)("p",null,"As a workaround you can add this snippet to ",Object(i.b)("inlineCode",{parentName:"p"},"~/.bashrc"),",\nwhich should re-enable the prompt in most cases:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),'# Workaround for nix-shell --pure\nif [ "$IN_NIX_SHELL" == "pure" ]; then\n    if [ -x oh-my-posh ]; then\n        alias powerline-go="oh-my-posh -config ~/downloadedtheme.json"\n    fi\nfi\n'))),Object(i.b)(h,{value:"fish",mdxType:"TabItem"},Object(i.b)("p",null,"Redefine ",Object(i.b)("inlineCode",{parentName:"p"},"fish_prompt")," in ",Object(i.b)("inlineCode",{parentName:"p"},"~/.config/fish/config.fish"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"function fish_prompt\n    eval oh-my-posh -config ~/downloadedtheme.json -error $status\nend\n")))),Object(i.b)("p",null,"Make sure ",Object(i.b)("inlineCode",{parentName:"p"},"~/downloadedtheme.json")," points to your downloaded or adjusted theme. If the theme would be invalid, the default Agnoster prompt is printed."),Object(i.b)("h3",{id:"5-profit"},"5. Profit"),Object(i.b)("p",null,"\ud83c\udf89\ud83c\udf89\ud83c\udf89"))}w.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(t),d=o,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||r;return t?a.a.createElement(m,i(i({ref:n},s),{},{components:t})):a.a.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";function o(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=o(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=o(e))&&(a&&(a+=" "),a+=n);return a}},96:function(e,n,t){"use strict";var o=t(0),a=Object(o.createContext)(void 0);n.a=a},97:function(e,n,t){"use strict";var o=t(0),a=t(96);n.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}}}]);