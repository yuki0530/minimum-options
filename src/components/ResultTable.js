import React from 'react';

class ResultTable extends React.Component {

    render() {
        return (
            <>
                <p>店名：{this.props.api[0].results.shop[0].name}</p>
                <a href={this.props.api[0].results.shop[0].urls.pc} target="_blank">URL</a>
                <p>住所：{this.props.api[0].results.shop[0].access}</p>
                <p>個室：{this.props.api[0].results.shop[0].private_room}</p>
                <p>カード払い：{this.props.api[0].results.shop[0].card}</p>
                <p>ジャンル：{this.props.api[0].results.shop[0].genre.name}</p>
                <p>キャッチコピー：{this.props.api[0].results.shop[0].genre.catch}</p>
                <img src={this.props.api[0].results.shop[0].photo.mobile.s} alt="" />
            </>
        );
    }
}

export default ResultTable;