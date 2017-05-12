import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Editor from './editor'
import Toolbar from './toolbar'
import NoteList from './notesList'
import {star,add,onId,remove,updateById} from './action'

class App extends Component{
  componentWillMount(){
    const{dispatch}=this.props;
    dispatch({type:"INIT"})
  }


  render(){
    const{dispatch,tasks,isnote}=this.props;
    var t=tasks.find(function (x) {
      return(x.id == isnote)
    })
    return(
      <div>
        <header>
          <div id="kb-info">
          <h3 id="kbname">
            个人笔记
          </h3>
          </div>
        </header>
        <Toolbar
          star={x => dispatch(star())}
          notes={tasks}
          sync={x => dispatch({type:"SYNC"})}
          remove={x => {dispatch(remove());
                        dispatch({
                            type:"DELREMOTE",
                            payload:{id:isnote}
                        })
          }}
          addnotes={(x,y) => {dispatch({
                                      type:"ADDREMOTE",
                                      payload:{y}
                                     });
                              dispatch(add(x,y))
                                     }}
        />
        <NoteList
          notes={this.props.tasks}
          updateId={x => dispatch(onId(x))}
        />
        <Editor
          yournote={t}
          isnote={this.props.isnote}
          updateById={(x,y) => dispatch(updateById(x,y))}
        />
      </div>
    )
  }
}

App.PropTypes={
  tasks: PropTypes.array.isRequired
}

function mapPropToProps(state){
  return{
    tasks: state.tasks,
    isnewnote:state.isnewnote,
    isnote:state.isnote
  }
}

export default connect(mapPropToProps)(App)
