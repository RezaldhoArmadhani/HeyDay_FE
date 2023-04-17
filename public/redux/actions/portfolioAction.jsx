import axios from 'axios'

export const GET_DETAIL_PORTFOLIO = "GET_DETAIL_PORTFOLIO";

export const getDetailPortfolio = (id) => {
    return (dispatch) => {
        
        //loading
        dispatch({
            type: GET_DETAIL_PORTFOLIO,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:4000/portfolio/worker/'+id,
            timeout: 12000
        })
            .then((response) => {
                //berhasil get api
                dispatch({
                    type: GET_DETAIL_PORTFOLIO,
                    payload: {
                        loading: false,
                        data: response.data.data,
                        errorMessage: false
                    }

                })
            })
            .catch((error) => {
                //gagal get api
                dispatch({
                    type: GET_DETAIL_PORTFOLIO,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })

            })

    }
}




