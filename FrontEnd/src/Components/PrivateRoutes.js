import {Outlet,Navigate} from "react-router-dom"
const PrivateRoutes=() => {
    let auth=false
    if(localStorage['jwt'])
    {
        auth=true ;
    }
    return(
        auth ? <Outlet/>:<Navigate to={"/login"}/>
    )
}

export default PrivateRoutes ;