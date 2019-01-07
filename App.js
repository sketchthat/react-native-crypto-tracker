import React from 'react';
import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Container, Content, Root, View, Spinner } from 'native-base';
import TitleBar from './global/TitleBar';
import Coin from './charts/Coin';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    .then(() => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (<Spinner />);
    }

    return (
      <Root>
        <View style={styles.container}>
          <Container>
            <TitleBar title="Crypto Tracker" />
            <Content>
              <Coin
                baseAsset="btc"
                quoteAsset="usdt"
                interval="30m"
              />
              <Coin
                baseAsset="eth"
                quoteAsset="usdt"
                interval="30m"
              />
              <Coin
                baseAsset="xrp"
                quoteAsset="usdt"
                interval="30m"
              />
            </Content>
          </Container>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
