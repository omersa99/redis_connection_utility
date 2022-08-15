import { useState } from "react"

export default function SearchForm() {
  const [hits, setHits] = useState([])
  const search = async (event) => {
    const q = event.target.value
    // I may conseder implement debounce calls
    if (q.length > 2) {
      const params = new URLSearchParams({ q })
      const res = await fetch("/api/search?" + params)
      const result = await res.json()
      //   console.log(resultq)
      setHits(result["cars"])
    }
  }

  return (
    <div>
      <input onChange={search} type="text" />
      <ul>
        {hits?.map((hit) => (
          <li key={hit.entityId}>
            {hit.make}
            {hit.model}
          </li>
        ))}

        {/* <h1>hits = </h1>
      {hits.map((hit) => (
        <h1>
          {hit.map((h) => (
            <h1>{h.make}</h1>
          ))}
        </h1>
      ))} */}
      </ul>
    </div>
  )
}
