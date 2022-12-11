import { createStore, Store } from 'effector';

export function createStoresFromObject<T extends object>(initialState: T) {
  const state = Object.entries(initialState).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: createStore(value) }),
    {} as { [key in keyof T]: Store<T[key]> },
  );
  return state;
}
