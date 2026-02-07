const mongoose = require('mongoose');

const techStackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Technology name is required'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Frontend', 'Backend', 'Database', 'Framework', 'Tools'],
    trim: true
  },
  year: {
    type: String,
    required: [true, 'Year is required'],
    trim: true
  },
  paradigm: {
    type: String,
    required: [true, 'Paradigm is required'],
    trim: true
  },
  features: {
    type: [String],
    default: []
  },
  useCases: {
    type: [String],
    default: []
  },
  icon: {
    type: String,
    required: [true, 'Icon name is required'],
    trim: true
  },
  gradient: {
    type: String,
    required: [true, 'Gradient is required'],
    trim: true
  },
  difficulty: {
    type: String,
    required: [true, 'Difficulty is required'],
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    trim: true
  },
  topics: {
    type: [{
      id: { type: Number, required: true },
      title: { type: String, required: true, trim: true },
      description: { type: String, required: true, trim: true },
      content: { type: String, default: '' }, // Rich text HTML content
      subtopics: { type: [String], default: [] },
      isIntro: { type: Boolean, default: false }
    }],
    default: []
  },
  resources: {
    type: [{
      title: { type: String, required: true, trim: true },
      url: { type: String, required: true, trim: true },
      type: {
        type: String,
        required: true,
        enum: ['Official', 'Tutorial', 'Documentation', 'Video', 'Article'],
        trim: true
      }
    }],
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for faster queries
techStackSchema.index({ category: 1, isActive: 1 });
techStackSchema.index({ name: 1 });

// Transform output
techStackSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

const TechStack = mongoose.model('TechStack', techStackSchema);

module.exports = TechStack;

