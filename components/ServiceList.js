import React, { Component } from 'react';

class ServiceList extends Component {

    constructor(props) {
        super(props)

        this.parseDate = this.parseDate.bind(this)
        this.compare_predictions = this.compare_predictions.bind(this)
    }

    parseDate(string) {
        var regex = /(\d{2}).(\d{2}).(\d{4})/
        var array = regex.exec(string);

        try {
            return new Date(array[3], array[2] - 1, array[1])
        }
        catch {
            return undefined
        }
    }

    compare_predictions(x, y) {
        return ((this.parseDate(x.date) == this.parseDate(y.date)) ? 0 : ((this.parseDate(x.date) > this.parseDate(y.date)) ? 1 : -1));
    }

    render() {

        const servicelist = this.props.history.sort(this.compare_predictions).map(service => {
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
