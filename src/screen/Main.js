import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight } from 'react-native'
import moment from 'moment'
import Note from '../Component/Note'
import { connect } from "react-redux";
import {addToDoNotes} from '../redux/action/addToDoAction'
class Main extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  noteArray: [],
                  noteText: '',
                  editedId: '',
                  isEditable: false
            }
      }
      componentDidMount=()=>{
            console.log("notes from redux",this.props.toDoNotes.todoNotes)
            this.setState({noteArray:this.props.toDoNotes.todoNotes})
      }
      changeHandler = (noteText) => {
            this.setState({ noteText: noteText })
      }
      addNote = () => {
            if (this.state.noteText !== '') {
                  let dates = moment().format('YYYY-MM-DD HH:mm:ss')
                  if (this.state.isEditable) {
                        let editedNote = { dates: dates, note: this.state.noteText }
                        this.state.noteArray.map((data, index) => {
                              if (parseInt(this.state.editedId) === index) {
                                    this.state.noteArray.splice(index, 1, editedNote)
                              }
                        })
                        this.setState({ isEditable: false, noteText: '' })

                        this.props.addToDoNotes(this.state.noteArray)

                  } else {
                        let newAddedNotes = [...this.state.noteArray,{ dates: dates, note: this.state.noteText }]
                        this.props.addToDoNotes(newAddedNotes)
                        this.setState({ noteArray: [...this.state.noteArray, { dates: dates, note: this.state.noteText }] })
                        this.setState({ noteText: '' })
                  }
            } else {
                  setTimeout(() => { alert("enter the note to add") }, 1000)
            }


      }
      deleteNote(key) {
            let newArray = [];
            newArray = this.state.noteArray.filter((data, index) => {
                  if (key !== index) {
                        return this.state.noteArray
                  }
            })
            this.setState({ noteArray: newArray })
            this.props.addToDoNotes(newArray)
      }
      editNote(key) {
            this.setState({ editedId: key, isEditable: true })
            this.state.noteArray.map((data, index) => {
                  if (index === key) {
                        this.setState({ noteText: data.note })
                  }
            })
      }

      render() {
            let notes = this.state.noteArray.map((val, key) => {
                  return <Note
                        key={key}
                        keyval={key}
                        value={val}
                        deleteMethod={() => this.deleteNote(key)}
                        editMethod={() => this.editNote(key)} />
            })


            return (
                  <View style={styles.container}>
                        <View style={styles.header}>
                              <Text style={styles.headerText}>To Do App</Text>
                        </View>
                        <ScrollView style={styles.scrollContainer}>
                              {notes}
                        </ScrollView>
                        <TouchableHighlight onPress={this.addNote} style={styles.addButton}>
                              <Text style={styles.addButtonText}>+</Text>
                        </TouchableHighlight>
                        <View style={styles.footer}>
                              <TextInput style={styles.textInput}
                                    id="note"
                                    value={this.state.noteText}
                                    onChangeText={(noteText) => this.changeHandler(noteText)}
                                    placeholder=" Add Notes Here"
                                    placeholderTextColor="white"
                                    underlineColorAndroid="transparent"
                              >
                              </TextInput>
                        </View>
                  </View>
            )
      }

}

const styles = StyleSheet.create({
      container: {
            flex: 1
      },
      header: {
            backgroundColor: '#E91E63',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomWidth: 10,
            borderBottomColor: '#ddd'
      },
      headerText: {
            color: 'white',
            fontSize: 18,
            padding: 26
      },
      scrollContainer: {
            flex: 1,
            marginBottom: 100
      },
      footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10
      },
      textInput: {
            alignSelf: 'stretch',
            color: '#fff',
            padding: 20,
            backgroundColor: '#252525',
            borderTopWidth: 2,
            borderTopColor: '#ededed'
      },

      addButton: {
            position: 'absolute',
            right: 20,
            bottom: 90,
            backgroundColor: '#E91E63',
            width: 90,
            height: 90,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 8
      },
      addButtonText: {
            color: '#fff',
            fontSize: 24
      }
})
const mapActionToProps = dispatch => ({
      addToDoNotes: (payload) => dispatch(addToDoNotes(payload)),
    });

const mapStateToProps = state => ({
      toDoNotes: state.toDoNotes
      
    });
    
    export default connect(mapStateToProps,mapActionToProps)(Main);