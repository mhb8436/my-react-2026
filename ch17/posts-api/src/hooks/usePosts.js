import { useState, useEffect } from 'react';
import { getPosts } from '../api/posts'

export function usePosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const load = async () => {
        try{
            setLoading(true)
            setError(null)

            const data = await getPosts()
            setPosts(data);
        }catch(e){
            setError(e.message)
        }finally{ // try, catch 무조건 호출 
            setLoading(false)
        }
    }
}