import ServiceList from '../components/ServiceList'
import React, { Component } from 'react';

class ServiceTable extends Component {

    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            formControls: {
                date: {
                    value: ''
                },
                name: {
                    value: 'select'
                },
                price: {
                    value: ''
                }
            }
        }
    }

    handleSubmit = async event => {

        const data = JSON.stringify({
            "date": this.state.formControls.date.value,
            "name": this.state.formControls.name.value,
            "price": this.state.formControls.price.value
        });

        await fetch(`${this.props.baseUrl}/api/service`, {
            method: 'POST',
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
            <div className='tableContainer'>
                <text className='raw'> Services </text>
                <div className='table'>
                    <ServiceList history={this.props.history} />
                    <form className='serviceForm'>
                        <div className='dateContainer'>
                            <input type='text'
                                className='dateInput'
                                name='date'
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
                                <option value='Kraftstofffilter Diesel'> Kraftstofffilter Diesel </option>
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
                            value={this.state.formControls.price.value}
                            onChange={this.changeHandler}
                        />
                        <button className='addButton' onClick={this.handleSubmit}> Hinzufügen </button>
                    </form>
                </div>
            </div>
        );
    }
}


export default ServiceTable;
