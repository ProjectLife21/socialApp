import express, { Response, Request, Application, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// db
import { connectDB } from "./db/connectDB";

// routes
import { authRoute } from "./routes/authRoute";
import { userRoute } from "./routes/userRoute";
import { postRoute } from "./routes/postRoute";

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI as string;
const APP_ENV = process.env.NODE_ENV;

app.use(express.json());
app.use(cors());
app.use(helmet());

if (APP_ENV != "production") {
  app.use(morgan("dev"));
}

// routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);

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
    await connectDB(MONGO_URI).then(() => {
      console.log(`Database is connected!`);
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

startApp();
