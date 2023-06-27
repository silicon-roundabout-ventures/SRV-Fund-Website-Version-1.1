// import { useCreateContext } from '../create-context';
// import { reducer, initialState } from './app.reducer';

// const [state, useDispatch, provider] = useCreateContext(initialState, reducer);
// export const useStickyState = state;
// export const useStickyDispatch = useDispatch;
// export const StickyProvider = provider;

// app.provider.js

import React from 'react';
import { useCreateContext } from '../create-context';
import { reducer, initialState } from './app.reducer';

const useSticky = () => {
  const [state, useDispatch, provider] = useCreateContext(initialState, reducer);
  return { state, useDispatch, provider };
};

export const useStickyState = () => {
  const { state } = useSticky();
  return state;
};

export const useStickyDispatch = () => {
  const { useDispatch } = useSticky();
  return useDispatch;
};

export const StickyProvider = ({ children }) => {
  const { state, useDispatch, provider: Provider } = useSticky();

  return (
    <Provider value={{ state, dispatch: useDispatch }}>
      {children}
    </Provider>
  );
};
