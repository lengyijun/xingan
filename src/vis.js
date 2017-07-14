import React, { Component } from 'react'
import Graph from 'react-graph-vis'

class Vis extends Component {
    render() {
        var graph = {
            nodes: [
                { id: 1, label: '',color: '#e04141' },
                { id: 2, label: 'root',color: '#e09c41' },
                { id: 3, label: '1' ,color: '#e0df41'},
                { id: 4, label: '2' , color: '#7be041'},
                { id: 5, label: '3', color: '#41e0c9' }
            ],
            edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 4 },
                { from: 2, to: 5 }
            ]
        };
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
                <Graph graph={graph} options={options} events={events} />
            </div>
        )
    }
}

export default Vis