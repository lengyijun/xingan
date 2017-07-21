import {UPDATETITLE,UPDATE,GRAPH,ADD,UPDATEID,ONID,DELETE,APPEND} from './action';

var tasks_init=[
  {
    id:0,
    title:"hello 鲜",
    keys:"10101010100111111111111111111111111111111111111111111111111111",
    p:"这里写一句欢迎语，因为正好会打开这条笔记"
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

function todos(state={tasks: tasks_init, isnote:0,middleTitle:"SSE",nodes:nodes,edges:edges,id2handleid:{}},action){
  switch(action.type){
    case GRAPH:
      console.log("reducer graph")
      var a=action.nodes.filter((x)=>x.handle_id)  //选择有handle_id的node
      var c={}
      a.map(function(x){
        c[x.id]=x.handle_id
      })
      console.log(a)
      // return {...state,nodes:[...state.nodes,...action.nodes]}
      return Object.assign({},state,{
        // isnote:100,
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
        tasks:[...t,{id:newid,p:action.p,title:action.title}]}
    case UPDATEID:  //更新一条笔记
      console.log("update id")
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
      console.log("reducer onid: "+action.id)
      return {...state,isnote:action.id}
    case DELETE:
      var t=state.tasks.filter(function(x){
        return(x.id !== state.isnote)
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
