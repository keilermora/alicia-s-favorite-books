(this["webpackJsonpalicia-s-favorite-books"]=this["webpackJsonpalicia-s-favorite-books"]||[]).push([[0],{100:function(e,t,n){e.exports={button:"Button_button__3ZMZ_"}},102:function(e,t,n){e.exports={particles:"ParticlesBackground_particles__2ueK5"}},103:function(e){e.exports=JSON.parse('{"detectRetina":true,"fpsLimit":60,"particles":{"color":{"value":"#ffffff"},"move":{"enable":true,"speed":2,"random":true},"number":{"value":40},"opacity":{"value":0.5,"random":true},"shape":{"type":"circle"},"size":{"random":true,"value":50}}}')},104:function(e,t,n){e.exports={footer:"Footer_footer__3c02O"}},110:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),r=n(57),i=n.n(r),s=(n(110),n(35)),o=n(19),l=n(20),j=n(76),b=n(94),u=n(31),d="SET_FIREBASE_DATA",h="SET_FILTER_TEXT",f="SET_FILTER_AUTHOR",O="SET_FILTER_GENRE",x="SET_FILTER_SAGA",p={books:[],authors:[],genres:[],sagas:[],filterText:"",selectedAuthor:"",selectedGenre:"",selectedSaga:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n=t.payload,c=n.books,a=n.authors,r=n.genres,i=n.sagas;return Object(u.a)(Object(u.a)({},e),{},{books:c,authors:a,genres:r,sagas:i});case h:return Object(u.a)(Object(u.a)({},e),{},{filterText:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{selectedAuthor:t.payload});case O:return Object(u.a)(Object(u.a)({},e),{},{selectedGenre:t.payload});case x:return Object(u.a)(Object(u.a)({},e),{},{selectedSaga:t.payload});default:return e}},v=Object(j.b)(m,Object(j.a)(b.a)),g=n(2),_=Object(o.h)((function(e){var t=e.children,n=e.history;return Object(c.useEffect)((function(){return n.listen((function(){window.scrollTo(0,0)}))})),Object(g.jsx)(g.Fragment,{children:t})})),k=n(95),y=n.n(k),N=function(e){var t=e.children;return Object(g.jsx)("div",{className:y.a.container,children:t})},E=n(96),w=n.n(E),I=function(){return Object(g.jsx)("nav",{className:w.a.navbar,children:Object(g.jsx)(N,{children:Object(g.jsxs)("ul",{children:[Object(g.jsx)("li",{children:Object(g.jsx)(s.b,{to:"/",children:"Inicio"})}),Object(g.jsx)("li",{children:Object(g.jsx)(s.b,{to:"/about",children:"Acerca de"})})]})})})},S=n(0),F=n.n(S),A=n(38),T=n(6),C=n(39),L=n(97);Object(L.a)({apiKey:"AIzaSyB6UAap4ggzb5MfgbC3Sydyxv-eCvhZx00",authDomain:"alicia-s-favorite-books.firebaseapp.com",projectId:"alicia-s-favorite-books",storageBucket:"alicia-s-favorite-books.appspot.com",messagingSenderId:"700189519272",appId:"1:700189519272:web:3cb7d6c518b0403714c19d"});var B,G,D,z,R,P,H,M,J,q,K,U,V,Z,W,X,Y=Object(C.e)(),Q=n(98),$=n.n(Q),ee=Object(c.memo)((function(e){var t=e.book;return Object(g.jsx)("div",{className:$.a.bookListItem,children:Object(g.jsx)(s.b,{to:"/book/".concat(t.id),children:Object(g.jsx)("img",{src:t.imageUrl,alt:t.title,width:226,height:350,loading:"lazy"})})})})),te=n(61),ne=n.n(te),ce=function(){var e=Object(l.c)((function(e){return e.books})),t=Object(l.c)((function(e){return e.selectedAuthor})),n=Object(l.c)((function(e){return e.selectedGenre})),c=Object(l.c)((function(e){return e.selectedSaga})),a=Object(l.c)((function(e){return e.filterText}));if(!e||!e.length)return Object(g.jsx)("div",{className:ne.a.bookList,children:Object(g.jsx)("h1",{children:"Cargando..."})});var r=function(e){var r=e;return""!==t&&(r=r.filter((function(e){return e.author.includes(t)}))),""!==n&&(r=r.filter((function(e){return e.genre.includes(n)}))),""!==c&&(r=r.filter((function(e){return e.saga.includes(c)}))),""!==a&&(r=r.filter((function(e){return e.title.toLowerCase().includes(a.toLowerCase())}))),r}(e);return r.length?Object(g.jsx)("div",{className:ne.a.bookList,children:r.map((function(e){return Object(g.jsx)(ee,{book:e},e.id)}))}):Object(g.jsx)("div",{className:ne.a.bookList,children:Object(g.jsx)("h1",{children:"Sin resultados \xaf\\_(\u30c4)_/\xaf"})})},ae=n(49),re=n.n(ae),ie=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.authors})),n=Object(l.c)((function(e){return e.genres})),c=Object(l.c)((function(e){return e.sagas})),a=Object(l.c)((function(e){return e.selectedAuthor})),r=Object(l.c)((function(e){return e.selectedGenre})),i=Object(l.c)((function(e){return e.selectedSaga})),s=Object(l.c)((function(e){return e.filterText})),o=[],j=[],b=[];return t&&t.length&&(o=t.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))),n&&n.length&&(j=n.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))),c&&c.length&&(b=c.map((function(e,t){return Object(g.jsx)("option",{value:e,children:e},t)}))),Object(g.jsxs)("form",{className:re.a.filter,children:[Object(g.jsxs)("div",{className:re.a.inputGroup,children:[Object(g.jsx)("label",{htmlFor:"selectedAuthor",children:"Autor"}),Object(g.jsxs)("select",{id:"selectedAuthor",onChange:function(t){return function(t){e({type:f,payload:t.target.value})}(t)},value:a,children:[Object(g.jsx)("option",{value:"",children:"Todos"}),o]})]}),Object(g.jsxs)("div",{className:re.a.inputGroup,children:[Object(g.jsx)("label",{htmlFor:"selectedGenre",children:"G\xe9nero"}),Object(g.jsxs)("select",{id:"selectedGenre",onChange:function(t){return function(t){e({type:O,payload:t.target.value})}(t)},value:r,children:[Object(g.jsx)("option",{value:"",children:"Todos"}),j]})]}),Object(g.jsxs)("div",{className:re.a.inputGroup,children:[Object(g.jsx)("label",{htmlFor:"selectedSaga",children:"Saga"}),Object(g.jsxs)("select",{id:"selectedSaga",onChange:function(t){return function(t){e({type:x,payload:t.target.value})}(t)},value:i,children:[Object(g.jsx)("option",{value:"",children:"Todas"}),b]})]}),Object(g.jsxs)("div",{className:re.a.inputGroup,children:[Object(g.jsx)("label",{htmlFor:"filterText",children:"T\xedtulo"}),Object(g.jsx)("input",{id:"filterText",type:"text",value:s,onChange:function(t){return function(t){e({type:h,payload:t.target.value})}(t)}})]})]})},se=["title","titleId"];function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function je(e,t){var n=e.title,a=e.titleId,r=le(e,se);return c.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",width:277,height:257,viewBox:"0 0 277.2 256.6",ref:t,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,B||(B=c.createElement("path",{d:"m270.1 136.6c0 66.3-68.1 120-129.6 120-55.4 0-129.6-53.7-129.6-120 0-66.3 58-120 129.6-120 71.5 0 129.6 53.7 129.6 120",fill:"#bbb"})),G||(G=c.createElement("path",{d:"M0 54.9C0 24.6 21.1 0 47.2 0c26 0 47.2 24.6 47.2 54.9 0 30.3-21.1 54.9-47.2 54.9C21.1 109.7 0 85.2 0 54.9",fill:"#010101"})),D||(D=c.createElement("path",{d:"m182.8 56.4c0-30.3 21.1-54.9 47.2-54.9 26.1 0 47.2 24.6 47.2 54.9 0 30.3-21.1 54.9-47.2 54.9-26 0-47.2-24.6-47.2-54.9",fill:"#010101"})),z||(z=c.createElement("path",{d:"m18.2 51.4c0-17.7 12.3-32.1 27.6-32.1 15.2 0 27.6 14.4 27.6 32.1 0 17.7-12.4 32.1-27.6 32.1-15.2 0-27.6-14.4-27.6-32.1",fill:"#fcc"})),R||(R=c.createElement("path",{d:"m204.1 51.4c0-17.7 12.3-32.1 27.6-32.1 15.2 0 27.6 14.4 27.6 32.1 0 17.7-12.3 32.1-27.6 32.1-15.2 0-27.6-14.4-27.6-32.1",fill:"#fcc"})),P||(P=c.createElement("path",{d:"m140.6 13.5c-72.2 0-130.7 53.3-130.7 119 0 65.7 74.9 119 130.7 119 62 0 130.7-53.3 130.7-119 0-65.7-58.5-119-130.7-119zm22 207.9c-10.6 0-19.3-5.4-20.6-12.4-1.3 7-10 12.4-20.6 12.4-11.5 0-20.8-6.4-20.8-14.3 0-0.6 0.1-1.2 0.2-1.7 1.3 7.1 10 12.5 20.6 12.5 10.4 0 19-5.3 20.5-12.2 0-0.1 0-0.2 0-0.3 0 0 0 0 0 0.1 0 0 0-0.1 0-0.1 0 0.1 0 0.2 0.1 0.3 1.5 6.9 10.1 12.2 20.5 12.2 10.6 0 19.3-5.5 20.6-12.5 0.1 0.6 0.2 1.2 0.2 1.7 0 7.9-9.3 14.3-20.8 14.3z",fill:"#fff"})),H||(H=c.createElement("path",{d:"m113.9 95c19 8.7 24.5 30.4 12.3 48.5-12.3 18.1-37.6 25.7-56.6 17-19-8.7-24.5-30.4-12.3-48.5 12.3-18.1 37.6-25.7 56.7-17",fill:"#010101"})),M||(M=c.createElement("path",{d:"m169.5 95.1c-19 8.7-24.5 30.4-12.3 48.5 12.3 18.1 37.6 25.7 56.6 17 19-8.7 24.5-30.4 12.3-48.5-12.3-18.1-37.6-25.7-56.6-17",fill:"#010101"})),J||(J=c.createElement("path",{d:"m218.2 127.2c0 14.6-11.8 26.4-26.4 26.4-14.6 0-26.4-11.8-26.4-26.4 0-14.6 11.8-26.4 26.4-26.4 14.6 0 26.4 11.8 26.4 26.4",fill:"#594a42"})),q||(q=c.createElement("path",{d:"m119.9 127.6c0 14.6-11.8 26.4-26.4 26.4-14.6 0-26.4-11.8-26.4-26.4 0-14.6 11.8-26.4 26.4-26.4 14.6 0 26.4 11.8 26.4 26.4",fill:"#594a42"})),K||(K=c.createElement("path",{d:"m119.9 127.6c0 12.4-10.1 22.5-22.5 22.5-12.4 0-22.5-10.1-22.5-22.5 0-12.4 10.1-22.5 22.5-22.5 12.4 0 22.5 10.1 22.5 22.5",fill:"#010101"})),U||(U=c.createElement("path",{d:"m218.2 127.2c0 12.4-10.1 22.5-22.5 22.5-12.4 0-22.5-10.1-22.5-22.5 0-12.4 10.1-22.5 22.5-22.5 12.4 0 22.5 10.1 22.5 22.5",fill:"#010101"})),V||(V=c.createElement("path",{d:"m218.2 127.2c0 3.8-3.1 6.9-6.9 6.9-3.8 0-6.9-3.1-6.9-6.9 0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9z",fill:"#fff"})),Z||(Z=c.createElement("path",{d:"m119.9 127.6c0 3.8-3.1 6.9-6.9 6.9-3.8 0-6.9-3.1-6.9-6.9 0-3.8 3.1-6.9 6.9-6.9 3.8 0 6.9 3.1 6.9 6.9z",fill:"#fff"})),W||(W=c.createElement("path",{d:"m160.6 186.5c0 4.8-8 14.3-18 14.3-9.9 0-18-9.4-18-14.3 0-4.8 8-8.7 18-8.7 9.9 0 18 3.9 18 8.7z",fill:"#010101"})),X||(X=c.createElement("path",{d:"m142.7 184.2c0 1.8-2.5 3.2-5.6 3.2-3.1 0-5.6-1.5-5.6-3.2 0-1.7 2.5-3.2 5.6-3.2 3.1 0 5.6 1.4 5.6 3.2z",fill:"#797778"})))}var be=c.forwardRef(je),ue=(n.p,n(62)),de=n.n(ue),he=function(){var e=Object(T.a)(F.a.mark((function e(t){var n,c,a,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],c=[],a=[],r=[],e.next=6,Object(C.d)(Object(C.a)(Y,"books"));case 6:e.sent.forEach((function(e){n.push(Object(u.a)({id:e.id},e.data()))})),c=Object(A.a)(new Set(n.map((function(e){return e.author})))).sort(),a=Object(A.a)(new Set(n.map((function(e){return e.genre})))).sort(),r=Object(A.a)(new Set(n.map((function(e){return e.saga})))).sort(),t({type:d,payload:{books:n,authors:c,genres:a,sagas:r}});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(l.d)(),t=Object(l.c)((function(e){return e.books}));return Object(c.useEffect)((function(){t&&!t.length&&e.dispatch(he)}),[t,e]),Object(g.jsxs)("main",{className:de.a.home,children:[Object(g.jsx)("section",{className:de.a.title,children:Object(g.jsxs)(N,{children:[Object(g.jsx)("h1",{children:"Libros favoritos de Alicia"}),Object(g.jsx)(be,{width:"128",height:"120"})]})}),Object(g.jsx)("section",{className:de.a.books,children:Object(g.jsxs)(N,{children:[Object(g.jsx)("div",{className:"filter",children:Object(g.jsx)(ie,{})}),Object(g.jsx)("div",{className:"list",children:Object(g.jsx)(ce,{})})]})})]})},Oe=n(50),xe=n.n(Oe),pe=n(99),me=n.n(pe),ve=function(e){var t=e.children,n=e.href;return Object(g.jsx)("a",{className:me.a.anchor,href:n,target:"_blank",rel:"noopener noreferrer",children:t})},ge=n(100),_e=n.n(ge),ke=function(e){var t=e.children,n=e.className,c=e.href,a=e.onClick,r=[_e.a.button,n].join(" ");return c?Object(g.jsx)(s.b,{className:r,to:c,children:t}):Object(g.jsx)("button",{className:r,onClick:a,children:t})},ye=n(63),Ne=n.n(ye),Ee=function(){return Object(g.jsx)("main",{className:Ne.a.about,children:Object(g.jsxs)(N,{children:[Object(g.jsxs)("div",{className:Ne.a.project,children:[Object(g.jsx)("h1",{children:"Alicia's Favorite Books"}),Object(g.jsxs)("p",{children:["Aplicaci\xf3n web elaborada por"," ",Object(g.jsx)(ve,{href:"https://www.linkedin.com/in/keilermora/",children:"Keiler Mora"})," ","con fines demostrativos. El proyecto fue desarrollado usando las librer\xedas de JavaScript"," ",Object(g.jsx)(ve,{href:"https://reactjs.org/",children:"React"})," (\xa1Hooks!) y"," ",Object(g.jsx)(ve,{href:"https://redux.js.org/.org/",children:"Redux"})," para crear la interfaz de usuario, en comunicaci\xf3n con data alojada en"," ",Object(g.jsx)(ve,{href:"https://firebase.google.com/",children:"Firebase"}),". El c\xf3digo fuente est\xe1 disponible en"," ",Object(g.jsx)(ve,{href:"https://github.com/keilermora/alicias-favorite-books",children:"Github"}),"."]}),Object(g.jsx)(ke,{href:"/",children:"Volver"})]}),Object(g.jsx)("div",{className:Ne.a.dedication,children:Object(g.jsxs)("div",{children:[Object(g.jsx)(xe.a,{animateIn:"fadeIn",animateOut:"fadeOut",children:Object(g.jsx)("h3",{children:"- I'll be here..."})}),Object(g.jsx)(xe.a,{animateIn:"fadeIn",animateOut:"fadeOut",children:Object(g.jsx)("h3",{children:"- Why..?"})}),Object(g.jsx)(xe.a,{animateIn:"fadeIn",animateOut:"fadeOut",children:Object(g.jsx)("h3",{children:"- I'll be 'waiting' here..."})}),Object(g.jsx)(xe.a,{animateIn:"fadeIn",animateOut:"fadeOut",children:Object(g.jsx)("h3",{children:"- For what?"})}),Object(g.jsx)(xe.a,{animateIn:"fadeIn",animateOut:"fadeOut",children:Object(g.jsxs)("h3",{children:["- I'll be waiting... for you... so...",Object(g.jsx)("br",{}),"if you come here...",Object(g.jsx)("br",{}),"you'll find me.",Object(g.jsx)("br",{}),"I promise."]})})]})})]})})},we=n(26),Ie=n(34),Se=n.n(Ie),Fe=function(){var e=Object(o.g)().id,t=Object(l.c)((function(e){return e.books})),n=Object(c.useState)(),a=Object(we.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(!1),j=Object(we.a)(s,2),b=j[0],u=j[1],d=Object(o.f)();if(Object(c.useEffect)((function(){(function(){var n=Object(T.a)(F.a.mark((function n(){var c,a;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t||!t.length){n.next=4;break}i(t.find((function(t){return t.id===e}))),n.next=9;break;case 4:return n.next=6,Object(C.c)(Object(C.b)(Y,"books",e));case 6:c=n.sent,(a=c.data())?i(a):u(!0);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[t,e]),b)return Object(g.jsx)("main",{className:Se.a.bookDetails,children:Object(g.jsx)(N,{children:Object(g.jsx)("div",{className:Se.a.bookContent,children:Object(g.jsx)("p",{children:"El libro seleccionado no se encuentra dentro de la lista de favoritos. Tal vez Alicia cambi\xf3 de opini\xf3n... \xaf\\_(\u30c4)_/\xaf"})})})});if(!r)return Object(g.jsx)("main",{className:Se.a.bookDetails,children:Object(g.jsx)(N,{children:Object(g.jsx)("div",{className:Se.a.bookContent,children:Object(g.jsx)("p",{children:"Cargando..."})})})});var h=new Date(1970,0,1);h.setSeconds(r.publishedAt.seconds);var f=r.summary.split("\\n").map((function(e,t){return Object(g.jsx)("p",{children:e},t)}));return Object(g.jsx)("main",{className:Se.a.bookDetails,children:Object(g.jsx)(N,{children:Object(g.jsxs)("div",{className:Se.a.bookContent,children:[Object(g.jsx)(ke,{onClick:d.goBack,children:"Volver"}),Object(g.jsx)("img",{src:r.imageUrl,alt:r.title,width:350}),Object(g.jsxs)("div",{className:Se.a.info,children:[Object(g.jsx)("h1",{children:r.title}),Object(g.jsxs)("div",{className:Se.a.summary,children:[Object(g.jsx)("span",{className:Se.a.label,children:"Fecha publicaci\xf3n:"})," ",Object(g.jsx)("span",{children:h.toLocaleDateString()}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:Se.a.label,children:"Saga:"})," ",Object(g.jsx)("span",{children:r.saga}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{className:Se.a.label,children:"G\xe9nero:"})," ",Object(g.jsx)("span",{children:r.genre})]}),f]})]})})})},Ae=n(75),Te=n.n(Ae),Ce=function(){return Object(g.jsx)("div",{className:Te.a.notFound,children:Object(g.jsx)(N,{children:Object(g.jsxs)("div",{className:Te.a.content,children:[Object(g.jsxs)("p",{children:["\xbfQuer\xedas ver una p\xe1gina diferente?",Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:"\xa1Aqu\xed la tienes!"})]}),Object(g.jsx)(ke,{href:"/",children:"Volver"})]})})})},Le=n(101),Be=n.n(Le),Ge=n(102),De=n.n(Ge),ze=n(103),Re=function(e){var t=e.children,n=ze;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(Be.a,{className:De.a.particles,options:n}),t]})},Pe=n(104),He=n.n(Pe),Me=function(){var e=(new Date).getFullYear();return Object(g.jsx)("footer",{className:He.a.footer,children:Object(g.jsxs)("small",{children:["\xa9 ",e," - The books and their images belongs to their author."]})})},Je=function(){return Object(g.jsx)(l.a,{store:v,children:Object(g.jsx)(Re,{children:Object(g.jsx)(s.a,{basename:"/alicia-s-favorite-books",children:Object(g.jsxs)(_,{children:[Object(g.jsx)(I,{}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",children:Object(g.jsx)(fe,{})}),Object(g.jsx)(o.a,{path:"/about",children:Object(g.jsx)(Ee,{})}),Object(g.jsx)(o.a,{path:"/book/:id",children:Object(g.jsx)(Fe,{})}),Object(g.jsx)(o.a,{path:"*",children:Object(g.jsx)(Ce,{})})]}),Object(g.jsx)(Me,{})]})})})})},qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,292)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(Je,{})}),document.getElementById("root")),qe()},34:function(e,t,n){e.exports={bookDetails:"BookDetails_bookDetails__2c8dX",bookContent:"BookDetails_bookContent__BuhFP",info:"BookDetails_info__1ASxW",summary:"BookDetails_summary__woSiN",label:"BookDetails_label__zfsci"}},49:function(e,t,n){e.exports={filter:"Filter_filter__1iP7y",inputGroup:"Filter_inputGroup__2kAHw"}},61:function(e,t,n){e.exports={bookList:"BookList_bookList__7N-q3"}},62:function(e,t,n){e.exports={home:"Home_home__nfz_E",title:"Home_title__1RtlI",books:"Home_books__1yrq-"}},63:function(e,t,n){e.exports={about:"About_about__1I_cf",project:"About_project__1kq5F",dedication:"About_dedication__2a3A6"}},75:function(e,t,n){e.exports={notFound:"NotFound_notFound__3ZFK1",content:"NotFound_content__1_V8e"}},95:function(e,t,n){e.exports={container:"Container_container__1Gy0d"}},96:function(e,t,n){e.exports={navbar:"Navbar_navbar__1i7k4"}},98:function(e,t,n){e.exports={bookListItem:"BookListItem_bookListItem__JO2Yd"}},99:function(e,t,n){e.exports={anchor:"Anchor_anchor__1y7LM"}}},[[291,1,2]]]);
//# sourceMappingURL=main.98b6dd3a.chunk.js.map