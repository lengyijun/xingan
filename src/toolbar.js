import React,{Component,PropTypes} from 'react'

class Toolbar extends Component{
    handleClick(event){
      const {addnotes}=this.props
      var title=event.target.value.split('\\').slice(-1).pop()  //只取到文件名，而不要路径
      var reader=new FileReader();
      reader.onload=function(){
        var content=reader.result
        addnotes(title,content)
      }
      reader.readAsText(event.target.files[0])
    }

    handleClickfolder(event) {
      const {addnotes}=this.props
      var files = event.target.files;
      for (var i = 0, len = files.length; i < len; i++) {
        var file = files[i];
        var reader = new FileReader();
        reader.onload = (function (f) { //一个声明即执行的函数，返回一个函数
          return function (e) {
            var content =this.result
            var keystring = content.split('\n').slice(-1).pop()
            addnotes(f.name, content, keystring)
          };
        })(file);

        reader.readAsText(file);
      }
    }

  render(){
    return(
      <section id="toolbar">
        <div id="firstgly">
          <i className="glyphicon glyphicon-plus" onClick={x => this.props.addnotes("无标题","")}></i>
          <i className="glyphicon glyphicon-star" onClick={x => this.props.star()}></i>
          <i className="glyphicon glyphicon-remove" onClick={x => this.props.remove()}></i>
          {/*<label onChange={this.handleClick.bind(this)}>*/}
          {/*<input type="file" id="tohidinput" />*/}
          {/*<i className="glyphicon glyphicon-upload" ></i>*/}
          {/*</label>*/}

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
  star:PropTypes.func,
  remove:PropTypes.func
}
export default Toolbar
