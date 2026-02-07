const TechStack = require('../models/TechStack');

// @desc    Get all tech stack items
// @route   GET /api/tech-stack
// @access  Public
exports.getAllTechStack = async (req, res) => {
  try {
    const { category, search, isActive } = req.query;
    
    // Build query
    const query = {};
    
    if (category && category !== 'All') {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }
    
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }
    
    const techStack = await TechStack.find(query).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: techStack.length,
      data: techStack
    });
  } catch (error) {
    console.error('Error fetching tech stack:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching tech stack',
      error: error.message
    });
  }
};

// @desc    Get single tech stack item
// @route   GET /api/tech-stack/:id
// @access  Public
exports.getTechStackById = async (req, res) => {
  try {
    const techStack = await TechStack.findById(req.params.id);
    
    if (!techStack) {
      return res.status(404).json({
        success: false,
        message: 'Tech stack item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: techStack
    });
  } catch (error) {
    console.error('Error fetching tech stack item:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching tech stack item',
      error: error.message
    });
  }
};

// @desc    Create new tech stack item
// @route   POST /api/tech-stack
// @access  Private (Admin only)
exports.createTechStack = async (req, res) => {
  try {
    const techStack = await TechStack.create(req.body);
    
    res.status(201).json({
      success: true,
      message: 'Tech stack item created successfully',
      data: techStack
    });
  } catch (error) {
    console.error('Error creating tech stack item:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A technology with this name already exists'
      });
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating tech stack item',
      error: error.message
    });
  }
};

// @desc    Update tech stack item
// @route   PUT /api/tech-stack/:id
// @access  Private (Admin only)
exports.updateTechStack = async (req, res) => {
  try {
    const techStack = await TechStack.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!techStack) {
      return res.status(404).json({
        success: false,
        message: 'Tech stack item not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Tech stack item updated successfully',
      data: techStack
    });
  } catch (error) {
    console.error('Error updating tech stack item:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A technology with this name already exists'
      });
    }
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error updating tech stack item',
      error: error.message
    });
  }
};

// @desc    Delete tech stack item
// @route   DELETE /api/tech-stack/:id
// @access  Private (Admin only)
exports.deleteTechStack = async (req, res) => {
  try {
    const techStack = await TechStack.findByIdAndDelete(req.params.id);

    if (!techStack) {
      return res.status(404).json({
        success: false,
        message: 'Tech stack item not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Tech stack item deleted successfully',
      data: techStack
    });
  } catch (error) {
    console.error('Error deleting tech stack item:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting tech stack item',
      error: error.message
    });
  }
};

// @desc    Get tech stack statistics
// @route   GET /api/tech-stack/stats
// @access  Public
exports.getTechStackStats = async (req, res) => {
  try {
    const stats = await TechStack.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      }
    ]);

    const total = await TechStack.countDocuments();

    const formattedStats = {
      total,
      byCategory: stats.reduce((acc, stat) => {
        acc[stat._id] = stat.count;
        return acc;
      }, {})
    };

    res.status(200).json({
      success: true,
      data: formattedStats
    });
  } catch (error) {
    console.error('Error fetching tech stack stats:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching tech stack statistics',
      error: error.message
    });
  }
};

