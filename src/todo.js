import React,{Component,PropTypes} from 'react'

class TODO extends Component{
  render(){
    const{task,updateId}=this.props
    let listyle={
      background:"white"
    }
    if(this.props.isClicked){
      listyle['background']="#C5E7FF"
    }

    return(
      <li id="todo-item" style={listyle} title={task.title}>
        <div className="view" onClick={function () {
          updateId(task.id)
        }}>
          <h4>
            <i className="glyphicon glyphicon-book"></i>
            {task.title}
          </h4>
          <label>
            {task.p.trim()}
            {/*{task.p}*/}
          </label>
        </div>
      </li>

    )
  }

}

TODO.PropTypes={
  task:PropTypes.object.isRequired,
  updateId:PropTypes.func.isRequired,
  isClicked:PropTypes.bool.isRequired

}

export default TODO
