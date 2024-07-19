import{u as m,r as d,s as p,j as t,b as e,L as h}from"./main-7531e2c1.js";import{C as a}from"./Highlight-94b10142.js";const f=()=>{const n=m();d.useEffect(()=>{n(p("Layouts"))});const[l,i]=d.useState(["code1,code2,code3,code4,code5,code6,code7,code8"]),r=s=>{l.includes(s)?i(o=>o.filter(c=>c!==s)):i([...l,s])};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(h,{to:"#",className:"text-primary hover:underline",children:"Forms"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Layouts"})})]}),t("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",id:"stack_form",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Stack Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code1"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{children:[e("input",{type:"email",placeholder:"Enter Email",className:"form-input"}),e("span",{className:"text-white-dark text-[11px] inline-block mt-1",children:"We'll never share your email with anyone else."})]}),e("div",{children:e("input",{type:"password",placeholder:"Enter Password",className:"form-input"})}),e("div",{children:t("label",{className:"inline-flex items-center mt-1 cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code1")&&e(a,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email" className="form-input" />
        <span className="text-white-dark text-[11px] inline-block mt-1">We'll never share your email with anyone else.</span>
    </div>
    <div>
        <input type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label className="inline-flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",id:"horizontal_form",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Horizontal form"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code2"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{className:"flex sm:flex-row flex-col",children:[e("label",{htmlFor:"horizontalEmail",className:"mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Email"}),e("input",{id:"horizontalEmail",type:"email",placeholder:"Enter Email",className:"form-input flex-1"})]}),t("div",{className:"flex sm:flex-row flex-col",children:[e("label",{htmlFor:"horizontalPassword",className:"mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Password"}),e("input",{id:"horizontalPassword",type:"password",placeholder:"Enter Password",className:"form-input flex-1"})]}),t("div",{className:"flex sm:flex-row flex-col",children:[e("label",{className:"sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Choose Segements"}),t("div",{className:"flex-1",children:[e("div",{className:"mb-2",children:t("label",{className:"inline-flex mt-1 cursor-pointer",children:[e("input",{type:"radio",name:"segements",className:"form-radio"}),e("span",{className:"text-white-dark",children:"Segements 1"})]})}),e("div",{className:"mb-2",children:t("label",{className:"inline-flex mt-1 cursor-pointer",children:[e("input",{type:"radio",name:"segements",className:"form-radio"}),e("span",{className:"text-white-dark",children:"Segements 2"})]})}),e("div",{children:t("label",{className:"inline-flex mt-1",children:[e("input",{type:"radio",name:"segements",className:"form-radio",disabled:!0}),e("span",{className:"text-white-dark",children:"Segements 3 ( disabled )"})]})})]})]}),t("div",{className:"flex sm:flex-row flex-col",children:[e("label",{className:"font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2",children:"Apply"}),t("label",{className:"inline-flex mb-0 cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Terms Conditions"})]})]}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code2")&&e(a,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalEmail" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Email
        </label>
        <input id="horizontalEmail" type="email" placeholder="Enter Email" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label htmlFor="horizontalPassword" className="mb-0 sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">
            Password
        </label>
        <input id="horizontalPassword" type="password" placeholder="Enter Password" className="form-input flex-1" />
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Choose Segements</label>
        <div className="flex-1">
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 1</span>
                </label>
            </div>
            <div className="mb-2">
                <label className="inline-flex mt-1 cursor-pointer">
                    <input type="radio" name="segements" className="form-radio" />
                    <span className="text-white-dark">Segements 2</span>
                </label>
            </div>
            <div>
                <label className="inline-flex mt-1">
                    <input type="radio" name="segements" className="form-radio" disabled />
                    <span className="text-white-dark">Segements 3 ( disabled )</span>
                </label>
            </div>
        </div>
    </div>
    <div className="flex sm:flex-row flex-col">
        <label className="font-semibold sm:w-1/4 sm:ltr:mr-2 rtl:ml-2">Apply</label>
        <label className="inline-flex mb-0 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Terms Conditions</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",id:"registration_form",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Registration Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code3"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[e("div",{children:e("input",{type:"email",placeholder:"Enter Email Address *",className:"form-input"})}),e("div",{children:e("input",{type:"password",placeholder:"Enter Password *",className:"form-input"})}),e("div",{children:e("input",{type:"password",placeholder:"Enter Confirm Password *",className:"form-input"})}),e("div",{className:"!mt-2",children:e("span",{className:"text-white-dark text-[11px] inline-block",children:"*Required Fields"})}),e("div",{children:t("label",{className:"inline-flex cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Subscribe to weekly newsletter"})]})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code3")&&e(a,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="email" placeholder="Enter Email Address *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Confirm Password *" className="form-input" />
    </div>
    <div className="!mt-2">
        <span className="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <div>
        <label className="inline-flex cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Subscribe to weekly newsletter</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",id:"login_form",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Login Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code4"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[e("div",{children:e("input",{type:"text",placeholder:"Enter Full Name *",className:"form-input"})}),e("div",{children:e("input",{type:"email",placeholder:"Enter Email Address *",className:"form-input"})}),e("div",{children:e("input",{type:"password",placeholder:"Enter Password *",className:"form-input"})}),e("div",{className:"!mt-2",children:e("span",{className:"text-white-dark text-[11px] inline-block",children:"*Required Fields"})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code4")&&e(a,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <input type="text" placeholder="Enter Full Name *" className="form-input" />
    </div>
    <div>
        <input type="email" placeholder="Enter Email Address *" className="form-input" />
    </div>
    <div>
        <input type="password" placeholder="Enter Password *" className="form-input" />
    </div>
    <div className="!mt-2">
        <span className="text-white-dark text-[11px] inline-block">*Required Fields</span>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel",id:"forms_grid",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Forms Grid"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code5"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[t("div",{children:[e("label",{htmlFor:"gridEmail",children:"Email"}),e("input",{id:"gridEmail",type:"email",placeholder:"Enter Email",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"gridPassword",children:"Password"}),e("input",{id:"gridPassword",type:"Password",placeholder:"Enter Password",className:"form-input"})]})]}),t("div",{children:[e("label",{htmlFor:"gridAddress1",children:"Address"}),e("input",{id:"gridAddress1",type:"text",placeholder:"Enter Address",defaultValue:"1234 Main St",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"gridAddress2",children:"Address2"}),e("input",{id:"gridAddress2",type:"text",placeholder:"Enter Address2",defaultValue:"Apartment, studio, or floor",className:"form-input"})]}),t("div",{className:"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",children:[t("div",{className:"md:col-span-2",children:[e("label",{htmlFor:"gridCity",children:"City"}),e("input",{id:"gridCity",type:"text",placeholder:"Enter City",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"gridState",children:"State"}),t("select",{id:"gridState",className:"form-select text-white-dark",children:[e("option",{children:"Choose..."}),e("option",{children:"..."})]})]}),t("div",{children:[e("label",{htmlFor:"gridZip",children:"Zip"}),e("input",{id:"gridZip",type:"text",placeholder:"Enter Zip",className:"form-input"})]})]}),e("div",{children:t("label",{className:"flex items-center mt-1 cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Check me out"})]})}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code5")&&e(a,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
            <label htmlFor="gridEmail">Email</label>
            <input id="gridEmail" type="email" placeholder="Enter Email" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridPassword">Password</label>
            <input id="gridPassword" type="Password" placeholder="Enter Password" className="form-input" />
        </div>
    </div>
    <div>
        <label htmlFor="gridAddress1">Address</label>
        <input id="gridAddress1" type="text" placeholder="Enter Address" defaultValue="1234 Main St" className="form-input" />
    </div>
    <div>
        <label htmlFor="gridAddress2">Address2</label>
        <input id="gridAddress2" type="text" placeholder="Enter Address2" defaultValue="Apartment, studio, or floor" className="form-input" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="md:col-span-2">
            <label htmlFor="gridCity">City</label>
            <input id="gridCity" type="text" placeholder="Enter City" className="form-input" />
        </div>
        <div>
            <label htmlFor="gridState">State</label>
            <select id="gridState" className="form-select text-white-dark">
                <option>Choose...</option>
                <option>...</option>
            </select>
        </div>
        <div>
            <label htmlFor="gridZip">Zip</label>
            <input id="gridZip" type="text" placeholder="Enter Zip" className="form-input" />
        </div>
    </div>
    <div>
        <label className="flex items-center mt-1 cursor-pointer">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-white-dark">Check me out</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]}),t("div",{className:"panel lg:col-span-2",id:"inline_form",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Inline Forms"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code6"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{className:"flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto",children:[e("input",{type:"email",placeholder:"Jane Doe",className:"form-input flex-1"}),t("div",{className:"flex flex-1",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),e("div",{children:t("label",{className:"flex items-center",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Remember me"})]})}),e("button",{type:"submit",className:"btn btn-primary py-2.5",children:"Submit"})]})})}),l.includes("code6")&&e(a,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" className="btn btn-primary py-2.5">
            Submit
        </button>
    </div>
</form>`})})]}),t("div",{className:"panel lg:col-span-2",id:"auto_sizing",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Auto-sizing"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code7"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:e("form",{children:t("div",{className:"flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto",children:[e("input",{type:"email",placeholder:"Jane Doe",className:"form-input flex-1"}),t("div",{className:"flex flex-1",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e("input",{type:"text",placeholder:"Username",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]}),e("div",{children:t("label",{className:"flex items-center cursor-pointer",children:[e("input",{type:"checkbox",className:"form-checkbox"}),e("span",{className:"text-white-dark",children:"Remember me"})]})}),e("button",{type:"submit",className:"btn btn-primary py-2.5",children:"Submit"})]})})}),l.includes("code7")&&e(a,{children:e("pre",{className:"language-xml",children:`<form>
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-[900px] mx-auto">
        <input type="email" placeholder="Jane Doe" className="form-input flex-1" />
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input type="text" placeholder="Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
        <div>
            <label className="flex items-center cursor-pointer">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-white-dark">Remember me</span>
            </label>
        </div>
        <button type="submit" className="btn btn-primary py-2.5">
            Submit
        </button>
    </div>
</form>`})})]}),t("div",{className:"panel lg:row-start-3 lg:col-start-2",id:"actions_buttons",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Actions Buttons"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>r("code8"),children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),e("div",{className:"mb-5",children:t("form",{className:"space-y-5",children:[t("div",{children:[e("label",{htmlFor:"actionName",children:"Full Name:"}),e("input",{id:"actionName",type:"text",placeholder:"Enter Full Name",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"actionEmail",children:"Email:"}),t("div",{className:"flex flex-1",children:[e("div",{className:"bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]",children:"@"}),e("input",{id:"actionEmail",type:"email",placeholder:"",className:"form-input ltr:rounded-l-none rtl:rounded-r-none"})]})]}),t("div",{children:[e("label",{htmlFor:"actionWeb",children:"Website:"}),e("input",{id:"actionWeb",type:"text",placeholder:"https://",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"actionPassword",children:"Password:"}),e("input",{id:"actionPassword",type:"password",placeholder:"Enter Password",className:"form-input"})]}),t("div",{children:[e("label",{htmlFor:"actionCpass",children:"Confirm Password:"}),e("input",{id:"actionCpass",type:"password",placeholder:"Enter Confirm Password",className:"form-input"})]}),e("button",{type:"submit",className:"btn btn-primary !mt-6",children:"Submit"})]})}),l.includes("code8")&&e(a,{children:e("pre",{className:"language-xml",children:`<form className="space-y-5">
    <div>
        <label htmlFor="actionName">Full Name:</label>
        <input id="actionName" type="text" placeholder="Enter Full Name" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionEmail">Email:</label>
        <div className="flex flex-1">
            <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                @
            </div>
            <input id="actionEmail" type="email" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <label htmlFor="actionWeb">Website:</label>
        <input id="actionWeb" type="text" placeholder="https://" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionPassword">Password:</label>
        <input id="actionPassword" type="password" placeholder="Enter Password" className="form-input" />
    </div>
    <div>
        <label htmlFor="actionCpass">Confirm Password:</label>
        <input id="actionCpass" type="password" placeholder="Enter Confirm Password" className="form-input" />
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`})})]})]})]})};export{f as default};
