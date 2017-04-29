import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Editor from './editor'
import Toolbar from './toolbar'
import NoteList from './notesList'
import {add,onId} from './action'

class App extends Component{
  componentWillMount(){
    const{dispatch}=this.props;
    dispatch({type:"INIT"})
  }

  render(){
    const{dispatch}=this.props;
    console.log(this.props.tasks)
    return(
      <div>
        <header />
        <Toolbar
          addnotes={(x,y) => dispatch(add(x,y))}
        />
        <NoteList
          notes={this.props.tasks}
          updateId={x => dispatch(onId(x))}
        />
        <Editor
          notes={this.props.tasks}
          isnewnote={this.props.isnewnote}
          isnote={this.props.isnote}
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
