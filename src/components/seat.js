import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../action';

class seat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seat: '1',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            seat: e.target.value
        })
    }

    handleClick() {
        this.props.onClick(this.state.seat);
        this.props.history.push("/payment");
    }

    render() {
        return (
            <div>
                <Header />
                <p>
                    座席を選択してください
                </p>
                <label>
                    個室あり
                    <input type="radio" value="1" onChange={this.handleChange} checked={this.state.seat=='1'} />
                </label>
                <label>
                    個室なし
                    <input type="radio" value="0" onChange={this.handleChange} checked={this.state.seat=='0'} />
                </label>
                <button onClick={this.handleClick}>画面遷移します</button>
            </div>
        );
    }
}

// propsにstateの値を詰め込む（取得する）
const mapStateToProps = (state) => ({
    seat: state.seat.seat,
});

// actionをdispatchする（更新する）
function mapDispatchToProps(dispatch) {
    return {
        onClick(seat) {
            dispatch(actions.sendSeat(seat));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(seat));