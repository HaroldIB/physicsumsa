"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderExperimentEdit = exports.renderExperiment = exports.plantaCreateExperiment = exports.obtenerExperiment = exports.experimentSimulation = exports.editExperiment = exports.deleteExperiment = exports.createExperiment = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Experiment = _interopRequireDefault(require("../models/Experiment"));

var _State = _interopRequireDefault(require("../models/State"));

var renderExperiment = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var experiments, state;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Experiment["default"].find().lean();

          case 2:
            experiments = _context.sent;
            _context.next = 5;
            return _State["default"].find().lean();

          case 5:
            state = _context.sent;
            console.log(experiments);
            console.log(state);
            res.render("index", {
              states: state,
              experiments: experiments
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function renderExperiment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderExperiment = renderExperiment;

var obtenerExperiment = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _Experiment["default"].findById(id).lean().then(function (data) {
              return res.json(data);
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function obtenerExperiment(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.obtenerExperiment = obtenerExperiment;

var createExperiment = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var experiment;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            experiment = (0, _Experiment["default"])(req.body);
            _context3.next = 4;
            return experiment.save();

          case 4:
            res.redirect("/");
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function createExperiment(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createExperiment = createExperiment;

var plantaCreateExperiment = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var experiment;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            experiment = (0, _Experiment["default"])(req.body);
            _context4.next = 4;
            return experiment.save().then(function (data) {
              return res.json(data);
            });

          case 4:
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function plantaCreateExperiment(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.plantaCreateExperiment = plantaCreateExperiment;

var renderExperimentEdit = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var experiment;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _Experiment["default"].findById(req.params.id).lean();

          case 3:
            experiment = _context5.sent;
            console.log(req.params.id);
            res.render("edit", {
              experiment: experiment
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function renderExperimentEdit(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.renderExperimentEdit = renderExperimentEdit;

var editExperiment = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log(req.body);
            console.log(req.params.id);
            _context6.next = 5;
            return _Experiment["default"].findByIdAndUpdate(id, req.body);

          case 5:
            res.redirect("/");

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function editExperiment(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.editExperiment = editExperiment;

var deleteExperiment = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            id = req.params.id;
            _context7.next = 3;
            return _Experiment["default"].findByIdAndDelete(id);

          case 3:
            res.redirect("/");

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteExperiment(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.deleteExperiment = deleteExperiment;

var experimentSimulation = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var experiment;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Experiment["default"].findById(req.params.id).lean();

          case 2:
            experiment = _context8.sent;
            console.log(req.params.id);
            res.render("simulation", {
              experiment: experiment
            });

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function experimentSimulation(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.experimentSimulation = experimentSimulation;