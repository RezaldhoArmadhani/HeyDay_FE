import {
    GET_LIST_SKILL,
  } from "../../actions/skillsAction";
  
  const initialState = {
    getSkillResult: false,
    getSkillLoading: false,
    getSkillError: false,
  };
  
  const skillReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST_SKILL:
        return {
          ...state,
          getSkillResult: action.payload.data,
          getSkillLoading: action.payload.loading,
          getSkillError: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default skillReducer;
  