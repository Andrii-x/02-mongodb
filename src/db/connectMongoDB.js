import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exitCode = 1;
    throw error;
  }
};

export default connectMongoDB;