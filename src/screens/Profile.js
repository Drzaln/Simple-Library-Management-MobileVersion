import React, { Component } from 'react'
import { View, StatusBar, Image, ScrollView, AsyncStorage } from 'react-native'
import {
  Text,
  Card,
  IconButton,
  Headline,
  Caption,
  TouchableRipple
} from 'react-native-paper'

export default class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      books: [],
      data: [],
      refreshing: false,
      token: '',
      id_user: '',
      nama_user: '',
      status: '',
      email: ''
    }
    this.arrayholder = []

    AsyncStorage.getItem('token', (err, result) => {
      if (result) {
        this.setState({
          token: result
        })
      }
    })
    AsyncStorage.getItem('id_user', (err, result) => {
      if (result) {
        this.setState({
          id_user: result
        })
      }
    })
    AsyncStorage.getItem('nama_user', (err, result) => {
      if (result) {
        this.setState({
          nama_user: result
        })
      }
    })
    AsyncStorage.getItem('status', (err, result) => {
      if (result) {
        this.setState({
          status: result
        })
      }
    })
    AsyncStorage.getItem('email', (err, result) => {
      if (result) {
        this.setState({
          email: result
        })
      }
    })
  }

  logout = () => {
    AsyncStorage.clear().then(() => {
      this.props.navigation.navigate('Home')
    })
  }

  render () {
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
        <View style={{ flexDirection: 'row', position: 'absolute' }}>
          <View>
            <IconButton
              icon='navigate-before'
              color='black'
              size={30}
              onPress={() => this.props.navigation.navigate('Home')}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
          >
            <TouchableRipple
              onPress={() => this.logout()}
              rippleColor='rgba(0, 0, 0, .32)'
            >
              <Text text10 style={{ color: 'black', fontSize: 16 }}>
                Logout
              </Text>
            </TouchableRipple>
          </View>
        </View>

        <View style={{ flexDirection: 'row', top: '12%' }}>
          <View style={{ marginRight: 8 }}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderRadius: 16
              }}
              source={{
                uri:
                  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Feskipaper.com%2Fimages%2Fpikachu-pokemon-cute-face-creative-cartoon-1.jpg&f=1'
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Headline>{this.state.nama_user}</Headline>
            <Caption>{this.state.email}</Caption>
            <Caption>{this.state.id_user}</Caption>
          </View>
        </View>
        <Card
          style={{ marginTop: 64, padding: 16, borderRadius: 8, height: '90%' }}
        >
          <Text
            text10
            style={{ fontSize: 20, fontWeight: 'normal', marginBottom: 16 }}
          >
            HISTORY
          </Text>
          <ScrollView>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginRight: 8 }}>
                <Image
                  style={{
                    width: 70,
                    height: 100,
                    borderRadius: 8
                  }}
                  source={{
                    uri:
                      'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Feskipaper.com%2Fimages%2Fpikachu-pokemon-cute-face-creative-cartoon-1.jpg&f=1'
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Headline>Doddy Rizal Novianto</Headline>
                <Caption>rizaaru@gmail.com</Caption>
                <Caption>4611417023</Caption>
              </View>
            </View>
          </ScrollView>
        </Card>
      </View>
    )
  }
}
