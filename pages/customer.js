class CustomerPage extends React.Component {

    constructor() {
        super()

        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
        this.openCustomerMenu = this.openCustomerMenu.bind(this)

        this.state = {
            view: 0,
            menu: 'hidden'
        }

        this.max = 35
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

    openCustomerMenu() {
        this.setState({
            menu: 'visible'
        })
    }

    render() {

        return (
            <div className='customerContainer'>
                <div className={'customerBackground' + this.state.view} />
                <div className='customerContent'>
                    <div className='buttonContainer'>
                        <button className="rotateButtonPrev" onClick={this.handlePrev} />
                        <button className="rotateButtonNext" onClick={this.handleNext} />
                    </div>
                    <div className='menuContainer'>
                        <button className='menuButton' />
                        <div className='dropdownContent'>
                            <button className='customerButton' onClick={this.openCustomerMenu} />
                            <button className='serviceButton' onClick={this.openServiceMenu} />
                            <button className='dealerButton' onClick={this.openDealerMenu} />
                        </div>
                    </div>
                    <div className={this.state.menu + 'Menu'}>
                        <div className='menuOverlay'/>
                        <div className='menuContent'>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerPage;