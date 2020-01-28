import React, { Component } from 'react';

class ServiceList extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const servicelist = this.props.history.map(service => {
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
            <div>
                {servicelist}
            </div>
        );
    }
}

export default ServiceList;
