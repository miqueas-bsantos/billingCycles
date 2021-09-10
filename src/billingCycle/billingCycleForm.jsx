import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from './billingCycleActions'

import Row from '../common/layout/row'
import { reduxForm, Field, formValueSelector } from  'redux-form'

import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'


class BillingCycleForm extends Component {

    calculateSummary(credits, debits){
        const sum = (x, y) => x + y
        return {
            sumOfCredits: credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebits: debits.map(d => +d.value || 0).reduce(sum)
        }
    }
    render () {
        const { handleSubmit, readOnly, buttoName, credits, debits } = this.props
        const { sumOfCredits, sumOfDebits } = this.calculateSummary(this.props.credits, this.props.debits)
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
                    <Summary credit={sumOfCredits} debit={sumOfDebits}/>
                    <Row>
                        <ItemList cols="12 6" readOnly={this.props.readOnly} legend="Credits" field="credits" list={credits} status={false}/>
                        <ItemList cols="12 6" readOnly={this.props.readOnly} legend="Debits" field="debits" list={debits} status={true}/>
                    </Row>
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
const mapStateToProps = state => ({
        credits: selector(state, 'credits'),
        debits: selector(state, 'debits')
})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)