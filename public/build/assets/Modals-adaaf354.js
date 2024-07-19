import{u as oe,r as a,s as de,a as ie,j as t,b as e,L as ce}from"./main-7531e2c1.js";import{C as d}from"./Highlight-94b10142.js";import{S as me,N as ue,P as pe,a as he}from"./pagination.min-72138360.js";import{q as i,_ as s}from"./transition-cbacc032.js";import{$ as r}from"./tabs-09fb0ba8.js";import"./keyboard-765269c9.js";import"./use-is-mounted-f7007df8.js";import"./bugs-6f3fc5d0.js";import"./use-resolve-button-type-440eb0cb.js";const Ce=()=>{const se=oe();a.useEffect(()=>{se(de("Modals"))});const le=["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"],M=ie(l=>l.themeConfig.rtlClass)==="rtl",[n,q]=a.useState([]),o=l=>{n.includes(l)?q(_=>_.filter(ne=>ne!==l)):q([...n,l])},[W,c]=a.useState(!1),[z,m]=a.useState(!1),[V,u]=a.useState(!1),[U,p]=a.useState(!1),[B,h]=a.useState(!1),[I,b]=a.useState(!1),[O,v]=a.useState(!1),[R,j]=a.useState(!1),[E,f]=a.useState(!1),[$,g]=a.useState(!1),[A,x]=a.useState(!1),[Z,y]=a.useState(!1),[H,k]=a.useState(!1),[G,w]=a.useState(!1),[Q,N]=a.useState(!1),[Y,C]=a.useState(!1),[J,F]=a.useState(!1),[K,T]=a.useState(!1),[X,L]=a.useState(!1),[ee,S]=a.useState(!1),[te,D]=a.useState(!1),[re,P]=a.useState(!1),ae=ie(l=>l.themeConfig);return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(ce,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Modals"})})]}),t("div",{className:"space-y-8 pt-5",children:[t("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary",children:[e("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:t("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://headlessui.com/react/dialog",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://headlessui.com/react/dialog"})]}),t("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Basic"}),e("button",{type:"button",onClick:()=>o("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:[e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>c(!0),children:"Launch modal"})}),e(i,{appear:!0,show:W,as:a.Fragment,children:t(s,{as:"div",open:W,onClose:()=>c(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{as:"div",className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("div",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{type:"button",className:"text-white-dark hover:text-dark",onClick:()=>c(!1),children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>c(!1),children:"Discard"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:()=>c(!1),children:"Save"})]})]})]})})})})]})})]}),n.includes("code1")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition,Tab } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal1, setModal1] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={() => setModal1(true)}>
            Launch modal
        </button>
    </div>
    <Transition appear show={modal1} as={Fragment}>
        <Dialog as="div" open={modal1} onClose={() => setModal1(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </Transition.Child>
            <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                <div className="flex items-start justify-center min-h-screen px-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden my-8 w-full max-w-lg text-black dark:text-white-dark">
                            <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                <div className="text-lg font-bold">Modal Title</div>
                                <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal1(false)}>
                                    <svg>...</svg>
                                </button>
                            </div>
                            <div className="p-5">
                                <p>
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit
                                    amet ullamcorper mi.
                                </p>
                                <div className="flex justify-end items-center mt-8">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => setModal1(false)}>
                                        Discard
                                    </button>
                                    <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => setModal1(false)}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>

                                        `})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Vertically Centered"}),e("button",{type:"button",onClick:()=>o("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:[e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",onClick:()=>m(!0),className:"btn btn-info",children:"Launch modal"})}),e(i,{appear:!0,show:z,as:a.Fragment,children:t(s,{as:"div",open:z,onClose:()=>m(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-center justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{as:"div",className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{type:"button",className:"text-white-dark hover:text-dark",onClick:()=>m(!1),children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>m(!1),children:"Discard"}),e("button",{type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",onClick:()=>m(!1),children:"Save"})]})]})]})})})})]})})]}),n.includes("code2")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal2, setModal2] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" onClick={() => setModal2(true)} className="btn btn-info">
            Launch modal
        </button>
    </div>
    <Transition appear show={modal2} as={Fragment}>
        <Dialog as="div" open={modal2} onClose={() => setModal2(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </Transition.Child>
            <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                            <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                <h5 className="font-bold text-lg">Modal Title</h5>
                                <button type="button" className="text-white-dark hover:text-dark" onClick={() => setModal2(false)}>
                                    <svg>...</svg>
                                </button>
                            </div>
                            <div className="p-5">
                                <p>
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit
                                    amet ullamcorper mi.
                                </p>
                                <div className="flex justify-end items-center mt-8">
                                    <button type="button" className="btn btn-outline-danger" onClick={() => setModal2(false)}>
                                        Discard
                                    </button>
                                    <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => setModal2(false)}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>
`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Static"}),e("button",{type:"button",onClick:()=>o("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:[e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",onClick:()=>u(!0),className:"btn btn-secondary",children:"Static modal"})}),e(i,{appear:!0,show:V,as:a.Fragment,children:t(s,{as:"div",open:V,onClose:()=>u(!0),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("div",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{type:"button",onClick:()=>u(!1),className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{type:"button",onClick:()=>u(!1),className:"btn btn-outline-danger",children:"Discard"}),e("button",{type:"button",onClick:()=>u(!1),className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),n.includes("code3")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal3, setModal3] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" onClick={() => setModal3(true)} className="btn btn-secondary">
            Static modal
        </button>
    </div>
    <Transition appear show={modal3} as={Fragment}>
        <Dialog as="div" open={modal3} onClose={() => setModal3(true)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </Transition.Child>
            <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                <div className="flex items-start justify-center min-h-screen px-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                            <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                <div className="font-bold text-lg">Modal Title</div>
                                <button type="button" onClick={() => setModal3(false)} className="text-white-dark hover:text-dark">
                                    <svg>...</svg>
                                </button>
                            </div>
                            <div className="p-5">
                                <p>
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit
                                    amet ullamcorper mi.
                                </p>
                                <div className="flex justify-end items-center mt-8">
                                    <button type="button" onClick={() => setModal3(false)} className="btn btn-outline-danger">
                                        Discard
                                    </button>
                                    <button type="button" onClick={() => setModal3(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>

`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Remove animation"}),e("button",{type:"button",onClick:()=>o("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",onClick:()=>p(!0),children:[e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-success",children:"Launch modal"})}),e(i,{appear:!0,show:U,as:a.Fragment,children:t(s,{as:"div",open:U,onClose:()=>p(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] bg-[black]/60 px-4",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:"panel my-8 w-full max-w-lg overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{type:"button",onClick:()=>p(!1),className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>p(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{type:"button",onClick:()=>p(!1),className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),n.includes("code4")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal4, setModal4] = useState(false);

<div className="mb-5" onClick={() => setModal4(true)}>
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success">
            Launch modal
        </button>
    </div>
    <Transition appear show={modal4} as={Fragment}>
        <Dialog as="div" open={modal4} onClose={() => setModal4(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0" />
            </Transition.Child>
            <div className="fixed inset-0 bg-[black]/60 z-[999] px-4">
                <div className="flex items-start justify-center min-h-screen px-4">
                    <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden  w-full max-w-lg my-8 text-black dark:text-white-dark">
                        <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                            <h5 className="font-bold text-lg">Modal Title</h5>
                            <button type="button" onClick={() => setModal4(false)} className="text-white-dark hover:text-dark">
                                <svg>...</svg>
                            </button>
                        </div>
                        <div className="p-5">
                            <p>
                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus
                                et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper
                                mi.
                            </p>
                            <div className="flex justify-end items-center mt-8">
                                <button onClick={() => setModal4(false)} type="button" className="btn btn-outline-danger">
                                    Discard
                                </button>
                                <button type="button" onClick={() => setModal4(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                    Save
                                </button>
                            </div>
                        </div>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    </Transition>
</div>
`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Optional sizes"}),e("button",{type:"button",onClick:()=>o("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"flex items-center justify-center gap-2",children:[t("div",{children:[e("button",{type:"button",onClick:()=>h(!0),className:"btn btn-warning",children:"Extra large"}),e(i,{appear:!0,show:B,as:a.Fragment,children:t(s,{as:"div",open:B,onClose:()=>h(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-5xl overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>h(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>h(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>h(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),t("div",{children:[e("button",{type:"button",onClick:()=>b(!0),className:"btn btn-danger",children:"Large"}),e(i,{appear:!0,show:I,as:a.Fragment,children:t(s,{as:"div",open:I,onClose:()=>b(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-xl overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>b(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>b(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>b(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),t("div",{children:[e("button",{type:"button",onClick:()=>v(!0),className:"btn btn-secondary",children:"Small"}),e(i,{appear:!0,show:O,as:a.Fragment,children:t(s,{as:"div",open:O,onClose:()=>v(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-sm overflow-hidden  rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>v(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>v(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>v(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]})]})}),n.includes("code5")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';


const [modal5, setModal5] = useState(false);
const [modal6, setModal6] = useState(false);
const [modal7, setModal7] = useState(false);

<div className="mb-5">
    <div className="flex items-center justify-center gap-2">
        <div>
            <button type="button" onClick={() => setModal5(true)} className="btn btn-warning">
                Extra large
            </button>
            <Transition appear show={modal5} as={Fragment}>
                <Dialog as="div" open={modal5} onClose={() => setModal5(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999]">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-5xl my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Modal Title</h5>
                                        <button onClick={() => setModal5(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <p>
                                            Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius
                                            natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac
                                            pulvinar. Ut sit amet ullamcorper mi.
                                        </p>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal5(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal5(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

        <div>
            <button type="button" onClick={() => setModal6(true)} className="btn btn-danger">
                Large
            </button>
            <Transition appear show={modal6} as={Fragment}>
                <Dialog as="div" open={modal6} onClose={() => setModal6(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999]">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden  w-full max-w-xl my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Modal Title</h5>
                                        <button onClick={() => setModal6(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="dark:text-white-dark/70 text-base font-medium text-[#1f2937]">
                                            <p>
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius
                                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac
                                                pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal6(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal6(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>

        <div>
            <button type="button" onClick={() => setModal7(true)} className="btn btn-secondary">
                Small
            </button>
            <Transition appear show={modal7} as={Fragment}>
                <Dialog as="div" open={modal7} onClose={() => setModal7(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden  w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Modal Title</h5>
                                        <button onClick={() => setModal7(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="dark:text-white-dark/70 text-base font-medium text-[#1f2937]">
                                            <p>
                                                Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius
                                                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac
                                                pulvinar. Ut sit amet ullamcorper mi.
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal7(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal7(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    </div>
</div>

`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Video"}),e("button",{type:"button",onClick:()=>o("code6"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:[e("div",{className:"flex items-center justify-center",children:e("button",{onClick:()=>j(!0),type:"button",className:"btn btn-primary",children:"Play Youtube"})}),e(i,{appear:!0,show:R,as:a.Fragment,children:t(s,{as:"div",open:R,onClose:()=>j(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"my-8 w-full max-w-3xl overflow-hidden",children:[e("div",{className:"text-right",children:e("button",{onClick:()=>j(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})}),e("iframe",{title:"youtube-video",src:"https://www.youtube.com/embed/tgbNymZ7vqY",className:"h-[250px] w-full md:h-[550px]"})]})})})})]})})]}),n.includes("code6")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal8, setModal8] = useState(false);

<div className="mb-5">
<div className="flex items-center justify-center">
    <button onClick={() => setModal8(true)} type="button" className="btn btn-primary">
        Play Youtube
    </button>
</div>
<Transition appear show={modal8} as={Fragment}>
    <Dialog as="div" open={modal8} onClose={() => setModal8(false)}>
        <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="fixed inset-0" />
        </Transition.Child>
        <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
            <div className="flex items-start justify-center min-h-screen px-4">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="max-w-3xl w-full my-8 overflow-hidden">
                        <div className="text-right">
                            <button onClick={() => setModal8(false)} type="button" className="text-white-dark hover:text-dark">
                                <svg>...</svg>
                            </button>
                        </div>
                        <iframe title="youtube-video" src="https://www.youtube.com/embed/tgbNymZ7vqY" className="w-full h-[250px] md:h-[550px]"></iframe>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
        </div>
    </Dialog>
</Transition>
</div>
`})})]}),t("div",{className:"panel md:col-span-2",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Animation Style Modal"}),e("button",{type:"button",onClick:()=>o("code7"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e("div",{className:"mb-5",children:t("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[t("div",{children:[e("button",{onClick:()=>f(!0),type:"button",className:"btn btn-primary",children:"FadeIn"}),e(i,{appear:!0,show:E,as:a.Fragment,children:t(s,{as:"div",open:E,onClose:()=>f(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"fadein_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:"panel animate__animated animate__fadeIn my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>f(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>f(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>f(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),t("div",{children:[e("button",{onClick:()=>g(!0),type:"button",className:"btn btn-info",children:"SlideIn Down"}),e(i,{appear:!0,show:$,as:a.Fragment,children:t(s,{as:"div",open:$,onClose:()=>g(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"slideIn_down_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:"panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>g(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>g(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>g(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),t("div",{children:[e("button",{type:"button",onClick:()=>x(!0),className:"btn btn-success",children:"FadeIn Up"}),e(i,{appear:!0,show:A,as:a.Fragment,children:t(s,{as:"div",open:A,onClose:()=>x(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"fadein_left_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:"panel animate__animated animate__fadeInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>x(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>x(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>x(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),t("div",{children:[e("button",{onClick:()=>y(!0),type:"button",className:"btn btn-warning",children:"SlideIn Up"}),e(i,{appear:!0,show:Z,as:a.Fragment,children:t(s,{as:"div",open:Z,onClose:()=>y(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"slidein_up_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:"panel animate__animated animate__slideInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>y(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>y(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>y(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),t("div",{children:[e("button",{onClick:()=>k(!0),type:"button",className:"btn btn-danger",children:"FadeIn Left"}),e(i,{appear:!0,show:H,as:a.Fragment,children:t(s,{as:"div",open:H,onClose:()=>k(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"fadein_up_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${M?"animate__fadeInRight":"animate__fadeInLeft"}`,children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>k(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>k(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>k(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),t("div",{children:[e("button",{onClick:()=>w(!0),type:"button",className:"btn btn-secondary",children:"RotateIn Left"}),e(i,{appear:!0,show:G,as:a.Fragment,children:t(s,{as:"div",open:G,onClose:()=>w(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"rotatein_left_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${M?"animate__rotateInDownRight":"animate__rotateInDownLeft"}`,children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>w(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>w(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>w(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),t("div",{children:[e("button",{onClick:()=>N(!0),type:"button",className:"btn btn-dark",children:"FadeIn Right"}),e(i,{appear:!0,show:Q,as:a.Fragment,children:t(s,{as:"div",open:Q,onClose:()=>N(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"fadein_right_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:`panel animate__animated my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark ${M?"animate__fadeInLeft":"animate__fadeInRight"}`,children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>N(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>N(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>N(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]}),t("div",{children:[e("button",{onClick:()=>C(!0),type:"button",className:"btn btn-primary",children:"ZoomIn Up"}),e(i,{appear:!0,show:Y,as:a.Fragment,children:t(s,{as:"div",open:Y,onClose:()=>C(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"zoomIn_up_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:"panel animate__animated animate__zoomInUp my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Modal Title"}),e("button",{onClick:()=>C(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[e("p",{children:"Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi."}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>C(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>C(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})]})})]})]})}),n.includes("code7")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';

const [modal9, setModal9] = useState(false);
const [modal10, setModal10] = useState(false);
const [modal11, setModal11] = useState(false);
const [modal12, setModal12] = useState(false);
const [modal13, setModal13] = useState(false);
const [modal14, setModal14] = useState(false);
const [modal15, setModal15] = useState(false);
const [modal16, setModal16] = useState(false);

<div className="mb-5">
    <div className="flex flex-wrap items-center justify-center gap-2">
        <div>
            <button onClick={() => setModal9(true)} type="button" className="btn btn-primary">
                FadeIn
            </button>
            <Transition appear show={modal9} as={Fragment}>
                <Dialog as="div" open={modal9} onClose={() => setModal9(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="fadein_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__fadeIn">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal9(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal9(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal9(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal10(true)} type="button" className="btn btn-info">
                SlideIn Down
            </button>
            <Transition appear show={modal10} as={Fragment}>
                <Dialog as="div" open={modal10} onClose={() => setModal10(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="slideIn_down_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__slideInDown">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal10(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal10(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal10(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button type="button" onClick={() => setModal11(true)} className="btn btn-success">
                FadeIn Up
            </button>
            <Transition appear show={modal11} as={Fragment}>
                <Dialog as="div" open={modal11} onClose={() => setModal11(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="fadein_left_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__fadeInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal11(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal11(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal11(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal12(true)} type="button" className="btn btn-warning">
                SlideIn Up
            </button>
            <Transition appear show={modal12} as={Fragment}>
                <Dialog as="div" open={modal12} onClose={() => setModal12(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="slidein_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__slideInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal12(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal12(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal12(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal13(true)} type="button" className="btn btn-danger">
                FadeIn Left
            </button>
            <Transition appear show={modal13} as={Fragment}>
                <Dialog as="div" open={modal13} onClose={() => setModal13(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="fadein_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'

                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal13(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal13(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal13(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal14(true)} type="button" className="btn btn-secondary">
                RotateIn Left
            </button>
            <Transition appear show={modal14} as={Fragment}>
                <Dialog as="div" open={modal14} onClose={() => setModal14(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="rotatein_left_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'
                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal14(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal14(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal14(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal15(true)} type="button" className="btn btn-dark">
                FadeIn Right
            </button>
            <Transition appear show={modal15} as={Fragment}>
                <Dialog as="div" open={modal15} onClose={() => setModal15(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="fadein_right_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel
                                className='panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated'
                            >
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal15(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal15(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal15(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        <div>
            <button onClick={() => setModal16(true)} type="button" className="btn btn-primary">
                ZoomIn Up
            </button>
            <Transition appear show={modal16} as={Fragment}>
                <Dialog as="div" open={modal16} onClose={() => setModal16(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="zoomIn_up_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark animate__animated animate__zoomInUp">
                                <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                    <h5 className="font-bold text-lg">Modal Title</h5>
                                    <button onClick={() => setModal16(false)} type="button" className="text-white-dark hover:text-dark">
                                        <svg>...</svg>
                                    </button>
                                </div>
                                <div className="p-5">
                                    <p>
                                        Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque
                                        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut
                                        sit amet ullamcorper mi.
                                    </p>
                                    <div className="flex justify-end items-center mt-8">
                                        <button onClick={() => setModal16(false)} type="button" className="btn btn-outline-danger">
                                            Discard
                                        </button>
                                        <button onClick={() => setModal16(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    </div>
</div>

`})})]}),t("div",{className:"panel md:col-span-2",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Custom"}),e("button",{type:"button",onClick:()=>o("code8"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),t("div",{className:"mb-5",children:[e("p",{className:"mb-4 text-center",children:"More Custom Modals."}),t("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[t("div",{children:[e("button",{type:"button",onClick:()=>F(!0),className:"btn btn-primary",children:"Standard"}),e(i,{appear:!0,show:J,as:a.Fragment,children:t(s,{as:"div",open:J,onClose:()=>F(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"standard_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[e("div",{className:"flex items-center justify-center p-5 text-base font-medium text-[#1f2937] dark:text-white-dark/70",children:e("span",{className:"flex h-16 w-16 items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-white/10",children:t("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})}),t("div",{className:"p-5",children:[e("div",{className:"text-center text-sm text-white-dark",children:e("p",{children:"Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum."})}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{type:"button",onClick:()=>F(!1),className:"btn btn-outline-danger",children:"Discard"}),e("button",{type:"button",onClick:()=>F(!1),className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),t("div",{children:[e("button",{onClick:()=>T(!0),type:"button",className:"btn btn-info",children:"Tabs"}),e(i,{appear:!0,show:K,as:a.Fragment,children:t(s,{as:"div",open:K,onClose:()=>T(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"tabs_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[e("h5",{className:"text-lg font-bold",children:"Tabs"}),e("button",{onClick:()=>T(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t("div",{className:"p-5",children:[t(r.Group,{children:[t(r.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[e(r,{as:a.Fragment,children:({selected:l})=>e("button",{type:"button",className:`${l?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""} -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`,children:"Home"})}),e(r,{as:a.Fragment,children:({selected:l})=>e("button",{type:"button",className:`${l?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`,children:"Profile"})}),e(r,{as:a.Fragment,children:({selected:l})=>e("button",{type:"button",className:`${l?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary dark:hover:border-b-black`,children:"Contact"})}),e(r,{className:"pointer-events-none -mb-[1px] block p-3.5 py-2 text-white-light outline-none dark:text-dark",children:"Disabled"})]}),t(r.Panels,{children:[e(r.Panel,{children:t("div",{className:"active pt-5 text-sm",children:[e("h4",{className:"mb-4 text-2xl font-semibold",children:"We move your world!"}),e("p",{className:"mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]})}),e(r.Panel,{children:e("div",{children:t("div",{className:"flex items-start pt-5",children:[e("div",{className:"h-20 w-20 flex-none ltr:mr-4 rtl:ml-4",children:e("img",{src:"/assets/images/profile-34.jpeg",alt:"img",className:"m-0 h-20 w-20 rounded-full object-cover ring-2 ring-[#ebedf2] dark:ring-white-dark"})}),t("div",{className:"flex-auto",children:[e("h5",{className:"mb-4 text-xl font-medium",children:"Media heading"}),e("p",{className:"text-white-dark",children:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."})]})]})})}),e(r.Panel,{children:e("div",{className:"pt-5",children:e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),e(r.Panel,{children:"Disabled"})]})]}),t("div",{className:"mt-8 flex items-center justify-end",children:[e("button",{onClick:()=>T(!1),type:"button",className:"btn btn-outline-danger",children:"Discard"}),e("button",{onClick:()=>T(!1),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Save"})]})]})]})})})})]})})]}),t("div",{children:[e("button",{type:"button",onClick:()=>L(!0),className:"btn btn-success",children:"Profile"}),e(i,{appear:!0,show:X,as:a.Fragment,children:t(s,{as:"div",open:X,onClose:()=>L(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"profile_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-[300px] overflow-hidden rounded-lg border-0 bg-secondary p-0 text-black dark:bg-secondary dark:text-white-dark",children:[e("div",{className:"flex items-center justify-end pt-4 text-white ltr:pr-4 rtl:pl-4 dark:text-white-light",children:e("button",{onClick:()=>L(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})}),t("div",{className:"p-5",children:[t("div",{className:"py-5 text-center text-white dark:text-white-light",children:[e("div",{className:"mx-auto mb-7 h-20 w-20 overflow-hidden rounded-full",children:e("img",{src:"/assets/images/profile-16.jpeg",alt:"img",className:"h-full w-full object-cover"})}),t("p",{className:"font-semibold",children:["Click on view to access ",e("br",{}),"your profile."]})]}),e("div",{className:"flex justify-center gap-4 p-5",children:e("button",{type:"button",className:"btn dark:btn-dark bg-white text-black",children:"View"})})]})]})})})})]})})]}),t("div",{children:[e("button",{type:"button",onClick:()=>S(!0),className:"btn btn-warning",children:"Login"}),e(i,{appear:!0,show:ee,as:a.Fragment,children:t(s,{as:"div",open:ee,onClose:()=>S(!1),children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"login_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-sm overflow-hidden rounded-lg border-0 py-1 px-4 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between p-5 text-lg font-semibold dark:text-white",children:[e("h5",{children:"Login"}),e("button",{type:"button",onClick:()=>S(!1),className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e("div",{className:"p-5",children:t("form",{children:[t("div",{className:"relative mb-4",children:[e("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:t("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]})}),e("input",{type:"email",placeholder:"Email",className:"form-input ltr:pl-10 rtl:pr-10",id:"login_email"})]}),t("div",{className:"relative mb-4",children:[e("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e("path",{d:"M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("input",{type:"password",placeholder:"Password",className:"form-input ltr:pl-10 rtl:pr-10",id:"login_password"})]}),e("button",{type:"button",className:"btn btn-primary w-full",children:"Login"})]})}),e("div",{className:"my-4 text-center text-xs text-white-dark dark:text-white-dark/70",children:"OR"}),t("div",{className:"mb-5 flex items-center justify-center gap-3",children:[t("button",{type:"button",className:"btn btn-outline-primary flex gap-1",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 shrink-0",children:e("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})}),e("span",{children:"Facebook"})]}),t("button",{type:"button",className:"btn btn-outline-danger flex gap-1",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 shrink-0",children:e("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),e("span",{children:"Github"})]})]}),e("div",{className:"border-t border-[#ebe9f1] p-5 dark:border-white/10",children:t("p",{className:"text-center text-sm text-white-dark dark:text-white-dark/70",children:["Looking to",e("button",{type:"button",className:"text-[#515365] hover:underline ltr:ml-1 rtl:mr-1 dark:text-white-dark",children:"create an account?"})]})})]})})})})]})})]}),t("div",{children:[e("button",{type:"button",onClick:()=>D(!0),className:"btn btn-danger",children:"Register"}),e(i,{appear:!0,show:te,as:a.Fragment,children:t(s,{as:"div",open:te,onClose:()=>{D(!1)},children:[e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0"})}),e("div",{id:"register_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:e(i.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t(s.Panel,{className:"panel my-8 w-full max-w-sm overflow-hidden rounded-lg border-0 py-1 px-4 text-black dark:text-white-dark",children:[t("div",{className:"flex items-center justify-between p-5 text-lg font-semibold dark:text-white",children:[e("h5",{children:"Register"}),e("button",{type:"button",onClick:()=>D(!1),className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e("div",{className:"p-5",children:t("form",{children:[t("div",{className:"relative mb-4",children:[e("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:t("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("circle",{cx:"12",cy:"6",r:"4",stroke:"currentColor",strokeWidth:"1.5"}),e("ellipse",{opacity:"0.5",cx:"12",cy:"17",rx:"7",ry:"4",stroke:"currentColor",strokeWidth:"1.5"})]})}),e("input",{type:"text",placeholder:"Name",className:"form-input ltr:pl-10 rtl:pr-10",id:"name"})]}),t("div",{className:"relative mb-4",children:[e("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e("path",{d:"M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 12.7215 17.8726 13.4133 17.6392 14.054C17.5551 14.285 17.4075 14.4861 17.2268 14.6527L17.1463 14.727C16.591 15.2392 15.7573 15.3049 15.1288 14.8858C14.6735 14.5823 14.4 14.0713 14.4 13.5241V12M14.4 12C14.4 13.3255 13.3255 14.4 12 14.4C10.6745 14.4 9.6 13.3255 9.6 12C9.6 10.6745 10.6745 9.6 12 9.6C13.3255 9.6 14.4 10.6745 14.4 12Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z",stroke:"currentColor",strokeWidth:"1.5"})]})}),e("input",{type:"email",placeholder:"Email",className:"form-input ltr:pl-10 rtl:pr-10",id:"email"})]}),t("div",{className:"relative mb-4",children:[e("span",{className:"absolute top-1/2 -translate-y-1/2 ltr:left-3 rtl:right-3 dark:text-white-dark",children:t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",children:[e("path",{d:"M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M6 10V8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("input",{type:"password",placeholder:"Password",className:"form-input ltr:pl-10 rtl:pr-10",id:"password"})]}),e("button",{type:"button",className:"btn btn-primary w-full",children:"Submit"})]})}),e("div",{className:"my-4 text-center text-xs text-white-dark dark:text-white-dark/70",children:"OR"}),t("div",{className:"mb-5 flex items-center justify-center gap-3",children:[t("button",{type:"button",className:"btn btn-outline-primary flex gap-1",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 shrink-0",children:e("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})}),e("span",{children:"Facebook"})]}),t("button",{type:"button",className:"btn btn-outline-danger flex gap-1",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",className:"h-5 w-5 shrink-0",children:e("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})}),e("span",{children:"Github"})]})]}),e("div",{className:"border-t border-[#ebe9f1] p-5 dark:border-white/10",children:t("p",{className:"text-center text-sm text-white-dark dark:text-white-dark/70",children:["Already have",e("button",{type:"button",className:"text-[#515365] hover:underline ltr:ml-1 rtl:mr-1 dark:text-white-dark",children:"Login?"})]})})]})})})})]})})]}),t("div",{children:[e("button",{type:"button",onClick:()=>P(!0),className:"btn btn-secondary",children:"Slider"}),e(s,{as:"div",open:re,onClose:()=>{P(!1)},children:e("div",{id:"slider_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:e("div",{className:"flex min-h-screen items-start justify-center px-4",children:t(s.Panel,{className:"animate__animated animate__fadeIn panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 py-1 px-4",children:[t("div",{className:"flex items-center justify-between py-5 text-lg font-semibold dark:text-white",children:[e("span",{children:"Slider"}),e("button",{onClick:()=>P(!1),type:"button",className:"text-white-dark hover:text-dark",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),t(me,{modules:[ue,pe],navigation:{nextEl:".swiper-button-next1",prevEl:".swiper-button-prev1"},pagination:{clickable:!0},className:"swiper mx-auto mb-5 max-w-3xl",id:"slider1",dir:ae.rtlClass,children:[e("div",{className:"swiper-wrapper",children:le.map((l,_)=>e(he,{children:e("img",{src:`/assets/images/${l}`,className:"max-h-80 w-full object-cover",alt:"img"})},_))}),e("button",{type:"button",className:"swiper-button-prev1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 rtl:rotate-180",children:e("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("button",{type:"button",className:"swiper-button-next1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1 text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2",children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("div",{className:"swiper-pagination"})]},ae.rtlClass==="rtl"?"true":"false")]})})})})]})]})]}),n.includes("code8")&&e(d,{children:e("pre",{className:"language-typescript",children:`import { Dialog, Transition,Tab } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

    const [modal17, setModal17] = useState(false);
    const [modal18, setModal18] = useState(false);
    const [modal19, setModal19] = useState(false);
    const [modal20, setModal20] = useState(false);
    const [modal21, setModal21] = useState(false);
    const [modal22, setModal22] = useState(false);

<div className="mb-5">
    <p className="text-center mb-4">More Custom Modals.</p>
    <div className="flex flex-wrap items-center justify-center gap-2">
        {/* standard */}
        <div>
            <button type="button" onClick={() => setModal17(true)} className="btn btn-primary">
                Standard
            </button>
            <Transition appear show={modal17} as={Fragment}>
                <Dialog as="div" open={modal17} onClose={() => setModal17(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="standard_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                    <div className="flex py-2 bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-center">
                                        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#f1f2f3] dark:bg-white/10">
                                            <svg>...</svg>
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <div className="py-5 text-white-dark text-center">
                                            <p>
                                                Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
                                                consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare
                                                tempor orci id rutrum.
                                            </p>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button type="button" onClick={() => setModal17(false)} className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button type="button" onClick={() => setModal17(false)} className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* tabs */}
        <div>
            <button onClick={() => setModal18(true)} type="button" className="btn btn-info">
                Tabs
            </button>
            <Transition appear show={modal18} as={Fragment}>
                <Dialog as="div" open={modal18} onClose={() => setModal18(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="tabs_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg my-8 text-black dark:text-white-dark">
                                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                                        <h5 className="font-bold text-lg">Tabs</h5>
                                        <button onClick={() => setModal18(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <Tab.Group>
                                            <Tab.List className="flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]">
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Home
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Profile
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab as={Fragment}>
                                                    {({ selected }) => (
                                                        <button
                                                            type="button"
                                                            className={\`\${
                                                                selected
                                                                    ? '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black !outline-none '
                                                                    : ''
                                                            } p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black\`}
                                                        >
                                                            Contact
                                                        </button>
                                                    )}
                                                </Tab>
                                                <Tab className="p-3.5 py-2 -mb-[1px] block pointer-events-none text-white-light dark:text-dark outline-none">Disabled</Tab>
                                            </Tab.List>
                                            <Tab.Panels>
                                                <Tab.Panel>
                                                    <div className="active pt-5">
                                                        <h4 className="font-semibold text-2xl mb-4">We move your world!</h4>
                                                        <p className="mb-4">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                        </p>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div>
                                                        <div className="flex items-start pt-5">
                                                            <div className="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                                                                <img
                                                                    src="/assets/images/profile-34.jpeg"
                                                                    alt="img"
                                                                    className="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-auto">
                                                                <h5 className="text-xl font-medium mb-4">Media heading</h5>
                                                                <p className="text-white-dark">
                                                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                                                                    vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec
                                                                    lacinia congue felis in faucibus.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>
                                                    <div className="pt-5">
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                                            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                        </p>
                                                    </div>
                                                </Tab.Panel>
                                                <Tab.Panel>Disabled</Tab.Panel>
                                            </Tab.Panels>
                                        </Tab.Group>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setModal18(false)} type="button" className="btn btn-outline-danger">
                                                Discard
                                            </button>
                                            <button onClick={() => setModal18(false)} type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4">
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* profile */}
        <div>
            <button type="button" onClick={() => setModal19(true)} className="btn btn-success">
                Profile
            </button>
            <Transition appear show={modal19} as={Fragment}>
                <Dialog as="div" open={modal19} onClose={() => setModal19(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0"></div>
                    </Transition.Child>
                    <div id="profile_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden max-w-[300px] w-full bg-secondary dark:bg-secondary my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-end pt-4 ltr:pr-4 rtl:pl-4 text-white dark:text-white-light">
                                        <button onClick={() => setModal19(false)} type="button" className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="py-5 text-white dark:text-white-light text-center">
                                            <div className="rounded-full w-20 h-20 mx-auto mb-7 overflow-hidden">
                                                <img src="/assets/images/profile-16.jpeg" alt="img" className="w-full h-full object-cover" />
                                            </div>
                                            <p className="font-semibold">
                                                Click on view to access <br />
                                                your profile.
                                            </p>
                                        </div>
                                        <div className="flex justify-center gap-4 p-5">
                                            <button type="button" className="btn bg-white text-black dark:btn-dark">
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* login */}
        <div>
            <button type="button" onClick={() => setModal20(true)} className="btn btn-warning">
                Login
            </button>
            <Transition appear show={modal20} as={Fragment}>
                <Dialog as="div" open={modal20} onClose={() => setModal20(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="login_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 py-1 px-4 rounded-lg overflow-hidden w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between p-5 font-semibold text-lg dark:text-white">
                                        <h5>Login</h5>
                                        <button type="button" onClick={() => setModal20(false)} className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>

                                    <div className="p-5">
                                        <form>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="login_email" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="login_password" />
                                            </div>
                                            <button type="button" className="btn btn-primary w-full">
                                                Login
                                            </button>
                                        </form>
                                    </div>
                                    <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                    <div className="flex items-center justify-center gap-3 mb-5">
                                        <button type="button" className="btn btn-outline-primary flex gap-1">
                                            <svg>...</svg>

                                            <span>Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger flex gap-1">
                                            <svg>...</svg>
                                            <span>Github</span>
                                        </button>
                                    </div>
                                    <div className="p-5 border-t border-[#ebe9f1] dark:border-white/10">
                                        <p className="text-sm text-center text-white-dark dark:text-white-dark/70">
                                            Looking to
                                            <button type="button" className="text-[#515365] hover:underline dark:text-white-dark ltr:ml-1 rtl:mr-1">
                                                create an account?
                                            </button>
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* Register */}
        <div>
            <button type="button" onClick={() => setModal21(true)} className="btn btn-danger">
                Register
            </button>
            <Transition appear show={modal21} as={Fragment}>
                <Dialog
                    as="div"
                    open={modal21}
                    onClose={() => {
                        setModal21(false);
                    }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0" />
                    </Transition.Child>
                    <div id="register_modal" className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
                        <div className="flex items-start justify-center min-h-screen px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="panel border-0 py-1 px-4 rounded-lg overflow-hidden w-full max-w-sm my-8 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between p-5 font-semibold text-lg dark:text-white">
                                        <h5>Register</h5>
                                        <button type="button" onClick={() => setModal21(false)} className="text-white-dark hover:text-dark">
                                            <svg>...</svg>
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <form>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="text" placeholder="Name" className="form-input ltr:pl-10 rtl:pr-10" id="name" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="email" placeholder="Email" className="form-input ltr:pl-10 rtl:pr-10" id="email" />
                                            </div>
                                            <div className="relative mb-4">
                                                <span className="absolute ltr:left-3 rtl:right-3 top-1/2 -translate-y-1/2 dark:text-white-dark">
                                                    <svg>...</svg>
                                                </span>
                                                <input type="password" placeholder="Password" className="form-input ltr:pl-10 rtl:pr-10" id="password" />
                                            </div>
                                            <button type="button" className="btn btn-primary w-full">
                                                Submit
                                            </button>
                                        </form>
                                    </div>
                                    <div className="my-4 text-center text-xs text-white-dark dark:text-white-dark/70">OR</div>
                                    <div className="flex items-center justify-center gap-3 mb-5">
                                        <button type="button" className="btn btn-outline-primary flex gap-1">
                                            <svg>...</svg>
                                            <span>Facebook</span>
                                        </button>
                                        <button type="button" className="btn btn-outline-danger flex gap-1">
                                            <svg>...</svg>
                                            <span>Github</span>
                                        </button>
                                    </div>
                                    <div className="p-5 border-t border-[#ebe9f1] dark:border-white/10">
                                        <p className="text-sm text-center text-white-dark dark:text-white-dark/70">
                                            Already have
                                            <button type="button" className="text-[#515365] hover:underline dark:text-white-dark ltr:ml-1 rtl:mr-1">
                                                Login?
                                            </button>
                                        </p>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
        {/* slider */}
        <div>
            <button type="button" onClick={() => setModal22(true)} className="btn btn-secondary">
                Slider
            </button>
            <Dialog
                as="div"
                open={modal22}
                onClose={() => {
                    setModal22(false);
                }}
            >
                <div id="slider_modal" className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                    <div className="flex min-h-screen items-start justify-center px-4">
                        <Dialog.Panel className="animate__animated animate__fadeIn panel my-8 w-full max-w-xl overflow-hidden rounded-lg border-0 py-1 px-4">
                            <div className="flex items-center justify-between py-5 text-lg font-semibold dark:text-white">
                                <span>Slider</span>
                                <button onClick={() => setModal22(false)} type="button" className="text-white-dark hover:text-dark">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: '.swiper-button-next-ex1',
                                    prevEl: '.swiper-button-prev-ex1',
                                }}
                                observer={true}
                                observeParents={true}
                                pagination={{ clickable: true }}
                                className="swiper mx-auto mb-5 max-w-3xl"
                                id="slider1"
                                dir={themeConfig.rtlClass}
                                key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
                            >
                                <div className="swiper-wrapper">
                                    {items.map((item, i) => {
                                        return (
                                            <SwiperSlide key={i}>
                                                <img src={\`/assets/images/\${item}\`} className="max-h-80 w-full object-cover" alt="img" />
                                            </SwiperSlide>
                                        );
                                    })}
                                </div>
                                <button
                                    type="button"
                                    className="swiper-button-prev-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1  text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:left-2 rtl:right-2"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180">
                                        <path d="M15 5L9 12L15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="swiper-button-next-ex1 absolute top-1/2 z-[999] grid -translate-y-1/2 place-content-center rounded-full border border-primary p-1 text-primary transition hover:border-primary hover:bg-primary hover:text-white ltr:right-2 rtl:left-2"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path d="M9 5L15 12L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </div>
    </div>
</div>`})})]})]})]})]})};export{Ce as default};
