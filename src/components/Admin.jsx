import React from 'react';
import PropTypes from 'prop-types';
import App from './App';
import MainArticle from "./MainArticle";
import { Switch, Route } from 'react-router-dom';
import NewPostControl from './NewPostControl';

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <PostList postList={props.postList} />
    </div>
  );
}

Admin.propTypes = {
  postList: PropTypes.array
};

export default Admin;