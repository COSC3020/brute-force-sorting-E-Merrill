# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.


### Best Case

In the best case for this sorting algorithm, the array is already sorted (all previous elements are <= the next elements in the array,) and nothing else after the check needs to be done. As such, the complexity for the best case of this brute-force sort is constant time. 

In the worst case for this sorting algorithm, every single permutation needs to be tried in order to properly sort the array. Each permutation is found by swapping the first element with itself, then the second with itself, and so on until the second to last element is reached. The array is then checked, and the permutations continue. The second to last and last elements are then swapped, and if that isn't sorted, you go back an element (third to last,) and repeat the process, but with more potential swaps. Essentially, the first element has n possible swaps (including itself) to be tried, and each element after has one less to be tried. For an array of length 4, the first element has 4 swaps, the second has 3, the third has 2, and the final element has 1. The number of permutations would branch out to 1 x 2 x 3 x 4 = 24. Essentially, this is like having a for loop that iterates the entire array, then having one nested that iterates through the array length minus one, and another nested loop of length minus 2, and so on until a loop that runs once is reached. All of these multiply out to n!, n being array length. This is essentially what this permutation sort is doing in the worst case, which means that complexity in the worst case is $\theta (n!)$

Implementing this sort by trying random permutations (rather than systematically,) and without memory would have a more or less unknowable complexity. On one hand, it could constantly miss the actual sorted array, even doing duplicates (assuming they are allowed in this scenario,) going for a very long time, which gives a complexity similar to n! (like this implementation,) $n^n$, or even unbounded. However, it can also be very efficient due to the way random works; it could happen to get the sorted permutation the first try several times in a row, which would be a constant time complexity. Results would be hard (or impossible) to replicate with a random sort, so the complexity cannot really be set in stone. In the average case, it would likely be similar to the systematic variant, having a complexity close to n!, since it is still going through all of the different possible permutations of the array. 

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
