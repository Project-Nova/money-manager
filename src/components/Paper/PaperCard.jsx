import React, { Component } from 'react'
import './PaperCard.css'
import TransactionItem from '../Transaction/TransactionItem'
import TransactionHeader from '../Transaction/TransactionHeader/TransactionHeader'
import IconButtons from '../Icon-button/Add/Add'
import CenteredTabs from '../Transaction/Components/Tabs'
import ReportHeader from '../Transaction/Components/ReportHeader'
import OutlinedChips from '../Transaction/Components/Chips'
import TitleBox from '../Transaction/TitleBox/TitleBox'
import { getTransactions } from '../../Services/SummaryAPI'

export default class PaperCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            trans: []
        }
    }

    componentDidMount() {
        getTransactions().then((contents => this.setState({ trans: contents.data }))).catch(err => console.log(err))
    }

    renderHeader = () => {
        return (this.state.trans.map((item, index) =>
            <TransactionHeader data={item} />
        ))
    }

    render() {
        return (
            <div>
                <div className="box shadow">
                    <TitleBox />
                    <CenteredTabs />
                    <ReportHeader />
                    {this.renderHeader()}
                    {/* <IconButtons /> */}
                </div>
            </div>
        )
    }
}
