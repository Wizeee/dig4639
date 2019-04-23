import React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { createStackNavigator } from 'react-navigation';


export default class Detail extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const passedImage = this.props.navigation.getParam("roleImage", "defaultValue");
    const passedTitle = this.props.navigation.getParam("roleTitle", "defaultValue");
    const passedInfo = this.props.navigation.getParam("roleInfo", "defaultValue");
    return (
    <ImageBackground source={require('../assets/images/dungeons.jpg')} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Image source={passedImage} style={styles.image}/>
          <Text style={styles.imageTitle}>{passedTitle}</Text>
          <Text style={styles.imageAuthor}>{passedInfo}</Text>
          <Button title="Back" onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </ImageBackground>

    );
   }
  }

const styles = StyleSheet.create({
  imageTitle: {
    fontSize: 30,
  },
  imageAuthor: {
    fontSize:15,
    padding:10,
  },
  image:{
    marginTop:25,
    width:200,
    height:200,
  },
  container: {
    flex: 1,
    //justifyContent:'center',
    alignItems: 'center',
    //marginHorizontal: 10,
  },
});
