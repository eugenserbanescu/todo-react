import './main.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { create, edit, get } from './actions';
import Add from './add.js';
import Item from './item.js';

class Todos extends Component {
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    const { props } = this;
    return (
      <div>
        <div className="app-part">
          <h1 className="title">Stuff To Do</h1>
          <Add onAdd={props.createTodo} />
        </div>
        <div className="app-part">
          <ul className="todo-list">
            {props.list.map(id => (
              <Item key={id} onEdit={props.editTodo} {...props.byId[id]} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return state.todos;
}

const mapDispatchToProps = {
  createTodo: create,
  editTodo: edit,
  getTodos: get,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
