import axios from 'axios'

const BASE_URL = 'http://localhost:8000'
export const BILLING_SUMMARY_FETCHED = 'BILLING_SUMMARY_FETCHED'

export function getSummary() {
    return dispatch => {
        const request = axios.get(`${BASE_URL}/billingCycles/summary`)
                             .then(resp => {
                                 console.log('teste', resp.data)
                                 dispatch({
                                     type: BILLING_SUMMARY_FETCHED,
                                     payload: resp.data.data
                                 })
                             }).catch(resp => {
                                 console.log(resp)
                             })
    }
}