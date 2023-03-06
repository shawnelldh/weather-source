import React from 'react';
import PropTypes from 'prop-types';

const Input = props =>
  <form onSubmit={this.preventSubmit}>
    <input type='text' placeholder='Enter City Name...' onKeyDown={props.queryWeather}/>
  </form>

export default Input;