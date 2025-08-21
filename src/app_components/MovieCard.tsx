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
    whileHover={{scale : 1.1}}
    initial={{scale : 0}}
    animate={{scale : 1}}
    transition={{delay : calculateDelay(idx), }}
    className={`max-w-[20em] min-h-[20em] max-h-[30em] bg-zinc-700 rounded-lg py-1 px-2 flex flex-col justify-around items-center`}>
        <div className="w-full h-fit px-5 flex flex-col items-center justify-center">
          <h1 className="font-bold text-white text-center text-wrap text-xl capitalize">
            {movie.title}
          </h1>
          <span className="font-bold text-white text-xl">
            ({movie.release_date.slice(0, movie.release_date.indexOf('-'))})
          </span>
        </div>
        
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2 text-white text-xs">
            [{movie.genres.map((genre,idx) => {
              return <h4 id={`${idx}`} className="text-xs italic text-white">{genre}</h4>
            })}]
          </div>
          <div>
            <span className="text-white text-xs">
              {movie.runtime} mins
            </span>
          </div>
        </div>

        <div className="w-full h-3/5 rounded-sm overflow-ellipsis">
          
        </div>

        <div className="w-full flex justify-end">
          <div>
            <span className="text-xs">
              Link to imdb page
            </span>
          </div>
        </div>
    </motion.div>
  )
}
