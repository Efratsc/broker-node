const Rating = require('../models/rating-model');
async function getAllRatings(req, res) {
  try {
    const ratings = await Rating.findAll();
    res.json(ratings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve ratings' });
  }
}

// GET /ratings/:id - Get a single rating by ID
async function getRatingById(req, res) {
  const ratingId = req.params.id;
  try {
    const rating = await Rating.findByPk(ratingId);
    if (!rating) {
      res.status(404).json({ error: 'Rating not found' });
    } else {
      res.json(rating);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve rating' });
  }
}

// POST /ratings - Create a new rating
async function createRating(req, res) {
  const { star_value, user_id } = req.body;
  try {
    const rating = await Rating.create({
      star_value,
      user_id,
    });
    res.status(201).json({ ratingId: rating.rating_id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create rating' });
  }
}

// PUT /ratings/:id - Update a rating by ID
async function updateRatingById(req, res) {
  const ratingId = req.params.id;
  const { star_value, user_id } = req.body;
  try {
    const rating = await Rating.findByPk(ratingId);
    if (!rating) {
      res.status(404).json({ error: 'Rating not found' });
    } else {
      await rating.update({
        star_value,
        user_id,
      });
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update rating' });
  }
}

// DELETE /ratings/:id - Delete a rating by ID
async function deleteRatingById(req, res) {
  const ratingId = req.params.id;
  try {
    const rating = await Rating.findByPk(ratingId);
    if (!rating) {
      res.status(404).json({ error: 'Rating not found' });
    } else {
      await rating.destroy();
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete rating' });
  }
}

module.exports = {
  getAllRatings,
  getRatingById,
  createRating,
  updateRatingById,
  deleteRatingById,
};
