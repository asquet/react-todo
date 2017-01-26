export const SET_FILTER = 'SET_FILTER';
export const SET_FORM_VISIBLE = 'SET_FORM_VISIBLE';
export const SET_FORM_TEXT = 'SET_FORM_TEXT';

export function setFilterAction(payload) {
  return {
    type: SET_FILTER,
    payload
  };
}

export function setFormVisible(payload) {
  return {
    type: SET_FORM_VISIBLE,
    payload
  };
}

export function setFormText(payload) {
  return {
    type: SET_FORM_TEXT,
    payload
  };
}
