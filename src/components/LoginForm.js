import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common/index';

class LoginForm extends Component {
	state = { email: '', password: '' };
	render() {
		return(
			<Card>
				<CardSection>
					<Input value={this.state.email} onChangeText={email => this.setState({ email })} label='Email' placeholder='user@domain.com'/>
				</CardSection>
				<CardSection>
					<Input placeholder='password' value={this.state.password} onChangeText={password => this.setState({ password })} label='Password' secureTextEntry />
				</CardSection>
				<CardSection>
					<Button>
						Log In
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm;