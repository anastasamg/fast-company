import React from "react"

const BookMark = ({ bookmark, ...rest }) => {
    
    const getBookmarkClasses = () => {
        let classes = 'bi bi-star'
        classes += bookmark
        ? ''
        : '-fill' 
        return classes
    }
    
    return (
      <i className={getBookmarkClasses()}></i>
    )
    }

export default BookMark