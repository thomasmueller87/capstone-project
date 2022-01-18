import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  name: String,
  price: Number,
  isDecorated: Boolean,
  category: String,
  packageSize: String,
  tags: Array,
  contactEmail: String,
});

const Log = mongoose.model('Log', logSchema);

export default Log;
