import React, {Component} from 'react';
import {store} from '../AppStore';
import PropTypes from 'prop-types';

let input;

const SimpleForm = ({dispatch, id, text}) => (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch({type: 'UPDATE', id: id, text: input.text});
        input.value = '';
      }}
    >
      <input
        type="text"
        ref={node => {
          input = node;
        }}
        value={text}
      />
      <button type="submit">Change</button>
    </form>
  </div>
);

SimpleForm.rropTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

export default SimpleForm;
