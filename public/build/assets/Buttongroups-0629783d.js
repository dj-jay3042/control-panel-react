import{u as m,r as a,s as h,a as k,j as t,b as e,L as f,D as i,F as c}from"./main-6aeb1c76.js";import{C as d}from"./Highlight-d0ec9684.js";const g=()=>{const u=m();a.useEffect(()=>{u(h("Buttongroups"))});const o=k(r=>r.themeConfig.rtlClass)==="rtl",[n,s]=a.useState([]),l=r=>{n.includes(r)?s(b=>b.filter(p=>p!==r)):s([...n,r])};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(f,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Button Group"})})]}),t("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",id:"horizontal",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Horizontal"}),e("button",{onClick:()=>{l("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 text-center",children:t("div",{className:"relative inline-flex align-middle",children:[e("button",{type:"button",className:"btn btn-dark ltr:rounded-r-none rtl:rounded-l-none",children:"Left"}),e("button",{type:"button",className:"btn btn-dark rounded-none",children:"Middle"}),e("button",{type:"button",className:"btn btn-dark ltr:rounded-l-none rtl:rounded-r-none",children:"Right"})]})}),n.includes("code1")&&e(d,{children:e("pre",{children:`<div className="relative inline-flex align-middle">
    <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
        Left
    </button>
    <button type="button" className="btn btn-dark rounded-none">
        Middle
    </button>
    <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
        Right
    </button>
</div>`})})]}),t("div",{className:"panel",id:"input_group",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Input Group"}),e("button",{onClick:()=>{l("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full",children:[t("div",{className:"relative inline-flex align-middle",children:[e("button",{type:"button",className:"btn btn-dark ltr:rounded-r-none rtl:rounded-l-none",children:"1"}),e("button",{type:"button",className:"btn btn-dark rounded-none",children:"2"}),e("button",{type:"button",className:"btn btn-dark rounded-none",children:"3"}),e("button",{type:"button",className:"btn btn-dark ltr:rounded-l-none rtl:rounded-r-none",children:"4"})]}),t("div",{className:"flex relative items-stretch flex-wrap",children:[e("div",{className:"ltr:-mr-px rtl:-ml-px flex",children:e("span",{className:"border border-white-light dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark",children:"@"})}),e("input",{type:"text",placeholder:"Input group example",className:"flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]})}),n.includes("code2")&&e(d,{children:e("pre",{children:`<div className="flex flex-wrap justify-center sm:justify-between items-center gap-2 w-full">
    <div className="relative inline-flex align-middle">
        <button type="button" className="btn btn-dark ltr:rounded-r-none rtl:rounded-l-none">
            1
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            2
        </button>
        <button type="button" className="btn btn-dark rounded-none">
            3
        </button>
        <button type="button" className="btn btn-dark ltr:rounded-l-none rtl:rounded-r-none">
            4
        </button>
    </div>
    <div className="flex relative items-stretch flex-wrap">
        <div className="ltr:-mr-px rtl:-ml-px flex">
            <span className="border border-white-light dark:border-[#17263c] ltr:rounded-l rtl:rounded-r bg-[#f1f2f3] flex items-center justify-center text-black px-4 py-1.5 dark:bg-[#1a1c2d] dark:text-white-dark">
                @
            </span>
        </div>
        <input type="text" placeholder="Input group example" className="flex-1 form-input ltr:rounded-l-none rtl:rounded-r-none" />
    </div>
</div>;
`})})]}),t("div",{className:"panel",id:"vertical",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical"}),e("button",{onClick:()=>{l("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 text-center",children:t("div",{className:"relative inline-flex align-middle flex-col items-start justify-center",children:[e("button",{type:"button",className:"btn btn-dark rounded-b-none w-full",children:"Button"}),e("div",{className:"relative",children:e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${o?"bottom-start":"bottom-end"}`,btnClassName:"btn dropdown-toggle btn-dark rounded-none",button:t(c,{children:["Dropdown",e("span",{className:"shrink-0",children:e("svg",{className:"w-4 h-4 ltr:ml-2 rtl:mr-2 inline-block",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M19 9L12 15L5 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"Dropdown link"})}),e("li",{children:e("button",{type:"button",children:"Dropdown link"})})]})})})}),e("button",{type:"button",className:"btn btn-dark rounded-none w-full",children:"Button"}),e("button",{type:"button",className:"btn btn-dark rounded-none w-full",children:"Button"}),e("div",{className:"relative",children:e("div",{className:"dropdown",children:e(i,{offset:[0,5],placement:`${o?"top-start":"top-end"}`,btnClassName:"btn dropdown-toggle btn-dark rounded-t-none",button:t(c,{children:["Dropdown",e("span",{className:"shrink-0",children:e("svg",{className:"w-4 h-4 ltr:ml-2 rtl:mr-2 inline-block",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M19 9L12 15L5 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),children:t("ul",{children:[e("li",{children:e("button",{type:"button",children:"Dropdown link"})}),e("li",{children:e("button",{type:"button",children:"Dropdown link"})})]})})})})]})}),n.includes("code3")&&e(d,{children:e("pre",{children:`import Dropdown from '../../components/Dropdown';

<div className="relative inline-flex align-middle flex-col items-start justify-center">
    <button type="button" className="btn btn-dark rounded-b-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`${o?"bottom-start":"bottom-end"}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <button type="button" className="btn btn-dark rounded-none w-full">
        Button
    </button>
    <div className="relative">
        <div className="dropdown">
            <Dropdown
                offset={[0, 5]}
                placement={\`${o?"top-start":"top-end"}\`}
                btnClassName="btn dropdown-toggle btn-dark rounded-t-none"
                button={
                    <>
                        Dropdown
                        <span>
                            <svg>...</svg>
                        </span>
                    </>
                }
            >
                <ul>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                    <li>
                        <button type="button">Dropdown link</button>
                    </li>
                </ul>
            </Dropdown>
        </div>
    </div>
</div>`})})]})]})]})};export{g as default};
