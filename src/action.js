export const UPDATE='UPDATE'
export const ADD='ADD'
export const UPDATEID="UPDATEID"
export const ONID="ONID"

export function update(tasks){
  return{
    type: UPDATE,
    tasks
  }
}

export function add(task){
  return{
    type:ADD,
    task
  }
}

export function updateById(id,data){
  return{
    type:UPDATEID,
    id,
    data
  }
}

// 选择打开某一个note
export function onId(id){
  return{
    type: ONID,
    id
  }
}
