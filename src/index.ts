import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

//APP INITIALISATION
const app = express();
//MIDDLEWARES
app.use(bodyParser());
app.use(cors());

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
