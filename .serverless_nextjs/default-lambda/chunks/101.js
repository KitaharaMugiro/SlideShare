exports.id = 101;
exports.ids = [101];
exports.modules = {

/***/ 54558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(63389);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(9285);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(30713);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(34904);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/index.js
var Button = __webpack_require__(86096);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/IconButton/index.js
var IconButton = __webpack_require__(86024);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Menu.js
var Menu = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/common/MyAppBar.tsx











const MyAppBar = () => {
  return /*#__PURE__*/jsx_runtime.jsx(Box.default, {
    sx: {
      flexGrow: 1
    },
    children: /*#__PURE__*/jsx_runtime.jsx((AppBar_default()), {
      color: "inherit",
      position: "static",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)((Toolbar_default()), {
        children: [/*#__PURE__*/jsx_runtime.jsx((IconButton_default()), {
          size: "large",
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          sx: {
            mr: 2
          },
          children: /*#__PURE__*/jsx_runtime.jsx(Menu/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime.jsx((Typography_default()), {
          variant: "h6",
          component: "div",
          sx: {
            flexGrow: 1
          },
          children: "Slide Share(\u4EEE)"
        }), /*#__PURE__*/jsx_runtime.jsx((Button_default()), {
          color: "inherit",
          children: "Login"
        })]
      })
    })
  });
};

/* harmony default export */ const common_MyAppBar = (MyAppBar);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(common_MyAppBar, {}), /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps))]
  });
};

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 6021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__.default {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("link", {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("body", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})]
      })]
    });
  }

} // `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render
  const originalRenderPage = ctx.renderPage; // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  //   const cache = createEmotionCache();
  //   const { extractCriticalToChunks } = createEmotionServer(cache);
  //   ctx.renderPage = () =>
  //     originalRenderPage({
  //       enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
  //     });

  const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__.default.getInitialProps(ctx); // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  //const emotionStyles = extractCriticalToChunks(initialProps.html);
  // const emotionStyleTags = emotionStyles.styles.map((style) => (
  //     <style
  //         data-emotion={`${style.key} ${style.ids.join(' ')}`}
  //         key={style.key}
  //         // eslint-disable-next-line react/no-danger
  //         dangerouslySetInnerHTML={{ __html: style.css }}
  //     />
  // ));

  return _objectSpread(_objectSpread({}, initialProps), {}, {
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(initialProps.styles)]
  });
};

/***/ }),

/***/ 59521:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 59521;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 97020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/vdPi-KY0sxCtOvdVHUwT5/_buildManifest.js","static/vdPi-KY0sxCtOvdVHUwT5/_ssgManifest.js"],"pages":{"/":["static/chunks/webpack-fb76148cfcfb42ca18eb.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-62b8caa3ccc47893b147.js","static/css/99492b8413865e20907e.css","static/chunks/pages/index-07777529d7a214a432a5.js"],"/_app":["static/chunks/webpack-fb76148cfcfb42ca18eb.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-62b8caa3ccc47893b147.js","static/css/120f2e2270820d49a21f.css","static/chunks/pages/_app-349896d4f8490af1800c.js"],"/_error":["static/chunks/webpack-fb76148cfcfb42ca18eb.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/pages/_error-737a04e9a0da63c9d162.js"],"/edit":["static/chunks/webpack-fb76148cfcfb42ca18eb.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/pages/edit-32afc5de03843a9c90ac.js"],"/upload":["static/chunks/webpack-fb76148cfcfb42ca18eb.js","static/chunks/framework-2191d16384373197bc0a.js","static/chunks/main-62b8caa3ccc47893b147.js","static/chunks/577-af147dd8a9a73a51751b.js","static/css/42eaf99ae24406409202.css","static/chunks/pages/upload-889c7c8ee8d5845dcff4.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ 59450:
/***/ ((module) => {

"use strict";
module.exports = {"Dg":[]};

/***/ })

};
;