export const interpose = (list, seperator) => 
	list
		.reduce((accumulatedList, currentValue) => [...accumulatedList, currentValue, seperator], [])
		.slice(0, -1);
