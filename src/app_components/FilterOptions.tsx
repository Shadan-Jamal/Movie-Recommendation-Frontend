import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const genres: string[] = [
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
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller"
];
const years : string[] = ["All",
  "2016-2017",
  "2011-2015",
  "2001-2010",
  "1996-2000",
  "1990-1995",
  "Before 1990"
]

type FilterOptionsProps = {
  setFilters : React.Dispatch<React.SetStateAction<{
      genre: string;
      year: string;
    }>>,
  filters : {
    genre: string;
    year: string;
  }
}

export default function FilterOptions({setFilters, filters} : FilterOptionsProps) {
  
  const handleGenre = (e : string) => {
    setFilters({...filters, genre : e});
  }
  
  const handleYear = (e : string) => {
    setFilters({...filters, year :e});
  }

  return (
    <div className="w-full h-fit flex justify-center items-center gap-3">
        <div id="genres">
            <Select onValueChange={(e : string) => handleGenre(e)}>
                <SelectTrigger className="min-w-[13em] text-white placeholder:text-white/50">
                  <SelectValue className="font-bold text-white" placeholder="Genres"/>
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre,idx) => {
                    return <SelectItem 
                    id={`${idx}`} 
                    value={genre} 
                    className="text-black font-medium"
                    >
                      {genre}
                    </SelectItem>
                  })}
                </SelectContent>
            </Select>
        </div>
        <div id="year">
            <Select onValueChange={(e) => handleYear(e)}>
                <SelectTrigger className="min-w-[13em] text-white placeholder:text-white/50">
                  <SelectValue  placeholder="Year"/>
                </SelectTrigger>
                <SelectContent>
                  {years.map((year,idx) => {
                    return <SelectItem 
                    id={`${idx}`} 
                    value={year}
                    className="text-black font-medium"
                    >
                      {year}
                    </SelectItem>
                  })}
                </SelectContent>
            </Select>
        </div>
    </div>
  )
}
