import React from 'react';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

function NewPostControl(props) {
  return(
    <div>
      <NewPostForm
        onNewPostCreation={props.onNewPostCreation}
      />
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;
