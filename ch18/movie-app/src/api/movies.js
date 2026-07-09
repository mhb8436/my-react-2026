const API_KEY = import.meta.env.VITE_OMDB_KEY 
const BASE_URL = 'https://www.omdbapi.com/'

export async function searchMovies(query)  { //키워드로 영화검색 
    const keyword = query.trim(); // query = " spiderman    " -> "spiderman"

    const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(keyword)}`
    const res = await fetch(url)
    if(!res.ok){
        throw new Error('네트워크 응답이 올바르지 않습니다');
    }
    const data = await res.json();
    if(data.Response === 'False') {
        return []; // 서버에서 제대로 된 값을 안줘도 빈배열응답해서 클라이언트에서는 에러가 안보이게
    }
    return data.Search; 
    // data = {"Response": "True", "Search": [ 영화정보 목록], "Error" : ""}
}

export async function getMovieDetail(id) {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${encodeURIComponent(id)}&plot=full`
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('네트워크 응답이 올바르지 않습니다.')
    }
    const data = await res.json()
    if (data.Response === 'False') {
        throw new Error(data.Error || '영화를 찾을 수 없습니다')
    }
    return data;
}