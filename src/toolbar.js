import React,{Component,PropTypes} from 'react'

class Toolbar extends Component{
  render(){
    return(
      <div id="toolbar">
        <i className="glyphicon logo"><img src="../assets/logo.png" width="30" height="30" /></i>
        <i className="glyphicon glyphicon-plus"></i>
        <i className="glyphicon glyphicon-star" ></i>
        <i className="glyphicon glyphicon-remove"></i>
      </div>
    )
  }
}

export default Toolbar
