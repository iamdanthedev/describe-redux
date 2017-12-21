import actionCreatorFactory from 'typescript-fsa';

const actionCreator =  actionCreatorFactory();

export const addItem = actionCreator<{ id: string }>('ADD_ITEM');
export const clearItems = actionCreator('CLEAR_ITEMS');
