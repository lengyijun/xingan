import {STAR,UPDATE,ADD,UPDATEID,ONID,DELETE} from './action';

var tasks_init=[
  {
    id:0,
    title:"hello title",
    star:true,
    p:"reducer componentWillMount\ncomponentWillReceiveProps\nstyle=\"display: none\";\nhover事件\n11111111111"
  },{
    id:1,
    star:false,
    title:"e.target.value",
    p:"onChange\n1111111111"
  },{
    id:2,
    star:false,
    title:"信息安全竞赛\n",
    p:"主要是在模仿wiznote的界面在实现\nheader和主要内容相互覆盖，暂时是用margin来处理，但是有些奇怪\n没有实现可编辑功能？？\n搜索框还是放在左边悬浮比较好\n1111111111"
  },{
    id:3,
    star:false,
    title:"计算机组成大作业",
    p:"比较是用有符号数还是无符号数\n dw为什么只能0-9开头？？\n10101010101"
  },{
    id:4,
    star:false,
    title:"汇编",
    p:"push SI+2 这种写法不可取\n01010101010101"
  }
]

function todos(state={tasks: tasks_init, isnote:0},action){
  switch(action.type){
    case UPDATE:
      console.log("new data come")
      console.log(action.tasks)
      return {...state,tasks: action.tasks}
    case ADD:
      var t=state.tasks
      var newid=1+Math.max(...t.map(x=>x.id))
      console.log("newid: "+newid) 
      return {...state,
        tasks:[...t,{id:newid,p:action.p,title:action.title,star:false}]}
    case UPDATEID:
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
    case ONID:
      console.log("reducer onid: "+action.id)
      return {...state,isnote:action.id}
    case STAR:
      var t=state.tasks
      var index=t.findIndex(function (x) {
        return(x.id==state.isnote)
      })
      t[index]["star"]=!t[index]["star"]
      return {...state,tasks: t}
    case DELETE:
      var t=state.tasks.filter(function(x){
        return(x.id != state.isnote)
      })
      console.log(t)
      return {...state,tasks: t}
    default:
      return state
  }
}

export default todos
