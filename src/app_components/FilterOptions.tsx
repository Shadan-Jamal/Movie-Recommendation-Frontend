import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";

const allGenres: string[] = [
  "All",
  "Action",
  "Adventure",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Foreign",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "TV Movie",
  "War",
  "Western"
];

const years : string[] = [
  "All",
  "2021 - 2024",
  "2016-2020",
  "2011-2015",
  "2001-2010",
  "1996-2000",
  "1990-1995",
]

const showOnly : string[] = [
  "10",
  "30",
  "50",
  "75",
  "100",
]

type FilterOptionsProps = {
  setFilters : React.Dispatch<React.SetStateAction<{
      genre: string;
      year: string;
      title : string;
      showOnly : string;
    }>>,
  filters : {
    genre: string;
    year: string;
    title : string;
    showOnly : string;
  },
}

export default function FilterOptions({setFilters, filters} : FilterOptionsProps) {
  
  const handleGenre = (e : string) => {
    setFilters({...filters, genre : e});
  }
  
  const handleYear = (e : string) => {
    setFilters({...filters, year :e});
  }

  const handleTitle = (e : React.ChangeEvent<HTMLInputElement>) => {
    setFilters({...filters, title : e.target.value})
  }

  const handleShowOnly = (e : string) => {
    setFilters({...filters, showOnly : e})
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-w-[15em] max-w-[60em] lg:w-full h-fit flex flex-col md:flex-row justify-center items-center gap-4 p-6 bg-zinc-700/30 rounded-2xl border border-slate-500/30 backdrop-blur-sm"
    >

      <motion.div id="genres"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="w-full md:w-auto"
      >
        <Select onValueChange={(e : string) => handleGenre(e)}>
          <SelectTrigger className="min-w-[13em] text-white placeholder:text-white/50 bg-zinc-700/50 border-2 border-white/30 rounded-xl hover:border-white/60 transition-all duration-300">
            <SelectValue className="font-medium text-white" placeholder="Genres"/>
          </SelectTrigger>
          <SelectContent className="bg-zinc-700 border-2 border-white/30 rounded-xl">
            {allGenres.map((genre,idx) => {
              return <SelectItem 
                key={`${idx}`} 
                value={genre} 
                className="text-white font-medium hover:bg-zinc-600 focus:bg-zinc-600 cursor-pointer"
              >
                {genre}
              </SelectItem>
            })
            }
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div id="year"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="w-full md:w-auto"
      >
        <Select onValueChange={(e) => handleYear(e)}>
          <SelectTrigger className="min-w-[13em] text-white placeholder:text-white/50 bg-zinc-700/50 border-2 border-white/30 rounded-xl hover:border-white/60 transition-all duration-300">
            <SelectValue placeholder="Year"/>
          </SelectTrigger>
          <SelectContent className="bg-zinc-700 border-2 border-white/30 rounded-xl">
            {years.map((year,idx) => {
              return <SelectItem 
                key={`${idx}`} 
                value={year}
                className="text-white font-medium hover:bg-zinc-600 focus:bg-zinc-600 cursor-pointer"
              >
                {year}
              </SelectItem>
            })}
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div id="title"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="w-full md:w-auto"
      >
        <Input 
          className="text-white bg-zinc-700/50 border-2 border-white/30 rounded-xl hover:border-white/60 focus:border-white transition-all duration-300 placeholder:text-white/50"
          placeholder="Title includes..." 
          value={filters.title} 
          onChange={(e) => handleTitle(e)}
        />
      </motion.div>
      
      <motion.div id="showOnly"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="w-full md:w-auto"
      >
        <Select onValueChange={(e) => handleShowOnly(e)}>
          <SelectTrigger className="min-w-[13em] text-white placeholder:text-white/50 bg-zinc-700/50 border-2 border-white/30 rounded-xl hover:border-white/60 transition-all duration-300">
            <SelectValue placeholder="Show Only"/>
          </SelectTrigger>
          <SelectContent className="bg-zinc-700 border-2 border-white/30 rounded-xl">
            {showOnly.map((s,idx) => {
              return <SelectItem 
                key={`${idx}`} 
                value={s.toString()}
                className="text-white font-medium hover:bg-zinc-600 focus:bg-zinc-600 cursor-pointer"
              >
                {s}
              </SelectItem>
            })}
          </SelectContent>
        </Select>
      </motion.div>
    </motion.div>
  )
}
