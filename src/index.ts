import express from "express";
import dotenv from "dotenv";
import whoisRouter from "./routes/whois";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

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
