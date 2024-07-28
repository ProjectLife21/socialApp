import express, { Response, Request, Application, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "Route test!" });
});

//404 not found
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

//Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const startApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
