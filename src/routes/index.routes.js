import { Router } from "express";

import {
  renderExperiment,
  createExperiment,
  renderExperimentEdit,
  editExperiment,
  deleteExperiment,
  experimentSimulation,
  plantaCreateExperiment,
  obtenerExperiment,
} from "../controllers/experiment.controller";

import {
  createState,
  editState,
  editStatePlanta,
} from "../controllers/state.controller";

const router = Router();

router.get("/", renderExperiment);

router.get("/experiment/:id", obtenerExperiment);

router.post("/experiment/add", createExperiment);

router.post("/experiment/add/planta", plantaCreateExperiment);

router.get("/experiment/:id/edit", renderExperimentEdit);

router.post("/experiment/:id/edit", editExperiment);

router.get("/experiment/:id/delete", deleteExperiment);

router.get("/experiment/:id/simulation", experimentSimulation);

//API para el proceso del estado.

router.post("/toggleDone/add", createState);

router.get("/toggleDone/62e1939cbc778c37755e34a7/edit", editState);
router.get("/toggleDone/62e1939cbc778c37755e34a7/edit/planta", editStatePlanta);

export default router;
