import React, {useState} from 'react'
import api from '../api'
 
const Users = () => {
    
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (userId) => {
        const newUsers = users.filter((user) => user.id !== userId)
        return setUsers(newUsers)
    }
    
    const getBadgeClasses = () => {
        let classes = 'badge '
        
        classes += users.length === 0 ? 'bg-danger' :
        'bg-primary'

        return classes
    }

    const getColor = () => {
        let colors = 'badge '
        
        colors += 
        users.qualities.includes("Нудила") ? "primary" : 
        users.qualities.includes("Странный") ? "secondary" :
        users.qualities.includes("Троль") ? "success" :
        users.qualities.includes("Алкоголик") ? "danger" :
        users.qualities.includes("Красавчик") ? "info" :
        users.qualities.includes("Неуверенный") ? "dark" : ""
        
        return colors
    }
    
    const renderPhrase = (number) => {
        return (number === 1) ? `${number} человек тусанет с тобой сегодня` :
        (number > 4 && number <= 12) ? `${number} человек тусанет с тобой сегодня` : 
        (number > 1 && number <= 4) ? `${number} человека тусанут с тобой сегодня` : 'Никто не тусанет с тобой'
    }

    const renderUsers = () => {
        return users.length !== 0
            ? users.map((item) => (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td className={getColor()}>{item.qualities.map(e => e.name)}</td>
                    <td>{item.profession}</td>
                    <td>{item.completedMeetings}</td>
                    <td>{item.rate}</td>
                    <button
                        className='btn btn-danger btn-sm'
                        onClick={() => handleDelete(item._id)}>
                            delete
                    </button>
                </tr>
            ))
            : ""
}

    return (
    <>
        <span className={getBadgeClasses()}>{renderPhrase(users.length)}</span>

        <table class="table">
            <thead>
            <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            </tr>
            </thead>
            <tbody>
                {renderUsers()}
            </tbody>
        </table>
    </>
    )
}

export default Users

