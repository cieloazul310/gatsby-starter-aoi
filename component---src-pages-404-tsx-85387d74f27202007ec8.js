(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(316),l=a(248),c=a(223),i=a(247),o=a(235);t.default=function(e){var t=e.location;console.log(t);var a=n.useReducer(i.a,Object(o.a)(t)),s=a[0],u=a[1];return n.createElement(l.a,{title:"Not Found",location:t,appState:s,dispatch:u},n.createElement(r.a,{variant:"h2",gutterBottom:!0},"NOT FOUND"),n.createElement(r.a,{variant:"h5",gutterBottom:!0},n.createElement("code",null,t.pathname)," doesn't exist."),n.createElement(c.a,{to:"/",appState:s},"Top Page"))}},223:function(e,t,a){"use strict";a.d(t,"a",function(){return i}),a.d(t,"b",function(){return o});a(66);var n=a(0),r=a(231),l=a(225),c=a.n(l);function i(e){var t=e.className,a=e.children,l=e.to,i=e.appState;return n.createElement(r.a,{className:c()(t),to:l,state:{appState:i}},a)}function o(e,t,a){void 0===a&&(a={}),Object(r.c)(e,Object.assign({},a,{state:{appState:t}}))}},231:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(3),c=a.n(l),i=a(64),o=a.n(i);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return i.navigate});a(232);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,l=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&l(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,l=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||l,staticQueryData:e})})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},232:function(e,t,a){var n;e.exports=(n=a(246))&&n.default||n},235:function(e,t,a){"use strict";var n={val:100,mapState:{layer:"cjstd",borderVisibility:!0}},r=function(e){return e.state&&e.state.appState?e.state.appState:n},l=["cjstd","cjpale","slopemap","relief","seemlessphoto"];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return l})},239:function(e,t,a){"use strict";var n=a(0),r=a(219),l=a(312),c=a(322),i=a(323),o=a(319),s=a(320),u=a(321),m=a(325),p=a(324),d=a(332),E=a(326),f=a(255),h=a.n(f),g=a(256),b=a.n(g),v=a(254),w=a.n(v),y=a(257),S=a.n(y),O=a(235),j=Object(r.a)(function(e){return Object(l.a)({nested:{paddingLeft:e.spacing(6)}})});t.a=function(e){var t=e.mapState,a=e.dispatch,r=j({}),l=n.useState(!1),f=l[0],g=l[1];return n.createElement(c.a,{subheader:n.createElement(i.a,null,"Map Handler")},n.createElement(o.a,{button:!0,onClick:function(){g(!f)}},n.createElement(s.a,null,n.createElement(w.a,null)),n.createElement(u.a,{primary:"Layers"}),f?n.createElement(h.a,null):n.createElement(b.a,null)),n.createElement(p.a,{in:f,timeout:"auto",unmountOnExit:!0},n.createElement(c.a,{disablePadding:!0},O.b.map(function(e){return n.createElement(o.a,{className:r.nested,key:e,button:!0,onClick:function(){return a({type:"SET_LAYER",layer:e})}},n.createElement(u.a,{primary:e}),n.createElement(m.a,null,n.createElement(d.a,{checked:e===t.layer,onChange:function(){return a({type:"SET_LAYER",layer:e})}})))}))),n.createElement(o.a,{onClick:function(){return a({type:"TOGGLE_BORDER"})}},n.createElement(s.a,null,n.createElement(S.a,null)),n.createElement(u.a,{primary:"Border"}),n.createElement(m.a,null,n.createElement(E.a,{checked:t.borderVisibility,onChange:function(){return a({type:"TOGGLE_BORDER"})}}))))}},245:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Typescript App Shell",description:"A GatsbyJS starter using Material Design written with TypeScript.",author:{name:"cieloazul310"}}}}}},246:function(e,t,a){"use strict";a.r(t);a(66);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),i=a(102),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},247:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(66);function n(e,t){switch(t.type){case"SET_LAYER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{layer:t.layer})});case"TOGGLE_BORDER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{borderVisibility:!e.mapState.borderVisibility})});default:throw new Error}}},248:function(e,t,a){"use strict";var n=a(245),r=a(0),l=a(231),c=a(100),i=a.n(c),o=a(219),s=a(312),u=a(316),m=a(331),p=a(329),d=a(328),E=a(225),f=a.n(E),h=a(313),g=a(315),b=a(311),v=a(333),w=a(252),y=a.n(w),S=(a(99),a(98)),O=a.n(S),j=a(309),x=a(226),k=a(227);console.log(k.c);var R=function(e){var t=e.defaultVertical,a=O()(e,["defaultVertical"]);return r.createElement(j.a,a,r.createElement(x.a,{icon:k.c,style:{verticalAlign:t?void 0:"0.125em"}}))};var N=function(e){var t=e.defaultVertical,a=O()(e,["defaultVertical"]);return r.createElement(j.a,a,r.createElement(x.a,{icon:k.a,style:{verticalAlign:t?void 0:"0.125em"}}))};var C=function(e){var t=e.defaultVertical,a=O()(e,["defaultVertical"]);return r.createElement(j.a,a,r.createElement(x.a,{icon:k.b,style:{verticalAlign:t?void 0:"0.125em"}}))};var D=function(e){var t=e.url,a=e.title;return a?"https://twitter.com/intent/tweet?text="+encodeURI(a)+"&url="+encodeURIComponent(t):"https://twitter.com/intent/tweet?url="+encodeURIComponent(t)},T=function(e){var t=e.url;return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t)};var L=function(e){var t=e.className,a=e.title,n=e.location,l=e.fontSize,c=e.color;return r.createElement("div",{className:f()(t)},r.createElement(v.a,{title:"Share on Twitter"},r.createElement(b.a,{color:c||"default",href:D({url:n.href,title:a}),target:"_blank",rel:"noopener noreferrer"},r.createElement(R,{fontSize:l||"default"}))),r.createElement(v.a,{title:"Share on Facebook"},r.createElement(b.a,{color:c||"default",href:T({url:n.href}),target:"_blank",rel:"noopener noreferrer"},r.createElement(N,{fontSize:l||"default"}))),r.createElement(v.a,{title:"GitHub"},r.createElement(b.a,{color:c||"default",href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(C,{fontSize:l||"default"}))))},M=Object(o.a)(function(e){return Object(s.a)({title:{flex:1,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}})});var A=function(e){var t=e.className,a=e.title,n=e.location,l=e.toggleDrawer,c=M({});return r.createElement(h.a,{className:f()(t)},r.createElement(g.a,null,r.createElement(m.a,{xsDown:!0,mdUp:!0},r.createElement(v.a,{title:"Menu"},r.createElement(b.a,{color:"inherit",onClick:l},r.createElement(y.a,null)))),r.createElement(u.a,{className:c.title,variant:"h6",component:"h1",color:"inherit"},a),r.createElement(m.a,{smDown:!0},r.createElement(L,{color:"inherit",location:n,title:a}))))},G=a(317),V=a(318),U=a(237),_=a.n(U),q=a(238),B=a.n(q),P=a(253),F=a.n(P),z=a(223),I=Object(o.a)(function(e){return Object(s.a)({root:{position:"fixed",bottom:0,left:0,width:"100%"}})});var Y=function(e){var t=e.location,a=e.appState,n=I({});return r.createElement(G.a,{className:n.root,value:t.pathname,showLabels:!0,onChange:function(e,t){Object(z.b)(t,a)}},r.createElement(V.a,{label:"Top",value:"/",icon:r.createElement(_.a,null)}),r.createElement(V.a,{label:"page2",value:"/page-2/",icon:r.createElement(B.a,null)}),r.createElement(V.a,{label:"Settings",value:"/settings/",icon:r.createElement(F.a,null)}))},H=(a(66),a(327)),J=a(258),Q=a.n(J),W=a(13),K=a.n(W),X=a(322),Z=a(323),$=a(319),ee=a(320),te=a(321),ae=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).renderLink=r.forwardRef(function(e,a){return r.createElement(z.a,Object.assign({to:t.props.to,appState:t.props.appState},e,{innerRef:a}))}),t}return K()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.primary,n=e.to,l=e.location;return r.createElement($.a,{button:!0,component:this.renderLink,selected:l.pathname===n},t&&r.createElement(ee.a,null,t),r.createElement(te.a,{primary:a}))},t}(r.PureComponent);var ne=function(e){var t=e.location,a=e.appState;return r.createElement(X.a,{subheader:r.createElement(Z.a,null,"Contents")},r.createElement(ae,{to:"/",primary:"Top",location:t,appState:a,icon:r.createElement(_.a,null)}),r.createElement(ae,{to:"/page-2/",primary:"Page 2",location:t,appState:a,icon:r.createElement(B.a,null)}))},re=a(239),le=Object(o.a)(function(e){return Object(s.a)({toolbar:Object.assign({},e.mixins.toolbar,{display:"flex",alignItems:"center",paddingLeft:e.spacing(3)})})});var ce=function(e){var t=e.location,a=e.appState,n=e.handleDrawer,l=e.contents,c=e.dispatch,i=le({});return r.createElement("div",null,r.createElement("div",{className:i.toolbar},r.createElement(m.a,{mdUp:!0},r.createElement(v.a,{title:"Close"},r.createElement(b.a,{onClick:n},r.createElement(Q.a,null))))),r.createElement(H.a,null),l?l.map(function(e,t,a){return t===a.length-1?e:r.createElement(r.Fragment,null,e,r.createElement(H.a,null))}):null,r.createElement(ne,{location:t,appState:a}),r.createElement(H.a,null),r.createElement(re.a,{mapState:a.mapState,dispatch:c}))},ie=Object(o.a)(function(e){var t,a,n;return Object(s.a)({root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("md")]={width:280},t),drawerPaper:{width:280},header:(a={width:"100%"},a[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},a),main:(n={width:"100%",paddingTop:e.mixins.toolbar.minHeight},n[e.breakpoints.down("xs")]={paddingBottom:56},n[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},n["@media (min-width:600px)"]={paddingTop:64},n),content:{width:"100%",maxWidth:800,margin:"auto",padding:e.spacing(4)+"px "+e.spacing(2)+"px","@global":{a:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{color:e.palette.secondary.light,textDecoration:"underline"}}}},footer:{textAlign:"center",padding:e.spacing(4)+"px "+e.spacing(2)+"px"}})});t.a=function(e){var t=e.children,a=e.title,c=e.appState,o=e.location,s=e.drawerContents,E=e.dispatch,f=r.useState(!1),h=f[0],g=f[1],b=function(){g(!h)};return r.createElement(l.b,{query:"827723073",render:function(e){var n=ie({});return r.createElement("div",{className:n.root},r.createElement(i.a,{title:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description}]}),r.createElement(A,{className:n.header,title:a||e.site.siteMetadata.title,location:o,toggleDrawer:b}),r.createElement("nav",{className:n.drawer},r.createElement(m.a,{mdUp:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"temporary",onClose:b,open:h},r.createElement(ce,{location:o,appState:c,handleDrawer:b,contents:s,dispatch:E}))),r.createElement(m.a,{smDown:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},r.createElement(ce,{location:o,appState:c,handleDrawer:b,contents:s,dispatch:E})))),r.createElement("div",{className:n.main},r.createElement("main",null,r.createElement("div",{className:n.content},t)),r.createElement("footer",null,r.createElement("div",{className:n.footer},r.createElement(u.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built with"," ",r.createElement(d.a,{color:"secondary",href:"https://www.gatsbyjs.org"},"Gatsby"))))),r.createElement(m.a,{smUp:!0},r.createElement(Y,{location:o,appState:c})))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-85387d74f27202007ec8.js.map