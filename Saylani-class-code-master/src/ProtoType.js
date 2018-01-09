import React, { Component } from 'react';
import PropTypes from 'prop-types'





class Child extends Component {
  render() {
    return (
      <button >{this.props.text}</button>
    )
  }
}

// defined proptypes
// where text props will only accept string
// and it is required
Child.propTypes = {
    text: PropTypes.string.isRequired
}

export default Child;
