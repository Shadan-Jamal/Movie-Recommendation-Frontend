
export type Movie = {
    id : string,
    title : string,
    rating : string,
    mpa : string,
    genres : string[],
    year : string,
    duration : string,
    movie_link : string,
    image_url : string,
}

export type Movies = Movie[]

const initialState : Omit<Movies, "image_url"> = []

export {initialState};