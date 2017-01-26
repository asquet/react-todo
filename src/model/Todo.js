import { PropTypes } from 'react';

export const VISIBILITY_FILTER_VALUES = {
  ALL: 'ALL',
  DONE: 'DONE',
  NOT_DONE: 'NOT_DONE'
};

function genSeq() {
  let n = 0;
  return function seq() {
    n += 1;
    return n;
  };
}

export const todoSeq = genSeq();

export const TodoShape = {
  id: PropTypes.number,
  text: PropTypes.string,
  isDone: PropTypes.bool
};
