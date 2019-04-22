import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Detail extends React.Component {
	render () {
		const {navigation} = this.props;
		const dnd = navigation.getParam('dnd', '');

		return (
			<View style={styles.container}>
				<Text style={styles.getStartedText}>Dungeons and Dragons Classes: {JSON.stringify(dnd)}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
});
