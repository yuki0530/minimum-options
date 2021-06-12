import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../action';

class station extends Component {

    constructor(props) {
        super(props);
        this.state = {
            station: '東京駅',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            station: e.target.value
        })
    }

    handleClick() {
        this.props.onClick(this.state.station);
        this.props.history.push("/genre");
    }

    render() {
        return (
            <div>
                <Header />
                <p>駅名を入力してください</p>
                <input type='text' value={this.state.station} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>次へ</button>
            </div>
        );
    }
}

// propsにstateの値を詰め込む（取得する）
const mapStateToProps = (state) => ({
    station: state.station.station,
});

// actionをdispatchする（更新する）
function mapDispatchToProps(dispatch) {
    return {
        onClick(station) {
            dispatch(actions.sendStation(station));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(station));