import { combineReducers } from "redux";
import Video_reducer from "./videoReducer";
import History_reducer from './History';
import likeReducer from "./LikeReducer";

const reducers = combineReducers({
    Videos : Video_reducer,
    History: History_reducer,
    Like: likeReducer,
})

export default reducers;