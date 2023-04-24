import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class index extends Component {
  handleKeyUp=(event)=>{
    console.log(this.props)
    const {keyCode,target}=event
    if(keyCode!==13) return
    if(target.value.trim()===''){
      alert('請輸入內容')
      return
    }
    const todoObj={id:nanoid(),name:target.value,done:false}
    this.props.addTodo(todoObj)
    target.value=''
  }

  render() {
    
    return (
      <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="請輸入你的任務名稱，按ENTER鍵確認"/>
      </div>
    )
  }
}
