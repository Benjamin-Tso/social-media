import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const PostPage = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()
    const [comments, setComments] = useState([]) 
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        (async () =>{
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(async r=> await r.json().then(r => {
                setPost(r)
                return r
            })
            .then(async r => await fetch(`https://jsonplaceholder.typicode.com/users/${r.userId}`)
            .then(async r=> await r.json().then(r=> setUser(r)))))
            await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(async r=> await r.json().then(r=> setComments(r)))
        })()
    },[id])
    const handleGoToProfile = (e) => {
        navigate(`/profile/${post.userId}`)
    }
    return (
        <>
            <h2 onClick={handleGoToProfile} className="clickable">{user.username}</h2>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            {
                comments.map((comment, idx) => {
                    return (
                        <div key={idx}>
                            <h2>{comment.name}</h2>
                            <p>{comment.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
export default PostPage