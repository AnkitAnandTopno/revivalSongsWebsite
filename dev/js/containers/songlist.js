import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {recieveApi} from '../actions/index.js';
import SongBlock from './songblock.js';
import axios from "axios";

class SongList extends Component {
  constructor(props) {
   super(props);
   this.state ={
     responseRecieved: false
   }
 }

  componentWillMount() {
    axios.get("http://localhost/revivalsongs/server/songs/shaeujdnfbc/").then((response) => {
      console.log(response.data);
    this.props.recieveApi(response.data);
    this.setState({
      responseRecieved: true
    });
  });
}
saveSong(e){
  const params = new URLSearchParams();
params.append('data', JSON.stringify(this.props.songs));
  e.preventDefault();

  axios({
    method: 'post',
    url: 'http://localhost/revivalsongs/server/songs/update/',
    data: params
  }).then((response) => {
    console.log(response.data);
    if(response.data.success){
      alert("The song list was successfully updated");
    }
    else {
      {
        alert("There was a problem!");
      }
    }
});
}
    render() {
      console.log(this.props.songs);
        return this.state.responseRecieved? <div className="songs">
        <div className="save">
          <button onClick={(e)=> this.saveSong(e)}>Save</button>
        </div>
        <div className="songList">
          {
            this.props.songs.songs.map((song,index) => (
              <SongBlock sindex={index} key={index} songNum = {song.songNum} songName = {song.songName} newNum={song.newNum} oldNum={song.oldNum}/>
            ))
          }
          </div>
        </div>: <div></div>;
    }
}
function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}
function matchDispatchToProps(dispatch) {

      return bindActionCreators({recieveApi: recieveApi}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(SongList);
