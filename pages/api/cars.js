// Handling the write opperations on the BackEnd
import { createCar } from "../../lib/redis"

export default async function handler(req, res) {
  // req == incoming data from car form component
  const id = await createCar(req.body)
  res.status(200).json({ id })
}
