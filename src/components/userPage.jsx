/* eslint-disable react/prop-types */

import React from "react"
import { useHistory } from "react-router-dom"

const UserPage = ({ id, users }) => {
    const history = useHistory()
    const getUserById = (id) => {
        return users.find((user) => user.id.toString() === id)
    }
    const handleSave = () => {
        history.replaceState("/users")
    }
    const user = getUserById(id)
    return <> <h2>{user ? user.name : "loading"}  </h2>
        <button onClick={() => handleSave()}>Все пользователи</button>
    </>
}

export default UserPage
