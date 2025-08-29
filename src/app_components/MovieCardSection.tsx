import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { createMovies } from "@/app/features/movies/movieSlice";
import { useEffect, useState } from "react";
import config from "@/config/config";
import MovieCard from "./MovieCard"
import FilterOptions from "./FilterOptions";
import type { Movies } from "@/types/movies_types";
import Loading from "./Loading";
import {motion} from "motion/react"

export default function MovieCardSection() {
  const [moviesData, setMoviesData] = useState<Movies>([]);
  // if no movies are available for the selected filter
  const [noMoviesFound, setNoMoviesFound] = useState(false)
  
  const [fetching, setFetching] = useState(false);
  const [filters, setFilters] = useState({ 
    genre: "", 
    year: "", 
    title : "",
    showOnly : "100"
  });

  const { text, textType } = useAppSelector((state) => state.input);
  const movies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  
  //1. Fetching the movies
  useEffect(() => {

    const getImages = async (movies : any) => {
      console.log(movies)
      const updatedMovies = await Promise.all(
              movies.map(async (movie : any) => {
              console.log(config.omdb_api, movie.id)
              try{
                if(movie.id){
                  const img_blob = await fetch(`http://img.omdbapi.com/?apikey=${config.omdb_api}&i=${movie.id}`).then((res) => res.blob());
                  const img_url = URL.createObjectURL(img_blob)
                  return {...movie, image_url : img_url}
                }
              }
              catch{
                return {...movie, image_url : ""}
              }
            })
          )
          return updatedMovies
    }

    const fetchMovies = async () => {
      try {
        if (text) {
          setFetching(true);

          const result = await fetch(`${config.server_url}${textType}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              plot: text,
            }),
          });
          const data = await result.json();
          console.log(data)
          //creating a new object with the image url of each movies
          const moviesWithImages = await getImages(data)
          console.log(moviesWithImages)
          dispatch(createMovies(moviesWithImages)); //saving movies to redux store
          setMoviesData(moviesWithImages); //saving movies to local state

          setFilters({genre : "", year : "", title : "", showOnly : "100"})
        }
        
      } catch (err) {
        console.error(err);
      } finally {
        setFetching(false);
      }
    };
    
    fetchMovies();
  }, [text]);

  //2. Filtering based on filters state (genre, year, title, showOnly)
  useEffect(() => {
    const { genre, year, title, showOnly } = filters;

    let filteredMovies: Movies = movies;

    // Filter by genre
    if (genre && genre !== "All") {
      filteredMovies = filteredMovies.filter((movie) => {
        return movie.genres.includes(genre)
      });
      if (filteredMovies.length === 0) {
        setNoMoviesFound(true);
        setMoviesData([]);
        return;
      } else {
        setNoMoviesFound(false);
      }
    }

    // Filter by year
    if (year && year !== "All") {
      let yearFilteredMovies: Movies = filteredMovies;
      let range: string[] = [];
      let start = parseInt(year.slice(0, 4));
      let end = parseInt(year.slice(5, year.length));
      while (start <= end) {
        range.push(start.toString());
        start += 1;
      }
      yearFilteredMovies = yearFilteredMovies.filter((movie) => {
        const releaseYear = movie.year
        return range.includes(releaseYear);
        });
      filteredMovies = yearFilteredMovies;
    }

    //Filter by title
    if(title){
      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.trim().toLowerCase().includes(title.trim().toLowerCase())
      ))
    }

    //Filter by showOnly
    if(showOnly && showOnly !== "100"){
      filteredMovies = movies.slice(0, parseInt(showOnly))
    }

    setMoviesData(filteredMovies);

    // If no movies after all filters, set appropriate message
    if (filteredMovies.length === 0) {
      setNoMoviesFound(true);
    } else {
      setNoMoviesFound(false);
    }
  }, [filters]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-[100dvw] flex flex-col justify-center items-center gap-8 px-4 py-8"
    >
      
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl flex justify-center"
      >
        {text.length > 0 && (
          <FilterOptions 
            filters={filters} 
            setFilters={setFilters}
          />
        )}
      </motion.div>

      <motion.h1 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl text-white font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text"
      >
        Movies
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-7xl"
      >
        {!fetching ? (
          !noMoviesFound ? (
            <div className="grid place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {moviesData.map((movie, idx) => {
                return <MovieCard key={idx} {...movie} idx={idx} />;
              })}
            </div>
          ) : (
            text && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-24 h-24 bg-zinc-600/30 rounded-full flex items-center justify-center mb-6 border-2 border-zinc-500/30">
                  <span className="text-4xl">🔍</span>
                </div>
                <h1 className="font-bold text-white text-3xl mb-3">
                  No Movies Found
                </h1>
                <p className="text-zinc-400 text-lg max-w-md">
                  Try adjusting your filters or search criteria to find more movies.
                </p>
              </motion.div>
            )
          )
        ) : (
          <Loading />
        )}
      </motion.div>
    </motion.div>
  );
}
