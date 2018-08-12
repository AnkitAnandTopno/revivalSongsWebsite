const initialState = {
      songNum: null,
      editMode: false

};
export default function (state = initialState, action) {
    switch (action.type) {
        case 'SONG_EDIT':
          console.log(action.editMode, action.songNum);
        var new_state;
        new_state = JSON.parse(JSON.stringify(state));
        new_state.editMode = action.editMode;
        new_state.songNum = action.songNum;
            return new_state;
            break;
    }
    return state;
}
