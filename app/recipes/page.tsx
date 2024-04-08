import { db } from "../../db/db";
import { users, SelectUser } from "../../db/schema";

async function getAllUsers(): Promise<Array<SelectUser>> {
  const res = await db.select().from(users);

  return res;
}

export default async function Recipes() {
  const userLists = await getAllUsers();

  return (
    <main>
      Recipes
      {userLists.map(({ name, id }) => {
        return <p key={id.toString()}>{name}</p>;
      })}
    </main>
  );
}
