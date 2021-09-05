import React from 'react'
import '../common/template/dependencies'
import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Messages from '../common/msg/messages'

export default props => {
    return(
        <div className="wrapper">
            <Header></Header>
            <SideBar></SideBar>
            <div className="content-wrapper">
                <Routes />
            </div>
            <Footer></Footer>
            <Messages />
        </div>
    )
}