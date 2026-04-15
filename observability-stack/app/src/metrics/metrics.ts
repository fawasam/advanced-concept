import client from "prom-client";
import { Request, Response, NextFunction } from "express";

client.collectDefaultMetrics();

const httpHistogram = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration",
  labelNames: ["method", "route", "status"],
});

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  const end = httpHistogram.startTimer();
  res.on("finish", () => {
    end({
      method: req.method,
      route: req.url,
      status: res.statusCode,
    });
  });
  next();
};

export const metricsHandler = async (req: Request, res: Response) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
};
