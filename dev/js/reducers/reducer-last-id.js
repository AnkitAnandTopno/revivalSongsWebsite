const initialState ={

    id:0
}
export default function (state = initialState,action) {
  switch(action.type){
    case "RECIEVE_API":
      new_state = JSON.parse(JSON.stringify(state));
      new_state.id = action.data.data.lastId;
      return new_state;
    case "SONG_ADDED":

      let new_state = JSON.parse(JSON.stringify(state));
      new_state.id = action.payload.songNum;
      return new_state;
    break;
  }
    return state;
}
