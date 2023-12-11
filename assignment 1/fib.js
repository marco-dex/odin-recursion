function fibs(num){
    let arr = [0,1]
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr

}

function fibsRec(num) {
    // Base Conditions
    if (num === 0) {
        return []
    }
    if (num === 1) {
        return [0]
    }

    if (num === 2) {
        return [0,1]
    }

    let arr = fibsRec(num - 1); 

    arr.push(arr[arr.length - 1] + arr[arr.length -2]); 

    return arr;
}
