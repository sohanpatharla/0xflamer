const express = require('express');
const router = express.Router();
const Flames = require('../models/Flames');

// POST request to store names and relation
router.post('/', async (req, res) => {
  const { name1, name2, relation } = req.body;
  try {
    const newFlamesEntry = new Flames({ name1, name2, relation });
    const savedEntry = await newFlamesEntry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET request to fetch all stored flames entries (optional)
router.get('/', async (req, res) => {
  try {
    const flamesEntries = await Flames.find();
    res.json(flamesEntries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
