import { useNavigate, useParams } from "react-router-dom";

interface UserParams{
    name:string;
}
const User:React.FC=()=>{
    const navigate=useNavigate();
    const navigateUser=()=>{navigate("/profile")}
    
    let {name}= useParams<UserParams>();
    return(
        <>
        <img className="no" src="" alt="" />
        <div><h1> {name}</h1>
        <button onClick={()=>{navigateUser()}}>Profile</button>
        </div>
        
        </>
    )
}

export default User;