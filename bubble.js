// bubble sort with an existing array 
function bubbleSort(arr) {
    // nested loop
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if (arr[j] > arr[j+1]){
                // swapping positions in the array
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;