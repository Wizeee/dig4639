import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Detail } from '../screens/Detail';
import { createStackNavigator } from 'react-navigation';


const classes = { rows: [
  {key: 'role1',
  image: require('../assets/images/barbarian.png'),
  title: 'Barbarian',
  info:'A fierce warrior of primitive background who can enter a battle rage.',
  type:'Primal'},

 {key:'role2',
  image: require('../assets/images/bard.jpg'),
  title:'Bard',
  info:'An inspiring magician whose power echoes the music of creation.',
  type:'Arcane'},

  {key:'role3',
   image: require('../assets/images/cleric.png'),
   title:'Cleric',
   info:'A priestly champion who wields divine magic in service of a higher power.',
   type:'Divine'},

   {key:'role4',
    image: require('../assets/images/druid.png'),
    title:'Druid',
    info:'A priest of the Old Faith, wielding the powers of nature—moonlight and plant growth, fire and lightning—and adopting animal forms.',
    type:'Primal'},

    {key:'role5',
     image: require('../assets/images/fighter.jpg'),
     title:'Fighter',
     info:'A master of martial combat, skilled with a variety of weapons and armor.',
     type:'Martial'},

     {key:'role6',
      image: require('../assets/images/monk.png'),
      title:'Monk',
      info:'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.',
      type:'Psionic'},

      {key:'role7',
       image: require('../assets/images/paladin.jpg'),
       title:'Paladin',
       info:'A holy warrior bound to a sacred oath.',
       type:'Divine'},

       {key:'role8',
        image: require('../assets/images/ranger.png'),
        title:'Ranger',
        info:'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.',
        type:'Martial'},

        {key:'role9',
         image: require('../assets/images/rogue.jpg'),
         title:'Rogue',
         info:'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
         type:'Martial'},

         {key:'role10',
          image: require('../assets/images/sorcerer.jpg'),
          title:'Sorcerer',
          info:'A spellcaster who draws on inherent magic from a gift or bloodline.',
          type:'Arcane'},

          {key:'role11',
           image: require('../assets/images/warlock.png'),
           title:'Warlock',
           info:'A wielder of magic that is derived from a bargain with an extraplanar entity.',
           type:'Martial'},

           {key:'role12',
            image: require('../assets/images/wizard.jpg'),
            title:'Wizard',
            info:'A scholarly magic-user capable of manipulating the structures of reality.',
            type:'Arcane'},
]
};


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _gotoScreen = (key) => {
    console.log("Going to " + key);
}


state = roles;

//filter
  buttonFilterAll = () => {
    this.setState(roles);
  };
  buttonFilterA = () => {
    this.setState({ rows: this.state.rows.filter((row) => row.type  === 'Divine')});
  };
  buttonFilterB = () => {
    this.setState({ rows: this.state.rows.filter((row) => row.type  === 'Martial')});
  };
  buttonFilterC = () => {
    this.setState({ rows: this.state.rows.filter((row) => row.type  === 'Arcane')});
  };
  buttonFilterD = () => {
    this.setState({ rows: this.state.rows.filter((row) => row.type  === 'Psionic')});
  };
  buttonFilterE = () => {
    this.setState({ rows: this.state.rows.filter((row) => row.type  === 'Primal')});
  };

  render() {
    const data = this.state.rows;

    const {navigate} = this.props.navigation;
     return (
       <ImageBackground source={require('../assets/images/dungeons.jpg')} style={{width: '100%', height: '100%'}}>
       <View style={styles.container}>
         <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
           <View style={styles.getStartedContainer}>
             <Text style={styles.getStartedText}>Dungeons and Dragon Classes</Text>
             <Text style={styles.getStartedText}>Classes in 4th edition</Text>
             <Text style={styles.getStartedText}>Organized by Powersource</Text>
             <View style={{margin:3}}>
              <Button title="All" onPress={this.buttonFilterAll}/>
             </View>
             <View style={{margin:3}}>
              <Button title="Divine" onPress={this.buttonFilterA}/>
             </View>
             <View style={{margin:3}}>
              <Button title="Martial" onPress={this.buttonFilterB}/>
             </View>
             <View style={{margin:3}}>
              <Button title="Arcane" onPress={this.buttonFilterC}/>
             </View>
             <View style={{margin:3}}>
              <Button title="Psionic" onPress={this.buttonFilterD}/>
             </View>

             <FlatList
               style={styles.container}
               data={data}
               keyExtractor={this._keyExtractor}
               renderItem={({item}) => <TouchableOpacity onPress={() => navigate("Detail",{ roleName:item.key, roleImage:item.image, roleTitle:item.title, roleInfo:item.info })}>
                <Text style={styles.imageTitle}>{item.title}</Text>
                <Image source={item.image} style={{width:200,height:200}} />
               </TouchableOpacity>}
             />
           </View>
         </ScrollView>
         </View>
        </ImageBackground>

     );
   }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTitle:{
    textAlign: 'center',
    fontSize: 18,
    paddingTop:25,
  },
  imageAuthor:{
    textAlign: 'center',
    marginBottom: 20,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 30,
    color: 'rgba(96,100,109, 1)',
    //lineHeight: 24,
    textAlign: 'center',
    paddingBottom:15,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
