import React from 'react';
import PropTypes from 'prop-types';

function NewPostForm(props){
  let _title = null;
  let _quote = null;
  let _author = null;
  let _content = null;

  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, quote: _quote.value, author: _author.value, content: _content.value});
    _title.value = '';
    _quote.value = '';
    _author.value = '';
    _content.value = '';
  }

  return (

    <div>
      <style jsx>{`
      `}</style>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title of new post:'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='quote'
          placeholder='Opening quote:'
          ref={(input) => {_quote = input;}}/>
        <input
          type='text'
          id='author'
          placeholder='Author name:'
          ref={(input) => {_author = input;}}/>
        <textarea 
          id='content'
          placeholder='New article content:'
          ref={(textarea) => {_content = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
