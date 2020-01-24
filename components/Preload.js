import React, { Component } from 'react';

class Preload extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='preload'>
                <div className={'customerBackground' + this.props.view - 3}/>
                <div className={'customerBackground' + this.props.view - 2}/>
                <div className={'customerBackground' + this.props.view - 1}/>
                <div className={'customerBackground' + this.props.view + 1}/>
                <div className={'customerBackground' + this.props.view + 2}/>
                <div className={'customerBackground' + this.props.view + 3}/>
            </div>
        )
    }
}

export default Preload;