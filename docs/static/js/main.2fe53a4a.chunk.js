(this["webpackJsonpmovie-search-ts"]=this["webpackJsonpmovie-search-ts"]||[]).push([[0],{37:function(e,t,a){e.exports=a(45)},45:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(9),i=a.n(c),l=a(11),m=a(21),s=a(77),u=a(78),E=a(81),p=a(73),h=a(68),S=a(72),f=function(e){var t=e.text;return o.a.createElement(h.a,{position:"static"},o.a.createElement(S.a,null,o.a.createElement(p.a,{component:"h2"},t)))},d=a(74),g=a(75),v=a(76),w=function(e){var t=e.movie,a="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return o.a.createElement(d.a,{style:{width:200,marginTop:"8px"}},o.a.createElement(g.a,{style:{height:300},image:a,title:"The movie titled: ".concat(t.Title),component:"img"}),o.a.createElement(v.a,null,o.a.createElement(p.a,{component:"h2"},t.Title),o.a.createElement(p.a,{component:"p"},"(",t.Year,")")))},y=a(79),b=function(e){var t=e.search,a=Object(r.useState)(""),n=Object(l.a)(a,2),c=n[0],i=n[1];return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(c),i("")}},o.a.createElement(y.a,{type:"text",value:c,onChange:function(e){i(e.target.value)}}),o.a.createElement(y.a,{type:"submit",value:"SEARCH"}))};!function(e){e.REQUEST="SEARCH_MOVIES_REQUEST",e.SUCCESS="SEARCH_MOVIES_SUCCESS",e.FAILURE="SEARCH_MOVIES_FAILURE"}(n||(n={}));var C={loading:!0,movies:[],errorMessage:null},T=function(e,t){switch(t.type){case n.REQUEST:return Object(m.a)({},e,{loading:!0,errorMessage:null});case n.SUCCESS:return Object(m.a)({},e,{loading:!1,movies:t.payload});case n.FAILURE:return Object(m.a)({},e,{loading:!1,errorMessage:t.error});default:throw new Error}},U=function(){var e=Object(r.useReducer)(T,C),t=Object(l.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){c({type:n.SUCCESS,payload:e.Search})}))}),[]);var i=a.movies,m=a.errorMessage,h=a.loading;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f,{text:"MovieSearch"}),o.a.createElement(s.a,{component:"main",maxWidth:"md"},o.a.createElement(u.a,null),o.a.createElement(E.a,{mt:4,textAlign:"center"},o.a.createElement(b,{search:function(e){c({type:n.REQUEST}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?c({type:n.SUCCESS,payload:e.Search}):c({type:n.FAILURE,error:e.Error})}))}}),o.a.createElement(p.a,{component:"p"},"Sharing a few of our favourite movies")),o.a.createElement(E.a,{mt:4,display:"flex",flexWrap:"wrap",justifyContent:"space-around"},h&&!m?o.a.createElement(p.a,{component:"p"},"loading... "):m?o.a.createElement(p.a,{component:"p"},m):i.map((function(e,t){return o.a.createElement(w,{key:"".concat(t,"-").concat(e.Title),movie:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.2fe53a4a.chunk.js.map