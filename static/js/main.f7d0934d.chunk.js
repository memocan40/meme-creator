(this.webpackJsonpmemesreact=this.webpackJsonpmemesreact||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(2),s=c.n(i),a=c(14),j=c.n(a),u=(c(20),c(3)),b=(c(21),c(5)),o=c.n(b);var m=function(){var e=Object(i.useState)("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4-uiNVupvlR8nyiZSO3VbRIgLHviJ4ZHUQ&usqp=CAU"),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(1),j=Object(u.a)(a,2),b=j[0],m=j[1],r=Object(i.useState)(),l=Object(u.a)(r,2),p=l[0],d=l[1],O=Object(i.useState)(" "),h=Object(u.a)(O,2),x=h[0],g=h[1],f=Object(i.useState)(" "),v=Object(u.a)(f,2),C=v[0],S=v[1],k=Object(i.useState)(),y=Object(u.a)(k,2),N=y[0],T=y[1];return o.a.get("https://api.imgflip.com/get_memes").then((function(e){s(e.data.data.memes[b].url)})),o.a.get("http://alpha-meme-maker.herokuapp.com/").then((function(e){console.log(e)})),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("div",{children:"type a meme id between 0-100"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("input",{className:"input",type:"number",placeholder:"type a meme id between 0-100",onChange:function(e){d(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"Submit",onClick:function(){m(p)}})]}),Object(n.jsx)("div",{children:Object(n.jsx)("input",{type:"text",onChange:function(e){T(e.target.value)}})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{onClick:function(){g(N)},children:"UpperText"})," ",Object(n.jsx)("button",{onClick:function(){S(N)},children:"BottomText"}),Object(n.jsx)("button",{onClick:function(){g(""),S("")},children:"Clear"})]}),Object(n.jsxs)("div",{className:"memes",children:[Object(n.jsx)("h2",{className:"uppertext",children:x})," ",Object(n.jsx)("img",{className:"memepic",src:c})," ",Object(n.jsx)("h2",{className:"bottomtext",children:C})," "]})]})},r=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};j.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),r()}},[[40,1,2]]]);
//# sourceMappingURL=main.f7d0934d.chunk.js.map