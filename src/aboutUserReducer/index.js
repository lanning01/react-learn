import React,{useReducer} from 'react'
import ChildReducerCmp from "./ChildReducerCmp"

export default function Index() {
  function handelMenu(me){
    console.log(me)
  }
  const [state,dispatch]=useReducer(handelMenu,'222')
  return (
    <div>
        index
        <ChildReducerCmp value={state} handelMenu={dispatch}></ChildReducerCmp>
    </div>
  )
}
