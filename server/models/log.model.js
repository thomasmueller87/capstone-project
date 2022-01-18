import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  id: Number,
  date: String,
  time: String,
  duration: Number,
  country: String,
  spot: String,
  airStart: Number,
  airEnd: Number,
  airEan: Number,
  waterDepthMax: Number,
  waterDepthAvg: Number,
  waterTemp: Number,
  notes: String,
  buddy: String,
});

const Log = mongoose.model('Log', logSchema);

export default Log;
