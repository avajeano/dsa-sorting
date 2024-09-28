// helper function takes in two sorted arrays 
// returns a new array with alle elements in sort order
function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        }   else {
            results.push(arr2[j]);
            j++;
        }
    }
    // only one of the below while loops will run
    // push all remaining values from other array
    while (i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// recursive
// split array into halves until you have arrays that have length of 0 or 1 
function mergeSort(arr) {
    // base case
    if (arr.length <= 1) return arr; 

    // finding the mid point in the array
    const mid = Math.floor(arr.length/2);
    
    const left = mergeSort(arr.slice(0, mid));

    //mid point onwards
    const right = mergeSort(arr.slice(mid));

    // using our above helper function
    return merge(left, right)
}

module.exports = { merge, mergeSort};