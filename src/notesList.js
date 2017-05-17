import React,{Component,PropTypes} from 'react'
import TODO from './todo'

class NoteList extends Component{
  componentWillMount(){
    const {notes}=this.props;
    this.state={
      localnotes:notes,
      show:"ALL",
      inputvalue:"",
      title:"SSE"
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

  filterStar(){
    const {notes}=this.props;
    var notea=notes.filter(function (x) {
      return(x.star)
    })
    this.setState({
      localnotes:notea
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

  render(){
    const {search,updateId}=this.props;
    var t=this.state.localnotes.map(function (x) {
      return(<TODO task={x} updateId={updateId}/>)
    })
    console.log(t)
    return(
      <div id="notes-list">
      <div id="after-notes-list">
      <div id="list-header">
        <h3>{this.state.title}</h3>
      <div className="btn-group btn-group-justified" role="group">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={this.showAllNotes.bind(this)}>All Notes</button>
          </div>

        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default" onClick={this.filterStar.bind(this)}>Favorites</button>
        </div>
      </div>

      <div className="btn-group btn-group-justified" id="search" role="group">
        <div className="input-group search">
          <input type="text" className="form-control" placeholder="Search for..." value={this.state.inputvalue} onChange={this.updateInputValue.bind(this)} />
          <span className="input-group-addon">
            <i className="glyphicon glyphicon-search" onClick={x => {search(this.state.inputvalue);this.setState({title:"search "+this.state.inputvalue})}}></i>
          </span>
        </div>
      </div>

      </div>

      <div className="container" id="container">
      <div className="list-group">
      <a className="list-group-item" href="#">
      <section>
      <ul>
        {t}
      </ul>
      </section>
      </a>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

NoteList.PropTypes={
  notes: PropTypes.array.isRequired,
  updateId:PropTypes.func.isRequired,
  search:PropTypes.func.isRequired
}


export default NoteList
