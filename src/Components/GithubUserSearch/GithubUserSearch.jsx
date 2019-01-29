import React, { useState } from 'react';
import UserList from './UserList';
import './GithubUserSearch.css';
import GithubLogoSvg from './GithubLogoSvg';

const GithubUserSearch = () => {
  const [search, setSearch] = useState('');

  return (
    <form onSubmit={e => e.preventDefault()} className="github__search__input">
      <div>
        <input
          aria-labelledby="search input to look up users"
          placeholder="Search for users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <a style={{height: '75px'}}
          aria-labelledby="link to the source code"
          rel='noopener noreferrer' 
          target='_blank'
          href='https://github.com/OliWalker/github-user-search'>
        <GithubLogoSvg
          style={{ borderBottomRightRadius: search ? '0px' : '6px' }}
        />
        </a>
      </div>
      <UserList name={search} />
    </form>
  );
};

export default GithubUserSearch;
