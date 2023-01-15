import React, {useState} from 'react'
import User from "./components/user"
import api from './api'

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (id) => {
        let newUsers = users.filter((user) => user._id !== id)
        return setUsers(newUsers)
    }
        
    const handleToggleBookMark = (id) => {        
        const newBookmarks = users.filter(user => user._id === id)
        setUsers(newBookmarks)
    }

    const getBadgeClasses = () => {
            let classes = 'badge '
            classes += users.length === 0 ? 'bg-danger' :
            'bg-primary'
            return classes
        }

    const handleOnlineUsers = () => {
        let status1 = `${users.length} человек тусанёт с тобой сегодня`
        let status2 = `${users.length} человек тусанет с тобой сегодня`
        let status3 = `${users.length} человека тусанут с тобой сегодня`

        return users.length === 1 ? status1 :
        users.length > 4 && users.length <= 12 ? status2 :
        users.length > 1 && users.length <= 4 ? status3 : 'Никто не тусанет с тобой' 
    }

    return (
        <>
        <span className={getBadgeClasses()}>{handleOnlineUsers()}</span>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col">Избранное</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.length !== 0 ? 
                    users.map((user) => (
                        <User 
                            key={user._id}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                            {... user} /> ))
                            : 'Нет пользователей'}
                </tbody>
            </table>
        </>
    )
}

export default App