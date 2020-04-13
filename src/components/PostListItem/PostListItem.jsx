import React from "react";
import './post-list-item.css'

function PostListItem(props) {
    let classNames = 'app-list-item d-flex justify-content-between'
    if (props.important) {
        classNames += ' important'
    }
    if (props.like) {
        classNames += ' like'
    }
    return (
        <div className={classNames}>
                <span className='app-list-item-label' onDoubleClick={props.onToggleLiked}>
                    {props.label}
                </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn-star btn-sm' type='button' onClick={props.onToggleImportant}>
                    <i className='fa fa-star'></i>
                </button>
                <button className='btn-trash btn-sm' type='button' onClick={props.onDelete}>
                    <i className='fa fa-trash-o'></i>
                </button>
                <i className='fa fa-heart'></i>
            </div>
        </div>
    )
}

export default PostListItem