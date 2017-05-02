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

    sync1(){
      const {sync,notes}=this.props
      console.log("sync1")
      sync(notes)
    }
  render(){
    return(
      <section id="toolbar">
        <div id="firstgly">
          <i className="glyphicon glyphicon-plus"></i>
          <i className="glyphicon glyphicon-star"></i>
          <i className="glyphicon glyphicon-remove" onClick={this.sync1.bind(this)}></i>
          <label onChange={this.handleClick.bind(this)}>
          <input type="file" id="tohidinput" />
          <i className="glyphicon glyphicon-upload" ></i>
          </label>
        </div>
      </section>
    )
  }
}
Toolbar.PropTypes={
  addnotes:PropTypes.func,
  sync:PropTypes.func,
  notes:PropTypes.array
}
export default Toolbar
