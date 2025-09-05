import {motion,AnimatePresence} from "motion/react"
import { useAppSelector } from "@/app/hooks"

export default function HeroHeader() {
  const { text } = useAppSelector((state) => state.input)

  return (
    <AnimatePresence>
        {text.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200, transition: { type: "spring", bounce: 0.25, ease: "circIn", duration: 0.3 } }}
            className="w-full min-h-[15em] max-h-[30em] md:min-h-[20em] md:max-h-[40em] flex justify-center items-center px-4 md:px-16 lg:px-32 bg-gradient-to-b from-zinc-700/30 to-transparent border-b bg-red border-slate-500/30"
          >
            <div className="max-w-6xl">
              <div className="flex flex-col gap-6 text-center mt-3">
              <motion.h1 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text"
              >
                Movie Matcher
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="text-justify text-white/90 text-[12px] sm:text-sm md:text-xl lg:text-2xl leading-relaxed max-w-5xl"
              >
                Lookup your favorite movies by either describing how you're feeling right now or describing the plot of the movie you're looking for.
              </motion.p>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                className="text-justify text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl md:max-w-4xl"
              >
                Movies will be within the range of 1990 to 2025. 
                Even you can add some to the collection!
              </motion.p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
                className="flex justify-center gap-4 mt-4"
              >
              </motion.div>
            </div>
          </motion.div>
        )}
    </AnimatePresence>
  )
}
