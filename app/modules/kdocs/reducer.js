import produce from 'immer';
import { fromJS } from 'immutable';
import { File, Edit, View, Insert, Tools, AddOns, Help } from './menubars';

const initialState = fromJS({
  isLoading: false,
  menuItems: [File, Edit, View, Insert, Tools, AddOns, Help],
});

export default (state = initialState, action) => {
  return produce(state, draft => {});
};
