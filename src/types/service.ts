import services from "../services";
import utils from "../utils";
import { Request } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

export type context = {
  req: Request;
  prisma: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
  utils: typeof utils;
  services: typeof services;
};
