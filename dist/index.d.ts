import { ActionCreatorsMapObject, Store, Reducer } from 'redux';
export declare type DescribeReduxContext<S extends {}, A extends ActionCreatorsMapObject> = {
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
export declare function describeRedux<S extends {}, A extends ActionCreatorsMapObject>(description: string, reducer: Reducer<S>, initialState: S, actions: A, callback: (redux: DescribeReduxContext<S, A>) => void): void;
export default describeRedux;
