import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducers'
import TabReducers from '../common/tab/tabReducers'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducers
})

export default rootReducer