import React, { Component } from 'react'

import If from '../common/operador/If'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ItemList extends Component {

    add(index, item={}) {
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }
    
    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }        
    }


    renderRows() {
        const list = this.props.list || [{}]
        return list.map((item, index) => (
                <tr key={index}>
                    <td>
                        <Field name={`${this.props.field}[${index}].name`}
                           component={Input} 
                           placeholder="Enter the name" 
                           readOnly={this.props.readOnly} />
                    </td>
                    <td>
                        <Field name={`${this.props.field}[${index}].value`}
                           component={Input} 
                           placeholder="Enter the amount" 
                           readOnly={this.props.readOnly} />
                    </td>
                    <If test={this.props.status}>
                        <td>
                            <Field name={`${this.props.field}[${index}].status`}
                            component={Input} 
                            placeholder="Enter the status" 
                            readOnly={this.props.readOnly} />
                        </td>
                    </If>                    
                    <td>
                        <button type="button" 
                                style={{margin: "0 5px"}} 
                                className="btn btn-success"
                                onClick={() => this.add(index+1)}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button type="button" 
                                style={{margin: "0 auto"}} 
                                className="btn btn-warning"
                                onClick={() => this.add(index+1, item)}>
                            <i className="fa fa-clone"></i>
                        </button>
                        <button type="button" 
                                style={{margin: "0 5px"}} 
                                className="btn btn-danger"
                                onClick={() => this.remove(index)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <If test={this.props.status}>
                                    <th>Status</th>
                                </If>
                                <th className="btn-actions">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)