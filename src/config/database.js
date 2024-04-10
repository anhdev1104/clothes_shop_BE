import mongoose from 'mongoose';

const connectDB = async uri => {
  try {
    const connect = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${connect.connection.host}...`);
  } catch (error) {
    console.error(`MongoDB connection ERROR: ${error.message}!!!`);
    process.exit(1);
  }
};

export default connectDB;
