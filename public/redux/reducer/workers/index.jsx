import {
  GET_LIST_WORKER,
  GET_ALL_WORKER,
  UPDATE_WORKER
} from "../../actions/workerAction";

const initialState = {
  getWorkerResult: false,
  getWorkerLoading: false,
  getWorkerError: false,

  getAllWorkerResult: false,
  getALlWorkerLoading: false,
  getALlWorkerError: false,

  updateWorkerResult: false,
  updateWorkerLoading: false,
  updateWorkerError: false,


};

const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_WORKER:
      return {
        ...state,
        getWorkerResult: action.payload.data,
        getWorkerLoading: action.payload.loading,
        getWorkerError: action.payload.errorMessage,
      };
    case GET_ALL_WORKER:
      return {
        ...state,
        getAllWorkerResult: action.payload.data,
        getAllWorkerLoading: action.payload.loading,
        getAllWorkerError: action.payload.errorMessage,
      };
    case UPDATE_WORKER:
      return {
        ...state,
        updateWorkerResult: action.payload.data,
        updateWorkerLoading: action.payload.loading,
        updateWorkerError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default workerReducer;
