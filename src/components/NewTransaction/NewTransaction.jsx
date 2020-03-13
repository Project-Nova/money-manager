import React, { Component } from 'react'
import './NewTransaction.css'
import MaterialUIPickers from '../Transaction/Components/DatePicker'
import TextFields from '../Transaction/Components/TextBox'
import Button from '@material-ui/core/Button';
import { createTransactions } from '../../Services/SummaryAPI';

export default class NewTrans extends Component {

    constructor(props) {
        super(props)
        this.state = {
            wallet: 'AXIS',
            category: 'GAS',
            price: 0,
            date: new Date(),
            notes: '',
        }
        this.handleWalletChange = this.handleWalletChange.bind(this);
    }

    handleWalletChange = (obj) => {
        switch (obj.key) {
            case "Wallet":
                this.setState({ wallet: obj.value })
                break;
            case "Category":
                this.setState({ category: obj.value })
                break;
            case "Price":
                this.setState({ price: obj.value })
                break;
            case "Date":
                this.setState({ date: obj.value })
                break;
            case "Notes":
                this.setState({ notes: obj.value })
                break;
        }

    }

    submit = () => {
        createTransactions(this.state).then(data => {
            console.log(data)
        })
    }

    render() {
        return (
            <div className="create-transaction-box shadow">
                <div className="add-transaction-div">
                    <span className="add-transaction-text">Add transaction</span>
                </div>
                <div className="add-new-components-div">
                    <div className="input-control text-min-wid"><TextFields label="Wallet" value={this.state.wallet} controlFunc={this.handleWalletChange} /></div>
                    <div className="input-control"><TextFields label="Category" value={this.state.category} controlFunc={this.handleWalletChange} /></div>
                    <div className="input-control"><TextFields label="Price" value={this.state.price} controlFunc={this.handleWalletChange} /></div>
                </div>
                <div className="add-new-components-div">
                    <div className="input-control text-min-wid"><MaterialUIPickers label="Date" controlFunc={this.handleWalletChange} date={this.state.date} /></div>
                    <div className="input-control"><TextFields className="Date-text" label="Notes" value={this.state.notes} controlFunc={this.handleWalletChange} /></div>
                </div>
                <div className="add-new-components-div float-right">
                    <Button color="primary" onClick={this.submit}>Save</Button>
                    <Button color="secondary">Cancel</Button>
                </div>
            </div>
        )
    }
}
