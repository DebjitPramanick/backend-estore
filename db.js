const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URI =
    "mongodb+srv://rajat-mehra-05:rajatdb05@cluster0.tj0hw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
