import {UPDATETITLE,UPDATE,ADD,UPDATEID,ONID,DELETE,APPEND} from './action';

var tasks_init=[
  {
    id:0,
    title:"hello title",
    keystring:"10101010100111111111111111111111111111111111111111111111111111",
    p:"reducer componentWillMount\ncomponentWillReceiveProps\nstyle=\"display: none\";\nhover事件\n11111111111"
  },{
    id:1,
    title:"e.target.value",
    keystring:"101010101001",
    p:"onChange\n1111111111"
  },{
    id:2,
    title:"信息安全竞赛\n",
    keystring:"101010101001",
    p:"主要是在模仿wiznote的界面在实现\nheader和主要内容相互覆盖，暂时是用margin来处理，但是有些奇怪\n没有实现可编辑功能？？\n搜索框还是放在左边悬浮比较好\n1111111111"
  },{
    id:3,
    title:"计算机组成大作业",
    keystring:"101010101001",
    p:"比较是用有符号数还是无符号数\n dw为什么只能0-9开头？？\n10101010101"
  },{
    id:4,
    title:"汇编",
    keystring:"101010101001",
    p:"push SI+2 这种写法不可取\n01010101010101"
  }
]

function todos(state={tasks: tasks_init, isnote:0,middleTitle:"SSE"},action){
  switch(action.type){
    case UPDATE:  //更新所有笔记
      console.log("new data come")
      console.log(action.tasks)
      return {...state,tasks: action.tasks}
    case APPEND:
      var t=state.tasks
      console.log("append new data")
      return {...state,tasks: t.concat(action.tasks)}
    case ADD:  //添加一条笔记
      var t=state.tasks
      var newid=1+Math.max(...t.map(x=>x.id))
      console.log("newid: "+newid) 
      return {...state,
        tasks:[...t,{id:newid,p:action.p,title:action.title}]}
    case UPDATEID:  //更新一条笔记
      console.log("update id")
      var t=state.tasks
      var index=t.findIndex(function (x) {
        return(x.id==action.id)
      })
      if(index != -1){
        t[index]["title"]=action.data.title
        t[index]["p"]=action.data.p
        return {...state,tasks: t}
      } else{
        return state
      }
    case ONID:   //点击某一条笔记之后更新id
      console.log("reducer onid: "+action.id)
      return {...state,isnote:action.id}
    case DELETE:
      var t=state.tasks.filter(function(x){
        return(x.id != state.isnote)
      })
      console.log(t)
      return {...state,tasks: t}
    case UPDATETITLE:
      return {...state,middleTitle:action.middleTitle}
    default:
      return state
  }
}

export default todos
