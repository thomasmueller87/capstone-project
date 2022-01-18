import Log from '../models/log.model.js';

const getLogs = async (req, res) => {
  const logs = await Log.find();
  res.json(logs);
};

const postLog = async (req, res) => {
  const log = new Log({
    // Below needs to be edited
    name: req.body.name,
    price: req.body.price,
    isDecorated: req.body.isDecorated,
    category: req.body.category,
    packageSize: req.body.packageSize,
    tags: req.body.tags,
    contactEmail: req.body.contactEmail,
  });

  try {
    const result = await log.save();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

const updateLog = async (req, res) => {
  const logId = req.params.logId;

  const logData = {
    name: req.body.name,
    price: req.body.price,
    isDecorated: req.body.isDecorated,
    category: req.body.category,
    packageSize: req.body.packageSize,
    tags: req.body.tags,
    contactEmail: req.body.contactEmail,
  };

  // TODO: add try catch around this operation
  const result = await Log.findByIdAndUpdate(logId, logData, {
    returnDocument: 'after',
  });

  res.json(result);
};

const deleteLog = async (req, res) => {
  const logId = req.params.logId;

  try {
    const result = await Log.findByIdAndDelete(logId);
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export { deleteLog, getLogs, postLog, updateLog };
