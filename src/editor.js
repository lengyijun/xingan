import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Editor extends Component{
  render(){
    const {notes,isnewnote,isnote} =this.props
    if(isnewnote){
      this.state={
        title:"",
        p:""
      }
    }else{
      var t=notes.find(function (x) {
        return(x.id == isnote)
      })
      this.state={
        t:t,
        title:t.title,
        p:t.p
      }
    }
    return(
    <div id="note-editor">
    <div className="form-group" id="form-group">
      <input type="text" name="title"
      className="title form-control"
      value={this.state.t.title}
      // onChange={this._onChangeTitle.bind(this)}
      placeholder="请输入标题" />

      <textarea
        value={this.state.t.p}
        // onChange={this._onChangeContent.bind(this)}
        placeholder="请输入正文" >
      </textarea>
    </div>
    </div>

    )
  }

  _onChangeTitle(e){
    this.setState(
      {
        title:e.target.value
      }
    )
  }

  _onChangeContent(e){
    this.setState({
      p:e.target.value
    })
  }
}

Editor.PropTypes={
  notes: PropTypes.array.isRequired,
  isnewnote:PropTypes.bool,
  isnote:PropTypes.number
}

export default Editor
