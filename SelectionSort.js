/*
Recursive Selection Sort
*/

function Selection(array, list = []) {
  if (array.length === 0) {
    return list;
  } else {

    let pointer = array[0],
      idx = 0;

    function Swap(_array, i = 0) {
      if (_array.length < i) {
        return _array;
      } else {
        if (pointer > _array[i]) {
          pointer = _array[i];
          idx = i;
        }
        i += 1;
        return Swap(_array, i);
      }
    }

    //get lowest item from unordered list and append to new ordered list
    array = Swap(array, idx);
    list.push(pointer);
    array.splice(idx, 1);

    //visualize execution
    console.log(
      "SORTED: ",
      list.join(" "),
      " = ",
      array.join(" "),
      " :UNSORTED"
    );

    return Selection(array, list);
  }
}