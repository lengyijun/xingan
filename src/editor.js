import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Editor extends Component{
  componentWillMount(){
    const {yournote,isnote} =this.props
      this.state={
        oldisnote:isnote,
        t:yournote,
        title:yournote.title,
        p:yournote.p
      }
  }

componentWillReceiveProps(nextProps){
  const {updateById,yournote}=this.props
  if("yournote" in nextProps){
    var t={title:this.state.title,p:this.state.p}
    updateById(this.state.oldisnote,t)
    this.setState({
      oldisnote:nextProps.isnote,
      t:nextProps.yournote,
      title:nextProps.yournote.title,
      p:nextProps.yournote.p
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
  yournote:PropTypes.object.isRequired,
  isnote:PropTypes.number
}

export default Editor
