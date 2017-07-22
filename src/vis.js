import React, { Component } from 'react'
import Graph from 'react-graph-vis'
import {connect} from 'react-redux'
import {onId} from './action'

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
        var f1=(function(a){
            return(function(id){
                console.log(id)
                return(a.state.id2handleid[id])

            })
        })(this)

        var f2=(function(context){
            return(function(id){
                console.log("on id "+id)
                const {dispatch}=context.props
                dispatch(onId(id))
            })
        })(this)

        var options = {
            height:"600px",
            width:"2000px",
            interaction:{
                hover:true
            },
            layout: {
                hierarchical:{
                     sortMethod : 'directed'  //保证root在最上面
                }
            },
            edges: {
                color: "#000000"
            },
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
                // console.log("show popup "+event)
            },
            selectNode:function(event){
                var id=event.nodes[0]
                var handleid=f1(id)
                f2(handleid)
            }
        }

        return (
            <div id="vis">
                <Graph graph={this.state.graphjson} options={options} events={events} />
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
