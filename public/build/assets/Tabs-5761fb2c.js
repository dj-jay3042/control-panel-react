import{u,r,s as b,j as i,b as e,L as h}from"./main-7531e2c1.js";import{C as n}from"./Highlight-94b10142.js";import{$ as t}from"./tabs-09fb0ba8.js";import"./keyboard-765269c9.js";import"./use-resolve-button-type-440eb0cb.js";import"./use-is-mounted-f7007df8.js";const k=()=>{const d=u();r.useEffect(()=>{d(b("Tabs"))});const[o,s]=r.useState([]),l=a=>{o.includes(a)?s(c=>c.filter(m=>m!==a)):s([...o,a])};return i("div",{children:[i("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(h,{to:"/components/tabs",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Tabs"})})]}),i("div",{className:"space-y-8 pt-5",children:[i("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary",children:[e("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:i("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://headlessui.com/react/tabs",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://headlessui.com/react/tabs"})]}),i("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[i("div",{className:"panel",id:"simple",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Simple Tabs"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code1"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`,children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`,children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`,children:"Contact"})}),e(t,{className:"pointer-events-none -mb-[1px] block p-3.5 py-2 text-white-light outline-none dark:text-dark",children:"Disabled"})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code1")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary\`}>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary\`}>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}
                    dark:hover:border-b-black -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary\`}>
                    Contact
                </button>
            )}
        </Tab>
        <Tab className="pointer-events-none -mb-[1px] block p-3.5 py-2 text-white-light outline-none dark:text-dark">Disabled</Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>Disabled</Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"pills",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Simple Pills"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code2"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-primary text-white !outline-none":""}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`,children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-primary text-white !outline-none":""}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`,children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-primary text-white !outline-none":""}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2`,children:"Contact"})}),e(t,{className:"pointer-events-none -mb-[1px] block rounded p-3.5 py-2 text-white-light dark:text-dark",children:"Disabled"})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code2")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'bg-primary text-white !outline-none' : ''}
                    -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2\`}>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'bg-primary text-white !outline-none' : ''}
                    -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2\`}>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'bg-primary text-white !outline-none' : ''}
                    -mb-[1px] block rounded p-3.5 py-2 hover:bg-primary hover:text-white ltr:mr-2 rtl:ml-2\`}>
                    Contact
                </button>
            )}
        </Tab>
        <Tab className="pointer-events-none -mb-[1px] block rounded p-3.5 py-2 text-white-light dark:text-dark">Disabled</Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>Disabled</Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"icon",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Icon Tabs"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code3"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 mr-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                dark:hover:border-b-black' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                dark:hover:border-b-black' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger`,children:[i("svg",{width:"20",height:"20",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                dark:hover:border-b-black' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger`,children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})}),i(t,{className:"pointer-events-none -mb-[1px] flex items-center p-3.5 py-2 text-white-light dark:text-dark",children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 7V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("circle",{cx:"12",cy:"16",r:"1",fill:"currentColor"})]}),"Disabled"]})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code3")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} dark:hover:border-b-black -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger\`}>
                    <svg>...</svg>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} dark:hover:border-b-black -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger\`}>
                    <svg>...</svg>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} dark:hover:border-b-black -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger\`}>
                    <svg>...</svg>
                    Contact
                </button>
            )}
        </Tab>
        <Tab className="pointer-events-none -mb-[1px] flex items-center p-3.5 py-2 text-white-light dark:text-dark">
            <svg>...</svg>
            Disabled
        </Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>Disabled</Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"icon_pills",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Icon Pills"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code4"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap gap-2",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"bg-warning text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-warning hover:text-white`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"bg-warning text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-warning hover:text-white`,children:[i("svg",{width:"20",height:"20",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"bg-warning text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-warning hover:text-white`,children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})}),i(t,{className:"pointer-events-none -mb-[1px] flex items-center p-3.5 py-2 text-white-light dark:text-dark",children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{opacity:"0.5",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 7V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("circle",{cx:"12",cy:"16",r:"1",fill:"currentColor"})]}),"Disabled"]})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code4")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap gap-2">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'bg-warning text-white !outline-none' : ''} before:inline-block -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-warning hover:text-white\`}
                >
                    <svg>...</svg>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'bg-warning text-white !outline-none' : ''} before:inline-block -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-warning hover:text-white\`}
                >
                    <svg>...</svg>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'bg-warning text-white !outline-none' : ''} before:inline-block -mb-[1px] flex items-center rounded p-3.5 py-2 hover:bg-warning hover:text-white\`}
                >
                    <svg>...</svg>
                    Contact
                </button>
            )}
        </Tab>
        <Tab className="pointer-events-none -mb-[1px] flex items-center p-3.5 py-2 text-white-light dark:text-dark">
            <svg>...</svg>
            Disabled
        </Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>Disabled</Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"vertical_border",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Vertical Bordered"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code5"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 flex flex-col sm:flex-row",children:i(t.Group,{children:[e("div",{className:"mx-10 mb-5 sm:mb-0",children:i(t.List,{className:"m-auto w-24 text-center",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success hover:text-white dark:border-[#191e3a]`,style:{width:"100%",display:"flex",justifyContent:"center"},children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success hover:text-white dark:border-[#191e3a]`,style:{width:"100%",display:"flex",justifyContent:"center"},children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success  hover:text-white dark:border-[#191e3a]`,style:{width:"100%",display:"flex",justifyContent:"center"},children:"Messages"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success hover:text-white dark:border-[#191e3a]`,style:{width:"100%",display:"flex",justifyContent:"center"},children:"Settings"})})]})}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:e("div",{className:"rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]",children:e("div",{className:"flex items-start",children:e("p",{className:"m-0 text-sm not-italic text-[#515365] dark:text-white-dark",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."})})})})]})]})}),o.includes("code5")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="m-auto w-24 text-center">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} before:inline-block -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success hover:text-white dark:border-[#191e3a] w-full\`}>
                            Home
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} before:inline-block -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success hover:text-white dark:border-[#191e3a] w-full\`}>
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} before:inline-block -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success hover:text-white dark:border-[#191e3a] w-full\`}>
                            Contact
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} before:inline-block -mb-[1px] block border border-white-light p-3.5 py-2 hover:bg-success hover:text-white dark:border-[#191e3a] w-full\`}>
                            Settings
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"vertical_border",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Border Tabs"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code6"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                    dark:border-[#191e3a]' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                dark:border-[#191e3a]' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger`,children:[i("svg",{width:"20",height:"20",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-white-light !border-b-white text-danger !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                dark:border-[#191e3a]' -mb-[1px] flex items-center border border-transparent p-3.5 py-2 hover:text-danger`,children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})})]}),i(t.Panels,{className:"flex-1 border border-t-0 border-white-light p-4 text-sm  dark:border-[#191e3a]",children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:i("div",{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})}),e(t.Panel,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code6")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black' : ''} p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300\`}
                >
                    <svg>...</svg>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black' : ''} p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300\`}
                >
                    <svg>...</svg>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black' : ''} p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300\`}
                >
                    <svg>...</svg>
                    Contact
                </button>
            )}
        </Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"border",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Border Top"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code7"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]":""}
                                                    ' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-secondary text-secondary !outline-none dark:bg-[#191e3a]":""}
                                                before:inline-block' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`,children:[i("svg",{width:"20",height:"20",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-secondary text-secondary !outline-none dark:bg-[#191e3a]":""}
                                                before:inline-block' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`,children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!border-secondary text-secondary !outline-none dark:bg-[#191e3a]":""}
                                                before:inline-block' flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]`,children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z",stroke:"currentColor",strokeWidth:"1.5"})]}),"Settings"]})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:e("div",{className:"mt-5 rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 pt-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]",children:e("div",{className:"flex items-start",children:e("p",{className:"m-0 text-sm not-italic text-[#515365] dark:text-white-dark",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."})})})})]})]})}),o.includes("code7")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''} flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]\`}
                >
                    <svg>...</svg>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''} flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]\`}
                >
                    <svg>...</svg>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''} flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]\`}
                >
                    <svg>...</svg>
                    Contact
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? '!border-secondary text-secondary !outline-none dark:!bg-[#191e3a]' : ''} flex items-center border-t-2 border-transparent bg-[#f6f7f8] p-7 py-3 before:inline-block hover:border-secondary hover:text-secondary dark:bg-transparent dark:hover:bg-[#191e3a]\`}
                >
                    <svg>...</svg>
                    Settings
                </button>
            )}
        </Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="mt-5 rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 pt-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
            <div className="flex items-start">
                <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
            </div>
        </div>
    </Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"border_top",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Line"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code8"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"border-b !border-secondary text-secondary !outline-none":""}
                                                    before:inline-block' -mb-[1px] flex items-center border-transparent p-5 py-3 hover:border-b hover:!border-secondary hover:text-secondary`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"border-b !border-secondary text-secondary !outline-none":""}
                                                before:inline-block' -mb-[1px] flex items-center border-transparent p-5 py-3 hover:border-b hover:!border-secondary hover:text-secondary`,children:[i("svg",{width:"20",height:"20",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"border-b !border-secondary text-secondary !outline-none":""}
                                                before:inline-block' -mb-[1px] flex items-center border-transparent p-5 py-3 hover:border-b hover:!border-secondary hover:text-secondary`,children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code8")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary\`}
                >
                    <svg>...</svg>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary\`}
                >
                    <svg>...</svg>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'border-b !border-secondary text-secondary !outline-none' : ''} -mb-[1px] flex items-center border-transparent p-5 py-3 before:inline-block hover:border-b hover:!border-secondary hover:text-secondary\`}
                >
                    <svg>...</svg>
                    Contact
                </button>
            )}
        </Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"line",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Animated Line"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code9"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"text-secondary !outline-none before:!w-full":""}
                                                    before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"text-secondary !outline-none before:!w-full":""}
                                                before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`,children:[i("svg",{width:"20",height:"20",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"text-secondary !outline-none before:!w-full":""}
                                                before:inline-block' relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full`,children:[i("svg",{className:"ltr:mr-2 rtl:ml-2",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code9")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<Tab.Group>
    <Tab.List className="mt-3 flex flex-wrap">
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'text-secondary !outline-none before:!w-full' : ''} relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full\`}
                >
                    <svg>...</svg>
                    Home
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'text-secondary !outline-none before:!w-full' : ''} relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full\`}
                >
                    <svg>...</svg>
                    Profile
                </button>
            )}
        </Tab>
        <Tab as={Fragment}>
            {({ selected }) => (
                <button
                    className={\`\${selected ? 'text-secondary !outline-none before:!w-full' : ''} relative -mb-[1px] flex items-center p-5 py-3 before:absolute before:bottom-0 before:left-0 before:right-0 before:m-auto before:inline-block before:h-[1px] before:w-0 before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:w-full\`}
                >
                    <svg>...</svg>
                    Contact
                </button>
            )}
        </Tab>
    </Tab.List>
</Tab.Group>
<Tab.Panels>
    <Tab.Panel>
        <div className="active pt-5">
            <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
            <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div>
            <div className="flex items-start pt-5">
                <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                    <img
                        src="/assets/images/profile-34.jpeg"
                        alt="img"
                        className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                    />
                </div>
                <div className="flex-auto">
                    <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                    <p className="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </Tab.Panel>
    <Tab.Panel>
        <div className="pt-5">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
            </p>
        </div>
    </Tab.Panel>
</Tab.Panels>
`})})]}),i("div",{className:"panel",id:"animated_line",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Vertical Line Tab"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code10"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 flex flex-col sm:flex-row",children:i(t.Group,{children:[e("div",{className:"mx-10 mb-5 sm:mb-0",children:i(t.List,{className:"m-auto w-24 text-center font-semibold",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"text-secondary !outline-none before:!h-[80%]":""}
                                                    before:inline-block' relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`,style:{width:"100%",display:"flex",textAlign:"center",justifyContent:"center"},children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"text-secondary !outline-none before:!h-[80%]":""}
                                                    before:inline-block' relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`,style:{width:"100%",display:"flex",textAlign:"center",justifyContent:"center"},children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"text-secondary !outline-none before:!h-[80%]":""}
                                                    before:inline-block' relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`,style:{width:"100%",display:"flex",textAlign:"center",justifyContent:"center"},children:"Messages"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"text-secondary !outline-none before:!h-[80%]":""}
                                                    before:inline-block' relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a]`,style:{width:"100%",display:"flex",textAlign:"center",justifyContent:"center"},children:"Settings"})})]})}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:i("div",{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})}),e(t.Panel,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),e(t.Panel,{children:e("div",{className:"rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]",children:e("div",{className:"flex items-start",children:e("p",{className:"m-0 text-sm not-italic text-[#515365] dark:text-white-dark",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."})})})})]})]})}),o.includes("code10")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 flex flex-wrap">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? 'text-secondary !outline-none before:!h-[80%]' : ''} relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a] w-full\`}
                        >
                            Home
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? 'text-secondary !outline-none before:!h-[80%]' : ''} relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a] w-full\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? 'text-secondary !outline-none before:!h-[80%]' : ''} relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a] w-full\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? 'text-secondary !outline-none before:!h-[80%]' : ''} relative -mb-[1px] block border-white-light p-3.5 py-4 before:absolute before:bottom-0 before:top-0 before:m-auto before:inline-block before:h-0 before:w-[1px] before:bg-secondary before:transition-all before:duration-700 hover:text-secondary hover:before:h-[80%] ltr:border-r ltr:before:-right-[1px] rtl:border-l rtl:before:-left-[1px] dark:border-[#191e3a] w-full\`}
                        >
                            Settings
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"vertical_line",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Justify Tabs"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code11"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("div",{className:"flex-auto text-center !outline-none",children:e("button",{className:`${a?"!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black":""} dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a]`,style:{width:"100%"},children:"Home"})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("div",{className:"flex-auto text-center !outline-none",children:e("button",{className:`${a?"!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black":""} dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a]`,style:{width:"100%"},children:"Profile"})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("div",{className:"flex-auto text-center !outline-none",children:e("button",{className:`${a?"w-full !border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""} w-full' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`,style:{width:"100%"},children:"Contact"})})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code11")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} w-full -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? '!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} w-full -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? '!border-white-light !border-b-white !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} w-full -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"justify",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Justify Pills"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code12"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap justify-between space-x-2 rtl:space-x-reverse",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("div",{className:"flex-auto text-center !outline-none",children:e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,style:{width:"100%"},children:"Home"})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("div",{className:"flex-auto text-center !outline-none",children:e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,style:{width:"100%"},children:"Profile"})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("div",{className:"flex-auto text-center !outline-none",children:e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,style:{width:"100%"},children:"Contact"})})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code12")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? 'bg-info text-white !outline-none' : ''} -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white w-full\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? 'bg-info text-white !outline-none' : ''} -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white w-full\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? 'bg-info text-white !outline-none' : ''} -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white w-full\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"justify_pills",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Justify Center Tabs"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code13"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap justify-center border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black":""} ' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`,children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black":""} dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a]`,children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black":""} ' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black`,children:"Contact"})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code13")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 flex flex-wrap justify-center border-b border-white-light dark:border-[#191e3a]">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''} -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"justify_center_pills",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Justify Center Pills"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code14"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap justify-center space-x-2 rtl:space-x-reverse",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,children:"Contact"})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code14")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 flex flex-wrap justify-center space-x-2 rtl:space-x-reverse">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? 'bg-info text-white !outline-none' : ''}  -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? 'bg-info text-white !outline-none' : ''}  -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? 'bg-info text-white !outline-none' : ''}  -mb-[1px] block rounded p-3.5 py-2 before:inline-block hover:bg-info hover:text-white\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"justify_right",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Justify Right Tabs"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code15"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap justify-end border-b border-white-light dark:border-[#191e3a]",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a]`,children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a]`,children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a]`,children:"Contact"})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code15")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 flex flex-wrap justify-end border-b border-white-light dark:border-[#191e3a]">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}  -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}  -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? '!border-white-light !border-b-white text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black' : ''}  -mb-[1px] block border border-transparent p-3.5 py-2 hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"justify_right_pills",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Justify Right Pills"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code16"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 flex flex-wrap justify-end space-x-2 rtl:space-x-reverse",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"bg-info text-white !outline-none":""}
                                                    ' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`,children:"Contact"})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active pt-5",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:"Disabled"})]})]})}),o.includes("code16")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 flex flex-wrap justify-end space-x-2 rtl:space-x-reverse">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? 'bg-info text-white !outline-none' : ''}  -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? 'bg-info text-white !outline-none' : ''}  -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                        className={\`\${selected ? 'bg-info text-white !outline-none' : ''}  -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"pills_with_icon",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Pills with Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code17"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 mb-5 grid grid-cols-4 gap-2 rtl:space-x-reverse sm:flex sm:flex-wrap sm:justify-center sm:space-x-3",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)]' flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white dark:bg-[#191e3a]`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mb-1 h-5 w-5",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)]' flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white dark:bg-[#191e3a]`,children:[i("svg",{width:"20",height:"20",className:"mb-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)]' flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white dark:bg-[#191e3a]`,children:[i("svg",{className:"mb-1",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)]' flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white dark:bg-[#191e3a]`,children:[i("svg",{className:"mb-1",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z",stroke:"currentColor",strokeWidth:"1.5"})]}),"Settings"]})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),e(t.Panel,{children:e("div",{className:"rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]",children:e("div",{className:"flex items-start",children:e("p",{className:"m-0 text-sm not-italic text-[#515365] dark:text-white-dark",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."})})})})]})]})}),o.includes("code17")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 mb-5 grid grid-cols-4 gap-2 rtl:space-x-reverse sm:flex sm:flex-wrap sm:justify-center sm:space-x-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                            >
                                <svg>...</svg>
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                            Contact
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                            Settings
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"rounded_pills_icon",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Rounded Pills with Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code18"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:i(t.Group,{children:[i(t.List,{className:"mt-3 mb-5 flex flex-wrap justify-center space-x-3 rtl:space-x-reverse",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-info text-white !outline-none":""}
                                                    duration-300' flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`,children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-info text-white !outline-none":""}
                                                    duration-300' flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`,children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-info text-white !outline-none":""}
                                                    duration-300' flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`,children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-info text-white !outline-none":""}
                                                    duration-300' flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`,children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z",stroke:"currentColor",strokeWidth:"1.5"})]})})})]}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),i(t.Panel,{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]}),e(t.Panel,{children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})}),e(t.Panel,{children:e("div",{className:"rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]",children:e("div",{className:"flex items-start",children:e("p",{className:"m-0 text-sm not-italic text-[#515365] dark:text-white-dark",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."})})})})]})]})}),o.includes("code18")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="mt-3 mb-5 grid grid-cols-4 gap-2 rtl:space-x-reverse sm:flex sm:flex-wrap sm:justify-center sm:space-x-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-info text-white !outline-none' : ''}  duration-300 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                            >
                                <svg>...</svg>
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-info text-white !outline-none' : ''}  duration-300 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-info text-white !outline-none' : ''}  duration-300 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"vertical_rounded_with_icon",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Vertical Rounded With Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code19"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 flex flex-col sm:flex-row",children:i(t.Group,{children:[e("div",{className:"mx-10 mb-5 sm:mb-0",children:i(t.List,{className:"m-auto flex w-24 flex-col justify-center space-y-3",children:[e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!bg-success text-white !outline-none":""} hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)]' flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white dark:bg-[#191e3a]`,children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"mb-1 h-5 w-5",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Home"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!bg-success text-white !outline-none":""} hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)]' flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white dark:bg-[#191e3a]`,children:[i("svg",{width:"20",height:"20",className:"mb-1",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]}),"Profile"]})}),e(t,{as:r.Fragment,children:({selected:a})=>i("button",{className:`${a?"!bg-success text-white !outline-none":""} hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)]' flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white dark:bg-[#191e3a]`,children:[i("svg",{className:"mb-1",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]}),"Contact"]})})]})}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active flex-1 text-sm",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"active flex-1 text-sm",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"active flex-1 text-sm",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})]})]})}),o.includes("code19")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="m-auto flex w-24 flex-col justify-center space-y-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                            >
                                <svg>...</svg>
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''}  flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] p-7 py-3 hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"vertical_circle_with_icon",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Vertical Circle With Icon"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code20"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 flex flex-col sm:flex-row",children:i(t.Group,{children:[e("div",{className:"mx-10 mb-5 sm:mb-0",children:i(t.List,{className:"m-auto flex flex-col justify-center space-y-3",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-info text-white !outline-none":""}
                                                    duration-300' flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`,children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{opacity:"0.5",d:"M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{d:"M12 15L12 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-info text-white !outline-none":""}
                                                    duration-300' flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`,children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]})})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-info text-white !outline-none":""}
                                                    duration-300' flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]`,children:i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M5.00659 6.93309C5.04956 5.7996 5.70084 4.77423 6.53785 3.93723C7.9308 2.54428 10.1532 2.73144 11.0376 4.31617L11.6866 5.4791C12.2723 6.52858 12.0372 7.90533 11.1147 8.8278M17.067 18.9934C18.2004 18.9505 19.2258 18.2992 20.0628 17.4622C21.4558 16.0692 21.2686 13.8468 19.6839 12.9624L18.5209 12.3134C17.4715 11.7277 16.0947 11.9628 15.1722 12.8853",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M5.00655 6.93311C4.93421 8.84124 5.41713 12.0817 8.6677 15.3323C11.9183 18.5829 15.1588 19.0658 17.0669 18.9935M15.1722 12.8853C15.1722 12.8853 14.0532 14.0042 12.0245 11.9755C9.99578 9.94676 11.1147 8.82782 11.1147 8.82782",stroke:"currentColor",strokeWidth:"1.5"})]})})})]})}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:e("div",{children:i("div",{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(t.Panel,{children:e("div",{className:"active flex-1 text-sm",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})})]})]})}),o.includes("code20")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="m-auto flex w-24 flex-col justify-center space-y-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-info text-white !outline-none' : ''} duration-300 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                            >
                                <svg>...</svg>
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-info text-white !outline-none' : ''} duration-300 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-info text-white !outline-none' : ''} duration-300 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#f1f2f3] transition-all hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] dark:bg-[#191e3a]\`}
                        >
                            <svg>...</svg>
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"vertical_pills",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Vertical Pills"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code21"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 flex flex-col sm:flex-row",children:i(t.Group,{children:[e("div",{className:"mb-5 sm:mb-0 sm:flex-[0_0_20%]",children:i(t.List,{className:"space-y-2 ltr:pr-4 rtl:pl-4",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Messages"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Settings"})})]})}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:i("div",{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})}),e(t.Panel,{children:e("div",{className:"active flex-1 text-sm",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:e("div",{className:"rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]",children:e("div",{className:"flex items-start",children:e("p",{className:"m-0 text-sm not-italic text-[#515365] dark:text-white-dark",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."})})})})]})]})}),o.includes("code21")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mx-10 mb-5 sm:mb-0">
            <Tab.List className="m-auto flex w-24 flex-col justify-center space-y-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]}),i("div",{className:"panel",id:"justify_vertical_pills_right",children:[i("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Justify Vertical Pills Right"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code22"),children:i("span",{className:"flex items-center",children:[i("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 flex flex-col sm:flex-row sm:gap-4",children:i(t.Group,{children:[e("div",{className:"mb-5 sm:order-1 sm:mb-0 sm:flex-[0_0_20%]",children:i(t.List,{className:"space-y-2",children:[e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Home"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Profile"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Messages"})}),e(t,{as:r.Fragment,children:({selected:a})=>e("button",{className:`${a?"!bg-success text-white !outline-none":""}
                                                    duration-300' block rounded-md p-3.5 py-2 transition-all hover:bg-success hover:text-white`,style:{width:"100%",display:"flex",textAlign:"start"},children:"Settings"})})]})}),i(t.Panels,{children:[e(t.Panel,{children:i("div",{className:"active",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(t.Panel,{children:i("div",{className:"flex items-start",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),i("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})}),e(t.Panel,{children:e("div",{className:"active flex-1 text-sm",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(t.Panel,{children:e("div",{className:"rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]",children:e("div",{className:"flex items-start",children:e("p",{className:"m-0 text-sm not-italic text-[#515365] dark:text-white-dark",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."})})})})]})]})}),o.includes("code22")&&e(n,{children:e("pre",{className:"language-typescript",children:`import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

<div className="mb-5 flex flex-col sm:flex-row">
    <Tab.Group>
        <div className="mb-5 sm:order-1 sm:mb-0 sm:flex-[0_0_20%]">
            <Tab.List className="m-auto flex w-24 flex-col justify-center space-y-3">
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <div className="flex-auto text-center !outline-none">
                            <button
                                className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}
                            >
                                Home
                            </button>
                        </div>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}
                        >
                            Profile
                        </button>
                    )}
                </Tab>
                <Tab as={Fragment}>
                    {({ selected }) => (
                        <button
                            className={\`\${selected ? '!bg-success text-white !outline-none' : ''} block rounded-md p-3.5 py-2 transition-all duration-300 hover:bg-success hover:text-white w-full text-left\`}
                        >
                            Contact
                        </button>
                    )}
                </Tab>
            </Tab.List>
        </div>
    </Tab.Group>
    <Tab.Panels>
        <Tab.Panel>
            <div className="active">
                <h4 className="mb-4 text-2xl font-semibold">We move your world!</h4>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div>
                <div className="flex items-start">
                    <div className="h-20 w-20 flex-none ltr:mr-4 rtl:ml-4">
                        <img
                            src="/assets/images/profile-34.jpeg"
                            alt="img"
                            className="m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"
                        />
                    </div>
                    <div className="flex-auto">
                        <h5 className="mb-4 text-xl font-medium">Media heading</h5>
                        <p className="text-white-dark">
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at,
                            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="pt-5">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                </p>
            </div>
        </Tab.Panel>
        <Tab.Panel>
            <div className="rounded-tr-md rounded-br-md border border-l-2 border-white-light !border-l-primary bg-white p-5 text-black shadow-md ltr:pl-3.5 rtl:pr-3.5 dark:border-[#060818] dark:bg-[#060818]">
                <div className="flex items-start">
                    <p className="m-0 text-sm not-italic text-[#515365] dark:text-white-dark">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </div>
        </Tab.Panel>
    </Tab.Panels>
</div>
`})})]})]})]})]})};export{k as default};
