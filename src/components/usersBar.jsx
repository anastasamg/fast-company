import React from "react"
import UsersList from "./components/usersList"
import UserPage from "./components/userPage"
import users from "../api/fake.api/user.api"

const UsersBar = ({ match }) => {
    const userId = match.params.userId
    return <>{userId ? <UserPage users={users} id={userId} /> : <UsersList users={users}/>}</>
}

export default UsersBar
