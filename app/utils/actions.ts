'use server'
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    
export async function getPopularMovies() {
    try {
        
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey} `
            }
        }
  
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US`, options)
        const data =await res.json();
        return data

        
    }
    catch(error) {
        console.error("Something wrong happened"+ error.message)
    }
}