import fetch from 'isomorphic-unfetch';
import CustomerInfo from '../components/CustomerInfo';
import ServiceTable from '../components/ServiceTable'

class DealerPage extends React.Component {

    constructor(props) {
        super(props)

        this.reload = this.reload.bind(this)

        this.state = { value: 'select', reload: false }

        this.baseUrl = 'https://customertouchpoint.azurewebsites.net'
        //this.baseUrl = 'http://localhost:8080'
    }

    reload() {
        this.setState({reload: true})
    }

    async componentDidMount() {
        const vin = 'WBAVB71070VA36703'
        this.customer = await fetch(`${this.baseUrl}/api/customer`)
            .then(res => res.json())
            .then(json => json.find(element => element.vin == vin))
            .catch(error => console.log('error', error))

        this.history = await fetch(`${this.baseUrl}/api/service`)
            .then(res => res.json())
            .catch(error => console.log('error', error))
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {

        return (
            <div className='dealerContainer'>
                <div className='selectForm'>
                    <text className='raw'> VIN </text>
                    <select value={this.state.value} onChange={this.onChange.bind(this)} className='selectField'>
                        <option value='select'> - </option>
                        <option value='WBAVB71070VA36703'> WBAVB71070VA36703 </option>
                    </select>
                </div>
                {(this.state.value == 'WBAVB71070VA36703') && <CustomerInfo customer={this.customer} baseUrl={this.baseUrl} />}
                {(this.state.value == 'WBAVB71070VA36703') && <ServiceTable customer={this.customer} history={this.history} baseUrl={this.baseUrl} reload={this.reload}/>}
            </div>
        );
    }
}


export default DealerPage;
