import Experiment from "../models/Experiment";
export const renderExperiment = async (req, res) => {
  const experiments = await Experiment.find().lean();
  console.log(experiments);
  res.render("index", { experiments: experiments });
};

export const createExperiment = async (req, res) => {
  try {
    const experiment = Experiment(req.body);
    await experiment.save().then((data) => res.json(data));
    res.redirect("/");
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
