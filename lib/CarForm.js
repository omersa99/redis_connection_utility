export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault()
    // Cool trick to handle incoming data
    const form = new FormData(event.target)
    const formData = Object.fromEntries(form.entries())
    // console.log(formData)
    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    const result = await res.text()

    console.log("handleSubmit OK!")
    console.log(res)
  }

  // CSS

  return (
    <>
      <form onSubmit={handleSubmit} className="container">
        <input name="make" type="text" />
        <input name="model" type="text" />
        <input name="image" type="text" />
        <textarea name="description" type="text" />
        <button type="submit">Create Car</button>
      </form>
      <style jsx>{`
        .container {
          display: flex-center;
          margin: auto;
          width: 10%;
          border: 1px solid green;
          padding: 10px;
        }
      `}</style>
    </>
  )
}
