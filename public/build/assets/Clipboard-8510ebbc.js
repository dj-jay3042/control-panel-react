import{r as y,u as D,s as H,j as n,b as r,L as E,S as R}from"./main-88c5ddb9.js";import{C as b}from"./Highlight-2fa5593b.js";var w={},V=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,o=[],a=0;a<t.rangeCount;a++)o.push(t.getRangeAt(a));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||o.forEach(function(s){t.addRange(s)}),e&&e.focus()}},B=V,T={"text/plain":"Text","text/html":"Url",default:"Text"},I="Copy to clipboard: #{key}, Enter";function A(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Z(t,e){var o,a,s,i,u,l,m=!1;e||(e={}),o=e.debug||!1;try{s=B(),i=document.createRange(),u=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(p){if(p.stopPropagation(),e.format)if(p.preventDefault(),typeof p.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=T[e.format]||T.default;window.clipboardData.setData(c,t)}else p.clipboardData.clearData(),p.clipboardData.setData(e.format,t);e.onCopy&&(p.preventDefault(),e.onCopy(p.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),u.addRange(i);var h=document.execCommand("copy");if(!h)throw new Error("copy command was unsuccessful");m=!0}catch(p){o&&console.error("unable to copy using execCommand: ",p),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),m=!0}catch(c){o&&console.error("unable to copy using clipboardData: ",c),o&&console.error("falling back to prompt"),a=A("message"in e?e.message:I),window.prompt(a,t)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(i):u.removeAllRanges()),l&&document.body.removeChild(l),s()}return m}var U=Z;function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}Object.defineProperty(w,"__esModule",{value:!0});w.CopyToClipboard=void 0;var g=_(y),$=_(U),q=["text","onCopy","options","children"];function _(t){return t&&t.__esModule?t:{default:t}}function M(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),o.push.apply(o,a)}return o}function O(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?M(Object(o),!0).forEach(function(a){L(t,a,o[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(o,a))})}return t}function z(t,e){if(t==null)return{};var o=F(t,e),a,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)a=i[s],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}function F(t,e){if(t==null)return{};var o={},a=Object.keys(t),s,i;for(i=0;i<a.length;i++)s=a[i],!(e.indexOf(s)>=0)&&(o[s]=t[s]);return o}function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function X(t,e,o){return e&&P(t.prototype,e),o&&P(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function G(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(a,s){return a.__proto__=s,a},k(t,e)}function J(t){var e=Y();return function(){var a=v(t),s;if(e){var i=v(this).constructor;s=Reflect.construct(a,arguments,i)}else s=a.apply(this,arguments);return Q(this,s)}}function Q(t,e){if(e&&(x(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return S(t)}function S(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},v(t)}function L(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var W=function(t){G(o,t);var e=J(o);function o(){var a;K(this,o);for(var s=arguments.length,i=new Array(s),u=0;u<s;u++)i[u]=arguments[u];return a=e.call.apply(e,[this].concat(i)),L(S(a),"onClick",function(l){var m=a.props,h=m.text,p=m.onCopy,c=m.children,d=m.options,C=g.default.Children.only(c),j=(0,$.default)(h,d);p&&p(h,j),C&&C.props&&typeof C.props.onClick=="function"&&C.props.onClick(l)}),a}return X(o,[{key:"render",value:function(){var s=this.props;s.text,s.onCopy,s.options;var i=s.children,u=z(s,q),l=g.default.Children.only(i);return g.default.cloneElement(l,O(O({},u),{},{onClick:this.onClick}))}}]),o}(g.default.PureComponent);w.CopyToClipboard=W;L(W,"defaultProps",{onCopy:void 0,options:void 0});var ee=w,N=ee.CopyToClipboard;N.CopyToClipboard=N;var f=N;const oe=()=>{const t=D();y.useEffect(()=>{t(H("Clipboard"))});const[e,o]=y.useState([]),a=c=>{e.includes(c)?o(d=>d.filter(C=>C!==c)):o([...e,c])},[s,i]=y.useState("http://www.admin-dashboard.com"),[u,l]=y.useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit..."),m="22991",h="http://www.admin-dashboard.com/code",p=(c="")=>{R.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:c||"Copied successfully.",padding:"10px 20px"})};return n("div",{children:[n("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[r("li",{children:r(E,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),r("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:r("span",{children:"Clipboard"})})]}),n("div",{className:"pt-5 space-y-8",children:[n("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[r("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:n("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),r("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),r("a",{href:"https://www.npmjs.com/package/react-copy-to-clipboard",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-copy-to-clipboard"})]}),n("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[n("div",{className:"panel",id:"copy_from_input",children:[n("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy from input"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code1"),children:n("span",{className:"flex items-center",children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[r("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:n("form",{children:[r("input",{type:"text",value:s,className:"form-input",onChange:c=>i(c.target.value)}),n("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[r(f.CopyToClipboard,{text:s,onCopy:(c,d)=>{d&&p()},children:n("button",{type:"button",className:"btn btn-primary",children:[n("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy from Input"]})}),r(f.CopyToClipboard,{text:s,onCopy:(c,d)=>{d&&p("Cut successfully.")},children:n("button",{type:"button",className:"btn btn-dark",value:s,onClick:()=>i(""),children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[r("path",{d:"M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015",stroke:"currentColor",strokeWidth:"1.5"})]}),"Cut from Input"]})})]})]})})}),e.includes("code1")&&r(b,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message1, setMessage1] = useState<any>('http://www.admin-dashboard.com');

<form>
    <input type="text" value={message1} className="form-input" onChange={(e) => setMessage1(e.target.value)} />
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message1}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark" value={message1} onClick={() => setMessage1('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),n("div",{className:"panel",id:"copy_from_textarea",children:[n("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy form Textarea"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code2"),children:n("span",{className:"flex items-center",children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[r("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:n("form",{children:[r("textarea",{rows:3,wrap:"soft",className:"form-textarea",value:u,id:"message2",onChange:c=>l(c.target.value)}),n("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[r(f.CopyToClipboard,{text:u,onCopy:(c,d)=>{d&&p()},children:n("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#message2",children:[n("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy from Input"]})}),r(f.CopyToClipboard,{text:u,onCopy:(c,d)=>{d&&p("Cut successfully.")},children:n("button",{type:"button",className:"btn btn-dark ",onClick:()=>l(""),children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[r("path",{d:"M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015",stroke:"currentColor",strokeWidth:"1.5"})]}),"Cut from Input"]})})]})]})})}),e.includes("code2")&&r(b,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const [message2, setMessage2] = useState<any>('Lorem ipsum dolor sit amet, consectetur adipiscing elit...');

<form>
    <textarea rows={3} wrap="soft" className="form-textarea" value={message2} id="message2" onChange={(e) => setMessage2(e.target.value)}></textarea>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#message2">
                <svg>...</svg>
                Copy from Input
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={message2}
            onCopy={(text, result) => {
                if (result) {
                    showMessage('Cut successfully.');
                }
            }}
        >
            <button type="button" className="btn btn-dark " onClick={() => setMessage2('')}>
                <svg>...</svg>
                Cut from Input
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),n("div",{className:"panel",id:"copy_from_paragraph",children:[n("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Text from Paragraph"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code3"),children:n("span",{className:"flex items-center",children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[r("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:n("form",{children:[n("p",{className:"mb-3 font-semibold",children:["Here is your OTP",r("span",{className:"text-2xl",id:"copyOTP",defaultValue:m,children:"22991"}),"."]}),r("p",{className:"font-semibold",children:"Please do not share it to anyone"}),r("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:r(f.CopyToClipboard,{text:m,onCopy:(c,d)=>{d&&p()},children:n("button",{type:"button",className:"btn btn-primary","data-clipboard-target":"#copyOTP",children:[n("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy from Paragraph"]})})})]})})}),e.includes("code3")&&r(b,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message3 = '22991';

<form>
    <p className="mb-3 font-semibold">
        Here is your OTP
        <span className="text-2xl" id="copyOTP" defaultValue={message3}>
            22991
        </span>
        .
    </p>
    <p className="font-semibold">Please do not share it to anyone</p>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message3}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary" data-clipboard-target="#copyOTP">
                <svg>...</svg>
                Copy from Paragraph
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]}),n("div",{className:"panel",id:"advanced",children:[n("div",{className:"flex items-center justify-between mb-5",children:[r("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Copy Hidden Text (Advanced)"}),r("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>a("code4"),children:n("span",{className:"flex items-center",children:[n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[r("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),r("div",{className:"mb-5",children:r("div",{className:"bg-[#f1f2f3] p-5 rounded dark:bg-[#060818]",children:n("form",{children:[n("p",{className:"mb-3 font-semibold",children:[n("span",{children:[" ","Link -> "," "]}),r("span",{id:"copyLink",children:" http://www.admin-dashboard.com/code"})]}),r("span",{className:"absolute opacity-0",id:"copyHiddenCode",children:"2291"}),n("div",{className:"sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5",children:[r(f.CopyToClipboard,{text:h,onCopy:(c,d)=>{d&&p()},children:n("button",{type:"button",className:"btn btn-primary",children:[n("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy Link"]})}),r(f.CopyToClipboard,{text:"2291",onCopy:(c,d)=>{d&&p()},children:n("button",{type:"button",className:"btn btn-dark ",children:[n("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z",stroke:"currentColor",strokeWidth:"1.5"}),r("path",{opacity:"0.5",d:"M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5",stroke:"currentColor",strokeWidth:"1.5"})]}),"Copy Hidden Code"]})})]})]})})}),e.includes("code4")&&r(b,{children:r("pre",{className:"language-typescript",children:`import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const message4 = 'http://www.admin-dashboard.com/code';

<form>
    <p className="mb-3 font-semibold">
        <span> {'Link -> '} </span>
        <span id="copyLink"> http://www.admin-dashboard.com/code</span>
    </p>
    <span className="absolute opacity-0" id="copyHiddenCode">
        2291
    </span>
    <div className="sm:flex space-y-2 sm:space-y-0 sm:space-x-2 rtl:space-x-reverse mt-5">
        <CopyToClipboard
            text={message4}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-primary">
                <svg>...</svg>
                Copy Link
            </button>
        </CopyToClipboard>
        <CopyToClipboard
            text={'2291'}
            onCopy={(text, result) => {
                if (result) {
                    showMessage();
                }
            }}
        >
            <button type="button" className="btn btn-dark ">
                <svg>...</svg>
                Copy Hidden Code
            </button>
        </CopyToClipboard>
    </div>
</form>`})})]})]})]})]})};export{oe as default};
