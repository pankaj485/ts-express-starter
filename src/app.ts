const express = require("express");
import { Express, NextFunction, Request, Response } from "express";

const app: Express = express();
app.use(express.json());
const PORT = 3000;

type GlobalCatchMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

const globalCatch: GlobalCatchMiddleware = (error, req, res, next) => {
  res.status(500).json({
    success: true,
    message: "Internal server error",
  });
};

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "Welcome to Express server",
  });
});

// global catch
app.use(globalCatch);

app.listen(PORT, () => {
  console.log(`Express server is listening on PORT ${PORT}`);
});
