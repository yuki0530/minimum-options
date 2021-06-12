import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

class error extends Component {

    render() {
        return (
            <div>
                <Header />
                <p>エラー</p>
                <Link to={`/`}>TOPに戻る</Link>
            </div>
        );
    }
}

export default error;