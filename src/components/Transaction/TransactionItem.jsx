import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import './TransactionItem.css'




export default class TransactionItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            summary: []
        }
    }
    render() {
        return (
            <List>
                < ListItem key={this.props.index} className="list-item" >
                    <ListItemAvatar>
                        <Avatar src={this.props.transactions.logo}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={this.props.transactions.category} secondary={this.props.transactions.notes} />
                    <ListItemSecondaryAction>
                        <ListItemText primary={this.props.transactions.amountInCurrency} />
                    </ListItemSecondaryAction>
                </ListItem >
            </List >
        );
    }

}
