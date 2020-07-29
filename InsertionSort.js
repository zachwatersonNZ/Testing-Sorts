/*
Recursive Insertion Sort
*/

function Insertion(array, result = []) {
  if (array.length === 0) {
    return result;
  } else {
  	//pick every first item from unordered list
    let item = array.shift(),
      idx = result.length;

    function GetIdx(item, result, i = 0) {
      if (item <= result[i]) {
        idx = i;
        return;
      } else if (result.length < i) {
        return;
      } else {
        i += 1;
        GetIdx(item, result, i);
      }
    }

    GetIdx(item, result);

    //slice insert and concat 
    let left = result.slice(0, idx),
      right = result.slice(idx, result.length);
    right.unshift(item);
    result = [...left, ...right];

    //visualize execution
    console.log(
      "SORTED: ",
      result.join(" "),
      " = ",
      array.join(" "),
      " :UNSORTED"
    );
    return Insertion(array, result);
  }
}