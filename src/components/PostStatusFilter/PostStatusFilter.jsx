import React, {Component} from "react";
import './post-status-filter.css'

class PostStatusFilter extends Component {
    state = {
        buttons: [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось'}
        ]
    }
    render() {
        const buttonElements = this.state.buttons.map(b => {
            /*добавление класса активности кнопки*/
            const active = this.props.filter === b.name
            const newClassName = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button key={b.name} type='button' className={`btn ${newClassName}`} onClick={() => this.props.toggleFilter(b.name)}>{b.label}</button>
            )
        })
        return (
            <div className='btn-group'>
                {buttonElements}
            </div>
        )
    }
}

export default PostStatusFilter