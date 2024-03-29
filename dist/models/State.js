"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var stateSchema = new _mongoose.Schema({
  state: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("state", stateSchema);

exports["default"] = _default;