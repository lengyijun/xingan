import {UPDATE,ADD,UPDATEID,ONID} from './action';

var tasks_init=[
  {
    id:0,
    title:"hello title",
    p:"reducer componentWillMount"
  },{
    id:1,
    title:"e.target.value",
    p:"onChange"
  }
]

function todos(state={tasks: tasks_init,isnewnote:false, isnote:0},action){
  switch(action.type){
    case UPDATE:
      return {tasks: action.tasks}
    case ADD:
      var t=state.tasks
      console.log("ADD")
      return {...state,
        tasks:[...t,{id:t.length+1,p:action.task}]}
    case UPDATEID:
      console.log("what happened??")
      var t=state.tasks
      t[action.id]["title"]=action.data.title
      t[action.id]["p"]=action.data.p
      // t.filter(x =>x.id==action.id).map(x=> {x.title=action.data.title;x.p=action.data.p})
      return {task: t}
    case ONID:
      console.log("reducer onid: "+action.id)
      return {...state,isnote:action.id}

    default:
      return state
  }
}

export default todos
