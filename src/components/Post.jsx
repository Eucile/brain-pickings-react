import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  var mainContentStyles = {
    padding: '0 2em',
    marginLeft: '1em',
  }
  var titleStyles = {
    margin: 0,
    fontFamily: "'Fira Sans', sans-serif",
  }
  var quoteStyles = {
    borderBottom: '1px solid #d9d9d9',
    padding: '0 1.5em 1em',
    fontSize: '1.25em',
    lineHeight: '1.4em',
  }
  var authorStyles = {
    color: '#b3b3b3',
  };
  return(
    <div>
      <div style={mainContentStyles}>
          <h1 style={titleStyles}><a href="">{props.title}</a></h1>
          <h2 style={quoteStyles}>“{props.quote}”</h2>
          <p style={authorStyles}>{props.author}</p>
          <p>{props.content}</p>
      </div>  
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Post;