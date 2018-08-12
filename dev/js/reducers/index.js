import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import SongReducer from './reducer-song';
import LastId from './reducer-last-id';
import EditMode from './reducer-edit';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    songs: SongReducer,
    lastId: LastId,
    editMode: EditMode
});

export default allReducers
