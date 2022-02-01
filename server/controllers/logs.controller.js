import Log from '../models/log.model.js';
import mongoose from 'mongoose';

const getLogs = async (req, res) => {
  const logs = await Log.find()
    .sort({ date: 'desc' })
    .sort({ time: 'desc' });
  res.json(logs);
};

const importLogs = async (req, res) => {
  const text = req.body;

  const rows = text.split('\r\n');
  const columnHeaders = rows
    .shift() // gibt die erste Zeile (Überschriften) zurück und reduziert die rows um die erste Zeile
    .split('§')
    .map((header) => header.replaceAll('"', ''));
  const logs = rows.map((row) =>
    row.split('§').map((column) => column.replaceAll('"', ''))
  );

  const logsWithKeys = [];
  logs.forEach((log) => {
    const logWithKey = {};
    log.forEach(
      (value, index) =>
        (logWithKey[columnHeaders[index]] = value)
    );
    logsWithKeys.push(logWithKey);
  });

  await dropLogCollection();

  const result = await Log.insertMany(logsWithKeys);
  res.json({ count: rows.length, result });
};

const exportLogs = async (req, res) => {
  const logs = await Log.find();

  res.setHeader('Content-Type', 'text/csv');

  const columns = [
    'date',
    'time',
    'duration',
    'country',
    'spot',
    'airStart',
    'airEnd',
    'airEan',
    'waterDepthMax',
    'waterDepthAvg',
    'waterTemp',
    'notes',
    'buddy',
    'posLat',
    'posLng',
  ];

  res.write(
    columns.map((column) => `"${column}"`).join('§') + '\r\n'
  );

  const csvString = logs
    .map((log) =>
      [
        log.date,
        log.time,
        log.duration,
        log.country,
        log.spot,
        log.airStart,
        log.airEnd,
        log.airEan,
        log.waterDepthMax,
        log.waterDepthAvg,
        log.waterTemp,
        log.notes,
        log.buddy,
        log.posLat,
        log.posLng,
      ]
        .map((property) => `"${property}"`)
        .join('§')
    )
    .join('\r\n');
  res.write(csvString);
  res.end();
};

const getLog = async (req, res) => {
  const logId = req.params.logId;
  const log = await Log.findById(logId);
  res.json(log);
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
    signature: req.body.signature,
    posLat: req.body.posLat,
    posLng: req.body.posLng,
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
    signature: req.body.signature,
    posLat: req.body.posLat,
    posLng: req.body.posLng,
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

const dropLogCollection = async () =>
  await mongoose.connection.dropCollection('logs');

const dropLog = async (req, res) => {
  try {
    dropLogCollection();
    res.json(result);
  } catch (error) {
    res.json(error);
  }
};

export {
  deleteLog,
  getLogs,
  getLog,
  postLog,
  updateLog,
  exportLogs,
  importLogs,
  dropLog,
};
