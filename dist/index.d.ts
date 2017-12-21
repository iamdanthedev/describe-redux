import { ActionCreatorsMapObject, Store } from 'redux';
export declare type DescribeReduxContext<S extends {}, A extends ActionCreatorsMapObject> = {
    store: Store<S>;
    state: Readonly<S>;
    actions: A;
};
