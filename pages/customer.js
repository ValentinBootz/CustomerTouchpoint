import isomorphic from 'isomorphic-unfetch';
import CustomerView from '../components/CustomerView'
import ServiceView from '../components/ServiceView'
import FinanceView from '../components/FinanceView'

var fetch = require('fetch-retry')(isomorphic)

class CustomerPage extends React.Component {

    constructor(props) {
        super(props)

        this.findLatest = this.findLatest.bind(this)
        this.compare_predictions = this.compare_predictions.bind(this)
        this.compare_predictions_decreasing = this.compare_predictions_decreasing.bind(this)
        this.parseDate = this.parseDate.bind(this)
        this.reload = this.reload.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
        this.openCustomerView = this.openCustomerView.bind(this)
        this.openServiceView = this.openServiceView.bind(this)
        this.openFinanceView = this.openFinanceView.bind(this)
        this.closeView = this.closeView.bind(this)

        this.state = {
            view: 0,
            showCustomerView: false,
            showServiceView: false,
            showFinanceView: false,
            reload: false
        }

        this.max = 35
        this.baseUrl = 'https://customertouchpoint.azurewebsites.net'
        //this.baseUrl = 'http://localhost:8080'
    }

    reload() {
        this.setState({ reload: true })
    }


    async componentDidMount() {
        const vin = "WBAVB71070VA36703"
        this.customer = await fetch(`${this.baseUrl}/api/customer`)
            .then(res => res.json())
            .then(json => json.find(element => element.vin == vin))
            .catch(error => console.log('error', error))

        this.kilometers_monthly = parseInt(this.customer.kilometers_monthly.replace('.', '')) || 800

        this.history = await fetch(`${this.baseUrl}/api/service`)
            .then(res => res.json())
            .catch(error => console.log('error', error))

        if (this.history.length == 0) {
            this.history = [{ "date": "-", "name": "", "price": "" }]
        } else {
            this.history.sort(this.compare_predictions_decreasing)
        }

        this.upcoming = [
            { "date": this.next_airfilter(), "name": "Luftfilter", "price": "70€" },
            { "date": this.next_battery(), "name": "Batterie", "price": "260€" },
            { "date": this.next_brakediscs_front(), "name": "Bremsscheiben vorne", "price": "210€" },
            { "date": this.next_brakediscs_rear(), "name": "Bremsscheiben hinten", "price": "170€" },
            { "date": this.next_brakefluid(), "name": "Bremsflüssigkeit", "price": "90€" },
            { "date": this.next_brakepads_front(), "name": "Bremsbeläge vorne", "price": "450€" },
            { "date": this.next_brakepads_rear(), "name": "Bremsbeläge hinten", "price": "360€" },
            { "date": this.next_oilservice(), "name": "Ölservice", "price": "75€" },
            { "date": this.next_firstaidkit(), "name": "Erste-Hilfe-Koffer", "price": "25€" },
            { "date": this.next_fuelfilter(), "name": "Kraftstofffilter", "price": "200€" },
            { "date": this.next_hu_au(), "name": "HU/AU", "price": "120€" },
            { "date": this.next_microfilter(), "name": "Mikrofilter", "price": "30€" },
            { "date": this.next_oilfilter(), "name": "Ölfilter", "price": "30€" },
            { "date": this.next_sparkplugs(), "name": "Zündkerzen", "price": "200€" },
            { "date": this.next_tires(), "name": "Reifen", "price": "800€" },
            { "date": this.next_vehiclecheck(), "name": "Fahrzeuguntersuchung", "price": "200€" },
        ]

        this.upcoming.sort(this.compare_predictions)
    }

    findLatest(service) {
        var latest = this.parseDate(this.customer.registration) || this.parseDate('01.01.2020')
        for (var i = 0; i < this.history.length; i++)
            if (this.history[i]['name'] == service)
                latest = this.parseDate(this.history[i]['date']);
        return latest
    }

    compare_predictions(x, y) {
        return ((this.parseDate(x.date) == this.parseDate(y.date)) ? 0 : ((this.parseDate(x.date) > this.parseDate(y.date)) ? 1 : -1));
    }

