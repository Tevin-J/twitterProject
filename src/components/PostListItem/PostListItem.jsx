import React from "react";
import './post-list-item.css'

class PostListItem extends React.Component {
    state = {
        important: false,
        like: false
    }
    onImportantClick = () => {
       this.setState({important: !this.state.important})
    }
    onLikeClick = () => {
        this.setState({like: !this.state.like})
    }

    render() {
        let classNames = 'app-list-item d-flex justify-content-between'
        if (this.state.important) {
            classNames += ' important'
        }
        if (this.state.like) {
            classNames += ' like'
        }
        return (
            <div className={classNames}>
                <span className='app-list-item-label' onDoubleClick={this.onLikeClick}>
                    {this.props.label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button className='btn-star btn-sm' type='button' onClick={this.onImportantClick}>
                        <i className='fa fa-star'></i>
                    </button>
                    <button className='btn-trash btn-sm' type='button' onClick={this.props.onDelete}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                    <i className='fa fa-heart'></i>
                </div>
            </div>
        )
    }
}

export default PostListItem