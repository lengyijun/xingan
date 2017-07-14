import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Editor from './editor'
import Toolbar from './toolbar'
import NoteList from './notesList'
import {add,remove,updateById} from './action'
import TreeDemo from './treedemo'
import Vis from './vis'

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
      <div
      style={{ height: "100%"}}>
        <header>
          <div id="kb-info">
          <h3 id="kbname">
            SSE
          </h3>
          </div>
        </header>
        <div id="left">
        <Toolbar
          notes={tasks}
          remove={x => {dispatch(remove());
                        dispatch({
                            type:"DELREMOTE",
                            payload:{id:isnote}
                        })
          }}
          addnotes={(x,y,keystring) => {dispatch({
                                      type:"ADDREMOTE",
                                      payload:{x,y,keystring}
                                     });
                              dispatch(add(x,y))
                                     }}
          append={x => {dispatch({type:"APPEND_SAGA"})}}
        />
        <NoteList />
        <Editor
          yournote={t}
          isnote={this.props.isnote}
          updateById={(x,y) => dispatch(updateById(x,y))}
        />
        </div>
        
        <Vis />
        {/*<TreeDemo />*/}
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
    isnote:state.isnote
  }
}

export default connect(mapPropToProps)(App)
