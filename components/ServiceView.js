import React, { Component } from 'react';

class ServiceView extends Component {
    constructor(props) {
        super(props)

        this.dealerLink = this.dealerLink.bind(this)

        this.state = {
            history: [{ "date": "01.06.2019", "name": "Autokauf", "price": "40.000€" }, { "date": "01.01.2020", "name": "Ölservice", "price": "500€" }],
            upcoming: [{ "date": "01.06.2020", "name": "Bremsbeläge", "price": "800€" }, { "date": "01.01.2020", "name": "Mikrofilter", "price": "300€" }],
            digital: [{ "name": "Remote Service", "status": "aktiv" }, { "name": "BMW Connected+", "status": "inaktiv" }, { "name": "RTTI", "status": "aktiv" }]
        }
    }

    dealerLink() {
        const url = `https://www.bmw.de/de/fastlane/bmw-partner.html#/dlo/DE/de/BMW_BMWM?type=location&term=${this.props.customer.community},%20Deutschland`
        window.open(url, '_blank')
    }

    digitalLink() {
        const url = 'https://www.bmw-connecteddrive.de/app/index.html#/portal/store'
        window.open(url, '_blank')
    }

    render() {

        const history = this.state.history.map(service => {
            return (
                <div className='service'>
                    <text className='servicedate'> {service.date} </text>
                    <text className='servicename'> {service.name} </text>
                    <text className='serviceprice'> {service.price} </text>
                </div>
            )
        })

        const upcoming = this.state.upcoming.map(service => {
            return (
                <div className='service'>
                    <text className='servicedate'> {service.date} </text>
                    <text className='servicename'> {service.name} </text>
                    <text className='serviceprice'> {service.price} </text>
                </div>
            )
        })

        const digital = this.state.digital.map(service => {
            return (
                <div className='service'>
                    <text className='servicename'> {service.name} </text>
                    <text className='servicestatus'> {service.status} </text>
                </div>
            )
        })

        return (
            <div className='serviceViewContainer'>
                <text className='title'> Termine </text>
                <div className='serviceListContainer'>
                    {history}
                </div>
                <br />
                <text className='title'> Serviceplan </text>
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