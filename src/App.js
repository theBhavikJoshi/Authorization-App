import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common/index';
import LoginForm from './components/LoginForm';

class App extends Component {

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
	}

	render() {
		return (
			<View>
				<Header headerText='Authentication App'/>
				<LoginForm />
			</View>
		)
	}
}

export default App;