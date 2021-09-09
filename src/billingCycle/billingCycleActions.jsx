import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const base_url = 'http://localhost:8000/billingCycles'
const INITIAL_VALUES = {credits: [{}], debits: [{}]}

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

export const create = (values) => {
    return submit('post', values)
}

export const remove = (values) => {
    return submit('delete', values)
}

export const update = (values) => {
    return submit('put', values)
}

export function submit(method, values) {
    const id = values.id && method!== 'put' ? values.id : ""
    return dispatch => {
        axios[method](`${base_url}/${id}`, values)
             .then(resp => {
                    toastr.success("Registro", "Atualizado com sucesso!")
                    dispatch(init())
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
    if (!billingCycle.credits.length) {billingCycle.credits=[{}]}
    if (!billingCycle.debits.length) {billingCycle.debits=[{}]}
    return dispatch => {
        dispatch([
            selectTab('tabUpdate'),
            showTabs('tabUpdate'),
            initialize('billingCycleForm', billingCycle)
        ])
    }
}

export const showDelete = (billingCycle) => {
    if (!billingCycle.credits.length) {billingCycle.credits=[{}]}
    if (!billingCycle.debits.length) {billingCycle.debits=[{}]}
    return dispatch => {
        dispatch([
            selectTab('tabDelete'),
            showTabs('tabDelete'),
            initialize('billingCycleForm', billingCycle)
        ])
    }
}

export const init = () => {
    return [
                getList(),
                showTabs('tabList', 'tabCreate'),
                selectTab('tabList'),
                initialize('billingCycleForm', INITIAL_VALUES)
        ]
}