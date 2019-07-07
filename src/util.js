/**
 * Interpose: is for inserting separator between list's element
 *
 * @param {Array} list - any list is fine
 * @param {*} separator - element we want to insert
 * @return {Array} - list with already interposed with separator
 *
 * @example
 *
 *     interpose([1, 2, 3], 0) -> [1, 0, 2, 0, 3]
 */
export const interpose = (list, separator) => 
	list
		.reduce((accumulatedList, currentValue) => [...accumulatedList, currentValue, separator], [])
		.slice(0, -1);
