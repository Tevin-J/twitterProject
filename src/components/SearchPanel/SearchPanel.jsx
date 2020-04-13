import React, {Component} from "react";
import './search-panel.css'

class SearchPanel extends Component {
    state = {
        term: ''
    }
    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.updateSearch(term)
    }
    render() {
        return (
            <input className='form-control search-input' type='text' placeholder='Поиск по записям'
            onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel