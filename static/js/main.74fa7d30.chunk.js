(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],[,,,,,,,,function(e,t,a){"use strict";var n=a(49);a.o(n,"HORIZONTAL_SCROLLING_SPEED_FACTOR")&&a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return n.HORIZONTAL_SCROLLING_SPEED_FACTOR})),a.o(n,"preventDefault")&&a.d(t,"preventDefault",(function(){return n.preventDefault})),a.o(n,"removeLineBreaks")&&a.d(t,"removeLineBreaks",(function(){return n.removeLineBreaks})),a.o(n,"useCallbackOnExternalAction")&&a.d(t,"useCallbackOnExternalAction",(function(){return n.useCallbackOnExternalAction})),a.o(n,"useStateWithCallback")&&a.d(t,"useStateWithCallback",(function(){return n.useStateWithCallback})),a.o(n,"useSwitchWithCallback")&&a.d(t,"useSwitchWithCallback",(function(){return n.useSwitchWithCallback})),a.o(n,"useToggle")&&a.d(t,"useToggle",(function(){return n.useToggle}));var r=a(50);a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return r.a}));var c=a(35);a.d(t,"preventDefault",(function(){return c.b})),a.d(t,"removeLineBreaks",(function(){return c.c}));var l=a(51);a.d(t,"useCallbackOnExternalAction",(function(){return l.a})),a.d(t,"useStateWithCallback",(function(){return l.b})),a.d(t,"useSwitchWithCallback",(function(){return l.c})),a.d(t,"useToggle",(function(){return l.d}))},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c}));var n=function(e){return e.preventDefault()},r=function(e,t){var a=e;do{if(a===t)return a;a=a.parentElement||a.parentNode}while(null!==a&&1===a.nodeType);return null},c=function(e){return e.replace(/\r\n|\r|\n/gm," ")}},,,,,,,,,,,function(e){e.exports=JSON.parse('{"light":{"bgAuthor":"SplitShire","bgAuthorLink":"https://www.pexels.com/@splitshire","bgSource":"Pexels.com","bgSourceLink":"https://www.pexels.com/"},"dark":{"bgAuthor":"eberhard grossgasteiger","bgAuthorLink":"https://www.pexels.com/@eberhardgross","bgSource":"Pexels.com","bgSourceLink":"https://www.pexels.com/"}}')},,,function(e,t){},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=.75},function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(9),r=a(0),c=a(35),l=function(e,t){var a=Object(r.useState)(e),c=Object(n.a)(a,2),l=c[0],i=c[1];return[l,function(e){t&&t(e),i(e)}]},i=function(e,t){var a=l(e,t),r=Object(n.a)(a,2),c=r[0],i=r[1];return[c,function(){return i(!0)},function(){return i(!1)}]},o=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];return[c,function(){return l(!c)}]},s=function(e,t,a){Object(r.useEffect)((function(){if(a&&e){var n=function(a){var n=a.target;Object(c.a)(n,e)||t()};return document.addEventListener("click",n),document.addEventListener("focusin",n),function(){document.removeEventListener("click",n),document.removeEventListener("focusin",n)}}}),[e,t,a])}},,,,function(e){e.exports=JSON.parse('{"create":"Create","edit":"Edit","submit":"Submit","delete":"Delete","cancel":"Cancel","app/home":"Home","app/boards":"Boards","app/get-started":"Get started","app/go-back":"Go back","app/page404":"Such page doesn\'t exist","app/board404":"Such board doesn\'t exist","app/open-menu":"Menu","app/close-menu":"Close","app/options":"Options","app/change-language":"Language","app/change-theme":"Theme","app/photo-by":"Photo by","app/downloaded-from":"from","boards/title":"Title","boards/new-board":"New Board","lists/title":"Title","lists/new-list":"New List","cards/content":"Content","cards/new-card":"New Card"}')},function(e){e.exports=JSON.parse('{"create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","submit":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","delete":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","app/home":"\u0414\u043e\u043c\u043e\u0439","app/boards":"\u0414\u043e\u0441\u043a\u0438","app/get-started":"\u041d\u0430\u0447\u0430\u0442\u044c","app/go-back":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f","app/page404":"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/board404":"\u0422\u0430\u043a\u043e\u0439 \u0434\u043e\u0441\u043a\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/open-menu":"\u041c\u0435\u043d\u044e","app/close-menu":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","app/options":"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438","app/change-language":"\u042f\u0437\u044b\u043a","app/change-theme":"\u0422\u0435\u043c\u0430","app/photo-by":"\u0424\u043e\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e","app/downloaded-from":"\u0441","boards/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","boards/new-board":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443","lists/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","lists/new-list":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a","cards/content":"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","cards/new-card":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}')},,,,,,,,,function(e,t,a){e.exports=a(107)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(26),i=a.n(l),o=a(16),s=a(3),d=a(127),u=a(122),b=a(6),m=(a(74),a(75),{en:{name:"english",translation:a(55)},ru:{name:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",translation:a(56)}}),f=(a(76),a(9)),E=a(8);a(77);!function(e){e.SET_LANGUAGE="SET_LANGUAGE"}(n||(n={}));n.SET_LANGUAGE;var p,O=n.SET_LANGUAGE,g=(a(78),function(){var e=Object(u.a)(),t=Object(s.c)(),a=Object(s.d)((function(e){return e.locale.languageCode})),n=Object(E.useStateWithCallback)(a,(function(e){return t({type:O,payload:{languageCode:a=e,languageName:m[a].name}});var a})),r=Object(f.a)(n,2),l=r[0],i=r[1];return c.a.createElement("label",{className:"change-language"},e.formatMessage({id:"app/change-language",defaultMessage:"Language"}),":",c.a.createElement("select",{value:l,onChange:function(e){i(e.target.value)},className:"language-select"},Object.entries(m).map((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];return c.a.createElement("option",{key:a,value:a,className:"language-option"},n.name)}))))});!function(e){e.TOGGLE_THEME="TOGGLE_THEME"}(p||(p={}));p.TOGGLE_THEME;var v,_=p.TOGGLE_THEME,j=a(17),h=(a(79),Object(r.forwardRef)((function(e,t){var a=e.className,n=void 0===a?"":a,r=e.styleType,l=void 0===r?"":r,i=Object(j.a)(e,["className","styleType"]),o="button";return l&&(o+="--"+l),n&&(o+=" "+n),c.a.createElement("button",Object.assign({className:o},i,{ref:t}))}))),C=a(2),I=a(128),N=(a(80),Object(r.forwardRef)((function(e,t){var a=e.labelValue,n=void 0!==a&&a,l=e.isInvalid,i=void 0!==l&&l,o=e.containerClassName,s=void 0===o?"":o,d=e.className,u=void 0===d?"":d,b=e.value,m=Object(j.a)(e,["labelValue","isInvalid","containerClassName","className","value"]),E=Object(r.useState)(!!b),p=Object(f.a)(E,2),O=p[0],g=p[1];Object(r.useEffect)((function(){g(!!b)}),[b]);var v=Object(C.a)(Object(C.a)({className:"textarea__textarea".concat(i?"--invalid":""," ").concat(u),spellCheck:!1,value:b},m),{},{ref:t});return c.a.createElement("div",{className:"textarea__container ".concat(s)},n?c.a.createElement("label",{className:"textarea__label"},c.a.createElement("span",{className:"textarea__label-value".concat(O?"--hide":"")},n),c.a.createElement(I.a,Object.assign({},v,{ref:t}))):c.a.createElement(I.a,Object.assign({},v,{ref:t})))}))),T=a(123),A=a(124),y=a(125),L=a(126),S=(a(81),function(e){var t=e.className,a=void 0===t?"":t,n=e.fieldName,l=e.value,i=void 0===l?"":l,o=e.displayOnViewMode,s=e.titles,d=e.initialEditMode,b=void 0!==d&&d,m=e.onEditToggle,p=e.iconToggle,O=void 0!==p&&p,g=e.exitOnSubmit,v=void 0===g||g,_=e.onSubmit,j=e.onDelete,C=e.textareaClassName,I=e.textareaContainerClassName,S=Object(u.a)(),D=Object(r.useRef)(null),R=Object(r.useRef)(null),k=Object(E.useSwitchWithCallback)(b,m),M=Object(f.a)(k,3),x=M[0],w=M[1],G=M[2],H=Object(r.useState)(i),B=Object(f.a)(H,2),P=B[0],V=B[1],W=!P.trim(),F=function(){if(!W){var e=P.trim();i!==e&&_(e),v?G():V("")}};Object(r.useEffect)((function(){var e;x&&(null===(e=D.current)||void 0===e||e.focus())}),[x]),Object(r.useEffect)((function(){V(i)}),[i,x]),Object(E.useCallbackOnExternalAction)(R.current,G,x);var J=(null===s||void 0===s?void 0:s.edit)||S.formatMessage({id:"edit"}),Z=(null===s||void 0===s?void 0:s.submit)||S.formatMessage({id:"submit"}),z=(null===s||void 0===s?void 0:s.cancel)||S.formatMessage({id:"cancel"}),U=(null===s||void 0===s?void 0:s.delete)||S.formatMessage({id:"delete"});return c.a.createElement("div",{className:"field-editor".concat(x?"--edit":""," ").concat(a),ref:R},c.a.createElement("div",{className:"field-editor__textarea-container"},c.a.createElement(N,{containerClassName:I,className:C,labelValue:n,title:x?n:void 0,isInvalid:W,value:o&&!x?o:P,rowsMax:3,disabled:!x,required:!0,onChange:function(e){V(Object(E.removeLineBreaks)(e.target.value))},onKeyDown:function(e){"Escape"===e.key&&G(),"Enter"===e.key&&(e.preventDefault(),F())},ref:D}),c.a.createElement("div",{className:"default-prevention-boundary",onClick:E.preventDefault},!x&&(O?c.a.createElement(h,{styleType:"plain",className:"field-editor__button-edit",title:J,onClick:w},c.a.createElement(T.a,{fontSize:"inherit"})):c.a.createElement("button",{className:"field-editor__click-overlay",title:J,onClick:w})))),c.a.createElement("div",{className:"field-editor__buttons-container"},x&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(h,{styleType:"plain",className:"field-editor__button-submit",title:Z,onClick:F,disabled:W},c.a.createElement(A.a,{fontSize:"inherit"})),c.a.createElement(h,{styleType:"plain",className:"field-editor__button",title:z,onClick:G},c.a.createElement(y.a,{fontSize:"inherit"}))),j&&c.a.createElement(h,{styleType:"plain",className:"field-editor__button",title:U,onClick:j},c.a.createElement(L.a,{fontSize:"inherit"})))))}),D=(a(82),function(e){var t=e.className,a=Object(j.a)(e,["className"]);return c.a.createElement("div",{className:"toggle"},c.a.createElement("input",Object.assign({},a,{className:"chackbox".concat(t?" "+t:""),type:"checkbox"})),c.a.createElement("div",{className:"slider"}))}),R=(a(83),function(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.theme.theme}));return c.a.createElement("label",null,"Change theme",c.a.createElement("div",{className:"theme-toggle__toggle-container"},c.a.createElement(D,{checked:"dark"===t,onChange:function(){return e({type:_})}})))}),k=function(){var e=Object(u.a)(),t=Object(r.useRef)(null),a=Object(E.useToggle)(!1),n=Object(f.a)(a,2),l=n[0],i=n[1];return Object(E.useCallbackOnExternalAction)(t.current,i,l),c.a.createElement("div",{className:"site-header__menu".concat(l?"--expand":""),ref:t},c.a.createElement("button",{onClick:i,className:"site-header__menu-toggle"},l?e.formatMessage({id:"app/close-menu",defaultMessage:"Close"}):e.formatMessage({id:"app/open-menu",defaultMessage:"Menu"})),c.a.createElement("div",{className:"site-header__menu-dropdown"},c.a.createElement("div",{className:"site-header__menu-dropdown-inner"},c.a.createElement("fieldset",{className:"site-header__menu-options-fieldset"},c.a.createElement("legend",{className:"site-header__menu-options-legend"},e.formatMessage({id:"app/options",defaultMessage:"Options"})),c.a.createElement("div",{className:"field"},c.a.createElement(g,null)),c.a.createElement("div",{className:"field"},c.a.createElement(R,null))))))},M=function(){var e=Object(u.a)();return c.a.createElement("header",{className:"site-header"},c.a.createElement("div",{className:"site-header__placeholder"}),c.a.createElement("nav",{className:"site-header__navigation"},c.a.createElement("ul",{className:"site-header__navigation-list"},c.a.createElement("li",null,c.a.createElement(o.c,{className:"site-header__navigation-link",to:"/",exact:!0},e.formatMessage({id:"app/home",defaultMessage:"Home"}))),c.a.createElement("li",null,c.a.createElement(o.c,{className:"site-header__navigation-link",to:"/boards"},e.formatMessage({id:"app/boards",defaultMessage:"Boards"}))))),c.a.createElement(k,null))},x=(a(85),function(){var e=Object(u.a)(),t=Object(s.d)((function(e){return e.theme.data}));return c.a.createElement("span",{className:"app__photo-signature"},e.formatMessage({id:"app/photo-by",defaultMessage:"Photo by"})," ",c.a.createElement("a",{className:"app__photo-signature-link",href:t.bgAuthorLink,target:"_blank",rel:"noopener noreferrer"},t.bgAuthor)," ",e.formatMessage({id:"app/downloaded-from",defaultMessage:"from"})," ",c.a.createElement("a",{className:"app__photo-signature-link",href:t.bgSourceLink,target:"_blank",rel:"noopener noreferrer"},t.bgSource))}),w=(a(86),function(e){var t=e.message,a=Object(b.f)(),n=Object(u.a)();return c.a.createElement("main",{className:"not-found-page"},c.a.createElement("div",{className:"not-found-page__message"},c.a.createElement("span",{className:"not-found-page__error-code"},"404"),c.a.createElement("p",null,t),c.a.createElement(h,{onClick:a.goBack},n.formatMessage({id:"app/go-back",defaultMessage:"Go back"}))))}),G=(a(87),function(){var e=Object(u.a)();return c.a.createElement("main",{className:"home-page"},c.a.createElement("h1",{className:"home-page__heading"},"Trello clone"),c.a.createElement(o.b,{className:"home_page__link",to:"/boards",tabIndex:-1},c.a.createElement(h,{styleType:"accent"},e.formatMessage({id:"app/get-started",defaultMessage:"Get started"}))))}),H=(a(88),a(21)),B=a(129);!function(e){e.CREATE_LIST="CREATE_LIST",e.DELETE_LIST="DELETE_LIST",e.CHANGE_LIST="CHANGE_LIST",e.MOVE_CARD="MOVE_CARD"}(v||(v={}));v.CREATE_LIST,v.DELETE_LIST,v.CHANGE_LIST,v.MOVE_CARD;var P,V=v.CREATE_LIST,W=v.DELETE_LIST,F=v.CHANGE_LIST,J=v.MOVE_CARD;!function(e){e.CREATE_BOARD="CREATE_BOARD",e.DELETE_BOARD="DELETE_BOARD",e.CHANGE_BOARD="CHANGE_BOARD",e.MOVE_LIST="MOVE_LIST"}(P||(P={}));P.CREATE_BOARD,P.CHANGE_BOARD,P.DELETE_BOARD,P.MOVE_LIST;var Z,z=P.CREATE_BOARD,U=P.DELETE_BOARD,Y=P.CHANGE_BOARD,q=P.MOVE_LIST;!function(e){e.CREATE_CARD="CREATE_CARD",e.DELETE_CARD="DELETE_CARD",e.CHANGE_CARD="CHANGE_CARD"}(Z||(Z={}));Z.CREATE_CARD,Z.DELETE_CARD,Z.CHANGE_CARD;var K,Q=Z.CREATE_CARD,X=Z.DELETE_CARD,$=Z.CHANGE_CARD,ee=(a(89),a(90),Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onDelete,r=e.onEdit,i=Object(u.a)(),o=Object(s.d)((function(e){return e.cards[a].content})),d=function(){return n(a)},b=function(e){return r(a,e)},m=Object(E.useToggle)(!0),p=Object(f.a)(m,2),O=p[0],g=p[1];return c.a.createElement(H.b,{draggableId:a,index:t,disableInteractiveElementBlocking:O},(function(e){return t=e.draggableProps.style,a=c.a.createElement("div",Object.assign({className:"cards__card"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement(S,{fieldName:i.formatMessage({id:"cards/content",defaultMessage:"Content"}),value:o,onSubmit:b,onDelete:d,onEditToggle:g,textareaClassName:"cards__card-textarea"})),"fixed"!==t.position?a:Object(l.createPortal)(a,document.getElementById("draggable"));var t,a}))}))),te=(a(91),Object(r.memo)((function(e){var t=e.onCreate,a=e.toggleListDrag,n=Object(u.a)();return c.a.createElement("div",{className:"cards__new-card"},c.a.createElement(S,{fieldName:n.formatMessage({id:"cards/content",defaultMessage:"Content"}),displayOnViewMode:n.formatMessage({id:"cards/new-card",defaultMessage:"New card"}),titles:{edit:n.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t,onEditToggle:a,textareaClassName:"cards__card-textarea"}))}))),ae=Object(r.memo)((function(e){var t=e.listId,a=e.toggleListDrag,n=Object(s.c)(),l=Object(s.d)((function(e){var a;return(null===(a=e.lists[t])||void 0===a?void 0:a.cards)||[]})),i=Object(r.useCallback)((function(e){return n(function(e,t){return{type:Q,payload:{listId:e,cardId:Object(B.a)(),content:t}}}(t,e))}),[n,t]),o=Object(r.useCallback)((function(e){return n(function(e,t){return{type:X,payload:{listId:e,cardId:t}}}(t,e))}),[n,t]),d=Object(r.useCallback)((function(e,t){return n(function(e,t){return{type:$,payload:{cardId:e,content:t}}}(e,t))}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(H.c,{droppableId:t,type:"card"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"cards"}),l.map((function(e,t){return c.a.createElement("li",{key:e},c.a.createElement(ee,{index:t,id:e,onDelete:o,onEdit:d}))})),e.placeholder)})),c.a.createElement(te,{onCreate:i,toggleListDrag:a}))})),ne=(a(92),Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onEdit,r=e.onDelete,l=Object(u.a)(),i=Object(s.d)((function(e){return e.lists[a].title})),o=function(){return r(a)},d=function(e){return n(a,e)},b=Object(E.useToggle)(!0),m=Object(f.a)(b,2),p=m[0],O=m[1];return c.a.createElement(H.b,{draggableId:a,index:t,disableInteractiveElementBlocking:p},(function(e){return c.a.createElement("div",Object.assign({className:"lists__list"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement("header",{className:"lists__list-header"},c.a.createElement(S,{fieldName:l.formatMessage({id:"lists/title",defaultMessage:"Title"}),value:i,onDelete:o,onSubmit:d,onEditToggle:O,textareaClassName:"lists__list-textarea"})),c.a.createElement(ae,{listId:a,toggleListDrag:O}))}))}))),re=(a(93),Object(r.memo)((function(e){var t=e.onCreate,a=Object(u.a)();return c.a.createElement("div",{className:"lists__new-list"},c.a.createElement(S,{fieldName:a.formatMessage({id:"lists/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"lists/new-list",defaultMessage:"Create card"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t,textareaClassName:"lists__list-textarea"}))}))),ce=(a(94),Object(r.memo)((function(e){var t=e.boardId,a=Object(s.d)((function(e){var a;return(null===(a=e.boards.byId[t])||void 0===a?void 0:a.lists)||[]})),n=Object(s.c)(),l=Object(r.useCallback)((function(e){return n(function(e,t){return{type:V,payload:{boardId:e,listId:Object(B.a)(),title:t}}}(t,e))}),[n,t]),i=Object(r.useCallback)((function(e){return n(function(e,t){return function(a,n){var r=n().lists[t].cards;return a({type:W,payload:{boardId:e,listId:t,cardsIds:r}})}}(t,e))}),[t,n]),o=Object(r.useCallback)((function(e,t){return n(function(e,t){return{type:F,payload:{listId:e,title:t}}}(e,t))}),[n]),d=Object(r.useCallback)((function(e,a){return n(function(e,t,a){return{type:q,payload:{boardId:e,fromIndex:t,toIndex:a}}}(t,e,a))}),[n,t]),u=Object(r.useCallback)((function(e,t,a,r){return n(function(e,t,a,n){return{type:J,payload:{fromListId:e,toListId:t,fromIndex:a,toIndex:n}}}(e,t,a,r))}),[n]);return c.a.createElement(H.a,{onDragEnd:function(e){var t=e.destination,a=e.source,n=e.type;if(t)if("card"===n){var r=a.droppableId,c=a.index,l=t.droppableId,i=t.index;if(r===l&&c===i)return;u(r,l,c,i)}else if("list"===n){if(a.index===t.index)return;d(a.index,t.index)}}},c.a.createElement("div",{className:"lists"},c.a.createElement(H.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"lists__ul"}),a.map((function(e,t){return c.a.createElement("li",{key:e,className:"lists__ul-item"},c.a.createElement(ne,{index:t,id:e,onEdit:o,onDelete:i}))})),e.placeholder)})),c.a.createElement(re,{onCreate:l})))}))),le=function(e){var t=e.match,a=Object(u.a)(),n=t.params.id;if(Object(s.d)((function(e){return!!e.boards.byId[n]}))){return c.a.createElement("main",{className:"board-page",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;window.innerHeight<=600||(null===(t=a)||void 0===t?void 0:t.closest(".lists__list"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement(ce,{boardId:n}))}return c.a.createElement(w,{message:a.formatMessage({id:"app/board404",defaultMessage:"Such board doesn't exist"})})},ie=(a(95),Object(r.memo)((function(e){var t=e.id,a=e.onEdit,n=e.onDelete,r=Object(u.a)(),l=Object(s.d)((function(e){return e.boards.byId[t].title})),i=Object(E.useToggle)(!1),d=Object(f.a)(i,2),b=d[0],m=d[1];return c.a.createElement(o.c,{to:"/boards/".concat(t),className:"boards-navigation__link",onClick:b?E.preventDefault:void 0},c.a.createElement(S,{fieldName:r.formatMessage({id:"boards/title",defaultMessage:"Title"}),value:l,iconToggle:!0,onEditToggle:m,onSubmit:function(e){return a(t,e)},onDelete:function(){return n(t)},textareaClassName:"boards-navigation__link-textarea"}))}))),oe=(a(96),Object(r.memo)((function(e){var t=e.onCreate,a=Object(u.a)();return c.a.createElement("div",{className:"boards-navigation__new-board"},c.a.createElement(S,{fieldName:a.formatMessage({id:"boards/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"boards/new-board",defaultMessage:"Create board"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t,textareaClassName:"boards-navigation__link-textarea"}))}))),se=(a(97),function(){var e=Object(b.f)(),t=Object(s.c)(),a=Object(s.d)((function(e){return e.boards.allIds})),n=Object(r.useCallback)((function(e){return t(function(e){return{type:z,payload:{boardId:Object(B.a)(),title:e}}}(e))}),[t]),l=Object(r.useCallback)((function(a){e.location.pathname.includes(a)&&e.push("/boards/"),t(function(e){return function(t,a){var n=a(),r=n.boards,c=n.lists,l=r.byId[e].lists,i=l.map((function(e){return c[e].cards})).flat();return t({type:U,payload:{boardId:e,listsIds:l,cardsIds:i}})}}(a))}),[t,e]),i=Object(r.useCallback)((function(e,a){t(function(e,t){return{type:Y,payload:{boardId:e,title:t}}}(e,a))}),[t]);return c.a.createElement("nav",{className:"boards-navigation",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;(null===(t=a)||void 0===t?void 0:t.closest(".field-editor--edit"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement("ul",{className:"boards-navigation__list"},a.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement(ie,{id:e,onDelete:l,onEdit:i}))}))),c.a.createElement(oe,{onCreate:n}))}),de=function(){var e=Object(u.a)();return c.a.createElement(w,{message:e.formatMessage({id:"app/page404",defaultMessage:"Such page doesn't exist"})})},ue=function(){var e=Object(s.d)((function(e){return e.locale.languageCode})),t=Object(s.d)((function(e){return e.theme.theme}));return c.a.createElement(d.a,{locale:e,messages:m[e].translation},c.a.createElement("div",{id:"theme",className:"_theme--".concat(t)},c.a.createElement(M,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0,component:G}),c.a.createElement(b.a,{path:"/boards",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(se,null),c.a.createElement(b.a,{path:"/boards/:id",component:le}))}}),c.a.createElement(b.a,{path:"*",component:de})),c.a.createElement(x,null)))},be=a(15),me=a(60),fe=a(61),Ee=a(62),pe=function(){try{var e=JSON.stringify(at.getState());localStorage.setItem("state",e)}catch(t){return}},Oe=a.n(Ee)()((function(){at.subscribe(pe)}),1e3),ge=n.SET_LANGUAGE,ve=null===(K=navigator.language)||void 0===K?void 0:K.slice(0,2),_e="en";ve in m&&(_e=ve);var je={languageCode:_e,languageName:m[_e].name},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case ge:return Object(C.a)(Object(C.a)({},e),n);default:return e}},Ce=a(46),Ie=p.TOGGLE_THEME,Ne={theme:"light",data:Ce.light},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0,a=t.type;switch(a){case Ie:var n="light"===e.theme?"dark":"light";return Object(C.a)(Object(C.a)({},e),{},{theme:n,data:Ce[n]});default:return e}},Ae=a(30),ye=a(23),Le=a(12),Se=P.CREATE_BOARD,De=P.DELETE_BOARD,Re=P.CHANGE_BOARD,ke=P.MOVE_LIST,Me=v.CREATE_LIST,xe=v.DELETE_LIST,we={byId:{},allIds:[]},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Se:var r=n,c=r.boardId,l=r.title,i=Object(C.a)(Object(C.a)({},e.byId),{},Object(Le.a)({},c,{id:c,title:l,lists:[]}));return Object(C.a)(Object(C.a)({},e),{},{byId:i,allIds:[].concat(Object(ye.a)(e.allIds),[c])});case De:var o=n,s=o.boardId,d=e.byId,u=(d[s],Object(j.a)(d,[s].map(Ae.a))),b=e.allIds.filter((function(e){return e!==s}));return Object(C.a)(Object(C.a)({},e),{},{byId:u,allIds:b});case Re:var m=n,f=m.boardId,E=m.title,p=Object(C.a)(Object(C.a)({},e.byId),{},Object(Le.a)({},f,Object(C.a)(Object(C.a)({},e.byId[f]),{},{title:E})));return Object(C.a)(Object(C.a)({},e),{},{byId:p});case ke:var O=n,g=O.boardId,v=O.fromIndex,_=O.toIndex,h=Object(C.a)({},e.byId),I=Object(C.a)({},h[g]),N=Object(ye.a)(I.lists),T=N.splice(v,1);return N.splice.apply(N,[_,0].concat(Object(ye.a)(T))),I.lists=N,h[g]=I,Object(C.a)(Object(C.a)({},e),{},{byId:h});case Me:var A=n,y=A.boardId,L=A.listId,S=Object(C.a)({},e.byId[y]);S.lists=[].concat(Object(ye.a)(S.lists),[L]);var D=Object(C.a)(Object(C.a)({},e.byId),{},Object(Le.a)({},y,S));return Object(C.a)(Object(C.a)({},e),{},{byId:D});case xe:var R=n,k=R.boardId,M=R.listId,x=Object(C.a)({},e.byId[k]);x.lists=x.lists.filter((function(e){return e!==M}));var w=Object(C.a)(Object(C.a)({},e.byId),{},Object(Le.a)({},k,x));return Object(C.a)(Object(C.a)({},e),{},{byId:w});default:return e}},He=v.CREATE_LIST,Be=v.DELETE_LIST,Pe=v.CHANGE_LIST,Ve=v.MOVE_CARD,We=Z.CREATE_CARD,Fe=Z.DELETE_CARD,Je=P.DELETE_BOARD,Ze={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case He:var r=n,c=r.listId,l=r.title;return Object(C.a)(Object(C.a)({},e),{},Object(Le.a)({},c,{id:c,title:l,cards:[]}));case Be:var i=n,o=i.listId,s=(e[o],Object(j.a)(e,[o].map(Ae.a)));return Object(C.a)({},s);case Pe:var d=n,u=d.listId,b=d.title;return Object(C.a)(Object(C.a)({},e),{},Object(Le.a)({},u,Object(C.a)(Object(C.a)({},e[u]),{},{title:b})));case We:var m=n,f=m.listId,E=m.cardId,p=Object(C.a)({},e[f]);return p.cards=[].concat(Object(ye.a)(p.cards),[E]),Object(C.a)(Object(C.a)({},e),{},Object(Le.a)({},f,p));case Fe:var O=n,g=O.listId,v=O.cardId,_=Object(C.a)({},e[g]);return _.cards=_.cards.filter((function(e){return e!==v})),Object(C.a)(Object(C.a)({},e),{},Object(Le.a)({},g,_));case Ve:var h,I=n,N=I.fromListId,T=I.toListId,A=I.fromIndex,y=I.toIndex,L=Object(C.a)({},e),S=Object(C.a)({},L[N]);S.cards=Object(ye.a)(S.cards);var D=S.cards.splice(A,1);L[N]=S;var R=Object(C.a)({},L[T]);return R.cards=Object(ye.a)(R.cards),(h=R.cards).splice.apply(h,[y,0].concat(Object(ye.a)(D))),L[T]=R,L;case Je:var k=n,M=k.listsIds,x={};for(var w in e)e.hasOwnProperty(w)&&!M.includes(w)&&(x[w]=e[w]);return x;default:return e}},Ue=Z.CREATE_CARD,Ye=Z.DELETE_CARD,qe=Z.CHANGE_CARD,Ke=v.DELETE_LIST,Qe=P.DELETE_BOARD,Xe={},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Ue:var r=n,c=r.cardId,l=r.content;return Object(C.a)(Object(C.a)({},e),{},Object(Le.a)({},c,{id:c,content:l}));case Ye:var i=n,o=i.cardId,s=(e[o],Object(j.a)(e,[o].map(Ae.a)));return Object(C.a)({},s);case qe:var d=n,u=d.cardId,b=d.content;return Object(C.a)(Object(C.a)({},e),{},Object(Le.a)({},u,Object(C.a)(Object(C.a)({},e[u]),{},{content:b})));case Ke:var m=n,f=m.cardsIds,E={};for(var p in e)e.hasOwnProperty(p)&&!f.includes(p)&&(E[p]=e[p]);return E;case Qe:var O=n,g=O.cardsIds,v={};for(var _ in e)e.hasOwnProperty(_)&&!g.includes(_)&&(v[_]=e[_]);return v;default:return e}},et=Object(be.combineReducers)({locale:he,theme:Te,boards:Ge,lists:ze,cards:$e}),tt=[fe.a],at=Object(be.createStore)(et,function(){try{var e=localStorage.getItem("state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),Object(me.composeWithDevTools)(be.applyMiddleware.apply(void 0,tt)));Oe(),i.a.render(c.a.createElement(r.StrictMode,null,c.a.createElement(o.a,{basename:"/trello-clone"},c.a.createElement(s.a,{store:at},c.a.createElement(ue,null)))),document.getElementById("app"))}],[[65,1,2]]]);
//# sourceMappingURL=main.74fa7d30.chunk.js.map