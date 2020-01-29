import React, { Component } from 'react';

class CustomerView extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            formControls: {
                firstName: {
                    value: this.props.customer.firstName
                },
                lastName: {
                    value: this.props.customer.lastName
                },
                birthday: {
                    value: this.props.customer.birthday
                },
                address: {
                    value: this.props.customer.address
                },
                area_code: {
                    value: this.props.customer.area_code
                },
                community: {
                    value: this.props.customer.community
                },
                email: {
                    value: this.props.customer.email
                },
                phone: {
                    value: this.props.customer.phone
                },
                contact_method: {
                    value: this.props.customer.contact_method
                },
                brand: {
                    value: this.props.customer.brand
                },
                model: {
                    value: this.props.customer.model
                },
                licence: {
                    value: this.props.customer.licence
                },
                vin: {
                    value: this.props.customer.vin
                },
                price: {
                    value: this.props.customer.price
                },
                registration: {
                    value: this.props.customer.registration
                },
                kilometers_monthly: {
                    value: this.props.customer.kilometers_monthly
                }
            }
        }
    }

    handleSubmit = async event => {

        const data = JSON.stringify({
            "firstName": this.state.formControls.firstName.value,
            "lastName": this.state.formControls.lastName.value,
            "birthday": this.state.formControls.birthday.value,
            "address": this.state.formControls.address.value,
            "area_code": this.state.formControls.area_code.value,
            "community": this.state.formControls.community.value,
            "email": this.state.formControls.email.value,
            "phone": this.state.formControls.phone.value,
            "contact_method": this.state.formControls.contact_method.value,
            "brand": this.state.formControls.brand.value,
            "model": this.state.formControls.model.value,
            "licence": this.state.formControls.licence.value,
            "vin": this.state.formControls.vin.value,
            "price": this.state.formControls.price.value,
            "registration": this.state.formControls.registration.value,
            "kilometers_monthly": this.state.formControls.kilometers_monthly.value
        });

        await fetch(`${this.props.baseUrl}/api/customer`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: data,
            redirect: 'follow',
        }).then(response => response.text())
            .then(this.props.reload())
            .catch(error => console.log('error', error));
    }

    changeHandler = event => {

        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: {
                    ...this.state.formControls[name],
                    value
                }
            }
        });
    }

    render() {
        return (
            <form className='profileForm'>
                <text className='section'> Persönliche Daten </text>
                <div className='field'>
                    <text className='label'> Vorname </text>
                    <input type='text'
                        className='styledInput'
                        name='firstName'
                        value={this.state.formControls.firstName.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Nachname </text>
                    <input type='text'
                        className='styledInput'
                        name='lastName'
                        value={this.state.formControls.lastName.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Geburtsdatum </text>
                    <input type='text'
                        className='styledInput'
                        name='birthday'
                        placeholder='dd.mm.yyyy'
                        value={this.state.formControls.birthday.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Adresse </text>
                    <input type='text'
                        className='styledInput'
                        name='address'
                        value={this.state.formControls.address.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Postleitzahl </text>
                    <input type='text'
                        className='styledInput'
                        name='area_code'
                        value={this.state.formControls.area_code.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Ort </text>
                    <input type='text'
                        className='styledInput'
                        name='community'
                        value={this.state.formControls.community.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> E-Mail </text>
                    <input type='text'
                        className='styledInput'
                        name='email'
                        value={this.state.formControls.email.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Telefon </text>
                    <input type='text'
                        className='styledInput'
                        name='phone'
                        value={this.state.formControls.phone.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <br></br>
                <text className='section'> Fahrzeugdaten </text>
                <div className='field'>
                    <text className='label'> Marke </text>
                    <input type='text'
                        className='styledInput'
                        name='brand'
                        value={this.state.formControls.brand.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Modell </text>
                    <input type='text'
                        className='styledInput'
                        name='model'
                        value={this.state.formControls.model.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Kennzeichen </text>
                    <input type='text'
                        className='styledInput'
                        name='licence'
                        value={this.state.formControls.licence.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> VIN </text>
                    <input type='text'
                        className='styledInput'
                        name='vin'
                        value={this.state.formControls.vin.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Kaufpreis </text>
                    <input type='text'
                        className='styledInput'
                        name='price'
                        value={this.state.formControls.price.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Erstzulassung </text>
                    <input type='text'
                        className='styledInput'
                        name='registration'
                        value={this.state.formControls.registration.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Kilometer pro Monat </text>
                    <input type='text'
                        className='styledInput'
                        name='kilometers_monthly'
                        value={this.state.formControls.kilometers_monthly.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <button className='menuViewButton' onClick={this.handleSubmit}>
                    <text> Update </text>
                </button>
            </form>
        );
    }
}

export default CustomerView;
