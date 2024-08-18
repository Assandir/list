import mongoose, { Schema, model } from "mongoose";

export interface ListEntryDocument {
  _id: string;
  subject: string;
  description: string;
  released: Date;
  mvdbid: string;
  entryBy: string;
  createdAt: Date;
  updatedAt: Date;
}

const ListEntrySchema = new Schema<ListEntryDocument>(
  {
    subject: {
      type: String,
      required: [true, "Titel ist ein Pflichtfeld"],
    },
    description: {
      type: String,
      required: [false, ""],
    },
    released: {
      type: Date,
      required: [false, ""],
    },
    mvdbid: {
      type: String,
      required: [false, ""],
    },
    entryBy: {
      type: String,
      required: [true, ""],
    },
  },
  {
    timestamps: true,
  }
);

const ListEntry =
  mongoose.models?.ListEntry ||
  model<ListEntryDocument>("ListEntry", ListEntrySchema);
export default ListEntry;
