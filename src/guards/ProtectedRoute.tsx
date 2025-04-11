import { Navigate, Outlet} from "react-router-dom"
import { useUser } from "../hooks/useUser";
import { ReactNode } from "react";



export const ProtectedRoute = () => {
    const { user} = useUser();

    return user ? <Outlet/> : <Navigate to="/login"/>
}