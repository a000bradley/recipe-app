"use server";

import OpenAI from "openai";
import stub from "./stub";

const openai = new OpenAI();

export default async function getIngredients(mealName: string) {
  // const response = await openai.chat.completions.create({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "Given a meal name you will reply with the ingredients as a comma separated list only with the amounts needed to make a meal for 2 people, For a UK audience",
  //     },
  //     {
  //       role: "user",
  //       content: mealName,
  //     },
  //   ],
  //   temperature: 1,
  //   max_tokens: 256,
  //   top_p: 1,
  //   frequency_penalty: 0,
  //   presence_penalty: 0,
  // });

  const response = stub;

  return response.choices[0].message.content;
}
