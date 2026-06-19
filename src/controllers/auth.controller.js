const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// Signs a JWT containing only the user's id — keep the payload minimal so
// the token never carries data that could go stale (like name or role)
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

// @desc    Register a new user
// @route   POST /api/v1/auth/register
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Name, email, and password are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: 'Email is already registered' });
    }

    const user = await User.create({ name, email, password });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: { id: user._id, name: user.name, email: user.email },
        token,
      },
    });
  } catch (error) {
  console.log(error);

  res.status(500).json({
    success: false,
    message: error.message,
    stack: error.stack,
  });
}
};

// @desc    Login an existing user
// @route   POST /api/v1/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: 'Email and password are required' });
    }

    // password has `select: false` on the schema, so it must be explicitly
    // requested here — it's never accidentally exposed elsewhere in the app
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password' });
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid email or password' });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: { id: user._id, name: user.name, email: user.email },
        token,
      },
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: error.message || 'Server error during login' });
  }
};

module.exports = { registerUser, loginUser };
