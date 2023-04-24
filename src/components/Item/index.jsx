import React, { Component } from 'react'
import './index.css'

export default class index extends Component {

  state = {mouse:false} //標識鼠標移入、移出

  handleMouse = (flag) => {
    return () => {
      this.setState({mouse:flag});
    }
  }

  handleCheck = (id) => {
    return (event) => {
      this.props.updateTodo(this.props.id,event.target.checked)
    }
  }

  deleteTodoItem = (id) => {  
    if(window.confirm('確定刪除嗎？')) {
      this.props.deleteTodoItem(id);
    }
  }

  render() {
    const {id,name,done} = this.props;
    const {mouse} = this.state;
    return (
 
      <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} 
        onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        
        <label htmlFor={id}><input type='checkbox' id={id} checked={done} onChange={this.handleCheck(id)}/>
        {name}</label>
        <button className='btn btn-danger' style={{display:mouse ? 'block' : 'none'}} onClick={() => {this.deleteTodoItem(id)}}>刪除</button>
      </li>

    )
  }
}
