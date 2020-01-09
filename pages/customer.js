class CustomerPage extends React.Component {

    constructor() {
        super()

        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)

        this.state = {
            view: 33,
            nextPressed: false
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

    render() {
        return (
            <div className="customerContainer">
                <div className={'customerBackground' + this.state.view} />
                <div className="customerContent">
                    <button className="rotateButtonPrev" onClick={this.handlePrev} />
                    <button className="rotateButtonNext" onClick={this.handleNext} />
                </div>
            </div>
        );
    }
}

export default CustomerPage;