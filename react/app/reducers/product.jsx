export default function number(state=1,action){
  switch(action.type){
    case 'ADD':
      return state + 1
    case 'MINUS':
      return state - 1
    default:
      return state
  }
}
