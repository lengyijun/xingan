import React,{Component} from 'react'
import PropTypes from 'prop-types'
import TagCloud from './tagcloud'
import {connect} from 'react-redux'

class Editor extends Component{
  componentWillMount(){
    const {nowNote,dispatch} =this.props
      this.state={
        title:nowNote.title,
        p:nowNote.p,
        keys:nowNote.keys,
        changed:false
      }
  }

componentWillReceiveProps(nextProps){
  const {updateById,putRemote}=this.props
  if("nowNote" in nextProps){
    var t={title:this.state.title,p:this.state.p}
    updateById(this.state.oldisnote,t)
    if(this.state.changed){
      putRemote(this.state.title,this.state.p,this.state.keys,this.state.oldisnote)
    }
    this.setState({
      oldisnote:nextProps.isnote,
      title:nextProps.nowNote.title,
      p:nextProps.nowNote.p,
      keys:nextProps.nowNote.keys,
      changed:false
    })
  }
  if("nowNote" in nextProps){
    this.setState({
      title:nextProps.nowNote.title,
      keys:nextProps.nowNote.keys,
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
        display={this.props.branch}
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
  isnote:PropTypes.number,
  putRemote:PropTypes.func,
  updateById:PropTypes.func
}

function mapPropToProps(state){
  return{
    isnote:state.isnote,
    branch:state.branch,
    nowNote:state.nowNote
  }
}

export default connect(mapPropToProps)(Editor)
