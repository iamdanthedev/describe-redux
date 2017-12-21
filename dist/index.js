"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
/**
 * Wrapper for it() tests. Similar too describe() but with extra params
 * @param {string} description
 * @param {Reducer<S extends {}>} reducer
 * @param {S} initialState
 * @param {A} actions
 * @param {(redux: DescribeReduxContext<S extends {}, A extends ActionCreatorsMapObject>) => void} callback
 */
function describeWithRedux(description, reducer, initialState, actions, callback) {
    var store = redux_1.createStore(reducer, initialState);
    var boundActions = redux_1.bindActionCreators(actions, store.dispatch);
    var context = {
        store: store,
        get state() {
            return store.getState();
        },
        actions: boundActions,
    };
    return (function () {
        describe(description, function () {
            callback(context);
        });
    })();
}
