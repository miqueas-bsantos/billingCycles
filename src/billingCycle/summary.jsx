import React from 'react'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({credit, debit}) => {
    return (
        <div>
            <legend>Summary</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank'
                    value={`R$ ${credit}`} text='Total credits amount' />
                <ValueBox cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${debit}`} text='Total Debits amount' />
                <ValueBox cols='12 4' color='blue' icon='money'
                    value={`R$ ${credit - debit}`} text='Summary' />                
            </Row>
        </div>
    )
}