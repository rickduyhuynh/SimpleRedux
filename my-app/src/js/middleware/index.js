import { ADD_ARTICLE } from "../constants/action-types";
import { foundBadWord } from "../actions/index";
import uuidv1 from "uuid";
const forbiddenWords = ["spam", "money"];

/*
  before mapDispatchToProps in Form.jsx passes the action (addArticle(article))
  it is going to go here, which will intercept this action.
 */

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // intercept ADD_ARTICLE action
      if (action.type === ADD_ARTICLE) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          let title = action.payload.title.concat(" is a bad word");
          const id = uuidv1();
          return dispatch(foundBadWord({title,id}));
        }
      }
      return next(action);
    };
  };
}