import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors"
import userRoute from "./route/user.route.js"







const app = express();
app.use(cors())
app.use(express.json());


dotenv.config();  // Load environment variables


const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODB_URI;

if (!URI) {
  console.error("❌ MongoDB URI is missing. Check your .env file.");
  process.exit(1);
}

// Connect to MongoDB properly using async/await
const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

connectDB(); // Call function to connect


// defining routes

app.use("/book", bookRoute)
app.use("/user",userRoute)

// app.get("/", (req, res) => {
//   res.send("Bookstore app");
// });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
