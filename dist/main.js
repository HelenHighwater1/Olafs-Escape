/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar BKG = new Image();\nBKG.src = \"images/background.png\";\n\nvar Background = /*#__PURE__*/function () {\n  function Background(dimensions, ctx) {\n    _classCallCheck(this, Background);\n\n    this.ctx = ctx;\n    this.speed = 1;\n    this.width = dimensions.width;\n    this.height = dimensions.height;\n    this.y = 0;\n    this.gameWon = false;\n  }\n\n  _createClass(Background, [{\n    key: \"animate\",\n    value: function animate() {\n      var _this = this;\n\n      BKG.addEventListener('load', function (e) {\n        _this.ctx.drawImage(BKG, 0, 0, 600, 1771); // this.scroll(this.ctx)\n\n      });\n    }\n  }, {\n    key: \"scroll\",\n    value: function scroll() {\n      console.log('SCROLL');\n      this.ctx.clearRect(0, 0, 600, 400);\n      this.ctx.drawImage(BKG, 0, this.y, 1200, 4000, 0, 0, 600, 1771);\n      this.y += this.speed;\n\n      if (this.y >= 2400) {\n        return this.gameWon = true;\n      } else {\n        window.requestAnimationFrame(this.scroll.bind(this));\n      }\n    }\n  }]);\n\n  return Background;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2dyb3VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjtBQUNBRCxHQUFHLENBQUNFLEdBQUosR0FBVSx1QkFBVjs7SUFHTUM7QUFDRixzQkFBWUMsVUFBWixFQUF3QkMsR0FBeEIsRUFBNkI7QUFBQTs7QUFDekIsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFILFVBQVUsQ0FBQ0csS0FBeEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNKLFVBQVUsQ0FBQ0ksTUFBekI7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFmO0FBQ0g7Ozs7V0FFRCxtQkFBUztBQUFBOztBQUNMVixNQUFBQSxHQUFHLENBQUNXLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFVBQUFDLENBQUMsRUFBSTtBQUM5QixhQUFJLENBQUNQLEdBQUwsQ0FBU1EsU0FBVCxDQUFtQmIsR0FBbkIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsR0FBOUIsRUFBbUMsSUFBbkMsRUFEOEIsQ0FHOUI7O0FBR0gsT0FORDtBQVFIOzs7V0FFRCxrQkFBUTtBQUNKYyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBS1YsR0FBTCxDQUFTVyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCO0FBQ0EsV0FBS1gsR0FBTCxDQUFTUSxTQUFULENBQW1CYixHQUFuQixFQUF3QixDQUF4QixFQUEyQixLQUFLUyxDQUFoQyxFQUFtQyxJQUFuQyxFQUF5QyxJQUF6QyxFQUErQyxDQUEvQyxFQUFrRCxDQUFsRCxFQUFxRCxHQUFyRCxFQUEwRCxJQUExRDtBQUNBLFdBQUtBLENBQUwsSUFBVSxLQUFLSCxLQUFmOztBQUNBLFVBQUksS0FBS0csQ0FBTCxJQUFVLElBQWQsRUFBb0I7QUFDaEIsZUFBTyxLQUFLQyxPQUFMLEdBQWUsSUFBdEI7QUFDSCxPQUZELE1BRU87QUFDSE8sUUFBQUEsTUFBTSxDQUFDQyxxQkFBUCxDQUE2QixLQUFLQyxNQUFMLENBQVlDLElBQVosQ0FBaUIsSUFBakIsQ0FBN0I7QUFDSDtBQUVKOzs7Ozs7QUFTTCwrREFBZWpCLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PbGVnc19Fc2NhcGUvLi9zcmMvYmFja2dyb3VuZC5qcz9mZTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3QgQktHID0gbmV3IEltYWdlKClcbkJLRy5zcmMgPSBcImltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiXG5cblxuY2xhc3MgQmFja2dyb3VuZCB7XG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucywgY3R4KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxO1xuICAgICAgICB0aGlzLndpZHRoID0gZGltZW5zaW9ucy53aWR0aFxuICAgICAgICB0aGlzLmhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0XG4gICAgICAgIHRoaXMueSA9IDBcbiAgICAgICAgdGhpcy5nYW1lV29uID0gZmFsc2VcbiAgICB9XG5cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIEJLRy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoQktHLCAwLCAwLCA2MDAsIDE3NzEpO1xuICAgIFxuICAgICAgICAgICAgLy8gdGhpcy5zY3JvbGwodGhpcy5jdHgpXG5cbiBcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBzY3JvbGwoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1NDUk9MTCcpXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCA2MDAsIDQwMClcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKEJLRywgMCwgdGhpcy55LCAxMjAwLCA0MDAwLCAwLCAwLCA2MDAsIDE3NzEpO1xuICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZFxuICAgICAgICBpZiAodGhpcy55ID49IDI0MDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbWVXb24gPSB0cnVlXG4gICAgICAgIH0gZWxzZSB7IFxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnNjcm9sbC5iaW5kKHRoaXMpKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiBcblxufSAgIFxuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7Il0sIm5hbWVzIjpbIkdhbWUiLCJCS0ciLCJJbWFnZSIsInNyYyIsIkJhY2tncm91bmQiLCJkaW1lbnNpb25zIiwiY3R4Iiwic3BlZWQiLCJ3aWR0aCIsImhlaWdodCIsInkiLCJnYW1lV29uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkcmF3SW1hZ2UiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJSZWN0Iiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2Nyb2xsIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/background.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_obstacles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\n/* harmony import */ var _mothership__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mothership */ \"./src/mothership.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas) {\n    _classCallCheck(this, Game);\n\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.background = new _background__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.dimensions, this.ctx);\n    this.mothership = new _mothership__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.ctx); // this.obstacles = []\n\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx); // this.recieveKeys();\n\n    this.restart();\n  }\n\n  _createClass(Game, [{\n    key: \"play\",\n    value: function play() {\n      this.running = true;\n      this.animate();\n    }\n  }, {\n    key: \"restart\",\n    value: function restart() {\n      this.altitude = 50000; // this.player = new Player();\n\n      this.animate(); // this.scroll()\n    } // recieveKeys(e){\n    //     if (!this.running) {\n    //         this.play()\n    //     }\n    //     // ADD EVENT LISTENERS - left, right, space\n    // }\n    // gameOver() {\n    //IF Altitude = 0  || collision detected\n    //altitude method should be in...?\n    // collision method in obsticals       \n    // }\n\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      this.background.animate();\n      this.mothership.animate();\n      this.player.animate(); // this.obstacles.animate(this.ctx)\n      // this.drawAltitude()\n      // if (this.gameOver()) {\n      //     alert(this.altitude) //ADD WIN/ LOSE\n      // }\n    } // win(){\n    // }\n    // lose(){\n    // }\n    // drawAltitude(){\n    //     this.ctx.font = \"bold 20pt serif\";\n    //     this.ctx.fillStyle = \"rgba(0, 0, 0, 0.2)\";\n    //     this.ctx.fillText(this.score, 550, 10);\n    //     this.ctx.strokeStyle = \"black\";\n    //     this.ctx.lineWidth = 2;\n    // }\n\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUk7QUFDRixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNoQixTQUFLQyxHQUFMLEdBQVdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQjtBQUFFQyxNQUFBQSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FBaEI7QUFBdUJDLE1BQUFBLE1BQU0sRUFBRUwsTUFBTSxDQUFDSztBQUF0QyxLQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBSVQsbURBQUosQ0FBZSxLQUFLTSxVQUFwQixFQUFnQyxLQUFLRixHQUFyQyxDQUFsQjtBQUNBLFNBQUtNLFVBQUwsR0FBa0IsSUFBSVQsbURBQUosQ0FBZSxLQUFLRyxHQUFwQixDQUFsQixDQUpnQixDQUtoQjs7QUFDQSxTQUFLTyxNQUFMLEdBQWMsSUFBSWIsK0NBQUosQ0FBVyxLQUFLTSxHQUFoQixDQUFkLENBTmdCLENBT2hCOztBQUVBLFNBQUtRLE9BQUw7QUFDSDs7OztXQUVELGdCQUFPO0FBQ0gsV0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLQyxPQUFMO0FBQ0g7OztXQUVELG1CQUFVO0FBQ04sV0FBS0MsUUFBTCxHQUFnQixLQUFoQixDQURNLENBRU47O0FBRUEsV0FBS0QsT0FBTCxHQUpNLENBS047QUFDSCxNQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0k7QUFDQTtBQUNBO0FBQ0o7Ozs7V0FFQSxtQkFBUztBQUNMLFdBQUtMLFVBQUwsQ0FBZ0JLLE9BQWhCO0FBQ0EsV0FBS0osVUFBTCxDQUFnQkksT0FBaEI7QUFDQSxXQUFLSCxNQUFMLENBQVlHLE9BQVosR0FISyxDQUlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxNQUVEO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLSiwrREFBZVosSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL09sZWdzX0VzY2FwZS8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBPYnN0YWNsZXMgZnJvbSBcIi4vb2JzdGFjbGVzXCI7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgTW90aGVyc2hpcCBmcm9tIFwiLi9tb3RoZXJzaGlwXCI7XG5cbmNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGNhbnZhcy53aWR0aCwgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0IH07XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKHRoaXMuZGltZW5zaW9ucywgdGhpcy5jdHgpO1xuICAgICAgICB0aGlzLm1vdGhlcnNoaXAgPSBuZXcgTW90aGVyc2hpcCh0aGlzLmN0eClcbiAgICAgICAgLy8gdGhpcy5vYnN0YWNsZXMgPSBbXVxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jdHgpXG4gICAgICAgIC8vIHRoaXMucmVjaWV2ZUtleXMoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWx0aXR1ZGUgPSA1MDAwMDtcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5cbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsKClcbiAgICB9XG5cbiAgICAvLyByZWNpZXZlS2V5cyhlKXtcbiAgICAvLyAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheSgpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8gQUREIEVWRU5UIExJU1RFTkVSUyAtIGxlZnQsIHJpZ2h0LCBzcGFjZVxuICAgIC8vIH1cblxuICAgIC8vIGdhbWVPdmVyKCkge1xuICAgICAgICAvL0lGIEFsdGl0dWRlID0gMCAgfHwgY29sbGlzaW9uIGRldGVjdGVkXG4gICAgICAgIC8vYWx0aXR1ZGUgbWV0aG9kIHNob3VsZCBiZSBpbi4uLj9cbiAgICAgICAgLy8gY29sbGlzaW9uIG1ldGhvZCBpbiBvYnN0aWNhbHMgICAgICAgXG4gICAgLy8gfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuYW5pbWF0ZSgpXG4gICAgICAgIHRoaXMubW90aGVyc2hpcC5hbmltYXRlKClcbiAgICAgICAgdGhpcy5wbGF5ZXIuYW5pbWF0ZSgpXG4gICAgICAgIC8vIHRoaXMub2JzdGFjbGVzLmFuaW1hdGUodGhpcy5jdHgpXG4gICAgICAgIC8vIHRoaXMuZHJhd0FsdGl0dWRlKClcbiAgICAgICAgLy8gaWYgKHRoaXMuZ2FtZU92ZXIoKSkge1xuICAgICAgICAvLyAgICAgYWxlcnQodGhpcy5hbHRpdHVkZSkgLy9BREQgV0lOLyBMT1NFXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvLyB3aW4oKXtcbiAgICBcbiAgICAvLyB9XG4gICAgLy8gbG9zZSgpe1xuXG4gICAgLy8gfVxuXG4gICAgLy8gZHJhd0FsdGl0dWRlKCl7XG4gICAgLy8gICAgIHRoaXMuY3R4LmZvbnQgPSBcImJvbGQgMjBwdCBzZXJpZlwiO1xuICAgIC8vICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgIC8vICAgICB0aGlzLmN0eC5maWxsVGV4dCh0aGlzLnNjb3JlLCA1NTAsIDEwKTtcbiAgICAvLyAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgLy8gICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDI7XG5cbiAgICAvLyB9XG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwibmFtZXMiOlsiUGxheWVyIiwiT2JzdGFjbGVzIiwiQmFja2dyb3VuZCIsIk1vdGhlcnNoaXAiLCJHYW1lIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJtb3RoZXJzaGlwIiwicGxheWVyIiwicmVzdGFydCIsInJ1bm5pbmciLCJhbmltYXRlIiwiYWx0aXR1ZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('game-canvas');\n  new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQ0ksa0JBREosRUFFSSxZQUFZO0FBQ1IsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLE1BQUlKLDZDQUFKLENBQVNHLE1BQVQ7QUFDSCxDQUxMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT2xlZ3NfRXNjYXBlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJET01Db250ZW50TG9hZGVkXCIsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICAgICAgbmV3IEdhbWUoY2FudmFzKTtcbiAgICB9XG4pXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/mothership.js":
/*!***************************!*\
  !*** ./src/mothership.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Mothership; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar MSHIP = new Image();\nMSHIP.src = \"images/mothership.png\";\n\nvar Mothership = /*#__PURE__*/function () {\n  function Mothership(ctx) {\n    _classCallCheck(this, Mothership);\n\n    this.ctx = ctx;\n    this.y = -70;\n    this.width = 350;\n    this.height = 350;\n  }\n\n  _createClass(Mothership, [{\n    key: \"animate\",\n    value: function animate() {\n      var _this = this;\n\n      addEventListener('load', function (e) {\n        _this.ctx.drawImage(MSHIP, 400, _this.y, _this.width, _this.height);\n      }); // this.drawPlayer()\n    }\n  }]);\n\n  return Mothership;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW90aGVyc2hpcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLElBQUlDLEtBQUosRUFBZDtBQUNBRCxLQUFLLENBQUNFLEdBQU4sR0FBWSx1QkFBWjs7SUFHcUJDO0FBQ2pCLHNCQUFZQyxHQUFaLEVBQWdCO0FBQUE7O0FBQ1osU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQUMsRUFBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEdBQWQ7QUFDSDs7OztXQUVELG1CQUFVO0FBQUE7O0FBQ05DLE1BQUFBLGdCQUFnQixDQUFDLE1BQUQsRUFBUyxVQUFBQyxDQUFDLEVBQUk7QUFDMUIsYUFBSSxDQUFDTCxHQUFMLENBQVNNLFNBQVQsQ0FBbUJWLEtBQW5CLEVBQTBCLEdBQTFCLEVBQStCLEtBQUksQ0FBQ0ssQ0FBcEMsRUFBdUMsS0FBSSxDQUFDQyxLQUE1QyxFQUFtRCxLQUFJLENBQUNDLE1BQXhEO0FBQ0gsT0FGZSxDQUFoQixDQURNLENBSU47QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL09sZWdzX0VzY2FwZS8uL3NyYy9tb3RoZXJzaGlwLmpzPzUwZmQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTVNISVAgPSBuZXcgSW1hZ2UoKVxuTVNISVAuc3JjID0gXCJpbWFnZXMvbW90aGVyc2hpcC5wbmdcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdGhlcnNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMueSA9IC03MFxuICAgICAgICB0aGlzLndpZHRoID0gMzUwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMzUwXG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKE1TSElQLCA0MDAsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5kcmF3UGxheWVyKClcbiAgICB9XG59Il0sIm5hbWVzIjpbIk1TSElQIiwiSW1hZ2UiLCJzcmMiLCJNb3RoZXJzaGlwIiwiY3R4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/mothership.js\n");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/***/ (function() {

eval("// const CONSTANTS = {\n//     ENEMY_HEIGHT = 10,\n//     ENEMY_WIDTH = 30\n// };\n// export default class Obstacles {\n//     constructor() {\n//     }\n//     randomShip(){\n//     }\n//     moveShips(){\n//     }\n//     drawShips(ctx) {\n//         this.eachShip(function (ship) {\n//             const shipImg = new Image()\n//             shipImg.src = \"images/enemy_ship_right.png\"\n//         });\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PbGVnc19Fc2NhcGUvLi9zcmMvb2JzdGFjbGVzLmpzP2NjYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IENPTlNUQU5UUyA9IHtcbi8vICAgICBFTkVNWV9IRUlHSFQgPSAxMCxcbi8vICAgICBFTkVNWV9XSURUSCA9IDMwXG5cbi8vIH07XG5cblxuXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZXMge1xuLy8gICAgIGNvbnN0cnVjdG9yKCkge1xuXG4vLyAgICAgfVxuXG4vLyAgICAgcmFuZG9tU2hpcCgpe1xuXG4vLyAgICAgfVxuXG4vLyAgICAgbW92ZVNoaXBzKCl7XG5cbi8vICAgICB9XG5cbi8vICAgICBkcmF3U2hpcHMoY3R4KSB7XG4vLyAgICAgICAgIHRoaXMuZWFjaFNoaXAoZnVuY3Rpb24gKHNoaXApIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHNoaXBJbWcgPSBuZXcgSW1hZ2UoKVxuLy8gICAgICAgICAgICAgc2hpcEltZy5zcmMgPSBcImltYWdlcy9lbmVteV9zaGlwX3JpZ2h0LnBuZ1wiXG4vLyAgICAgICAgIH0pO1xuLy8gfVxuXG4iXSwiZmlsZSI6Ii4vc3JjL29ic3RhY2xlcy5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/obstacles.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar OLAF = new Image();\nOLAF.src = \"images/gliding_left.png\";\n\nvar Player = /*#__PURE__*/function () {\n  function Player(ctx) {\n    _classCallCheck(this, Player);\n\n    this.ctx = ctx;\n    this.x = 400;\n    this.y = 100;\n    this.velo = 0;\n    this.width = 80;\n    this.height = 80;\n    this.speed = 1;\n  }\n\n  _createClass(Player, [{\n    key: \"animate\",\n    value: function animate() {\n      var _this = this;\n\n      addEventListener('load', function (e) {\n        _this.ctx.drawImage(OLAF, _this.x, _this.y, _this.width, _this.height);\n      }); // this.drawPlayer()\n    } // drawPlayer(){\n    //     this.ctx.fillStyle = 'red'\n    //     this.ctx.fillRect(60, 60, 200, 200)\n    //     // this.ctx.fillRect(this.x, this.y, this.width, this.height)\n    // }\n\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUcsSUFBSUMsS0FBSixFQUFYO0FBQ0FELElBQUksQ0FBQ0UsR0FBTCxHQUFXLHlCQUFYOztJQUVNQztBQUNGLGtCQUFZQyxHQUFaLEVBQWdCO0FBQUE7O0FBQ1osU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsR0FBVDtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBRUg7Ozs7V0FHRCxtQkFBUztBQUFBOztBQUNMQyxNQUFBQSxnQkFBZ0IsQ0FBQyxNQUFELEVBQVMsVUFBQUMsQ0FBQyxFQUFJO0FBQzFCLGFBQUksQ0FBQ1IsR0FBTCxDQUFTUyxTQUFULENBQW1CYixJQUFuQixFQUF5QixLQUFJLENBQUNLLENBQTlCLEVBQWlDLEtBQUksQ0FBQ0MsQ0FBdEMsRUFBeUMsS0FBSSxDQUFDRSxLQUE5QyxFQUFxRCxLQUFJLENBQUNDLE1BQTFEO0FBQ0gsT0FGZSxDQUFoQixDQURLLENBSUw7QUFDSCxNQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFHSiwrREFBZU4sTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL09sZWdzX0VzY2FwZS8uL3NyYy9wbGF5ZXIuanM/YThhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgT0xBRiA9IG5ldyBJbWFnZSgpXG5PTEFGLnNyYyA9IFwiaW1hZ2VzL2dsaWRpbmdfbGVmdC5wbmdcIlxuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGN0eCl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMueCA9IDQwMFxuICAgICAgICB0aGlzLnkgPSAxMDBcbiAgICAgICAgdGhpcy52ZWxvID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDgwO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDgwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoT0xBRiwgdGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuZHJhd1BsYXllcigpXG4gICAgfVxuICAgIC8vIGRyYXdQbGF5ZXIoKXtcbiAgICAvLyAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JlZCdcbiAgICAvLyAgICAgdGhpcy5jdHguZmlsbFJlY3QoNjAsIDYwLCAyMDAsIDIwMClcbiAgICAvLyAgICAgLy8gdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyOyJdLCJuYW1lcyI6WyJPTEFGIiwiSW1hZ2UiLCJzcmMiLCJQbGF5ZXIiLCJjdHgiLCJ4IiwieSIsInZlbG8iLCJ3aWR0aCIsImhlaWdodCIsInNwZWVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PbGVnc19Fc2NhcGUvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;