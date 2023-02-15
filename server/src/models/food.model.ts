import { Schema, model } from "mongoose";

export interface Food {
  id: string;
  name: string;
  desc: string;
  price: number;
  tags: string[];
  imageUrl: string;
}

export const FoodSchema = new Schema<Food>(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    imageUrl: { type: String, required: true },
  },
  {
    // When this document is converted to a JSON or an object, it includes virtuals (i.e. properties not stored in MongoDB that have getters and setters).
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export const FoodModel = model<Food>("food", FoodSchema);
