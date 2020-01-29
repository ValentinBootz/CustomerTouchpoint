import React, { Component } from 'react';

class CustomerInfo extends Component {

    constructor(props) {
        super(props)

        this.getConsumtion = this.getConsumtion.bind(this)
        this.getKilometers = this.getKilometers.bind(this)
    }

    getConsumtion() {
        typeof this.props.customer.consumption == undefined ? '' : (parseFloat(this.props.customer.consumption.replace(',', '.'))).toString() + ' l/100km'
    }

    getKilometers() {
        typeof this.props.customer.kilometers == undefined ? '' : (parseInt(this.props.customer.kilometers_monthly.replace('.', '')) * 12).toString() + ' km'
    }

    render() {

        const consumption = this.getConsumtion()
        const kilometers = this.getKilometers()

        return (
            <div className='infoContainer'>
                <text className='raw'> Info </text>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Vorname: </text>
                    </div>
                    <text className='value'> {this.props.customer.firstName} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Nachname: </text>
                    </div>
                    <text className='value'> {this.props.customer.lastName} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Geburtsdatum: </text>
                    </div>
                    <text className='value'> {this.props.customer.birthday} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Adresse: </text>
                    </div>
                    <text className='value'> {this.props.customer.address} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Postleitzahl: </text>
                    </div>
                    <text className='value'> {this.props.customer.area_code} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Ort: </text>
                    </div>
                    <text className='value'> {this.props.customer.community} </text>
                </div>

                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Email: </text>
                    </div>
                    <text className='value'> {this.props.customer.email} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Telefon: </text>
                    </div>
                    <text className='value'> {this.props.customer.phone} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Marke: </text>
                    </div>
                    <text className='value'> {this.props.customer.brand} </text>
                </div>

                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Modell: </text>
                    </div>
                    <text className='value'> {this.props.customer.model} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Kaufpreis: </text>
                    </div>
                    <text className='value'> {this.props.customer.price} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Erstzulassung: </text>
                    </div>
                    <text className='value'> {this.props.customer.registration} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Kilometerstand: </text>
                    </div>
                    <text className='value'> {kilometers} </text>
                </div>
                <div className='info'>
                    <div className='nameContainer'>
                        <text className='name'> Verbrauch: </text>
                    </div>
                    <text className='value'> {consumption} </text>
                </div>
            </div>
        );
    }
}

export default CustomerInfo;
