import { useEffect, useState } from "react"

export default function App() {
  const [input,setInput] = useState("");

  const handleClick = async () => {
    console.log("Fetching data");
    try {
      const response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ input })
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <div>
      <h1>Enter your Input</h1>
      <input
      value={input}
      className="border-black border-2"
      onChange={(e) => setInput(e.target.value)}
      type="text" />
      <br />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}
