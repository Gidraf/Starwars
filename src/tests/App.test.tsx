import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from '../App';
import { Provider } from 'react-redux';

describe('Snapshot Testing', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('It renders Successfully"', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const tree = renderer.create( <Provider store={store}>
      <App />
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
