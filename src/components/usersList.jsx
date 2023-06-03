/* eslint-disable react/prop-types */

import React from "react"

const UsersList = ({ users }) => {
    return <>
        {users.map((user) => <h3 key={user._id}>{user.name}</h3>)}
    </>
}

export default UsersList
