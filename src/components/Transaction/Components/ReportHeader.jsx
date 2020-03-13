import React, { Component } from 'react'
import './ReportHeader.css'
import Button from '@material-ui/core/Button';
export default class ReportHeader extends Component {
    render() {
        return (
            <div className="report-master">
                <div className="flex-box">
                    <div className="flex">
                        <span className="label">Credit</span>
                    </div>
                    <div className="flex flex-end">
                        <span className="inbound-text">+₹ 50,000.00</span>
                    </div>
                </div>
                <div className="flex-box">
                    <div className="flex">
                        <span className="label">Debit</span>
                    </div>
                    <div className="flex flex-end">
                        <span className="outbound-text">+₹ 2,000.00</span>
                    </div>
                </div>
                <div className="flex-box">
                    <div className="flex"></div>
                    <div className="flex flex-end">
                        <span className="total-report-summary">+₹ 2,000.00</span>
                    </div>
                </div>
                <div className="view-report-button">
                    <Button color="primary">View Report For this Month</Button>
                </div>
            </div>
        )
    }
}
