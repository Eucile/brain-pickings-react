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
        input, textarea {
          height: auto;
          border: 1px solid #8c8c8c;
          padding: 10px 0px 7px 10px;
          margin: 1em;
          color: #262626;
          font-size: .75em;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        button {
          color: rgb(38, 38, 38);
          background-color: rgb(255, 219, 0);
          border-radius: 25px;
          padding: 10px 20px;
          text-decoration: none;
          display: inline-block;
          border: none;
          font-weight: bold;
        }
        .form-box {
          background: #e6e6e6;
          padding: 1.25em 5.882352941176% 20px;
          margin: 2.7em 0 0;
          width: 80%;
          margin: 0 auto;
        }
        .content-box {
          width: 87%;
          height: 300px;
        }
      `}</style>
      <form className="form-box" onSubmit={handleNewPostFormSubmission}>
        <div>
          <input
            type='text'
            id='title'
            placeholder='Title:'
            ref={(input) => {_title = input;}}/>
          <input
            type='text'
            id='quote'
            placeholder='Quote:'
            ref={(input) => {_quote = input;}}/>
          <input
            type='text'
            id='author'
            placeholder='Author name:'
            ref={(input) => {_author = input;}}/>
        </div>
        <textarea className="content-box"
          id='content'
          placeholder='Content:'
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
