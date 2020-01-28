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
                    value: ''
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
                            <input type='text'
                                className='nameInput'
                                name='name'
                                value={this.state.formControls.name.value}
                                onChange={this.changeHandler}
                            />
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
