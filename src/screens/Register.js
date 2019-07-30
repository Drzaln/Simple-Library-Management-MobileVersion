import React, { Component } from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import { Text, Card, TextInput, Button, IconButton } from 'react-native-paper'

export default class Register extends Component {
  state = {
    id_user: '',
    email: '',
    username: '',
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
          <IconButton
                icon='navigate-before'
                color='black'
                size={30}
                onPress={() => this.props.navigation.goBack()}
                style={{position:'absolute'}}
              />
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
              REGISTER
            </Text>
            <TextInput
              mode='outlined'
              textContentType='creditCardNumber'
              label='Id'
              value={this.state.id_user}
              onChangeText={id_user => this.setState({ id_user })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              mode='outlined'
              textContentType='emailAddress'
              label='Email'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              mode='outlined'
              textContentType='username'
              label='Username'
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
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
              icon='add'
              mode='contained'
              dark
              color='black'
              onPress={() => alert('diklik')}
            >
              Register
            </Button>
          </Card>
        </View>
      </ScrollView>
    )
  }
}
