// Using Debounce Helper Input
const debounce = (func, delay = 1000) => {
	let timeoutId;
	// return (arg1, arg2, arg3, ...) => {
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			// func(arg1, arg2, arg3, ...);
			func.apply(null, args);
		}, delay);
	};
};
// const onInput = (event) => {
// 	fetchData(event.target.value);
// };

// Normal Input
// let timeoutId;
// const onInput = (event) => {
// 	if (timeoutId) {
// 		clearTimeout(timeoutId);
// 	}
// 	timeoutId = setTimeout(() => {
// 		fetchData(event.target.value);
// 	}, 1000);
// };
