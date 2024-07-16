import{u as M,r as L,s as j,a as I,j as r,b as e,L as z}from"./main-61f9f76b.js";import{g as w,n as W,S as g,N as b,P as v,a as c}from"./pagination.min-4e0c8559.js";import{C as x}from"./Highlight-b1f5af13.js";function C({swiper:t,extendParams:u,on:l,emit:i}){let d;t.autoplay={running:!1,paused:!1},u({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function o(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}const n=t.slides.eq(t.activeIndex);let m=t.params.autoplay.delay;n.attr("data-swiper-autoplay")&&(m=n.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(d),d=W(()=>{let p;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),p=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?a():(p=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),i("autoplay")):(p=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.params.loop?(t.loopFix(),p=t.slideNext(t.params.speed,!0,!0),i("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?a():(p=t.slideTo(0,t.params.speed,!0,!0),i("autoplay")):(p=t.slideNext(t.params.speed,!0,!0),i("autoplay")),(t.params.cssMode&&t.autoplay.running||p===!1)&&o()},m)}function s(){return typeof d<"u"||t.autoplay.running?!1:(t.autoplay.running=!0,i("autoplayStart"),o(),!0)}function a(){return!t.autoplay.running||typeof d>"u"?!1:(d&&(clearTimeout(d),d=void 0),t.autoplay.running=!1,i("autoplayStop"),!0)}function h(n){t.autoplay.running&&(t.autoplay.paused||(d&&clearTimeout(d),t.autoplay.paused=!0,n===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,o()):["transitionend","webkitTransitionEnd"].forEach(m=>{t.$wrapperEl[0].addEventListener(m,f)})))}function y(){const n=w();n.visibilityState==="hidden"&&t.autoplay.running&&h(),n.visibilityState==="visible"&&t.autoplay.paused&&(o(),t.autoplay.paused=!1)}function f(n){!t||t.destroyed||!t.$wrapperEl||n.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(m=>{t.$wrapperEl[0].removeEventListener(m,f)}),t.autoplay.paused=!1,t.autoplay.running?o():a())}function N(){t.params.autoplay.disableOnInteraction?a():(i("autoplayPause"),h()),["transitionend","webkitTransitionEnd"].forEach(n=>{t.$wrapperEl[0].removeEventListener(n,f)})}function k(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,i("autoplayResume"),o())}function S(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",N),t.$el.on("mouseleave",k))}function E(){t.$el.off("mouseenter",N),t.$el.off("mouseleave",k)}l("init",()=>{t.params.autoplay.enabled&&(s(),w().addEventListener("visibilitychange",y),S())}),l("beforeTransitionStart",(n,m,p)=>{t.autoplay.running&&(p||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(m):a())}),l("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?a():h())}),l("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&o()}),l("destroy",()=>{E(),t.autoplay.running&&a(),w().removeEventListener("visibilitychange",y)}),Object.assign(t.autoplay,{pause:h,run:o,start:s,stop:a})}const T=()=>{const t=M();L.useEffect(()=>{t(j("Carousel"))});const u=["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"],l=I(s=>s.themeConfig),[i,d]=L.useState([]),o=s=>{i.includes(s)?d(a=>a.filter(h=>h!==s)):d([...i,s])};return r("div",{children:[r("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(z,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Carousel"})})]}),r("div",{className:"pt-5 space-y-8",children:[r("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:r("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z",stroke:"currentColor",strokeWidth:"1.5"}),e("path",{opacity:"0.5",d:"M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://swiperjs.com/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://swiperjs.com/react"})]}),r("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{onClick:()=>o("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),r(g,{modules:[b,v],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},className:"swiper max-w-3xl mx-auto mb-5",id:"slider1",dir:l.rtlClass,children:[e("div",{className:"swiper-wrapper",children:u.map((s,a)=>e(c,{children:e("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"})},a))}),e("button",{className:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("button",{className:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]},l.rtlClass==="rtl"?"true":"false"),i.includes("code1")&&e(x,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper
    modules={[Navigation, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }}
    pagination={{ clickable: true }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider1"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Autopaly"}),e("button",{onClick:()=>o("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),r(g,{modules:[b,C,v],navigation:{nextEl:".swiper-button-next-ex2",prevEl:".swiper-button-prev-ex2"},pagination:{clickable:!0},autoplay:{delay:2e3},className:"swiper max-w-3xl mx-auto mb-5",id:"slider2",dir:l.rtlClass,children:[e("div",{className:"swiper-wrapper",children:u.map((s,a)=>r(c,{children:[e("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"}),r("div",{className:"absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12",children:[e("div",{className:"sm:text-3xl text-base font-bold",children:"This is blog Image"}),e("div",{className:"sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."}),e("button",{type:"button",className:"mt-4 btn btn-primary",children:"Learn more"})]})]},a))}),e("button",{className:"swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("button",{className:"swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]},l.rtlClass==="rtl"?"true":"false"),i.includes("code2")&&e(x,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper
    modules={[Navigation, Autoplay, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider2"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
                        <div className="sm:text-3xl text-base font-bold">This is blog Image</div>
                        <div className="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                        <button type="button" className="mt-4 btn btn-primary">
                            Learn more
                        </button>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),r("div",{className:"panel relative",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical"}),e("button",{onClick:()=>o("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),e(g,{modules:[v,C],pagination:{clickable:!0},autoplay:{delay:2e3},direction:"vertical",className:"max-w-3xl mx-auto mb-5",id:"slider3",dir:l.rtlClass,children:e("div",{className:"swiper-wrapper",children:u.map((s,a)=>r(c,{children:[e("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImage"}),e("div",{className:"absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center",children:e("div",{className:"sm:text-xl text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})})]},a))})},l.rtlClass==="rtl"?"true":"false"),i.includes("code3")&&e(x,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="max-w-3xl mx-auto mb-5" id="slider3">
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
                        <div className="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
</Swiper>`})})]}),r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Loop"}),e("button",{onClick:()=>o("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),"Code"]})})]}),r("div",{className:"swiper max-w-3xl mx-auto mb-5",id:"slider4",children:[e("div",{className:"swiper-wrapper",children:r(g,{modules:[b,v],slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next-ex4",prevEl:".swiper-button-prev-ex4"},dir:l.rtlClass,children:[r(c,{children:[e("img",{src:"/assets/images/carousel1.jpeg",className:"w-full",alt:"slide1"}),r("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e("div",{className:"text-3xl font-bold",children:"Slide 1"}),e("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),r(c,{children:[e("img",{src:"/assets/images/carousel2.jpeg",className:"w-full",alt:"slide2"}),r("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e("div",{className:"text-3xl font-bold",children:"Slide 2"}),e("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),r(c,{children:[e("img",{src:"/assets/images/carousel3.jpeg",className:"w-full",alt:"slide3"}),r("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e("div",{className:"text-3xl font-bold",children:"Slide 3"}),e("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]})]},l.rtlClass==="rtl"?"true":"false")}),e("button",{className:"swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("button",{className:"swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),i.includes("code4")&&e(x,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<div className="swiper max-w-3xl mx-auto mb-5" id="slider4">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
                type: 'fraction',
            }}
            navigation={{
                nextEl: '.swiper-button-next-ex4',
                prevEl: '.swiper-button-prev-ex4',
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            <SwiperSlide>
                <img src="/assets/images/carousel1.jpeg" className="w-full" alt="slide1" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 1</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel2.jpeg" className="w-full" alt="slide2" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 2</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel3.jpeg" className="w-full" alt="slide3" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 3</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]}),r("div",{className:"panel lg:col-span-2",children:[r("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple Slides"}),e("button",{onClick:()=>o("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:r("span",{className:"flex items-center",children:[r("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 ltr:mr-2 rtl:ml-2",children:[e("path",{d:"M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{opacity:"0.5",d:"M13.9868 5L10.0132 19.8297",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e("path",{d:"M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})," ","Code"]})})]}),r("div",{className:"swiper",id:"slider5",children:[e("div",{className:"swiper-wrapper",children:r(g,{modules:[b,v],navigation:{nextEl:".swiper-button-next-ex5",prevEl:".swiper-button-prev-ex5"},pagination:{clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:20}},dir:l.rtlClass,children:[u.map((s,a)=>e(c,{children:e("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},a)),u.map((s,a)=>e(c,{children:e("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},a))]},l.rtlClass==="rtl"?"true":"false")}),e("button",{className:"swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5 rtl:rotate-180",children:e("path",{d:"M15 5L9 12L15 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e("button",{className:"swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"rtl:rotate-180",children:e("path",{d:"M9 5L15 12L9 19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),i.includes("code5")&&e(x,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

<div className="swiper" id="slider5">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: '.swiper-button-next-ex5',
                prevEl: '.swiper-button-prev-ex5',
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]})]})]})]})};export{T as default};
