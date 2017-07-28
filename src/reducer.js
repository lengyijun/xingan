import {CLICKBRANCH,UPDATETITLE,UPDATE,GRAPH,ADD,UPDATEID,ONID,APPEND,REMOVE} from './action';

var tasks_init=[
  {
    id:0,
    title:"hello 鲜",
    keys:"10101010100111111111111111111111111111111111111111111111111111",
    p:"欢迎使用SSE可搜索加密系统"
  }
]

      var nodes= [
          { id: 1, label: '',color: '#e04141',title:"hello id 1" },
          { id: 2, label: 'root',color: '#e09c41' ,title:"id 2"},
          { id: 3, label: '1' ,color: '#e0df41',title:"id 3"},
          { id: 4, label: '2' , color: '#7be041',title:"id 4"},
          { id: 5, label: '3', color: '#41e0c9' ,title:"id 5"}
      ]

      var edges= [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 }
      ]

function todos(state={
  nowNote:{
    id:0,
    title:"hello 鲜",
    keys:"10101010100111111111111111111111111111111111111111111111111111",
    p:"欢迎使用SSE可搜索加密系统"
  },
  branch:true,
  tasks: tasks_init, 
  isnote:0,
  graphId:0,
  middleTitle:"SSE",
  nodes:nodes,
  edges:edges,
  id2handleid:{},
  },action){
  switch(action.type){
    case GRAPH:
    // console.log(action.nodes.length===state.nodes.length)
    // console.log(action.nodes.every((v,i)=>JSON.stringify(v) ===JSON.stringify(state.nodes[i])) )
    // console.log(action.edges.length===state.edges.length )
    // console.log(action.edges.every((v,i)=> JSON.stringify(v) ===JSON.stringify(state.edges[i])))

    if (
      action.nodes.length == state.nodes.length
      &&
      action.nodes.every((v, i) => JSON.stringify(v) === JSON.stringify(state.nodes[i]))
      &&
      action.edges.length === state.edges.length
      // && action.edges.every((v,i)=> JSON.stringify(v) ===JSON.stringify(state.edges[i]))  //节点和边的数量都相同，树应该是一样的
    ) {
      // console.log("the same")
      return state
    }
      console.log("different")
      var a=action.nodes.filter((x)=>x.handle_id)  //选择有handle_id的node
      var c={}
      a.map(function(x){
        c[x.id]=x.handle_id
      })
      // return {...state,nodes:[...state.nodes,...action.nodes]}
      return Object.assign({},state,{
        nodes:action.nodes,
        edges:action.edges,
        id2handleid:c
      })
    case UPDATE:  //更新所有笔记
      console.log("reducer new data come")
      console.log(action.tasks)
      return {...state,tasks: action.tasks}
    case APPEND:
      var t=state.tasks  //这里可以修改一下
      console.log("append new data")
      return {...state,tasks: t.concat(action.tasks)}
    case ADD:  //添加一条笔记
      var t=state.tasks
      var newid=1+Math.max(...t.map(x=>x.id))
      console.log("newid: "+newid) 
      return {...state,
        tasks:[...t,{id:newid,p:action.p,title:action.title,keys:"10101010100111111111111111111111111111111111111111111111111111"}]}
    case UPDATEID:  //更新一条笔记
      var t=state.tasks
      var index=t.findIndex(function (x) {
        return(x.id===action.id)
      })
      if(index !== -1){
        t[index]["title"]=action.data.title
        t[index]["p"]=action.data.p
        return {...state,tasks: t}
      } else{
        return state
      }
    case ONID:   //点击某一条笔记之后更新id
    console.log("onid")
      var newGraphid=0;
      for(var key in state.id2handleid){
        if(state.id2handleid[key]===action.id){
          newGraphid=key
          break
        }
      }
    var t=state.tasks.find(function (x) {
      return(x.id ===action.id)
    })
    console.log(t)
      return {...state,isnote:action.id,graphId:newGraphid,nowNote:t,branch:true}
    case REMOVE:
      var index=0
      console.log("isnote : "+state.isnote)
      for(let i=0;i<state.tasks.length;++i){
        if(state.tasks[i].id===state.isnote){
          index=i
          break
        }
      }
      console.log(index)
      var a=state.tasks.slice(0,index)
      var b=state.tasks.slice(index+1)
      console.log(a.length)
      console.log(b.length)
      // return {...state,tasks: state.tasks.slice(0,index).cancat(state.tasks.slice(index+1))}
      return {...state,tasks: a.concat(b),isnote:state.isnote+1}
      // return {...state,tasks: [...state.tasks.slice(0,index),...state.tasks.slice(index+1)]}
    case UPDATETITLE:
      return {...state,middleTitle:action.middleTitle}
    case CLICKBRANCH:
    //这里需要找一下keys
    //只有id
      console.log(action.branchId)
      var a=action.branchId
      var b=state.nodes.filter(function(x){
        return(x.id===a)
      })[0]
      console.log(b.label)
      return {...state,branch:false,nowNote:{p:"",keys:b.keys,title:b.label}}
    default:
      return state
  }
}

export default todos
