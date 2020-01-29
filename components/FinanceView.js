import React, { Component } from 'react';

class FinanceView extends Component {
    constructor(props) {
        super(props)
        
        this.parseDate = this.parseDate.bind(this)
        this.calculateMaintenance = this.calculateMaintenance.bind(this)

        this.depreciation = this.calculateDepreciation()
        this.fuel = this.calculateFuelCost()
        this.insurance = this.calculateInsurance()
        this.maintenance = this.calculateMaintenance()
        this.totalcost = this.depreciation + this.fuel + this.insurance + this.maintenance
    }

    calculateDepreciation() {
        var price = parseInt(this.props.customer.price.replace('.', '')) || 30000
        return price*0.1
    }

    calculateFuelCost() {
        const consumption_100km = 10
        const avg_price_per_liter = 1.45
        const kilometers_monthly = parseInt(this.props.customer.kilometers_monthly.replace('.','')) || 800
        return kilometers_monthly*12/100*consumption_100km*avg_price_per_liter
    }

    calculateInsurance() {
        const insurance_monthly =  parseInt(this.props.customer.insurance_monthly.replace('.','')) || 200
        return insurance_monthly*12
    }

    calculateMaintenance() {
        var maintenance_cost = 0
        const history = this.props.history
        for(var i = 0; i < history.length; i++) {
            var service = history[i];
            if(this.parseDate(service['date']).getFullYear() == '2019') {
                maintenance_cost += parseInt(service['price'].replace('.',''))
            }
        }
        return maintenance_cost
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

    render() {

        return (
            <div className='financeViewContainer'>
                <text className='subtitled'> Total Cost of Ownership </text>
                <div className='explanationContainer'>
                    <text className='explanation'>
                        Dein Total Cost of Ownership beschreibt deine Gesamtkosten im Jahr 2019. Dabei werden Wertverlust sowie laufende Kosten individuell eingeschätzt. Unter Mein Profil kannst du deine Angaben aktualisieren um noch genauere Ergebnisse zu ermöglichen.
                    </text>
                </div>
                <div className='costViewContainer'>
                    <div className='elementContainer'>
                        <div className='typeContainer'>
                            <text className='totalcostlabel'> Gesamtkosten </text>
                        </div>
                        <div className='costContainer'>
                            <text className='totalcost'> {this.totalcost + '€'} </text>
                        </div>
                    </div>
                    <div className='verticalline'></div>
                    <div className='elementContainer'>
                        <div className='typeContainer'>
                            <text className='costlabel'> Wertverlust </text>
                            <text className='detail'> Berücksichtigt Fahrzeugalter und Kilometerstand </text>
                        </div>
                        <div className='costContainer'>
                            <text className='cost'> {this.depreciation + '€'} </text>
                        </div>
                    </div>
                    <div className='elementContainer'>
                        <div className='typeContainer'>
                            <text className='costlabel'> Treibstoff </text>
                            <text className='detail'> Berücksichtigt Fahrzeugverbrauch und Durchschnittspreis </text>
                        </div>
                        <div className='costContainer'>
                            <text className='cost'> {this.fuel + '€'} </text>
                        </div>
                    </div>
                    <div className='elementContainer'>
                        <div className='typeContainer'>
                            <text className='costlabel'> Versicherung </text>
                            <text className='detail'> Berücksichtigt monatlichen Preis </text>
                        </div>
                        <div className='costContainer'>
                            <text className='cost'> {this.insurance + '€'} </text>
                        </div>
                    </div>
                    <div className='elementContainer'>
                        <div className='typeContainer'>
                            <text className='costlabel'> {'Reparatur & Wartung'} </text>
                            <text className='detail'> Berücksichtigt Service-Historie </text>
                        </div>
                        <div className='costContainer'>
                            <text className='cost'> {this.maintenance + '€'} </text>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FinanceView;