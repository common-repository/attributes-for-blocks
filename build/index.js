(()=>{var t,e={947:(t,e,s)=>{"use strict";const r=window.wp.hooks,o=window.wp.blocks,i=window.wp.element,a=window.wp.compose,n=window.wp.i18n,l=window.wp.blockEditor,c=window.wp.components,d=window.wp.data,u=window.wp.editor,b=window.wp.primitives,h=window.ReactJSXRuntime,p=(0,h.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,h.jsx)(b.Path,{d:"M6 4a2 2 0 0 0-2 2v3h1.5V6a.5.5 0 0 1 .5-.5h3V4H6Zm3 14.5H6a.5.5 0 0 1-.5-.5v-3H4v3a2 2 0 0 0 2 2h3v-1.5Zm6 1.5v-1.5h3a.5.5 0 0 0 .5-.5v-3H20v3a2 2 0 0 1-2 2h-3Zm3-16a2 2 0 0 1 2 2v3h-1.5V6a.5.5 0 0 0-.5-.5h-3V4h3Z"})}),f=(0,h.jsx)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,h.jsx)(b.Path,{d:"M12 4.75a7.25 7.25 0 100 14.5 7.25 7.25 0 000-14.5zM3.25 12a8.75 8.75 0 1117.5 0 8.75 8.75 0 01-17.5 0zM12 8.75a1.5 1.5 0 01.167 2.99c-.465.052-.917.44-.917 1.01V14h1.5v-.845A3 3 0 109 10.25h1.5a1.5 1.5 0 011.5-1.5zM11.25 15v1.5h1.5V15h-1.5z"})}),k=({children:t,as:e="div",...s})=>(0,i.createElement)(e,{dangerouslySetInnerHTML:{__html:t},...s}),m=()=>{const[t,e]=(0,i.useState)(!1);return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(c.Button,{variant:"secondary",className:"wsd-afb__button-help","aria-label":(0,n.__)("Show Attributes for Blocks help","attributes-for-blocks"),onClick:()=>e(!0),icon:f}),t&&(0,h.jsx)(c.Modal,{title:(0,n.__)("Attributes for Blocks help","attributes-for-blocks"),onRequestClose:()=>e(!1),className:"wsd-afb__help",style:{maxWidth:720},children:(0,h.jsxs)("div",{className:"wsd-afb__help__content",children:[(0,h.jsx)("h3",{children:(0,n.__)("How do I add an attribute?","attributes-for-blocks")}),(0,h.jsx)("p",{children:(0,n.__)('Type an attribute name into the "Add attribute" field and press "Add" to add an attribute for the block. A new input with the attribute\'s name should appear below, into which you can optionally insert the attribute value.',"attributes-for-blocks")}),(0,h.jsx)(k,{as:"p",children:`\n\t\t\t\t\t\t\t${(0,n.__)("Example attributes: ","attributes-for-blocks")}\n\t\t\t\t\t\t\t<code>style</code>,\n\t\t\t\t\t\t\t<code>title</code>,\n\t\t\t\t\t\t\t<code>target</code>,\n\t\t\t\t\t\t\t<code>class</code>,\n\t\t\t\t\t\t\t<code>id</code>,\n\t\t\t\t\t\t\t<code>onClick</code>,\n\t\t\t\t\t\t\t<code>data-*</code>,\n\t\t\t\t\t\t\t<code>aria-*</code>.\n\t\t\t\t\t\t`}),(0,h.jsx)("h3",{children:(0,n.__)("Why is the input disabled?","attributes-for-blocks")}),(0,h.jsx)(k,{as:"p",children:`\n\t\t\t\t\t\t\t${(0,n.__)("When the current user doesn't have `unfiltered_html` capabilities attributes cannot be added and all existing attributes are stripped when the post is updated.","attributes-for-blocks")}\n\t\t\t\t\t\t`}),(0,h.jsx)("h3",{children:(0,n.__)("How does it work?","attributes-for-blocks")}),(0,h.jsx)(k,{as:"p",children:`\n\t\t\t\t\t\t\t${(0,n.__)("For regular blocks, attributes are added to the block save content's root element, meaning they will be rendered only on the front end and not in the editor. For dynamic blocks the attributes are added via `render_callback` function and they may also be applied in the editor, depending if the block is rendered server or client side.","attributes-for-blocks")}\n\t\t\t\t\t\t`}),(0,h.jsx)("h3",{children:(0,n.__)("Does it work for every block?","attributes-for-blocks")}),(0,h.jsx)(k,{as:"p",children:`\n\t\t\t\t\t\t\t${(0,n.__)("It should work with normal blocks that render a valid WP Element that can utilize the `blocks.getSaveContent.extraProps` filter as well as dynamic blocks that utilize a `render_callback`. Third party blocks that do something unorthodox may not work.","attributes-for-blocks")}\n\t\t\t\t\t\t`}),(0,h.jsx)("h3",{children:(0,n.__)("Modes","attributes-for-blocks")}),(0,h.jsx)("p",{children:(0,n.__)("You can change between modes by clicking the button next to the input where the attribute value is specified.","attributes-for-blocks")}),(0,h.jsx)("h4",{children:(0,n.__)("Merge mode (default)","attributes-for-blocks")}),(0,h.jsx)("p",{children:(0,n.__)("In merge mode, when a block has already defined the attribute you're trying to add, the values are merged.","attributes-for-blocks")}),(0,h.jsx)("h4",{children:(0,n.__)("Override mode","attributes-for-blocks")}),(0,h.jsx)("p",{children:(0,n.__)("In override mode, when a block has already defined the attribute you're trying to add, the value is completely replaced with the provided value. You can switch between modes by clicking the intersecting arrows button next to the attribute input.","attributes-for-blocks")}),(0,h.jsx)("h3",{children:(0,n.__)("What happens when I disable this plugin?","attributes-for-blocks")}),(0,h.jsx)("p",{children:(0,n.__)('Blocks with custom attributes may become invalid, depending on which attributes you\'ve added. From there you can recover the block without the custom attributes by clicking "Attempt Block Recovery" or keep the block with custom attributes as HTML by choosing "Convert to HTML". If you don\'t want to risk blocks becoming invalid you need to remove all custom attributes before disabling the plugin.',"attributes-for-blocks")}),(0,h.jsx)("h3",{children:(0,n.__)("Common attributes","attributes-for-blocks")}),(0,h.jsx)("h4",{children:(0,n.__)("Style attribute","attributes-for-blocks")}),(0,h.jsx)(k,{as:"p",children:`\n\t\t\t\t\t\t\t${(0,n.__)("Inline styles can be defined as text.","attributes-for-blocks")}\n\t\t\t\t\t\t\t${(0,n.__)("Example:","attributes-for-blocks")} <code>color:red;font-weight:bold</code><br>\n\t\t\t\t\t\t\t${(0,n.__)("Spaces are allowed, leading or trailing semicolons are not needed.","attributes-for-blocks")}<br>\n\t\t\t\t\t\t\t${(0,n.__)("Styles are not rendered in the block editor.","attributes-for-blocks")}\n\t\t\t\t\t\t`}),(0,h.jsx)("h5",{children:(0,n.__)("Advanced editor","attributes-for-blocks")}),(0,h.jsx)(k,{as:"p",children:`\n\t\t\t\t\t\t\t${(0,n.__)('Style attribute can be edited with an advanced editor by clicking "Toggle editor".',"attributes-for-blocks")}\n\t\t\t\t\t\t`}),(0,h.jsx)("h4",{children:(0,n.__)("ID attribute","attributes-for-blocks")}),(0,h.jsx)("p",{children:(0,n.__)('If the block supports it, you should use the built-in "HTML anchor" feature instead.',"attributes-for-blocks")}),(0,h.jsx)("h4",{children:(0,n.__)("Class attribute","attributes-for-blocks")}),(0,h.jsx)("p",{children:(0,n.__)('HTML class attribute can be defined with the regular "class" or React\'s "className" attribute (non-dynamic blocks). Results (merging/overriding) may vary depending on the block. If the block supports it, you should use the built-in "Additional CSS Class" feature instead.',"attributes-for-blocks")})]})})]})};window.React;var _=s(676);const g=_.default||_,y="-afb-placeholder",w="-afb-space",v=({toggleStyleEditor:t,resetStyles:e})=>(0,h.jsxs)("p",{style:{marginBottom:0},children:[(0,h.jsx)("span",{style:{color:"red"},children:(0,n.__)("Unable to parse styles.","attributes-for-blocks")})," ",(0,h.jsx)("a",{href:"#",onClick:t,children:(0,n.__)("Edit","attributes-for-blocks")}),` ${(0,n.__)("or","attributes-for-blocks")} `,(0,h.jsx)("a",{href:"#",onClick:e,children:(0,n.__)("Clear value","attributes-for-blocks")})]}),x=t=>t.replaceAll(":","").replaceAll(";",""),j=(t,e=!0)=>{const s=()=>{const e=document.querySelector(t);null!==e&&e.focus()};e?setTimeout(s,50):s()},A=({value:t,onChange:e,toggleStyleEditor:s})=>{const[r,o]=(0,i.useState)(!1);let a;try{a=g(t)}catch(t){const r=t=>(t.preventDefault(),e(""),!1);return(0,h.jsx)(v,{toggleStyleEditor:s,resetStyles:r})}a||(a={[y]:y});const l=s=>{const r=Object.keys(s).map((t=>""===t?y:t)).map((t=>{let e=s[t]||y;return" "===e[e.length-1]&&(e=e.slice(0,-1)+w),`${t}: ${e};`})).join(" ");t!==r&&e(r)},d=Object.keys(a);return(0,h.jsx)(h.Fragment,{children:d.map(((t,e)=>{const s=0===e,i=e+1===d.length,u=1===d.length,b=t===y&&a[t]===y;return(0,h.jsxs)("div",{className:"wsd-afb-action-input wsd-afb-style","data-index":e,"data-is-blank":b,children:[(0,h.jsx)(c.TextControl,{placeholder:(0,n.__)("Property...","attributes-for-blocks"),value:t===y?"":t,onChange:e=>{""!==e&&d.includes(e)&&(e=`${e}-`,o(!0)),l(d.reduce(((s,r)=>(r===t?s[x(e)]=a[r]:s[r]=a[r],s)),{}))},onKeyDown:t=>{r&&("-"===t.key&&(t.preventDefault(),t.stopPropagation()),o(!1))},onKeyUp:t=>{"Enter"===t.key&&j(`.wsd-afb-style[data-index="${e}"] .components-base-control + .components-base-control input[type="text"]`,!1)}}),(0,h.jsx)(c.TextControl,{placeholder:(0,n.__)("Value...","attributes-for-blocks"),value:a[t]===y?"":a[t].replace(w," "),onChange:e=>{l({...a,[t]:x(e)})},onBlur:()=>{a[t].includes(w)&&l({...a,[t]:a[t].replace(w,"")})},onKeyUp:t=>{if("Enter"===t.code){const t=i&&!a.hasOwnProperty(y);t&&l({...a,[y]:y}),j(`.wsd-afb-style[data-index="${e+1}"] input[type="text"]`,t)}}}),(0,h.jsxs)("div",{className:"wsd-afb-button-group",children:[(0,h.jsx)(c.Button,{className:"button icon-button","aria-label":(0,n.__)("Move up","attributes-for-blocks"),disabled:s,onClick:()=>l(d.filter((e=>e!==t)).reduce(((s,r,o)=>(o===e-1&&(s[t]=a[t]),s[r]=a[r],s)),{})),children:(0,h.jsx)(c.Dashicon,{icon:"arrow-up"})}),(0,h.jsx)(c.Button,{className:"button icon-button is-top-right","aria-label":(0,n.__)("Remove rule","attributes-for-blocks"),disabled:u&&b,onClick:()=>{const{[t]:e,...s}=a;l({...s,...u&&{[y]:y}})},children:(0,h.jsx)(c.Dashicon,{icon:"no"})}),(0,h.jsx)(c.Button,{className:"button icon-button","aria-label":(0,n.__)("Move down","attributes-for-blocks"),disabled:i,onClick:()=>l(d.filter((e=>e!==t)).reduce(((s,r,o)=>(s[r]=a[r],o===e&&(s[t]=a[t]),s)),{})),children:(0,h.jsx)(c.Dashicon,{icon:"arrow-down"})}),(0,h.jsx)(c.Button,{className:"button icon-button is-bottom-right","aria-label":(0,n.__)("Add rule","attributes-for-blocks"),disabled:t===y,onClick:()=>{if(i){const{[y]:t,...e}=a;l({...e,[y]:y})}else l(d.reduce(((t,s,r)=>(s===y||(t[s]=a[s],r===e&&(t[y]=y)),t)),{}));j('.wsd-afb-style[data-is-blank="true"] input[type="text"]')},children:(0,h.jsx)(c.Dashicon,{icon:"plus"})})]})]},`rule-${e}`)}))})};class S extends i.Component{constructor(){super(...arguments),this.state={adding:"",message:void 0,styleEditor:JSON.parse(localStorage.getItem("attributesForBlocks/styleEditor"))||!1,isFullscreen:!1},this.addAttribute=this.addAttribute.bind(this),this.removeAttribute=this.removeAttribute.bind(this),this.toggleAttributeMode=this.toggleAttributeMode.bind(this),this.toggleStyleEditor=this.toggleStyleEditor.bind(this)}componentDidUpdate(t,e){e.adding&&!this.state.adding&&setTimeout((()=>{"style"===e.adding&&this.state.styleEditor?document.querySelector('.wsd-afb-style input[type="text"]')?.focus():document.querySelector(`.wsd-afb-action-input#afb-${e.adding} input[type="text"]`)?.focus()}),150),e.styleEditor!==this.state.styleEditor&&localStorage.setItem("attributesForBlocks/styleEditor",this.state.styleEditor)}addAttribute(t){t.preventDefault();let{adding:e}=this.state;if(!e)return void this.setState({message:(0,n.__)("No attribute name specified.","attributes-for-blocks")});let{setAttributes:s}=this.props,{attributesForBlocks:r}=this.props.attributes;if(!r)return void this.setState({message:(0,n.__)("Unable to add attributes to block.","attributes-for-blocks")});let o=e.replace("@","");if(o in r||"@"+o in r)return this.setState({message:(0,n.__)("Attribute already exists","attributes-for-blocks")}),void document.querySelector(`.wsd-afb-action-input#afb-${o} input[type="text"]`).focus();s({attributesForBlocks:Object.assign({[e]:void 0},r,{[e]:""})}),this.setState({adding:"",message:void 0})}removeAttribute(t){let{setAttributes:e}=this.props,{attributesForBlocks:s}=this.props.attributes,r=Object.assign({},s);delete r[t],e({attributesForBlocks:r})}updateAttribute(t,e){let{setAttributes:s}=this.props,{attributesForBlocks:r}=this.props.attributes;s({attributesForBlocks:Object.assign({},r,{[t]:e})})}toggleAttributeMode(t){let{setAttributes:e}=this.props,{attributesForBlocks:s}=this.props.attributes,r="@"===t.substring(0,1)?t.substring(1):"@"+t;e({attributesForBlocks:((t,e,s)=>{let r={[t]:e};return Object.keys(s).reduce(((e,o)=>(r[o]?e[r[o]]=s[t]:e[o]=s[o],e)),{})})(t,r,s)})}toggleStyleEditor(t){if(this.setState({styleEditor:!this.state.styleEditor}),t)return t.preventDefault(),!1}render(){const{adding:t,isFullscreen:e}=this.state,{attributesForBlocks:s}=this.props.attributes,r=(0,h.jsx)(c.BaseControl,{className:"wsd-afb",children:(0,h.jsxs)(c.__experimentalVStack,{spacing:2,children:[(0,h.jsxs)("form",{className:"wsd-afb-action-input",onSubmit:this.addAttribute,children:[!e&&(0,h.jsx)(c.Button,{className:"wsd-afb__button-full-screen","aria-label":(0,n.__)("Full screen","attributes-for-blocks"),icon:p,onClick:()=>this.setState({isFullscreen:!e})}),(0,h.jsx)(c.TextControl,{label:(0,n.__)("Additional attributes","attributes-for-blocks"),placeholder:(0,n.__)("Attribute name...","attributes-for-blocks"),value:t,onChange:t=>this.setState({adding:t,message:void 0}),disabled:!this.props.canUserUseUnfilteredHTML}),(0,h.jsx)(c.Button,{className:"wsd-afb__button-add is-last",variant:"primary",type:"submit","aria-label":(0,n.__)("Add attribute","attributes-for-blocks"),disabled:!this.props.canUserUseUnfilteredHTML,children:(0,n.__)("Add","attributes-for-blocks")}),(0,h.jsx)(m,{})]}),(0,h.jsx)("p",{className:"wsd-afb-message",children:this.state.message||" "}),s&&Object.keys(s).map((t=>{const e=t.replace("@",""),r="@"===t.substring(0,1),o="style"===e.toLowerCase()&&this.state.styleEditor?"style":"default";return(0,h.jsxs)(i.Fragment,{children:[(0,h.jsxs)("div",{id:`afb-${e}`,className:"wsd-afb-action-input",children:["style"===e.toLowerCase()&&this.props.canUserUseUnfilteredHTML&&(0,h.jsx)("div",{className:"wsd-afb-action-link",children:(0,h.jsx)("a",{href:"#",role:"button",onClick:this.toggleStyleEditor,children:(0,n.__)("Toggle editor","attributes-for-blocks")})}),(0,h.jsx)(c.TextControl,{label:(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)("strong",{children:e}),r&&" "+(0,n.__)("(override)","attributes-for-blocks")]}),disabled:"style"===o||!this.props.canUserUseUnfilteredHTML,value:s[t],onChange:e=>this.updateAttribute(t,e)}),(0,h.jsx)(c.Button,{className:"button icon-button","aria-label":(0,n.__)("Toggle between merge and override mode","attributes-for-blocks"),"aria-current":r?(0,n.__)("Override","attributes-for-blocks"):(0,n.__)("Merge","attributes-for-blocks"),onClick:()=>this.toggleAttributeMode(t),disabled:!this.props.canUserUseUnfilteredHTML,children:(0,h.jsx)(c.Dashicon,{icon:"randomize"})}),(0,h.jsx)(c.Button,{className:"button icon-button is-last","aria-label":(0,n.__)("Remove attribute","attributes-for-blocks")+": "+e,onClick:()=>this.removeAttribute(t),disabled:!this.props.canUserUseUnfilteredHTML,children:(0,h.jsx)(c.Dashicon,{icon:"no-alt"})})]}),"style"===o&&this.props.canUserUseUnfilteredHTML&&(0,h.jsx)(A,{value:s[t],onChange:e=>this.updateAttribute(t,e),toggleStyleEditor:this.toggleStyleEditor})]},t)}))]})});return(0,h.jsxs)(l.InspectorAdvancedControls,{children:[e&&(0,h.jsx)(c.Modal,{title:(0,n.__)("Additional attributes","attributes-for-blocks"),onRequestClose:()=>this.setState({isFullscreen:!1}),className:"wsd-afb__full-screen",size:"large",children:(0,h.jsx)(c.__experimentalView,{className:"wsd-afb__full-screen__content",children:r})}),!e&&r]})}}const C=(0,a.compose)([(0,d.withSelect)((t=>{const{canUserUseUnfilteredHTML:e}=t(u.store);return{canUserUseUnfilteredHTML:e()}}))])(S),B=(0,r.applyFilters)("afb.defaultEnabled",!0),E=t=>{const e=t.name||t;return!window.afbData.unsupportedBlocks.includes(e)&&(0,o.hasBlockSupport)(t,"attributesForBlocks",B)},F={attributesForBlocks:{type:"object",default:{}}},M=(0,a.createHigherOrderComponent)((function(t){return function(e){return E(e.name)?(0,h.jsxs)(i.Fragment,{children:[(0,h.jsx)(t,{...e}),(0,h.jsx)(C,{...e})]}):(0,h.jsx)(t,{...e})}}),"withAttributesForBlocksInspectorControls");(0,r.addFilter)("blocks.registerBlockType","attributes-for-blocks/attributes",(function(t){return E(t)&&(t.attributes=Object.assign(t.attributes||{},F)),t})),(0,r.addFilter)("editor.BlockEdit","attributes-for-blocks/inspector-controls",M),(0,r.addFilter)("blocks.getSaveContent.extraProps","attributes-for-blocks/extra-props",((t,e,s)=>{if(E(e)){let{attributesForBlocks:e}=s;e&&Object.keys(e).forEach((s=>{"@"===s.substring(0,1)?t[s.substring(1)]=e[s]:t[s]=function(t,e,s){if(!e)return s;let o=" ";if("style"===t)switch(typeof e){case"object":let t={};return s.trim().split(";").forEach((e=>{if(e&&e.includes(":")){let s=e.split(":");t[s[0].trim()]=s[1].trim()}})),{...e,...t};case"string":";"!==e.trim().substring(e.length-1,e.length)&&";"!==s.trim().substring(0,1)&&(o=";")}return o=(0,r.applyFilters)("afb.attribute.separator",o,t,e,s),[e,s].join(o)}(s,t[s],e[s])}))}return t}))},90:t=>{var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,s=/\n/g,r=/^\s*/,o=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,n=/^[;\s]*/,l=/^\s+|\s+$/g,c="";function d(t){return t?t.replace(l,c):c}t.exports=function(t,l){if("string"!=typeof t)throw new TypeError("First argument must be a string");if(!t)return[];l=l||{};var u=1,b=1;function h(t){var e=t.match(s);e&&(u+=e.length);var r=t.lastIndexOf("\n");b=~r?t.length-r:b+t.length}function p(){var t={line:u,column:b};return function(e){return e.position=new f(t),g(),e}}function f(t){this.start=t,this.end={line:u,column:b},this.source=l.source}f.prototype.content=t;var k=[];function m(e){var s=new Error(l.source+":"+u+":"+b+": "+e);if(s.reason=e,s.filename=l.source,s.line=u,s.column=b,s.source=t,!l.silent)throw s;k.push(s)}function _(e){var s=e.exec(t);if(s){var r=s[0];return h(r),t=t.slice(r.length),s}}function g(){_(r)}function y(t){var e;for(t=t||[];e=w();)!1!==e&&t.push(e);return t}function w(){var e=p();if("/"==t.charAt(0)&&"*"==t.charAt(1)){for(var s=2;c!=t.charAt(s)&&("*"!=t.charAt(s)||"/"!=t.charAt(s+1));)++s;if(s+=2,c===t.charAt(s-1))return m("End of comment missing");var r=t.slice(2,s-2);return b+=2,h(r),t=t.slice(s),b+=2,e({type:"comment",comment:r})}}function v(){var t=p(),s=_(o);if(s){if(w(),!_(i))return m("property missing ':'");var r=_(a),l=t({type:"declaration",property:d(s[0].replace(e,c)),value:r?d(r[0].replace(e,c)):c});return _(n),l}}return g(),function(){var t,e=[];for(y(e);t=v();)!1!==t&&(e.push(t),y(e));return e}()}},676:function(t,e,s){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var s=null;if(!t||"string"!=typeof t)return s;var r=(0,o.default)(t),i="function"==typeof e;return r.forEach((function(t){if("declaration"===t.type){var r=t.property,o=t.value;i?e(r,o,t):o&&((s=s||{})[r]=o)}})),s};var o=r(s(90))}},s={};function r(t){var o=s[t];if(void 0!==o)return o.exports;var i=s[t]={exports:{}};return e[t].call(i.exports,i,i.exports,r),i.exports}r.m=e,t=[],r.O=(e,s,o,i)=>{if(!s){var a=1/0;for(d=0;d<t.length;d++){s=t[d][0],o=t[d][1],i=t[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((t=>r.O[t](s[l])))?s.splice(l--,1):(n=!1,i<a&&(a=i));if(n){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[s,o,i]},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={57:0,350:0};r.O.j=e=>0===t[e];var e=(e,s)=>{var o,i,a=s[0],n=s[1],l=s[2],c=0;if(a.some((e=>0!==t[e]))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(l)var d=l(r)}for(e&&e(s);c<a.length;c++)i=a[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(d)},s=self.webpackChunkattributes_for_blocks=self.webpackChunkattributes_for_blocks||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})();var o=r.O(void 0,[350],(()=>r(947)));o=r.O(o)})();