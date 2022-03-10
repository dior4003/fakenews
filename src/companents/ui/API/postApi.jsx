import axios from "axios";


class PostServisApi{
    static async getAllPosts(limit=10 , page= 1){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts" ,{
        params: {
            _limit: limit,
            _page: page
        }
        })
        
        return response
    }
}

export default PostServisApi