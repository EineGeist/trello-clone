(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{35:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c}));var n=function(e){return e.preventDefault()},r=function(e,t){var a=e;do{if(a===t)return a;a=a.parentElement||a.parentNode}while(null!==a&&1===a.nodeType);return null},c=function(e){return e.replace(/\r\n|\r|\n/gm," ")}},48:function(e,t){},49:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=.75},50:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(9),r=a(0),c=a(35),l=function(e,t){var a=Object(r.useState)(e),c=Object(n.a)(a,2),l=c[0],o=c[1];return[l,function(e){t&&t(e),o(e)}]},o=function(e,t){var a=l(e,t),r=Object(n.a)(a,2),c=r[0],o=r[1];return[c,function(){return o(!0)},function(){return o(!1)}]},i=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],l=a[1];return[c,function(){return l(!c)}]},s=function(e,t,a){Object(r.useEffect)((function(){if(a&&e){var n=function(a){var n=a.target;Object(c.a)(n,e)||t()};return document.addEventListener("click",n),document.addEventListener("focusin",n),function(){document.removeEventListener("click",n),document.removeEventListener("focusin",n)}}}),[e,t,a])}},54:function(e){e.exports=JSON.parse('{"create":"Create","edit":"Edit","submit":"Submit","delete":"Delete","cancel":"Cancel","app/home":"Home","app/boards":"Boards","app/get-started":"Get started","app/go-back":"Go back","app/page404":"Such page doesn\'t exist","app/board404":"Such board doesn\'t exist","app/open-menu":"Menu","app/close-menu":"Close","app/change-language":"Change language","app/photo-by":"Photo by","app/downloaded-from":"Downloaded from","boards/title":"Title","boards/new-board":"New Board","lists/title":"title","lists/new-list":"New List","cards/content":"Content","cards/new-card":"New Card"}')},55:function(e){e.exports=JSON.parse('{"create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","submit":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c","delete":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c","cancel":"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","app/home":"\u0414\u043e\u043c\u043e\u0439","app/boards":"\u0414\u043e\u0441\u043a\u0438","app/get-started":"\u041d\u0430\u0447\u0430\u0442\u044c","app/go-back":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f","app/page404":"\u0422\u0430\u043a\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/board404":"\u0422\u0430\u043a\u043e\u0439 \u0434\u043e\u0441\u043a\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442","app/open-menu":"\u041c\u0435\u043d\u044e","app/close-menu":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","app/change-language":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u044f\u0437\u044b\u043a","app/photo-by":"\u0424\u043e\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e","app/downloaded-from":"\u0421\u043a\u0430\u0447\u0430\u043d\u043e \u0441","boards/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","boards/new-board":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u043a\u0443","lists/title":"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","lists/new-list":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a","cards/content":"\u0421\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","cards/new-card":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443"}')},64:function(e,t,a){e.exports=a(95)},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},8:function(e,t,a){"use strict";var n=a(48);a.o(n,"HORIZONTAL_SCROLLING_SPEED_FACTOR")&&a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return n.HORIZONTAL_SCROLLING_SPEED_FACTOR})),a.o(n,"preventDefault")&&a.d(t,"preventDefault",(function(){return n.preventDefault})),a.o(n,"removeLineBreaks")&&a.d(t,"removeLineBreaks",(function(){return n.removeLineBreaks})),a.o(n,"useCallbackOnExternalAction")&&a.d(t,"useCallbackOnExternalAction",(function(){return n.useCallbackOnExternalAction})),a.o(n,"useStateWithCallback")&&a.d(t,"useStateWithCallback",(function(){return n.useStateWithCallback})),a.o(n,"useSwitchWithCallback")&&a.d(t,"useSwitchWithCallback",(function(){return n.useSwitchWithCallback})),a.o(n,"useToggle")&&a.d(t,"useToggle",(function(){return n.useToggle}));var r=a(49);a.d(t,"HORIZONTAL_SCROLLING_SPEED_FACTOR",(function(){return r.a}));var c=a(35);a.d(t,"preventDefault",(function(){return c.b})),a.d(t,"removeLineBreaks",(function(){return c.c}));var l=a(50);a.d(t,"useCallbackOnExternalAction",(function(){return l.a})),a.d(t,"useStateWithCallback",(function(){return l.b})),a.d(t,"useSwitchWithCallback",(function(){return l.c})),a.d(t,"useToggle",(function(){return l.d}))},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(26),o=a.n(l),i=a(16),s=a(3),d=a(115),u=a(110),b=a(6),f=(a(73),a(74),{en:{name:"english",translation:a(54)},ru:{name:"\u0440\u0443\u0441\u0441\u043a\u0438\u0439",translation:a(55)}}),m=(a(75),a(9)),E=a(8);!function(e){e.SET_LANGUAGE="SET_LANGUAGE"}(n||(n={}));n.SET_LANGUAGE;var O,p=n.SET_LANGUAGE,g=function(){var e=Object(u.a)(),t=Object(s.c)(),a=Object(s.d)((function(e){return e.locale.languageCode})),n=Object(E.useStateWithCallback)(a,(function(e){return t({type:p,payload:{languageCode:a=e,languageName:f[a].name}});var a})),r=Object(m.a)(n,2),l=r[0],o=r[1];return c.a.createElement("label",{className:"change-language"},e.formatMessage({id:"app/change-language",defaultMessage:"Change language"}),c.a.createElement("select",{value:l,onChange:function(e){o(e.target.value)},className:"language-select"},Object.entries(f).map((function(e){var t=Object(m.a)(e,2),a=t[0],n=t[1];return c.a.createElement("option",{key:a,value:a,className:"language-option"},n.name)}))))},v=function(){var e=Object(u.a)(),t=Object(r.useRef)(null),a=Object(E.useToggle)(!1),n=Object(m.a)(a,2),l=n[0],o=n[1];return Object(E.useCallbackOnExternalAction)(t.current,o,l),c.a.createElement("div",{className:"site-menu".concat(l?" expand":""),ref:t},c.a.createElement("button",{onClick:o,className:"toggler"},l?e.formatMessage({id:"app/close-menu",defaultMessage:"Close"}):e.formatMessage({id:"app/open-menu",defaultMessage:"Menu"})),c.a.createElement("div",{className:"dropdown"},c.a.createElement("div",{className:"dropdown-inner"},c.a.createElement(g,null))))},j=function(){var e=Object(u.a)();return c.a.createElement("header",{className:"site-header"},c.a.createElement("div",{className:"placeholder"}),c.a.createElement("nav",{className:"site-navigation"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.c,{to:"/",exact:!0},e.formatMessage({id:"app/home",defaultMessage:"Home"}))),c.a.createElement("li",null,c.a.createElement(i.c,{to:"/boards"},e.formatMessage({id:"app/boards",defaultMessage:"Boards"}))))),c.a.createElement(v,null))},C=a(21),I=(a(77),Object(r.forwardRef)((function(e,t){var a=e.className,n=void 0===a?"":a,r=Object(C.a)(e,["className"]),l="button";return n&&(l+=" "+n),c.a.createElement("button",Object.assign({className:l},r,{ref:t}))}))),T=a(2),A=a(116),D=(a(78),Object(r.forwardRef)((function(e,t){var a=e.labelValue,n=void 0!==a&&a,l=e.isInvalid,o=void 0!==l&&l,i=e.className,s=e.value,d=Object(C.a)(e,["labelValue","isInvalid","className","value"]),u=Object(r.useState)(!!s),b=Object(m.a)(u,2),f=b[0],E=b[1];Object(r.useEffect)((function(){E(!!s)}),[s]);var O="textarea";o&&(O+=" invalid"),n&&f&&(O+=" hide-label"),i&&(O+=" "+i);var p=Object(T.a)(Object(T.a)({className:O,spellCheck:!1,value:s},d),{},{ref:t});return c.a.createElement("div",{className:"textarea-container"},n?c.a.createElement("label",{className:"label"},c.a.createElement("span",{className:"label-value".concat(f?" hide":"")},n),c.a.createElement(A.a,Object.assign({},p,{ref:t}))):c.a.createElement(A.a,Object.assign({},p,{ref:t})))}))),N=a(111),h=a(112),y=a(113),_=a(114),L=(a(79),function(e){var t=e.fieldName,a=e.value,n=void 0===a?"":a,l=e.displayOnViewMode,o=e.titles,i=e.initialEditMode,s=void 0!==i&&i,d=e.onEditToggle,b=e.iconToggle,f=void 0!==b&&b,O=e.exitOnSubmit,p=void 0===O||O,g=e.onSubmit,v=e.onDelete,j=Object(u.a)(),C=Object(r.useRef)(null),T=Object(r.useRef)(null),A=Object(E.useSwitchWithCallback)(s,d),L=Object(m.a)(A,3),S=L[0],R=L[1],M=L[2],k=Object(r.useState)(n),w=Object(m.a)(k,2),x=w[0],G=w[1],B=!x.trim(),H=function(){if(!B){var e=x.trim();n!==e&&g(e),p?M():G("")}};Object(r.useEffect)((function(){var e;S&&(null===(e=C.current)||void 0===e||e.focus())}),[S]),Object(r.useEffect)((function(){G(n)}),[n,S]),Object(E.useCallbackOnExternalAction)(T.current,M,S);var P=(null===o||void 0===o?void 0:o.edit)||j.formatMessage({id:"edit"}),V=(null===o||void 0===o?void 0:o.submit)||j.formatMessage({id:"submit"}),W=(null===o||void 0===o?void 0:o.cancel)||j.formatMessage({id:"cancel"}),F=(null===o||void 0===o?void 0:o.delete)||j.formatMessage({id:"delete"});return c.a.createElement("div",{className:"field-editor".concat(S?" edit":""),ref:T},c.a.createElement("div",{className:"field-editor-textarea-container"},c.a.createElement(D,{labelValue:t,title:S?t:void 0,isInvalid:B,value:l&&!S?l:x,rowsMax:3,disabled:!S,required:!0,onChange:function(e){G(Object(E.removeLineBreaks)(e.target.value))},onKeyDown:function(e){"Escape"===e.key&&M(),"Enter"===e.key&&(e.preventDefault(),H())},ref:C}),c.a.createElement("div",{className:"default-prevention-boundary",onClick:E.preventDefault},!S&&(f?c.a.createElement(I,{className:"field-editor-button edit-button",title:P,onClick:R},c.a.createElement(N.a,{fontSize:"inherit"})):c.a.createElement("button",{className:"click-overlay",title:P,onClick:R})))),c.a.createElement("div",{className:"buttons-container"},S&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement(I,{className:"field-editor-button submit-button",title:V,onClick:H,disabled:B},c.a.createElement(h.a,{fontSize:"inherit"})),c.a.createElement(I,{className:"field-editor-button",title:W,onClick:M},c.a.createElement(y.a,{fontSize:"inherit"}))),v&&c.a.createElement(I,{className:"field-editor-button",title:F,onClick:v},c.a.createElement(_.a,{fontSize:"inherit"})))))}),S=(a(80),function(){var e=Object(u.a)();return c.a.createElement("main",{className:"home-page"},c.a.createElement("h1",null,"Trello clone"),c.a.createElement(i.b,{to:"/boards"},c.a.createElement(I,null,e.formatMessage({id:"app/get-started",defaultMessage:"Get started"}))))}),R=(a(81),a(82),a(20)),M=a(117);!function(e){e.CREATE_LIST="CREATE_LIST",e.DELETE_LIST="DELETE_LIST",e.CHANGE_LIST="CHANGE_LIST",e.MOVE_CARD="MOVE_CARD"}(O||(O={}));O.CREATE_LIST,O.DELETE_LIST,O.CHANGE_LIST,O.MOVE_CARD;var k,w=O.CREATE_LIST,x=O.DELETE_LIST,G=O.CHANGE_LIST,B=O.MOVE_CARD;!function(e){e.CREATE_BOARD="CREATE_BOARD",e.DELETE_BOARD="DELETE_BOARD",e.CHANGE_BOARD="CHANGE_BOARD",e.MOVE_LIST="MOVE_LIST"}(k||(k={}));k.CREATE_BOARD,k.CHANGE_BOARD,k.DELETE_BOARD,k.MOVE_LIST;var H,P=k.CREATE_BOARD,V=k.DELETE_BOARD,W=k.CHANGE_BOARD,F=k.MOVE_LIST;a(83);!function(e){e.CREATE_CARD="CREATE_CARD",e.DELETE_CARD="DELETE_CARD",e.CHANGE_CARD="CHANGE_CARD"}(H||(H={}));H.CREATE_CARD,H.DELETE_CARD,H.CHANGE_CARD;var J,Z=H.CREATE_CARD,z=H.DELETE_CARD,U=H.CHANGE_CARD,Y=Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onDelete,r=e.onEdit,o=Object(u.a)(),i=Object(s.d)((function(e){return e.cards[a].content})),d=function(){return n(a)},b=function(e){return r(a,e)},f=Object(E.useToggle)(!0),O=Object(m.a)(f,2),p=O[0],g=O[1];return c.a.createElement(R.b,{draggableId:a,index:t,disableInteractiveElementBlocking:p},(function(e){return t=e.draggableProps.style,a=c.a.createElement("div",Object.assign({className:"card"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement(L,{fieldName:o.formatMessage({id:"cards/content",defaultMessage:"Content"}),value:i,onSubmit:b,onDelete:d,onEditToggle:g})),"fixed"!==t.position?a:Object(l.createPortal)(a,document.getElementById("draggable"));var t,a}))})),q=Object(r.memo)((function(e){var t=e.onCreate,a=e.toggleListDrag,n=Object(u.a)();return c.a.createElement("div",{className:"card new-card"},c.a.createElement(L,{fieldName:n.formatMessage({id:"cards/content",defaultMessage:"Content"}),displayOnViewMode:n.formatMessage({id:"cards/new-card",defaultMessage:"New card"}),titles:{edit:n.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t,onEditToggle:a}))})),K=Object(r.memo)((function(e){var t=e.listId,a=e.toggleListDrag,n=Object(s.c)(),l=Object(s.d)((function(e){var a;return(null===(a=e.lists[t])||void 0===a?void 0:a.cards)||[]})),o=Object(r.useCallback)((function(e){return n(function(e,t){return{type:Z,payload:{listId:e,cardId:Object(M.a)(),content:t}}}(t,e))}),[n,t]),i=Object(r.useCallback)((function(e){return n(function(e,t){return{type:z,payload:{listId:e,cardId:t}}}(t,e))}),[n,t]),d=Object(r.useCallback)((function(e,t){return n(function(e,t){return{type:U,payload:{cardId:e,content:t}}}(e,t))}),[n]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(R.c,{droppableId:t,type:"card"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef,className:"list-of-cards"}),l.map((function(e,t){return c.a.createElement("li",{key:e},c.a.createElement(Y,{index:t,id:e,onDelete:i,onEdit:d}))})),e.placeholder)})),c.a.createElement(q,{onCreate:o,toggleListDrag:a}))})),Q=Object(r.memo)((function(e){var t=e.index,a=e.id,n=e.onEdit,r=e.onDelete,l=Object(u.a)(),o=Object(s.d)((function(e){return e.lists[a].title})),i=function(){return r(a)},d=function(e){return n(a,e)},b=Object(E.useToggle)(!0),f=Object(m.a)(b,2),O=f[0],p=f[1];return c.a.createElement(R.b,{draggableId:a,index:t,disableInteractiveElementBlocking:O},(function(e){return c.a.createElement("div",Object.assign({className:"list"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),c.a.createElement("header",null,c.a.createElement(L,{fieldName:l.formatMessage({id:"lists/title",defaultMessage:"Title"}),value:o,onDelete:i,onSubmit:d,onEditToggle:p})),c.a.createElement(K,{listId:a,toggleListDrag:p}))}))})),X=Object(r.memo)((function(e){var t=e.onCreate,a=Object(u.a)();return c.a.createElement("div",{className:"list new-list"},c.a.createElement(L,{fieldName:a.formatMessage({id:"lists/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"lists/new-list",defaultMessage:"Create card"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t}))})),$=Object(r.memo)((function(e){var t=e.boardId,a=Object(s.d)((function(e){var a;return(null===(a=e.boards.byId[t])||void 0===a?void 0:a.lists)||[]})),n=Object(s.c)(),l=Object(r.useCallback)((function(e){return n(function(e,t){return{type:w,payload:{boardId:e,listId:Object(M.a)(),title:t}}}(t,e))}),[n,t]),o=Object(r.useCallback)((function(e){return n(function(e,t){return function(a,n){var r=n().lists[t].cards;return a({type:x,payload:{boardId:e,listId:t,cardsIds:r}})}}(t,e))}),[t,n]),i=Object(r.useCallback)((function(e,t){return n(function(e,t){return{type:G,payload:{listId:e,title:t}}}(e,t))}),[n]),d=Object(r.useCallback)((function(e,a){return n(function(e,t,a){return{type:F,payload:{boardId:e,fromIndex:t,toIndex:a}}}(t,e,a))}),[n,t]),u=Object(r.useCallback)((function(e,t,a,r){return n(function(e,t,a,n){return{type:B,payload:{fromListId:e,toListId:t,fromIndex:a,toIndex:n}}}(e,t,a,r))}),[n]);return c.a.createElement(R.a,{onDragEnd:function(e){var t=e.destination,a=e.source,n=e.type;if(t)if("card"===n){var r=a.droppableId,c=a.index,l=t.droppableId,o=t.index;if(r===l&&c===o)return;u(r,l,c,o)}else if("list"===n){if(a.index===t.index)return;d(a.index,t.index)}}},c.a.createElement("div",{className:"list-of-lists"},c.a.createElement(R.c,{droppableId:"lists",direction:"horizontal",type:"list"},(function(e){return c.a.createElement("ul",Object.assign({},e.droppableProps,{ref:e.innerRef}),a.map((function(e,t){return c.a.createElement("li",{key:e},c.a.createElement(Q,{index:t,id:e,onEdit:i,onDelete:o}))})),e.placeholder)})),c.a.createElement(X,{onCreate:l})))})),ee=(a(84),function(e){var t=e.message,a=Object(b.f)(),n=Object(u.a)();return c.a.createElement("main",{className:"not-found-page"},c.a.createElement("div",{className:"message"},c.a.createElement("span",{className:"error-code"},"404"),c.a.createElement("p",null,t),c.a.createElement(I,{onClick:a.goBack},n.formatMessage({id:"app/go-back",defaultMessage:"Go back"}))))}),te=function(e){var t=e.match,a=Object(u.a)(),n=t.params.id;if(Object(s.d)((function(e){return!!e.boards.byId[n]}))){return c.a.createElement("main",{className:"board-page",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;window.innerHeight<=600||(null===(t=a)||void 0===t?void 0:t.closest(".list"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement($,{boardId:n}))}return c.a.createElement(ee,{message:a.formatMessage({id:"app/board404",defaultMessage:"Such board doesn't exist"})})},ae=(a(85),Object(r.memo)((function(e){var t=e.id,a=e.onEdit,n=e.onDelete,r=Object(u.a)(),l=Object(s.d)((function(e){return e.boards.byId[t].title})),o=Object(E.useToggle)(!1),d=Object(m.a)(o,2),b=d[0],f=d[1],O={fieldName:r.formatMessage({id:"boards/title",defaultMessage:"Title"}),value:l,iconToggle:!0,onEditToggle:f,onSubmit:function(e){return a(t,e)},onDelete:function(){return n(t)}};return c.a.createElement(i.c,{to:"/boards/".concat(t),className:"board-link",onClick:b?E.preventDefault:void 0},c.a.createElement(L,O))}))),ne=Object(r.memo)((function(e){var t=e.onCreate,a=Object(u.a)();return c.a.createElement("div",null,c.a.createElement("div",{className:"board-link new-board"},c.a.createElement(L,{fieldName:a.formatMessage({id:"boards/title",defaultMessage:"Title"}),displayOnViewMode:a.formatMessage({id:"boards/new-board",defaultMessage:"Create board"}),titles:{edit:a.formatMessage({id:"create",defaultMessage:"Create"})},exitOnSubmit:!1,onSubmit:t})))})),re=function(){var e=Object(b.f)(),t=Object(s.c)(),a=Object(s.d)((function(e){return e.boards.allIds})),n=Object(r.useCallback)((function(e){return t(function(e){return{type:P,payload:{boardId:Object(M.a)(),title:e}}}(e))}),[t]),l=Object(r.useCallback)((function(a){e.location.pathname.includes(a)&&e.push("/boards/"),t(function(e){return function(t,a){var n=a(),r=n.boards,c=n.lists,l=r.byId[e].lists,o=l.map((function(e){return c[e].cards})).flat();return t({type:V,payload:{boardId:e,listsIds:l,cardsIds:o}})}}(a))}),[t,e]),o=Object(r.useCallback)((function(e,a){t(function(e,t){return{type:W,payload:{boardId:e,title:t}}}(e,a))}),[t]);return c.a.createElement("nav",{className:"boards-navigation",onWheel:function(e){var t,a=e.target,n=e.currentTarget,r=e.deltaY;(null===(t=a)||void 0===t?void 0:t.closest(".field-editor.edit"))||n.scrollTo({left:n.scrollLeft+r*E.HORIZONTAL_SCROLLING_SPEED_FACTOR})}},c.a.createElement("ul",null,a.map((function(e){return c.a.createElement("li",{key:e},c.a.createElement(ae,{id:e,onDelete:l,onEdit:o}))}))),c.a.createElement(ne,{onCreate:n}))},ce=function(){var e=Object(u.a)();return c.a.createElement(ee,{message:e.formatMessage({id:"app/page404",defaultMessage:"Such page doesn't exist"})})},le=function(){var e=Object(u.a)();return c.a.createElement("span",{className:"photo-signature"},e.formatMessage({id:"app/photo-by",defaultMessage:"Photo by"})," ",c.a.createElement("a",{href:"https://www.pexels.com/@splitshire",target:"_blank",rel:"noopener noreferrer"},"SplitShire"),"."," ",e.formatMessage({id:"app/downloaded-from",defaultMessage:"Downloaded from"})," ",c.a.createElement("a",{href:"https://www.pexels.com/",target:"_blank",rel:"noopener noreferrer"},"Pexels.com"))},oe=function(){var e=Object(s.d)((function(e){return e.locale.languageCode}));return c.a.createElement(d.a,{locale:e,messages:f[e].translation},c.a.createElement(j,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/",exact:!0,component:S}),c.a.createElement(b.a,{path:"/boards",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(re,null),c.a.createElement(b.a,{path:"/boards/:id",component:te}))}}),c.a.createElement(b.a,{path:"*",component:ce})),c.a.createElement(le,null))},ie=a(14),se=a(59),de=a(60),ue=a(61),be=function(){try{var e=JSON.stringify(Ye.getState());localStorage.setItem("state",e)}catch(t){return}},fe=a.n(ue)()((function(){Ye.subscribe(be)}),1e3),me=n.SET_LANGUAGE,Ee=null===(J=navigator.language)||void 0===J?void 0:J.slice(0,2),Oe="en";Ee in f&&(Oe=Ee);var pe={languageCode:Oe,languageName:f[Oe].name},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case me:return Object(T.a)(Object(T.a)({},e),n);default:return e}},ve=a(30),je=a(23),Ce=a(13),Ie=k.CREATE_BOARD,Te=k.DELETE_BOARD,Ae=k.CHANGE_BOARD,De=k.MOVE_LIST,Ne=O.CREATE_LIST,he=O.DELETE_LIST,ye={byId:{},allIds:[]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Ie:var r=n,c=r.boardId,l=r.title,o=Object(T.a)(Object(T.a)({},e.byId),{},Object(Ce.a)({},c,{id:c,title:l,lists:[]}));return Object(T.a)(Object(T.a)({},e),{},{byId:o,allIds:[].concat(Object(je.a)(e.allIds),[c])});case Te:var i=n,s=i.boardId,d=e.byId,u=(d[s],Object(C.a)(d,[s].map(ve.a))),b=e.allIds.filter((function(e){return e!==s}));return Object(T.a)(Object(T.a)({},e),{},{byId:u,allIds:b});case Ae:var f=n,m=f.boardId,E=f.title,O=Object(T.a)(Object(T.a)({},e.byId),{},Object(Ce.a)({},m,Object(T.a)(Object(T.a)({},e.byId[m]),{},{title:E})));return Object(T.a)(Object(T.a)({},e),{},{byId:O});case De:var p=n,g=p.boardId,v=p.fromIndex,j=p.toIndex,I=Object(T.a)({},e.byId),A=Object(T.a)({},I[g]),D=Object(je.a)(A.lists),N=D.splice(v,1);return D.splice.apply(D,[j,0].concat(Object(je.a)(N))),A.lists=D,I[g]=A,Object(T.a)(Object(T.a)({},e),{},{byId:I});case Ne:var h=n,y=h.boardId,_=h.listId,L=Object(T.a)({},e.byId[y]);L.lists=[].concat(Object(je.a)(L.lists),[_]);var S=Object(T.a)(Object(T.a)({},e.byId),{},Object(Ce.a)({},y,L));return Object(T.a)(Object(T.a)({},e),{},{byId:S});case he:var R=n,M=R.boardId,k=R.listId,w=Object(T.a)({},e.byId[M]);w.lists=w.lists.filter((function(e){return e!==k}));var x=Object(T.a)(Object(T.a)({},e.byId),{},Object(Ce.a)({},M,w));return Object(T.a)(Object(T.a)({},e),{},{byId:x});default:return e}},Le=O.CREATE_LIST,Se=O.DELETE_LIST,Re=O.CHANGE_LIST,Me=O.MOVE_CARD,ke=H.CREATE_CARD,we=H.DELETE_CARD,xe=k.DELETE_BOARD,Ge={},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case Le:var r=n,c=r.listId,l=r.title;return Object(T.a)(Object(T.a)({},e),{},Object(Ce.a)({},c,{id:c,title:l,cards:[]}));case Se:var o=n,i=o.listId,s=(e[i],Object(C.a)(e,[i].map(ve.a)));return Object(T.a)({},s);case Re:var d=n,u=d.listId,b=d.title;return Object(T.a)(Object(T.a)({},e),{},Object(Ce.a)({},u,Object(T.a)(Object(T.a)({},e[u]),{},{title:b})));case ke:var f=n,m=f.listId,E=f.cardId,O=Object(T.a)({},e[m]);return O.cards=[].concat(Object(je.a)(O.cards),[E]),Object(T.a)(Object(T.a)({},e),{},Object(Ce.a)({},m,O));case we:var p=n,g=p.listId,v=p.cardId,j=Object(T.a)({},e[g]);return j.cards=j.cards.filter((function(e){return e!==v})),Object(T.a)(Object(T.a)({},e),{},Object(Ce.a)({},g,j));case Me:var I,A=n,D=A.fromListId,N=A.toListId,h=A.fromIndex,y=A.toIndex,_=Object(T.a)({},e),L=Object(T.a)({},_[D]);L.cards=Object(je.a)(L.cards);var S=L.cards.splice(h,1);_[D]=L;var R=Object(T.a)({},_[N]);return R.cards=Object(je.a)(R.cards),(I=R.cards).splice.apply(I,[y,0].concat(Object(je.a)(S))),_[N]=R,_;case xe:var M=n,k=M.listsIds,w={};for(var x in e)e.hasOwnProperty(x)&&!k.includes(x)&&(w[x]=e[x]);return w;default:return e}},He=H.CREATE_CARD,Pe=H.DELETE_CARD,Ve=H.CHANGE_CARD,We=O.DELETE_LIST,Fe=k.DELETE_BOARD,Je={},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case He:var r=n,c=r.cardId,l=r.content;return Object(T.a)(Object(T.a)({},e),{},Object(Ce.a)({},c,{id:c,content:l}));case Pe:var o=n,i=o.cardId,s=(e[i],Object(C.a)(e,[i].map(ve.a)));return Object(T.a)({},s);case Ve:var d=n,u=d.cardId,b=d.content;return Object(T.a)(Object(T.a)({},e),{},Object(Ce.a)({},u,Object(T.a)(Object(T.a)({},e[u]),{},{content:b})));case We:var f=n,m=f.cardsIds,E={};for(var O in e)e.hasOwnProperty(O)&&!m.includes(O)&&(E[O]=e[O]);return E;case Fe:var p=n,g=p.cardsIds,v={};for(var j in e)e.hasOwnProperty(j)&&!g.includes(j)&&(v[j]=e[j]);return v;default:return e}},ze=Object(ie.combineReducers)({locale:ge,boards:_e,lists:Be,cards:Ze}),Ue=[de.a],Ye=Object(ie.createStore)(ze,function(){try{var e=localStorage.getItem("state");if(!e)return;return JSON.parse(e)}catch(t){return}}(),Object(se.composeWithDevTools)(ie.applyMiddleware.apply(void 0,Ue)));fe(),o.a.render(c.a.createElement(r.StrictMode,null,c.a.createElement(i.a,{basename:"/trello-clone"},c.a.createElement(s.a,{store:Ye},c.a.createElement(oe,null)))),document.getElementById("app"))}},[[64,1,2]]]);
//# sourceMappingURL=main.57237490.chunk.js.map