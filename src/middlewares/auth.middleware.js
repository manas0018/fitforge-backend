const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

// Protects routes by verifying the JWT sent in the Authorization header.
// On success, attaches the authenticated user document to req.user so
// downstream controllers can use req.user._id / req.user.name, etc.
const protect = async (req, res, next) => {
  try {
    let token;
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: 'Not authorized, no token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch the user fresh from the DB on every request rather than trusting
    // the token payload — if the account was deleted after the token was
    // issued, this stops a still-valid token from acting on a ghost user
    const user = await User.findById(decoded.id);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: 'Not authorized, user no longer exists' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: 'Not authorized, token invalid or expired' });
  }
};

module.exports = { protect };
