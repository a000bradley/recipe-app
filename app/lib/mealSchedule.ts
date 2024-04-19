"use server";

import { ObjectId } from "mongodb";
import clientPromise from "@/db/db";
import { DaySchedule } from "../Home";

async function getDBConnection() {
  const client = await clientPromise;
  const db = client.db("RecipeApp");
  const documentId = new ObjectId("6622321b82a2556718d211d4");

  return {
    db,
    documentId,
  };
}

export async function getMealSchedule(): Promise<DaySchedule | null> {
  const { db, documentId } = await getDBConnection();
  const data = await db.collection("MealSchedule").findOne({ _id: documentId });
  if (!data) return null;

  const { _id, ...mealSchedule } = data;
  return mealSchedule;
}

export async function saveMealSchedule(mealSchedule: DaySchedule) {
  const { db, documentId } = await getDBConnection();
  const data = await db
    .collection("MealSchedule")
    .replaceOne({ _id: documentId }, mealSchedule);
}
