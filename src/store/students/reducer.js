const intialState = {
  students: [],
  error: null,
  success: false,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case 'FETCHING_CART_DATA':
      return {
        ...state
      };

    case 'SUCCESS_STUDENT_DATA':
      return {
        ...state,
        students: action.payload,
        success: true
      };

    case 'ERROR_STUDENT_DATA':
      return {
        ...state,
        error: action.payload,
        success: false
      };

    case 'UPLOADING_FETCHING_CART_DATA':
      return {
        ...state
      };

    case 'SUCCESS_UPLOADING_STUDENT_DATA':
      return {
        ...state,
        students: action.payload,
        success: true
      };

    case 'ERROR_UPLOADING_STUDENT_DATA':
      return {
        ...state,
        error: action.payload,
        success: false
      };

    case 'UPDATING_REMARKS':
      return {
        ...state,
        students: action.payload,
        success: true
      }

    default:
      return state;
    }
}