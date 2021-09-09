import React, { Component } from 'react'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import { Field } from 'redux-form'

class CreditList extends Component {

    renderRows() {
        const list = this.props.list || [{}]
        console.log(list)
        return list.map((item, index) => (
                <tr key={index}>
                    {console.log(item[index], index)}
                    <td>
                        <Field name={`credits[${index}].name`}
                           component={Input} 
                           placeholder="Enter the name" 
                           readOnly={this.props.readOnly} />
                    </td>
                    <td>
                        <Field name={`credits[${index}].value`}
                           component={Input} 
                           placeholder="Enter the amount" 
                           readOnly={this.props.readOnly} />
                    </td>
                    <td>

                    </td>
                </tr>
            ))
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Credits</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Actions</th>
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

export default CreditList