import { NextApiRequest, NextApiResponse } from "next";

import prisma from "@WhizWire/libs/prismadb";
import serverAuth from "@WhizWire/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { currentUser } = await serverAuth(req, res);

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        NOT: {
          id : currentUser.id
        }
      }
    });


    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
