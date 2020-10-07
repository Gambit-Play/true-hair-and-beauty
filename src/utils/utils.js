export function isEven(number) {
	return number % 2 === 0;
}

// Convert an array to an object
export const convertArrayToObject = (array, key) => {
	const initialValue = {};

	return array.reduce((obj, item) => {
		return {
			...obj,
			[item[key]]: item,
		};
	}, initialValue);
};

// Change elements position
export function move(array, fromPosition, toPosition) {
	if (fromPosition < 0) {
		fromPosition = array.length + fromPosition;
	}
	if (toPosition < 0) {
		toPosition = array.length + toPosition;
	}

	let removed = array.splice(fromPosition, 1);

	array.splice(toPosition, 0, removed[0]);

	return array;
}
