(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],[,,,,,function(e,t,a){"use strict";var n=a(49);a.o(n,"HORIZONTAL_SCROLLING_SPEED_FACTOR")&&a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return n.HORIZONTAL_SCROLLING_SPEED_FACTOR})),a.o(n,"countChildrenHeight")&&a.d(t,"countChildrenHeight",(function(){return n.countChildrenHeight})),a.o(n,"preventDefault")&&a.d(t,"preventDefault",(function(){return n.preventDefault})),a.o(n,"removeLineBreaks")&&a.d(t,"removeLineBreaks",(function(){return n.removeLineBreaks})),a.o(n,"useCallbackOnExternalAction")&&a.d(t,"useCallbackOnExternalAction",(function(){return n.useCallbackOnExternalAction})),a.o(n,"useStateWithCallback")&&a.d(t,"useStateWithCallback",(function(){return n.useStateWithCallback})),a.o(n,"useSwitch")&&a.d(t,"useSwitch",(function(){return n.useSwitch})),a.o(n,"useSwitchWithCallback")&&a.d(t,"useSwitchWithCallback",(function(){return n.useSwitchWithCallback})),a.o(n,"useToggle")&&a.d(t,"useToggle",(function(){return n.useToggle}));var r=a(50);a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return r.a}));var c=a(35);a.d(t,"countChildrenHeight",(function(){return c.b})),a.d(t,"preventDefault",(function(){return c.c})),a.d(t,"removeLineBreaks",(function(){return c.d}));var l=a(51);a.d(t,"useCallbackOnExternalAction",(function(){return l.a})),a.d(t,"useStateWithCallback",(function(){return l.b})),a.d(t,"useSwitch",(function(){return l.c})),a.d(t,"useSwitchWithCallback",(function(){return l.d})),a.d(t,"useToggle",(function(){return l.e}))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return l}));var n=function(e){return e.preventDefault()},r=function(e,t){var a=e,n=Array.isArray(t)?function(e){return t.some((function(t){return e===t}))}:function(e){return e===t};do{if(n(a))return a;a=a.parentElement||a.parentNode}while(null!==a&&1===a.nodeType);return null},c=function(e,t){var a=e.children,n=0;if("all"===t||a.length<t)n=e.scrollHeight;else for(var r=0;r<a.length&&r<t;r++){var c=a[r];c instanceof HTMLElement&&(n+=c.offsetHeight)}return n+"px"},l=function(e){return e.replace(/\r\n|\r|\n/gm," ")}},,,,,,,,,,,function(e){e.exports=JSON.parse('{"light":{"bgAuthor":"SplitShire","bgAuthorLink":"https://www.pexels.com/@splitshire","bgSource":"Pexels.com","bgSourceLink":"https://www.pexels.com/"},"dark":{"bgAuthor":"eberhard grossgasteiger","bgAuthorLink":"https://www.pexels.com/@eberhardgross","bgSource":"Pexels.com","bgSourceLink":"https://www.pexels.com/"}}')},,,function(e,t){},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=.75},function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return u}));var n=a(7),r=a(0),c=a(35),l=function(e,t){var a=Object(r.useState)(e),c=Object(n.a)(a,2),l=c[0],i=c[1];return[l,function(e){t&&t(e),i(e)}]},i=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];return[c,function(){return l(!0)},function(){return l(!1)}]},o=function(e,t){var a=l(e,t),r=Object(n.a)(a,2),c=r[0],i=r[1];return[c,function(){return i(!0)},function(){return i(!1)}]},s=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];return[c,function(){return l(!c)}]},u=function(e,t,a){Object(r.useLayoutEffect)((function(){if(a&&e){var n=Array.isArray(e)?e.reduce((function(e,t){return t&&e.push(t),e}),[]):e,r=function(e){var a=e.target;Object(c.a)(a,n)||t()};return document.addEventListener("click",r),document.addEventListener("focusin",r),function(){document.removeEventListener("click",r),document.removeEventListener("focusin",r)}}}),[e,t,a])}},,,,function(e){e.exports=JSON.parse('{"create":"Create","edit":"Edit","submit":"Submit","delete":"Delete","cancel":"Cancel","app/home":"Home","app/boards":"Boards","app/get-started":"Get started","app/go-back":"Go back","app/page404":"Such page doesn\'t exist","app/board404":"Such board doesn\'t exist","app/open-menu":"Menu","app/close-menu":"Close","app/options":"Options","app/change-language":"Language","app/change-theme":"Theme","app/photo-by":"Photo by","app/downloaded-from":"from","boards/title":"Title","boards/new-board":"New Board","lists/title":"Title","lists/new-list":"New List","cards/content":"Content","cards/new-card":"New Card"}')},function(e){e.exports=JSON.parse('{"create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","submit":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","delete":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","app/home":"\u0414\u043e\u043c\u043e\u0439","app/boards":"\u0414\u043e\u0441\u043a\u0438","app/get-started":"\u041d\u0430\u0447\u0430\u0442\u044c","app/go-back":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f","app/page404":"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/board404":"\u0422\u0430\u043a\u043e\u0439 \u0434\u043e\u0441\u043a\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/open-menu":"\u041c\u0435\u043d\u044e","app/close-menu":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","app/options":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","app/change-language":"\u042f\u0437\u044b\u043a","app/change-theme":"\u0422\u0435\u043c\u0430","app/photo-by":"\u0424\u043e\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e","app/downloaded-from":"\u0441","boards/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","boards/new-board":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443","lists/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","lists/new-list":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a","cards/content":"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","cards/new-card":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}')},,,,,,,,,,function(e,t,a){e.exports=a(108)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(27),i=a.n(l),o=a(17),s=a(3),u=a(128),d=a(122),m=a(8),b=(a(75),a(76),{en:{name:"english",translation:a(55)},ru:{name:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",translation:a(56)}}),f=(a(77),a(7)),E=a(5),p=(a(78),a(79),a(15)),g=(a(80),Object(r.forwardRef)((function(e,t){var a=e.className,n=void 0===a?"":a,r=e.styleType,l=void 0===r?"":r,i=Object(p.a)(e,["className","styleType"]),o="button";return l&&(o+="--"+l),n&&(o+=" "+n),c.a.createElement("button",Object.assign({className:o},i,{ref:t}))}))),O=a(2),v=a(129),_=(a(81),Object(r.forwardRef)((function(e,t){var a=e.labelValue,n=void 0!==a&&a,l=e.isInvalid,i=void 0!==l&&l,o=e.containerClassName,s=void 0===o?"":o,u=e.className,d=void 0===u?"":u,m=e.value,b=Object(p.a)(e,["labelValue","isInvalid","containerClassName","className","value"]),E=Object(r.useState)(!!m),g=Object(f.a)(E,2),_=g[0],j=g[1];Object(r.useEffect)((function(){j(!!m)}),[m]);var h=Object(O.a)(Object(O.a)({className:"textarea__textarea".concat(i?"--invalid":""," ").concat(d),spellCheck:!1,value:m},b),{},{ref:t});return c.a.createElement("div",{className:"textarea__container ".concat(s)},n?c.a.createElement("label",{className:"textarea__label"},c.a.createElement("span",{className:"textarea__label-value".concat(_?"--hide":"")},n),c.a.createElement(v.a,Object.assign({},h,{ref:t}))):c.a.createElement(v.a,Object.assign({},h,{ref:t})))}))),j=a(123),h=a(124),C=a(125),N=a(126),I=(a(82),function(e){var t=e.className,a=void 0===t?"":t,n=e.fieldName,l=e.value,i=void 0===l?"":l,o=e.displayOnViewMode,s=e.titles,u=e.initialEditMode,m=void 0!==u&&u,b=e.onEditToggle,p=e.iconToggle,O=void 0!==p&&p,v=e.exitOnSubmit,I=void 0===v||v,T=e.onSubmit,y=e.onDelete,A=e.textareaClassName,L=e.textareaContainerClassName,S=Object(d.a)(),D=Object(r.useRef)(null),R=Object(r.useRef)(null),k=Object(E.useSwitchWithCallback)(m,b),x=Object(f.a)(k,3),M=x[0],w=x[1],G=x[2],H=Object(r.useState)(i),B=Object(f.a)(H,2),P=B[0],V=B[1],W=!P.trim(),F=function(){if(!W){var e=P.trim();i!==e&&T(e),I?G():V("")}};Object(r.useEffect)((function(){var e;M&&(null===(e=D.current)||void 0===e||e.focus())}),[M]),Object(r.useEffect)((function(){V(i)}),[i,M]),Object(E.useCallbackOnExternalAction)(R.current,G,M);var J=(null===s||void 0===s?void 0:s.edit)||S.formatMessage({id:"edit"}),Z=(null===s||void 0===s?void 0:s.submit)||S.formatMessage({id:"submit"}),z=(null===s||void 0===s?void 0:s.cancel)||S.formatMessage({id:"cancel"}),U=(null===s||void 0===s?void 0:s.delete)||S.formatMessage({id:"delete"});return c.a.createElement("div",{className:"field-editor".concat(M?"--edit":""," ").concat(a),ref:R},c.a.createElement("div",{className:"field-editor__textarea-container"},c.a.createElement(_,{containerClassName:L,className:A,labelValue:n,title:M?n:void 0,isInvalid:W,value:o&&!M?o:P,rowsMax:3,disabled:!M,required:!0,onChange:function(e){V(Object(E.removeLineBreaks)(e.target.value))},onKeyDown:function(e){"Escape"===e.key&&G(),"Enter"===e.key&&(e.preventDefault(),F())},ref:D}),c.a.createElement("div",{className:"default-prevention-boundary",onClick:E.preventDefault},!M&&(O?c.a.createElement(g,{styleType:"plain",className:"field-editor__button-edit",title:J,onClick:w},c.a.createElement(j.a,{fontSize:"inherit"})):c.a.createElement("button",{className:"field-editor__click-overlay",title:J,onClick:w})))),c.a.createElement("div",{className:"field-editor__buttons-container"},M&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(g,{styleType:"plain",className:"field-editor__button-submit",title:Z,onClick:F,disabled:W},c.a.createElement(h.a,{fontSize:"inherit"})),c.a.createElement(g,{styleType:"plain",className:"field-editor__button",title:z,onClick:G},c.a.createElement(C.a,{fontSize:"inherit"}))),y&&c.a.createElement(g,{styleType:"plain",className:"field-editor__button",title:U,onClick:y},c.a.createElement(N.a,{fontSize:"inherit"})))))}),T=(a(83),function(e){var t=e.containerClassName,a=e.sliderClassName,n=Object(p.a)(e,["containerClassName","sliderClassName"]);return c.a.createElement("div",{className:"toggle".concat(t?" "+t:"")},c.a.createElement("input",Object.assign({},n,{className:"toggle__chackbox",type:"checkbox"})),c.a.createElement("div",{className:"toggle__slider".concat(a?" "+a:"")}))}),y=a(127),A=(a(84),function(e){var t,a=e.options,n=e.value,l=e.onChange,i=e.display,o=e.maxDisplayOptions,s=void 0===o?5:o,u=e.containerClassName,d=e.selectClassName,m=e.optionsClassName,b=e.optionClassName,g=e.labelRef,O=e.onClick,v=Object(p.a)(e,["options","value","onChange","display","maxDisplayOptions","containerClassName","selectClassName","optionsClassName","optionClassName","labelRef","onClick"]),_=Object(r.useRef)(null),j=Object(r.useRef)(null),h=Object(E.useSwitch)(!1),C=Object(f.a)(h,3),N=C[0],I=C[1],T=C[2];Object(r.useLayoutEffect)((function(){j.current&&(j.current.style.height=N?Object(E.countChildrenHeight)(j.current,s):"0px")})),Object(E.useCallbackOnExternalAction)([_.current,null===g||void 0===g?void 0:g.current],T,N);var A=i||(null===(t=a.find((function(e){return e.value===n})))||void 0===t?void 0:t.content)||n||"",L="select";N&&(L+="--expand"),u&&(L+=" "+u);var S=function(e){n!==e&&(l(e),T())},D=N?0:-1;return c.a.createElement("div",{className:L,onKeyDown:function(e){var t=e.key;N||"Enter"!==t&&" "!==t?N&&"Escape"===t&&T():I()},ref:_,onClick:function(e){e.preventDefault(),N?T():I(),O&&O(e)}},c.a.createElement("select",Object.assign({className:"select__native-select"},v)),c.a.createElement("div",{className:"select__select".concat(d?" "+d:""),tabIndex:0},c.a.createElement("div",{className:"select__arrow-container"},c.a.createElement(y.a,{className:"select__arrow"})),c.a.createElement("span",{className:"select__display"},A),c.a.createElement("div",{className:"select__options-container"},c.a.createElement("ul",{className:"select__options".concat(m?" "+m:""),ref:j},a.map((function(e){var t=e.value,a=e.content;return c.a.createElement("li",{className:"select__option".concat(b?" "+b:""),key:t,onClick:function(){return S(t)},onKeyDown:function(e){return function(e,t){"Enter"===e.key&&S(t)}(e,t)},tabIndex:D},a||t)}))))))});!function(e){e.SET_LANGUAGE="SET_LANGUAGE"}(n||(n={}));n.SET_LANGUAGE;var L,S=n.SET_LANGUAGE,D=function(e){var t=e.id,a=e.labelRef,n=Object(s.c)(),r=Object(s.d)((function(e){return e.locale.languageCode})),l=Object(E.useStateWithCallback)(r,(function(e){return n({type:S,payload:{languageCode:t=e,languageName:b[t].name}});var t})),i=Object(f.a)(l,2),o=i[0],u=i[1],d=Object.entries(b).map((function(e){var t=Object(f.a)(e,2);return{value:t[0],content:t[1].name}}));return c.a.createElement(A,{id:t,containerClassName:"site-menu__language-select",labelRef:a,value:o,onChange:function(e){u(e)},options:d})};!function(e){e.TOGGLE_THEME="TOGGLE_THEME"}(L||(L={}));L.TOGGLE_THEME;var R,k=L.TOGGLE_THEME,x=function(e){var t=e.id,a=Object(s.c)(),n=Object(s.d)((function(e){return e.theme.theme}));return c.a.createElement(T,{containerClassName:"site-menu__theme-toggle",id:t,checked:"dark"===n,onChange:function(){return a({type:k})}})},M=function(){var e=Object(r.useRef)(null),t=Object(d.a)();return c.a.createElement("fieldset",{className:"site-menu__options-fieldset"},c.a.createElement("legend",{className:"site-menu__options-legend"},t.formatMessage({id:"app/options",defaultMessage:"Options"})),c.a.createElement("div",{className:"site-menu__option"},c.a.createElement("label",{className:"site-menu__option-label",htmlFor:"language-select",ref:e},t.formatMessage({id:"app/change-language",defaultMessage:"Language"}),":"),c.a.createElement("div",{className:"site-menu__options-field"},c.a.createElement(D,{id:"language-select",labelRef:e}))),c.a.createElement("div",{className:"site-menu__option"},c.a.createElement("label",{className:"site-menu__option-label",htmlFor:"theme-toggle"},t.formatMessage({id:"app/change-theme",defaultMessage:"Theme"}),":"),c.a.createElement("div",{className:"site-menu__options-field"},c.a.createElement(x,{id:"theme-toggle"}))))},w=function(){var e=Object(d.a)(),t=Object(r.useRef)(null),a=Object(E.useToggle)(!1),n=Object(f.a)(a,2),l=n[0],i=n[1];return Object(E.useCallbackOnExternalAction)(t.current,i,l),c.a.createElement("div",{className:"site-menu".concat(l?"--expand":""),ref:t},c.a.createElement("button",{onClick:i,className:"site-menu__toggle"},l?e.formatMessage({id:"app/close-menu",defaultMessage:"Close"}):e.formatMessage({id:"app/open-menu",defaultMessage:"Menu"})),c.a.createElement("div",{className:"site-menu__dropdown"},c.a.createElement("div",{className:"site-menu__dropdown-inner"},c.a.createElement(M,null))))},G=function(){var e=Object(d.a)();return c.a.createElement("header",{className:"site-header"},c.a.createElement("div",{className:"site-header__placeholder"}),c.a.createElement("nav",{className:"site-header__navigation"},c.a.createElement("ul",{className:"site-header__navigation-list"},c.a.createElement("li",null,c.a.createElement(o.c,{className:"site-header__navigation-link",to:"/",exact:!0},e.formatMessage({id:"app/home",defaultMessage:"Home"}))),c.a.createElement("li",null,c.a.createElement(o.c,{className:"site-header__navigation-link",to:"/boards"},e.formatMessage({id:"app/boards",defaultMessage:"Boards"}))))),c.a.createElement(w,null))},H=(a(86),function(){var e=Object(d.a)(),t=Object(s.d)((function(e){return e.theme.data}));return c.a.createElement("span",{className:"photo-signature"},e.formatMessage({id:"app/photo-by",defaultMessage:"Photo by"})," ",c.a.createElement("a",{className:"photo-signature__link",href:t.bgAuthorLink,target:"_blank",rel:"noopener noreferrer"},t.bgAuthor)," ",e.formatMessage({id:"app/downloaded-from",defaultMessage:"from"})," ",c.a.createElement("a",{className:"photo-signature__link",href:t.bgSourceLink,target:"_blank",rel:"noopener noreferrer"},t.bgSource))}),B=(a(87),function(e){var t=e.message,a=Object(m.f)(),n=Object(d.a)();return c.a.createElement("main",{className:"not-found-page"},c.a.createElement("div",{className:"not-found-page__message"},c.a.createElement("span",{className:"not-found-page__error-code"},"404"),c.a.createElement("p",null,t),c.a.createElement(g,{onClick:a.goBack},n.formatMessage({id:"app/go-back",defaultMessage:"Go back"}))))}),P=(a(88),function(){var e=Object(d.a)();return c.a.createElement("main",{className:"home-page"},c.a.createElement("h1",{className:"home-page__heading"},"Trello clone"),c.a.createElement(o.b,{className:"home_page__link",to:"/boards",tabIndex:-1},c.a.createElement(g,{styleType:"accent"},e.formatMessage({id:"app/get-started",defaultMessage:"Get started"}))))}),V=(a(89),a(22)),W=a(130);!function(e){e.CREATE_LIST="CREATE_LIST",e.DELETE_LIST="DELETE_LIST",e.CHANGE_LIST="CHANGE_LIST",e.MOVE_CARD="MOVE_CARD"}(R||(R={}));R.CREATE_LIST,R.DELETE_LIST,R.CHANGE_LIST,R.MOVE_CARD;var F,J=R.CREATE_LIST,Z=R.DELETE_LIST,z=R.CHANGE_LIST,U=R.MOVE_CARD;!function(e){e.CREATE_BOARD="CREATE_BOARD",e.DELETE_BOARD="DELETE_BOARD",e.CHANGE_BOARD="CHANGE_BOARD",e.MOVE_LIST="MOVE_LIST"}(F||(F={}));F.CREATE_BOARD,F.CHANGE_BOARD,F.DELETE_BOARD,F.MOVE_LIST;var K,Y=F.CREATE_BOARD,q=F.DELETE_BOARD,Q=F.CHANGE_BOARD,X=F.MOVE_LIST;!function(e){e.CREATE_CARD="CREATE_CARD",e.DELETE_CARD="DELETE_CARD",e.CHANGE_CARD="CHANGE_CARD"}(K||(K={}));K.CREATE_CARD,K.DELETE_CARD,K.CHANGE_CARD;var $,ee=K.CREATE_CARD,te=K.DELETE_CARD,ae=K.CHANGE_CARD,ne=(a(90),a(91),Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onDelete,r=e.onEdit,i=Object(d.a)(),o=Object(s.d)((function(e){return e.cards[a].content})),u=function(){return n(a)},m=function(e){return r(a,e)},b=Object(E.useToggle)(!0),p=Object(f.a)(b,2),g=p[0],O=p[1];return c.a.createElement(V.b,{draggableId:a,index:t,disableInteractiveElementBlocking:g},(function(e){return t=e.draggableProps.style,a=c.a.createElement("div",Object.assign({className:"cards__card"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement(I,{fieldName:i.formatMessage({id:"cards/content",defaultMessage:"Content"}),value:o,onSubmit:m,onDelete:u,onEditToggle:O,textareaClassName:"cards__card-textarea"})),"fixed"!==t.position?a:Object(l.createPortal)(a,document.getElementById("draggable"));var t,a}))}))),re=(a(92),Object(r.memo)((function(e){var t=e.onCreate,a=e.toggleListDrag,n=Object(d.a)();return c.a.createElement("div",{className:"cards__new-card"},c.a.createElement(I,{fieldName:n.formatMessage({id:"cards/content",defaultMessage:"Content"}),displayOnViewMode:n.formatMessage({id:"cards/new-card",defaultMessage:"New card"}),titles:{edit:n.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t,onEditToggle:a,textareaClassName:"cards__card-textarea"}))}))),ce=Object(r.memo)((function(e){var t=e.listId,a=e.toggleListDrag,n=Object(s.c)(),l=Object(s.d)((function(e){var a;return(null===(a=e.lists[t])||void 0===a?void 0:a.cards)||[]})),i=Object(r.useCallback)((function(e){return n(function(e,t){return{type:ee,payload:{listId:e,cardId:Object(W.a)(),content:t}}}(t,e))}),[n,t]),o=Object(r.useCallback)((function(e){return n(function(e,t){return{type:te,payload:{listId:e,cardId:t}}}(t,e))}),[n,t]),u=Object(r.useCallback)((function(e,t){return n(function(e,t){return{type:ae,payload:{cardId:e,content:t}}}(e,t))}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(V.c,{droppableId:t,type:"card"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"cards"}),l.map((function(e,t){return c.a.createElement("li",{key:e},c.a.createElement(ne,{index:t,id:e,onDelete:o,onEdit:u}))})),e.placeholder)})),c.a.createElement(re,{onCreate:i,toggleListDrag:a}))})),le=(a(93),Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onEdit,r=e.onDelete,l=Object(d.a)(),i=Object(s.d)((function(e){return e.lists[a].title})),o=function(){return r(a)},u=function(e){return n(a,e)},m=Object(E.useToggle)(!0),b=Object(f.a)(m,2),p=b[0],g=b[1];return c.a.createElement(V.b,{draggableId:a,index:t,disableInteractiveElementBlocking:p},(function(e){return c.a.createElement("div",Object.assign({className:"lists__list"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement("header",{className:"lists__list-header"},c.a.createElement(I,{fieldName:l.formatMessage({id:"lists/title",defaultMessage:"Title"}),value:i,onDelete:o,onSubmit:u,onEditToggle:g,textareaClassName:"lists__list-textarea"})),c.a.createElement(ce,{listId:a,toggleListDrag:g}))}))}))),ie=(a(94),Object(r.memo)((function(e){var t=e.onCreate,a=Object(d.a)();return c.a.createElement("div",{className:"lists__new-list"},c.a.createElement(I,{fieldName:a.formatMessage({id:"lists/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"lists/new-list",defaultMessage:"Create card"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t,textareaClassName:"lists__list-textarea"}))}))),oe=(a(95),Object(r.memo)((function(e){var t=e.boardId,a=Object(s.d)((function(e){var a;return(null===(a=e.boards.byId[t])||void 0===a?void 0:a.lists)||[]})),n=Object(s.c)(),l=Object(r.useCallback)((function(e){return n(function(e,t){return{type:J,payload:{boardId:e,listId:Object(W.a)(),title:t}}}(t,e))}),[n,t]),i=Object(r.useCallback)((function(e){return n(function(e,t){return function(a,n){var r=n().lists[t].cards;return a({type:Z,payload:{boardId:e,listId:t,cardsIds:r}})}}(t,e))}),[t,n]),o=Object(r.useCallback)((function(e,t){return n(function(e,t){return{type:z,payload:{listId:e,title:t}}}(e,t))}),[n]),u=Object(r.useCallback)((function(e,a){return n(function(e,t,a){return{type:X,payload:{boardId:e,fromIndex:t,toIndex:a}}}(t,e,a))}),[n,t]),d=Object(r.useCallback)((function(e,t,a,r){return n(function(e,t,a,n){return{type:U,payload:{fromListId:e,toListId:t,fromIndex:a,toIndex:n}}}(e,t,a,r))}),[n]);return c.a.createElement(V.a,{onDragEnd:function(e){var t=e.destination,a=e.source,n=e.type;if(t)if("card"===n){var r=a.droppableId,c=a.index,l=t.droppableId,i=t.index;if(r===l&&c===i)return;d(r,l,c,i)}else if("list"===n){if(a.index===t.index)return;u(a.index,t.index)}}},c.a.createElement("div",{className:"lists"},c.a.createElement(V.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"lists__ul"}),a.map((function(e,t){return c.a.createElement("li",{key:e,className:"lists__ul-item"},c.a.createElement(le,{index:t,id:e,onEdit:o,onDelete:i}))})),e.placeholder)})),c.a.createElement(ie,{onCreate:l})))}))),se=function(e){var t=e.match,a=Object(d.a)(),n=t.params.id;if(Object(s.d)((function(e){return!!e.boards.byId[n]}))){return c.a.createElement("main",{className:"board-page",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;window.innerHeight<=600||(null===(t=a)||void 0===t?void 0:t.closest(".lists__list"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement(oe,{boardId:n}))}return c.a.createElement(B,{message:a.formatMessage({id:"app/board404",defaultMessage:"Such board doesn't exist"})})},ue=(a(96),Object(r.memo)((function(e){var t=e.id,a=e.onEdit,n=e.onDelete,r=Object(d.a)(),l=Object(s.d)((function(e){return e.boards.byId[t].title})),i=Object(E.useToggle)(!1),u=Object(f.a)(i,2),m=u[0],b=u[1];return c.a.createElement(o.c,{to:"/boards/".concat(t),className:"boards-navigation__link",onClick:m?E.preventDefault:void 0},c.a.createElement(I,{fieldName:r.formatMessage({id:"boards/title",defaultMessage:"Title"}),value:l,iconToggle:!0,onEditToggle:b,onSubmit:function(e){return a(t,e)},onDelete:function(){return n(t)},textareaClassName:"boards-navigation__link-textarea"}))}))),de=(a(97),Object(r.memo)((function(e){var t=e.onCreate,a=Object(d.a)();return c.a.createElement("div",{className:"boards-navigation__new-board"},c.a.createElement(I,{fieldName:a.formatMessage({id:"boards/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"boards/new-board",defaultMessage:"Create board"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t,textareaClassName:"boards-navigation__link-textarea"}))}))),me=(a(98),function(){var e=Object(m.f)(),t=Object(s.c)(),a=Object(s.d)((function(e){return e.boards.allIds})),n=Object(r.useCallback)((function(e){return t(function(e){return{type:Y,payload:{boardId:Object(W.a)(),title:e}}}(e))}),[t]),l=Object(r.useCallback)((function(a){e.location.pathname.includes(a)&&e.push("/boards/"),t(function(e){return function(t,a){var n=a(),r=n.boards,c=n.lists,l=r.byId[e].lists,i=l.map((function(e){return c[e].cards})).flat();return t({type:q,payload:{boardId:e,listsIds:l,cardsIds:i}})}}(a))}),[t,e]),i=Object(r.useCallback)((function(e,a){t(function(e,t){return{type:Q,payload:{boardId:e,title:t}}}(e,a))}),[t]);return c.a.createElement("nav",{className:"boards-navigation",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;(null===(t=a)||void 0===t?void 0:t.closest(".field-editor--edit"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement("ul",{className:"boards-navigation__list"},a.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement(ue,{id:e,onDelete:l,onEdit:i}))}))),c.a.createElement(de,{onCreate:n}))}),be=function(){var e=Object(d.a)();return c.a.createElement(B,{message:e.formatMessage({id:"app/page404",defaultMessage:"Such page doesn't exist"})})},fe=function(){var e=Object(s.d)((function(e){return e.locale.languageCode})),t=Object(s.d)((function(e){return e.theme.theme}));return c.a.createElement(u.a,{locale:e,messages:b[e].translation},c.a.createElement("div",{id:"theme",className:"_theme--".concat(t)},c.a.createElement(G,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/",exact:!0,component:P}),c.a.createElement(m.a,{path:"/boards",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(me,null),c.a.createElement(m.a,{path:"/boards/:id",component:se}))}}),c.a.createElement(m.a,{path:"*",component:be})),c.a.createElement(H,null)))},Ee=a(16),pe=a(60),ge=a(61),Oe=a(62),ve=function(){try{var e=JSON.stringify(ct.getState());localStorage.setItem("state",e)}catch(t){return}},_e=a.n(Oe)()((function(){ct.subscribe(ve)}),1e3),je=n.SET_LANGUAGE,he=null===($=navigator.language)||void 0===$?void 0:$.slice(0,2),Ce="en";he in b&&(Ce=he);var Ne={languageCode:Ce,languageName:b[Ce].name},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case je:return Object(O.a)(Object(O.a)({},e),n);default:return e}},Te=a(46),ye=L.TOGGLE_THEME,Ae={theme:"light",data:Te.light},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case ye:var n="light"===e.theme?"dark":"light";return Object(O.a)(Object(O.a)({},e),{},{theme:n,data:Te[n]});default:return e}},Se=a(30),De=a(24),Re=a(12),ke=F.CREATE_BOARD,xe=F.DELETE_BOARD,Me=F.CHANGE_BOARD,we=F.MOVE_LIST,Ge=R.CREATE_LIST,He=R.DELETE_LIST,Be={byId:{},allIds:[]},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case ke:var r=n,c=r.boardId,l=r.title,i=Object(O.a)(Object(O.a)({},e.byId),{},Object(Re.a)({},c,{id:c,title:l,lists:[]}));return Object(O.a)(Object(O.a)({},e),{},{byId:i,allIds:[].concat(Object(De.a)(e.allIds),[c])});case xe:var o=n,s=o.boardId,u=e.byId,d=(u[s],Object(p.a)(u,[s].map(Se.a))),m=e.allIds.filter((function(e){return e!==s}));return Object(O.a)(Object(O.a)({},e),{},{byId:d,allIds:m});case Me:var b=n,f=b.boardId,E=b.title,g=Object(O.a)(Object(O.a)({},e.byId),{},Object(Re.a)({},f,Object(O.a)(Object(O.a)({},e.byId[f]),{},{title:E})));return Object(O.a)(Object(O.a)({},e),{},{byId:g});case we:var v=n,_=v.boardId,j=v.fromIndex,h=v.toIndex,C=Object(O.a)({},e.byId),N=Object(O.a)({},C[_]),I=Object(De.a)(N.lists),T=I.splice(j,1);return I.splice.apply(I,[h,0].concat(Object(De.a)(T))),N.lists=I,C[_]=N,Object(O.a)(Object(O.a)({},e),{},{byId:C});case Ge:var y=n,A=y.boardId,L=y.listId,S=Object(O.a)({},e.byId[A]);S.lists=[].concat(Object(De.a)(S.lists),[L]);var D=Object(O.a)(Object(O.a)({},e.byId),{},Object(Re.a)({},A,S));return Object(O.a)(Object(O.a)({},e),{},{byId:D});case He:var R=n,k=R.boardId,x=R.listId,M=Object(O.a)({},e.byId[k]);M.lists=M.lists.filter((function(e){return e!==x}));var w=Object(O.a)(Object(O.a)({},e.byId),{},Object(Re.a)({},k,M));return Object(O.a)(Object(O.a)({},e),{},{byId:w});default:return e}},Ve=R.CREATE_LIST,We=R.DELETE_LIST,Fe=R.CHANGE_LIST,Je=R.MOVE_CARD,Ze=K.CREATE_CARD,ze=K.DELETE_CARD,Ue=F.DELETE_BOARD,Ke={},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Ve:var r=n,c=r.listId,l=r.title;return Object(O.a)(Object(O.a)({},e),{},Object(Re.a)({},c,{id:c,title:l,cards:[]}));case We:var i=n,o=i.listId,s=(e[o],Object(p.a)(e,[o].map(Se.a)));return Object(O.a)({},s);case Fe:var u=n,d=u.listId,m=u.title;return Object(O.a)(Object(O.a)({},e),{},Object(Re.a)({},d,Object(O.a)(Object(O.a)({},e[d]),{},{title:m})));case Ze:var b=n,f=b.listId,E=b.cardId,g=Object(O.a)({},e[f]);return g.cards=[].concat(Object(De.a)(g.cards),[E]),Object(O.a)(Object(O.a)({},e),{},Object(Re.a)({},f,g));case ze:var v=n,_=v.listId,j=v.cardId,h=Object(O.a)({},e[_]);return h.cards=h.cards.filter((function(e){return e!==j})),Object(O.a)(Object(O.a)({},e),{},Object(Re.a)({},_,h));case Je:var C,N=n,I=N.fromListId,T=N.toListId,y=N.fromIndex,A=N.toIndex,L=Object(O.a)({},e),S=Object(O.a)({},L[I]);S.cards=Object(De.a)(S.cards);var D=S.cards.splice(y,1);L[I]=S;var R=Object(O.a)({},L[T]);return R.cards=Object(De.a)(R.cards),(C=R.cards).splice.apply(C,[A,0].concat(Object(De.a)(D))),L[T]=R,L;case Ue:var k=n,x=k.listsIds,M={};for(var w in e)e.hasOwnProperty(w)&&!x.includes(w)&&(M[w]=e[w]);return M;default:return e}},qe=K.CREATE_CARD,Qe=K.DELETE_CARD,Xe=K.CHANGE_CARD,$e=R.DELETE_LIST,et=F.DELETE_BOARD,tt={},at=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case qe:var r=n,c=r.cardId,l=r.content;return Object(O.a)(Object(O.a)({},e),{},Object(Re.a)({},c,{id:c,content:l}));case Qe:var i=n,o=i.cardId,s=(e[o],Object(p.a)(e,[o].map(Se.a)));return Object(O.a)({},s);case Xe:var u=n,d=u.cardId,m=u.content;return Object(O.a)(Object(O.a)({},e),{},Object(Re.a)({},d,Object(O.a)(Object(O.a)({},e[d]),{},{content:m})));case $e:var b=n,f=b.cardsIds,E={};for(var g in e)e.hasOwnProperty(g)&&!f.includes(g)&&(E[g]=e[g]);return E;case et:var v=n,_=v.cardsIds,j={};for(var h in e)e.hasOwnProperty(h)&&!_.includes(h)&&(j[h]=e[h]);return j;default:return e}},nt=Object(Ee.combineReducers)({locale:Ie,theme:Le,boards:Pe,lists:Ye,cards:at}),rt=[ge.a],ct=Object(Ee.createStore)(nt,function(){try{var e=localStorage.getItem("state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),Object(pe.composeWithDevTools)(Ee.applyMiddleware.apply(void 0,rt)));_e(),i.a.render(c.a.createElement(r.StrictMode,null,c.a.createElement(o.a,{basename:"/trello-clone"},c.a.createElement(s.a,{store:ct},c.a.createElement(fe,null)))),document.getElementById("app"))}],[[66,1,2]]]);
//# sourceMappingURL=main.d81776f9.chunk.js.map