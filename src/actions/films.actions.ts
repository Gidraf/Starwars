import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState, store } from '../reducers';
import { searchReducer } from '../reducers/AllReducer';
import Constants from '../utils/Constants';

const searchFilm = (query: string, toggleLoading: any) => (dispatch: any) => {
  toggleLoading();
  fetch(`https://swapi.dev/api/films/?search=${query}`)
    .then((response) => {
      toggleLoading();
      if (response.status === 200) {
        response.json().then((data) => {
          store.dispatch(searchReducer(data.results));
        });
      }
      return;
    })
    .catch(() => {
      toggleLoading();
    });
};

export const viewFilmDetails =
  (id: any, toggleLoading: any, handleSucess: any) => (dispatch: any) => {
    toggleLoading();
    fetch(`https://swapi.dev/api/films/${id}/`)
      .then((response) => {
        toggleLoading();
        if (response.status === 200) {
          response.json().then((data) => {
            handleSucess(data);
          });
        }
        return;
      })
      .catch(() => {
        toggleLoading();
      });
  };
export default searchFilm;
