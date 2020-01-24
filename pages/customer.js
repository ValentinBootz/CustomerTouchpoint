import fetch from 'isomorphic-unfetch';
import CustomerView from '../components/CustomerView'
import ServiceView from '../components/ServiceView'
import FinanceView from '../components/FinanceView'

class CustomerPage extends React.Component {

    constructor(props) {
        super(props)

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
        }

        this.max = 35
    }

    static async getInitialProps({ req }) {
        const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
        const res = await fetch(`${baseUrl}/api/customer`)
        const vin = "WBAVB71070VA36703"
        const customer = (await res.json()).find(element => element.vin == vin)
        return {customer}
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
                                <CustomerView customer={this.props.customer} />
                            </div> : null}
                            {this.state.showServiceView ? <div className='formContainer'>
                                <text className='header'> Meine Services. </text>
                                <ServiceView />
                            </div> : null}
                            {this.state.showFinanceView ? <div className='formContainer'>
                                <text className='header'> Meine Finanzen. </text>
                                <FinanceView />
                            </div> : null}
                        </div>
                    </div > : null}
                </div>
            </div>
        );
    }
}

export default CustomerPage;