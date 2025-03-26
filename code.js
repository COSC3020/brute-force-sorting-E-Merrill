function permutationSort(arr) {
    if(sortCheck(arr)) {return 0;}  //No need to permute if already sorted
    count = 0;
    permute(arr, 0, arr.length - 1);
    return count;
}

function permute(arr, left, right){
    if (left === right){    //Reached the end of a permutation (base case)
        count++;
        if(sortCheck(arr)){return true} //See if this permutation is sorted; if so, end recursive calls
        return false;                   //Otherwise keep going
    }

    //Finding every permutation of the array;

    for (let j = left; j <= right; j++){
        swap(arr, left, j);

        //If the function call is true, the sorted permutation was found
        //So need to check in order to stop all possible calls
        //And exit the function
        if(permute(arr, left + 1, right))  {return true;}
        swap(arr, left, j);
    }
    return false;
}

//Swapping two elements of the array

function swap(arr, index1, index2){
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

//Check if the array is sorted or not

function sortCheck(arr){
    for (let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}
