import mongoose from 'mongoose';

const UpdateSchema = new mongoose.Schema({
  userId: String,
  name: String,
  update: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Update || mongoose.model('Update', UpdateSchema);