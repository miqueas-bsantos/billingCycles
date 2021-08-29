import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducers'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer