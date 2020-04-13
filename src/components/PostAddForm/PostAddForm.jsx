import React, {Component} from "react";
import './post-add-form.css'


class PostAddForm extends Component {
    state = {
        newPostText: ''
    }
    /*реализация контролируемого инпута*/
    onInputChanged = (e) => {
        this.setState({newPostText: e.currentTarget.value})
    }
    /*отправка формы в ф-ю по добавлению поста*/
    onSubmit = (e) => {
        e.preventDefault()
        this.props.addPost(this.state.newPostText)
        this.setState({newPostText: ''})
    }
    render() {
        return (
            <form className='bottom-panel d-flex' onSubmit={this.onSubmit}>
                <input type="text" placeholder='О чем Вы думаете сейчас?' className='form-control new-post-label'
                onChange={this.onInputChanged} value={this.state.newPostText}/>
                <button type='submit' className='btn btn-outline-secondary' disabled={this.state.newPostText===''}>
                    Добавить
                </button>
            </form>
        )
    }
}

export default PostAddForm