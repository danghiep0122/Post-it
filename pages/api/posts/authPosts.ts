// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "@/prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      console.log(req.query);
      
      const data = await prisma.post.findUnique({
        where: {
          id: req.query.details
        },
        include: {
          user: true,
          Comment: {
            orderBy: {
              createAt: 'desc'
            },
            include: {
              user: true
            }
          }
        }
      })
      return res.status(200).json(data)
    } catch (error) {
      res.status(403).json({ error: "Error has occured while making post" });
    }
  }
}
