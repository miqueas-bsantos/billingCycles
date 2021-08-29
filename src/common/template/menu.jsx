import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem label="Dashboard" icon="dashboard" path="#/"/>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="#/billingCycles"
                      label="Ciclos de Pagamentos" 
                      icon="usd"></MenuItem>
        </MenuTree>
    </ul>
)