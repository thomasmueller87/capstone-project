import Log from '../models/log.model.js';

const getLogs = async (req, res) => {
  const logs = await Log.find();
  res.json(logs);
};

const postLog = async (req, res) => {
  const log = new Log({
    id: req.body.id,
    date: req.body.date,
    time: req.body.time,
    duration: req.body.duration,
    country: req.body.country,
    spot: req.body.spot,
    airStart: req.body.airStart,
    airEnd: req.body.airEnd,
    airEan: req.body.airEan,
    waterDepthMax: req.body.waterDepthMax,
    waterDepthAvg: req.body.waterDepthAvg,
    waterTemp: req.body.waterTemp,
    notes: req.body.notes,
    buddy: req.body.buddy,
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
    id: req.body.id,
    date: req.body.date,
    time: req.body.time,
    duration: req.body.duration,
    country: req.body.country,
    spot: req.body.spot,
    airStart: req.body.airStart,
    airEnd: req.body.airEnd,
    airEan: req.body.airEan,
    waterDepthMax: req.body.waterDepthMax,
    waterDepthAvg: req.body.waterDepthAvg,
    waterTemp: req.body.waterTemp,
    notes: req.body.notes,
    buddy: req.body.buddy,
  };

  try {
    const result = await Log.findByIdAndUpdate(logId, logData, {
      returnDocument: 'after',
    });
    res.json(result);
  } catch (error) {
    res.json(error);
  }
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
