import React, { Component } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <Sidebar />
                
            </>
        )
    }
}
