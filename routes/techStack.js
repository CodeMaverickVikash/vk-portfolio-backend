const express = require('express');
const router = express.Router();
const {
  getAllTechStack,
  getTechStackById,
  createTechStack,
  updateTechStack,
  deleteTechStack,
  getTechStackStats
} = require('../controllers/techStackController');
const { protect } = require('../middleware/auth');

// Public routes
router.get('/', getAllTechStack);
router.get('/stats', getTechStackStats);
router.get('/:id', getTechStackById);

// Protected routes (Admin only)
router.post('/', protect, createTechStack);
router.put('/:id', protect, updateTechStack);
router.delete('/:id', protect, deleteTechStack);

module.exports = router;

