(this["webpackJsonptest-redux-form"]=this["webpackJsonptest-redux-form"]||[]).push([[0],{42:function(e,t,n){e.exports=n(56)},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),l=n.n(c),u=(n(47),n(20)),o=n(8),i=n(14),s=n(15),p=n(19),m=n(18),b=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Busqueda en Mongo con Golang"),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",className:"nav-link"}," ","Home"," ")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/search",className:"nav-link"},"Search")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/insert",className:"nav-link"},"Insert")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/update",className:"nav-link"},"Update")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/delete",className:"nav-link"},"Delete")))),r.a.createElement("hr",null))}}]),n}(a.Component),h=n(22),E=n(28),f=n(12);var v=Object(f.b)()((function(e){var t,n=e.dispatch;return r.a.createElement(h.a,{onSubmit:function(e){(e.preventDefault(),t.value.trim())&&(n({type:"WRITE",payload:t.value}),t.value="")}},r.a.createElement(h.a.Label,null,"Name:",r.a.createElement("input",{ref:function(e){return t=e},class:"form-control",type:"text"})),r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit"))})),d=Object(f.b)((function(e){return{text:e.text}}))((function(e){var t=e.text;return r.a.createElement("div",null,r.a.createElement("p",null),"The data from parent is:",t)})),O=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.getData()}},{key:"render",value:function(){return r.a.createElement("ul",null,this.props.articles.map((function(e){return r.a.createElement("li",null,e._id)})),this.props.articles.map((function(e){return r.a.createElement("li",null,e.isbn)})),this.props.articles.map((function(e){return r.a.createElement("li",null,e.title)})),this.props.articles.map((function(e){return r.a.createElement("li",null,e.author.firstname)})),this.props.articles.map((function(e){return r.a.createElement("li",null,e.author.lastname)})))}}]),n}(a.Component);var j=Object(f.b)((function(e){return{articles:e.remoteArticles.slice(0,3)}}),{getData:function(){return{type:"GET_DATA"}}})(O),y=n(23),A=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"getValue",value:function(){return this.props.books}},{key:"render",value:function(){return r.a.createElement("input",{class:"form-control",type:"text",placeholder:this.props.books,current:this.getValue()})}}]),n}(r.a.Component);var D=Object(f.b)((function(e){return{books:e.text}}))(A),k=function(e){Object(p.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),(0,a.props.dispatch)({type:"READ_DATA",payload:a.state.text}),a.setState({text:""})},a.state={text:""},a.handleInput=a.handleInput.bind(Object(y.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(y.a)(a)),a}return Object(s.a)(n,[{key:"handleInput",value:function(e){e.preventDefault(),this.setState({text:e.target.value})}},{key:"render",value:function(){return r.a.createElement(h.a,{onSubmit:this.handleSubmit},r.a.createElement(D,null),r.a.createElement(h.a.Label,null,"Name:",r.a.createElement("input",{class:"form-control",type:"text",value:this.state.text,onInput:this.handleInput})),r.a.createElement(E.a,{variant:"primary",type:"submit"},"Submit"))}}]),n}(r.a.Component),x=Object(f.b)()(k),R=(n(54),n(40)),_=n(34),g=n(35),T={text:"",remoteArticles:[],searchArticles:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WRITE":return Object(g.a)(Object(g.a)({},e),{},{text:t.payload});case"DATA_LOADED":case"API_ERRORED":return Object.assign({},e,{remoteArticles:e.remoteArticles.concat(t.payload)});case"DATA_READED":case"API_READ_ERRORED":return Object.assign({},e,{searchArticles:e.searchArticles.concat(t.payload)});default:return e}},S=["spam","money"];var N=n(41),w=n(21),B=n.n(w),C=n(17),M="https://mongo-go-test.herokuapp.com/",L=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,null,[{key:"fetchBooks",value:function(e){var t="".concat(M,"api/books");return fetch(t).then((function(e){return e.json()}))}},{key:"fetchOneBook",value:function(e){console.log(e.payload);var t="".concat(M,"api/books/").concat(e.payload);return fetch(t).then((function(e){return e.json()}))}}]),e}(),P=B.a.mark(U),G=B.a.mark(V),W=B.a.mark(J);function U(e){var t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.b)(L.fetchBooks,e);case 3:return t=n.sent,n.next=6,Object(C.c)({type:"DATA_LOADED",payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(C.c)({type:"API_ERRORED",payload:n.t0});case 12:case"end":return n.stop()}}),P,null,[[0,8]])}function V(e){var t;return B.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(C.b)(L.fetchOneBook,e);case 3:return t=n.sent,n.next=6,Object(C.c)({type:"DATA_READED",payload:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(C.c)({type:"API_READ_ERRORED",payload:n.t0});case 12:case"end":return n.stop()}}),G,null,[[0,8]])}function J(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.a)([Object(C.d)("GET_DATA",U),Object(C.d)("READ_DATA",V)]);case 2:case"end":return e.stop()}}),W)}var X=Object(N.a)(),q=[].concat(Object(R.a)(Object(_.b)({thunk:!1,serializableCheck:!1})),[function(e){var t=e.dispatch;return function(e){return function(n){if("WRITE"===n.type&&S.filter((function(e){return n.payload.includes(e)})).length)return t({type:"FOUND_BAD_WORD"});return e(n)}}},X]),z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,F=Object(_.a)({reducer:I,storeEnhancers:z,middleware:q});X.run(J);var H=F;function K(){return r.a.createElement(f.a,{store:H},r.a.createElement(u.a,null,r.a.createElement(b,null),r.a.createElement(o.c,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"MERN con Mongo y Golanng"),r.a.createElement(o.a,{path:"/insert",component:v}),r.a.createElement(o.a,{path:"/search",component:d}),r.a.createElement(o.a,{path:"/update",component:j}),r.a.createElement(o.a,{path:"/delete",component:x})))))}var Q=document.getElementById("root");l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),Q)}},[[42,1,2]]]);
//# sourceMappingURL=main.a732a743.chunk.js.map