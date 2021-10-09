exports.id = 361;
exports.ids = [361];
exports.modules = {

/***/ 39361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7772);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _Dragzone_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7926);
/* harmony import */ var _Dragzone_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dragzone_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => {
  let text = "";

  if (props.type === "PDF") {
    text = "Drag 'n' drop a PDF here";
  } else if (props.type === "Image") {
    text = "Drag 'n' drop a Image or GIF file here";
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: (_Dragzone_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: (_Dragzone_module_css__WEBPACK_IMPORTED_MODULE_2___default().text),
        children: props.isDragActive ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          align: "center",
          children: "Drop the files here ..."
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Typography, {
          align: "center",
          children: [text, ", or click to ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "outlined",
            children: "Select File"
          })]
        })
      })
    })
  });
});

/***/ }),

/***/ 7926:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Dragzone_container__2Rvew",
	"text": "Dragzone_text__32Ey4"
};


/***/ })

};
;