import OpenAI from "openai";
import { db } from "../../db/db";
import { recipes, SelectRecipe } from "../../db/schema";
import RecipeForm from "../components/RecipeForm/RecipeForm";

// async function getAllRecipes(): Promise<Array<SelectRecipe>> {
//   const res = await db.select().from(recipes);

//   return res;
// }

const openai = new OpenAI();
async function getchat() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Given a meal name you will reply with the ingredients as a comma separated list only with no other information and recipe",
      },
      {
        role: "user",
        content: "Chunk",
      },
    ],
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  return response.choices[0].message.content;
}

export default async function Recipes() {
  // const userLists = await getAllRecipes();

  const response = await getchat();

  return (
    <main>
      <h1 className="text-lg">Recipes</h1>
      <RecipeForm />
      <h2 className="text-lg">Recipes List</h2>

      <div>{JSON.stringify(response)}</div>
      {/* <div className="my-3">
        {userLists.map(({ title, id }) => {
          return <p key={id.toString()}>{title}</p>;
        })}
      </div> */}
    </main>
  );
}
