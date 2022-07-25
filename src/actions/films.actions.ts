import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, store } from '../reducers';
import { searchReducer } from '../reducers/AllReducer';
import Constants from '../utils/Constants';

const searchFilm = (query: string, toggleLoading: any) => (dispatch: any) => {
  toggleLoading();
  fetch(`https://swapi.dev/api/films/?search=${query}`)
    .then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          store.dispatch(searchReducer(data.results));
        });
      }
    })
    .catch();
};

export const animationsVideos =
  (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch: any) => {
    fetch(
      `https://crm5i9c2z8-3.algolianet.com/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20JavaScript%20(4.8.6)%3B%20Browser%20(lite)&x-algolia-api-key=7f78a9d98a5222792f2714fee8ee2446&x-algolia-application-id=CRM5I9C2Z8`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `{"requests":[{"indexName":"entries","params":"query=starwars&page=0&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&facets=%5B%5D&tagFilters="},{"indexName":"entries","params":"query=starwars&page=0&highlightPreTag=__ais-highlight__&highlightPostTag=__%2Fais-highlight__&facets=%5B%5D&tagFilters="}]}`,
      }
    )
      .then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            console.log(data);
          });
        }
      })
      .catch();
  };

export default searchFilm;
