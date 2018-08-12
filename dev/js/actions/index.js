export const recieveApi = (data) => {
  return{
    type: "RECIEVE_API",
    data: data,
  }
};
export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
export const addSong = (song, lastId) => {
  console.log("You've added a song:", song.songName);
  return {
    type: "SONG_ADDED",
    payload: song,
    lastId: lastId
  }
};
export const deleteSong = (song) => {
  console.log("You've deleted a song:");
  return {
    type: "SONG_DELETED",
    payload: song
  }
};
  export const editSong = (songNum, editMode) => {
    console.log("edit song started");
    return {
      type: "SONG_EDIT",
      songNum: songNum,
      editMode: editMode
    }
};
  export const updateSong = (song) => {
    return {
      type: "SONG_UPDATE",
      payload: song
    }
};
