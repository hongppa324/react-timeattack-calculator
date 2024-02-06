// 초기 상태값
const initialState = {
  number: 0,
  plusNumberResult: 0,
  minusNumberResult: 0,
};

// action value
const PLUS_NUMBER = "PLUS_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// action creator
export const plusNumber = (payload) => {
  return {
    type: PLUS_NUMBER,
    payload,
  };
};
export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_NUMBER:
      return {
        ...state,
        plusNumber: state.plusNumber + action.payload,
      };

    case MINUS_NUMBER:
      return {
        ...state,
        minusNumber: state.minusNumber - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
