import mongoose from 'mongoose';

/**
 * Database Configuration
 * Handles MongoDB connection with proper error handling and retry logic
 */

const connectDB = async () => {
  try {
    // MongoDB connection options for production-ready setup
    const options = {
      // Use new URL parser
      // useNewUrlParser and useUnifiedTopology are deprecated in current mongoose version
      
      // Connection timeout settings
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      // bufferMaxEntries: 0, // Removed as it's not supported in current mongoose version
      // bufferCommands: false, // Disabled as it's causing issues with current setup
      
      // Connection pool settings
      maxPoolSize: 10, // Maintain up to 10 socket connections
      minPoolSize: 5, // Maintain minimum 5 socket connections
      maxIdleTimeMS: 30000, // Close connections after 30 seconds of inactivity
      
      // Retry settings
      retryWrites: true,
      retryReads: true
    };

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGODB_URI, options);
    
    console.log(`✅ MongoDB Connected Successfully!`);
    console.log(`📍 Database: ${conn.connection.name}`);
    console.log(`🔗 Host: ${conn.connection.host}`);
    
    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️  MongoDB disconnected. Attempting to reconnect...');
    });
    
    mongoose.connection.on('reconnected', () => {
      console.log('✅ MongoDB reconnected successfully!');
    });
    
    // Graceful shutdown
    process.on('SIGINT', async () => {
      try {
        await mongoose.connection.close();
        console.log('📴 MongoDB connection closed through app termination');
        process.exit(0);
      } catch (error) {
        console.error('❌ Error closing MongoDB connection:', error);
        process.exit(1);
      }
    });
    
    return conn;
    
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:');
    console.error(`   Error: ${error.message}`);
    
    // Check for common connection issues
    if (error.message.includes('ENOTFOUND')) {
      console.error('   💡 Check your MongoDB URI and network connection');
    } else if (error.message.includes('authentication failed')) {
      console.error('   💡 Check your MongoDB username and password');
    } else if (error.message.includes('timeout')) {
      console.error('   💡 MongoDB server may be down or unreachable');
    }
    
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;