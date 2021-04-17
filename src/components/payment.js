import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../action';

class payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment: 'other',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            payment: e.target.value
        })
    }

    handleClick() {
        this.props.onClick(this.state.payment);
        this.props.history.push("/results");
    }

    render() {
        return (
            <div>
                <Header />
                <p>
                    決済方法を選択してください
                </p>
                <label>
                    現金以外
                    <input type="radio" value="other" onChange={this.handleChange} checked={this.state.payment=="other"} />
                </label>
                <label>
                    現金
                    <input type="radio" value="cash" onChange={this.handleChange} checked={this.state.payment=="cash"} />
                </label>
                <p>{this.state.payment}</p>
                <button onClick={this.handleClick}>画面遷移します</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    payment: state.payment.payment,
});

function mapDispatchToProps(dispatch) {
    return {
        onClick(payment) {
            dispatch(actions.sendPayment(payment));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(payment));