`npm install describe-redux`

`describeRedux()` is a substitute for regular `describe()`.
Under the hood it creates a redux store and passes an object containing the store, it's state getter
and bound actions to the callback.

In the examples the `typescript-fsa` lib is used to create actions, but it should not make any difference.

It has the following signature:

```typescript
function describeRedux<S extends {}, A extends ActionCreatorsMapObject>(
  // a test suite description (similar to `describe()`)
  description: string,

  // a reducer
  reducer: Reducer<S>,

  // an initial state
  initialState: S,

  // actions (of type ActionCreatorsMapObject which is an object)
  actions: A,

  // callback which received an argument `redux` which allow to access the store
  callback: (redux: DescribeReduxContext<S, A>) => void
): void;

```

The callback argument  has the following type

```typescript
type DescribeReduxContext<S extends {}, A extends ActionCreatorsMapObject> = {
  // redux store
  store: Store<S>;

  // state getter (same as store.getState())
  state: Readonly<S>;

  // bound actions
  actions: A;
};

```

A full example can be found under the `examples` folder


```typescript
import { expect } from 'chai';
import { describeRedux } from 'describe-redux';
import * as actions from './actions';
import { initialState, reducer } from './store';


describe('Test store', () => {

  // with initial state
  describeRedux(`${actions.addItem.type}`, reducer, initialState, actions, redux => {

      it('should add item', () => {
        redux.actions.addItem({id: 'test-id'});
        expect(redux.state.items).to.eql(['test-id']);
      });

  });

});
```
