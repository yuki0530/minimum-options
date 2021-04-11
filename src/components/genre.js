import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../action';

class genre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: 'japanese',
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
        this.props.history.push("/feeling");
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
                    <input type="radio" value="japanese" onChange={this.handleChange} checked={this.state.genre=="japanese"} />
                </label>
                <label>
                    洋食
                    <input type="radio" value="western" onChange={this.handleChange} checked={this.state.genre=="western"} />
                </label>
                <p>{this.state.genre}</p>
                <button onClick={this.handleClick}>画面遷移します</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    genre: state.genre.genre,
});

function mapDispatchToProps(dispatch) {
    return {
        onClick(genre) {
            dispatch(actions.sendGenre(genre));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(genre));