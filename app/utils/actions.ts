'use server'
const apiKey =process.env.NEXT_PUBLIC_API_KEY;
    
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
        const data = res.json();
        return data

        
    }
    catch {
        console.error("Something wrong happened")
    }
}