(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(16),o=n.n(c),r=(n(24),n(10)),l=n(19),i=(n(25),n(0));function d(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"#",children:"About"})})]}),e.searchBar?Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}d.defaultProps={title:"your title here"};var b=function(e){var t=e.todo,n=e.onDelete;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:t.title}),Object(i.jsx)("p",{children:t.desc}),Object(i.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]}),Object(i.jsx)("hr",{})]})},j=function(e){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h3",{className:"my-3",children:"Todos List"}),0===e.todos.length?"NO TODOS TO DISPLAY":e.todos.map((function(t){return Object(i.jsx)(b,{todo:t,onDelete:e.onDelete},t.sno)}))]})},u=function(){return Object(i.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(i.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com"})})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),s=Object(r.a)(n,2),c=s[0],o=s[1],l=Object(a.useState)(""),d=Object(r.a)(l,2),b=d[0],j=d[1];return Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h3",{children:"Add a Todo"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c&&b?(t(c,b),o(""),j("")):alert("Title or Description cannot be blank")},children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"title",className:"form-label",children:"Todo Title"}),Object(i.jsx)("input",{type:"text",value:c,onChange:function(e){return o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Todo Description"}),Object(i.jsx)("input",{type:"text",value:b,onChange:function(e){return j(e.target.value)},className:"form-control",id:"desc"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add Todo"})]})]})},h=function(){return Object(i.jsxs)("div",{children:["This is an about component",Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis odio, nesciunt sed eveniet, nemo amet, dignissimos magnam itaque ipsam possimus. Inventore vitae, perferendis harum quas cupiditate adipisci repellendus tempore asperiores at consequatur quos?"})]})},O=n(17),x=n(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("I am ondelete of todo",e),b(o.filter((function(t){return t!==e}))),console.log("deleted",o),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("I am adding this todo",e,t);var n={sno:0===o.length?0:o[o.length-1].sno+1,title:e,desc:t};b([].concat(Object(l.a)(o),[n])),console.log(n)},s=Object(a.useState)(e),c=Object(r.a)(s,2),o=c[0],b=c[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(O.a,{children:[Object(i.jsx)(d,{title:"My Todos List",searchBar:!1}),Object(i.jsxs)(x.c,{children:[Object(i.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{addTodo:n}),Object(i.jsx)(j,{todos:o,onDelete:t})]})}}),Object(i.jsx)(x.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{})})]}),Object(i.jsx)(u,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.cd5f8a43.chunk.js.map