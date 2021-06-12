import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../action';

class payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment: '1',
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
                    カードOK
                    <input type="radio" value="1" onChange={this.handleChange} checked={this.state.payment=='1'} />
                </label>
                <label>
                    カードNG
                    <input type="radio" value="0" onChange={this.handleChange} checked={this.state.payment=='0'} />
                </label>
                <button onClick={this.handleClick}>画面遷移します</button>
            </div>
        );
    }
}

// propsにstateの値を詰め込む（取得する）
const mapStateToProps = (state) => ({
    payment: state.payment.payment,
});

// actionをdispatchする（更新する）
function mapDispatchToProps(dispatch) {
    return {
        onClick(payment) {
            dispatch(actions.sendPayment(payment));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(payment));