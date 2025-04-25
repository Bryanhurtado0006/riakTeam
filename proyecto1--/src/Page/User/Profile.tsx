import { useNavigate } from "react-router-dom";
const Profile:React.FC=()=>{
    const navigate = useNavigate();
    const navigateProfile=()=>{navigate("/user/bryan")}
    return(
        <div> 
            <h1>Component Profile sisae</h1>
            <button onClick={()=>{navigateProfile()}}> usuario</button>
        </div>

    )
}
export default Profile;