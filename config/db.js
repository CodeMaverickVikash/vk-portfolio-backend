const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log('\n' + '='.repeat(60));
    console.log('✅ MONGODB CONNECTED SUCCESSFULLY!');
    console.log('='.repeat(60));
    console.log(`📡 Host: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    console.log(`🔌 Connection State: ${conn.connection.readyState === 1 ? 'Connected' : 'Disconnected'}`);
    console.log('='.repeat(60) + '\n');
  } catch (error) {
    console.error('\n' + '='.repeat(60));
    console.error('❌ MONGODB CONNECTION FAILED!');
    console.error('='.repeat(60));
    console.error(`Error: ${error.message}`);
    console.error('='.repeat(60) + '\n');
    process.exit(1);
  }
};

// Handle MongoDB connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️  MongoDB disconnected');
});

mongoose.connection.on('error', (err) => {
  console.error(`❌ MongoDB error: ${err}`);
});

module.exports = connectDB;

