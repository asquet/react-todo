import { CREATE_TODO, UPDATE_TODO } from './todoList.actions';
import { todoSeq } from '../model/Todo';

export default function todoList(state = [], action) {
  switch (action.type) {
    case CREATE_TODO:
      return state.concat([{ id: todoSeq(), text: action.payload, isDone: false }]);
    case UPDATE_TODO:
      return state.map((item) => {
        if (action.payload.id === item.id) {
          const res = Object.assign({}, item);
          res.isDone = action.payload.isDone;
          return res;
        }

        return item;
      });
    default:
      return state;
  }
}
