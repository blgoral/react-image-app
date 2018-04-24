import { combineReducers } from 'redux'

import PostsReducer from './reducer_images'

const rootReducer = combineReducers({
  posts: PostsReducer

});

export default rootReducer;
