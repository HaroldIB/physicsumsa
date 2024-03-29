import Experiment from "../models/Experiment";
import State from "../models/State";

export const renderExperiment = async (req, res) => {
  const experiments = await Experiment.find().lean();
  const state = await State.find().lean();
  console.log(experiments);
  console.log(state);
  res.render("index", { states: state, experiments: experiments });
};

export const obtenerExperiment = async (req, res) => {
  const { id } = req.params;
  await Experiment.findById(id)
    .lean()
    .then((data) => res.json(data));
};

export const createExperiment = async (req, res) => {
  try {
    const experiment = Experiment(req.body);
    await experiment.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const plantaCreateExperiment = async (req, res) => {
  try {
    const experiment = Experiment(req.body);
    await experiment.save().then((data) => res.json(data));
  } catch (error) {
    console.log(error);
  }
};

export const renderExperimentEdit = async (req, res) => {
  try {
    const experiment = await Experiment.findById(req.params.id).lean();
    console.log(req.params.id);
    res.render("edit", { experiment: experiment });
  } catch (error) {
    console.log(error);
  }
};

export const editExperiment = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  console.log(req.params.id);
  await Experiment.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteExperiment = async (req, res) => {
  const { id } = req.params;
  await Experiment.findByIdAndDelete(id);
  res.redirect("/");
};

export const experimentSimulation = async (req, res) => {
  const experiment = await Experiment.findById(req.params.id).lean();
  console.log(req.params.id);
  res.render("simulation", { experiment: experiment });
};
