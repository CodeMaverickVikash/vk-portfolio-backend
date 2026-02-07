const jwt = require('jsonwebtoken');

/**
 * Generate Access Token (short-lived)
 * @param {Object} payload - User data to encode in token
 * @returns {String} Access token
 */
const generateAccessToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET is not defined in environment');

  return jwt.sign(
    payload,
    secret,
    { expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRE || '15m' }
  );
};

/**
 * Generate Refresh Token (long-lived)
 * @param {Object} payload - User data to encode in token
 * @returns {String} Refresh token
 */
const generateRefreshToken = (payload) => {
  const secret = process.env.JWT_REFRESH_TOKEN_SECRET || process.env.JWT_SECRET;
  if (!secret) throw new Error('No JWT refresh secret defined (JWT_REFRESH_TOKEN_SECRET or JWT_SECRET)');

  return jwt.sign(
    payload,
    secret,
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
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not defined in environment');
    return jwt.verify(token, secret);
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
    const secret = process.env.JWT_REFRESH_TOKEN_SECRET || process.env.JWT_SECRET;
    if (!secret) throw new Error('No JWT refresh secret defined (JWT_REFRESH_TOKEN_SECRET or JWT_SECRET)');
    return jwt.verify(token, secret);
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

