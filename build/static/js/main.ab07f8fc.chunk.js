(this["webpackJsonpalexa-app"]=this["webpackJsonpalexa-app"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),r=n.n(a),o=(n(9),n(3)),i=(n(10),function(e){return document.getElementById(e)}),d=n(0);var l=function(){var e=!1,t=Object(c.useState)(!1),n=Object(o.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(10),l=Object(o.a)(r,2),u=l[0],b=l[1];Object(c.useEffect)((function(){fetch("https://gentle-beach-11167.herokuapp.com/encrypted").then((function(e){return e.json()})).then((function(e){return i("essay").innerHTML=e.encrypted})).catch(console.error)}),[]);var h=function(){i("tos-box").classList.add("d-none"),i("essay").classList.remove("d-none")};Object(c.useEffect)((function(){var t;return t=setInterval((function(){b((function(e){return e-1}))}),1e3),0===u&&(clearInterval(t),e=!0,i("alert-time").classList.contains("d-none")||i("alert-time").classList.add("d-none"),s&&h()),function(){return clearInterval(t)}}),[u]),Object(c.useEffect)((function(){fetch("https://gentle-beach-11167.herokuapp.com/tos").then((function(e){return e.json()})).then((function(e){i("tos").innerHTML=e.tos,i("click-here").addEventListener("click",h)})).catch(console.error)}),[]);var j=function(){i("agree").checked&&i("pp-agree").checked?i("submit").classList.remove("d-none"):i("submit").classList.add("d-none")};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{className:"App-header",children:["Amazon and Data Ethics",Object(d.jsx)("hr",{})]}),Object(d.jsxs)("main",{children:[Object(d.jsxs)("div",{id:"tos-box",className:"d-flex flex-column",children:[Object(d.jsx)("div",{id:"tos"}),Object(d.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[Object(d.jsxs)("form",{children:[Object(d.jsx)("label",{htmlFor:"tos-agree",children:"I have read and agreed to the Terms of Service"}),Object(d.jsx)("input",{type:"checkbox",id:"agree",name:"tos-agree",onChange:j}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"tos-agree",children:"I have read and agreed to the Privacy Policies"}),Object(d.jsx)("input",{type:"checkbox",id:"pp-agree",name:"pp-agree",onChange:j}),Object(d.jsx)("br",{})]}),Object(d.jsx)("button",{className:"btn btn-success d-none",id:"submit",onClick:function(){e?h():(a(!0),i("alert-time").classList.remove("d-none"),i("agree").disabled=!0,i("pp-agree").disabled=!0,i("submit").disabled=!0)},children:"Submit"}),Object(d.jsxs)("div",{className:"alert alert-danger d-none",id:"alert-time",role:"alert",children:["Come on! You can't possibly be reading the Terms of Service that quickly right? We have disabled the submit button. Try again in ",u," seconds or around ",(u/60).toFixed(2)," minutes or around ",(u/60/60).toFixed(2)," hours!"]})]})]}),Object(d.jsx)("div",{id:"essay",className:"d-none"})]}),Object(d.jsx)("footer",{children:Object(d.jsx)("p",{children:"Copyrighted \xa9 2021 - Toan Ly, Luke Dorsett, Ryan Muggett"})})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ab07f8fc.chunk.js.map