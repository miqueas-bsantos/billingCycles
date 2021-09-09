import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import List from './billingCycleList'
import Form from './billingCycleForm'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { create, update, remove, init } from './billingCycleActions'

class BillingCycles extends Component {
    componentDidMount() {
        this.props.init()
    }
    render() {


        return (
            <div>
                <ContentHeader title="Payment Cycles" small='Form'></ContentHeader>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="List" icon="bars" target="tabList"/>
                            <TabHeader label="Insert" icon="plus" target="tabCreate"/>
                            <TabHeader label="Changes" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Delete" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Form onSubmit={this.props.create} buttoName="Add"/>
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Form onSubmit={this.props.update} buttoName="Save"/>
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Form onSubmit={this.props.remove} readOnly={true} buttoName="Delete"/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove
}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycles)