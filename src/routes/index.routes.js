import { Router } from "express";
import Experiment from "../models/Experiment";

const router = Router();
router.get("/", async (req, res) => {
  const experiments = await Experiment.find().lean();
  console.log(experiments);
  res.render("index", { experiments: experiments });
});

router.post("/experiment/add", async (req, res) => {
  const experiment = Experiment(req.body);
  await experiment.save();
  res.redirect("/");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});
export default router;
