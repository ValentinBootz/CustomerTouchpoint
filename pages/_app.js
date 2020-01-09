import React from 'react'
import App from 'next/app'
import '../static/styles/index.css'

class CustomerTouchpoint extends App {
    render() {
        const { Component, pageProps } = this.props
        return <Component {...pageProps} />
    }
}

export default CustomerTouchpoint