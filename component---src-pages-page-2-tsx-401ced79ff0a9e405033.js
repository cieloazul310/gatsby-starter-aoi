(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+xhR":function(e,a,t){"use strict";t.r(a);var o=t("q1tI"),r=t("ofer"),n=t("Z3vd"),i=t("8yLC"),c=t("DeEh"),l=t("dQQJ"),d=t("Hmgg");a.default=function(){var e=Object(d.b)();return o.createElement(i.a,{title:"Second Page"},o.createElement(r.a,{variant:"h2",gutterBottom:!0},"Hi from the second page"),o.createElement(r.a,{variant:"h3",gutterBottom:!0},"Typography h3 gutterBottom"),o.createElement(r.a,{variant:"h4",gutterBottom:!0},"Current Value: ",e.count),o.createElement(l.a,{counterAction:"INCREMENT",variant:"contained",color:"primary"},"Increment"),o.createElement(l.a,{counterAction:"DECREMENT",variant:"contained",color:"secondary"},"Decrement"),o.createElement(l.a,{counterAction:"RESET_COUNT",variant:"contained",color:"default"},"RESET"),o.createElement(r.a,{variant:"h5",gutterBottom:!0},"Typography h5 gutterBottom"),o.createElement(r.a,{variant:"h6",gutterBottom:!0},"Typography h6 gutterBottom"),o.createElement(r.a,{variant:"body1"},"Typography body1"),o.createElement(r.a,{variant:"body2"},"Typography body2"),o.createElement("p",null,"Welcome to page 2"),o.createElement(n.a,{variant:"contained",color:"primary"},"Primary"),o.createElement(n.a,{variant:"contained",color:"secondary"},"Secondary"),o.createElement(n.a,{variant:"outlined",color:"primary"},"Primary"),o.createElement(n.a,{variant:"outlined",color:"secondary"},"Secondary"),o.createElement(n.a,{variant:"contained",color:"default"},"Default"),o.createElement(n.a,{variant:"outlined",color:"default"},"Default"),o.createElement(c.a,{to:"/"},"Go back to the homepage"))}},Z3vd:function(e,a,t){"use strict";var o=t("Ff2n"),r=t("wx14"),n=t("q1tI"),i=t.n(n),c=(t("17x9"),t("iuhU")),l=t("H2TA"),d=t("ye/S"),p=t("VD++"),s=t("NqtD"),b=i.a.forwardRef((function(e,a){var t=e.children,n=e.classes,l=e.className,d=e.color,b=void 0===d?"default":d,m=e.component,u=void 0===m?"button":m,h=e.disabled,g=void 0!==h&&h,y=e.disableElevation,v=void 0!==y&&y,x=e.disableFocusRipple,f=void 0!==x&&x,S=e.endIcon,E=e.focusVisibleClassName,C=e.fullWidth,k=void 0!==C&&C,z=e.size,O=void 0===z?"medium":z,w=e.startIcon,j=e.type,R=void 0===j?"button":j,T=e.variant,I=void 0===T?"text":T,N=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),B=w&&i.a.createElement("span",{className:Object(c.a)(n.startIcon,n["iconSize".concat(Object(s.a)(O))])},w),$=S&&i.a.createElement("span",{className:Object(c.a)(n.endIcon,n["iconSize".concat(Object(s.a)(O))])},S);return i.a.createElement(p.a,Object(r.a)({className:Object(c.a)(n.root,n[I],l,"inherit"===b?n.colorInherit:"default"!==b&&n["".concat(I).concat(Object(s.a)(b))],"medium"!==O&&[n["".concat(I,"Size").concat(Object(s.a)(O))],n["size".concat(Object(s.a)(O))]],v&&n.disableElevation,g&&n.disabled,k&&n.fullWidth),component:u,disabled:g,focusRipple:!f,focusVisibleClassName:Object(c.a)(n.focusVisible,E),ref:a,type:R},N),i.a.createElement("span",{className:n.label},B,t,$))}));a.a=Object(l.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(d.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(d.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(d.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(d.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(d.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(b)},dQQJ:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("E5k/");var o=t("q1tI"),r=t("Z3vd"),n=t("Hmgg");function i(e){var a=Object(n.c)(),t=e.counterAction,i=o.useCallback((function(){a({type:t})}),[a,t]);return o.createElement(r.a,Object.assign({},e,{onClick:i}),e.children)}}}]);
//# sourceMappingURL=component---src-pages-page-2-tsx-401ced79ff0a9e405033.js.map