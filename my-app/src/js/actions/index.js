// src/js/actions/index.js
import { ADD_ARTICLE } from "../constants/action-types";
import { FOUND_BAD_WORD} from "../constants/action-types";


function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

function foundBadWord(payload){
  return {type: FOUND_BAD_WORD, payload};
}

export {addArticle,foundBadWord};