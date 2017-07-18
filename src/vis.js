import React, { Component } from 'react'
import Graph from 'react-graph-vis'
import {connect} from 'react-redux'
import axios from 'axios'

class Vis extends Component {
     componentWillMount(){ 
        const{dispatch,graphjson}=this.props; 
        dispatch({type:"SAGAGRAPH"}) 
        this.setState({ 
            graphjson:graphjson
        }) 
    } 

    componentWillReceiveProps(nextProps){
        console.log("vis new data")
        this.setState({
            graphjson:nextProps.graphjson
        })
    }
	
    render() {
        var options = {
            height:"600px",
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
                var { nodes, edges } = event;
                console.log("event in visjs")
                console.log(nodes)
                console.log(edges)
            },
            hoverNode:function(event){
                console.log("hover ")
                console.log(event)
            },
            showPopup:function(event){
                console.log("show popup "+event)
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
      graphjson:{nodes:state.nodes,edges:state.edges}
  }
}

export default connect(mapPropToProps)(Vis)
