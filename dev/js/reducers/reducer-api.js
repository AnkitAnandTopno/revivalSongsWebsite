export default function(state = [],action){
  switch(action.type){
    case "RECIEVE_API":
      console.log(action.data);
      return action.data;
    break;
    default:
      return state;
  }
}
