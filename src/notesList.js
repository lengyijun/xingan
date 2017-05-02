import React,{Component,PropTypes} from 'react'
import TODO from './todo'

class NoteList extends Component{
  componentWillMount(){
    const {notes}=this.props;
    this.state={
      localnotes:notes,
      show:"ALL"
    }
  }
  componentWillReceiveProps(nextProps){
    if('notes' in nextProps){
      this.setState({
        localnotes:nextProps.notes
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

  render(){
    const {dispatch,updateId,notes}=this.props;
    var t=this.state.localnotes.map(function (x) {
      return(<TODO task={x} updateId={updateId}/>)
    })
    return(
      <div id="notes-list">
      <div id="after-notes-list">
      <div id="list-header">
        <h2>我的笔记</h2>
      <div className="btn-group btn-group-justified" role="group">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={this.showAllNotes.bind(this)}>All Notes</button>
          </div>

        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default" onClick={this.filterStar.bind(this)}>Favorites</button>
        </div>
      </div>

      <div className="btn-group btn-group-justified" role="group">
      <div className="input-group search">
      <input type="text" className="form-control" placeholder="Search for..." />
      <span className="input-group-addon">
      <i className="glyphicon glyphicon-search"></i>
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
  updateId:PropTypes.func.isRequired
}


export default NoteList
