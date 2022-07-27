"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerStatePlanta = exports.editStatePlanta = exports.editState = exports.createState = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _State = _interopRequireDefault(require("../models/State"));

var createState = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var state;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            state = (0, _State["default"])(req.body);
            _context.next = 4;
            return state.save().then(function (data) {
              return res.json(data);
            });

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function createState(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createState = createState;

var editState = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var state;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _State["default"].findById("62e1939cbc778c37755e34a7");

          case 3:
            state = _context2.sent;
            state.state = !state.state;
            _context2.next = 7;
            return state.save();

          case 7:
            res.redirect("/");
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function editState(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.editState = editState;

var obtenerStatePlanta = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, state;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return _State["default"].findById("62e1939cbc778c37755e34a7");

          case 4:
            state = _context3.sent;
            _context3.next = 7;
            return state.save().then(function (data) {
              return res.json(data);
            });

          case 7:
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function obtenerStatePlanta(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.obtenerStatePlanta = obtenerStatePlanta;

var editStatePlanta = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var state;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _State["default"].findById("62e1939cbc778c37755e34a7");

          case 3:
            state = _context4.sent;
            state.state = !state.state;
            _context4.next = 7;
            return state.save();

          case 7:
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function editStatePlanta(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.editStatePlanta = editStatePlanta;