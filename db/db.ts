import { MongoClient } from "mongodb";

const uri: string = process.env.MONGODB_URI || "";
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!process.env.MONGODB_URI) {
  throw new Error("Missing Mong DB Connection String");
}

client = new MongoClient(uri, options);
clientPromise = client.connect();

export default clientPromise;
