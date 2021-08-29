import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'

export default class BillingCycles extends Component {
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

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}