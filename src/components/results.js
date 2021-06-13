import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';
import ResultTable from './ResultTable';

class results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            api:[
                {
                    "results": {
                        "api_version": "1.26",
                        "results_available": 2,
                        "results_returned": "1",
                        "results_start": 1,
                        "shop": [
                            {
                                "access": "JR横浜駅西口徒歩3分(東海道線、京浜東北線、相鉄線、横浜地下鉄ブルーライン)",
                                "address": "神奈川県横浜市西区南幸２－１６－１１横浜二幸ビル３Ｆ",
                                "band": "不可",
                                "barrier_free": "あり ：車イスでトイレ利用可",
                                "budget": {
                                    "average": "ランチ1000円/ディナー3500円",
                                    "code": "B003",
                                    "name": "3001～4000円"
                                },
                                "budget_memo": "",
                                "capacity": 90,
                                "card": "利用可",
                                "catch": "厳選黒毛和牛売り切れ御免 焼肉定食ランチも大充実！",
                                "charter": "貸切可 ：最大100名までOK!事前にお問い合わせください。",
                                "child": "お子様連れ歓迎",
                                "close": "無休",
                                "coupon_urls": {
                                    "pc": "https://www.hotpepper.jp/strJ001262823/map/?vos=nhppalsa000016",
                                    "sp": "https://www.hotpepper.jp/strJ001262823/scoupon/?vos=nhppalsa000016"
                                },
                                "course": "あり",
                                "english": "なし",
                                "free_drink": "あり",
                                "free_food": "あり",
                                "genre": {
                                    "catch": "横浜駅に焼肉革命！黒毛和牛550円",
                                    "code": "G008",
                                    "name": "焼肉・ホルモン"
                                },
                                "horigotatsu": "なし",
                                "id": "J001262823",
                                "karaoke": "なし",
                                "ktai_coupon": 0,
                                "large_area": {
                                    "code": "Z012",
                                    "name": "神奈川"
                                },
                                "large_service_area": {
                                    "code": "SS10",
                                    "name": "関東"
                                },
                                "lat": 35.4640940425,
                                "lng": 139.6170197829,
                                "logo_image": "https://imgfp.hotp.jp/IMGH/41/42/P037194142/P037194142_69.jpg",
                                "lunch": "あり",
                                "middle_area": {
                                    "code": "Y135",
                                    "name": "横浜"
                                },
                                "midnight": "営業していない",
                                "mobile_access": "横浜駅西口3分(横浜高島屋裏側､ﾀﾞｲｴｰの左ﾖｺ)",
                                "name": "焼肉 カルビランド 横浜西口店",
                                "name_kana": "やきにくかるびらんどよこはまにしぐちてん",
                                "non_smoking": "全面禁煙",
                                "open": "月～日、祝日、祝前日: 11:00～20:00 （料理L.O. 19:00 ドリンクL.O. 19:00）",
                                "other_memo": "",
                                "parking": "なし ：近くにコインパーキングあり",
                                "party_capacity": 90,
                                "pet": "不可",
                                "photo": {
                                    "mobile": {
                                        "l": "https://imgfp.hotp.jp/IMGH/52/65/P037675265/P037675265_168.jpg",
                                        "s": "https://imgfp.hotp.jp/IMGH/52/65/P037675265/P037675265_100.jpg"
                                    },
                                    "pc": {
                                        "l": "https://imgfp.hotp.jp/IMGH/52/65/P037675265/P037675265_238.jpg",
                                        "m": "https://imgfp.hotp.jp/IMGH/52/65/P037675265/P037675265_168.jpg",
                                        "s": "https://imgfp.hotp.jp/IMGH/52/65/P037675265/P037675265_58_s.jpg"
                                    }
                                },
                                "private_room": "あり",
                                "service_area": {
                                    "code": "SA12",
                                    "name": "神奈川"
                                },
                                "shop_detail_memo": "",
                                "show": "なし",
                                "small_area": {
                                    "code": "X270",
                                    "name": "横浜駅"
                                },
                                "station_name": "横浜",
                                "sub_genre": {
                                    "code": "G001",
                                    "name": "居酒屋"
                                },
                                "tatami": "なし",
                                "tv": "あり",
                                "urls": {
                                    "pc": "https://www.hotpepper.jp/strJ001262823/?vos=nhppalsa000016"
                                },
                                "wedding": "各種プランご用意致しますのでお気軽にお問い合わせください。",
                                "wifi": "あり"
                            }
                        ]
                    }
                }
            ]
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
    // this.props.stationなどをURLに組み込む？
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
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
            <>
                <Header />
                <ResultTable api={this.state.api} />
                <p>駅名：{this.props.station}</p>
                <p>ジャンル：{this.props.genre}</p>
                <p>席：{this.props.seat}</p>
                <p>支払い：{this.props.payment}</p>
                {/* urlはこんな感じ？ */}
                <a href={"http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&count=1&format=json&keyword="+this.props.station} target="_blank">test</a>
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

// 駅名変換どうする？UTF-8に変換する？
// const uri = 'http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=c9f39a96973f5b38&count=1&format=json&keyword=横浜駅&private_room=1&card=1&genre=G008';
// const encoded = encodeURI(uri);
// console.log(uri);
// console.log(encoded);

export default connect(mapStateToProps)(results);