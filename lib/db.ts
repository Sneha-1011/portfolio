import { MongoClient, type Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectToDatabase() {
  // If we already have a connection, use it
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  // If no connection, create a new one
  // In a real application, you would use an environment variable for the connection string
  const uri = process.env.MONGODB_URI || "mongodb+srv://snehamuralidharan1109:Sneha03@cluster0.5faaohk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
"

  const client = new MongoClient(uri)
  await client.connect()
  const db = client.db()

  // Cache the client and db connection
  cachedClient = client
  cachedDb = db

  return { client, db }
}
