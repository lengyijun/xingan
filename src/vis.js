import React, { Component } from 'react'
import Graph from 'react-graph-vis'
import {connect} from 'react-redux'
import axios from 'axios'

class Vis extends Component {
     componentWillMount(){ 
        const{dispatch,graphjson}=this.props; 
        console.log(graphjson)
        dispatch({type:"SAGAGRAPH"}) 
        this.setState({ 
            graphjson:graphjson
        }) 
        dispatch({type:"SAGAGRAPH"})
    } 
	

    render() {
        var options = {
            layout: {
                hierarchical: true
            },
            edges: {
                color: "#000000"
            }
        };

        var events = {
            select: function (event) {
                var { nodes, edges } = event;
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
      graphjson:state.graphjson
  }
}

export default connect(mapPropToProps)(Vis)
