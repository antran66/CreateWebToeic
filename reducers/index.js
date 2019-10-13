import {combineReducers} from 'redux';

import NoteReducer from './NoteReducer';

const rootReducer = combineReducers({
     notesList:NoteReducer
})

export default rootReducer;
