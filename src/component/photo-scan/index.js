import React from 'react';

import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Alert
} from 'react-native';

import pickImage from '../../lib/pickImage';
import uploadImage from '../../lib/uploadImage';

export default class PhotoScan extends React.Component {
  constructor(props){
    super(props);
    this.state = {};

    this.handleSelect = this.handleSelect.bind(this)
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSelect() {
    pickImage()
    .then( res => {
      this.setState({imgSource: res.source, data: res.data})
      console.log('this.state.imgSource.uri: ', this.state.imgSource.uri)
    })
    .catch(err => console.log('User didnt choose a photo'));
  }

  handleUpload() {
    if(!this.state.imgSource) {
      return Alert.alert('No image selected!')
    }
    uploadImage(this.state.data)
    .then(res => {
      console.log('success: ', res.data)
      this.setState({extractedText: res.data})
    })
    .catch(err => console.log('error: ', err))
  }


  render() {
    //this is a silly toggle that will be refactored
    let img = this.state.imgSource == null ? null :
    <Image
      source={this.state.imgSource}
      style={{height: 200, width: 200}}
    />

    //so is this
    let textArea = this.state.extractedText == null ? null :
    <Text style={{height: 200, width: 200, borderColor: 'gray', borderWidth: 1}} >
      {this.state.extractedText}
    </Text>


    return(
      <View style={styles.container}>
        {img}
        {textArea}
        <Button
          onPress={this.handleSelect}
          accessabilityLabel="Press to take a picture"
          title="Choose an Image"
        />
        <Button
          onPress={this.handleUpload}
          accessabilityLabel="Press to upload the image"
          title="Upload Image"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  touchable: {
    color: 'blue',
    width: 50,
    height: 50,
  }
});
