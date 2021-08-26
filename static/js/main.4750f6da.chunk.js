(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,n,e){t.exports={title:"NavBar_title__ce9R0",activelink:"NavBar_activelink__3QzlS",navBar:"NavBar_navBar__30vnS"}},26:function(t,n,e){},27:function(t,n,e){},28:function(t,n,e){},46:function(t,n,e){"use strict";e.r(n);var c=e(1),o=e.n(c),r=e(18),a=e.n(r),i=(e(26),e(10)),l=(e(27),e(21)),u=(e(28),e(7)),s=e(15),b=e.n(s);function j(t,n,e){var c=b()(t),o=b()(n);if("+"===e)return c.plus(o).toString();if("-"===e)return c.minus(o).toString();if("x"===e)return c.times(o).toString();if("\xf7"===e)return"0"===n?"Math ERROR":c.div(o).toString();if("%"===e)return c.mod(o).toString();throw Error("Unknown operation '".concat(e,"'"))}var x=e(0),d=function(){var t=Object(c.useState)({total:null,next:null,operation:null}),n=Object(l.a)(t,2),e=n[0],o=n[1],r=function(t){var n=function(t,n){return"AC"===n?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===t.next?{}:t.operation?t.next?Object(u.a)(Object(u.a)({},t),{},{next:t.next+n}):Object(u.a)(Object(u.a)({},t),{},{next:n}):t.next?{next:t.next+n,total:null}:{next:n,total:null}:"."===n?t.next?t.next.includes(".")?Object(u.a)({},t):Object(u.a)(Object(u.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===n?t.next&&t.operation?{total:j(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?t.total&&!t.next?Object(u.a)(Object(u.a)({},t),{},{operation:n}):{total:j(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}}(e,t),c=n.total,r=n.next,a=n.operation;o({total:c,next:r,operation:a})};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"lets-do",children:Object(x.jsx)("p",{children:"Lets do some math!"})}),Object(x.jsxs)("div",{id:"calc-container",children:[Object(x.jsx)("div",{id:"output",children:function(){var t=e.total,n=e.next,c=e.operation;return c=c||"",n=n||"","".concat(t=t||""," ").concat(c," ").concat(n)}()}),Object(x.jsx)("button",{onClick:function(){return r("AC")},type:"button",className:"ac",children:"AC"}),Object(x.jsx)("button",{onClick:function(){return r("+/-")},type:"button",className:"quantity",children:"+/-"}),Object(x.jsx)("button",{onClick:function(){return r("%")},type:"button",className:"percentage-operator",children:"%"}),Object(x.jsx)("button",{onClick:function(){return r("\xf7")},type:"button",className:"divide-operator",children:"\xf7"}),Object(x.jsx)("button",{onClick:function(){return r("7")},type:"button",className:"number",children:"7"}),Object(x.jsx)("button",{onClick:function(){return r("8")},type:"button",className:"number",children:"8"}),Object(x.jsx)("button",{onClick:function(){return r("9")},type:"button",className:"number",children:"9"}),Object(x.jsx)("button",{onClick:function(){return r("x")},type:"button",className:"multiply-operator",children:"x"}),Object(x.jsx)("button",{onClick:function(){return r("4")},type:"button",className:"number",children:"4"}),Object(x.jsx)("button",{onClick:function(){return r("5")},type:"button",className:"number",children:"5"}),Object(x.jsx)("button",{onClick:function(){return r("6")},type:"button",className:"number",children:"6"}),Object(x.jsx)("button",{onClick:function(){return r("-")},type:"button",className:"subtract-operator",children:"-"}),Object(x.jsx)("button",{onClick:function(){return r("1")},type:"button",className:"number",children:"1"}),Object(x.jsx)("button",{onClick:function(){return r("2")},type:"button",className:"number",children:"2"}),Object(x.jsx)("button",{onClick:function(){return r("3")},type:"button",className:"number",children:"3"}),Object(x.jsx)("button",{onClick:function(){return r("+")},type:"button",className:"add-operator",children:"+"}),Object(x.jsx)("button",{onClick:function(){return r("0")},type:"button",id:"zero",className:"number",children:"0"}),Object(x.jsx)("button",{onClick:function(){return r(".")},type:"button",className:"number",children:"."}),Object(x.jsx)("button",{onClick:function(){return r("=")},type:"button",className:"equals",children:"="})]})]})},p=e(2),m=e(19),h=function(){return Object(x.jsxs)("div",{style:{fontSize:"1rem",margin:"2rem 0"},children:[Object(x.jsx)("h2",{style:{margin:"2rem 0"},children:"Welcome to our page!"}),Object(x.jsx)(m.LoremIpsum,{p:2})]})},O=function(){return Object(x.jsx)("div",{id:"quote",children:Object(x.jsx)("p",{className:"p-quote",children:"Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston"})})},f=e(11),v=e.n(f),N=function(){return Object(x.jsxs)("nav",{className:v.a.navBar,children:[Object(x.jsx)("div",{id:v.a.title,children:Object(x.jsx)("h1",{children:"Math Magicians"})}),Object(x.jsx)("ul",{children:[{id:1,path:"/home",text:"Home"},{id:2,path:"/Calculator",text:"Calculator"},{id:3,path:"/quote",text:"Quote"}].map((function(t){return Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{to:t.path,activeClassName:v.a.activelink,children:t.text})},t.id)}))})]})},y=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{}),Object(x.jsxs)(p.c,{children:[Object(x.jsx)(p.a,{path:"/home",children:Object(x.jsx)(h,{})}),Object(x.jsx)(p.a,{exact:!0,path:"/Calculator",children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(d,{})})}),Object(x.jsx)(p.a,{path:"/quote",children:Object(x.jsx)(O,{})})]})]})};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(i.a,{children:Object(x.jsx)(y,{})})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4750f6da.chunk.js.map