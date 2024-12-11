# Plagiarism Acknowledgement
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.


# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The complexity is $\Theta$(nlog(n)). The main Quicksort function contains nested loops that run log(n) times in all cases for the outer loop and the inner loop calls the sortHelp function in each iteration. The inner loop calls sortHelp a constant number of times each time we go through the outer loop. This means we get log(n) * c * n which results in log(n) * n or $\Theta$(nlog(n)).
