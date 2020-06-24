import { Request, Response, Router } from "express";
import { OK } from "http-status-codes";
import { findBeer } from "@services/untappd-api";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const query: string = req.query.q as string;
  const beer = await findBeer(query);
  console.log(beer);
  return res.status(OK).json(beer);
});

export default router;
