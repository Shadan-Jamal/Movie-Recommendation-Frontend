import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import config from "../config/config";
import MovieCard from "./MovieCard"

export default function MovieCardSection() {
  const {text, textType} = useAppSelector((state) => state.input)
  console.log(text,textType)
  useEffect(() => {
    const fetchMovies = async () => {
      try{
        if(text){
          console.log("Fetching Movies")
          const result = await fetch(`${import.meta.env.VITE_SERVER_URL}${textType}`,{
            method : "POST",
            headers : {
              'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
              plot : text,
            })
          })
          const data = await result.json()
          console.log(data)
        }
      }
      catch(err){
        console.log(err)
      }
    }

    fetchMovies();
  })

  return (
    <div className="grid place-content-center">
        <MovieCard />
    </div>
  )
}
