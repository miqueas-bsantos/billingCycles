import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const base_url = 'http://localhost:8000/billingCycles'
const INITIAL_VALUES = {}

export function getList() {
    return dispatch => {
        axios.get(base_url)
            .then(resp => {
                dispatch({
                    type: 'BILLING_CYCLE_FETCHED',
                    payload: resp.data.data
                })
            }).catch(resp => {
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
                    init()
                }).catch(resp => {
                    resp.response.data.detail.forEach(error => toastr.error(error.loc[1], error.msg))
                    dispatch({
                        type: 'BILLING_CYCLE_FETCHED',
                        payload: []
                    })
             })
    }
}

export const showUpdate = (billingCycle) => {
    return dispatch => {
        dispatch([
            selectTab('tabUpdate'),
            showTabs('tabUpdate'),
            initialize('billingCycleForm', billingCycle)
        ])
    }
        
}

export const init = () => {
    return dispatch => {
        dispatch([
                getList(),
                initialize('billingCycleForm', INITIAL_VALUES),
                showTabs('tabList', 'tabCreate'),
                selectTab('tabList')
        ])
    }
}