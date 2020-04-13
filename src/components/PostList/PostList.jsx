import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import './post-list.css'
import { ListGroup } from 'reactstrap';

/*ListGroup из библиотеки reactstrap*/
const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const postsElements = posts.map(p => {
        if (typeof p === 'object') {
            return (
                <li className='list-group-item'>
                    <PostListItem key={p.id} label={p.label} important={p.important} onDelete={() => onDelete(p.id)}
                    onToggleImportant={()=>onToggleImportant(p.id)} onToggleLiked={()=>onToggleLiked(p.id)}
                    like={p.like}/>
                </li>
            )
        }
    })
    return (
        <ListGroup className='app-list'>
            {postsElements}
        </ListGroup>
    )
}
export default PostList