import React from 'react'
import { useSelector } from 'react-redux'

function CheckAdmin({ children }) {
    const { role } = useSelector(state => state.auth);
    return (
        role === "ADMIN" && <>
            {children}
        </>
    )
}

export default CheckAdmin
