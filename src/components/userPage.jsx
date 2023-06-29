import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import api from "../api"
import QualitiesList from "./qualitiesList"

const UserPage = ({ userId }) => {
    const history = useHistory()
    const [user, setUser] = useState()
    useEffect(() => {
        api.users.getById(userId).then(data => setUser(data))
    })

    const handleClick = () => {
        history.push("/users")
    }

    if (user) {
        return (
            <div>
                <h1> {user.name} </h1>
                <h2>Профессия: {user.profession.name}</h2>
                <QualitiesList qualities={user.qualities}/>
                <p>Completed Meetings: {user.completedMeetings}</p>
                <p>Rate: {user.rate}</p>
                <button onClick={handleClick}>Все Пользователи</button>
            </div>
        )
    } else {
        return <h1>Loading</h1>
    }

    // const history = useHistory()
    // const getUserById = (id) => {
    //     return users.find((user) => user.id.toString() === id)
    // }
    // const handleSave = () => {
    //     history.replaceState("/users")
    // }
    // const user = getUserById(id)
    // return <> <h2>{user ? user.name : "loading"}  </h2>
    //     <button onClick={() => handleSave()}>Все пользователи</button>
    // </>
}

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
}

export default UserPage
