import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postBuku } from '../public/redux/actions/buku'
import { View, StatusBar, ScrollView } from 'react-native'
import { Text, Card, TextInput, Button, IconButton } from 'react-native-paper'

class AddBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      buku: [],
      gmb_buku: '',
      nama_buku: '',
      penulis_buku: '',
      id_kategori: '',
      lokasi_buku: '',
      ringkasan: ''
    }
  }

  // state = {
  //   gmb_buku: '',
  //   nama_buku: '',
  //   penulis_buku: '',
  //   id_kategori: '',
  //   lokasi_buku: '',
  //   ringkasan: ''
  // }

  render () {
    let add = async () => {
      await this.props.dispatch(postBuku(this.state.buku[0]))
    }

    console.log(`uedaaaaann`, this.state.buku[0])

    const bookAdd = () => {
      this.state.buku.push({
        nama_buku: this.state.nama_buku,
        penulis_buku: this.state.penulis_buku,
        ringkasan: this.state.ringkasan,
        lokasi_buku: this.state.lokasi_buku,
        gmb_buku: this.state.gmb_buku,
        id_kategori: this.state.id_kategori
      })
      add()
      console.log(`cihuuuyyy`, this.state.buku)
    }

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
                  value={this.state.gmb_buku}
                  onChangeText={gmb_buku => this.setState({ gmb_buku })}
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
              label='Book Name'
              value={this.state.nama_buku}
              onChangeText={nama_buku => this.setState({ nama_buku })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              mode='outlined'
              textContentType='username'
              label='Author'
              value={this.state.penulis_buku}
              onChangeText={penulis_buku => this.setState({ penulis_buku })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              keyboardType='numeric'
              mode='outlined'
              textContentType='none'
              label='Category ID'
              value={this.state.id_kategori}
              onChangeText={id_kategori => this.setState({ id_kategori })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              mode='outlined'
              textContentType='none'
              label='Book Location'
              value={this.state.lokasi_buku}
              onChangeText={lokasi_buku => this.setState({ lokasi_buku })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <TextInput
              multiline
              mode='outlined'
              textContentType='none'
              label='Description'
              value={this.state.ringkasan}
              onChangeText={ringkasan => this.setState({ ringkasan })}
              style={{ borderRadius: 8, marginBottom: 8 }}
            />
            <Button
              icon='add'
              mode='contained'
              dark
              color='black'
              onPress={bookAdd.bind(this)}
            >
              ADD BOOK
            </Button>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    buku: state.buku
  }
}

export default connect(mapStateToProps)(AddBook)
