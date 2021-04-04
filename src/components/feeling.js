import React, { Component } from 'react';
import Header from './header';

class genre extends Component {

    render() {
        return (
            <div>
                <Header />
                <p>
                    今の気分を選択してください
                </p>
                <p>{this.props.location.state.text}</p>
            </div>
        );
    }
}

export default genre;