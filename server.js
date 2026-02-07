const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: [
    process.env.CLIENT_URL,
    'http://localhost:3000',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(morgan('dev')); // Logging

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tech-stack', require('./routes/techStack'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log('🎉 SERVER STARTED SUCCESSFULLY!');
  console.log('='.repeat(60));
  console.log(`🚀 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📡 Server running on: http://localhost:${PORT}`);
  console.log(`🔗 API Base URL: http://localhost:${PORT}/api`);
  console.log('='.repeat(60));
  console.log('📚 Available Endpoints:');
  console.log('   Auth:');
  console.log(`   🔑 Login:         POST   http://localhost:${PORT}/api/auth/login`);
  console.log(`   🔄 Refresh Token: POST   http://localhost:${PORT}/api/auth/refresh`);
  console.log(`   👤 Get User:      GET    http://localhost:${PORT}/api/auth/me (Protected)`);
  console.log(`   🚪 Logout:        POST   http://localhost:${PORT}/api/auth/logout (Protected)`);
  console.log('');
  console.log('   Tech Stack:');
  console.log(`   📋 Get All:       GET    http://localhost:${PORT}/api/tech-stack`);
  console.log(`   📊 Get Stats:     GET    http://localhost:${PORT}/api/tech-stack/stats`);
  console.log(`   🔍 Get One:       GET    http://localhost:${PORT}/api/tech-stack/:id`);
  console.log(`   ➕ Create:        POST   http://localhost:${PORT}/api/tech-stack (Protected)`);
  console.log(`   ✏️  Update:        PUT    http://localhost:${PORT}/api/tech-stack/:id (Protected)`);
  console.log(`   🗑️  Delete:        DELETE http://localhost:${PORT}/api/tech-stack/:id (Protected)`);
  console.log('='.repeat(60));
  console.log('💡 Tip: Use the test-api.http file to test endpoints');
  console.log('='.repeat(60) + '\n');
});

