import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
export default class Main extends Component {
      render() {
            return (
                  <View key={this.props.keyval} style={styles.note}>
                        {this.props.value !== "" ?
                              <View>
                                    <Text style={styles.noteText}>{this.props.value.dates}</Text>
                                    <Text style={styles.noteText}>{this.props.value.note}</Text>
                              </View>
                              : ""}
                        <TouchableOpacity onPress={this.props.editMethod} style={styles.noteEdit}><Text style={styles.noteDeleteText}>Edit</Text></TouchableOpacity>

                        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}><Text style={styles.noteDeleteText}>Del</Text></TouchableOpacity>
                  </View>
            )
      }
}
const styles = StyleSheet.create({
      note: {
            position: 'relative',
            padding: 20,
            paddingRight: 100,
            borderBottomWidth: 2,
            borderBottomColor: '#ededed'
      },
      noteText: {
            paddingLeft: 20,
            borderLeftColor: '#E91E63',
            borderLeftColor: 10
      },
      noteEdit: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: 10,
            right: 55,
            bottom: 10,
            padding: 10,
            backgroundColor: 'green'
      },
      noteDelete: {
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            top: 10,
            right: 10,
            bottom: 10,
            padding: 10,
            backgroundColor: '#2980b9'
      },
      noteDeleteText: {
            color: 'white'
      }


})
