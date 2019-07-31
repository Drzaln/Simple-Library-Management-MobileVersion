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
  constructor () {
    super()
    this.state = {
      firstQuery: '',
      books: []
    }
  }

  componentDidMount = async () => {
    await this.props.dispatch(getBuku())
    this.setState({
      books: this.props.buku
    })
  }

  render () {
    const { firstQuery } = this.state
    console.log(`halooooo`, this.state.books.listBuku)
    const haiData = this.state.books.listBuku
    const { books } = this.state
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
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center'
            }}
          >
            <Text text10 style={{ fontSize: 40, fontWeight: 'bold' }}>
              BOOKS
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            {/* // Button  buat profile */}
            {/* <IconButton
              icon='account-circle'
              color={Colors.grey700}
              size={30}
              onPress={() => this.props.navigation.goBack()}
            /> */}
            <TouchableRipple
              onPress={() => this.props.navigation.navigate('Login')}
              rippleColor='rgba(0, 0, 0, .32)'
            >
              <Text text10 style={{ color: 'black', fontSize: 16 }}>
                Login
              </Text>
            </TouchableRipple>
          </View>
        </View>
        <View style={{ alignContent: 'center', alignItems: 'center' }}>
          <Searchbar
            placeholder='Search'
            onChangeText={query => {
              this.setState({ firstQuery: query })
            }}
            value={firstQuery}
            style={{ borderRadius: 32, width: '90%', height: 40 }}
          />
        </View>
        {haiData != null ? (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.books.listBuku}
            keyExtractor={item => item.id_buku.toString()}
            renderItem={({ item }) => (
              <Card style={{ margin: 8, borderRadius: 8 }} elevation={4}>
                <TouchableRipple
                  onPress={() =>
                    this.props.navigation.navigate('DetailBook', {
                      id_buku: item.id_buku
                    })
                  }
                  rippleColor='rgba(0, 0, 0, .32)'
                  borderless
                >
                  <Image
                    style={{
                      width: 150,
                      height: 200,
                      borderRadius: 8
                    }}
                    source={{ uri: item.gmb_buku }}
                  />
                </TouchableRipple>
              </Card>
            )}
            style={{
              marginTop: 16,
              width: '100%'
            }}
            numColumns={2}
          />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <Text
              style={{ marginTop: '50%', fontSize: 40, fontWeight: 'bold' }}
            >
              Can't Get Data!
            </Text>
          </View>
        )}
        <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: 'black'
          }}
          icon='add'
          onPress={() => this.props.navigation.navigate('AddBook')}
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
