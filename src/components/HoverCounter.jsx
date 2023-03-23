import React from 'react';
import withCounter from './hoc/withCounter';


const HoverCounter = (props) => {
	const {count,incrementCount} = props;
	return (
		<>
			<h1 onMouseOver={incrementCount}>Clicked {count} Times</h1>
		</>
	)
}

export default withCounter(HoverCounter);