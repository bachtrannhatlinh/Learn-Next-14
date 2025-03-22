"use server";

import User from "@/app/database/user.model";
import connectMongoDB from "@/lib/mongoose";
import { TCreateUserParams } from "@/types";


export const createUser = async (user: TCreateUserParams) => {
  try {
    connectMongoDB();
    const newUser = await User.create(user);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};