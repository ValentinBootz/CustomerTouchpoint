import React, { Component } from 'react';

class ServiceView extends Component {
    constructor(props) {
        super(props)

        this.dealerLink = this.dealerLink.bind(this)

        this.state = {
            digital: [{ "name": "Remote Service", "status": "aktiv" }, { "name": "BMW Connected+", "status": "inaktiv" }, { "name": "RTTI", "status": "aktiv" }]
        }
    }

    dealerLink() {
        const location = this.props.customer.community == '' ? 'München' : this.props.customer.community
        const url = `https://www.bmw.de/de/fastlane/bmw-partner.html#/dlo/DE/de/BMW_BMWM?type=location&term=${location},%20Deutschland`
        window.open(url, '_blank')
    }

    digitalLink() {
        const url = 'https://www.bmw-connecteddrive.de/app/index.html#/portal/store'
        window.open(url, '_blank')
    }

    render() {

        const history = this.props.history.map(service => {
            return (
                <div className='service'>
                    <div className='dateContainer'>
                        <text className='servicedate'> {service.date} </text>
                    </div>
                    <div className='serviceContainer'>
                        <text className='servicename'> {service.name} </text>
                    </div>
                    <div className='priceContainer'>
                        <text className='serviceprice'> {service.price} </text>
                    </div>
                </div>
            )
        })

        const upcoming = this.props.upcoming.map(service => {
            return (
                <div className='service'>
                    <div className='dateContainer'>
                        <text className='servicedate'> {service.date} </text>
                    </div>
                    <div className='serviceContainer'>
                        <text className='servicename'> {service.name} </text>
                    </div>
                    <div className='priceContainer'>
                        <text className='serviceprice'> {service.price} </text>
                    </div>
                </div>
            )
        })

        const digital = this.state.digital.map(service => {
            return (
                <div className='service'>
                    <div className='digitalContainer'>
                        <text className='servicename'> {service.name} </text>
                    </div>
                    <div className='statusContainer'>
                        <text className='servicestatus'> {service.status} </text>
                    </div>
                </div>
            )
        })

        return (
            <div className='serviceViewContainer'>
                <text className='title'> Service-Historie </text>
                <div className='serviceListContainer'>
                    {history}
                </div>
                <br />
                <text className='title'> Service-Vorhersagen </text>
                <div className='serviceListContainer'>
                    {upcoming}
                </div>
                <button className='menuViewButton' onClick={this.dealerLink}>
                    <text> BMW Partner </text>
                </button>
                <text className='title'> Digitale Services </text>
                <div className='serviceListContainer'>
                    {digital}
                </div>
                <button className='menuViewButton' onClick={this.digitalLink}>
                    <text> BMW Connected Drive </text>
                </button>
            </div>
        );
    }
}

export default ServiceView;