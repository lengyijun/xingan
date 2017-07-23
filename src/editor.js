import React,{Component} from 'react'
import PropTypes from 'prop-types'
import TagCloud from './tagcloud'

class Editor extends Component{
  componentWillMount(){
    const {yournote,isnote,dispatch} =this.props
      this.state={
        oldisnote:isnote,
        t:yournote,
        title:yournote.title,
        p:yournote.p,
        keys:yournote.keys,
        changed:false
      }
  }

componentWillReceiveProps(nextProps){
  const {updateById,putRemote}=this.props
  if("yournote" in nextProps){
    console.log("in next prop ---------------------")
    var t={title:this.state.title,p:this.state.p}
    updateById(this.state.oldisnote,t)
    if(this.state.changed){
      putRemote(this.state.title,this.state.p,this.state.keys,this.state.oldisnote)
    }
    this.setState({
      oldisnote:nextProps.isnote,
      t:nextProps.yournote,
      title:nextProps.yournote.title,
      p:nextProps.yournote.p,
      keys:nextProps.yournote.keys,
      changed:false
    })
  }
}
  render(){
    var title=this.state.title
    var p=this.state.p
    var keys=this.state.keys
    return(
    <div id="note-editor">
    <div className="form-group" id="form-group">
      <input type="text" name="title"
      className="title form-control"
      value={title}
      onChange={this._onChangeTitle.bind(this)}
      placeholder="请输入标题" />
      <TagCloud 
        keys={keys}
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
    this.setState({
        title:e.target.value,
        changed:true
      })
  }

  _onChangeContent(e){
    this.setState({
      p:e.target.value,
      changed:true
    })
  }
}

Editor.PropTypes={
  yournote:PropTypes.object.isRequired,
  isnote:PropTypes.number,
  putRemote:PropTypes.func,
  updateById:PropTypes.func
}

export default Editor
