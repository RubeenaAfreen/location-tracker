import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Header} from 'react-native-elements'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header
        backgroundColor={'lightgrey'}
        centerComponent={{
          text: 'Location Tracking App',
          style: { color: 'black', fontSize: 19 },
        }}
      />
        <ImageBackground
          source={require('../assets/mapbg.jpg')}
          style={styles.bgImg}>
          <Text> Tracking App </Text>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('MapScreen')}>
            <Text style={styles.routeText}>View Location</Text>
          </TouchableOpacity>
           <TouchableOpacity
            style={[styles.routeCard, {marginTop:20}]}
            onPress={() => this.props.navigation.navigate('settingScreen')}>
            <Text style={styles.routeText}>Settings</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  bgImg: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    marginTop:100,
    backgroundColor: 'lightgrey',
  width: 200,
    height:40,
    alignItems:"center",
    alignSelf:'center',
    borderRadius:5,
    
    
    
  },
  routeText: {
    fontSize: 25,
    color: 'black',
  },
});
