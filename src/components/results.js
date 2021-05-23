import React, { Component } from 'react';
import Header from './header';

class results extends Component {

    constructor(props) {
        super(props);
    }

    handleClick(event) {
        fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&large_area=Z011&format=json', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success!:', data);
        })
        .catch((error) => {
            console.error('Error!:', error);
        });
    }

    render() {
        return(
            <div>
                <Header />
                <p>
                    検索結果画面
                </p>
                <button onClick={this.handleClick}>ホットペッパー!!!</button>
            </div>
        )
    }
}

export default results;