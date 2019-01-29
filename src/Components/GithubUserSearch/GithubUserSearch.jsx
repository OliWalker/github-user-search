import React, { useState } from 'react';
import UserList from './UserList'
import './GithubUserSearch.css';
import GithubLogoSvg from './GithubLogoSvg';

const GithubUserSearch = () => {

  const [search, setSearch] = useState('');

  return (
    <form onSubmit={e=>e.preventDefault()} className='github__search__input'>
      <div>
        <input 
          placeholder='Search for users...'
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
        />
        <GithubLogoSvg style={{ borderBottomRightRadius: search ? '0px' : '6px'}} />
      </div>
      <UserList name={search} />
    </form>
  )
}

export default GithubUserSearch;