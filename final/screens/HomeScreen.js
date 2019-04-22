import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _gotoScreen = (key) => {
    console.log("Going to " + key);
  }

  render() {
    const {navigate} = this.props.navigation;
    const music = require('../assets/images/bard.jpg');
    const light = require('../assets/images/paladin.jpg');
    const magic = require('../assets/images/wizard.jpg');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Dungeons and Dragon Classes:</Text>
            <FlatList
             data={[{key: 'Bard',image: music},
                    {key: 'Paladin',image: light},
                    {key: 'Wizard',image: magic}]}
             keyExtractor={this._keyExtractor}
              renderItem={({item}) => <TouchableOpacity onPress={(event) => { this.props.navigation.navigate('Details', {dnd: item.key}) }}>
                <Image source={item.image} style={{width:250,height:250}} />
              </TouchableOpacity>}
            />
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
});
