import React,{Component,PropTypes} from 'react'

class Toolbar extends Component{
    handleClick(event){
      const {addnotes}=this.props
      var title=event.target.value
      console.log(title)
      var reader=new FileReader();
      reader.onload=function(){
        var content=reader.result
        addnotes(title,content)
      }
      reader.readAsText(event.target.files[0])
    }
  render(){

    return(
      <div id="toolbar">
        <i className="glyphicon glyphicon-plus"></i>
        <i className="glyphicon glyphicon-star" ></i>
        <i className="glyphicon glyphicon-remove"></i>
        <label onChange={this.handleClick.bind(this)}>
        <input type="file" id="tohidinput" />
        <i className="glyphicon glyphicon-upload" ></i>
        </label>
      </div>
    )
  }
}
Toolbar.PropTypes={
  addnotes:PropTypes.func
}
export default Toolbar
