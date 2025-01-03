import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log(`Database connection established!!`);
    });
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
