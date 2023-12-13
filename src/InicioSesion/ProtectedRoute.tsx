import React from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RootState } from "../Redux/store"

interface Props {
    children: React.ReactNode,
    allowedRoles: string[]
}

export const ProtectedComponent = (props: Props) => {

    const user = useSelector((state: RootState) => state.user)
    const location = useLocation();

    return user?.isAuth && props.allowedRoles.filter(rol => user?.role.includes(rol)).length > 0 ?
        (props.children)
        :
        <Navigate to='/Login' state={{ from: location }} replace />
}