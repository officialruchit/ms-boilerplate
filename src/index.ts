import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import db from "../src/config/db";
db();
import userRoute from "./modules/user/routes/userRoute";
import adminRoutes from "./modules/admin/routes/adminRoutes";
import sellerRoute from "./modules/seller/routes/sellerRoutes";
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 4444;

app.use("/user", userRoute);
app.use("/admin", adminRoutes);
app.use("/seller", sellerRoute);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
