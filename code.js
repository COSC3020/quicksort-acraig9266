function quicksort(array) {
    var high = array.length - 1;
    var low = 0;


    for (count = 0; count < array.length; count *= 2) {
        sortHelp(array, low, high)
        // Now figure out the new high and or pivots
    }

    return array;
}

function sortHelp(arr, lo, hi) {
    if (lo >= hi) {
        return;
    }
    piv = lo;

    for (i = lo + 1; i <= hi; i++) {
        if (array[i] < array[lo]) {
            swap(array[++piv], array[i]);
        }
    }
    swap(arr[lo], arr[piv]);
    return;
}
