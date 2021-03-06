import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    // constructor(props) {
    //     super(props)
    //     const renderRows = this.renderRows.bind(this)
    // }

    componentDidMount() {
        this.props.getList()
    }
    
    renderRows () {
        const list = this.props.billing.list || []
        return list.map(bc => 
            <tr key={bc.id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td className="btn-actions">
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => this.props.showDelete(bc)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Billing Name</th>
                            <th>Month</th>
                            <th>Year</th>
                            <th className="label-actions">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({billing: state.billingCycle})
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)