import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';

class results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apis:[]
        }
    }

    // componentDidMountでAPIを呼び出す？
    // handleClick(event) {
    //     fetch('https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&large_area=Z011&format=json', {
    //         mode: 'no-cors',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Success!:', data);
    //     })
    //     .catch((error) => {
    //         console.error('Error!:', error);
    //     });
    // }

    // ここでAPIを呼ぶ？
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        fetch('http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&count=3&format=json&keyword=横浜駅')
        .then(response => response.json())
        .then(data => {
            // console.log('Success!:', data);
            // console.log(data.results.shop);
            this.setState({
                apis: data.results.shop
            })
        })
        .catch((error) => {
            console.error('Error!:', error);
        });
    }

    render() {
        const apiItems = this.state.apis.map((api, index) => {
            return (
                <>
                    <p key={index}>{api.name}</p>
                    <p key={index}>{api.urls.pc}</p>
                    <p key={index}>{api.access}</p>
                    <p key={index}>{api.private_room}</p>
                    <p key={index}>{api.card}</p>
                    <p key={index}>{api.genre.name}</p>
                    <p key={index}>{api.genre.catch}</p>
                    {/* <img key={index} src={api.genre.photo.mobile.s} alt="" /> */}
                    <br />
                </>
            )
        })

        return(
            <>
                <Header />
                <div>{apiItems}</div>
            </>
        )
    }
}

// propsにstateの値を詰め込む（取得する）
const mapStateToProps = (state) => ({
    station: state.station.station,
    genre: state.genre.genre,
    seat: state.seat.seat,
    payment: state.payment.payment
})

export default connect(mapStateToProps)(results);