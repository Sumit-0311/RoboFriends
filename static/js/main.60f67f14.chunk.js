(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(4),s=n.n(a),i=(n(3),n(5)),o=n(6),h=n(8),l=n(7),d=n(0);var b=function(e){return Object(d.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(d.jsx)("img",{src:"https://robohash.org/".concat(e.id,"?size=200x200"),alt:"DP"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsx)("p",{children:e.email})]})]})};var j=function(e){var t=e.robots;return Object(d.jsx)("div",{children:t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})};var u=function(e){var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2 tc",children:Object(d.jsx)("input",{type:"search",placeholder:"Search Robots ",className:"pa3 ba b--green bg-lightest-blue br-pill mar",onChange:t})})};var f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"header header header__heading",children:"RoboFriends"}),Object(d.jsx)(u,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(j,{robots:r})})]}):Object(d.jsx)("h1",{children:"Loading"})}}]),n}(c.a.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};n(15);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()},3:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.60f67f14.chunk.js.map