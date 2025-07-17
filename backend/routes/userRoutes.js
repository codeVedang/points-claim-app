const express = require('express');
const router = express.Router();
const {
  getUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getClaimHistory
} = require('../controllers/userController');

router.get('/users', getUsers);
router.post('/users', addUser);
router.post('/claim/:id', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history', getClaimHistory);

module.exports = router;