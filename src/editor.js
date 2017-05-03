import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Editor extends Component{
  componentWillMount(){
    const {notes,isnote} =this.props
      var t=notes.find(function (x) {
        return(x.id == isnote)
      })
      this.state={
        oldisnote:isnote,
        t:t,
        title:t.title,
        p:t.p
      }
  }

componentWillReceiveProps(nextProps){
  const {updateById,notes}=this.props
  if("isnote" in nextProps){
    var t={title:this.state.title,p:this.state.p}
    updateById(this.state.oldisnote,t)
    var note=notes.find(function (x) {
        return(x.id == nextProps.isnote)
    })
    this.setState({
      oldisnote:nextProps.isnote,
      t:note,
      title:note.title,
      p:note.p
    })
  }
}
  render(){
    var title=this.state.title
    var p=this.state.p
    return(
    <div id="note-editor">
    <div className="form-group" id="form-group">
      <input type="text" name="title"
      className="title form-control"
      value={title}
      onChange={this._onChangeTitle.bind(this)}
      placeholder="请输入标题" />

      <textarea
        value={p}
        onChange={this._onChangeContent.bind(this)}
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
  isnote:PropTypes.number
}

export default Editor
