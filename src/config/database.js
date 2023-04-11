import { MongoClient } from "mongodb";
import "dotenv/config";

const client = new MongoClient(process.env.DATABASE_URL);

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
