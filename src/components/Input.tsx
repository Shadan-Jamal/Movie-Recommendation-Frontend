import { motion } from "motion/react"
import { useAppDispatch } from "../app/hooks";
import { changeText,changeTextType } from "../app/features/inputs/inputSlice";
import { useState } from "react";

export default function Input() {
    const[input, setInput] = useState("");
    const[selected, setSelected] = useState("")

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selected) {
            dispatch(changeText(input))
            dispatch(changeTextType(selected))
        }
    };

    return (
    <div className="w-full min-h-[3em] max-h-[15em] flex justify-center border border-white">
        <div className="min-w-3/5 h-auto flex flex-col justify-center gap-3">

            <div className="w-full mx-5 flex justify-center py-3 gap-10">

                <motion.h2
                whileTap={{scale : 1.2}}
                initial={{backgroundColor : "transparent", color : "white"}}

                animate={{backgroundColor : `${selected === "emotion" ? "white":"transparent"}`, 
                color : `${selected === "emotion" ? "black":"white"}`}}
                
                transition={{delay : 0.2, ease : "backInOut"}}
                onClick={() => setSelected("emotion")}
                className="text-white text-xl hover:cursor-pointer p-2 rounded-lg">
                    Emotion
                </motion.h2>

                <motion.h2
                whileTap={{scale : 1.2}}
                initial={{backgroundColor : "transparent", color : "white"}}

                animate={{backgroundColor : `${selected === "description" ? "white":"transparent"}`, 
                color : `${selected === "description" ? "black":"white"}`}}

                transition={{delay : 0.2, ease : "backInOut"}} 
                onClick={() => setSelected("description")}
                className="text-white text-xl hover:cursor-pointer p-2 rounded-lg">
                    Description
                </motion.h2>
            </div>

            
            <form action="" className="flex flex-row gap-5 justify-center w-full h-fit" onSubmit={handleSubmit}>
                
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={selected === ""}
                placeholder={`${selected === "" ? "Choose an option from above" : "Enter"}`} 
                className={`border border-white rounded-lg text-lg text-white w-full text px-5 py-2 ${selected === "" && "cursor-not-allowed"}`} />

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
