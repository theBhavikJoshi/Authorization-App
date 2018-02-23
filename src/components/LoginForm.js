import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common/index';

class LoginForm extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ email: '', password: '', loading: false, error: '' })
			})
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(() => {
						this.setState({ email: '', password: '', loading: false, error: '' })
					})
					.catch(() => {
						this.setState({ error: 'Authentication Failed', loading: false })
					});
			});
	}

	renderButton() {
		if(this.state.loading) {
			return <Spinner size='small' />
		}

		return(
			<Button onPress={this.onButtonPress.bind(this)}>
				Log In
			</Button>
		)
	}

	render() {
		return(
			<Card>
				<CardSection>
					<Input value={this.state.email} onChangeText={email => this.setState({ email })} label='Email' placeholder='user@domain.com'/>
				</CardSection>
				<CardSection>
					<Input placeholder='password' value={this.state.password} onChangeText={password => this.setState({ password })} label='Password' secureTextEntry />
				</CardSection>
				<Text style={styles.errorStyle}>{this.state.error}</Text>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		)
	}
}

const styles = {
	errorStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;