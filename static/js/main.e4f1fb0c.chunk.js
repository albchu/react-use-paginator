(this["webpackJsonpreact-use-paginator-example"]=this["webpackJsonpreact-use-paginator-example"]||[]).push([[0],[,,function(e,a,t){e.exports=t(12)},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1),i=t.n(r);t(9);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=function(e,a){return(e%a+a)%a},c=function(e){var a,t,r=e.PageComponent,i=e.data,c=void 0===i?[]:i,m=e.maxPerPage,p=(a=c,t=void 0===m?25:m,Array.from({length:Math.ceil(a.length/t)},(function(e,n){return a.slice(n*t,n*t+t)}))),d=p.length,u=Object(n.useState)(0),v=u[0],g=u[1];return{Component:Object(n.useCallback)((function(e){return l.a.createElement(r,s({},e,{index:v+1,items:p[v]}))}),[v,p]),setPageIndex:function(e){"number"===typeof e?g(e):console.error("Cannot set page index to non-numeric value:",e)},nextPage:function(){return g(o(v+1,d))},prevPage:function(){return g(o(v-1,d))}}};t(10);var m=({title:e,description:a,children:t,ref:n})=>l.a.createElement("div",{ref:n,className:"example__container"},l.a.createElement("div",{className:"example__title"},e),l.a.createElement("div",{className:"example__description"},a),l.a.createElement("div",{className:"example__children"},t));var p=({link:e})=>l.a.createElement("iframe",{src:e,style:{width:"100%",height:500,border:0,borderRadius:4,overflow:"hidden"},title:"codesandy",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"});var d=()=>l.a.createElement("div",null,l.a.createElement(m,{title:"Simple Usage",description:"Heres a basic case where the parent component using usePaginator has all the data for each page."},l.a.createElement(p,{link:"https://codesandbox.io/embed/usepaginator-simple-example-b3wnc?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"})));var u=()=>l.a.createElement("div",null,l.a.createElement(m,{title:"Pages with side effects"},l.a.createElement("div",null,l.a.createElement("div",null,"Just as with the simplest usage, the paginator can handle pages that involve side effects"))));var v=()=>l.a.createElement("div",null,l.a.createElement(m,{title:"Usage with Material-UI"},l.a.createElement("div",null,l.a.createElement("div",null,"Completely supports use of Material UI components and JSS styling"))));const g=({items:e})=>{const a=e[0];return l.a.createElement("div",null,l.a.createElement(a,null))};var h=()=>{const e=c({PageComponent:g,maxPerPage:1,data:[d,u,v]}),a=e.Component,t=e.setPageIndex;return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"app__header"},l.a.createElement("div",{className:"app__title"},"usePaginator"),l.a.createElement("div",{className:"app__subtitle"},"Usage Guide")),l.a.createElement("div",{className:"app__sidebar"},l.a.createElement("div",{className:"app__sidebar_option",onClick:()=>t(0)},"Simple Usage")),l.a.createElement("div",{className:"app__main"},l.a.createElement(a,null)),l.a.createElement("div",{className:"app__footer"}))};t(11);i.a.render(l.a.createElement(h,null),document.getElementById("root"))}],[[2,1,2]]]);
//# sourceMappingURL=main.e4f1fb0c.chunk.js.map