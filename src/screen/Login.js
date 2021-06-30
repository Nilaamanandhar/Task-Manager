import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  Button,
  TouchableHighlight,
  ActivityIndicator,
  Alert,
} from 'react-native';
import welcomeImage from '../assests/image/welcome.jpg';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      username: '',
      password: '',
      auth: [
        {username: 'developer', password: 'developer'},
        {username: 'webpoint', password: 'webpoint'},
      ],
    };
  }

  login = () => {
    if (this.state.username != '' && this.state.password != '') {
      let i = 0;
      this.state.auth.map((data, index) => {
        if (
          data.username == this.state.username &&
          data.password == this.state.password
        ) {
          this.props.navigation.navigate('main');
        } else {
          i++;
        }
      });
      if (this.state.auth.length === i) {
        Alert.alert('username or password is incorrect');
      }
    } else {
      Alert.alert('username or password is empty');
    }
    this.setState({login: false});
  };
  render() {
    return (
      <ImageBackground source={welcomeImage} style={{flex: 1}}>
        <View style={styles.loginContainer}>
          <Text style={styles.logintxt}>log in</Text>
          <View style={styles.loginFieldContainer}>
            <TextInput
              style={styles.loginField}
              value={this.state.username}
              onChangeText={username => this.setState({username})}
              placeholder="User Name"
              placeholderTextColor="white"
              underlineColorAndroid="transparent"></TextInput>
            <TextInput
              style={styles.loginField}
              value={this.state.password}
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
              placeholder="Password"
              placeholderTextColor="white"
              underlineColorAndroid="transparent"></TextInput>
            <TouchableHighlight onPress={this.login} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Text style={styles.hint}>username: developer </Text>
            <Text style={styles.hint}>password: developer </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  hint: {
    marginTop: 0,
    color: 'white',
    fontSize: 20,
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    zIndex: 10,
  },

  logintxt: {
    color: 'white',
    fontSize: 25,
    fontWeight: '500',
    marginTop: 15,
    opacity: 0.5,
  },
  loginField: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: '2%',
    borderColor: '#ededed',
  },
  field: {
    display: 'flex',
    flexDirection: 'row',
  },
  loginButton: {
    marginLeft: '35%',
    marginTop: 10,
    backgroundColor: '#E91E63',
    width: '25%',
    height: '20%',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  loginFieldContainer: {
    width: '80%',
  },
});
