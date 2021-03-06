export const UPDATE='UPDATE'
export const ADD='ADD'
export const UPDATEID="UPDATEID"
export const ONID="ONID"
export const DELETE="DELETE"
export const UPDATETITLE="UPDATETITLE"
export const APPEND="APPEND"

export function update(tasks){
  return{
    type: UPDATE,
    tasks
  }
}

export function append(tasks){
  return{
    type:APPEND,
    tasks
  }
}

export function add(title,p){
  return{
    type:ADD,
    title,
    p
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

export function remove(){
  return {
    type:DELETE
  }
}

export function updatetitle(middleTitle){
  return{
    type:UPDATETITLE,
    middleTitle
  }
}
