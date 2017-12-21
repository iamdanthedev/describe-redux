import { ActionCreatorsMapObject, bindActionCreators, createStore, Store, Reducer } from 'redux';

export type DescribeReduxContext<S extends {}, A extends ActionCreatorsMapObject> = {
  store: Store<S>;
  state: Readonly<S>;
  actions: A;
};

/**
 * Wrapper for it() tests. Similar too describe() but with extra params
 * @param {string} description
 * @param {Reducer<S extends {}>} reducer
 * @param {S} initialState
 * @param {A} actions
 * @param {(redux: DescribeReduxContext<S extends {}, A extends ActionCreatorsMapObject>) => void} callback
 */
function describeRedux<S extends {}, A extends ActionCreatorsMapObject>(
  description: string,
  reducer: Reducer<S>,
  initialState: S,
  actions: A,
  callback: (redux: DescribeReduxContext<S, A>) => void,
) {

  const store = createStore(reducer, initialState);
  const boundActions = bindActionCreators(actions, store.dispatch);

  const context = {
    store,
    get state() {
      return store.getState();
    },
    actions: boundActions,
  };

  return (function () {
    describe(description, () => {
      callback(context);
    });
  })();

}
