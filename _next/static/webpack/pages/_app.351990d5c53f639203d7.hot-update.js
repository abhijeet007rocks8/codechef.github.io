webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Navbar/nav-styles.js":
/*!*****************************************!*\
  !*** ./components/Navbar/nav-styles.js ***!
  \*****************************************/
/*! exports provided: Nav, NavMenu, MobNav, NavItem, Logo, MenuWrapper, MobNavmenu, MobNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenu", function() { return NavMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobNav", function() { return MobNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return NavItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuWrapper", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobNavmenu", function() { return MobNavmenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobNavItem", function() { return MobNavItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "nav-styles__Nav",
  componentId: "h8gn38-0"
})(["position:sticky;display:flex;background:#4a74f5;top:0;left:0;flex-direction:row;justify-content:space-between;align-items:center;padding:0.2rem;z-index:12;"]);
var NavMenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "nav-styles__NavMenu",
  componentId: "h8gn38-1"
})(["display:flex;flex-direction:row;width:fit-content;margin-right:15rem;@media screen and (max-width:767px){display:none;}@media  screen and (max-width:1024px){margin-right:8rem;}"]);
var MobNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "nav-styles__MobNav",
  componentId: "h8gn38-2"
})(["font-size:2rem;margin-right:2rem;transition:1.0s;@media screen and (min-width:767px){display:none;}"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "nav-styles__NavItem",
  componentId: "h8gn38-3"
})(["color:white;font-family:\"-apple-system\",sans-serif;font-size:1.5rem;width:fit-content;margin:4%;padding:4px;font-weight:bolder;transition:background 0.45s ease-in-out;:hover{background:white;color:#0d6efd;border-radius:15px;}&:active{color:black;font-weight:bolder;}@media screen and (max-width:1024px){font-size:1.3rem;margin:3%;}@media  screen and (max-width:768px){font-size:1.1rem;margin:2%;}"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "nav-styles__Logo",
  componentId: "h8gn38-4"
})(["width:180px;margin-bottom:2px;margin-left:3rem;@media  screen and (max-width:768px){margin-left:2rem;width:150px;}@media  screen and (max-width:525px){margin-left:1rem;}"]);
var MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "nav-styles__MenuWrapper",
  componentId: "h8gn38-5"
})(["position:fixed;top:0;left:0;z-index:4;width:-webkit-fill-available;height:-webkit-fill-available;background:#0d6efd;display:flex;align-items:center;justify-content:center;opacity:0.95;transition:display .35s ease-in-out;@media  screen and (min-width:768px){display:none;}"]);
var MobNavmenu = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "nav-styles__MobNavmenu",
  componentId: "h8gn38-6"
})(["text-align:center;"]);
var MobNavItem = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "nav-styles__MobNavItem",
  componentId: "h8gn38-7"
})(["list-style:none;align-text:center;color:white;font-size:1.5rem;padding:0.5rem;font-weight:500;:hover{background:white;color:#0d6efd;}"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/path-to-regexp/node_modules/isarray/index.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvbmF2LXN0eWxlcy5qcyJdLCJuYW1lcyI6WyJOYXYiLCJzdHlsZWQiLCJkaXYiLCJOYXZNZW51IiwiTW9iTmF2IiwiTmF2SXRlbSIsIkxvZ28iLCJpbWciLCJNZW51V3JhcHBlciIsIk1vYk5hdm1lbnUiLCJNb2JOYXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtS0FBVDtBQWNBLElBQU1DLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3TEFBYjtBQWFBLElBQU1FLE1BQU0sR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyR0FBWjtBQVNBLElBQU1HLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzWkFBYjtBQWtDQSxJQUFNSSxJQUFJLEdBQUdMLHlEQUFNLENBQUNNLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUxBQVY7QUFrQkEsSUFBTUMsV0FBVyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVSQUFqQjtBQWtCQSxJQUFNTyxVQUFVLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEJBQWhCO0FBSUEsSUFBTVEsVUFBVSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZJQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjM1MTk5MGQ1YzUzZjYzOTIwM2Q3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2ID0gc3R5bGVkLmRpdmBcclxucG9zaXRpb246IHN0aWNreTtcclxuZGlzcGxheTogZmxleDtcclxuYmFja2dyb3VuZDojNGE3NGY1O1xyXG50b3A6MDtcclxubGVmdDowO1xyXG5mbGV4LWRpcmVjdGlvbjpyb3c7IFxyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmFsaWduLWl0ZW1zOmNlbnRlcjtcclxucGFkZGluZzogMC4ycmVtO1xyXG56LWluZGV4OiAxMjtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTmF2TWVudSA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtZGlyZWN0aW9uOnJvdztcclxud2lkdGg6Zml0LWNvbnRlbnQ7XHJcbm1hcmdpbi1yaWdodDoxNXJlbTtcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIG1hcmdpbi1yaWdodDo4cmVtO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9iTmF2ID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICAgIHRyYW5zaXRpb246MS4wcztcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59ICAgIFxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LWZhbWlseTpcIi1hcHBsZS1zeXN0ZW1cIixzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjEuNXJlbTtcclxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOjQlO1xyXG4gICAgcGFkZGluZzo0cHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC40NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAvLyB0cmFuc2l0aW9uOmNvbG9yIDAuNDVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLy8gdHJhbnNpdGlvbjpib3JkZXIgMC40NXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBcclxuXHJcbiAgOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICAgIGNvbG9yOiMwZDZlZmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICY6YWN0aXZlIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDpib2xkZXI7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgICBmb250LXNpemU6MS4zcmVtO1xyXG4gICAgICBtYXJnaW46MyU7XHJcbiAgfVxyXG4gIEBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBmb250LXNpemU6MS4xcmVtO1xyXG4gICAgICBtYXJnaW46MiU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ28gPSBzdHlsZWQuaW1nYFxyXG4gICAgIHdpZHRoOjE4MHB4O1xyXG4gICAgIG1hcmdpbi1ib3R0b206MnB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OjNyZW07XHJcblxyXG4gICAgIEBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjJyZW07XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhICBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyNXB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MXJlbTtcclxuICAgIH1cclxuYDtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNZW51V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOiBmaXhlZDtcclxudG9wOiAwO1xyXG5sZWZ0OiAwO1xyXG56LWluZGV4OiA0O1xyXG53aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG5iYWNrZ3JvdW5kOiAjMGQ2ZWZkO1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxub3BhY2l0eTowLjk1O1xyXG50cmFuc2l0aW9uOiBkaXNwbGF5IC4zNXMgZWFzZS1pbi1vdXQ7XHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gZGlzcGxheTpub25lO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9iTmF2bWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2JOYXZJdGVtID0gc3R5bGVkLmRpdmBcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGFsaWduLXRleHQ6Y2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG5cclxuICA6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICAgIGNvbG9yOiMwZDZlZmQ7XHJcbiAgfVxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9