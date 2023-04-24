import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
  render() {
    return (
      <div className="todo-header">
          <input type="text" placeholder="請輸入你的任務名稱，按ENTER鍵確認"/>
      </div>
    )
  }
}
