// import axios from 'axios';
import React, { Component } from 'react';
import Header from './header';

class results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    // componentDidMount() {
    //     axios.get(`https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&large_area=Z011&format=json`)
    //         .then(res => {
    //             const results = res.data;
    //             this.setState({ results });
    //         })
    // }

    handleClick(event) {
        fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&large_area=Z011&format=json', {
            mode: 'cors',
            headers: {
                // 'Content-Type': 'application/json',
                // 'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }

    render() {
        return(
            <div>
                <Header />
                <p>
                    検索結果画面
                </p>
                <button onClick={this.handleClick}>APIのテスト</button>
            </div>
        )
    }
}

export default results;