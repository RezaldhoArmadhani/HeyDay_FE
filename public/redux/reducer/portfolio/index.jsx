import {
    GET_DETAIL_PORTFOLIO,
  } from "../../actions/portfolioAction";
  
  const initialState = {
    getDetailPortfolioResult: false,
    getDetailPortfolioLoading: false,
    getDetailPortfolioError: false,
  };
  
  const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_DETAIL_PORTFOLIO:
        return {
          ...state,
          getDetailPortfolioResult: action.payload.data,
          getDetailPortfolioLoading: action.payload.loading,
          getDetailPortfolioError: action.payload.errorMessage,
        };
      default:
        return state;
    }
  };
  
  export default portfolioReducer;
  