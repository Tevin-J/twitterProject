import React from 'react';
import './app.css';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import PostStatusFilter from "../PostStatusFilter/PostStatusFilter";
import PostList from "../PostList/PostList";
import PostAddForm from "../PostAddForm/PostAddForm";

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
  );
}

export default App;
