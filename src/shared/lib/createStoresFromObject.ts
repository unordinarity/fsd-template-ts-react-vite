import { createStore, Store } from 'effector';

export function createStoresFromObject<T extends object>(initialState: T) {
  const state = Object.entries(initialState).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: createStore(value) }),
    {} as { [key in keyof T]: Store<T[key]> },
  );

  const state1 = Object.entries(initialState).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: createStore(value) }),
    {} as { [key in keyof T]: Store<T[key]> },
  );

  const stae = Object.entries(initialState).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: createStore(value) }),
    {} as { [key in keyof T]: Store<T[key]> },
  );

  const stadte = Object.entries(initialState).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: createStore(value) }),
    {} as { [key in keyof T]: Store<T[key]> },
  );

  // const setState = Object.entries(initialState).reduce(
  //   (acc, [key, value]) => ({
  //     ...acc,
  //     [key]: (value: T[key]) => state[key].setState(value),
  //   }),
  //   {} as { [key in keyof T]: (value: T[key]) => void },
  // );
  return state;
}
