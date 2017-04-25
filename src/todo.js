import React,{Component,PropTypes} from 'react'

class TODO extends Component{

  render(){
    const{task,updateId}=this.props

    return(
      <li>
        <div className="view" onClick={function () {
          console.log(task.id)
          updateId(task.id)
        }}>
          <label>
            {task.p}
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
