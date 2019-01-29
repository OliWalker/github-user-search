import React from 'react';
import { Query } from 'react-apollo';
import { USER_LIST_QUERY } from '../../queries';
import PropTypes from 'prop-types';
import './GithubUserSearch.css';
import LoadingSpinner from './LoadingSpinner';

const UserList = ({name}) => {

  UserList.propTypes = {
    name: PropTypes.string.isRequired
  };

  if (!name) return null;
  return (
    <ul className='github__search__user__list'>
    <Query 
      query={USER_LIST_QUERY}
      variables={{name}}
    >
      {({data, loading, error}) => {
        if (loading) return <LoadingSpinner />
        if (error) return <li style={{listStyle: 'none', padding: '10px', color: '#aaa', fontSize: '20px'}}>Oops! Something went wrong, try hitting refresh.</li>
        const {search: {edges}} = data;
        if (edges.length === 0) return <li><span>Sorry! We can't find users under that name.</span></li>
        return (
          edges.map(({node:{login, url, avatarUrl}}, i) => {
            if (!login || !url || !avatarUrl) return null;
            return (
              <li className='github__user' key={i}>
                <a href={url} rel='noopener noreferrer' target='_blank'>
                  <img alt={`${login}'s GitHub profile avatar`} src={avatarUrl}/>
                  <span>{login}</span>
                </a>
              </li>
            )
          })
        )
      }}
    </Query>
  </ul> 
)};

export default UserList;