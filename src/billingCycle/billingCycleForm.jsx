import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from './billingCycleActions'

import { reduxForm, Field, formValueSelector } from  'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import CreditList from './creditList'



class BillingCycleForm extends Component {
    render () {
        const { handleSubmit, readOnly, buttoName, credits } = this.props
        return (
            
            <form role='' onSubmit={handleSubmit}>
                <div className="box-body" >
                    <Field name='name'
                            readOnly={readOnly}
                            component={LabelAndInput}
                            placeholder="Enter the name"
                            type="text"
                            label="Name"
                            cols="12 4" />
                    <Field name='month'
                            readOnly={readOnly} 
                            component={LabelAndInput}
                            placeholder="Enter the month"
                            type="number"
                            label="Month"
                            cols="12 4" />
                    <Field name='year' 
                            readOnly={readOnly}
                            component={LabelAndInput}
                            placeholder="Enter the year"
                            type="number"
                            label="Year"
                            cols="12 4" />
                    <CreditList cols="12 6" readOnly={this.props.readOnly} list={credits}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">{buttoName}</button>
                    <button type="button" className="btn btn-danger ml-1" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)