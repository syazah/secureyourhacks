import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/auth.routes";
import BlogRoutes from "./routes/blog.routes";
dotenv.config();

//APP INITIALISATION
const app = express();
//MIDDLEWARES
app.use(express.json());
app.use(cors());
//ROUTES
app.use("/api/v1/admin/auth", AuthRoutes);
app.use("/api/v1/admin/blog", BlogRoutes);

//CATCH ERROR BLOCK
app.use((err: any, req: any, res: any, next: any) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({ success: false, message });
});
// LISTENING TO PORT
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is runnning on PORT ${port}`);
});
