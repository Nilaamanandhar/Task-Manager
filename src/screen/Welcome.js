import React, { Component } from 'react'
import { View, Text, ImageBackground, Button, StyleSheet } from 'react-native';
import welcomeImage from '../assests/image/welcome.jpg'
export default class Welcome extends Component {
      render() {
            return (
                  <ImageBackground source={welcomeImage} style={styles.welcomeContainer}>
                        <View style={styles.welcomeTextContainer}>
                              <Text style={styles.welcomeText}>WELCOME TO TODO NOTE</Text>
                              <Button title="Login" onPress={() => this.props.navigation.navigate('login')} />
                        </View>
                  </ImageBackground>
            )
      }
}

const styles = StyleSheet.create({
      welcomeContainer: {
            flex: 1,
            width: null,
            height: null,
            justifyContent: "space-between"
      },
      welcomeTextContainer: {
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,128,128,0.7)'
      },
      welcomeText: {
            color: 'white',
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 20,
            textAlign: "center"
      }

})
