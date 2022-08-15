// Handling the write opperations on the BackEnd
import { createCar } from "../../lib/redis"

export default async function handler(req, res) {
  // req == incoming data from car form component
  const id = await createCar(req.body)
  // .then((dataa) => {
  //   res.status(200).send("pass")
  //   console.log(dataa)
  // })
  // .catch((error) => {
  //   res.status(500).send("no pass")
  //   console.log(error)
  // })
  res.status(200).send("pass")
  console.log(`car id = ${id}`)
  //   res.status(200).json({ id })
}

// fetch(serverUrl, { method: "GET" }).then((res) => res.json())
// res.text()
