import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const databaseUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use((req, res, next) => {
  res.status(400).json({ Error: "Invalid Request" });
  next();
});

mongoose
  .connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Successfully Connected"))
  .catch((err) => console.log("Database Failed To connect"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
