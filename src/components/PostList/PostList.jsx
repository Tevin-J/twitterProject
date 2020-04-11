import React from "react";
import PostListItem from "../PostListItem/PostListItem";
import './post-list.css'

const PostList = ({posts}) => {
    const postsElements = posts.map(p => {
        return (
            <li className='list-group-item'>
                <PostListItem key={p.id} label={p.label} important={p.important}/>
            </li>
        )
    })
    return (
        <ul className='app-list list-group'>
            {postsElements}
        </ul>
    )
}
export default PostList