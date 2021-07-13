(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(12),r=n.n(i),s=(n(25),n(5)),l=n(6),u=n.n(l),o=n(8),j=n(9),b=n(0),d="https://noteappserver.glitch.me/",h=d+"createnew",O=d+"update/",x=d+"delete/",I=Object(s.b)({key:"notes",default:[]}),p=Object(s.b)({key:"searched_notes",default:[]}),f=Object(s.b)({key:"selected_note",default:[!1,!1]}),g=Object(s.b)({key:"opened",default:null}),A=Object(s.b)({key:"changed",default:!1}),v=n(2);function m(e){var t=e.isClicked,n=e.index,c=e.note,a=Object(s.c)(g),i=Object(b.a)(a,2)[1],r=Object(s.c)(f),l=Object(b.a)(r,2),u=l[0],o=l[1],j=Object(s.c)(A),d=Object(b.a)(j,2)[1];return Object(v.jsxs)("div",{className:t?"note_list highlight":"note_list",onClick:function(){return function(e){i(e),o(u.map((function(e,t){return t===n}))),d(!1)}(c)},children:[Object(v.jsx)("div",{className:"title",children:c.title}),Object(v.jsxs)("div",{className:"body",children:[c.body.slice(0,25),"..."]})]})}function E(){var e=Object(s.c)(I),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(s.c)(p),r=Object(b.a)(i,2),l=r[0],h=r[1],O=Object(c.useState)(""),x=Object(b.a)(O,2),E=x[0],y=x[1],C=Object(s.c)(f),R=Object(b.a)(C,2),w=R[0],W=R[1],L=Object(s.c)(g),Z=Object(b.a)(L,2)[1],k=Object(s.c)(A),N=Object(b.a)(k,2)[1];function Y(){return(Y=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){(function(){return Y.apply(this,arguments)})().then((function(e){a(e),h(e),W(new Array(e.length).fill(!1))}))}),[]),Object(c.useEffect)((function(){!function(){var e=[];n.forEach((function(t){-1===t.title.indexOf(E)&&-1===t.body.indexOf(E)||e.push(t)})),h(e),W(new Array(e.length).fill(!1))}()}),[E]),Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("div",{className:"search",children:Object(v.jsx)("input",{placeholder:"search note",value:E,onChange:function(e){return y(e.target.value)}})}),Object(v.jsx)("div",{className:"all_notes",children:l.map((function(e,t){return Object(v.jsx)(m,{note:e,isClicked:w[t],index:t},e.id)}))}),Object(v.jsx)("div",{className:"create_new",onClick:function(){var e={title:"Untitled "+n.length,body:"..",id:Date.now(),created_at:new Date,new:!0};a([e].concat(Object(j.a)(n))),h([e].concat(Object(j.a)(n))),Z(e),W(new Array(l.length+1).fill(0).map((function(e,t){return 0==t}))),N(!1)},children:"New"})]})}var y=n(3),C=n(19),R=n(20);function w(){return Object(v.jsxs)("div",{className:"not-selected",children:[Object(v.jsx)("img",{className:"logo",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAC0CAIAAAAYbFfZAAAEs2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMTgwIgogICB0aWZmOkltYWdlV2lkdGg9IjIzNiIKICAgdGlmZjpSZXNvbHV0aW9uVW5pdD0iMiIKICAgdGlmZjpYUmVzb2x1dGlvbj0iNzIuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNzIuMCIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIzNiIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjE4MCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIgogICBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDIx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jViP2mSsTMTD4VB2USIIgpWVlRkb+f3332sJxm7yPFeYjNWIOMuyZooS6+vrM7awvb1dSyTWMx6PVY1YqalOyH40wWAwuHv37r///ruysnLu3LlZmvrpp58+/fTTugKrC1gZe2lp6ezZs7VY/9nJ8zxJEiWLEapZUPC///6TcdYOBoOvv/76m2++2draqr1xbVlbW3v++eevXr166dIltZEwxpaXl5vfrwIRc85l3AL++eeff/LJJ5rfXC6VZ5555s0339zY2FAYw8LCQvMrzisQce2LW+7u7n7wwQc///xzjW2ayyuvvPLWW2+penKokmVhFYi4Xi/x999/v/fee66aK3L58uW33357YWGh+V0rcRRNn6+c8xoVPBqN3n//fafgAltbW++++66SmleWZc1Plm9axPWO4n700UeujjuR33777cMPP1RS82p+oF5BJq6rqVu3bn311Vd1tWYf33///fXr15vfr+WZeDQa1WjBb968WVdTtnLjxo2//vqr4Z3med7wqsaNDnbUeI5ub29/++23dbXGGAvD0DugrmZ14OOPP3799dcLH+Z53mq1wjBcXFyUUcfgnDf5SDxTRfzDDz/U0k6v17t48eLy8rKqmlQDTDEVvu9vbm5evXq12+3WuMeGHUVzIs6yrMZ+xi+//DJjC2EYbm5uLi4u1hKPoXDOt7a2bt++/fLLL1+8eLGuZuG3biwvNJd+6j0779y5M8vmq6urzz333JwrGEmS5ObNm/VOOm0yGZsq4llaW19fv3TpksX+4RRwzr/88st6G6yxtemYKuJTVzlWV1cff/zxGiOxhn/++WfG65uIhSJO07TewvvpaghRFDkFT+H27dt1NZVlWWP3ejQk4tqHjk43MWBjY6PVUnyDt87cu3evxtYaGy9sSMS1X1yWlpZOusnKyorryU2n3kGKxhyFqZn4FCI+f/58vTHYR72dXdsyce326KQ5VdVNB2ZR75XKNk9c+/Gc9Dbm2W97ngfOnj1bY2tWiTjLstqn3p/UTiiZIW4c9TquPM+bcRRNiFjGGXlSEbsuXRVq7zY0k4xNFfGJRMkYq3eCi5UsLy93Op1627RHxDKuKSfKxM5LVGH2hWbK2GMnJFG9r6Z24VFTqHEWW8OYmonJSRyFy8RVkLGSkD2ZWNKqANXrvi4TH0sURTLq6M0sCGF/Jo6iyM2XOBZJ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"}),Object(v.jsx)("div",{className:"heading",children:"No notes selected yet"}),Object(v.jsx)("div",{className:"desc",children:"Your notes from Google Keep will show up here."})]})}function W(e){var t=e.note,n=Object(c.useState)(t.title),a=Object(b.a)(n,2),i=a[0],r=a[1],l=Object(c.useState)(t.body),d=Object(b.a)(l,2),m=d[0],E=d[1],w=Object(s.c)(I),W=Object(b.a)(w,2),L=W[0],Z=W[1],k=Object(s.c)(A),N=Object(b.a)(k,2),Y=N[0],S=N[1],T=Object(s.c)(g),z=Object(b.a)(T,2)[1],V=Object(s.c)(f),B=Object(b.a)(V,2),D=B[0],H=B[1],F=Object(s.c)(p),Q=Object(b.a)(F,2),J=Q[0],M=Q[1];function X(){return(X=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(h,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({title:i,body:m})});case 3:return t=e.sent,e.next=6,t.json();case 6:if(!(n=e.sent).added){e.next=12;break}Z([n.note].concat(Object(j.a)(L.slice(1,L.length)))),z(n.note),e.next=13;break;case 12:throw new Error("Can't Create new Note");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function G(){return(G=Object(o.a)(u.a.mark((function e(){var n,c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.id,e.next=4,fetch(O+n,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({title:i,body:m})});case 4:return c=e.sent,e.next=7,c.json();case 7:if(!(a=e.sent).updated){e.next=14;break}Z(L.map((function(e){return e.id===t.id?a.note:e}))),z(a.note),S(!1),e.next=15;break;case 14:throw new Error("Can't Update");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}function P(){return(P=Object(o.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t.new){e.next=7;break}return Z(L.slice(1,L.length)),M(L.slice(1,L.length)),z(null),H(D.map((function(e){return!1}))),e.abrupt("return");case 7:return n=t.id,e.next=10,fetch(x+n);case 10:return c=e.sent,e.next=13,c.json();case 13:if(!e.sent.deleted){e.next=21;break}Z(L.slice(1,L.length)),M(L.slice(1,L.length)),z(null),H(D.map((function(e){return!1}))),e.next=22;break;case 21:throw new Error("Can't delete");case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0);case 27:case"end":return e.stop()}}),e,null,[[0,24]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){r(t.title),E(t.body)}),[t]),Object(c.useEffect)((function(){!function(){if(t.title!==i||t.body!==m){!t.new&!Y&&S(!0);var e=Object(y.a)(Object(y.a)({},t),{changed:!0,title:i,body:m});Z(L.map((function(n){return n.id===t.id?e:n}))),M(J.map((function(n){return n.id===t.id?e:n})))}}()}),[i,m]),Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"title_wrap",children:[Object(v.jsx)("input",{className:"title",value:i,onChange:function(e){return r(e.target.value)}}),Object(v.jsx)("button",{className:"delete",onClick:function(){return P.apply(this,arguments)},children:Object(v.jsx)(C.a,{icon:R.a})})]}),Object(v.jsx)("div",{className:"line"}),Object(v.jsx)("textarea",{className:"body",value:m,onChange:function(e){return E(e.target.value)}}),Object(v.jsx)("button",{className:Y||t.changed?"show btn":"hidden btn",onClick:function(){return G.apply(this,arguments)},children:"Save Change"}),Object(v.jsx)("button",{className:t.new?"show btn":"hidden btn",onClick:function(){return X.apply(this,arguments)},children:"Create"})]})}function L(){var e=Object(s.c)(g),t=Object(b.a)(e,1)[0];return Object(v.jsx)("div",{className:"note_body",children:t?Object(v.jsx)(W,{note:t}):Object(v.jsx)(w,{})})}n(33);var Z=function(){return Object(v.jsxs)(s.a,{className:"App",children:[Object(v.jsx)(E,{}),Object(v.jsx)(L,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Z,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.64a20ad5.chunk.js.map