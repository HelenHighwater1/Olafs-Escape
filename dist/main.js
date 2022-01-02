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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// const BKG = document.getElementById(\"bkg\")\nvar BKG = new Image();\nBKG.src = \"images/background.png\";\n\nvar Background = /*#__PURE__*/function () {\n  function Background(dimensions) {\n    _classCallCheck(this, Background);\n\n    this.speed = 1;\n    this.width = dimensions.width;\n    this.height = dimensions.height;\n  }\n\n  _createClass(Background, [{\n    key: \"animate\",\n    value: function animate(ctx) {\n      // const bkg = document.getElementById(\"bkg\")\n      // console.log(bkg)\n      // ctx.drawImage(bkg, 0, 0, this.width, this.height);\n      // console.log(ctx)\n      BKG.addEventListener('load', function (e) {\n        ctx.drawImage(BKG, 0, 0, 600, 1771);\n      });\n    }\n  }]);\n\n  return Background;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmFja2dyb3VuZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxHQUFHLEdBQUcsSUFBSUMsS0FBSixFQUFaO0FBQ0FELEdBQUcsQ0FBQ0UsR0FBSixHQUFVLHVCQUFWOztJQUdNQztBQUNGLHNCQUFZQyxVQUFaLEVBQXdCO0FBQUE7O0FBQ3BCLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsS0FBTCxHQUFhRixVQUFVLENBQUNFLEtBQXhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjSCxVQUFVLENBQUNHLE1BQXpCO0FBSUg7Ozs7V0FFRCxpQkFBUUMsR0FBUixFQUFZO0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFFQVIsTUFBQUEsR0FBRyxDQUFDUyxnQkFBSixDQUFxQixNQUFyQixFQUE2QixVQUFBQyxDQUFDLEVBQUk7QUFDOUJGLFFBQUFBLEdBQUcsQ0FBQ0csU0FBSixDQUFjWCxHQUFkLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEdBQXpCLEVBQThCLElBQTlCO0FBQ0gsT0FGRDtBQUdIOzs7Ozs7QUFPTCwrREFBZUcsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL09sZWdzX0VzY2FwZS8uL3NyYy9iYWNrZ3JvdW5kLmpzP2ZlNzciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgQktHID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJia2dcIilcbmNvbnN0IEJLRyA9IG5ldyBJbWFnZSgpXG5CS0cuc3JjID0gXCJpbWFnZXMvYmFja2dyb3VuZC5wbmdcIlxuXG5cbmNsYXNzIEJhY2tncm91bmQge1xuICAgIGNvbnN0cnVjdG9yKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XG4gICAgICAgIHRoaXMud2lkdGggPSBkaW1lbnNpb25zLndpZHRoXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHRcblxuICAgICAgICBcblxuICAgIH1cblxuICAgIGFuaW1hdGUoY3R4KXtcblxuICAgICAgICAvLyBjb25zdCBia2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJrZ1wiKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhia2cpXG4gICAgICAgIC8vIGN0eC5kcmF3SW1hZ2UoYmtnLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGN0eClcblxuICAgICAgICBCS0cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGUgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShCS0csIDAsIDAsIDYwMCwgMTc3MSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kOyJdLCJuYW1lcyI6WyJCS0ciLCJJbWFnZSIsInNyYyIsIkJhY2tncm91bmQiLCJkaW1lbnNpb25zIiwic3BlZWQiLCJ3aWR0aCIsImhlaWdodCIsImN0eCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/background.js\n");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacles */ \"./src/obstacles.js\");\n/* harmony import */ var _obstacles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_obstacles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ \"./src/background.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game(canvas) {\n    _classCallCheck(this, Game);\n\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.background = new _background__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.dimensions);\n    this.obstacles = []; // this.recieveKeys();\n\n    this.restart();\n  }\n\n  _createClass(Game, [{\n    key: \"play\",\n    value: function play() {\n      this.running = true;\n      this.animate();\n    }\n  }, {\n    key: \"restart\",\n    value: function restart() {\n      this.altitude = 50000; // this.player = new Player();\n\n      this.animate();\n    } // recieveKeys(e){\n    //     if (!this.running) {\n    //         this.play()\n    //     }\n    //     // ADD EVENT LISTENERS - left, right, space\n    // }\n    // gameOver() {\n    //IF Altitude = 0  || collision detected\n    //altitude method should be in...?\n    // collision method in obsticals       \n    // }\n\n  }, {\n    key: \"animate\",\n    value: function animate() {\n      this.background.animate(this.ctx); // this.player.animate(this.ctx)\n      // this.obstacles.animate(this.ctx)\n      // this.drawAltitude()\n      // if (this.gameOver()) {\n      //     alert(this.altitude) //ADD WIN/ LOSE\n      // }\n    }\n  }, {\n    key: \"win\",\n    value: function win() {}\n  }, {\n    key: \"lose\",\n    value: function lose() {}\n  }, {\n    key: \"drawAltitude\",\n    value: function drawAltitude() {\n      this.ctx.font = \"bold 20pt serif\";\n      this.ctx.fillStyle = \"rgba(0, 0, 0, 0.2)\";\n      this.ctx.fillText(this.score, 550, 10);\n      this.ctx.strokeStyle = \"black\";\n      this.ctx.lineWidth = 2;\n    }\n  }]);\n\n  return Game;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFHTUc7QUFDRixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNoQixTQUFLQyxHQUFMLEdBQVdELE1BQU0sQ0FBQ0UsVUFBUCxDQUFrQixJQUFsQixDQUFYO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQjtBQUFFQyxNQUFBQSxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FBaEI7QUFBdUJDLE1BQUFBLE1BQU0sRUFBRUwsTUFBTSxDQUFDSztBQUF0QyxLQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBSVIsbURBQUosQ0FBZSxLQUFLSyxVQUFwQixDQUFsQjtBQUNBLFNBQUtJLFNBQUwsR0FBaUIsRUFBakIsQ0FKZ0IsQ0FLaEI7O0FBQ0EsU0FBS0MsT0FBTDtBQUNIOzs7O1dBRUQsZ0JBQU87QUFDSCxXQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLFdBQUtDLE9BQUw7QUFDSDs7O1dBRUQsbUJBQVU7QUFDTixXQUFLQyxRQUFMLEdBQWdCLEtBQWhCLENBRE0sQ0FFTjs7QUFFQSxXQUFLRCxPQUFMO0FBQ0gsTUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNKOzs7O1dBRUEsbUJBQVM7QUFDTCxXQUFLSixVQUFMLENBQWdCSSxPQUFoQixDQUF3QixLQUFLVCxHQUE3QixFQURLLENBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OztXQUVELGVBQUssQ0FFSjs7O1dBQ0QsZ0JBQU0sQ0FFTDs7O1dBRUQsd0JBQWM7QUFDVixXQUFLQSxHQUFMLENBQVNXLElBQVQsR0FBZ0IsaUJBQWhCO0FBQ0EsV0FBS1gsR0FBTCxDQUFTWSxTQUFULEdBQXFCLG9CQUFyQjtBQUNBLFdBQUtaLEdBQUwsQ0FBU2EsUUFBVCxDQUFrQixLQUFLQyxLQUF2QixFQUE4QixHQUE5QixFQUFtQyxFQUFuQztBQUNBLFdBQUtkLEdBQUwsQ0FBU2UsV0FBVCxHQUF1QixPQUF2QjtBQUNBLFdBQUtmLEdBQUwsQ0FBU2dCLFNBQVQsR0FBcUIsQ0FBckI7QUFFSDs7Ozs7O0FBS0wsK0RBQWVsQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT2xlZ3NfRXNjYXBlLy4vc3JjL2dhbWUuanM/N2RlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IE9ic3RhY2xlcyBmcm9tIFwiLi9vYnN0YWNsZXNcIjtcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gXCIuL2JhY2tncm91bmRcIjtcblxuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHdpZHRoOiBjYW52YXMud2lkdGgsIGhlaWdodDogY2FudmFzLmhlaWdodCB9O1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCh0aGlzLmRpbWVuc2lvbnMpO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IFtdXG4gICAgICAgIC8vIHRoaXMucmVjaWV2ZUtleXMoKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5hbHRpdHVkZSA9IDUwMDAwO1xuICAgICAgICAvLyB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcblxuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICAvLyByZWNpZXZlS2V5cyhlKXtcbiAgICAvLyAgICAgaWYgKCF0aGlzLnJ1bm5pbmcpIHtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheSgpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLy8gQUREIEVWRU5UIExJU1RFTkVSUyAtIGxlZnQsIHJpZ2h0LCBzcGFjZVxuICAgIC8vIH1cblxuICAgIC8vIGdhbWVPdmVyKCkge1xuICAgICAgICAvL0lGIEFsdGl0dWRlID0gMCAgfHwgY29sbGlzaW9uIGRldGVjdGVkXG4gICAgICAgIC8vYWx0aXR1ZGUgbWV0aG9kIHNob3VsZCBiZSBpbi4uLj9cbiAgICAgICAgLy8gY29sbGlzaW9uIG1ldGhvZCBpbiBvYnN0aWNhbHMgICAgICAgXG4gICAgLy8gfVxuXG4gICAgYW5pbWF0ZSgpe1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXIuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gdGhpcy5vYnN0YWNsZXMuYW5pbWF0ZSh0aGlzLmN0eClcbiAgICAgICAgLy8gdGhpcy5kcmF3QWx0aXR1ZGUoKVxuICAgICAgICAvLyBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XG4gICAgICAgIC8vICAgICBhbGVydCh0aGlzLmFsdGl0dWRlKSAvL0FERCBXSU4vIExPU0VcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHdpbigpe1xuICAgIFxuICAgIH1cbiAgICBsb3NlKCl7XG5cbiAgICB9XG5cbiAgICBkcmF3QWx0aXR1ZGUoKXtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiYm9sZCAyMHB0IHNlcmlmXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHRoaXMuc2NvcmUsIDU1MCwgMTApO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gMjtcblxuICAgIH1cbiAgICBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJPYnN0YWNsZXMiLCJCYWNrZ3JvdW5kIiwiR2FtZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwib2JzdGFjbGVzIiwicmVzdGFydCIsInJ1bm5pbmciLCJhbmltYXRlIiwiYWx0aXR1ZGUiLCJmb250IiwiZmlsbFN0eWxlIiwiZmlsbFRleHQiLCJzY29yZSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById('game-canvas');\n  new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFDQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQ0ksa0JBREosRUFFSSxZQUFZO0FBQ1IsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLE1BQUlKLDZDQUFKLENBQVNHLE1BQVQ7QUFDSCxDQUxMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT2xlZ3NfRXNjYXBlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJET01Db250ZW50TG9hZGVkXCIsXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICAgICAgbmV3IEdhbWUoY2FudmFzKTtcbiAgICB9XG4pXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/obstacles.js":
/*!**************************!*\
  !*** ./src/obstacles.js ***!
  \**************************/
