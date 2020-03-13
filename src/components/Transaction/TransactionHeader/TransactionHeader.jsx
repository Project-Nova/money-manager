import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import './TransactionHeader.css'
import TransactionItem from '../TransactionItem';


export default class TransactionHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            summary: []
        }
    }

    renderItems = (transactions) => {
        return (transactions.map((item, index) =>
            <TransactionItem transactions={item} index={index} />
        ))
    }

    render() {
        return (
            <div className="card-transction-day">
                <List class="list">
                    <ListItem>
                        <ListItemAvatar>
                            <span className="day">{this.props.data.date}</span>
                        </ListItemAvatar>
                        <ListItemText primary={this.props.data.day} secondary={this.props.data.monthYear} />
                        <ListItemSecondaryAction>
                            <ListItemText primary={this.props.data.totalInCurrency} />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List >
                {this.renderItems(this.props.data.transfers)}
            </div>
        );
    }

}
