import React from 'react';
import PropTypes from 'prop-types';
import PostList from './PostList';
import Moment from 'moment';

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