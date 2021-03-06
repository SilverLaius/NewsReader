import { ApiKey } from "../config/config";

export const FETCH_ARTICLES_BEGIN = "FETCH_ARTICLES_BEGIN";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles }
});

export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error }
});

export function fetchArticles() {
  return dispatch => {
    dispatch(fetchArticlesBegin());
    return fetch(
      "https://newsapi.org/v2/top-headlines?language=en&sources=wired,techradar,techcrunch",
      {
        method: "get",
        headers: new Headers({
          "X-Api-Key": ApiKey
        })
      }
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        json.articles.forEach(
          article =>
            (article["articleID"] =
              article.title.replace(/ /g, "_").replace(/:/g, "_") +
              "_" +
              article.source.id +
              article.publishedAt.replace(/:/g, "-"))
        );
        return json;
      })
      .then(json => {
        dispatch(fetchArticlesSuccess(json.articles));
        return json.articles;
      })
      .catch(error => dispatch(fetchArticlesFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
