import axios from 'axios'

export const GET_LIST_SKILL = "GET_LIST_SKILL";

export const getListSkill = (id) => {
    return (dispatch) => {
        
        //loading
        dispatch({
            type: GET_LIST_SKILL,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //get API
        axios({
            method: 'GET',
            url: 'http://localhost:4000/skills/worker/'+id,
            timeout: 12000
        })
            .then((response) => {
                //berhasil get api
                dispatch({
                    type: GET_LIST_SKILL,
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
                    type: GET_LIST_SKILL,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })

            })

    }
}




