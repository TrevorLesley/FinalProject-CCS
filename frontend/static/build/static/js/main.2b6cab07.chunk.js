(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{26:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(27),i=n.n(r),c=(n(33),n(10)),o=n(14),l=n.n(o),h=n(16),d=n(6),u=n(7),b=n(4),j=n(9),m=n(8),p=n(3),O=n(44),f=n(13),x=n.n(f),g=n(0),v=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={title:"",body:"",id:"",isHidden:!0},a.renderEdit=a.renderEdit.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"renderEdit",value:function(e){this.setState({isHidden:!this.state.isHidden})}},{key:"handleEdit",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify()},a=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/notes/note/".concat(this.note.id),n);case 5:return s=e.sent,e.next=8,s.json().catch(a);case 8:e.sent,s.ok;case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsxs)(g.Fragment,{children:[!!this.state.isHidden&&Object(g.jsx)(O.a,{type:"button",className:"btn btn-outline-primary",onClick:this.renderEdit,children:"Edit"}),!this.state.isHidden&&Object(g.jsx)(O.a,{type:"button",className:"btn btn-outline-primary",onClick:function(){e.renderEdit(),e.handleEdit()},children:"Submit"})]})}}]),n}(a.Component),y=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={user:"",notes:[],addNote:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("api/v1/notes/noteslist/").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(t){return e.setState({notes:t})}))}},{key:"render",value:function(){var e=this,t=this.state.notes.map((function(t){return Object(g.jsxs)("li",{children:[Object(g.jsxs)("h1",{children:[" ",t.title," "]}),Object(g.jsxs)("p",{children:[" ",t.body," "]}),Object(g.jsx)(v,{note:e.state.note})]})}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:["I'm notes tab - ",this.props.match.params.id]}),Object(g.jsx)(c.b,{to:"/add-note",children:"Add Note"}),Object(g.jsx)("ul",{children:t})]})}}]),n}(a.Component),k=Object(p.f)(y),S=n(15),w=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={title:"",body:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,body:this.state.body},n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(t)};fetch("/api/v1/notes/noteslist/",n).then((function(e){return e.json()}))}},{key:"handleInput",value:function(e){e.preventDefault(),this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"note-form",children:Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"note-form-title",type:"text",placeholder:"Note Title",name:"title",id:"title",onChange:this.handleInput})}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{className:"note-form-body",type:"text",placeholder:"Your note here.",name:"body",id:"body",onChange:this.handleInput,size:"300px"})}),Object(g.jsx)("button",{type:"submit",className:"note-submit-button",children:"Submit"})]})})})}}]),n}(a.Component),N=(n(26),n(41),function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(c.b,{exact:!0,to:"/login",children:"Login"})," "]}),Object(g.jsxs)("li",{children:[" ",Object(g.jsx)(c.b,{exact:!0,to:"/notes",children:"Notes"})," "]})]})}),Object(g.jsx)("h1",{children:"Placeholder Homepage"}),Object(g.jsx)("div",{className:"notes-window",children:Object(g.jsx)(k,{})}),Object(g.jsxs)("div",{className:"profile-options",children:[Object(g.jsx)("button",{type:"button",onClick:this.props.handleRender,children:"Edit Profile"}),Object(g.jsx)("button",{type:"button",onClick:this.props.handleLogout,children:"Log Out"})]})]})}}]),n}(a.Component)),C=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleLogin(this.state)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("nav",{children:Object(g.jsx)(c.b,{to:"/register",children:"Register"})}),Object(g.jsxs)("form",{className:"login-register",onSubmit:this.handleSubmit,children:[Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"username",id:"username",className:"form-label",children:"Username"}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",onChange:this.handleInput})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),Object(g.jsx)("input",{type:"text",className:"form-control",name:"email",id:"email",onChange:this.handleInput})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"password1",className:"form-label",children:"Password"}),Object(g.jsx)("input",{type:"current-password",className:"form-control",name:"password",id:"password1",onChange:this.handleInput})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"}),Object(g.jsx)(c.b,{to:"/register",children:"Don't have an account? Sign up!"})]})]})}}]),n}(a.Component),I=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isTeacher:!1,username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.handleCheckbox=a.handleCheckbox.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleCheckbox",value:function(e){e.preventDefault(),this.setState(Object(S.a)({},e.target.name,!e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleRegister(this.state)}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("nav",{children:Object(g.jsx)(c.b,{to:"/login",children:"Login"})}),Object(g.jsxs)("form",{className:"login-register",onSubmit:this.handleSubmit,children:[Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"username",name:"username",id:"username",className:"form-label",children:"Username"}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",onChange:this.handleInput})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"email",name:"email",className:"form-label",children:"Email address"}),Object(g.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",onChange:this.handleInput})]}),Object(g.jsxs)("div",{class:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"password1",name:"password1",className:"form-label",children:"Password"}),Object(g.jsx)("input",{type:"password",className:"form-control",name:"password1",id:"password1",onChange:this.handleInput})]}),Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:"password2",name:"password2",className:"form-label",children:"Confirm Password"}),Object(g.jsx)("input",{type:"password",className:"form-control",name:"password2",id:"password2",onChange:this.handleInput}),Object(g.jsx)("p",{children:"Check box if you are an instructor."}),Object(g.jsx)("input",{type:"checkbox",name:"isTeacher",onChange:this.handleCheckbox}),Object(g.jsx)("label",{for:"isTeacher",children:"Instructor"})]}),Object(g.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"}),Object(g.jsx)(c.b,{to:"/login",children:"Already have an account? Login!"})]})]})}}]),n}(a.Component),F=function(e){Object(j.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!1},a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a.handleLogin=a.handleLogin.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"handleLogin",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({user:t.username}),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/login/",n);case 5:return s=e.sent,e.next=8,s.json().catch(a);case 8:(r=e.sent).key&&(x.a.set("Authorization","Token ".concat(r.key)),localStorage.setItem("owner",r.user.id),this.setState({isLoggedIn:!0}),this.props.history.push("/"));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")}},n=function(e){return console.warn(e)},e.next=4,fetch("/rest-auth/logout/",t).catch(n);case 4:e.sent.ok&&(x.a.remove("Authorization"),this.props.history.push("/login"));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleRegister",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(t)},a=function(e){return console.warn(e)},e.next=4,fetch("/api/v1/users/users/",n);case 4:return s=e.sent,e.next=7,s.json().catch(a);case 7:r=e.sent,s.ok&&(x.a.set("Authorization","Token ".concat(r.key)),localStorage.setItem("owner",r.user.id),this.props.history.push("/"));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{path:"/login",children:Object(g.jsx)(C,{handleLogin:this.handleLogin,handleRender:this.handleRender})}),Object(g.jsx)(p.a,{path:"/register",children:Object(g.jsx)(I,{handleRegister:this.handleRegister,handleRender:this.handleRender})}),Object(g.jsx)(p.a,{path:"/",exact:!0,children:Object(g.jsx)(N,{handleLogout:this.handleLogout})}),Object(g.jsx)(p.a,{path:"/notes",exact:!0,children:Object(g.jsx)(k,{})}),Object(g.jsx)(p.a,{path:"/notes/edit",children:Object(g.jsx)(v,{})}),Object(g.jsx)(p.a,{path:"/add-note",children:Object(g.jsx)(w,{})})]})})}}]),n}(a.Component),T=Object(p.f)(F),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(c.a,{children:Object(g.jsx)(T,{})})}),document.getElementById("root")),L()}},[[42,1,2]]]);
//# sourceMappingURL=main.2b6cab07.chunk.js.map