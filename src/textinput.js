import React,{Component,PropTypes} from 'react'

const ENTER_KEY_CODE=13

class TextInput extends Component{
  constructor(props){
    super(props)
    this.state={
      value:""
    }
  }

  render(){
    return(
      <input
        id={this.props.id}
        value={this.state.value}
        placeholder={this.props.placeholder}
        onChange={this._onChange.bind(this)}
        onKeyDown={this._onKeyDown.bind(this)}
      />
    )
  }

  _onChange(event){
    this.setState({
        value:event.target.value
    })
  }

  _onKeyDown(event){
    const {dispatch}=this.props
    if(event.keyCode === ENTER_KEY_CODE){
      console.log(this.state.value)
      this.props.onAdd(this.state.value)
      this.setState({value: ""})
    }
  }
}

TextInput.propsType={
    placeholder: PropTypes.string,
    onAdd: PropTypes.func
}

export default TextInput
