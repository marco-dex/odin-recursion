/*  Merge Sort Algorithm 
1. Take an array 
2. Split the array in half
3. sort the left half
4. sort the right half 
5. merge
*/

function mergeSort(array){
    if (array.length <= 1) {
        return array
    }
    const middle = Math.round(array.length/2);

    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left),mergeSort(right)); 

}

function merge(left, right){
    let merged = []; 
    let leftIndex = 0; 
    let rightIndex = 0; 

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }

        
    }
    return merged;
}


const arr = [1,2,4,3,5,6]
const sorted = mergeSort(arr)
console.log(sorted)