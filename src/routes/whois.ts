import express, { Request, Response } from "express";
import { API_KEY, WHOIS_API } from "../constants";

const whoisRouter = express.Router();

whoisRouter.get("/", async (req: Request, res: Response) => {
  try {
    const { domainName } = req.query;

    const whoisResponse = await fetch(
      `${WHOIS_API}?domainName=${domainName}&apiKey=${API_KEY}&outputFormat=JSON`
    );

    const data = await whoisResponse.json();

    res.status(200).json(data);
  } catch {
    res.status(500).json({ message: "ERROR" });
  }
});

export default whoisRouter;
