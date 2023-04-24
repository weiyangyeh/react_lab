import React, { Component } from 'react'
import './index.css'
export default class index extends Component {

  clearComletedTask = () => {
    this.props.clearComletedTask()
  }

  updateTodoCheck = (event) => {
    this.props.updateTodoCheck(event.target.checked)
  }

  render() {
    const {todos} = this.props
    const doneCount = todos.reduce((pre,curr)=>{
        return pre + (curr.done ? 1 : 0);
    },0)
    const total = todos.length
    // const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)  
    console.log('doneCount',doneCount)
    console.log('total',total)
    return (
      <div className="todo-footer">
          <label>
              <input type="checkbox" onChange={this.updateTodoCheck} checked = {doneCount === total ? ( doneCount!==0 ?true : false) : false}/>
          </label>
          <span>
              <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button className="btn btn-danger" onClick={this.clearComletedTask}>清除已完成任務</button>
      </div>
    )
  }
}
