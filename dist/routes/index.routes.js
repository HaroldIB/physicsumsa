"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _experiment = require("../controllers/experiment.controller");

var router = (0, _express.Router)();
router.get("/", _experiment.renderExperiment);
router.post("/experiment/add", _experiment.createExperiment);
router.post("/experiment/add/planta", _experiment.plantaCreateExperiment);
router.get("/experiment/:id/edit", _experiment.renderExperimentEdit);
router.post("/experiment/:id/edit", _experiment.editExperiment);
router.get("/experiment/:id/delete", _experiment.deleteExperiment);
router.get("/experiment/:id/simulation", _experiment.experimentSimulation);
var _default = router;
exports["default"] = _default;