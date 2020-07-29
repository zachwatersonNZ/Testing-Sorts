/*
* Recursive Merge Sort Javascript
*/
function Merge(list) {

	/*Division*/

	let mid = Math.floor(list.length / 2);
	let left = list.slice(0, mid);
	let right = list.slice(mid, list.length);

	if (list.length !== 1) {
		let rChunk = Merge(left);
		let lChunk = Merge(right);

		function Bubble(array, count = 0) {
			if (count >= array.length) {
				return array;
			} else {
				let item = array[count];
				function Swap(_array, idx = 0) {
					if (idx >= _array.length) {
						return _array;
					} else {
						if (item <= _array[idx]) {
							let temp = _array[idx];
							_array[idx] = _array[count];
							_array[count] = temp;
						}
						idx += 1;
						return Swap(_array, idx);
					}
				}
				array = Swap(array);
				count += 1;
				return Bubble(array, count);
			}
		}

		//visualize merge and sorting
		console.log("LEFT", ...lChunk, "|", ...rChunk, "RIGHT");
		console.log("MERGED AND SORTED", Bubble([...rChunk, ...lChunk]));

		//merge and sort
		return Bubble([...rChunk, ...lChunk]);
	} else if (list.length === 1) {
		return list;
	}
}