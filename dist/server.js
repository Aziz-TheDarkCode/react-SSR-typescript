(()=>{"use strict";var e={927:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(r(689)),n=r(661),o=l(r(314)),a=l(r(117));t.default=()=>u.default.createElement(n.Routes,null,u.default.createElement(n.Route,{path:"/",element:u.default.createElement(a.default,null)}),u.default.createElement(n.Route,{path:"/about",element:u.default.createElement(o.default,null)}))},314:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(r(689));t.default=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"This the about page"),u.default.createElement("p",null,"This is page is fully rendered on the server ."))}},117:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(r(689));t.default=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"Hello from a SSR app"),u.default.createElement("p",null,"This is page is fully rendered on the server ."))}},869:function(e,t,r){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=l(r(860)),n=l(r(689)),o=l(r(684)),a=l(r(927)),i=r(149),s=r(17),d=(0,u.default)(),f=r(147);d.use(u.default.static(s.resolve(__dirname,"..","dist"))),d.get("*",((e,t)=>{const r=s.resolve(__dirname,"./static/index.html"),l=o.default.renderToString(n.default.createElement(i.StaticRouter,{location:e.url},n.default.createElement(a.default,null)));f.readFile(r,"utf8",((e,r)=>e?(console.log(e),t.status(500).send("Something went wrong !")):t.send(r.replace('<div id="root"></div>',`<div id="root">${l}</div>`))))})),d.listen(3e3,(()=>{console.log("Server running on http://localhost:3000")}))},860:e=>{e.exports=require("express")},689:e=>{e.exports=require("react")},684:e=>{e.exports=require("react-dom/server")},661:e=>{e.exports=require("react-router-dom")},149:e=>{e.exports=require("react-router-dom/server")},147:e=>{e.exports=require("fs")},17:e=>{e.exports=require("path")}},t={};!function r(l){var u=t[l];if(void 0!==u)return u.exports;var n=t[l]={exports:{}};return e[l].call(n.exports,n,n.exports,r),n.exports}(869)})();