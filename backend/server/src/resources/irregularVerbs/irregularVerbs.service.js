const IrregularVerbs = require("./irregularVerbs.model");

const create = async (verb) => {
  return await IrregularVerbs.create(verb);
};

const update = async ({ _id, present, past, meaning }) => {
  return await IrregularVerbs.findOneAndUpdate(
    { _id },
    { present, past, meaning },
    { new: true }
  );
};

const find = async () => {
  const verbs = await IrregularVerbs.find().exec();
  return verbs;
};

const findOne = async (_id) => {
  const verb = await IrregularVerbs.findOne({ _id }).exec();
  return verb;
};

const deleteOne = async (_id) => {
  const verb = await IrregularVerbs.findOneAndDelete({ _id }).lean().exec();
  return verb;
};

module.exports = { create, find, findOne, update, deleteOne };
