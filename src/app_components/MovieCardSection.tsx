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
  const [filters, setFilters] = useState({ genre: "", year: "", title : ""});

  const { text, textType } = useAppSelector((state) => state.input);
  const movies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  console.log(movies)
  //1. Fetching the movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (text) {
          setFetching(true);
          console.log("Fetching Movies");
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
          dispatch(createMovies(data)); //saving movies to redux store
          setMoviesData(data); //saving movies to local state
          setFilters({genre : "", year : "", title : ""})
        }
        setMoviesData([])
      } catch (err) {
        console.log(err);
      } finally {
        setFetching(false);
      }
    };

    fetchMovies();
  }, [text]);

  //2 & 3. Filtering based on filters state (genre, year, title)
  useEffect(() => {
    const { genre, year, title } = filters;

    let filteredMovies: Movies = movies;

    // Filter by genre
    if (genre && genre !== "All") {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genres.includes(genre)
      );
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
      if (year === "Before 1990") {
        const parsedYear = 1990;
        yearFilteredMovies = yearFilteredMovies.filter((movie) => {
          const releaseYear = parseInt(
            movie.release_date.slice(0, movie.release_date.indexOf("-"))
          );
          return releaseYear <= parsedYear;
        });
      } else {
        let range: string[] = [];
        let start = parseInt(year.slice(0, 4));
        let end = parseInt(year.slice(5, year.length));
        while (start <= end) {
          range.push(start.toString());
          start += 1;
          console.log(start.toString())
        }
        yearFilteredMovies = yearFilteredMovies.filter((movie) => {
          const releaseYear = movie.release_date.slice(
            0,
            movie.release_date.indexOf("-")
          );
          return range.includes(releaseYear);
        });
      }
      filteredMovies = yearFilteredMovies;
      console.log(filteredMovies)
    }

    //Filter by title
    if(title){
      filteredMovies = filteredMovies.filter((movie) => (
        movie.title.trim().toLowerCase().includes(title.trim().toLowerCase())
      ))
    }

    setMoviesData(filteredMovies);

    // If no movies after all filters, set appropriate message
    if (filteredMovies.length === 0) {
      setNoMoviesFound(true);
    } else {
      setNoMoviesFound(false);
    }
  }, [filters, movies]);

  // useEffect(() => {
  //   const getImage = async () => {
  //     const img = await fetch(`http://img.omdbapi.com/?apikey=${config.omdb_api}&i=tt0468569`)
  //     const blob = await img.blob()
  //     setImageUrl(URL.createObjectURL(blob));
  //     // console.log(data)
  //   }

  //   getImage()
  // },[text])

  return (
    <div className="max-w-[100dvw] flex flex-col justify-center items-center gap-5 ">
      <h1 className="text-3xl text-white">Movies</h1>
      <div>
        {text.length > 0 && (
          <FilterOptions 
          filters={filters} 
          setFilters={setFilters} 
          />
        )}
      </div>
      <div className="grid place-content-center grid-cols-4 grid-flow-dense gap-10">
        {!fetching ? (
          (!noMoviesFound) ? (
            moviesData.map((movie, idx) => {
              return <MovieCard key={idx} {...movie} idx={idx} />;
            })
          ) : (text && <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="col-span-4">
              <h1 className="font-bold text-white text-3xl">
                No Movies Found
              </h1>
            </motion.div>
            )
        ) : 
        (
          <Loading />
        )
        }
      </div>
    </div>
  );
}
