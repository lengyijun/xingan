import React,{Component} from 'react'
import {connect} from 'react-redux'
import TODO from './todo'
import {onId,updatetitle} from './action'

class NoteList extends Component{
  componentWillMount(){
    const {notes}=this.props;
    this.state={
      localnotes:notes,
      inputvalue:"",
      clickedid:0
    }
  }
  componentWillReceiveProps(nextProps){
    if('notes' in nextProps){
      console.log("new note come to notelist")
      console.log(nextProps.notes)
      this.setState({
        localnotes:nextProps.notes,
        inputvalue:""
      })
    }
  }

  search(x){
    const {dispatch}=this.props
    dispatch({
      type:"SEARCH",
      payload:{x}
    })
  }

  showAllNotes(){
    const {notes}=this.props;
    this.setState({
      localnotes:notes
    })
  }

  updateInputValue(evt){
    this.setState({
      inputvalue: evt.target.value
    })
  }
  
  handleItemClick(id){
    this.updateId(id)
    this.setState({
      clickedid:id
    })
  }

  updateId(x){
    const {dispatch}=this.props
    dispatch(onId(x))
  }

  handleDoubleClick(){
    const {dispatch}=this.props
    dispatch(updatetitle("SSE"))
    dispatch({type:"INIT"})
  }

  render(){
    const {middleTitle}=this.props;
    var handleItemClick=this.handleItemClick
    var t=[]
    for(let i=0;i<this.state.localnotes.length;++i){
      var isClicked= this.state.localnotes[i].id === this.state.clickedid
      t.push(<TODO task={this.state.localnotes[i]}
        updateId={handleItemClick.bind(this)}
        isClicked={isClicked} />)
    }
    return(
      <div id="notes-list">
      <div id="after-notes-list">
      <div id="list-header" onDoubleClick={this.handleDoubleClick.bind(this)}>
        <h4>{middleTitle}</h4>

        <div className="input-group search">
          <input type="text" className="form-control" placeholder="Search for..." value={this.state.inputvalue} onChange={this.updateInputValue.bind(this)} />
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-search" onClick={x => {this.search(this.state.inputvalue);this.setState({title:"search "+this.state.inputvalue})}}></i>
          </span>
        </div>

      </div>

      <div id="container">
      <ul className="list-group">
        {t}
      </ul>
      </div>
      </div>
      </div>
    )
  }
}

function mapPropToProps(state){
  return{
    notes: state.tasks,
    middleTitle:state.middleTitle,
    isnote:state.isnote
  }
}

export default connect(mapPropToProps)(NoteList)
