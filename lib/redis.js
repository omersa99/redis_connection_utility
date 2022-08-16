import { Client, Entity, Schema, Repository } from "redis-om"

const client = new Client()

//establish connection if not exiset
async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
    console.log("connected")
  }
}

// defining Entity
class Car extends Entity {}
let schema = new Schema(
  Car,
  {
    make: { type: "string" },
    // textSearch =true => Full text search
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "string", textSearch: true },
  },
  {
    // more like document orinted DB
    dataStructure: "JSON",
  }
)

export async function createCar(data) {
  await connect()

  const repository = client.fetchRepository(schema)

  // data == plain js object from ui
  const car = repository.createEntity(data)

  // Commit to DB
  const id = await repository.save(car)

  return id
}

//Redis search

//Creating index
export async function createIndex() {
  await connect()
  const repository = client.fetchRepository(schema)
  await repository.createIndex()
}

//Search
export async function searchCars(q) {
  // q == query
  await connect()
  const repository = client.fetchRepository(schema)
  const cars = await repository
    .search()
    .where("make")
    .eq(q)
    //.eq == exact equality
    .or("model")
    .eq(q)
    .return.all()

  return cars
}
