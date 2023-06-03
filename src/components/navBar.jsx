import React from "react"

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Main</a></li>
            <li className="nav-item"><a className="nav-link" aria-current="page" href="/login">Login</a></li>
            <li className="nav-item"><a className="nav-link" aria-current="page" href="/users">Users</a></li>
        </ul>
    )
}

export default NavBar
