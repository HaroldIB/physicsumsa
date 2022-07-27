import { Router } from "express";

import {
  renderExperiment,
  createExperiment,
  renderExperimentEdit,
  editExperiment,
  deleteExperiment,
  experimentSimulation,
  plantaCreateExperiment,
} from "../controllers/experiment.controller";

const router = Router();
router.get("/", renderExperiment);

router.post("/experiment/add", createExperiment);

router.post("/experiment/add/planta", plantaCreateExperiment);

router.get("/experiment/:id/edit", renderExperimentEdit);

router.post("/experiment/:id/edit", editExperiment);

router.get("/experiment/:id/delete", deleteExperiment);

router.get("/experiment/:id/simulation", experimentSimulation);
export default router;
