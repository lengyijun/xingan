import React, { Component } from 'react'
import Graph from 'react-graph-vis'
import {connect} from 'react-redux'
import {onId,clickBranch} from './action'

class Vis extends Component {
     componentWillMount(){ 
        const{dispatch,graphjson,id2handleid}=this.props; 
        dispatch({type:"SAGAGRAPH"}) 
        this.setState({ 
            graphjson:graphjson,
            id2handleid:id2handleid
        }) 
    } 

    componentWillReceiveProps(nextProps){
        if("graphjson" in nextProps){
            console.log("new graphjson in vis")
            this.setState({
                graphjson:nextProps.graphjson
            })
        }
        if("id2handleid" in nextProps){
            this.setState({
                id2handleid:nextProps.id2handleid
            })
        }
        if("graphId" in nextProps){
            this.setState({
                graphid:nextProps.graphid
            })
        }
    }

    getIdfromHandleid(handleid){
        return(this.state.id2handleid(""+handleid))
    }

    render() {
        console.log("vis render new data")
        var f1=(function(a){
            return(function(id){
                console.log(id)
                return(a.state.id2handleid[id])

            })
        })(this)

        var f2=(function(context){
            return(function(id){
                const {dispatch}=context.props
                dispatch(onId(id))
            })
        })(this)

        var f3=(function(context){
            return(function(id){
                const {dispatch}=context.props
                dispatch(clickBranch(id))
            })
        })(this)

        var options = {
            height:"100%",
            width:"100%",
            interaction:{
                hover:true,
                dragNodes :false,
                navigationButtons: true,
                keyboard: true
            },
            physics: {
                enabled: false
            },
            layout: {
                hierarchical:{
                     sortMethod : 'directed'  //保证root在最上面
                }
            },
            edges: {
                // color: "#000000",
                width:2
            },
            nodes:{
                size:30,
                shape:'dot',
                font:{
                    size:18,
                    color:'#FFFFF'
                },
                borderWidth:2
            }
        };

        var events = {
            select: function (event) {
                // var { nodes, edges } = event;
                // console.log("event in visjs")
                // console.log(nodes)
                // console.log(edges)
            },
            hoverNode:function(event){
                console.log("hover ")
                console.log(event)
            },
            showPopup:function(event){
                console.log("show popup "+event)
            },
            selectNode:function(event){
                var id=event.nodes[0]
                var handleid=f1(id)
                if(handleid !== undefined){
                    f2(handleid)
                }else{
                    f3(id)
                }
            }
        }

        return (
            <div id="vis">
                <Graph graph={this.state.graphjson} options={options} events={events} style={{ width: '100%', height: '100%' }}/>
            </div>
        )
    }
}

function mapPropToProps(state){
  return{
      graphjson:{nodes:state.nodes,edges:state.edges},
      id2handleid:state.id2handleid,
      graphId:state.graphId
  }
}

export default connect(mapPropToProps)(Vis)
