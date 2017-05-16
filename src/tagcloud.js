import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import arr from './a'


class MyTagCloud extends Component {
    render() {

        const data = [
            // { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
            // { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
            // { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
        ];

        const keystring = this.props.keystring
        for(var i=0;i<keystring.length;++i){
            if(keystring.charAt(i)-'0'){
                data.push({
                    value: arr[i],
                    count:10
                })
            }

        }
        console.log(data)
        /* CSS:
        @keyframes blinker {
          50% { opacity: 0.0; }
        }
        */

        // custom renderer is function which has tag, computed font size and
        // color as arguments, and returns react component which represents tag
        const customRenderer = (tag, size, color) => (
            <span key={tag.value}
                style={{
                    animation: 'blinker 3s linear infinite',
                    animationDelay: `${Math.random() * 2}s`,
                    fontSize: `${size}em`,
                    border: `2px solid ${color}`,
                    margin: '3px',
                    padding: '3px',
                    display: 'inline-block',
                    color: 'blue',
                }}>{tag.value}</span>
        );
        return(
    <TagCloud tags={data}
        minSize={1}
        maxSize={1} //ensure the same size
        renderer={customRenderer} />

        )
    }

}
export default MyTagCloud

/*export default () => (
    <TagCloud tags={data}
        minSize={1}
        maxSize={1} //ensure the same size
        renderer={customRenderer} />
);*/