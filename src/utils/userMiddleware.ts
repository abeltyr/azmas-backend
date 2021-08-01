import { PrismaClient } from "@prisma/client";

export const GetUser = async (req, prisma: PrismaClient) => {
  try {
    if (!req.req.user) {
      console.log("User is not logged in");
      throw new Error("User is not logged in");
    }
    let user = req.req.user;
    let token = await prisma.userToken.findFirst({
      where: {
        userId: user.id,
        active: true,
      },
    });
    if (!token) {
      console.log("invalided token");
      throw new Error("invalided token");
    }

    if (new Date(token.Endperiod).getTime() - new Date().getTime() <= 0) {
      console.log("token has expired");
      throw new Error("token has expired");
    }

    let finaluser = await prisma.user.findFirst({
      where: {
        id: user.id,
        // activated: true,
        // verified: true,
      },
    });
    // if (!finaluser) {
    //   console.log("user is not verified or activated");
    //   throw new Error("user is not verified or activated");
    // }
    req.req.user = finaluser;
    return finaluser;
  } catch (e) {
    throw new Error(e);
  }
};
