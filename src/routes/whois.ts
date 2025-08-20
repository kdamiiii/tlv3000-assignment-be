import express, { Request, Response } from "express";

const whoisRouter = express.Router();

whoisRouter.get("/", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "ok" });
  } catch {
    res.status(500).json({ message: "ERROR" });
  }
});

export default whoisRouter;
