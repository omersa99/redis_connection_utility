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
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "string" },
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
