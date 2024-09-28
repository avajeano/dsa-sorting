function insertionSort(arr) {
    for (let i = 1; i < arr.length; i ++) {
        let currentValue = arr[i];
        
        // j = i -1 (index just before the current value)
        // moving backwards through the array
        let j = i -1;

        while (j > -1 && arr[j] > currentValue) {
            // shifts index j one position to the right
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentValue;
    }
    return arr;
}

module.exports = insertionSort;