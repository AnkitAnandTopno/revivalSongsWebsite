import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteSong, editSong} from '../actions/index.js';
import {bindActionCreators} from 'redux';
class SongBlock extends Component {
    render() {
        return (this.props.sindex>0 &&
          <div className="songBlock" key={this.props.songNum}>
          <button className="songBlockDelete" onClick={() => {this.props.deleteSong(this.props.songNum)}}>x</button>
            <h4 className="songBlockContent">{this.props.newNum}.{this.props.songName}</h4>
          </div>
        );
    }
}
function mapStateToProps(state) {
  return {
    songs: state.songs
  };
}
function matchDispatchToProps(dispatch) {

      return bindActionCreators({deleteSong: deleteSong, editSong: editSong}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(SongBlock);
