function quicksort(array) {
    var high = array.length;
    console.log(high);
    var low = 0;

    for (count = array.length; count > 1; count = Math.ceil(count / 2)) {
        high = Math.ceil((array.length) / count);
        newHigh = high;
        low = 0; 
        console.log(high);
        for (sortNum = 1; sortNum <= array.length / count; sortNum++) {
            console.log('Call Count: ', sortNum);
            sortHelp(array, low, newHigh);
            low = high + 1;
            newHigh = high * sortNum;
        }
    }
    return array;
}

function sortHelp(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    piv = lo;

    for (i = lo + 1; i <= hi; i++) {
        if (arr[i] < arr[lo]) {
            swap(arr, ++piv, i);
        }
    }
    swap(arr, lo, piv);
    return;
}

function swap(arr, a, b) {
    tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

console.log(quicksort([2, 7, 6, 8, 4, 3]));
