import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Card, CardSection, Spinner } from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = { loggedIn: false };

	componentWillMount() {
		const firebaseConfig = {
	    apiKey: "AIzaSyCNSTT1Okiisiz8P9tGeHn0ewDoJZLJcdc",
	    authDomain: "authentication-app-native.firebaseapp.com",
	    databaseURL: "https://authentication-app-native.firebaseio.com",
	    projectId: "authentication-app-native",
	    storageBucket: "authentication-app-native.appspot.com",
	    messagingSenderId: "536721439510"
	  };
	  firebase.initializeApp(firebaseConfig);

	  firebase.auth().onAuthStateChanged((user) => {
	  	if(user) {
	  		this.setState({ loggedIn: true });
	  	} else {
	  		this.setState({ loggedIn: false });
	  	}
	  });
	}

	renderContent() {

		switch (this.state.loggedIn) {
			case false:
				return <LoginForm />;
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
						</CardSection>
					</Card>
				);
			default:
				return <Spinner size='large' />
		}
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication App'/>
				{this.renderContent()}
			</View>
		)
	}
}

export default App;