(this["webpackJsonpmoney-manager"]=this["webpackJsonpmoney-manager"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},106:function(e,a,t){},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),i=(t(98),t(99),t(16)),c=t(11),u=t(19),s=t(20),m=t(21),d=(t(100),t(150)),f=t(153),b=t(68),v=t.n(b),p=t(155),g=(t(101),Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}}}})));function h(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,{color:"secondary","aria-label":"add an alarm"},r.a.createElement(p.a,{badgeContent:4,color:"primary"},r.a.createElement(v.a,null))))}var E=t(173),w=t(156),y=t(54),j=Object(d.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1.5),marginRight:"25px"}},square:{color:e.palette.getContrastText(w.a[500]),backgroundColor:w.a[500],marginRight:"25px"},rounded:{color:"#fff",backgroundColor:y.a[500]}}}));function O(){var e=j();return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{variant:"square",src:"https://avatars2.githubusercontent.com/u/31583525?s=460&v=4",className:e.square}))}var k=Object(d.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1.5)}},rounded:{color:"#fff",backgroundColor:y.a[500],cursor:"pointer"}}}));function C(){var e=k();return r.a.createElement("div",{className:e.root},r.a.createElement(E.a,{variant:"rounded",src:"https://static.moneylover.me/img/icon/ic_category_all.png",className:e.square}),r.a.createElement("div",null,r.a.createElement("div",null,"Total"),r.a.createElement("div",null,"12500")))}var x=t(157),N=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"flex"},r.a.createElement(C,null)),r.a.createElement("div",{className:"flex flex-end"},r.a.createElement("div",{className:"transaction"},"  ",r.a.createElement(x.a,{variant:"contained",color:"primary"},"Add Transaction")),r.a.createElement(h,null),r.a.createElement(O,null))))}}]),a}(n.Component);t(106),t(162),t(158),t(160),t(159),t(161),t(107),Object(d.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,fontFamily:"Roboto,sans-serif;"}}}));t(108),Object(d.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,fontFamily:"Roboto,sans-serif;",borderBottom:"1px solid rgba(0,0,0,.12)",padding:"0"}}}));var A=t(13),W=t(73),S=t(12),T=t(169);function R(){var e=Object(n.useState)(new Date),a=Object(A.a)(e,2),t=a[0],o=a[1];return r.a.createElement(S.a,{utils:W.a},r.a.createElement(T.a,{inputVariant:"outlined",margin:"normal",id:"time-picker",label:"Time picker",format:"yyyy/MM/dd hh:mm a",value:t,onChange:o,KeyboardButtonProps:{"aria-label":"change time"}}))}var V=t(172),q=t(165),B=t(164),P=t(166),U=t(170),F=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:200}}}})),L=Object(d.a)((function(e){return{root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,backgroundColor:"white",transition:e.transitions.create(["border-color","box-shadow"])},focused:{}}}));function D(e){var a=L();return r.a.createElement(U.a,Object.assign({InputProps:{classes:a,disableUnderline:!0}},e))}function I(e){var a=F();return r.a.createElement("form",{className:a.root,noValidate:!0,autoComplete:"off"},r.a.createElement(D,{label:"Wallet",className:a.margin,defaultValue:"Axis",variant:"filled",id:"reddit-input"}),r.a.createElement(D,{label:"Amount",className:a.margin,defaultValue:"0",variant:"filled",id:"reddit-input"}),r.a.createElement(D,{label:"Amount",className:a.margin,defaultValue:"0",variant:"filled",id:"reddit-input"}),r.a.createElement(D,{label:"Amount",className:a.margin,defaultValue:"0",variant:"filled",id:"reddit-input"}),r.a.createElement(D,{label:"Amount",className:a.margin,defaultValue:"0",variant:"filled",id:"reddit-input"}))}t(109);var J=Object(d.a)((function(e){return{form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},formControl:{marginTop:e.spacing(1),minWidth:120},formControlLabel:{marginTop:e.spacing(1)}}}));function M(){J();var e=r.a.useState(!1),a=Object(A.a)(e,2),t=a[0],n=a[1],o=r.a.useState(!0),l=Object(A.a)(o,2),i=l[0],c=(l[1],r.a.useState("md")),u=Object(A.a)(c,2),s=u[0],m=(u[1],function(){n(!1)});return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{variant:"outlined",color:"primary",onClick:function(){n(!0)}},"Open max-width dialog"),r.a.createElement(V.a,{maxWidth:s,fullWidth:i,open:t,onClose:m,"aria-labelledby":"max-width-dialog-title"},r.a.createElement(P.a,{id:"max-width-dialog-title"},"Add Transaction"),r.a.createElement(B.a,null,r.a.createElement(R,null),r.a.createElement(I,{type:"Amount"})),r.a.createElement(q.a,null,r.a.createElement(x.a,{onClick:m,color:"primary"},"Close"))))}var _=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"box shadow"},r.a.createElement(M,null))}}]),a}(n.Component),K=(t(110),t(167)),$=t(168),z=t(72),G=t.n(z),H=t(71),Q=t.n(H),X=t(70),Y=t.n(X),Z=t(69),ee=t.n(Z),ae=Object(d.a)({root:{width:500}});function te(){var e=ae(),a=r.a.useState("recents"),t=Object(A.a)(a,2),n=t[0],o=t[1];return r.a.createElement(K.a,{value:n,onChange:function(e,a){o(a)},className:e.root},r.a.createElement($.a,{label:"Transactions",value:"recents",icon:r.a.createElement(ee.a,null)}),r.a.createElement($.a,{label:"Stats",value:"favorites",icon:r.a.createElement(Y.a,null)}),r.a.createElement($.a,{label:"Accounts",value:"nearby",icon:r.a.createElement(Q.a,null)}),r.a.createElement($.a,{label:"Settings",value:"folder",icon:r.a.createElement(G.a,null)}))}var ne=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"footer"},r.a.createElement(te,null)))}}]),a}(n.Component);var re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(_,null),r.a.createElement(ne,null))},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/money-manager",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/money-manager","/service-worker.js");oe?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):le(a,e)}))}}()},93:function(e,a,t){e.exports=t(111)},98:function(e,a,t){},99:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.3ccff7cf.chunk.js.map