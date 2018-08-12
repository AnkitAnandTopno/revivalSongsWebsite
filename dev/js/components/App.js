import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import AddSong from '../containers/add-song';
import SongList from '../containers/songlist';
require('../../scss/style.scss');

const App = () => (
    <div>
        <AddSong />
        <hr />
        <h2>Songs</h2>
        <SongList />
    </div>
);

export default App;
