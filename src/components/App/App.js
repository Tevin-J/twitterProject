import React from 'react';
import './app.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

const App = () => {
    const data = [
        {id: 'rgh-ebn', label: 'Going to learn React', important: true},
        {id: 'ste-fgm', label: 'That is so good', important: false},
        {id: 'wet-yuu', label: 'I need a break', important: false}
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    );
}

export default App;
