import { MongoClient } from "mongodb";
import "dotenv/config";

const DATABASE_URL = process.env.DATABASE_URL ?? "mongodb://127.0.0.1:27017/bpuol";
const client = new MongoClient(DATABASE_URL);

try {
  await client.connect();
  console.log("Connected successfully to database server!");
} catch (err) {
  console.log(err);
}

const db = client.db();
const participants = db.collection("participants");
const messages = db.collection("messages");

export default { participants, messages };
