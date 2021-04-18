import axios from 'axios';
import React, { Component } from 'react';
import Header from './header';

class results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    // componentDidMount() {
    //     return fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&large_area=Z011&format=json')
    //         .then((response) => response.json())
    //         .then((responseJson) => {
    //             this.setState({
    //                 loading: true,
    //                 data: responseJson,
    //             });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    handleClick(event) {
        const url = 'https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&large_area=Z011&format=json';
        axios.get(url)
            .then((res) => { console.log(res); })
            .catch(console.error);
    }

    render() {
        return(
            <div>
                <Header />
                <p>
                    検索結果画面
                </p>
                <button onClick={this.handleClick}>Get Data</button>
            </div>
        )
    }
}

export default results;