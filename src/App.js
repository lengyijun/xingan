import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Editor from './editor'
import Toolbar from './toolbar'
import NoteList from './notesList'
import {add,remove,updateById} from './action'
import TreeDemo from './treedemo'
import Vis from './vis'
import hengda from '../img/hengda.png'

class App extends Component{
  componentWillMount(){
    const{dispatch}=this.props;
    dispatch({type:"INIT"})
    this.setState({
      sidebar:true
    })
  }

  toggleSidebar() {
    document.body.classList.toggle("menu-active", this.state.sidebar)
    var arrow=document.getElementById("arrow")
    arrow.classList.toggle("glyphicon-circle-arrow-right",this.state.sidebar)
    arrow.classList.toggle("glyphicon-circle-arrow-left",!this.state.sidebar)
    if(this.state.sidebar){ 
      document.getElementById("toolbar").style.display="none"
      document.getElementById("notes-list").style.display="none"
      document.getElementById("note-editor").style.width="100%" //我在左边的时候

    }else{
      document.getElementById("toolbar").style.display="block"
      document.getElementById("notes-list").style.display="block"
      document.getElementById("note-editor").style.width="calc(100% - 500px)"  //我在右边的时候
    }
    this.setState({
      sidebar: !this.state.sidebar
    })
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
          <div onClick={this.toggleSidebar.bind(this)}  style={{width:"200px",height:"40px",position:"absolute",right:"0px",top:0,padding:"0 23px",paddingRight:0}}>
            <i className="glyphicon glyphicon-circle-arrow-right" id="arrow" style={{position:"relative",float:"right",height:"40px",width:"40px",fontSize:"30px",marginTop:"3px"}} />
              <img src={hengda} style={{width:"34px",height:"34px",marginTop:"3px",position:"relative",float:"right",marginRight:"15px"}}/>
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
          addnotes={(x,y,keys) => {dispatch({
                                      type:"ADDREMOTE",
                                      payload:{x,y,keys}
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
