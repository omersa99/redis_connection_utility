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
// REDIS_URL=redis://default:P5Fk0j4s0x8s8l9LdQQz8djiRYSCVCfP@redis-10750.c1.asia-northeast1-1.gce.cloud.redislabs.com:10750
