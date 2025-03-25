
import axios from 'axios'
const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2U2NGNlYWRmNWQ2OGNjNWJiNDQxYTU0YjJiNjJiMCIsIm5iZiI6MTY4OTIzMzQ0NS42NDksInN1YiI6IjY0YWZhODI1YzQ5MDQ4MDExYzJmNGE5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cB9a00S4SPE80PQaLHNXUFm6d6pJ1xME2BPiV8jWmFs';

export async function fetchData(url) {
    try{
        const data = await axios.get(url, {headers: { Authorization:`Bearer ${API_KEY}`}});
        return data.data;
    } catch(error){
        return error;
    }
}

