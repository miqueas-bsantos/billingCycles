import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducers'
import TabReducers from '../common/tab/tabReducers'
import BillingCycleReducers from '../billingCycle/billingCycleReducers'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducers,
    billingCycle: BillingCycleReducers,
    form: formReducer
})

export default rootReducer