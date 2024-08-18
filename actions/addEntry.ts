"use server";
import ListEntry from "@/app/models/Entry";
import { connectDB } from "../app/lib/mongodb";
import User from "../app/models/User";
import bcrypt from "bcryptjs";

export const addEntry = async (values: any) => {
  const { subject, description, released, mvdbid, entryBy } = values;

  try {
    await connectDB();
    const entryFound = await User.findOne({ mvdbid });
    if (entryFound) {
      return {
        error: "Eintrag schon vorhanden!",
      };
    }
    const entry = new ListEntry({
      subject,
      description,
      released,
      mvdbid,
      entryBy,
    });

    const savedEntry = await entry.save();
  } catch (e) {
    console.log(e);
  }
};
