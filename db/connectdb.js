import mongoose from "mongoose";
const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS =  {
      dbName:"crudtest"
    }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    console.log('connect sucessfully');
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
