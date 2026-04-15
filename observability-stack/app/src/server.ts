import express, { Request, Response } from "express";
import { middleware, metricsHandler } from "./metrics/metrics";

import "./db/mongo";
import "./db/postgres";
import "./db/redis";

const app = express();

app.use(middleware);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Observability Stack Running 🚀 (Bun + TS)" });
});

app.get("/metrics", metricsHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
