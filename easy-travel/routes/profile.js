const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

// Get user profile
router.get('/', authMiddleware, getProfile);

// Update user profile
router.put('/', authMiddleware, updateProfile);

module.exports = router;
