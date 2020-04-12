import React, {Component} from 'react';
import './app.css';
import styled from 'styled-components'
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

class App extends Component {
    state = {
        data: [
            {id: 1, label: 'Going to learn React', important: true},
            {id: 2, label: 'That is so good', important: false},
            {id: 3, label: 'I need a break', important: false}
        ],
        nextPostId: 4
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            const newArr = data.filter(el => {
                if (el.id !== id) {
                    return el
                }
            })
            return {
                data: newArr
            }
        })
    }
    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.nextPostId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }
    render() {
        return (
            <AppBlock>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data} onDelete={this.deleteItem}/>
                <PostAddForm onAdd={this.addItem}/>
            </AppBlock>
        );
    }
}

export default App;
