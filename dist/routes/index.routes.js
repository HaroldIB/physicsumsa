"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _experiment = require("../controllers/experiment.controller");

var _state = require("../controllers/state.controller");

var router = (0, _express.Router)();
router.get("/", _experiment.renderExperiment);
router.get("/experiment/:id", _experiment.obtenerExperiment);
router.post("/experiment/add", _experiment.createExperiment);
router.post("/experiment/add/planta", _experiment.plantaCreateExperiment);
router.get("/experiment/:id/edit", _experiment.renderExperimentEdit);
router.post("/experiment/:id/edit", _experiment.editExperiment);
router.get("/experiment/:id/delete", _experiment.deleteExperiment);
router.get("/experiment/:id/simulation", _experiment.experimentSimulation); //API para el proceso del estado.

router.post("/toggleDone/add", _state.createState);
router.get("/toggleDone/62e1939cbc778c37755e34a7/edit", _state.editState);
router.get("/toggleDone/62e1939cbc778c37755e34a7/obtener/planta", _state.obtenerStatePlanta);
router.get("/toggleDone/62e1939cbc778c37755e34a7/edit/planta", _state.editStatePlanta);
var _default = router;
exports["default"] = _default;