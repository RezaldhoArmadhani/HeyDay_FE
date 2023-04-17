import axios from 'axios'

export const GET_LIST_WORKER = "GET_LIST_WORKER";
export const GET_ALL_WORKER = "GET_ALL_WORKER";
export const UPDATE_WORKER = "UPDATE_WORKER";

export const getListWorker = () => {
    return (dispatch) => {
        
        //loading
        dispatch({
            type: GET_LIST_WORKER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:4000/workers',
            timeout: 12000
        })
            .then((response) => {
                //berhasil get api
                dispatch({
                    type: GET_LIST_WORKER,
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
                    type: GET_LIST_WORKER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })

            })

    }
}

export const getAllValueWorker = (id) => {
    return (dispatch) => {
        
        //loading
        dispatch({
            type: GET_ALL_WORKER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:4000/workers/'+id,
            timeout: 12000
        })
            .then((response) => {
                console.log(response);
                //berhasil get api
                dispatch({
                    type: GET_ALL_WORKER,
                    payload: {
                        loading: false,
                        data: response.data.data[0],
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                //gagal get api
                dispatch({
                    type: GET_ALL_WORKER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })

            })

    }
}

export const updateWorker = (data) => {
    return (dispatch) => {
        
        //loading
        dispatch({
            type: UPDATE_WORKER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'PUT',
            url: 'http://localhost:4000/workers/'+data.id,
            timeout: 120000,
            data: data
        })
            .then((response) => {
                //berhasil get api
                dispatch({
                    type: UPDATE_WORKER,
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
                    type: UPDATE_WORKER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })

            })

    }
}




