import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "pong",
      uptime: process.uptime(),
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
