import { Navigate} from "react-router-dom"
import { useUser } from "../hooks/useUser";
import { ReactNode } from "react";

interface childrenI{
    children: ReactNode
}

export const ProtectedRoute = ({children}:childrenI) => {
    const { user} = useUser();

    return user ? children : <Navigate to="/login"/>
}