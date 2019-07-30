import React, { Component } from 'react'
import { View, StatusBar, ScrollView, Image } from 'react-native'
import { Text, IconButton, Colors, Card, FAB } from 'react-native-paper'

export default class DetailBook extends Component {
  render () {
    return (
      <View>
        <ScrollView>
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
              color='black'
              size={30}
              onPress={() => this.props.navigation.goBack()}
              style={{ position: 'absolute' }}
            />

            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <View style={{ flexDirection: 'row', marginBottom: 16, marginTop: 35 }}>
              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'column' }}>
                  <InfoBuku info='Judul' isi='World Whisperer' />
                  <InfoBuku info='Penulis' isi='Janet Jenskin' />
                  <InfoBuku info='Lokasi Buku' isi='F12' />
                  <InfoBuku info='Status Buku' isi='Tersedia' />
                </View>
              </View>
              <GambarBuku gambar='https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fdamonza.com%2Fwp-content%2Fuploads%2Fportfolio%2Ffiction%2FWorld-Whisperer.jpg&f=1' />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              paddingHorizontal: 16
            }}
          >
            <Text style={{ fontSize: 17, marginBottom: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus scelerisque eleifend donec pretium vulputate. Id volutpat
              lacus laoreet non curabitur gravida. Fames ac turpis egestas
              maecenas pharetra convallis. Id semper risus in hendrerit gravida
              rutrum quisque non. Lacus laoreet non curabitur gravida. Amet
              facilisis magna etiam tempor orci eu. Tristique nulla aliquet enim
              tortor at auctor urna nunc id. Dui faucibus in ornare quam. Netus
              et malesuada fames ac turpis egestas. Molestie at elementum eu
              facilisis sed odio morbi quis commodo. Sed nisi lacus sed viverra
              tellus in. Vitae congue mauris rhoncus aenean vel elit scelerisque
              mauris pellentesque. Consectetur adipiscing elit pellentesque
              habitant morbi tristique. Dui accumsan sit amet nulla facilisi
              morbi. Dignissim sodales ut eu sem integer vitae justo. Nunc id
              cursus metus aliquam eleifend mi. Aliquam ut porttitor leo a. Ac
              auctor augue mauris augue neque gravida in fermentum et. Elit
              pellentesque habitant morbi tristique senectus et netus et. Sit
              amet aliquam id diam maecenas ultricies mi. Non pulvinar neque
              laoreet suspendisse interdum consectetur libero id. Nunc non
              blandit massa enim nec dui nunc mattis. Eget gravida cum sociis
              natoque penatibus et. Mi sit amet mauris commodo quis imperdiet
              massa tincidunt. Lobortis elementum nibh tellus molestie nunc non
              blandit massa enim. Dignissim cras tincidunt lobortis feugiat
              vivamus. Pellentesque dignissim enim sit amet venenatis urna
              cursus eget nunc. Leo urna molestie at elementum eu facilisis sed
              odio. Est ante in nibh mauris cursus mattis molestie. Vitae congue
              mauris rhoncus aenean. Facilisis sed odio morbi quis commodo.
            </Text>
          </View>
        </ScrollView>
        <FAB
          label='Borrow Book'
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: 'black'
          }}
          onPress={() => alert('diklik')}
        />
        {/* <FAB
          style={{
            position: 'absolute',
            margin: 16,
            left: 0,
            top: 0,
            backgroundColor: 'white'
          }}
          small
          icon='navigate-before'
          onPress={() => alert('diklik')}
        /> */}
      </View>
    )
  }
}

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
