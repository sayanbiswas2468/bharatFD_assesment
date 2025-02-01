import { connectDB } from './connectDB.js'
import dotenv from "dotenv";
import { router as faqRoutes } from "./routes/routes.js";

import express from "express";
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/faqs", faqRoutes);
const PORT = process.env.PORT || 5000

connectDB();

app.listen(PORT, () => {
    console.log(`The Server Is Running On ${PORT}`);

})