const initialState = {
  songs: []
};
export default function (state = initialState, action) {
    switch (action.type) {
      case 'RECIEVE_API':
        var new_state;
      console.log(action.data.data);
        new_state = action.data.data;
        return new_state;
        break;
        case 'SONG_ADDED':
        var new_state;
        new_state = JSON.parse(JSON.stringify(state));
        new_state.lastId = action.lastId;
        new_state.songs.push(action.payload);
            return new_state;
            break;

        case 'SONG_DELETED':
        var new_state;
        new_state = JSON.parse(JSON.stringify(state));
        for(let i = 0; i<new_state.songs.length; i++){
          if(new_state.songs[i].songNum == action.payload){
          new_state.songs.splice(i, 1);
          break;
          }
        }
            return new_state;
            break;
        case 'SONG_UPDATE':
          return action.payload;
        break;
    }
    return state;
}
