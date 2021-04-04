import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import Header from './header';

class genre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    handleClick() {
        this.props.history.push({
            pathname: "/feeling",
            state: { text: this.state.text }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <p>{this.props.location.state.text2}</p>
                <p>
                    料理のジャンルを選択してください
                </p>
                <input type='text' value={this.state.text} onChange={this.handleChange}></input>
                <p>{this.state.text}</p>
                <button onClick={this.handleClick}>画面遷移します</button>
            </div>
        );
    }
}

export default withRouter(genre);