import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Left, Right, Body, Text, Thumbnail, Spinner, View } from 'native-base';
import { LineChart } from 'react-native-svg-charts';

class Coin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trades: [],
      loading: true,
      percent: null,
      price: null,
    };
  }

  componentWillMount() {
    this.fetchKline();
  }

  fetchKline() {
    fetch('https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=30m&limit=50', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(resp => {
      const trades = resp.map(interval => parseFloat(interval[1]));

      const firstTrade = trades[0];
      const lastTrade = trades.slice(-1)[0];
      const percent = (((lastTrade - firstTrade) / firstTrade) * 100).toFixed(2);

      this.setState({
        loading: false,
        trades: trades,
        percent: percent,
        price: lastTrade,
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const { loading, trades, percent, price } = this.state;

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://raw.githubusercontent.com/atomiclabs/cryptocurrency-icons/master/128/color/btc.png'}} />
            <Body>
              <Text>BTC/USDT</Text>
              <Text note>30m</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          {
            loading &&
            <Spinner />
          }
          {
            !loading &&
            <View style={styles.view}>
              <LineChart
                style={styles.chart}
                data={trades}
                svg={{ stroke: styles.chart.color }}
              />
            </View>
          }
        </CardItem>
        { !loading &&
          <CardItem footer>
            <Left>
              <Text>{percent}%</Text>
            </Left>
            <Body />
            <Right>
              <Text>${price.toLocaleString('en-us')}</Text>
            </Right>
          </CardItem>
        }
      </Card>
    );
  }
}

export default Coin;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 75,
  },
  chart: {
    height: 75,
    color: '#FF0000',
  },
});