    compare_predictions_decreasing(x, y) {
        return ((this.parseDate(x.date) == this.parseDate(y.date)) ? 0 : ((this.parseDate(x.date) < this.parseDate(y.date)) ? 1 : -1));
    }

    next_airfilter() {
        var next_airfilter = this.findLatest('Luftfilter')
        const period_mileage_constraint = Math.floor(60000 / this.kilometers_monthly)
        next_airfilter.setMonth(next_airfilter.getMonth() + Math.min(48, period_mileage_constraint))

        return this.parseString(next_airfilter)
    }

    next_battery() {
        var next_battery = this.findLatest('Batterie')
        next_battery.setMonth(next_battery.getMonth() + 96)

        return this.parseString(next_battery)
    }

    next_brakediscs_front() {
        var next_brakediscs_front = this.findLatest('Bremsscheiben vorne')
        const period_mileage_constraint = Math.floor(80000 / this.kilometers_monthly)
        next_brakediscs_front.setMonth(next_brakediscs_front.getMonth() + period_mileage_constraint)

        return this.parseString(next_brakediscs_front)
    }

    next_brakediscs_rear() {
        var next_brakediscs_rear = this.findLatest('Bremsscheiben hinten')
        const period_mileage_constraint = Math.floor(120000 / this.kilometers_monthly)
        next_brakediscs_rear.setMonth(next_brakediscs_rear.getMonth() + period_mileage_constraint)

        return this.parseString(next_brakediscs_rear)
    }

    //Todo: Implement first time 36 month
    next_brakefluid() {
        var next_brakefluid = this.findLatest('Bremsflüssigkeit')
        next_brakefluid.setMonth(next_brakefluid.getMonth() + 24)

        return this.parseString(next_brakefluid)
    }

    next_brakepads_front() {
        var next_brakepads_front = this.findLatest('Bremsbeläge')
        const period_mileage_constraint = Math.floor(40000 / this.kilometers_monthly)
        next_brakepads_front.setMonth(next_brakepads_front.getMonth() + period_mileage_constraint)

        return this.parseString(next_brakepads_front)
    }

    next_brakepads_rear() {
        var next_brakepads_rear = this.findLatest('Bremsbeläge')
        const period_mileage_constraint = Math.floor(60000 / this.kilometers_monthly)
        next_brakepads_rear.setMonth(next_brakepads_rear.getMonth() + period_mileage_constraint)

        return this.parseString(next_brakepads_rear)
    }

    next_oilservice() {
        var next_oilservice = this.findLatest('Ölservice')
        const period_mileage_constraint = Math.floor(30000 / this.kilometers_monthly)
        next_oilservice.setMonth(next_oilservice.getMonth() + Math.min(24, period_mileage_constraint))

        return this.parseString(next_oilservice)
    }

    next_firstaidkit() {
        var next_firstaidkit = this.findLatest('Erste-Hilfe-Koffer')
        next_firstaidkit.setMonth(next_firstaidkit.getMonth() + 48)

        return this.parseString(next_firstaidkit)
    }

    next_fuelfilter() {
        var next_fuelfilter = this.findLatest('Kraftstofffilter')
        const period_mileage_constraint = Math.floor(60000 / this.kilometers_monthly)
        next_fuelfilter.setMonth(next_fuelfilter.getMonth() + Math.min(48, period_mileage_constraint))

        return this.parseString(next_fuelfilter)
    }

    //Todo: Implement first time 36 month
    next_hu_au() {
        var next_hu_au = this.findLatest('HU/AU')
        next_hu_au.setMonth(next_hu_au.getMonth() + 24)

        return this.parseString(next_hu_au)
    }

    next_microfilter() {
        var next_microfilter = this.findLatest('Mikrofilter')
        const period_mileage_constraint = Math.floor(30000 / this.kilometers_monthly)
        next_microfilter.setMonth(next_microfilter.getMonth() + Math.min(24, period_mileage_constraint))

        return this.parseString(next_microfilter)
    }

