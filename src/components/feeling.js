import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch, withRouter } from 'react-router-dom';
import Header from './header';
import { connect } from 'react-redux';
import * as actions from '../action';

class feeling extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feeling: 'luxury',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(e) {
        this.setState({
            feeling: e.target.value
        })
    }

    handleClick() {
        this.props.onClick(this.state.feeling);
        this.props.history.push("/seat");
    }

    render() {
        return (
            <div>
                <Header />
                <p>
                    今の気分選択してください
                </p>
                <label>
                    高級店
                    <input type="radio" value="luxury" onChange={this.handleChange} checked={this.state.feeling=="luxury"} />
                </label>
                <label>
                    大衆店
                    <input type="radio" value="popular" onChange={this.handleChange} checked={this.state.feeling=="popular"} />
                </label>
                <p>{this.state.feeling}</p>
                <button onClick={this.handleClick}>画面遷移します</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    feeling: state.feeling.feeling,
});

function mapDispatchToProps(dispatch) {
    return {
        onClick(feeling) {
            dispatch(actions.sendFeeling(feeling));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(feeling));