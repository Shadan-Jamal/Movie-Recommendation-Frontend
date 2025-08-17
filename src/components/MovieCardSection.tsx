import { useAppDispatch, useAppSelector } from "../app/hooks";
import { createMovies } from "../app/features/movies/movieSlice";
import { useEffect, useState } from "react";
import config from "../config/config";
import MovieCard from "./MovieCard"

export interface MovieType {
  genres : [],
  id : string,
  poster_path : string,
  release_date : string,
  runtime : number,
  score : number,
  title : string,
}


export default function MovieCardSection() {
  const [moviesData, setMoviesData] = useState<MovieType[]>([]);
  const {text, textType} = useAppSelector((state) => state.input)
  const movies = useAppSelector((state) => state.movies)
  const dispatch = useAppDispatch();
  console.log(movies)
  console.log(text,textType)

  useEffect(() => {
    const fetchMovies = async () => {
      try{
        if(text){
          console.log("Fetching Movies")
          const result = await fetch(`${config.server_url}${textType}`,{
            method : "POST",
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
              plot : text,
            })
          })
          const data = await result.json()
          dispatch(createMovies(data))
          setMoviesData(data);
          console.log(data)
        }
      }
      catch(err){
        console.log(err)
      }
    }

    fetchMovies();
  },[text])

  return (
  <div className="max-w-[90dvw] flex flex-col justify-center items-center gap-5 border-2 border-white">
    <h1 className="text-3xl text-white">Movies</h1>
    <div className="max-w-[90dvw] grid place-content-center grid-cols-4 gap-2 mx-5">
        {moviesData && moviesData.map((movie : MovieType) => {
          return <MovieCard {...movie}/>
        })
        }
    </div>
  </div>
  )
}
