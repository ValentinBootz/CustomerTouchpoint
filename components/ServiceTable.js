import React, { Component } from 'react';

class ServiceTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            history: [{ "date": "01.06.2019", "name": "Autokauf", "price": "40.000€" }, { "date": "01.01.2020", "name": "Ölservice", "price": "500€" }]
        }
    }

    render() {

        const servicelist = this.state.history.map(service => {
            return (
                <div className='service'>
                    <div className='dateContainer'>
                        <text className='servicedate_small'> {service.date} </text>
                    </div>
                    <div className='serviceContainer'>
                    <text className='servicename_small'> {service.name} </text>
                    </div>
                    <text className='serviceprice_small'> {service.price} </text>
                </div>
            )
        })

        return (
            <div className='tableContainer'>
                <text className='raw'> Services </text>
                <div className='table'>
                    {servicelist}
                </div>
            </div>
        );
    }
}


export default ServiceTable;
