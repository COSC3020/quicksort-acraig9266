function quicksort(array) {
    for (let count = 1; count <= array.length; count = count * 2) {
        high = Math.max((Math.ceil((array.length) / count) - 1), 1);
        newHigh = high;
        low = 0;
        for (let i = 0; i <= count; i++) {
            sortHelp(array, low, newHigh);
            low = newHigh;
            newHigh = Math.min(array.length, newHigh + high);
            console.log("low", low);
            console.log("newHigh: ", newHigh);
        }
    }
    return array;
}

function sortHelp(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    piv = lo;

    for (let i = lo + 1; i <= hi; i++) {
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
