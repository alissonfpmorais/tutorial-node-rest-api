import mongoose from 'mongoose'

// Database schema
const TaskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'users' // Collection must be plural the model name
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  done: {
    type: Boolean,
    default: false
  }
})

export default mongoose.model('Task', TaskSchema)
