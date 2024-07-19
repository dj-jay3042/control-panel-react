import{r as o,R as E,u as W,s as M,j as t,b as e,L as B}from"./main-7531e2c1.js";import{C}from"./Highlight-94b10142.js";function L(a,s,i){return s in a?Object.defineProperty(a,s,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[s]=i,a}var N={click:"onClick",focusin:"onFocus",focusout:"onFocus",mousedown:"onMouseDown",mouseup:"onMouseUp",touchstart:"onTouchStart",touchend:"onTouchEnd"},A=function(a){var s,i=a.children,u=a.onClickAway,b=a.focusEvent,p=b===void 0?"focusin":b,w=a.mouseEvent,d=w===void 0?"click":w,m=a.touchEvent,h=m===void 0?"touchend":m,f=o.useRef(null),y=o.useRef(null),r=o.useRef(!1);o.useEffect(function(){return setTimeout(function(){r.current=!0},0),function(){r.current=!1}},[]);var v=function(c){return function(l){y.current=l.target;var n=i==null?void 0:i.props[c];n&&n(l)}};o.useEffect(function(){var c,l,n=(c=(l=f.current)===null||l===void 0?void 0:l.ownerDocument)!==null&&c!==void 0?c:document,g=function(x){r.current&&(f.current&&f.current.contains(x.target)||y.current===x.target||!n.contains(x.target)||u(x))};return n.addEventListener(d,g),n.addEventListener(h,g),n.addEventListener(p,g),function(){n.removeEventListener(d,g),n.removeEventListener(h,g),n.removeEventListener(p,g)}},[p,d,u,h]);var k=N[d],_=N[h],j=N[p];return E.Children.only(o.cloneElement(i,(L(s={ref:function(c){f.current=c;var l=i.ref;typeof l=="function"?l(c):l&&(l.current=c)}},j,v(j)),L(s,k,v(k)),L(s,_,v(_)),s)))};A.displayName="ClickAwayListener";const S=[{thumb:"profile-5.jpeg",name:"Alan Green",email:"alan@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-11.jpeg",name:"Linda Nelson",email:"Linda@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"},{thumb:"profile-12.jpeg",name:"Lila Perry",email:"Lila@mail.com",status:"Closed",statusClass:"badge badge-outline-warning"},{thumb:"profile-3.jpeg",name:"Andy King",email:"Andy@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-15.jpeg",name:"Jesse Cory",email:"Jesse@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"}],I=()=>{const a=W();o.useEffect(()=>{a(M("Search"))});const[s,i]=o.useState([]),[u,b]=o.useState(""),[p,w]=o.useState(S),d=r=>{s.includes(r)?i(v=>v.filter(k=>k!==r)):i([...s,r])};o.useEffect(()=>{w(()=>S.filter(r=>r.name.toLowerCase().includes(u.toLowerCase())||r.email.toLowerCase().includes(u.toLowerCase())))},[u]);const[m,h]=o.useState(!1),f=()=>{h(!0)},y=()=>{h(!1)};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(B,{to:"#",className:"text-primary hover:underline",children:"Elements"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Search"})})]}),t("div",{className:"pt-5 grid lg:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel lg:row-span-2",id:"live",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Live Search"}),e("button",{onClick:()=>{d("code1")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5 space-y-5",children:[e("form",{className:"mx-auto w-full sm:w-1/2 mb-5",children:t("div",{className:"relative",children:[e("input",{type:"text",value:u,placeholder:"Search Attendees...",className:"form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11",onChange:r=>b(r.target.value)}),e("button",{type:"button",className:"btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center",children:t("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5"}),e("path",{d:"M18.5 18.5L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})}),e("div",{className:"p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block",children:p.map(r=>t("div",{className:`bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                                         text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]`,children:[e("div",{className:"user-profile",children:e("img",{src:`/assets/images/${r.thumb}`,alt:"img",className:"w-8 h-8 rounded-md object-cover"})}),e("div",{children:r.name}),e("div",{children:r.email}),e("div",{className:`badge ${r.statusClass} border-2 border-dashed`,children:r.status}),e("div",{className:"cursor-pointer",children:t("svg",{className:"w-6 h-6 opacity-70",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"5",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),e("circle",{opacity:"0.5",cx:"12",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"}),e("circle",{cx:"19",cy:"12",r:"2",stroke:"currentColor",strokeWidth:"1.5"})]})})]},r.email))})]}),s.includes("code1")&&e(C,{children:e("pre",{children:`import { useState, useEffect } from 'react';

const items = [
    {
        thumb: 'profile-5.jpeg',
        name: 'Alan Green',
        email: 'alan@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-11.jpeg',
        name: 'Linda Nelson',
        email: 'Linda@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
    {
        thumb: 'profile-12.jpeg',
        name: 'Lila Perry',
        email: 'Lila@mail.com',
        status: 'Closed',
        statusClass: 'badge badge-outline-warning',
    },
    {
        thumb: 'profile-3.jpeg',
        name: 'Andy King',
        email: 'Andy@mail.com',
        status: 'Active',
        statusClass: 'badge badge-outline-primary',
    },
    {
        thumb: 'profile-15.jpeg',
        name: 'Jesse Cory',
        email: 'Jesse@mail.com',
        status: 'Busy',
        statusClass: 'badge badge-outline-danger',
    },
];

const [search, setSearch] = useState<string>('');
const [filteredItems, setFilteredItems] = useState<any>(items);

useEffect(() => {
        setFilteredItems(() => {
            return items.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase()) || item.email.toLowerCase().includes(search.toLowerCase());
            });
        });
}, [search]);


<div className="mb-5 space-y-5">
    <form className="mx-auto w-full sm:w-1/2 mb-5">
        <div className="relative">
            <input
                type="text"
                value={search}
                placeholder="Search Attendees..."
                className="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button" className="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
                <svg>...</svg>
            </button>
        </div>
    </form>
    <div className="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
        {filteredItems.map((item: any) => {
            return (
                <div
                    key={item.email}
                    className="bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between
                        text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]"
                >
                    <div className="user-profile">
                        <img src={\`/assets/images/\${item.thumb}\`} alt="img" className="w-8 h-8 rounded-md object-cover" />
                    </div>
                    <div>{item.name}</div>
                    <div>{item.email}</div>
                    <div className={\`badge \${item.statusClass} border-2 border-dashed\`}>{item.status}</div>
                    <div className="cursor-pointer">
                        <svg>...</svg>
                    </div>
                </div>
            );
        })}
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Overlay"}),e("button",{onClick:()=>{d("code2")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 space-y-5",children:e("form",{children:e(A,{onClickAway:y,children:t("div",{className:"search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full",onClick:f,children:[e("input",{type:"text",placeholder:"Search...",className:`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${m?"!block":""}`}),e("button",{type:"button",className:`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${m?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}`,children:t("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5"}),e("path",{d:"M18.5 18.5L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})})})}),s.includes("code2")&&e(C,{children:e("pre",{children:`import { useState} from 'react';

const [focus, setFocus] = useState(false);

const overlayClickAway = () => {
    setFocus(false);
};

<form>
    <ClickAwayListener onClickAway={overlayClickAway}>
        <div className="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full" onClick={overlaySearchClick}>
            <input
                type="text"
                placeholder="Search..."
                className={\`form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer ${m?"!block":""}\`}
            />
            <button
                type="button"
                className={\`text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary ${m?"!ltr:!right-auto ltr:left-1 rtl:right-1":""}\`}
            >
                <svg>...</svg>
            </button>
        </div>
    </ClickAwayListener>
</form>`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Search Box"}),e("button",{onClick:()=>{d("code3")},className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5 space-y-5",children:e("form",{children:t("div",{className:"relative border border-white-dark/20  w-full flex",children:[e("button",{type:"submit",placeholder:"Let's find your question in fast way",className:"text-primary m-auto p-3 flex items-center justify-center",children:t("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.5"}),e("path",{d:"M18.5 18.5L22 22",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("input",{type:"text",placeholder:"Let's find your question in fast way",className:"form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"})]})})}),s.includes("code3")&&e(C,{children:e("pre",{children:`import { useState} from 'react';
import ClickAwayListener from 'react-click-away-listener';

const [focus, setFocus] = useState(false);

const overlaySearchClick = () => {
        setFocus(true);
};

<form>
    <div className="relative border border-white-dark/20  w-full flex">
        <button type="submit" placeholder="Let's find your question in fast way" className="text-primary m-auto p-3 flex items-center justify-center">
            <svg>...</svg>
        </button>
        <input
            type="text"
            placeholder="Let's find your question in fast way"
            className="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"
        />
    </div>
</form>`})})]})]})]})};export{I as default};
