// src/js/reducers/index.js

import { ADD_ARTICLE } from "../constants/action-types";
import { FOUND_BAD_WORD} from "../constants/action-types";


const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
      //does not change state.
      //creates a copy
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      });
    }
  else if (action.type === FOUND_BAD_WORD){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;