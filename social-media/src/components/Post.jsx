import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Post = ({id}) => {
    const [post, setPost] = useState({})
    useEffect(()=> {
        (async ()=> {
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(async r => await r.json().then(r => setPost(r)))
        })()
    },[id])
    const navigate = useNavigate()
    const handleGoToPost = (e) => {
        navigate(`/post/${id}`)
    }
    return(        
        <div onClick={handleGoToPost} className="post-el clickable">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}
export default Post