import{r as i,R as o}from"./main-e318949c.js";let t=i.createContext(null);t.displayName="OpenClosedContext";var u=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(u||{});function d(){return i.useContext(t)}function p({value:e,children:n}){return o.createElement(t.Provider,{value:e},n)}function c(e){let n=e.parentElement,l=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(l=n),n=n.parentElement;let r=(n==null?void 0:n.getAttribute("disabled"))==="";return r&&a(l)?!1:r}function a(e){if(!e)return!1;let n=e.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}export{u as d,c as r,p as s,d as u};
