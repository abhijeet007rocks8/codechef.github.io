webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIvbmF2LXN0eWxlcy5qcyJdLCJuYW1lcyI6WyJOYXYiLCJzdHlsZWQiLCJkaXYiLCJOYXZNZW51IiwiTW9iTmF2IiwiTmF2SXRlbSIsIkxvZ28iLCJpbWciLCJNZW51V3JhcHBlciIsIk1vYk5hdm1lbnUiLCJNb2JOYXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtS0FBVDtBQWNBLElBQU1DLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3TEFBYjtBQWFBLElBQU1FLE1BQU0sR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyR0FBWjtBQVNBLElBQU1HLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxzWkFBYjtBQWtDQSxJQUFNSSxJQUFJLEdBQUdMLHlEQUFNLENBQUNNLEdBQVY7QUFBQTtBQUFBO0FBQUEsaUxBQVY7QUFrQkEsSUFBTUMsV0FBVyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVSQUFqQjtBQWtCQSxJQUFNTyxVQUFVLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEJBQWhCO0FBSUEsSUFBTVEsVUFBVSxHQUFHVCx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDZJQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTE5OTBkNWM1M2Y2MzkyMDNkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9IHN0eWxlZC5kaXZgXHJcbnBvc2l0aW9uOiBzdGlja3k7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmJhY2tncm91bmQ6IzRhNzRmNTtcclxudG9wOjA7XHJcbmxlZnQ6MDtcclxuZmxleC1kaXJlY3Rpb246cm93OyBcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5hbGlnbi1pdGVtczpjZW50ZXI7XHJcbnBhZGRpbmc6IDAuMnJlbTtcclxuei1pbmRleDogMTI7XHJcbmA7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdk1lbnUgPSBzdHlsZWQuZGl2YFxyXG5kaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpyb3c7XHJcbndpZHRoOmZpdC1jb250ZW50O1xyXG5tYXJnaW4tcmlnaHQ6MTVyZW07XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6OHJlbTtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYk5hdiA9IHN0eWxlZC5kaXZgXHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICB0cmFuc2l0aW9uOjEuMHM7XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufSAgICBcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6XCItYXBwbGUtc3lzdGVtXCIsc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICB3aWR0aDpmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjo0JTtcclxuICAgIHBhZGRpbmc6NHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuNDVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLy8gdHJhbnNpdGlvbjpjb2xvciAwLjQ1cyBlYXNlLWluLW91dDtcclxuICAgIC8vIHRyYW5zaXRpb246Ym9yZGVyIDAuNDVzIGVhc2UtaW4tb3V0O1xyXG4gICAgXHJcblxyXG4gIDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgICBjb2xvcjojMGQ2ZWZkO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAmOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgICAgZm9udC1zaXplOjEuM3JlbTtcclxuICAgICAgbWFyZ2luOjMlO1xyXG4gIH1cclxuICBAbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZm9udC1zaXplOjEuMXJlbTtcclxuICAgICAgbWFyZ2luOjIlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmltZ2BcclxuICAgICB3aWR0aDoxODBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICAgICBtYXJnaW4tbGVmdDozcmVtO1xyXG5cclxuICAgICBAbWVkaWEgIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoycmVtO1xyXG4gICAgICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjVweCkge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWVudVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG5wb3NpdGlvbjogZml4ZWQ7XHJcbnRvcDogMDtcclxubGVmdDogMDtcclxuei1pbmRleDogNDtcclxud2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XHJcbmhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuYmFja2dyb3VuZDogIzBkNmVmZDtcclxuZGlzcGxheTogZmxleDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbm9wYWNpdHk6MC45NTtcclxudHJhbnNpdGlvbjogZGlzcGxheSAuMzVzIGVhc2UtaW4tb3V0O1xyXG5AbWVkaWEgIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuIGRpc3BsYXk6bm9uZTtcclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1vYk5hdm1lbnUgPSBzdHlsZWQuZGl2YFxyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTW9iTmF2SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBhbGlnbi10ZXh0OmNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuXHJcbiAgOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICBjb2xvcjojMGQ2ZWZkO1xyXG4gIH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==