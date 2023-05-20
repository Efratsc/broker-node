const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/rating-controller');

// GET /ratings - Get all ratings
router.get('/ratings', ratingController.getAllRatings);

// GET /ratings/:id - Get a single rating by ID
router.get('/ratings/:id', ratingController.getRatingById);

// POST /ratings - Create a new rating
router.post('/ratings', ratingController.createRating);

// PUT /ratings/:id - Update a rating by ID
router.put('/ratings/:id', ratingController.updateRatingById);

// DELETE /ratings/:id - Delete a rating by ID
router.delete('/ratings/:id', ratingController.deleteRatingById);

module.exports = router;
