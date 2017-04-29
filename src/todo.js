import React,{Component,PropTypes} from 'react'

class TODO extends Component{

  render(){
    const{task,updateId}=this.props

    return(
      <li id="todo-item">
        <div className="view" onClick={function () {
          updateId(task.id)
        }}>
          <h2>
            {task.title}
          </h2>
          <label>
            {task.p.trim().substring(0,30)}
          </label>
        </div>
      </li>

    )
  }

}

TODO.PropTypes={
  task:PropTypes.object.isRequired,
  updateId:PropTypes.func.isRequired
}

export default TODO
