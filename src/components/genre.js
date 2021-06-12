import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../action';

class genre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: 'G004',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            genre: e.target.value
        })
    }

    handleClick() {
        this.props.onClick(this.state.genre);
        this.props.history.push("/seat");
    }

    render() {
        return (
            <div>
                <Header />
                <p>
                    料理のジャンルを選択してください
                </p>
                <label>
                    和食
                    <input type="radio" value="G004" onChange={this.handleChange} checked={this.state.genre=='G004'} />
                </label>
                <label>
                    洋食
                    <input type="radio" value="G005" onChange={this.handleChange} checked={this.state.genre=='G005'} />
                </label>
                <label>
                    中華
                    <input type="radio" value="G007" onChange={this.handleChange} checked={this.state.genre=='G007'} />
                </label>
                <label>
                    焼肉
                    <input type="radio" value="G008" onChange={this.handleChange} checked={this.state.genre=='G008'} />
                </label>
                <button onClick={this.handleClick}>画面遷移します</button>
            </div>
        );
    }
}

// propsにstateの値を詰め込む（取得する）
const mapStateToProps = (state) => ({
    genre: state.genre.genre,
});

// actionをdispatchする（更新する）
function mapDispatchToProps(dispatch) {
    return {
        onClick(genre) {
            dispatch(actions.sendGenre(genre));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(genre));