/*
Rescursive Bubble Sort
*/

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

		//swap item in index "idx" and index 'count'
		array = Swap(array);
		count += 1;
		return Bubble(array, count);
	}
}
