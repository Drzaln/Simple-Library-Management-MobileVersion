import React, { Component } from 'react'
import { getBuku } from '../public/redux/actions/buku'
import { connect } from 'react-redux'
import { View, StatusBar, FlatList, Image } from 'react-native'
import {
  Searchbar,
  TouchableRipple,
  Text,
  IconButton,
  Colors,
  FAB,
  Card
} from 'react-native-paper'

class Home extends Component {
  state = {
    firstQuery: '',
    books: []
  }

  componentDidMount = async () => {
    await this.props.dispatch(getBuku())
    this.setState({
      books: this.props.buku
    })
  }

  render () {
    const { firstQuery } = this.state
    // const { books } = this.state
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 16,
          paddingVertical: 8
        }}
      >
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text
              text10
              style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20 }}
            >
              BOOKS
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <IconButton
              icon='account-circle'
              color={Colors.grey700}
              size={30}
              onPress={() => console.warn('Pressed')}
            />
          </View>
        </View>

        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Searchbar
            placeholder='Search'
            onChangeText={query => {
              this.setState({ firstQuery: query })
            }}
            value={firstQuery}
            style={{ borderRadius: 32, width: '90%' }}
          />
        </View>
        <View
          style={{
            alignContent: 'center',
            alignSelf: 'center'
          }}
        >
          <FlatList
            // data={this.state.books}
            data={[
              {
                key:
                  'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fdamonza.com%2Fwp-content%2Fuploads%2Fportfolio%2Ffiction%2FWorld-Whisperer.jpg&f=1'
              },
              {
                key:
                  'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fermiliablog.files.wordpress.com%2F2012%2F09%2Fsunsetkisses-copy.jpg&f=1'
              }
            ]}
            renderItem={({ item }) => (
              <TouchableRipple
                onPress={() => alert('diklik')}
                rippleColor='rgba(0, 0, 0, .32)'
              >
                <Card style={{ margin: 8, borderRadius: 8 }} elevation={4}>
                  <Image
                    style={{
                      width: 150,
                      height: 200,
                      borderRadius: 8
                    }}
                    source={{ uri: item.key }}
                  />
                </Card>
              </TouchableRipple>
            )}
            style={{
              marginTop: 16,
              width: '100%'
            }}
            numColumns={2}
          />
        </View>
        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: 'black'
          }}
          icon='add'
          onPress={() => console.log('Pressed')}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    buku: state.buku
  }
}

export default connect(mapStateToProps)(Home)
