(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{lBBP:function(e,t,n){"use strict";n.d(t,"c",function(){return l}),n.d(t,"e",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return f}),n.d(t,"b",function(){return v});var a=n("14Xm"),r=n.n(a),o=n("D3Ub"),s=n.n(o),i=n("iBeA"),u=n("FfUE"),c=n("838P"),l=(n("jDDT"),function(e){return t=s()(r.a.mark(function t(n,a,o){var s,l;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).set("username",e.username),s.set("password",e.password),t.prev=3,n({type:i.v}),t.next=7,o.post("/users/login",s,{headers:{"Content-Type":"multipart/form-data"}});case 7:l=t.sent,console.log("loginres",l),u.a.push("/"),c.toast.success("Login Successful",{position:c.toast.POSITION.TOP_RIGHT}),n({type:i.s,payload:l.data}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(3),console.log("catch",t.t0),n({type:i.s,payload:{}});case 18:case"end":return t.stop()}},t,void 0,[[3,14]])})),function(e,n,a){return t.apply(this,arguments)};var t}),p=function(e){return t=s()(r.a.mark(function t(n,a,o){var s,c;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(s=new FormData).set("username",e.username),s.set("email",e.email),s.set("password",e.password),t.prev=4,n({type:i.v}),t.next=8,o.post("/users/signup",s,{headers:{"Content-Type":"multipart/form-data"}});case 8:c=t.sent,console.log("signupres",c),u.a.push("/"),n({type:i.s,payload:c.data}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(4),console.log("catch",t.t0),n({type:i.s,payload:{}});case 18:case"end":return t.stop()}},t,void 0,[[4,14]])})),function(e,n,a){return t.apply(this,arguments)};var t},d=function(){return e=s()(r.a.mark(function e(t,n,a){var o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.f}),e.next=4,a.get("/users/logout");case 4:o=e.sent,t({type:i.i,payload:o.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),t({type:i.i,payload:{}});case 12:case"end":return e.stop()}},e,void 0,[[0,8]])})),function(t,n,a){return e.apply(this,arguments)};var e},f=function(){return e=s()(r.a.mark(function e(t,n,a){var o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:i.b}),e.next=4,a.get("/users/currentuser");case 4:o=e.sent,console.log("currentUser",o),t({type:i.p,payload:o.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:i.p,payload:{}});case 12:case"end":return e.stop()}},e,void 0,[[0,9]])})),function(t,n,a){return e.apply(this,arguments)};var e},v=function(e){return t=s()(r.a.mark(function t(n,a,o){var s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(u.a),t.prev=1,n({type:i.e}),t.next=5,o.get("/users/googlelogin?code="+e);case 5:s=t.sent,u.a.push("/"),n({type:i.r,payload:s.data}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),n({type:i.r,payload:{}});case 13:case"end":return t.stop()}},t,void 0,[[1,10]])})),function(e,n,a){return t.apply(this,arguments)};var t}},pv3X:function(e,t,n){"use strict";n.r(t);var a=n("Yz+Y"),r=n.n(a),o=n("iCc5"),s=n.n(o),i=n("V7oC"),u=n.n(i),c=n("FYw3"),l=n.n(c),p=n("mRg0"),d=n.n(p),f=n("q1tI"),v=n.n(f),m=n("/MKj"),y=n("Sy/5"),h=n("yE/o"),b=n("CnBM"),g=n.n(b),x=n("lBBP"),w=g()({loader:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,"gtJr"))},modules:["./Layout/Desktop"],webpack:function(){return["gtJr"]},loading:function(){return null}}),k=g()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(7),n.e(8)]).then(n.bind(null,"qvxp"))},modules:["./Layout/Mobile"],webpack:function(){return["qvxp"]},loading:function(){return null}}),B=g()({loader:function(){return Promise.all([n.e(0),n.e(1),n.e(12),n.e(14)]).then(n.bind(null,"4Noe"))},modules:["./components/Footer"],webpack:function(){return["4Noe"]},loading:function(){return null},delay:2e3}),S={border:"none",borderRadius:0,boxShadow:"none",marginBottom:"1em",marginTop:"4em",transition:"box-shadow 0.5s ease, padding 0.5s ease"},T={backgroundColor:"#fff",border:"none",boxShadow:"0px 6px 20px rgba(0, 0, 0, 0.06)"},C=function(e){function t(){var e,n,a,o;s()(this,t);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return n=a=l()(this,(e=t.__proto__||r()(t)).call.apply(e,[this].concat(u))),a.state={menuFixed:!1,overlayFixed:!1,overlayRect:!1,activeItem:a.props.location.pathname,sideBarvisible:!1},o=n,l()(a,o)}return d()(t,e),u()(t,[{key:"componentDidMount",value:function(){this.props.currentUser()}},{key:"render",value:function(){var e=this,t=function(){return e.setState({menuFixed:!0})},n=function(){return e.setState({menuFixed:!1})},a=function(t,n){var a=n.to;e.setState({activeItem:a,sideBarvisible:!1})},r=function(){e.setState(function(e){return{sideBarvisible:!e.sideBarvisible}})},o=function(){e.setState({sideBarvisible:!1})},s=this.state,i=s.menuFixed,u=s.activeItem,c=s.sideBarvisible,l=this.props.route.routes;return v.a.createElement("div",null,v.a.createElement("style",null,"@media only screen and (max-width:768px){.desktop{display:none!important}}@media only screen and (min-width:769px){.mobile{display:none!important}}"),v.a.createElement("div",{className:"desktop"},v.a.createElement(w,{stickTopMenu:t,unStickTopMenu:n,fixed:i?"top":void 0,style:i?T:S,activeItem:u,handleItemClick:a,handleToggle:r,handleSidebarHide:function(){return e.setState({sideBarvisible:!1})},sideBarvisible:c,handlePusherClick:function(){e.state.sideBarvisible&&e.setState({sideBarvisible:!1})},fixedMenuStyle:T,handlePortalClose:o},v.a.createElement(h.a,null,Object(y.a)(l)))),v.a.createElement("div",{className:"mobile"},v.a.createElement(k,{activeItem:u,handleItemClick:a,handlePortalClose:o,sideBarvisible:c,stickTopMenu:t,unStickTopMenu:n,handleToggle:r},v.a.createElement(h.a,{text:!0},Object(y.a)(l)))),v.a.createElement(B,null))}}]),t}(v.a.Component);t.default=Object(m.b)(null,{currentUser:x.a})(C)}}]);
//# sourceMappingURL=22.4b73f3f4.chunk.js.map