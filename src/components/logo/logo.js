import React, { Component } from 'react';
import logoImg from '../../logo.gif';
import './logo.css'

export default class logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <img src={ logoImg } alt=""/>
      </div>
    );
  }
}