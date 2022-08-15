import CarForm from "../lib/CarForm"
import SearchForm from "../lib/SearchForm"
// import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div>
      <h1>Create a Car</h1>
      <CarForm />
      <h1>Search cars</h1>
      <SearchForm />
    </div>
  )
}
