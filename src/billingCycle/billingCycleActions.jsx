import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

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
                    toastr.success("Cadastro", "Incluíndo com sucesso!")
                    dispatch(
                        [
                            getList(),
                            resetForm('billingCycleForm'),
                            showTabs('tabList', 'tabCreate'),
                            selectTab('tabList'),
                        ]
                    )
                    r
                }).catch(resp => {
                    resp.response.data.detail.forEach(error => toastr.error(error.loc[1], error.msg))
                    dispatch({
                        type: 'BILLING_CYCLE_FETCHED',
                        payload: []
                    })
             })
    }
}