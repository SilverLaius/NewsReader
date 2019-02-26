import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from "../actions/articleActions";

const initialState = {
  items: [],
  loaded: false,
  error: null
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        loaded: false,
        error: null
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loaded: true,
        items: action.payload.articles
      };

    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loaded: true,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
