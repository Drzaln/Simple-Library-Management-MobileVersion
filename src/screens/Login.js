import React, { Component } from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import {
  Text,
  Card,
  TextInput,
  Button,
  TouchableRipple
} from 'react-native-paper'

export default class Login extends Component {
  state = {
    text: '',
    password: ''
  }

  render () {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 16,
            paddingVertical: 8
          }}
        >
          <StatusBar backgroundColor='white' barStyle='dark-content' />
          <View style={{ alignItems: 'center' }}>
            <Text
              text10
              style={{ fontSize: 64, fontWeight: 'bold', margin: 64 }}
            >
              BOOKS
            </Text>
          </View>
          <Card style={{ padding: 16, borderRadius: 8 }}>
            <Text
              text10
              style={{ fontSize: 20, fontWeight: 'normal', marginBottom: 8 }}
            >
              LOGIN
            </Text>
            <TextInput
              mode='outlined'
              textContentType='emailAddress'
              label='Email'
              value={this.state.text}
              onChangeText={text => this.setState({ text })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              secureTextEntry
              mode='outlined'
              textContentType='password'
              label='Password'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <Button
              icon='keyboard-arrow-right'
              mode='contained'
              dark
              color='black'
              onPress={() => this.props.navigation.navigate('Home')}
            >
              Login
            </Button>
          </Card>
          <View style={{ alignItems: 'flex-end', marginVertical: 8 }}>
            <TouchableRipple
              onPress={() => this.props.navigation.navigate('Register')}
              rippleColor='rgba(0, 0, 0, .32)'
            >
              <Text style={{ color: 'black' }}>New Member? Register Here!</Text>
            </TouchableRipple>
          </View>
        </View>
      </ScrollView>
    )
  }
}
