
export type Movie = {
    id : string,
    genres : string[],
    overview : string,
    poster_path : string,
    release_date : string,
    runtime : number,
    title : string,
    imdbId : string,
    image_url : string,
}
export type Movies = Movie[]

const initialState : Omit<Movies, "image_url"> = []

export {initialState};