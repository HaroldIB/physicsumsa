import State from "../models/State";

export const createState = async (req, res) => {
  try {
    const state = State(req.body);
    await state.save().then((data) => res.json(data));
  } catch (error) {
    console.log(error);
  }
};

export const editState = async (req, res) => {
  try {
    // const { id } = req.params;
    const state = await State.findById("62e1939cbc778c37755e34a7");
    state.state = !state.state;
    await state.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const editStatePlanta = async (req, res) => {
  try {
    const { id } = req.params;
    const state = await State.findById("62e1939cbc778c37755e34a7");
    await state.save().then((data) => res.json(data));
  } catch (error) {
    console.log(error);
  }
};
