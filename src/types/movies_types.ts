
export type Movie = {
    id : string,
    genres : string[],
    overview : string,
    poster_path : string,
    release_date : string,
    runtime : number,
    title : string,
    imdbId : string,
}
export type Movies = Movie[]

const initialState : Movies = []

export {initialState};