import services from "../services";
import utils from "../utils";
import { Request } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

export type context = {
  req: Request;
  prisma: PrismaClient;
  utils: typeof utils;
  services: typeof services;
};
