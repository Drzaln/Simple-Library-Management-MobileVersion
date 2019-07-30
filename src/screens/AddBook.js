import React, { Component } from 'react'
import { View, StatusBar, ScrollView } from 'react-native'
import { Text, Card, TextInput, Button, IconButton } from 'react-native-paper'

export default class Register extends Component {
  state = {
    url_image: '',
    title: '',
    author: '',
    category: '',
    location: '',
    description: ''
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
            onPress={() => this.props.navigation.navigate('Home')}
            style={{ position: 'absolute' }}
          />
          <Card style={{ padding: 16, borderRadius: 8, marginTop: 40 }}>
            <Text
              text10
              style={{ fontSize: 20, fontWeight: 'normal', marginBottom: 8 }}
            >
              ADD BOOK
            </Text>
            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center'
                }}
              >
                <TextInput
                  keyboardType='url'
                  mode='outlined'
                  textContentType='URL'
                  label='Image Url'
                  value={this.state.url_image}
                  onChangeText={url_image => this.setState({ url_image })}
                  style={{ borderRadius: 8 }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingLeft: 16
                }}
              >
                <Button
                  icon='file-upload'
                  mode='outlined'
                  dark
                  color='black'
                  onPress={() => alert('diklik')}
                  style={{ borderColor: 'black' }}
                >
                  Upload Image
                </Button>
              </View>
            </View>
            <TextInput
              keyboardType='default'
              mode='outlined'
              textContentType='none'
              label='Title'
              value={this.state.title}
              onChangeText={title => this.setState({ title })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              mode='outlined'
              textContentType='username'
              label='Author'
              value={this.state.author}
              onChangeText={author => this.setState({ author })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              mode='outlined'
              textContentType='none'
              label='Category'
              value={this.state.category}
              onChangeText={category => this.setState({ category })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              mode='outlined'
              textContentType='none'
              label='Book Location'
              value={this.state.location}
              onChangeText={location => this.setState({ location })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              multiline
              mode='outlined'
              textContentType='none'
              label='Book Description'
              value={this.state.description}
              onChangeText={description => this.setState({ description })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <Button
              icon='add'
              mode='contained'
              dark
              color='black'
              onPress={() => alert('diklik')}
            >
              ADD BOOK
            </Button>
          </Card>
        </View>
      </ScrollView>
    )
  }
}
