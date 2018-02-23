import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const {textStyle, viewStyle} = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#EEEEEE',
		justifyContent: 'center',
		alignItems: 'center',
		height: 70,
		paddingTop: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		color: '#393E46',
		fontSize: 26,
	}
};

export {Header};