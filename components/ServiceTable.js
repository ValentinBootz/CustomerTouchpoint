import ServiceList from '../components/ServiceList'
import React, { Component } from 'react';

class ServiceTable extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            formControls: {
                date: {
                    value: '',
                    valid: false
                },
                name: {
                    value: 'select'
                },
                price: {
                    value: '',
                    valid: false
                }
            },
            showMessage: false
        }
    }

    handleSubmit = async event => {

        const data = JSON.stringify({
            "date": this.state.formControls.date.value,
            "name": this.state.formControls.name.value,
            "price": this.state.formControls.price.value
        });

        const date_regex = /^(0[1-9]|(1|2)[1-9]|3[0,1]).(0[1-9]|1[0-2]).20\d{2}/
        const price_regex= /^([1-9][0-9]{0,2}.[0-9]{3}|[1-9][0-9]{0,2})€/
        var date_valid = date_regex.test(this.state.formControls.date.value)
        var price_valid = price_regex.test(this.state.formControls.price.value)
        var service_valid = this.state.formControls.name.value != 'select'

        if (price_valid && date_valid && service_valid) {
            await fetch(`${this.props.baseUrl}/api/service`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: data,
                redirect: 'follow',
            }).then(response => response.text())
                .then(this.props.reload())
                .catch(error => console.log('error', error));
        } else {
            event.preventDefault()
            this.setState({ showMessage: true })
        }
    }

    changeHandler = event => {

        this.setState({ showMessage: false })

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
        })
    }

    render() {

        return (
            <div className='tableContainer'>
                <text className='raw'> Services </text>
                <div className='table'>
                    <ServiceList history={this.props.history} />
                    <form className='serviceForm'>
                        <div className='dateContainer'>
                            <input type='text'
                                className='dateInput'
                                name='date'
                                placeholder='dd.mm.yyyy'
                                value={this.state.formControls.date.value}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <div className='serviceContainer'>
                            <select value={this.state.formControls.name.value} onChange={this.changeHandler} className='selectField' name='name'>
                                <option value='select'> - </option>
                                <option value='Luftfilter'> Luftfilter </option>
                                <option value='Batterie'> Batterie </option>
                                <option value='Bremsscheiben vorne'> Bremsscheiben vorne </option>
                                <option value='Bremsscheiben hinten'> Bremsscheiben hinten </option>
                                <option value='Bremsflüssigkeit'> Bremsflüssigkeit </option>
                                <option value='Bremsbeläge vorne'> Bremsbeläge vorne </option>
                                <option value='Bremsbeläge hinten'> Bremsbeläge hinten </option>
                                <option value='Ölservice'> Ölservice </option>
                                <option value='Erste-Hilfe-Koffer'> Erste-Hilfe-Koffer </option>
                                <option value='Kraftstofffilter'> Kraftstofffilter </option>
                                <option value='HU/AU'> HU/AU </option>
                                <option value='Mikrofilter'> Mikrofilter </option>
                                <option value='Ölfilter'> Ölfilter </option>
                                <option value='Zündkerzen'> Zündkerzen </option>
                                <option value='Reifen'> Reifen </option>
                                <option value='Fahrzeuguntersuchung'> Fahrzeuguntersuchung </option>
                            </select>
                        </div>
                        <input type='text'
                            name='price'
                            className='priceInput'
                            placeholder='€'
                            value={this.state.formControls.price.value}
                            onChange={this.changeHandler}
                        />
                        <button className='addButton' onClick={this.handleSubmit}> Hinzufügen </button>
                        {this.state.showMessage && <text className='disclaimer'> Eingabe ungültig! </text>}
                    </form>
                </div>
            </div>
        );
    }
}


export default ServiceTable;
