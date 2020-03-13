import React, { Component } from 'react'
import './Gmap.css'
import PropTypes from "prop-types";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import HistoryIcon from '@material-ui/icons/History';
import IconButton from '@material-ui/core/IconButton';
export default class Gmap extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };
    static defaultProperty = {
        suggestions: []
    };
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }

    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        ).slice(0, 10);

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;
        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <div class="suggestions">
                        <ul>
                            {filteredSuggestions.map((suggestion, index) => {
                                let className;

                                if (index === activeSuggestion) {
                                    className = "";
                                }

                                return (
                                    <div className="flex-box">
                                        <div className="history"><HistoryIcon fontSize="small" /></div>
                                        <div className="suggest" key={suggestion} onClick={onClick}>
                                            {suggestion}
                                        </div>
                                    </div>

                                );
                            })}
                        </ul>
                    </div>
                );
            } else {
                suggestionsListComponent = (
                    <div class="no-suggestions suggestions">
                        <span className="no-suggestions-text">No suggestions</span>
                    </div>
                );
            }
        }

        return (
            <React.Fragment>
                <div className="omnibox">
                    <div className="menu-button">
                        <IconButton color="primary">
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <input
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput} spellcheck="false" className="searchbox-shadow"
                    />
                    <div className="menu-button serach-box">
                        <IconButton color="primary"><SearchIcon /> </IconButton>
                    </div>
                    <div className="menu-button">
                        <IconButton color="primary"><CloseIcon /> </IconButton>
                    </div>
                </div>
                <div>
                    {suggestionsListComponent}
                </div>

            </React.Fragment>

        );
    }

}
