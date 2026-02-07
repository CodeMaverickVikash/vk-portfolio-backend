const jwt = require('jsonwebtoken');

/**
 * Generate Access Token (short-lived)
 * @param {Object} payload - User data to encode in token
 * @returns {String} Access token
 */
const generateAccessToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE || '15m' }
  );
};

/**
 * Generate Refresh Token (long-lived)
 * @param {Object} payload - User data to encode in token
 * @returns {String} Refresh token
 */
const generateRefreshToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRE || '7d' }
  );
};

/**
 * Verify Access Token
 * @param {String} token - Access token to verify
 * @returns {Object} Decoded token payload
 */
const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired access token');
  }
};

/**
 * Verify Refresh Token
 * @param {String} token - Refresh token to verify
 * @returns {Object} Decoded token payload
 */
const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired refresh token');
  }
};

/**
 * Generate both access and refresh tokens
 * @param {Object} user - User object
 * @returns {Object} Object containing accessToken and refreshToken
 */
const generateTokens = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    role: user.role
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return { accessToken, refreshToken };
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  generateTokens
};

