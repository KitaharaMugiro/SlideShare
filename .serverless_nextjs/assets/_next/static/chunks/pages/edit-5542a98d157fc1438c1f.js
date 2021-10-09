(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[637],{9361:function(e,t,r){"use strict";var n=r(2658),i=r(2642),o=(r(7294),r(1628)),c=r.n(o),a=r(5893);t.Z=function(e){var t="";return"PDF"===e.type?t="Drag 'n' drop a PDF here":"Image"===e.type&&(t="Drag 'n' drop a Image or GIF file here"),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:c().container,children:(0,a.jsx)("div",{className:c().text,children:e.isDragActive?(0,a.jsx)(n.Z,{align:"center",children:"Drop the files here ..."}):(0,a.jsxs)(n.Z,{align:"center",children:[t,", or click to ",(0,a.jsx)(i.Z,{variant:"outlined",children:"Select File"})]})})})})}},7118:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ee}});var n=r(2642),i=r(7294),o=r(2982),c=r(885),a=r(1131),s=(0,a.cn)([]),l=(0,a.cn)(""),d=function(){var e=(0,a.KO)(s),t=(0,c.Z)(e,2),r=t[0],n=t[1],i=(0,a.KO)(l),d=(0,c.Z)(i,2),p=d[0],u=(d[1],r.find((function(e){return e.pageId===p})));return{pageList:r,focusedPage:u,updatePage:function(e){var t=r.findIndex((function(t){return e.pageId===t.pageId}));if(-1===t)return r;var i=[].concat((0,o.Z)(r.slice(0,t)),[e],(0,o.Z)(r.slice(t+1)));n(i)},removePage:function(e){var t=r.findIndex((function(t){return e===t.pageId}));if(-1===t)return r;var i=[].concat((0,o.Z)(r.slice(0,t)),(0,o.Z)(r.slice(t+1)));n(i)}}},p=r(2658),u=r(5893),g=function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{onClick:e.onClick,role:"button",style:x("user-select: none; transition: background 20ms ease-in 0s; cursor: pointer; width: 100%; background: rgba(55, 53, 47, 0.08);"),children:(0,u.jsxs)("div",{style:x("display: flex; align-items: center; line-height: 120%; width: 100%; user-select: none; min-height: 45px; font-size: 14px; padding-top: 4px; padding-bottom: 4px;"),children:[(0,u.jsx)("div",{style:x("display: flex; align-items: center; justify-content: center; margin-left: 14px; margin-top: 1px; align-self: flex-start;"),children:(0,u.jsx)("div",{style:x("width: 100%; height: 100%;"),children:(0,u.jsx)("img",{src:e.imageUrl,style:x("display: block; object-fit: cover; border-radius: 3px; background: white; width: 46px; height: 46px; flex-grow: 0; flex-shrink: 0; box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px;")})})}),(0,u.jsxs)("div",{style:x("margin-left: 8px; margin-right: 14px; min-width: 0px; flex: 1 1 auto;"),children:[(0,u.jsx)("div",{style:x("white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"),children:(0,u.jsx)("div",{style:x("display: flex; align-items: center;"),children:(0,u.jsx)("span",{style:x("margin-right: 6px;"),children:e.title})})}),(0,u.jsx)("div",{style:x("white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: rgba(55, 53, 47, 0.6); margin-top: 2px; font-size: 12px;"),children:e.description})]})]})})})},x=function(e){var t={};return e.split(";").forEach((function(e){var r=e.split(":"),n=(0,c.Z)(r,2),i=n[0],o=n[1];if(i){var a=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(i.trim());t[a]=o.trim()}})),t},h=function(){var e=d(),t=e.focusedPage,r=e.updatePage;if(!t)return(0,u.jsx)("div",{});var n=function(e){t.type=e,r(t)};return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{style:{width:400},children:[(0,u.jsx)(p.Z,{variant:"h4",align:"center",children:"Pick one below"}),(0,u.jsx)(g,{onClick:function(){return n("text")},imageUrl:"static/page_select/text.png",title:"Text",description:"You can write markdown text"}),(0,u.jsx)("div",{style:{height:5}}),(0,u.jsx)(g,{onClick:function(){return n("image")},imageUrl:"static/page_select/image.png",title:"Image/Gif",description:"Upload your image or embed with a link"}),(0,u.jsx)("div",{style:{height:5}}),(0,u.jsx)(g,{onClick:function(){return n("video")},imageUrl:"static/page_select/video.png",title:"Youtube",description:"Embed with youtube link"})]})})},f=r(4942),j=r(5861),v=r(7757),b=r.n(v),m=r(1389),y=r(9361);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(){var e=d(),t=e.focusedPage,r=e.updatePage,n=function(){var e=(0,j.Z)(b().mark((function e(n){var i,o;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:i=n[0],console.log(i),o=i.size,t.imageAttribute={url:"/static/sample_slide".concat(o%3+1,".png")},r(t);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=(0,m.uI)({onDrop:n,accept:"image/*",multiple:!1}),o=(i.acceptedFiles,i.getRootProps),c=i.getInputProps,a=i.isDragActive;return(0,u.jsx)("div",{children:(0,u.jsxs)("section",O(O({},o({className:"dropzone"})),{},{children:[(0,u.jsx)("input",O({},c())),(0,u.jsx)(y.Z,{type:"Image",isDragActive:a})]}))})},_=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(P,{})})},k=r(1349),Z=r.n(k);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F,C=function(e){var t=(0,i.useState)(750),r=t[0],n=(t[1],r+"px"),o=r/16*9+"px",c={width:n,height:o},a={width:n,height:o,backgroundSize:"".concat(n," ").concat(o)},s=d(),l=s.focusedPage;s.removePage;if(!l)return(0,u.jsx)("div",{});return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{className:Z().paper,style:c,children:(0,u.jsx)("div",{className:Z().picture,style:D({backgroundImage:'url("'.concat(e.imageUrl,'")')},a)})})})},E=function(){var e=d().focusedPage;return e?e.type&&"temp"!==e.type?"image"===e.type?e.imageAttribute&&e.imageAttribute.url?(0,u.jsx)(C,{imageUrl:e.imageAttribute.url}):(0,u.jsx)(_,{}):"video"===e.type?(0,u.jsx)("div",{children:"video"}):"text"===e.type?(0,u.jsx)("div",{children:"text"}):(0,u.jsx)("div",{children:"bug"}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(h,{})}):(0,u.jsx)("div",{})},S=r(5948),z=r(2045),N=r(6867),A=r(7382),U=r(1753),K=r(7976),R=function(){var e=d(),t=e.focusedPage,r=e.removePage,n=(0,i.useState)(null),o=n[0],c=n[1],a=Boolean(o),s=function(e){if("Delete"===e){if(!t)return;r(t.pageId)}c(null)};return(0,u.jsxs)("div",{style:{position:"absolute",top:"10px",right:"10px"},children:[(0,u.jsx)(N.Z,{"aria-label":"more",id:"long-button","aria-controls":"long-menu","aria-expanded":a?"true":void 0,"aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:(0,u.jsx)(K.Z,{})}),(0,u.jsx)(A.Z,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:o,open:a,onClose:s,PaperProps:{style:{width:"20ch"}},children:["Delete"].map((function(e){return(0,u.jsx)(U.Z,{onClick:function(){return s(e)},children:e},e)}))})]})},T={width:320,height:180,margin:5},X=function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{style:{position:"relative",backgroundImage:'url("'.concat(e.imageUrl,'")'),backgroundSize:"".concat(T.width,"px ").concat(T.height,"px"),backgroundRepeat:"no-repeat",width:T.width,height:T.height,margin:"".concat(T.margin,"px"),border:e.isFocus?"1px solid rgba(81, 203, 238, 1)":"1px solid",boxShadow:e.isFocus?"0 0 5px rgba(81, 203, 238, 1)":""},children:(0,u.jsx)(R,{})})})},B=r(168),G=r(6128),L=r(6540),M=G.Z.div(F||(F=(0,B.Z)(["\n    border-radius: 25px;\n    margin:","px;\n    padding:10px;\n    border: 2px dotted gray;\n    width: ","px;\n    min-width: ","px;\n    height: ","px;\n    display: grid;\n    place-content: center;\n    cursor: pointer;\n    :hover {\n        filter: brightness(50%);\n    }\n"])),T.margin,T.width,T.width,T.height),W=function(e){return(0,u.jsx)(M,{onClick:e.onClick,children:(0,u.jsx)(L.Z,{style:{color:"gray",fontSize:40}})})},Y=function(e){return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{style:{position:"relative",width:T.width,height:T.height,margin:"".concat(T.margin,"px"),border:e.isFocus?"1px solid rgba(81, 203, 238, 1)":"1px solid",boxShadow:e.isFocus?"0 0 5px rgba(81, 203, 238, 1)":""},children:[(0,u.jsx)(R,{}),e.text]})})};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=function(){var e=(0,a.KO)(s),t=(0,c.Z)(e,2),r=t[0],n=t[1],i=(0,a.KO)(l),d=(0,c.Z)(i,2),p=d[0],g=d[1],x=function(){var e={pageId:z.Z(),type:"temp",order:0};g(e.pageId),n([].concat((0,o.Z)(r),[e]))},h=function(e){var t,r=e.pageId===p;return"temp"===e.type?(0,u.jsx)(Y,{text:"",isFocus:r}):"image"===e.type&&null!==(t=e.imageAttribute)&&void 0!==t&&t.url?(0,u.jsx)(X,{imageUrl:e.imageAttribute.url,isFocus:r}):(0,u.jsx)(Y,{text:"",isFocus:r})},f=function(){return r.map((function(e,t){return(0,u.jsx)(S._l,{draggableId:e.pageId,index:t,children:function(t){return(0,u.jsx)("div",q(q(q({onClick:function(){return t=e.pageId,void g(t);var t},ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:h(e)}))}},e.pageId)}))};return(0,u.jsx)(S.Z5,{onDragEnd:function(e){var t=e.source.index,i=e.destination.index,o=Array.from(r),a=o.splice(t,1),s=(0,c.Z)(a,1)[0];o.splice(i,0,s),n(o)},children:(0,u.jsx)(S.bK,{droppableId:"test",direction:"horizontal",children:function(e){return(0,u.jsxs)("div",q(q({style:{display:"flex",padding:20,overflowX:"scroll"}},e.droppableProps),{},{ref:e.innerRef,children:[f(),e.placeholder,(0,u.jsx)(W,{onClick:x})]}))}})})},Q=r(6580),V=r.n(Q),$=r(6307),ee=function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(J,{}),(0,u.jsx)("div",{className:V().edit_or_preview_container,children:(0,u.jsx)(E,{})}),(0,u.jsx)("div",{style:{position:"absolute",right:20,bottom:20},children:(0,u.jsx)(n.Z,{onClick:function(){},href:"/slide/debug",size:"large",variant:"contained",endIcon:(0,u.jsx)($.Z,{}),children:"Send"})})]})}},7231:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edit",function(){return r(7118)}])},1349:function(e){e.exports={paper:"ImagePreview_paper__2WWlp",picture:"ImagePreview_picture__2KMd1"}},1628:function(e){e.exports={container:"Dragzone_container__2Rvew",text:"Dragzone_text__32Ey4"}},6580:function(e){e.exports={edit_or_preview_container:"edit_edit_or_preview_container__2SgBg"}}},function(e){e.O(0,[630,751,374,401,774,888,179],(function(){return t=7231,e(e.s=t);var t}));var t=e.O();_N_E=t}]);