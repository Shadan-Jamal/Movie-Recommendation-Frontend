import { motion } from "motion/react"
import { useAppDispatch } from "../app/hooks";
import { changeText,changeTextType } from "../app/features/inputs/inputSlice";
import { useState } from "react";
import InputGuide from "./Menu/InputGuide";

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

    

    const handleSelection = (text : string) => {
        setSelected(text)
        setInput("")
    }

    return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full min-h-[4em] max-h-[16em] flex justify-center py-2 md:py-8"
    >
        <div className="min-w-[80%] max-w-4xl h-auto flex flex-col justify-center gap-6">

            <div className="w-full flex justify-center py-4 gap-6 md:gap-10">
                <motion.h2
                  initial={{backgroundColor : "transparent", color : "white", scale: 0.8, opacity: 0}}
                  animate={{
                    backgroundColor : selected === "emotion" ? "rgba(255,255,255,0.95)" : "transparent", 
                    color : selected === "emotion" ? "rgb(24,24,27)" : "white",
                    scale: selected === "emotion" ? 1.05 : 1,
                    opacity: 1
                  }}
                  whileHover={{ scale: selected === "emotion" ? 1.05 : 1.02 }}
                  transition={{duration : 0.3, ease : "easeInOut"}}
                  onClick={() => handleSelection("emotion")}
                  className={`text-white text-md md:text-xl font-semibold hover:cursor-pointer px-4 py-2 md:px-6 md:py-4 rounded-xl border-2 border-white/60 transition-all duration-300 shadow-lg hover:shadow-xl 
                    ${selected === "emotion" 
                      ? "shadow-white/20 border-white" 
                      : "hover:border-white/80 hover:bg-white/10"
                  }`}
                >
                    Emotion
                </motion.h2>

                <motion.h2
                  initial={{backgroundColor : "transparent", color : "white", scale: 0.8, opacity: 0}}
                  animate={{
                    backgroundColor : selected === "description" ? "rgba(255,255,255,0.95)" : "transparent", 
                    color : selected === "description" ? "rgb(24,24,27)" : "white",
                    scale: selected === "description" ? 1.05 : 1,
                    opacity: 1
                  }}
                  whileHover={{ scale: selected === "description" ? 1.05 : 1.02 }}
                  transition={{duration : 0.3, ease : "easeInOut"}} 
                  onClick={() => handleSelection("description")}
                  className={`text-white text-sm md:text-xl font-semibold hover:cursor-pointer px-4 py-2 md:px-6 md:py-4 rounded-xl border-2 border-white/60 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    selected === "description" 
                      ? "shadow-white/20 border-white" 
                      : "hover:border-white/80 hover:bg-white/10"
                  }`}
                >
                    Description
                </motion.h2>
            </div>

            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center w-full h-fit" 
              onSubmit={handleSubmit}
            >   
                <div className="relative w-full">

                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={selected === ""}
                      placeholder={`${selected === "" ? "Choose an option from above" : selected === "emotion" ? "How are you feeling today?" : "Describe the movie plot..."}`} 

                      className={`border-2 border-white/60 rounded-xl text-sm md:text-lg text-white w-full px-4 py-2 md:px-6 md:py-4 bg-zinc-700/50 backdrop-blur-sm placeholder:text-white/60 focus:outline-none focus:border-white focus:bg-zinc-700/70 transition-all duration-300 placeholder:text-sm md:placeholder:text-lg
                        ${ selected === "" ? "cursor-not-allowed opacity-50" : "cursor-text"}`} 
                      
                      />
                    
                    {selected.length > 0 && <motion.div 
                    animate={{
                      scale : [1.01,1.03,1.01], 
                      transition : {repeat : Infinity, repeatType : "loop", duration : 3, type : "tween", ease : "easeInOut"}}}
                    className="w-full h-full -z-20 absolute inset-0 rounded-xl border-2 border-white/50 px-20"
                    />}
                </div>

                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={selected === "" || input.trim() === ""}
                  type="submit"
                  className={`text-white font-semibold rounded-xl text-sm sm:text-lg px-4 py-2 md:px-8 md:py-4 border-2 border-white/60 transition-all duration-300 ${
                    selected === "" || input.trim() === "" 
                      ? "cursor-not-allowed opacity-50" 
                      : "hover:bg-white hover:text-zinc-800 hover:border-white cursor-pointer hover:shadow-lg"
                  }`}
                >
                    Search
                </motion.button>
            </motion.form>
        </div>
    </motion.div>
  )
}
