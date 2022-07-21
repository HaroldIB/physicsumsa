"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var experimentSchema = new _mongoose.Schema({
  times: {
    type: [Number],
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("experiment", experimentSchema);

exports["default"] = _default;