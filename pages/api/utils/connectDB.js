import mongoose from "mongoose";

const connectDB = () => {
  const MONGODB_URI =
    process.env.NODE_ENV === "development"
      ? "mongodb://localhost:27017/yourapp"
      : process.env.MONGODB_URL;

  if (mongoose.connections[0].readyState) {
    console.log("Already connected.");
    return;
  }

  mongoose.connect(
    MONGODB_URI,
    {
      // useCreateIndex: true,
      // useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Connect to mongodb.");
    }
  );
};

export default connectDB;
