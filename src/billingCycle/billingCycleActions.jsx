import axios from 'axios'

const base_url = 'http://localhost:8000/billingCycles'

export function getList() {
    return dispatch => {
        axios.get(base_url)
            .then(resp => {
                dispatch({
                    type: 'BILLING_CYCLE_FETCHED',
                    payload: resp.data.data
                })
            }).catch(resp => {
                console.log('error', resp)
                dispatch({
                    type: 'BILLING_CYCLE_FETCHED',
                    payload: request
                })
            })
    }
}

export function create(item) {
    return dispatch => {
        axios.post(base_url, item)
             .then(resp => {
                    dispatch({
                        type: 'BILLING_CYCLE_FETCHED',
                        payload: resp.data.data
                    })
                }).catch(resp => {
                    console.log("error", resp)
                    dispatch({
                        type: 'BILLING_CYCLE_FETCHED',
                        payload: []
                    })
             })
    }
}