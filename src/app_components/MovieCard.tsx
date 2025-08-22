import type { Movie } from "@/types/movies_types"
import {motion} from "motion/react"

export default function MovieCard(props : Movie & {idx? : number | undefined}) {
  const {idx , ...movie} = props
  const calculateDelay = (idx : number | undefined) => {
    if(idx){
      return (0.1 * idx);
    }
  }
  
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 8px 25px rgba(255,255,255,0.15)",
        y: -8,
        transition : {
          duration : 0.03
        }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        y: 0,
        transition: { delay: calculateDelay(idx), duration: 0.5, ease: "easeOut" }
      }}
      className="group border-2 border-slate-500/60 max-w-[22em] min-h-[22em] max-h-[32em] bg-gradient-to-br from-zinc-700/90 to-zinc-800/90 rounded-2xl py-4 px-4 flex flex-col justify-between items-center gap-3 backdrop-blur-sm hover:border-slate-400/80 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="w-full h-fit px-3 flex flex-col items-center justify-center text-center">
        <motion.h1 
          whileHover={{ scale: 1.02 }}
          className="font-bold text-white text-center text-wrap text-xl capitalize leading-tight mb-2 group-hover:text-zinc-200 transition-colors duration-300 cursor-default"
        >
          {movie.title}
        </motion.h1>
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="font-semibold text-zinc-300 text-lg hover:bg-zinc-600/50 px-3 py-1 rounded-full border border-zinc-500/50 cursor-default"
        >
          ({movie.release_date.slice(0, movie.release_date.indexOf('-'))})
        </motion.span>
      </div>
      
      <div className="w-full flex justify-between items-center px-4 py-3 border-b border-slate-400/30 rounded-b-lg bg-zinc-600/20">
        <div className="w-full flex justify-start items-center max-w-[70%] gap-2 text-white text-xs">
          <h4 className="text-xs italic text-zinc-200 leading-relaxed">
            [{movie.genres.length > 0 ? movie.genres.join(", ") : "No genres available"}]  
          </h4>
        </div>
        <div className="bg-zinc-600/50 px-2 py-1 rounded-sm border border-zinc-500/50">
          <span className="text-white text-xs font-medium">
            {movie.runtime + " mins"}
          </span>
        </div>
      </div>

      <div className="w-full h-3/5 rounded-lg overflow-hidden flex justify-center items-center my-4 bg-gradient-to-br from-zinc-600/30 to-zinc-700/30 border border-zinc-500/30">
        {/* {movie.image_url.length > 0 ? 
          <img 
            className="min-h-[20em] object-cover rounded-lg w-full h-full"
            src={movie.image_url} 
            alt="Image not available" /> 
          : <h1 className="text-white text-lg">Image not available</h1>
        } */}
        <div className="flex flex-col items-center justify-center text-center p-6">
          <div className="w-16 h-16 bg-zinc-500/30 rounded-full flex items-center justify-center mb-3">
            <span className="text-3xl text-zinc-400">🎬</span>
          </div>
          <p className="text-zinc-400 text-sm">Movie Poster</p>
        </div>
      </div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="w-full flex justify-center"
      >
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          target="_blank" 
          href={`https://www.imdb.com/title/${movie.imdbId}/`} 
          className="text-xs text-zinc-300 no-underline hover:text-white hover:underline bg-zinc-600/50 px-4 py-2 rounded-full border border-zinc-500/50 hover:border-zinc-400/80 transition-all duration-300 hover:bg-zinc-600/70"
        >
          View on IMDb
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
