const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`[MongoDB] Connected - Host: ${conn.connection.host}, Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`[MongoDB] Connection failed: ${error.message}`);
    process.exit(1);
  }
};

// Handle MongoDB connection events
mongoose.connection.on('disconnected', () => {
  console.log('[MongoDB] Disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error(`[MongoDB] Error: ${err}`);
});

module.exports = connectDB;

