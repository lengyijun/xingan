import React,{Component} from 'react'
import PropTypes from 'prop-types'
import TagCloud from './tagcloud'

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
  const {updateById}=this.props
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
    var keystring=p.split("\n").slice(-1).pop()
    return(
    <div id="note-editor">
    <div className="form-group" id="form-group">
      <input type="text" name="title"
      className="title form-control"
      value={title}
      onChange={this._onChangeTitle.bind(this)}
      placeholder="请输入标题" />
      <TagCloud 
        keystring={keystring}
      />

      <textarea
        spellCheck="false" autoCapitalize="off" autoComplete="off" autoCorrect="off"
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
