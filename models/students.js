import { db } from './index.js';

const studentSchema = db.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error('valor negativo nao permitido');
    },
  },
  lastModified: {
    type: Date,
  },
});

const studentModel = db.mongoose.model('student', studentSchema, 'student');

export { studentModel };
