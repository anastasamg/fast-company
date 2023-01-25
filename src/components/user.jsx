import React from "react"
import BookMark from "./bookmark"

const User = (props) => {
    return (
        <>
            <tr key={props._id}>
                <td>{props.name}</td>
                <td>
                    {props.qualities.map((quality) => (
                        <span
                            key={quality._id}
                            className={`badge bg-${quality.color} m-1`}
                        >
                            {quality.name}
                        </span>
                    ))}
                </td>
                <td>{props.profession.name}</td>
                <td>{props.completedMeetings}</td>
                <td>{props.rate} /5</td>
                <td>
                    <button>
                        <BookMark
                            status={props.bookmark}
                            onClick={() => props.onToggleBookMark(props._id)}
                            _id={props._id}
                        />
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => props.onDelete(props._id)}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    )
}

export default User
