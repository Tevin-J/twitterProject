import React, {Component} from 'react';
import './app.css';
import styled from 'styled-components'
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

/*создаем styledComponent*/
const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

class App extends Component {
    state = {
        data: [
            {id: 0, label: 'Going to learn React', important: true, like: true},
            {id: 1, label: 'That is so good', important: false, like: true},
            {id: 2, label: 'I need a break', important: false, like: true}
        ],
        term: '',
        nextPostId: 3,
        filter: 'all'
    }
    /*Удаление поста*/
    deleteItem = (id) => {
        this.setState({
            data: this.state.data.filter(el => {
                if (el.id !== id) {
                    return el
                }
            })
        })
    }
    /*Добавление нового поста*/
    addItem = (text) => {
        const newItem = {
            id: this.state.nextPostId,
            label: text,
            important: false,
            like: false
        }
        this.setState({
            data: [...this.state.data, newItem],
            nextPostId: this.state.nextPostId + 1
        })
    }
    /*объединенная ф-я для реализации лайка и выделения поста в важные*/
    onToggleItem = (id, obj) => {
        this.setState({data: this.state.data.map(el => {
                if (el.id === id) {
                    return {...el, ...obj}
                } else {
                    return el
                }
            })})
    }
    /*Сделать пост важным*/
    onToggleImportant = (id) => {
        this.onToggleItem(id, {important: !this.state.data[id].important})
    }
    /*поставить лайк посту*/
    onToggleLiked = (id) => {
        this.onToggleItem(id, {like: !this.state.data[id].like})
    }
    /*найти пост из списка всех постов без учета регистра*/
    SearchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    /*Обновление списка постов в зависимости от значения в инпуте поиска*/
    updateSearch = (term) => {
        this.setState({term})
    }
    /*фильтрация постов*/
    filterPosts = (items, filter) => {
        if (filter === 'like') {
            return items.filter(el => el.like)
        } else {
            return items
        }
    }
    /*изменение свойства фильтра*/
    toggleFilter = (filter) => {
        this.setState({filter})
    }
    render() {
        /*отображаем только те посты которые прошли через поиск и фильтрацию*/
        const visiblePosts = this.filterPosts(this.SearchPost(this.state.data, this.state.term), this.state.filter)
        const likedPosts = this.state.data.filter(el => el.like).length
        const allPosts = this.state.data.length
        return (
            <AppBlock>
                <AppHeader allPosts={allPosts} likedPosts={likedPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel updateSearch={this.updateSearch}/>
                    <PostStatusFilter filter={this.state.filter} toggleFilter={this.toggleFilter}/>
                </div>
                <PostList posts={visiblePosts} onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked}/>
                <PostAddForm addPost={this.addItem}/>
            </AppBlock>
        );
    }
}

export default App;
