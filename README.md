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

In the best case for this sorting algorithm, the array is already sorted, and nothing needs to be done (other than the check if it is sorted.) As such, the complexity for the best case of this brute-force sort is constant time. 

In the worst case for this sorting algorithm, which would be reverse sorted, nearly every single permutation needs to be tried in order to properly sort the array. Since it is permutations being tried, the number of permutations found would end up being the complexity. The number of permutations for a given array would be n!, where n is the number of elements. Thus, the complexity of the brute-force sort in the worst case scenario would be n!  (which is quite bad.)

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
