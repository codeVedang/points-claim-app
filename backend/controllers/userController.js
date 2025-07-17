const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const newUser = new User({ name: req.body.name });
  await newUser.save();
  res.json(newUser);
};

exports.claimPoints = async (req, res) => {
  const userId = req.params.id;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).send('User not found');

  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId, points });
  await history.save();

  const leaderboard = await User.find().sort({ totalPoints: -1 });

  res.json({ message: 'Points claimed!', points, leaderboard });
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.getClaimHistory = async (req, res) => {
  const history = await ClaimHistory.find().populate('userId');
  res.json(history);
};