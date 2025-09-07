import type { Movie } from "@/types/movies_types"
import {motion} from "motion/react"
import { allGenres } from "./FilterOptions"

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
        scale: 1.02, 
        boxShadow: "0px 8px 25px rgba(255,255,255,0.15)",
        transition : {
          duration : 0.01,
        }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: calculateDelay(idx), duration: 0.1, 
          ease: "easeOut" 
        }
      }}
      className="border-2 border-slate-500/60 w-[18em] h-auto sm:max-w-[22em] sm:min-h-[30em] md:max-h-[35em] bg-gradient-to-br from-zinc-700/90 to-zinc-800/90 rounded-2xl py-4 px-2 sm:px-4 flex flex-col justify-between items-center gap-3 backdrop-blur-sm hover:border-slate-400/80 transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <div className="w-full px-1 flex flex-col items-center justify-center text-center">
        <motion.h1 
          whileHover={{ scale: 1.02 }}
          className="font-bold text-white text-center md:text-center text-wrap text-sm md:text-xl capitalize leading-tight mb-2 group-hover:text-zinc-200 transition-colors duration-300 cursor-default"
        >
          {movie.title}
        </motion.h1>
        <div
        className="flex w-full justify-center items-center gap-5"
        >
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="font-semibold text-zinc-300 text-[11px] md:text-lg hover:bg-zinc-600/50 px-3 py-1 rounded-full border border-zinc-500/50 cursor-default"
            >
            ({movie.year})
          </motion.span>
          <span
          className={`font-black rounded-md px-2 py-1 text-[11px] sm:text-sm text-gray-200 bg-gray-200/20
            ${movie.mpa === "G" && "text-white bg-white/20"}
            ${movie.mpa === "PG" && "text-green-400 bg-green-400/20"}
            ${movie.mpa === "PG-13" && "text-yellow-500 bg-yellow-500/20"}
            ${movie.mpa === "R" && "text-red-500 bg-red-500/20"}
            ${movie.mpa === "Not Rated" && "text-gray-400 bg-gray-500/20"}
            `}
            >{movie.mpa}</span>
          <span className="text-white text-xs font-medium bg-zinc-600/50 px-2 py-1 rounded-sm border border-zinc-500/50">
            {(movie.duration.includes("h") || movie.duration.includes("m") ?  movie.duration : "Not available")}
          </span>
        </div>
      </div>
      
      <div className="w-full flex justify-between items-center px-4 py-3 border-b border-slate-400/30 rounded-b-lg bg-zinc-600/20">
        <div className="w-full flex justify-start items-center gap-2 text-white text-xs">
          <h4 className="text-xs italic text-zinc-200 leading-relaxed">
            [{movie.genres.length > 0 ? 
            movie.genres.filter((genre) => allGenres.includes(genre)).join(", ") : 
            "No genres available"}]  
          </h4>
        </div>
      </div>

      <div className="min-w-[10em] max-w-[15em] min-h-[10em] sm:min-h-[15em] sm:min-w-[10em] sm:max-w-[20em] rounded-lg overflow-hidden flex justify-center items-center my-4 bg-gradient-to-br from-zinc-600/30 to-zinc-700/30 border border-zinc-500/30">
        {movie.image_url.length > 0 ? 
          <img 
            className="rounded-lg w-full object-contain"
            src={movie.image_url} 
            alt="Image not available" /> 
          : <h1 className="text-white text-lg text-center">Image not available</h1>
        }
      </div>

      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="w-full flex justify-center"
      >
        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          target="_blank" 
          href={`${movie.movie_link}`} 
          className="text-xs text-zinc-300 no-underline hover:text-white hover:underline bg-zinc-600/50 px-4 py-2 rounded-full border border-zinc-500/50 hover:border-zinc-400/80 transition-all duration-300 hover:bg-zinc-600/70"
        >
          View on IMDb
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
