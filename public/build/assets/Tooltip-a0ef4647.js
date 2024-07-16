import{u as m,r as c,s as h,j as e,b as t,L as b}from"./main-61f9f76b.js";import{C as i}from"./Highlight-b1f5af13.js";import{T as n}from"./tippy-1a076cf7.js";const f=()=>{const l=m();c.useEffect(()=>{l(h("Tooltips"))});const[o,a]=c.useState([]),r=s=>{o.includes(s)?a(p=>p.filter(d=>d!==s)):a([...o,s])};return e("div",{children:[e("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[t("li",{children:t(b,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),t("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:t("span",{children:"Popovers"})})]}),e("div",{className:"pt-5 space-y-8",children:[e("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[t("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),t("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),t("a",{href:"https://www.npmjs.com/package/@tippyjs/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/@tippyjs/react"})]}),e("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[e("div",{className:"panel",id:"default",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Default"}),t("button",{onClick:()=>{r("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex justify-center w-full gap-4",children:[t(n,{content:"Popover using ANCHOR tag",children:t("button",{type:"button",className:"btn bg-primary btn-primary",children:"Link"})}),t(n,{content:"Popover using BUTTON tag",children:t("button",{type:"button",className:"btn btn-success",children:"Button"})})]})}),o.includes("code1")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover using ANCHOR tag">
    <button type="button" className="btn bg-primary btn-primary">
        Link
    </button>
</Tippy>

<Tippy content="Popover using BUTTON tag">
    <button type="button" className="btn btn-success">
        Button
    </button>
</Tippy>`})})]}),e("div",{className:"panel",id:"directions",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Placement"}),t("button",{onClick:()=>{r("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{content:"Popover on top",placement:"top",children:t("button",{type:"button",className:"btn btn-info",children:"Tooltip on top"})}),t(n,{content:"Popover on left",placement:"left",children:t("button",{type:"button",className:"btn btn-secondary",children:"Tooltip on left"})}),t(n,{content:"Popover on bottom",placement:"bottom",children:t("button",{type:"button",className:"btn btn-warning",children:"Tooltip on bottom"})}),t(n,{content:"Popover on right",placement:"right",children:t("button",{type:"button",className:"btn btn-danger",children:"Tooltip on right"})})]})}),o.includes("code2")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Popover on top" placement="top">
    <button type="button" className="btn btn-info">
        Tooltip on top
    </button>
</Tippy>

<Tippy content="Popover on left" placement="left">
    <button type="button" className="btn btn-secondary">
        Tooltip on left
    </button>
</Tippy>

<Tippy content="Popover on right" placement="right">
    <button type="button" className="btn btn-danger">
        Tooltip on right
    </button>
</Tippy>

<Tippy content="Popover on bottom" placement="bottom">
    <button type="button" className="btn btn-warning">
        Tooltip on bottom
    </button>
</Tippy>`})})]}),e("div",{className:"panel lg:row-start-1 lg:col-start-2",id:"dismissible",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"HTML"}),t("button",{onClick:()=>{r("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:e("span",{className:"flex items-center",children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:t("div",{className:"flex justify-center gap-4 w-full",children:t(n,{content:t("strong",{children:"Bolded content"}),children:t("button",{type:"button","data-dismissable":"true",className:"btn btn-dark",children:"Tooltip on HTML"})})})}),o.includes("code3")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Bolded content">
    <button type="button" data-dismissable="true" className="btn btn-dark">
        Tooltip on HTML
    </button>
</Tippy>`})})]}),e("div",{className:"panel",id:"options",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Options"}),t("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{r("code4")},children:e("span",{className:"flex items-center",children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{trigger:"click",content:"On Click",children:t("button",{type:"button","data-trigger":"mouseenter",className:"btn btn-primary",children:"On Click"})}),t(n,{trigger:"focusin",content:"On Focus",children:t("button",{type:"button","data-trigger":"focus",className:"btn btn-secondary",children:"On Focus"})}),t(n,{content:"Delay 1s",delay:1e3,children:t("button",{type:"button","data-delay":"1000",className:"btn btn-info",children:"Delay"})}),t(n,{content:"Disabled Animation",children:t("button",{type:"button","data-animation":"false",className:"btn btn-dark",children:"Disabled Animation"})})]})}),o.includes("code4")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy trigger="click" content="On Click">
    <button type="button" data-trigger="mouseenter" className="btn btn-primary">
        On Click
    </button>
</Tippy>

<Tippy trigger="focusin" content="On Focus">
    <button type="button" data-trigger="focus" className="btn btn-secondary">
        On Focus
    </button>
</Tippy>

<Tippy content="Delay 1s" delay={1000}>
    <button type="button" data-delay="1000" className="btn btn-info">
        Delay
    </button>
</Tippy>

<Tippy content="Disabled Animation">
    <button type="button" data-animation="false" className="btn btn-dark">
        Disabled Animation
    </button>
</Tippy>`})})]}),e("div",{className:"panel lg:col-span-2",id:"colors",children:[e("div",{className:"flex items-center justify-between mb-5",children:[t("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Colors"}),t("button",{className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>{r("code5")},children:e("span",{className:"flex items-center",children:[e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[t("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),t("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:e("div",{className:"flex flex-wrap justify-center gap-4 w-full",children:[t(n,{content:"Primary",theme:"primary",children:t("button",{type:"button",className:"btn btn-primary",children:"Primary"})}),t(n,{content:"Success",theme:"success",children:t("button",{type:"button",className:"btn btn-success",children:"Success"})}),t(n,{content:"info",theme:"info",children:t("button",{type:"button",className:"btn btn-info",children:"Info"})}),t(n,{content:"danger",theme:"danger",children:t("button",{type:"button",className:"btn btn-danger",children:"Danger"})}),t(n,{content:"warning",theme:"warning",children:t("button",{type:"button",className:"btn btn-warning",children:"Warning"})}),t(n,{content:"secondary",theme:"secondary",children:t("button",{type:"button",className:"btn btn-secondary",children:"Secondary"})}),t(n,{content:"dark",theme:"dark",children:t("button",{type:"button",className:"btn btn-dark",children:"Dark"})})]})}),o.includes("code5")&&t(i,{children:t("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

<Tippy content="Primary" theme="primary">
    <button type="button" className="btn btn-primary">
        Primary
    </button>
</Tippy>

<Tippy content="Success" theme="success">
    <button type="button" className="btn btn-success">
        Success
    </button>
</Tippy>

<Tippy content="info" theme="info">
    <button type="button" className="btn btn-info">
        Info
    </button>
</Tippy>

<Tippy content="danger" theme="danger">
    <button type="button" className="btn btn-danger">
        Danger
    </button>
</Tippy>

<Tippy content="warning" theme="warning">
    <button type="button" className="btn btn-warning">
        Warning
    </button>
</Tippy>

<Tippy content="secondary" theme="secondary">
    <button type="button" className="btn btn-secondary">
        Secondary
    </button>
</Tippy>

<Tippy content="dark" theme="dark">
    <button type="button" className="btn btn-dark">
        Dark
    </button>
</Tippy>`})})]})]})]})]})};export{f as default};
