import React, { Component } from 'react';

class CustomerView extends Component {

    constructor() {
        super()

        this.state = {
            formControls: {
                firstName: {
                    value: ''
                },
                lastName: {
                    value: ''
                },
                birthday: {
                    value: ''
                },
                address: {
                    value: ''
                },
                area_code: {
                    value: ''
                },
                community: {
                    value: ''
                },
                email: {
                    value: ''
                },
                phone: {
                    value: ''
                },
                contact_method: {
                    value: ''
                },
                brand: {
                    value: ''
                },
                model: {
                    value: ''
                },
                licence: {
                    value: ''
                },
                vin: {
                    value: ''
                },
                registration: {
                    value: ''
                },
                kilometers: {
                    value: ''
                }
            }
        }

    }

    submitHandler = event => {
        event.preventDefault()
        alert('form submitted')
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
                <text className='title'> Persönliche Daten </text>
                <div className='field'>
                    <text className='label'> Vorname </text>
                    <input type='text'
                        name='firstName'
                        value={this.state.formControls.firstName.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Nachname </text>
                    <input type='text'
                        name='lastName'
                        value={this.state.formControls.lastName.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Geburtsdatum </text>
                    <input type='text'
                        name='birthday'
                        placeholder='dd.mm.yyyy'
                        value={this.state.formControls.birthday.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Adresse </text>
                    <input type='text'
                        name='address'
                        value={this.state.formControls.address.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Postleitzahl </text>
                    <input type='text'
                        name='area_code'
                        value={this.state.formControls.area_code.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Ort </text>
                    <input type='text'
                        name='community'
                        value={this.state.formControls.community.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> E-Mail </text>
                    <input type='text'
                        name='email'
                        value={this.state.formControls.email.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Telefon </text>
                    <input type='text'
                        name='phone'
                        value={this.state.formControls.phone.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <br></br>
                <text className='title'> Fahrzeugdaten </text>
                <div className='field'>
                    <text className='label'> Marke </text>
                    <input type='text'
                        name='brand'
                        value={this.state.formControls.brand.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Modell </text>
                    <input type='text'
                        name='model'
                        value={this.state.formControls.model.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Kennzeichen </text>
                    <input type='text'
                        name='licence'
                        value={this.state.formControls.licence.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> VIN </text>
                    <input type='text'
                        name='vin'
                        value={this.state.formControls.vin.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Erstzulassung </text>
                    <input type='text'
                        name='registration'
                        value={this.state.formControls.registration.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='field'>
                    <text className='label'> Kilometerstand </text>
                    <input type='text'
                        name='kilometers'
                        value={this.state.formControls.kilometers.value}
                        onChange={this.changeHandler}
                    />
                </div>
                <button className='menuViewButton' onClick={this.submitHandler}> Update </button>
            </form>
        );
    }
}

export default CustomerView;
