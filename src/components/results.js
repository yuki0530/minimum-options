import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';

class results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apis:[]
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.history.push("/");
    }

    // API呼び出し
    componentDidMount() {
        fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&count=3&format=json&keyword=${this.props.station}&private_room=${this.props.seat}&card=${this.props.payment}&genre=${this.props.genre}`)
        .then(response => response.json())
        .then(data => {
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
                <div key={index} className={'results-item'}>
                    <a href={api.urls.pc} target="blank">
                        <p className={'results-item__text'}>{api.name}</p>
                        <p className={'results-item__text'}>アクセス：{api.access}</p>
                        <p className={'results-item__text'}>個室{api.private_room}</p>
                        <p className={'results-item__text'}>クレジットカード：{api.card}</p>
                        <p className={'results-item__text'}>ジャンル：{api.genre.name}</p>
                    </a>
                </div>
            )
        })

        return(
            <>
                <Header />
                <div className={'results'}>
                    <div className={'results-items'}>
                        {this.state.apis[0] ? apiItems : <p>申し訳ありません、検索結果はありません</p>}
                    </div>
                    <button className={'results-button'} onClick={this.handleClick}>やり直す</button>
                </div>
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