/***/ (function() {

eval("// const CONSTANTS = {\n//     ENEMY_HEIGHT = 10,\n//     ENEMY_WIDTH = 30\n// };\n// export default class Obstacles {\n//     constructor() {\n//     }\n//     randomShip(){\n//     }\n//     moveShips(){\n//     }\n//     drawShips(ctx) {\n//         this.eachShip(function (ship) {\n//             const shipImg = new Image()\n//             shipImg.src = \"images/enemy_ship_right.png\"\n//         });\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9PbGVnc19Fc2NhcGUvLi9zcmMvb2JzdGFjbGVzLmpzP2NjYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IENPTlNUQU5UUyA9IHtcbi8vICAgICBFTkVNWV9IRUlHSFQgPSAxMCxcbi8vICAgICBFTkVNWV9XSURUSCA9IDMwXG5cbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlcyB7XG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG5cbi8vICAgICB9XG5cbi8vICAgICByYW5kb21TaGlwKCl7XG5cbi8vICAgICB9XG5cbi8vICAgICBtb3ZlU2hpcHMoKXtcblxuLy8gICAgIH1cblxuLy8gICAgIGRyYXdTaGlwcyhjdHgpIHtcbi8vICAgICAgICAgdGhpcy5lYWNoU2hpcChmdW5jdGlvbiAoc2hpcCkge1xuLy8gICAgICAgICAgICAgY29uc3Qgc2hpcEltZyA9IG5ldyBJbWFnZSgpXG4vLyAgICAgICAgICAgICBzaGlwSW1nLnNyYyA9IFwiaW1hZ2VzL2VuZW15X3NoaXBfcmlnaHQucG5nXCJcbi8vICAgICAgICAgfSk7XG4vLyB9Il0sImZpbGUiOiIuL3NyYy9vYnN0YWNsZXMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/obstacles.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.x = 150;\n    this.y = 150;\n    this.vy = 0;\n    this.width = 30;\n    this.height = 40;\n    this.speed = 1;\n  }\n\n  _createClass(Player, [{\n    key: \"draw\",\n    value: function draw() {\n      ctx.fillStyle = 'red';\n      ctx.fillRect(this.x, this.y, this.width, this.height);\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDRixvQkFBYTtBQUFBOztBQUNULFNBQUtDLENBQUwsR0FBUyxHQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUVIOzs7O1dBSUQsZ0JBQU07QUFDRkMsTUFBQUEsR0FBRyxDQUFDQyxTQUFKLEdBQWdCLEtBQWhCO0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsUUFBSixDQUFhLEtBQUtSLENBQWxCLEVBQXFCLEtBQUtDLENBQTFCLEVBQTZCLEtBQUtFLEtBQWxDLEVBQXlDLEtBQUtDLE1BQTlDO0FBQ0g7Ozs7OztBQUdMLCtEQUFlTCxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vT2xlZ3NfRXNjYXBlLy4vc3JjL3BsYXllci5qcz9hOGEyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy54ID0gMTUwXG4gICAgICAgIHRoaXMueSA9IDE1MFxuICAgICAgICB0aGlzLnZ5ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDMwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDBcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgZHJhdygpe1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JlZCdcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwibmFtZXMiOlsiUGxheWVyIiwieCIsInkiLCJ2eSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/player.js\n");

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