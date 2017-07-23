import React,{Component,PropTypes} from 'react'

class Toolbar extends Component{

  componentWillMount(){
    document.body.classList.add("menu-active")
    this.setState({
      sidebar:true
    })
  }

  toggleSidebar() {
    console.log(this.state.sidebar)
    console.log(document.body.classList)
    document.body.classList.toggle("menu-active", this.state.sidebar)
    this.setState({
      sidebar: !this.state.sidebar

    })
  }

  handleClickfolder(event) {
    const { addnotes } = this.props
    var files = event.target.files;
    var file = files[0];
    var reader = new FileReader();
    reader.onload = (function (f) { //一个声明即执行的函数，返回一个函数
      return function (e) {
        var content = this.result
        var keys = content.split('\n').slice(-1).pop()
        addnotes(f.name, content, keys)
      };
    })(file);

    reader.readAsText(file);

    var i = 1;
    (function timeout() {
      setTimeout(function () {
        console.log(i)
        if (i >= files.length) {
          console.log("return")
          return
        }
        var file = files[i];
        var reader = new FileReader();
        reader.onload = (function (f) { //一个声明即执行的函数，返回一个函数
          return function (e) {
            var content = this.result
            var keys = content.split('\n').slice(-1).pop()
            addnotes(f.name, content, keys)
          };
        })(file);

        reader.readAsText(file);
        i += 1;
        timeout();
      }, 10000);
    })()

  }

  render(){
    return(
      <section id="toolbar">
        <div id="firstgly">
          <i className="glyphicon glyphicon-plus-sign" onClick={x=>this.props.addnotes("Hello","Hello content","0100001000000001000000000000000001000100000100000001000010000000100000000000100000000000000010000000")}></i>
          <i className="glyphicon glyphicon-search" onClick={this.toggleSidebar.bind(this)}></i>
          <i className="glyphicon glyphicon-remove-circle" onClick={x=>this.props.remove()}></i>
          <i className="glyphicon glyphicon-refresh" onClick={x=>this.props.append()}></i>

          <label onChange={this.handleClickfolder.bind(this)}>
          <input type="file" id="tohidinput" name="files[]" multiple />
          <i className="glyphicon glyphicon-upload" ></i>
          </label>
        </div>
      </section>
    )
  }
}
Toolbar.PropTypes={
  addnotes:PropTypes.func,
  notes:PropTypes.array,
  remove:PropTypes.func
}
export default Toolbar
