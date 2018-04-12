import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor (props) {
    super(props)
    this.element = null
    this.arrayPointer = 0 // points the index of current sentence
    this.sPointer= 0
    this.index = 0
    this.setTextInputRef = element => {
      this.element = element;
    };
  }


  componentDidMount() {
    const { delay } = this.props
    setInterval(this.play.bind(this), delay)
  }

  play() {
    const {texts, cursor} = this.props
    const tang = this
    const arraylength = texts.length
    const textlength = texts[this.arrayPointer].length
    this.sPointer = this.sPointer + 1
    this.changePlaceholder(texts[this.arrayPointer].substr(0, this.sPointer)+ cursor)
    if(this.sPointer === textlength) {
      this.arrayPointer = this.arrayPointer === arraylength -1 ? 0 : this.arrayPointer + 1
      this.sPointer = 0
    }
};

  changePlaceholder(text) {
    this.element.setAttribute('placeholder', text)
  }
  render() {
    return (

      <input type={`text`}
             {...this.props}
             ref={this.setTextInputRef}
      />
    );
  }
}

export default Input;

Input.propTypes = {
  texts: PropTypes.array.isRequired,
  delay: PropTypes.number
};

Input.defaultProps = {
  delay: 200,
  cursor: '|'
};
