import React from 'react';
import withCounter from './hoc/withCounter';

const ClickCounter = (props) => {
	const {count,incrementCount} = props;
	return (
		<>
			<button type="button" onClick={incrementCount}>Clicked {count} Times</button>
		</>
	)
}

export default withCounter(ClickCounter);