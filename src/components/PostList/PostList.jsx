import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import './post-list.css'
import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDelete}) => {
    const postsElements = posts.map(p => {
        if (typeof p === 'object') {
            return (
                <li className='list-group-item'>
                    <PostListItem key={p.id} label={p.label} important={p.important} onDelete={() => onDelete(p.id)}/>
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