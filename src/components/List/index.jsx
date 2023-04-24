import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class index extends Component {
  render() {
    const {todos,updateTodo,deleteTodoItem} = this.props
    return (

        <ul className="todo-main">
          {
           todos.map((todoObj) => {
              return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodoItem={deleteTodoItem}/>
            })
          }
        </ul>

    )
  }
}
