import React, { Component } from 'react'
import { View, StatusBar, ScrollView, Image } from 'react-native'
import { Text, IconButton, Colors, Card, FAB } from 'react-native-paper'
import { colorsFromUrl } from 'react-native-dominant-color'
import { connect } from 'react-redux'
import { getBukuId } from '../public/redux/actions/buku'

class DetailBook extends Component {
  constructor () {
    super()
    this.state = {
      color: '#ffffff',
      books: []
    }
  }

  componentDidMount = async () => {
    await this.props.dispatch(
      getBukuId(this.props.navigation.getParam('id_buku'))
    )
    this.setState({
      books: this.props.buku
    })
    let self = this
    imageUrl = this.state.books.listBuku.gmb_buku
    await colorsFromUrl(imageUrl, (err, colors) => {
      if (!err) {
        self.setState({ color: colors.averageColor })
      }
    })
  }

  render () {
    const { books } = this.state
    const list = books.listBuku
    console.log(`cucoooookk`, list)
    return (
      <>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 16,
                paddingVertical: 8
              }}
            >
              <IconButton
                icon='navigate-before'
                color={this.state.color == "#fff" ? this.state.color == "#000" : this.state.color}
                size={30}
                onPress={() => this.props.navigation.goBack()}
                style={{ position: 'absolute' }}
              />

              <StatusBar
                backgroundColor={this.state.color}
                barStyle='dark-content'
              />
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 16,
                  marginTop: 35
                }}
              >
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'column' }}>
                    <InfoBuku info='Judul' isi={list ? list.nama_buku : ''} />
                    <InfoBuku
                      info='Penulis'
                      isi={list ? list.penulis_buku : ''}
                    />
                    <InfoBuku
                      info='Lokasi Buku'
                      isi={list ? list.lokasi_buku : ''}
                    />
                    <InfoBuku
                      info='Status Buku'
                      isi={list ? list.status_pinjam : ''}
                    />
                  </View>
                </View>
                <GambarBuku
                  gambar={
                    list
                      ? list.gmb_buku
                      : 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.thesocialmediahat.com%2Fsites%2Fdefault%2Ffiles%2Fdefault_profile_4.png&f=1'
                  }
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 16,
                height: '100%'
              }}
            >
              <Text style={{ fontSize: 17, marginBottom: 16 }}>
                {list ? list.ringkasan : ''}
              </Text>
            </View>
          </ScrollView>
        </View>
        <FAB
          label='Borrow Book'
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: this.state.color
          }}
          onPress={() => alert('diklik')}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    buku: state.buku
  }
}

export default connect(mapStateToProps)(DetailBook)

class InfoBuku extends Component {
  render () {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              marginRight: 8
            }}
          >
            {this.props.info}:
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 17
            }}
          >
            {this.props.isi}
          </Text>
        </View>
      </View>
    )
  }
}

class GambarBuku extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Card style={{ borderRadius: 8 }} elevation={4}>
          <Image
            style={{
              width: 150,
              height: 200,
              borderRadius: 8
            }}
            source={{
              uri: this.props.gambar
            }}
          />
        </Card>
      </View>
    )
  }
}