    next_oilfilter() {
        var next_oilfilter = this.findLatest('Ölfilter')
        const period_mileage_constraint = Math.floor(30000 / this.kilometers_monthly)
        next_oilfilter.setMonth(next_oilfilter.getMonth() + Math.min(24, period_mileage_constraint))

        return this.parseString(next_oilfilter)
    }

    next_sparkplugs() {
        var next_sparkplugs = this.findLatest('Zündkerzen')
        const period_mileage_constraint = Math.floor(60000 / this.kilometers_monthly)
        next_sparkplugs.setMonth(next_sparkplugs.getMonth() + Math.min(48, period_mileage_constraint))

        return this.parseString(next_sparkplugs)
    }

    next_tires() {
        var next_tires = this.findLatest('Reifen')
        const period_mileage_constraint = Math.floor(25000 / this.kilometers_monthly)
        next_tires.setMonth(next_tires.getMonth() + Math.min(60, period_mileage_constraint))

        return this.parseString(next_tires)
    }

    next_vehiclecheck() {
        var next_vehiclecheck = this.findLatest('Fahrzeuguntersuchung')
        const period_mileage_constraint = Math.floor(60000 / this.kilometers_monthly)
        next_vehiclecheck.setMonth(next_vehiclecheck.getMonth() + Math.min(48, period_mileage_constraint))

        return this.parseString(next_vehiclecheck)
    }

    parseString(date) {
        return ("0" + date.getDate()).slice(-2) + '.' + ("0" + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear()
        // return ("0" + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear()
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

    handleNext() {
        if (this.state.view == this.max) {
            this.setState({
                view: 0
            })
        } else {
            this.setState({
                view: this.state.view + 1
            })
        }
    }

    handlePrev() {
        if (this.state.view == 0) {
            this.setState({
                view: this.max
            })
        } else {
            this.setState({
                view: this.state.view - 1
            })
        }
    }

    openCustomerView() {
        this.setState({
            showCustomerView: true
        })
    }

    openServiceView() {
        this.setState({
            showServiceView: true
        })
    }

    openFinanceView() {
        this.setState({
            showFinanceView: true
        })
    }

    closeView() {
        this.setState({
            showCustomerView: false,
            showServiceView: false,
            showFinanceView: false
        })
    }

    render() {

        return (
            <div className='customerContainer'>
                <div className='preload'>
                    {this.state.view == 0 ? <div className={'customerBackground' + this.max} /> : <div className={'customerBackground' + (this.state.view - 1)} />}
                    {this.state.view != this.max && <div className={'customerBackground' + (this.state.view + 1)} />}
                </div>
                <div className={'customerBackground' + this.state.view} />
                <div className='customerContent'>
                    <div className='buttonContainer'>
                        <button className="rotateButtonPrev" onClick={this.handlePrev} />
                        <button className="rotateButtonNext" onClick={this.handleNext} />
                    </div>
                    <div className='menuContainer'>
                        <button className='menuButton' />
                        <div className='dropdownContent'>
                            <button className='customerButton' onClick={this.openCustomerView} />
                            <button className='serviceButton' onClick={this.openServiceView} />
                            <button className='financeButton' onClick={this.openFinanceView} />
                        </div>
                    </div>
                    {this.state.showCustomerView || this.state.showServiceView || this.state.showFinanceView ? <div className='menuViewContainer'>
                        <div className='menuViewOverlay' />
                        <div className='menuViewContent' >
                            <button className='closeButton' onClick={this.closeView} />
                            {this.state.showCustomerView ? <div className='formContainer'>
                                <text className='header'> Mein Profil. </text>
                                <CustomerView customer={this.customer} baseUrl={this.baseUrl} reload={this.reload} />
                            </div> : null}
                            {this.state.showServiceView ? <div className='formContainer'>
                                <text className='header'> Meine Services. </text>
                                <ServiceView customer={this.customer} history={this.history} upcoming={this.upcoming} baseUrl={this.baseUrl} />
                            </div> : null}
                            {this.state.showFinanceView ? <div className='formContainer'>
                                <text className='header'> Meine Finanzen. </text>
                                <FinanceView customer={this.customer} history={this.history}/>
                            </div> : null}
                        </div>
                    </div > : null}
                </div>
            </div>
        );
    }
}

export default CustomerPage;