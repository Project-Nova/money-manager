import React, { Component } from 'react'
import './PaperCard.css'
import TransactionItem from '../Transaction/TransactionItem'
import TransactionHeader from '../Transaction/TransactionHeader/TransactionHeader'
export default class PaperCard extends Component {
    render() {
        return (
            <div className="box shadow">
                <TransactionHeader />
                <TransactionItem />
                <TransactionHeader />
                <TransactionItem />
                <TransactionHeader />
                <TransactionItem />
                <TransactionHeader />
                <TransactionItem />
            </div>
        )
    }
}
