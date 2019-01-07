import React, { Component } from 'react';
import { Card, CardItem, Left, Right, Body, Text, Thumbnail } from 'native-base';

class Coin extends Component {
  render() {
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
          <Text>Chart...</Text>
        </CardItem>
        <CardItem footer>
          <Left>
            <Text>5%</Text>
          </Left>
          <Body />
          <Right>
            <Text>$3,500.00</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default Coin;
