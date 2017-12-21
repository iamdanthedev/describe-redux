import { expect } from 'chai';
import { describeRedux } from '../dist/';
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


  // with custom state
  describeRedux(
    `${actions.clearItems.type}`,
    reducer,
    {...initialState, items: ['has', 'three', 'items']},
    actions,
    redux => {

      it('should have 3 items', () => {
        expect(redux.state.items.length).to.eq(3);
      });

      it('should remove items', () => {
        redux.actions.clearItems();
        expect(redux.state.items.length).to.eq(0);
      });

    }
  );

});
