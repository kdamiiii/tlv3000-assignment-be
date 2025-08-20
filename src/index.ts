import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import whoisRouter from "./routes/whois";
import { logger } from "./middlewares/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  origin: (origin: any, callback: any) => {
    if (!origin) return callback(null, true);
    return callback(null, origin);
  },
  credentials: true,
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
};

app.use(cors(corsOptions));
app.use(logger);
app.use("/whois", whoisRouter);

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error syncing database:", error);
  }
})();
