const express = require('express');

const router = express.Router();
const Forum = require('../models/forum');

// Create a new forum
router.post('/', async (req, res) => {
  const forum = new Forum({
    title: req.body.title,
    description: req.body.description,
  });
  await forum.save();
  res.json({ forumId: forum._id });
});

// Get a specific forum by ID
router.get('/:id', async (req, res) => {
  try {
    const forum = await Forum.findById(req.params.id);
    if (forum) {
      res.json(forum);
    } else {
      res.status(404).json({ error: 'Forum not found' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Invalid forum ID' });
  }
});

// Add a discussion to a specific forum
router.post('/:id/discussions', async (req, res) => {
  const forum = await Forum.findById(req.params.id);
  if (forum) {
    forum.discussions.push({
      username: req.body.username,
      message: req.body.message,
    });
    await forum.save();
    res.json(forum);
  } else {
    res.status(404).send('Forum not found');
  }
});

module.exports = router;
