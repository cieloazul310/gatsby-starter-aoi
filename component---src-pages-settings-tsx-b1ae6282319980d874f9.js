(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(318),i=a(247),l=a(238),c=a(246),o=a(234);t.default=function(e){var t=e.location,a=n.useReducer(c.a,Object(o.a)(t)),s=a[0],u=a[1];return n.createElement(i.a,{title:"Settings",location:t,appState:s,dispatch:u},n.createElement(r.a,{variant:"h2",gutterBottom:!0},"Settings"),n.createElement(r.a,{variant:"h5",gutterBottom:!0},"This is Settings Page for App."),n.createElement(l.a,{mapState:s.mapState,dispatch:u}))}},222:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(3),l=a.n(i),c=a(64),o=a.n(c);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return c.navigate});a(230);var s=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,l=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,l&&i(l),!l&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||i,staticQueryData:e})})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},225:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return o});a(66);var n=a(0),r=a(222),i=a(227),l=a.n(i);function c(e){var t=e.className,a=e.children,i=e.to,c=e.appState;return n.createElement(r.a,{className:l()(t),to:i,state:{appState:c}},a)}function o(e,t,a){void 0===a&&(a={}),Object(r.c)(e,Object.assign({},a,{state:{appState:t}}))}},230:function(e,t,a){var n;e.exports=(n=a(245))&&n.default||n},233:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://cieloazul310.github.io/gatsby-starter-typescript-material-ui/"}}}}},234:function(e,t,a){"use strict";var n={val:100,mapState:{layer:"cjstd",borderVisibility:!0}},r=function(e){return e.state&&e.state.appState?e.state.appState:n},i=["cjstd","cjpale","slopemap","relief","seemlessphoto"];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i})},238:function(e,t,a){"use strict";var n=a(0),r=a(220),i=a(314),l=a(324),c=a(325),o=a(321),s=a(322),u=a(323),m=a(327),p=a(326),d=a(334),E=a(328),f=a(256),h=a.n(f),g=a(257),b=a.n(g),v=a(255),y=a.n(v),w=a(258),S=a.n(w),O=a(234),j=Object(r.a)(function(e){return Object(i.a)({nested:{paddingLeft:e.spacing(6)}})});t.a=function(e){var t=e.mapState,a=e.dispatch,r=j({}),i=n.useState(!1),f=i[0],g=i[1];return n.createElement(l.a,{subheader:n.createElement(c.a,null,"Map Handler")},n.createElement(o.a,{button:!0,onClick:function(){g(!f)}},n.createElement(s.a,null,n.createElement(y.a,null)),n.createElement(u.a,{primary:"Layers"}),f?n.createElement(h.a,null):n.createElement(b.a,null)),n.createElement(p.a,{in:f,timeout:"auto",unmountOnExit:!0},n.createElement(l.a,{disablePadding:!0},O.b.map(function(e){return n.createElement(o.a,{className:r.nested,key:e,button:!0,onClick:function(){return a({type:"SET_LAYER",layer:e})}},n.createElement(u.a,{primary:e}),n.createElement(m.a,null,n.createElement(d.a,{checked:e===t.layer,onChange:function(){return a({type:"SET_LAYER",layer:e})}})))}))),n.createElement(o.a,{onClick:function(){return a({type:"TOGGLE_BORDER"})}},n.createElement(s.a,null,n.createElement(S.a,null)),n.createElement(u.a,{primary:"Border"}),n.createElement(m.a,null,n.createElement(E.a,{checked:t.borderVisibility,onChange:function(){return a({type:"TOGGLE_BORDER"})}}))))}},244:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Starter Typescript App Shell",description:"A GatsbyJS starter using Material Design written with TypeScript.",author:{name:"cieloazul310"}}}}}},245:function(e,t,a){"use strict";a.r(t);a(66);var n=a(0),r=a.n(n),i=a(3),l=a.n(i),c=a(102),o=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},246:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(66);function n(e,t){switch(t.type){case"SET_LAYER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{layer:t.layer})});case"TOGGLE_BORDER":return Object.assign({},e,{mapState:Object.assign({},e.mapState,{borderVisibility:!e.mapState.borderVisibility})});default:throw new Error}}},247:function(e,t,a){"use strict";var n=a(244),r=a(0),i=a(222),l=a(100),c=a.n(l),o=a(220),s=a(314),u=a(318),m=a(333),p=a(331),d=a(330),E=a(227),f=a.n(E),h=a(315),g=a(317),b=a(313),v=a(335),y=a(253),w=a.n(y),S=a(98),O=a.n(S),j=a(311),x=a(249);var k=function(e){var t,a=e.icon,n=e.defaultVertical,i=O()(e,["icon","defaultVertical"]),l=a.icon[0],c=l>512?(512-l)/2:0;return r.createElement(j.a,i,r.createElement(x.a,{icon:a,style:{verticalAlign:n?void 0:"0.125em",transform:null!==c?"translateX("+c/(t=i.fontSize,"small"===t?20:"large"===t?36:24)+"px)":void 0}}))};var R=a(250),C=function(e){var t=e.url,a=e.title;return a?"https://twitter.com/intent/tweet?text="+encodeURI(a)+"&url="+encodeURIComponent(t):"https://twitter.com/intent/tweet?url="+encodeURIComponent(t)},D=function(e){var t=e.url;return"https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(t)};var N=function(e){var t=e.className,a=e.title,n=e.location,i=e.fontSize,l=e.color;return r.createElement("div",{className:f()(t)},r.createElement(v.a,{title:"Share on Twitter"},r.createElement(b.a,{color:l||"default",href:C({url:n.href,title:a}),target:"_blank",rel:"noopener noreferrer"},r.createElement(k,{icon:R.c,fontSize:i||"default"}))),r.createElement(v.a,{title:"Share on Facebook"},r.createElement(b.a,{color:l||"default",href:D({url:n.href}),target:"_blank",rel:"noopener noreferrer"},r.createElement(k,{icon:R.a,fontSize:i||"default"}))),r.createElement(v.a,{title:"GitHub"},r.createElement(b.a,{color:l||"default",href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},r.createElement(k,{icon:R.b,fontSize:i||"default"}))))},T=Object(o.a)(function(e){return Object(s.a)({title:{flex:1,paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}})});var L=function(e){var t=e.className,a=e.title,n=e.location,i=e.toggleDrawer,l=T({});return r.createElement(h.a,{className:f()(t)},r.createElement(g.a,null,r.createElement(m.a,{xsDown:!0,mdUp:!0,implementation:"css"},r.createElement(v.a,{title:"Menu"},r.createElement(b.a,{color:"inherit",onClick:i},r.createElement(w.a,null)))),r.createElement(u.a,{className:l.title,variant:"h6",component:"h1",color:"inherit"},a),r.createElement(m.a,{smDown:!0,implementation:"css"},r.createElement(N,{color:"inherit",location:n,title:a}))))},M=a(233),U=a(319),q=a(320),G=a(236),A=a.n(G),_=a(237),B=a.n(_),z=a(254),P=a.n(z),V=a(225);a(99);function I(e,t){var a=e.hostname,n=e.pathname,r=e.href;return"localhost"===a?n:r.replace(t.slice(0,-1),"")}var F=Object(o.a)(function(e){return Object(s.a)({root:{position:"fixed",bottom:0,left:0,width:"100%"}})});var Y=function(e){var t=e.location,a=e.appState;return r.createElement(i.b,{query:"2762599904",render:function(e){var n=e.site,i=F({}),l=n.siteMetadata.siteUrl;return r.createElement(U.a,{className:i.root,value:I(t,l),showLabels:!0,onChange:function(e,t){Object(V.b)(t,a)}},r.createElement(q.a,{label:"Top",value:"/",icon:r.createElement(A.a,null)}),r.createElement(q.a,{label:"page2",value:"/page-2/",icon:r.createElement(B.a,null)}),r.createElement(q.a,{label:"Settings",value:"/settings/",icon:r.createElement(P.a,null)}))},data:M})},H=(a(66),a(329)),J=a(259),Q=a.n(J),W=a(13),X=a.n(W),K=a(324),Z=a(325),$=a(321),ee=a(322),te=a(323),ae=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).renderLink=r.forwardRef(function(e,a){return r.createElement(V.a,Object.assign({to:t.props.to,appState:t.props.appState},e,{innerRef:a}))}),t}return X()(t,e),t.prototype.render=function(){var e=this.props,t=e.icon,a=e.primary,n=e.selected;return r.createElement($.a,{button:!0,component:this.renderLink,selected:n},t&&r.createElement(ee.a,null,t),r.createElement(te.a,{primary:a}))},t}(r.PureComponent);var ne=function(e){var t=e.location,a=e.appState;return r.createElement(i.b,{query:"2762599904",render:function(e){var n=e.site.siteMetadata.siteUrl;return r.createElement(K.a,{subheader:r.createElement(Z.a,null,"Contents")},r.createElement(ae,{to:"/",primary:"Top",appState:a,icon:r.createElement(A.a,null),selected:"/"===I(t,n)}),r.createElement(ae,{to:"/page-2/",primary:"Page 2",appState:a,icon:r.createElement(B.a,null),selected:"/page-2/"===I(t,n)}))},data:M})},re=a(238),ie=Object(o.a)(function(e){return Object(s.a)({toolbar:Object.assign({},e.mixins.toolbar,{display:"flex",alignItems:"center",paddingLeft:e.spacing(3)})})});var le=function(e){var t=e.location,a=e.appState,n=e.handleDrawer,i=e.contents,l=e.dispatch,c=ie({});return r.createElement("div",null,r.createElement("div",{className:c.toolbar},r.createElement(m.a,{mdUp:!0},r.createElement(v.a,{title:"Close"},r.createElement(b.a,{onClick:n},r.createElement(Q.a,null))))),r.createElement(H.a,null),i?i.map(function(e,t,a){return t===a.length-1?e:r.createElement(r.Fragment,null,e,r.createElement(H.a,null))}):null,r.createElement(ne,{location:t,appState:a}),r.createElement(H.a,null),r.createElement(re.a,{mapState:a.mapState,dispatch:l}))},ce=Object(o.a)(function(e){var t,a,n;return Object(s.a)({root:{display:"flex"},drawer:(t={},t[e.breakpoints.up("md")]={width:280},t),drawerPaper:{width:280},header:(a={width:"100%"},a[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},a),main:(n={width:"100%",paddingTop:e.mixins.toolbar.minHeight},n[e.breakpoints.down("xs")]={paddingBottom:56},n[e.breakpoints.up("md")]={width:"calc(100% - 280px)"},n["@media (min-width:600px)"]={paddingTop:64},n),content:{width:"100%",maxWidth:800,margin:"auto",padding:e.spacing(4)+"px "+e.spacing(2)+"px","@global":{a:{color:e.palette.secondary.main,textDecoration:"none","&:hover":{color:e.palette.secondary.light,textDecoration:"underline"}}}},footer:{textAlign:"center",padding:e.spacing(4)+"px "+e.spacing(2)+"px"}})});t.a=function(e){var t=e.children,a=e.title,l=e.appState,o=e.location,s=e.drawerContents,E=e.dispatch,f=r.useState(!1),h=f[0],g=f[1],b=function(){g(!h)};return r.createElement(i.b,{query:"827723073",render:function(e){var n=ce({});return r.createElement("div",{className:n.root},r.createElement(c.a,{title:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:"sample, something"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:a?a+" | "+e.site.siteMetadata.title:e.site.siteMetadata.title},{name:"twitter:description",content:e.site.siteMetadata.description}]}),r.createElement(L,{className:n.header,title:a||e.site.siteMetadata.title,location:o,toggleDrawer:b}),r.createElement("nav",{className:n.drawer},r.createElement(m.a,{mdUp:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"temporary",onClose:b,open:h},r.createElement(le,{location:o,appState:l,handleDrawer:b,contents:s,dispatch:E}))),r.createElement(m.a,{smDown:!0,implementation:"css"},r.createElement(p.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0},r.createElement(le,{location:o,appState:l,handleDrawer:b,contents:s,dispatch:E})))),r.createElement("div",{className:n.main},r.createElement("main",null,r.createElement("div",{className:n.content},t)),r.createElement("footer",null,r.createElement("div",{className:n.footer},r.createElement(u.a,{variant:"body2"},"© ",(new Date).getFullYear(),", Built with"," ",r.createElement(d.a,{color:"secondary",href:"https://www.gatsbyjs.org"},"Gatsby"))))),r.createElement(m.a,{smUp:!0,implementation:"css"},r.createElement(Y,{location:o,appState:l})))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-settings-tsx-b1ae6282319980d874f9.js.map