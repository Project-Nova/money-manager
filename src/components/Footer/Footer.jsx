import React, { Component } from 'react'
import './Footer.css'
import Botttom from './Bottom/Bottom';
import IconButtons from '../Icon-button/Add/Add';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <Botttom />
                </div>
            </div>
        )
    }
}
