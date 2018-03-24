import './item.css';
import React, { Component } from 'react';

class TodoItem extends Component {
  state = {
    editing: false,
  };
  toggleEditing = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };
  onChange = e => {
    this.setState({
      title: e.target.value,
    });
  };
  edit = e => {
    e.preventDefault();
    const { props, state } = this;
    if (state.title !== props.title) {
      props.onEdit(props.id, { title: state.title });
    }
    this.setState({ editing: false, title: undefined });
  };
  toggleDone = () => {
    const { props } = this;
    props.onEdit(props.id, { done: !props.done });
  };
  render() {
    const { props, state } = this;
    const title = state.title || props.title;
    return (
      <li className="todo-item">
        <input
          className="done-toggle"
          type="checkbox"
          onChange={this.toggleDone}
        />
        {state.editing ? (
          <form className="form" onSubmit={this.edit}>
            <input
              className="todo-edit-title"
              onChange={this.onChange}
              type="text"
              value={title}
            />
            <input className="button-highlighted" type="submit" value="Save" />
            <button onClick={this.toggleEditing} className="button">
              Cancel
            </button>
          </form>
        ) : (
          <h3
            onClick={this.toggleEditing}
            className={`todo-title ${props.done ? 'done' : ''}`}
          >
            {props.title}
          </h3>
        )}
      </li>
    );
  }
}

export default TodoItem;
