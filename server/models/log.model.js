import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  id: String,
  date: Date,
  time: String,
  duration: String,
  country: String,
  spot: String,
  airStart: String,
  airEnd: String,
  airEan: String,
  waterDepthMax: String,
  waterDepthAvg: String,
  waterTemp: String,
  notes: String,
  buddy: String,
  signature: String,
  posLat: { type: String, default: '' },
  posLng: { type: String, default: '' },
});

const Log = mongoose.model('Log', logSchema);

export default Log;
