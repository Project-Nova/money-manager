import React, { Component } from 'react'
import './PaperCard.css'
import TransactionItem from '../Transaction/TransactionItem'
import TransactionHeader from '../Transaction/TransactionHeader/TransactionHeader'
import MaterialUIPickers from '../Transaction/Components/DatePicker'
export default class PaperCard extends Component {
    render() {
        return (
            <div className="box shadow">
                {/* <TransactionHeader />
                <TransactionItem /> */}
                <MaterialUIPickers />
            </div>
        )
    }
}
