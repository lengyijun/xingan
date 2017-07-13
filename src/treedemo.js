import Tree from 'react-tree-graph';
import React,{Component,PropTypes} from 'react'
import 'react-tree-graph/dist/style.css'

let data = {
	name: 'root',
    className:"treeroot",
	children: [{
		name: 'Branch 1',
        className:"red",
        children:[
            {
            name:'Leaf 1',
            className:"leaf"
        }, {
            name:'Leaf 2',
            className:"leaf"
        }]
	}, {
		name: 'Leaf 3',
        className:'leaf'
	}]
};
class TreeDemo extends Component{
    render(){
        return (
            <Tree
                data={data}
                animated={true}
                duration={500}
                height={400}
                width={400} />

        )
    }

}

export default TreeDemo