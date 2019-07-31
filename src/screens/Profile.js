import React, { Component } from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import { Text, Card, TextInput, Button, IconButton, TouchableRipple } from 'react-native-paper'

export default class Profile extends Component {
  render () {
    return (
      <View>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        <IconButton
          icon='navigate-before'
          color='black'
          size={30}
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 16,
            paddingVertical: 8
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 16 }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text text10 style={{ fontSize: 16, color:'black' }}>
                BOOKS
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
                <Text text10 style={{ color: 'black', fontSize: 16 }}>
                  Login
                </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems:'center'}} >
          <Text>
              halo
          </Text>
          </View>
          
        </View>
      </View>
    )
  }
}
