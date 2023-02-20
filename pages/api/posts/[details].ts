import prisma from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
    req:NextApiRequest,
    res: NextApiResponse
) { 
    if (req.method ==="GET") {
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
                            createAt: "desc"
                        },
                        include: {
                            user: true
                        }
                    }
                }
            })
        } catch (error) {
            res.status(403).json({ error: "Error has occured"})
        }
    }
    
}