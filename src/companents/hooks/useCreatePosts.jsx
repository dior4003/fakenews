import { useMemo } from "react"

export const useSortPosts = (posts ,sort)=>{
    const sortedPosts = useMemo(()=>{
        if(sort){
          return  [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
        }
        return posts
      }, [sort, posts])

      return sortedPosts
}

export const usePosts =(posts ,sort ,query)=>{
    const sortedPosts = useSortPosts(posts ,sort)
    const SortedAndSearchPosts = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
      },[query, sortedPosts])

      return SortedAndSearchPosts
    
}