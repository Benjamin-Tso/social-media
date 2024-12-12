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
            <div id="profile">
                <h1 id="profile-uname">Username: {user.username}</h1>
                <h2 id="profile-name">{user.name}</h2>
                <h2 id="profile-city">Living In {address.city}</h2>
                <h2 id="profile-company">Works At {company.name}</h2>
                <div id="contact-info">
                <h2>Contact Info: </h2>
                    <ul>
                        <li><h3>{user.email}</h3></li>
                        <li><h3>{user.phone}</h3></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Profile