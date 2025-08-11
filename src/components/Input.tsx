import { motion } from "motion/react"
import { useState, useEffect } from "react"

export default function Input() {
    const [selectedInput, setSelectedInput] = useState("");
    const [input,setInput] = useState("");
    
    
    const findRecommendations = async (searchType: string) => {
        try {
            console.log("Fetching")
            const endpoint = searchType === "description" ? "http://localhost:3000/description" : "/";
            const plot = input
            const result = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({plot})
            });
            console.log(result)
            const data = await result.json();

            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedInput) {
            findRecommendations(selectedInput);
        }
    };

  return (
    <div className="w-full min-h-[3em] max-h-[15em] flex justify-center border border-white">
        <div className="min-w-3/5 h-auto flex flex-col justify-center gap-3">
            <div className="w-full mx-5 flex justify-center py-5 gap-10">

                <motion.h2
                whileTap={{scale : 1.2}}
                initial={{backgroundColor : "transparent", color : "white"}}

                animate={{backgroundColor : `${selectedInput === "emotion" ? "white":"transparent"}`, 
                color : `${selectedInput === "emotion" ? "black":"white"}`}}
                
                transition={{delay : 0.2, ease : "backInOut"}}
                onClick={() => setSelectedInput("emotion")}
                className="text-white text-xl hover:cursor-pointer p-2 rounded-lg">
                    Emotion
                </motion.h2>

                <motion.h2
                whileTap={{scale : 1.2}}
                initial={{backgroundColor : "transparent", color : "white"}}

                animate={{backgroundColor : `${selectedInput === "description" ? "white":"transparent"}`, 
                color : `${selectedInput === "description" ? "black":"white"}`}}

                transition={{delay : 0.2, ease : "backInOut"}} 
                onClick={() => setSelectedInput("description")}
                className="text-white text-xl hover:cursor-pointer p-2 rounded-lg">
                    Description
                </motion.h2>
            </div>

            <form action="" className="flex flex-row gap-5 justify-center w-full h-fit" onSubmit={handleSubmit}>
                
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={selectedInput === ""}
                placeholder={`${selectedInput === "" ? "Select an option from above" : "Enter"}`} 
                className="border border-white rounded-lg text-lg text-white w-full text px-5 py-2" />

                <button 
                type="submit"
                className="text-white hover:font-bold hover:cursor-pointer hover:bg-zinc-400/50 rounded-xl px-2 text-ce">
                    Find
                </button>

            </form>
        </div>
    </div>
  )
}
