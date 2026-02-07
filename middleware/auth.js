const User = require('../models/User');
const { verifyAccessToken } = require('../utils/tokenUtils');

// Protect routes - verify Access Token
exports.protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route. Please login.',
      code: 'NO_TOKEN'
    });
  }

  try {
    // Verify access token
    const decoded = verifyAccessToken(token);

    // Get user from token
    req.user = await User.findById(decoded.id).select('-password -refreshToken');

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    if (!req.user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'User account is deactivated',
        code: 'ACCOUNT_DEACTIVATED'
      });
    }

    next();
  } catch (error) {
    // Check if token is expired
    if (error.message.includes('expired')) {
      return res.status(401).json({
        success: false,
        message: 'Access token expired. Please refresh your token.',
        code: 'TOKEN_EXPIRED'
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route. Invalid token.',
      code: 'INVALID_TOKEN'
    });
  }
};

// Authorize specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role '${req.user.role}' is not authorized to access this route`
      });
    }
    next();
  };
};

