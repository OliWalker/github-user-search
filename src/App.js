import React from 'react';
import './App.css';
import GithubUserSearch from './Components/GithubUserSearch/GithubUserSearch';

const App = () => (
    <div className='main_page'> 
      <div className='main_content'>
        <h1 className='main_heading'>
          Search for your favorite GitHub Users
        </h1>
        <GithubUserSearch />
      </div>
    </div>
  )

export default App;