import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
const navigate=useNavigate();
    const goToHome=()=>{
        navigate('./home?id=323&name=ananth')
        // navigate({
        //     pathname:'/home',
        //     search:'?id=323&name=ananth'
        // })
    }
  return (
    <div>
        {/* Login<Link to={'/home?id=323&name=ananth'}> go to Home page</Link> */}
        <Link to={'/profile/423/redmi'}> go to profile page</Link>
        <button onClick={()=>goToHome()}>go home</button>
        Login
    </div>
  )
}

export default Login

