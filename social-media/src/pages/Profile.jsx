import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Profile = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [address, setAddress] = useState({})
    const [company, setCompany] = useState({})
    useEffect(() => {
        (async ()=>{
            await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(async r => await r.json().then(r => {setUser(r); setAddress(r.address); setCompany(r.company)}))
        })() 
    },[id])
    return(
        <>
            <h1>Username: {user.username}</h1>
            <h2>{user.name}</h2>
            <h2>Living In {address.city}</h2>
            <h2>Works At {company.name}</h2>
            <h2>Contact Info: </h2>
            <ul>
                <li><h3>{user.email}</h3></li>
                <li><h3>{user.phone}</h3></li>
            </ul>
        </>
    )
}
export default Profile