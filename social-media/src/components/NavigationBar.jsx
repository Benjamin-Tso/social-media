import { useNavigate } from "react-router-dom"
const NavigationBar = () => {
    const navigate = useNavigate()
    const handleReturnToHome = (e) => {
        navigate("/social-media")
    }
    return(
        <>
            <div onClick={handleReturnToHome} id="navbar" className="clickable"><h2>SocialMedia</h2></div>
        </>
    )
}
export default NavigationBar