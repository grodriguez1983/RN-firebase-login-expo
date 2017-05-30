export const PLUS_ONE = 'first/PLUS_ONE';

export function plusOne() {
  return (dispatch) => {
    dispatch({ type: PLUS_ONE });
  };
}

const initialState = {
  value: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
  case PLUS_ONE:
    return {
      ...state,
      value: state.value + 1
    };

  default:
    return state;
  }
};
