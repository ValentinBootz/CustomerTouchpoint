class CustomerPage extends React.Component {

    constructor() {
        super()

        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)

        this.state = {
            view: 1
        }

        this.max = 35
    }

    // componentDidMount() {
    //     do {
    //         this.handleNext()
    //     } while(this.state.view != 0) 
    // }

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
                            <button className='customerButton' />
                            <button className='serviceButton' />
                            <button className='dealerButton' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerPage;