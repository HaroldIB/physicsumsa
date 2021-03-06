import { Router } from "express";

import {
  renderExperiment,
  createExperiment,
  renderExperimentEdit,
  editExperiment,
  deleteExperiment,
  experimentSimulation,
} from "../controllers/experiment.controller";

const router = Router();
router.get("/", renderExperiment);

router.post("/experiment/add", createExperiment);

router.get("/experiment/:id/edit", renderExperimentEdit);

router.post("/experiment/:id/edit", editExperiment);

router.get("/experiment/:id/delete", deleteExperiment);

router.get("/experiment/:id/simulation", experimentSimulation);
export default router;
