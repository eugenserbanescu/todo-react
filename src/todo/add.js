import './add.css';
import React, { Component } from 'react';

class Add extends Component {
  state = {
    inFocus: false,
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.titleInput.value, '');
    this.setState({
      inFocus: false,
    });
    this.titleInput.blur();
    this.titleInput.value = '';
  };
  onFocus = () => {
    this.setState({
      inFocus: true,
    });
  };
  render() {
    const { inFocus } = this.state;
    return (
      <div className="add-wrapper">
        <form onSubmit={this.onSubmit}>
          <input
            className="add-input"
            placeholder="What do you need to do?"
            onFocus={() => this.onFocus()}
            ref={input => {
              this.titleInput = input;
            }}
            type="text"
          />
          {inFocus && (
            <input className="add-button" type="submit" value="Add" />
          )}
        </form>
      </div>
    );
  }
}

export default Add;
