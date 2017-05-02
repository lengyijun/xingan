import React,{Component,PropTypes} from 'react'
import TODO from './todo'

class NoteList extends Component{

  render(){
    const {dispatch,updateId,notes}=this.props;
    var t=notes.map(function (x) {
        // <div onClick={updateId(x.id)}>
      return(<TODO task={x} updateId={updateId}/>)
    })
    return(
      <div id="notes-list">
      <div id="after-notes-list">
      <div id="list-header">
        <h2>我的笔记</h2>
      <div className="btn-group btn-group-justified" role="group">
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" >All Notes</button>
          </div>

        <div className="btn-group" role="group">
          <button type="button" className="btn btn-default" >Favorites</button>
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
