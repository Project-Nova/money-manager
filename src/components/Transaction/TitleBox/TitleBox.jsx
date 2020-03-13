import React, { Component } from 'react'
import './TitleBox.css'
export default class TitleBox extends Component {
    render() {
        return (
            <div>
                <div className="-transaction-title-box">
                    <div className="-transaction-titlebox-text">
                        <span>Monthly Tranactions</span>
                    </div>
                    <div className="-transaction-titlebox-sub-text">
                        <span>37 Transactions made in this month</span>
                    </div>
                </div>
            </div>
        )
    }
}
