import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

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
      <style jsx>{`
        .monogram {
          border-bottom: 1px solid #d9d9d9;
          text-align: center;
          margin-bottom: 2em;
        }
        .bp {
          width: 82px;
          margin-bottom: 2em;
        }
      `}</style>
      <div style={mainContentStyles}>
          <h1 style={titleStyles}><a href="">{props.title}</a></h1>
          <h2 style={quoteStyles}>“{props.quote}”</h2>
          <p style={authorStyles}>{props.author} - posted {props.formattedWaitTime} ago</p>
          <p>{props.content}</p>
          <div className="monogram">
            <img className="bp" src="https://www.brainpickings.org/wp-content/themes/brainpickings/images/bp_monogram@2x.png"/>
          </div>
      </div>  
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Post;
