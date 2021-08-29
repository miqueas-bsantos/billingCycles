import { getSummary, BILLING_SUMMARY_FETCHED } from './dashboardAction'

const INITIAL_STATE = ({summary: {credit: 150, debit: 100}})

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case BILLING_SUMMARY_FETCHED:
            return {...state, summary: action.payload}
    }
    return state
}