import React, { Component } from 'react'
import { reduxForm, Field } from  'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from './billingCycleActions'

class BillingCycleForm extends Component {
    render () {
        const { handleSubmit } = this.props
        return (
            
            <form role='' onSubmit={handleSubmit}>
                <div className="box-body" >
                    <Field name='name' 
                            component={LabelAndInput}
                            placeholder="Enter the name"
                            type="text"
                            label="Name"
                            cols="12 4" />
                    <Field name='month' 
                            component={LabelAndInput}
                            placeholder="Enter the month"
                            type="number"
                            label="Month"
                            cols="12 4" />
                    <Field name='year' 
                            component={LabelAndInput}
                            placeholder="Enter the year"
                            type="number"
                            label="Year"
                            cols="12 4" />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-danger ml-1" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)