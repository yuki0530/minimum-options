import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import Header from './header';

class station extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text2: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            text2: e.target.value
        })
    }

    handleClick() {
        this.props.history.push({
            pathname: "/genre",
            state: { text2: this.state.text2 }
        })
    }

    render() {
        return (
            <div>
                <Header />
                <p>駅名を入力してください</p>
                <input type='text' value={this.state.text2} onChange={this.handleChange}></input>
                <p>{this.state.text2}</p>
                <button onClick={this.handleClick}>次へ</button>
            </div>
        );
    }
}

export default withRouter(station)