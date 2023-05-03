import { useContext } from "react"
import { Navigate } from "react-router"
import { AuthContext } from "../auth"


export const PublicRoute = ({children}) => {
    console.log('parte del public route',children)
    const {logged} = useContext(AuthContext);

    return (!logged)
        ? children
        :<Navigate to='/marvel'/>
}
