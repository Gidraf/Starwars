import React, { StrictMode } from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../App';
import { Provider } from 'react-redux';
import SearchComponent from '../components/SearchComponent';
import { SearchInput } from '../components/Components';
import Container from '../components/Container';
import FilmDetails from '../components/FilmDetail';
import { Route } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('Snapshot Testing', () => {
  const initialState = { films: [] };
  const mockStore = configureStore();
  let store;

  it('It renders Successfully"', () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('It renders divs', () => {
    store = mockStore(initialState);
    const appRender = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(appRender).toMatchSnapshot();
    // input.simulta
  });
});

describe('It Renders All components', () => {
  const initialState = { films: [] };
  const mockStore = configureStore();
  let store;

  it('It renders divs', () => {
    store = mockStore(initialState);
    const appRender = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(appRender.find('div').exists()).toBe(true);
    expect(appRender.find('input').exists()).toBe(true);
    expect(appRender.find('button').exists()).toBe(true);
  });
});

describe('Simulate Functions', () => {
  const initialState = { films: [] };
  const mockStore = configureStore();
  let store;

  it('It triggers searchForAFilm on input change', async () => {
    store = mockStore(initialState);
    store = mockStore(initialState);
    const appRender = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    ).root;
    const input = appRender.findByType('input');
    console.log(input);
    expect(input).toBeTruthy();
    input.props.onChange({
      target: {
        value: 'revenge',
      },
    });
  });
});
