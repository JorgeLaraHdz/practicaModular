// server/mongo-client.ts
import { MongoClient } from 'mongodb';

const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'usuarios';

const client = new MongoClient(mongoUrl);
let db: ReturnType<typeof client.db> | null = null;

export async function getDb() {
  if (!db) {
    await client.connect();
    db = client.db(dbName);
    console.log('MongoDB conectado');
  }
  return db;
}
